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
    (e._sentryDebugIds[t] = 'a33b5679-9138-4664-849b-3c2064f747e3'),
    (e._sentryDebugIdIdentifier = 'sentry-dbid-a33b5679-9138-4664-849b-3c2064f747e3'));
} catch (e) {}
('use strict');
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7923],
  {
    43779: function (e, t, r) {
      r.d(t, {
        us: function () {
          return Q;
        },
        iA: function () {
          return n;
        },
        Ei: function () {
          return en;
        },
        yL: function () {
          return O;
        },
        KL: function () {
          return eu;
        },
        uq: function () {
          return J;
        },
        _5: function () {
          return ec;
        },
      });
      var n = {};
      r.r(n),
        r.d(n, {
          iA: function () {
            return C;
          },
          ny: function () {
            return Z;
          },
          p3: function () {
            return S;
          },
          Td: function () {
            return D;
          },
          hr: function () {
            return z;
          },
          Tr: function () {
            return V;
          },
          zC: function () {
            return w;
          },
        });
      var o = r(78286),
        i = r(58258),
        l = r(54655),
        a = r(38819),
        c = r(73478),
        u = r(55412),
        d = r(23567);
      let s = (0, a.Z)('table', { target: 'e1bk3cde0' })(
          'border-collapse:separate;border-spacing:0;width:100%;'
        ),
        p = (0, a.Z)('tr', { target: 'e1bk3cde1' })(
          'position:relative;white-space:nowrap;td > a > div{background-color:',
          (e) => {
            let { theme: t } = e;
            return t.colors.background.bloc;
          },
          ';transition:background-color 0.5s ease-out;}:hover > td > a > div{background-color:',
          (e) => {
            let { theme: t } = e;
            return t.colors.components.tableRowHover;
          },
          ';transition:background-color 0.05s ease-in;}'
        ),
        g = (0, a.Z)('td', { target: 'e1bk3cde2' })(
          'width:',
          (e) => {
            let { width: t } = e;
            return t || 'auto';
          },
          ';&:first-of-type .td-content{border-radius:',
          (e) => {
            let { theme: t } = e;
            return t.spacing.xs;
          },
          ' 0 0\n      ',
          (e) => {
            let { theme: t } = e;
            return t.spacing.xs;
          },
          ';}&:last-of-type .td-content{border-radius:0 ',
          (e) => {
            let { theme: t } = e;
            return t.spacing.xs;
          },
          ' ',
          (e) => {
            let { theme: t } = e;
            return t.spacing.xs;
          },
          ' 0;}'
        ),
        h = (0, a.Z)('div', { target: 'e1bk3cde3' })(
          'display:flex;align-items:center;box-sizing:border-box;margin:0;height:100%;margin-top:10px;padding:0 ',
          (e) => {
            let { theme: t } = e;
            return t.padding.s;
          },
          ';height:60px;white-space:nowrap;align-content:center;background-color:',
          (e) => {
            let { theme: t } = e;
            return t.colors.background.bloc;
          },
          ';'
        );
      function f() {
        let e = (0, u._)(['\n      position: sticky;\n      top: calc(64px + 10px);\n    ']);
        return (
          (f = function () {
            return e;
          }),
          e
        );
      }
      let b = (e) => {
          let { children: t } = e;
          return (0, o.tZ)(Z.Provider, { value: 'large', children: (0, o.tZ)(s, { children: t }) });
        },
        v = (0, a.Z)('thead', { target: 'e1kgv7tm0' })(
          (e) => {
            let { position: t } = e;
            return 'sticky' === t && (0, d.iv)(f());
          },
          '  z-index:',
          (e) => {
            let { theme: t } = e;
            return t.zIndex.base.default;
          },
          ';:before,:after{content:"";position:absolute;top:-10px;width:100%;height:10px;background-color:',
          (e) => {
            let { theme: t } = e;
            return t.colors.background.base;
          },
          ';}'
        ),
        m = (0, a.Z)('th', { target: 'e1kgv7tm1' })(
          'position:relative;height:40px;text-align:start;white-space:nowrap;padding:0 ',
          (e) => {
            let { theme: t } = e;
            return t.padding.s;
          },
          ';background-color:',
          (e) => {
            let { theme: t } = e;
            return t.colors.background.bloc;
          },
          ';',
          (e) => {
            let { theme: t } = e;
            return l.IED.body.xxxs.regular(t, { color: 'text.body' });
          },
          ';&:first-of-type{border-radius:',
          (e) => {
            let { theme: t } = e;
            return t.spacing.xs;
          },
          ' 0 0\n      ',
          (e) => {
            let { theme: t } = e;
            return t.spacing.xs;
          },
          ';}&:last-of-type{border-radius:0 ',
          (e) => {
            let { theme: t } = e;
            return t.spacing.xs;
          },
          ' ',
          (e) => {
            let { theme: t } = e;
            return t.spacing.xs;
          },
          ' 0;}:before,:after{content:"";position:absolute;display:block;top:0;left:0;width:100%;height:100%;padding-bottom:10px;background-color:',
          (e) => {
            let { theme: t } = e;
            return t.colors.background.base;
          },
          ';z-index:',
          (e) => {
            let { theme: t } = e;
            return t.zIndex.hidden;
          },
          ';}'
        ),
        y = (0, a.Z)('tbody', { target: 'e1kgv7tm2' })(),
        x = (e) => {
          let { children: t, ...r } = e;
          return i.Children.toArray(t)[0].props.href
            ? (0, o.tZ)(p, { ...r, children: t })
            : (0, o.tZ)('tr', { ...r, children: t });
        },
        k = (e) => {
          let { children: t, href: r, width: n, prefetch: i = !0, ...l } = e;
          return (0, o.tZ)(g, {
            ...l,
            width: n,
            children: r
              ? (0, o.tZ)(c.h, {
                  href: r,
                  prefetch: i,
                  children: (0, o.tZ)(h, { className: 'td-content', children: t }),
                })
              : (0, o.tZ)(h, { className: 'td-content', children: t }),
          });
        },
        Z = (0, i.createContext)('large'),
        w = () => (0, i.useContext)(Z),
        C = (e) => {
          let { tableVariant: t = 'large', children: r, ...n } = e;
          return (0, o.tZ)(Z.Provider, {
            value: t,
            children:
              'compact' === t || 'compact-filter' === t
                ? (0, o.tZ)(P, { tableVariant: t, ...n, children: r })
                : (0, o.tZ)(b, { ...n, children: r }),
          });
        },
        z = (e) => {
          let { children: t, position: r = 'default' } = e,
            n = w();
          return 'compact' === n || 'compact-filter' === n
            ? (0, o.tZ)(R, { children: t })
            : (0, o.tZ)(v, { position: r, children: t });
        },
        S = (e) => {
          let { children: t } = e,
            r = w();
          return 'compact' === r || 'compact-filter' === r
            ? (0, o.tZ)(E, { tableVariant: r, children: t })
            : (0, o.tZ)(y, { children: t });
        },
        V = (e) => {
          let t = w();
          return 'compact' === t || 'compact-filter' === t
            ? (0, o.tZ)(_, { ...e })
            : (0, o.tZ)(x, { ...e });
        },
        D = (e) => {
          let { children: t, href: r, width: n, prefetch: i = !0 } = e,
            l = w();
          return 'compact' === l || 'compact-filter' === l
            ? (0, o.tZ)(q, { tableVariant: l, width: n, href: r, prefetch: i, children: t })
            : (0, o.tZ)(k, { href: r, width: n, prefetch: i, children: t });
        },
        M = (0, a.Z)('table', { target: 'ecrx3n00' })(
          'width:100%;border-collapse:separate;border-spacing:0 0;'
        ),
        I = (0, a.Z)('td', { target: 'ecrx3n01' })(
          'width:',
          (e) => {
            let { width: t } = e;
            return t || 'auto';
          },
          ';'
        ),
        T = (0, a.Z)('div', { target: 'ecrx3n02' })(
          'display:flex;align-items:center;box-sizing:border-box;border-top:1px solid ',
          (e) => {
            let { theme: t } = e;
            return t.colors.border.primary;
          },
          ';',
          (0, l.xJ_)('border-top-width'),
          ';padding:',
          (e) => {
            let { theme: t, tableVariant: r } = e;
            return 'compact-filter' === r
              ? ''.concat(t.spacing.xs, ' 40px ').concat(t.spacing.xs, ' 20px')
              : ''.concat(t.spacing.xs, ' 72px ').concat(t.spacing.xs, ' 20px');
          },
          ';height:60px;white-space:nowrap;align-content:center;'
        ),
        N = (0, a.Z)('tr', { target: 'ecrx3n03' })(
          'position:relative;white-space:nowrap;td > a > div{background-color:',
          (e) => {
            let { theme: t } = e;
            return t.colors.background.bloc;
          },
          ';transition:background-color 0.5s ease-out;}:hover > td > a > div{background-color:',
          (e) => {
            let { theme: t } = e;
            return t.colors.components.tableRowHover;
          },
          ';transition:background-color 0.05s ease-in;}'
        ),
        P = (e) => {
          let { children: t, tableVariant: r, ...n } = e;
          return (0, o.tZ)(Z.Provider, { value: r, children: (0, o.tZ)(M, { ...n, children: t }) });
        },
        R = (0, a.Z)('thead', { target: 'ekadpii0' })(),
        F = (0, a.Z)('th', { target: 'ekadpii1' })(
          'height:36px;text-align:start;white-space:nowrap;padding:',
          (e) => {
            let { theme: t, tableVariant: r } = e;
            return 'compact-filter' === r
              ? ''.concat(t.spacing.s, ' 72px ').concat(t.spacing.s, ' 20px')
              : '10px 72px 10px 20px';
          },
          ';background-color:',
          (e) => {
            let { theme: t } = e;
            return t.colors.background.bloc;
          },
          ';',
          (e) => {
            let { theme: t } = e;
            return l.IED.body.xxxs.regular(t, { color: 'text.secondary' });
          },
          ';',
          (e) => {
            let { tableVariant: t, theme: r } = e;
            return (
              'compact-filter' !== t &&
              '\n      &:first-of-type {\n        border-top-left-radius: '
                .concat(
                  r.borderRadius,
                  ';\n      }\n      &:last-of-type {\n        border-top-right-radius: '
                )
                .concat(r.borderRadius, ';\n      }\n    ')
            );
          }
        ),
        E = (0, a.Z)('tbody', { target: 'ekadpii2' })(
          'background-color:',
          (e) => {
            let { theme: t } = e;
            return t.colors.background.bloc;
          },
          ';tr:last-child td{&:first-of-type{border-bottom-left-radius:',
          (e) => {
            let { theme: t } = e;
            return t.borderRadius;
          },
          ';}&:last-of-type{border-bottom-right-radius:',
          (e) => {
            let { theme: t } = e;
            return t.borderRadius;
          },
          ';}}'
        ),
        _ = (e) => {
          let { children: t, ...r } = e;
          return i.Children.toArray(t)[0].props.href
            ? (0, o.tZ)(N, { ...r, children: t })
            : (0, o.tZ)('tr', { ...r, children: t });
        },
        q = (e) => {
          let {
            children: t,
            tableVariant: r = 'compact',
            width: n,
            href: i,
            prefetch: l = !0,
            ...a
          } = e;
          return i
            ? (0, o.tZ)(I, {
                ...a,
                width: n,
                children: (0, o.tZ)(c.h, {
                  href: i,
                  prefetch: l,
                  children: (0, o.tZ)(T, { tableVariant: r, className: 'td-content', children: t }),
                }),
              })
            : (0, o.tZ)(I, {
                ...a,
                width: n,
                children: (0, o.tZ)(T, { tableVariant: r, className: 'td-content', children: t }),
              });
        },
        A = (0, a.Z)(l.Kqy, { target: 'ek8xskd0' })(),
        B = (0, a.Z)(l.Kqy, { shouldForwardProp: (0, l.uhK)(['isSorted']), target: 'ek8xskd1' })(
          'width:20px;cursor:pointer;color:',
          (e) => {
            let { theme: t } = e;
            return t.colors.icon.secondary;
          },
          ';opacity:',
          (e) => {
            let { isSorted: t } = e;
            return t ? 1 : 0;
          },
          ';transition:color 150ms,opacity 150ms;',
          A,
          ':hover &{color:',
          (e) => {
            let { theme: t } = e;
            return t.colors.icon.primary;
          },
          ';opacity:1;}'
        ),
        j = (0, a.Z)(l.JO$, { target: 'ek8xskd2' })(
          'transform:rotate(90deg) translateY(-0.5px);&[data-is-sorted="asc"]{transform:rotate(-90deg);}'
        ),
        K = (e) => {
          let { children: t, ...r } = e,
            n = w();
          return 'compact' === n || 'compact-filter' === n
            ? (0, o.tZ)(F, { tableVariant: n, ...r, children: t })
            : (0, o.tZ)(m, { ...r, children: t });
        };
      var Q = (0, i.memo)((e) => {
          let {
              columnName: t,
              colSpan: r,
              className: n,
              children: a,
              isSorted: c = !1,
              isSortable: u = !0,
              onClick: d,
            } = e,
            s = (0, i.useMemo)(() => (t ? 'Sort by '.concat(t) : 'Sort'), [t]);
          return (0, o.tZ)(K, {
            className: n,
            colSpan: r,
            children: (0, o.BX)(A, {
              display: 'inline-flex',
              align: 'center',
              onClick: d,
              cursor: u ? 'pointer' : 'text',
              children: [
                a,
                u &&
                  (0, o.tZ)(l.ua7, {
                    content: s,
                    children: (0, o.tZ)(B, {
                      className: n,
                      align: 'center',
                      justify: 'center',
                      isSorted: c,
                      children: (0, o.tZ)(j, { icon: 'ArrowPlain20', 'data-is-sorted': c }),
                    }),
                  }),
              ],
            }),
          });
        }),
        G = r(55385);
      function J(e) {
        let { headerGroup: t, columnLabels: r } = e;
        return (0, o.tZ)(V, {
          children: t.headers.map((e) =>
            (0, o.tZ)(
              Q,
              {
                colSpan: e.colSpan,
                columnName: null == r ? void 0 : r[e.id],
                isSorted: e.column.getIsSorted(),
                isSortable: e.column.getCanSort(),
                onClick: () => {
                  e.column.getCanSort() && e.column.toggleSorting();
                },
                children: e.isPlaceholder
                  ? null
                  : (0, G.ie)(e.column.columnDef.header, e.getContext()),
              },
              e.id
            )
          ),
        });
      }
      function O(e) {
        let { row: t, skeletonRow: r, href: n, prefetch: i = !0, ...a } = e;
        return (0, o.BX)(V, {
          ...a,
          children: [
            r && r.map((e, t) => (0, o.tZ)(D, { children: e }, t)),
            t &&
              t
                .getVisibleCells()
                .map((e) =>
                  (0, o.tZ)(
                    D,
                    {
                      href: n,
                      prefetch: i,
                      children: (0, o.tZ)(l.xvT.Body.XS.Regular, {
                        children: (0, G.ie)(e.column.columnDef.cell, e.getContext()),
                      }),
                    },
                    e.id
                  )
                ),
          ],
        });
      }
      var X = r(84430);
      let L = (0, a.Z)('table', { target: 'eui5eny0' })(
          'width:100%;border-collapse:separate;border-spacing:0 0;'
        ),
        H = (0, a.Z)('thead', { target: 'eui5eny1' })(),
        Y = (0, a.Z)('th', { target: 'eui5eny2' })(
          'height:38px;text-align:start;white-space:nowrap;',
          (e) => {
            let { theme: t } = e;
            return l.IED.body.xxxs.regular(t, { color: 'text.secondary' });
          },
          ';position:relative;padding:0 0 0 ',
          (e) => {
            let { theme: t } = e;
            return t.padding.s;
          },
          ';border-bottom:1px solid ',
          (e) => {
            let { theme: t } = e;
            return t.colors.border.primary;
          },
          ';'
        ),
        $ = (0, a.Z)('td', { target: 'eui5eny3' })(),
        U = (0, a.Z)('div', { target: 'eui5eny4' })(
          'display:flex;align-items:center;box-sizing:border-box;',
          (0, l.xJ_)('border-top-width'),
          ';padding:',
          (e) => {
            let { theme: t } = e;
            return t.spacing.xs;
          },
          ' 0\n    ',
          (e) => {
            let { theme: t } = e;
            return t.spacing.xs;
          },
          ' ',
          (e) => {
            let { theme: t } = e;
            return t.padding.s;
          },
          ';white-space:nowrap;align-content:center;'
        ),
        W = (0, a.Z)('tbody', { target: 'eui5eny5' })(),
        ee = (0, a.Z)('tr', { target: 'eui5eny6' })('display:table;width:100%;table-layout:fixed;'),
        et = (e) => {
          let { children: t, ...r } = e;
          return (0, o.tZ)(ee, { ...r, children: t });
        },
        er = (e) => {
          let { children: t, ...r } = e;
          return (0, o.tZ)($, {
            ...r,
            children: (0, o.tZ)(U, { className: 'td-content', children: t }),
          });
        },
        en = {
          Root: (e) => {
            let { children: t } = e;
            return (0, o.tZ)(L, { children: t });
          },
          Thead: (e) => {
            let { children: t } = e;
            return (0, o.tZ)(H, { children: t });
          },
          Th: (e) => {
            let { children: t } = e;
            return (0, o.tZ)(Y, { children: t });
          },
          Tbody: (e) => {
            let { children: t } = e;
            return (0, o.tZ)(W, { children: t });
          },
          Tr: (e) => {
            let { children: t } = e;
            return (0, o.tZ)(et, { children: t });
          },
          Td: (e) => {
            let { children: t } = e;
            return (0, o.tZ)(er, { children: t });
          },
        },
        eo = (0, a.Z)(l.Kqy, {
          shouldForwardProp: (0, l.uhK)(['isSorted', 'isVisible']),
          target: 'ekf9ntb0',
        })(
          'width:20px;cursor:pointer;color:',
          (e) => {
            let { theme: t, isSorted: r } = e;
            return r ? t.colors.icon.secondary : t.colors.icon.interactive.disabled;
          },
          ';opacity:',
          (e) => {
            let { isVisible: t } = e;
            return t ? 1 : 0;
          },
          ';transition:color 150ms,opacity 150ms;&:hover{color:',
          (e) => {
            let { theme: t } = e;
            return t.colors.icon.primary;
          },
          ';opacity:1;}'
        ),
        ei = (0, a.Z)(l.JO$, { target: 'ekf9ntb1' })(
          'transform:rotate(90deg) translateY(-0.5px);&[data-is-sorted="asc"]{transform:rotate(-90deg);}'
        ),
        el = (e) => {
          let { children: t, ...r } = e;
          return (0, o.tZ)(en.Th, { ...r, children: t });
        };
      var ea = (0, i.memo)((e) => {
        let {
            columnName: t,
            colSpan: r,
            className: n,
            children: a,
            isSorted: c = !1,
            isSortable: u = !0,
            onClick: d,
          } = e,
          [s, p] = (0, i.useState)(!1),
          g = (0, i.useRef)(null),
          h = (0, i.useCallback)((e) => {
            g.current && p(g.current.contains(e.target));
          }, []),
          f = (0, X.y1)(h, 200);
        (0, i.useEffect)(
          () => (
            document.addEventListener('mousemove', f),
            () => document.removeEventListener('mousemove', f)
          ),
          [f]
        );
        let b = (0, i.useMemo)(() => (t ? 'Sort by '.concat(t) : 'Sort'), [t]);
        return (0, o.tZ)(el, {
          className: n,
          colSpan: r,
          children: (0, o.BX)(l.Kqy, {
            display: 'inline-flex',
            ref: g,
            align: 'center',
            children: [
              a,
              u &&
                (0, o.tZ)(l.ua7, {
                  content: b,
                  children: (0, o.tZ)(eo, {
                    className: n,
                    align: 'center',
                    justify: 'center',
                    isVisible: u && (s || !!c),
                    isSorted: c,
                    onClick: d,
                    children: (0, o.tZ)(ei, { icon: 'ArrowPlain20', 'data-is-sorted': c }),
                  }),
                }),
            ],
          }),
        });
      });
      function ec(e) {
        let { headerGroup: t, columnLabels: r } = e;
        return (0, o.tZ)(en.Tr, {
          children: t.headers.map((e) =>
            (0, o.tZ)(
              ea,
              {
                colSpan: e.colSpan,
                columnName: null == r ? void 0 : r[e.id],
                isSorted: e.column.getIsSorted(),
                isSortable: e.column.getCanSort(),
                onClick: () => {
                  e.column.getCanSort() && e.column.toggleSorting();
                },
                children: e.isPlaceholder
                  ? null
                  : (0, G.ie)(e.column.columnDef.header, e.getContext()),
              },
              e.id
            )
          ),
        });
      }
      function eu(e) {
        let { row: t, skeletonRow: r } = e;
        return (0, o.BX)(en.Tr, {
          children: [
            r && r.map((e, t) => (0, o.tZ)(en.Td, { children: e }, t)),
            t &&
              t
                .getVisibleCells()
                .map((e) =>
                  (0, o.tZ)(
                    en.Td,
                    {
                      children: (0, o.tZ)(l.xvT.Body.XS.Regular, {
                        children: (0, G.ie)(e.column.columnDef.cell, e.getContext()),
                      }),
                    },
                    e.id
                  )
                ),
          ],
        });
      }
    },
    33210: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return l;
        },
      });
      var n = r(78286);
      r(58258);
      var o = r(35047);
      let i = (e, t) => {
        if (e && t)
          for (let r in t)
            Array.isArray(e[r])
              ? (e[r] = e[r].map((e) => i(e, t[r])))
              : 'object' == typeof t[r]
                ? (e[r] = i(e[r], t[r]))
                : (0, o.isDefined)(e[r]) && (e[r] = BigInt(e[r]));
        return e;
      };
      var l = (e) => (t) => {
        let { queryResult: r, queryBigIntFieldMap: l } = t;
        if (
          (void 0 === r &&
            console.warn('withQueryResultConverter: queryResult is not provided to the component.'),
          (0, o.isDefined)(l) ||
            console.warn(
              'withQueryResultConverter: queryBigIntFieldMap is not provided. BigInt conversion will not be applied.'
            ),
          (0, o.isDefined)(r) && (0, o.isDefined)(l))
        ) {
          let o = i(r.data, l);
          return (0, n.tZ)(e, { ...t, queryResult: { ...r, data: o } });
        }
        return (0, n.tZ)(e, { ...t });
      };
    },
    16237: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return d;
        },
      });
      var n = r(58258),
        o = r(91289),
        i = r(16035);
      let l = i.z.object({
          columnVisibility: i.z.record(i.z.boolean()),
          sorting: i.z.array(i.z.object({ id: i.z.string(), desc: i.z.boolean() })),
          columnFilters: i.z.array(
            i.z.object({
              id: i.z.string(),
              value: i.z
                .unknown()
                .refine((e) => void 0 !== e, { message: 'Value must not be undefined' }),
            })
          ),
          version: i.z.number(),
        }),
        a = (e, t) => {
          let r = l.safeParse(e);
          return r.success && r.data.version === t.version ? r.data : null;
        },
        c = (e) => {
          let { pageKey: t, tableSettingsObjectKey: r, defaultTableSettings: n } = e;
          try {
            var i;
            let e = (0, o.e)();
            if (!e) return n;
            let l = null === (i = e[t]) || void 0 === i ? void 0 : i[r],
              c = a(l, n);
            if (c) return c;
            return n;
          } catch (e) {
            return n;
          }
        },
        u = (e) => {
          let {
            pageKey: t,
            tableSettingsObjectKey: r,
            defaultTableSettings: n,
            key: i,
            valueToStore: l,
          } = e;
          try {
            let e = {
              ...c({ pageKey: t, tableSettingsObjectKey: r, defaultTableSettings: n }),
              [i]: l,
            };
            (0, o.K)([t, r], e);
          } catch (e) {}
        };
      var d = (e) => {
        let { pageKey: t, tableSettingsObjectKey: r, defaultTableSettings: o } = e,
          [i, l] = (0, n.useState)(() =>
            c({ pageKey: t, tableSettingsObjectKey: r, defaultTableSettings: o })
          ),
          a = (0, n.useCallback)(
            (e, n) => {
              l((i) => {
                let l = n instanceof Function ? n(i[e]) : n;
                return (
                  u({
                    pageKey: t,
                    tableSettingsObjectKey: r,
                    defaultTableSettings: o,
                    key: e,
                    valueToStore: l,
                  }),
                  { ...i, [e]: l }
                );
              });
            },
            [t, r, o]
          ),
          d = (0, n.useCallback)(
            (e) => {
              a('columnVisibility', e);
            },
            [a]
          ),
          s = (0, n.useCallback)(
            (e) => {
              a('sorting', e);
            },
            [a]
          ),
          p = (0, n.useCallback)(
            (e) => {
              a('columnFilters', e);
            },
            [a]
          ),
          g = (0, n.useCallback)(() => {
            s(o.sorting);
          }, [null == o ? void 0 : o.sorting, s]);
        return {
          columnVisibility: i.columnVisibility,
          columnFilters: i.columnFilters,
          sorting: i.sorting,
          setColumnFilters: p,
          setColumnVisibility: d,
          setSorting: s,
          resetSorting: g,
        };
      };
    },
    55135: function (e, t, r) {
      r.d(t, {
        CT: function () {
          return o;
        },
        Mh: function () {
          return a;
        },
        qk: function () {
          return u;
        },
        ub: function () {
          return l;
        },
      });
      var n,
        o,
        i = r(16035);
      let l = 'morpho.userSettings',
        a = 1;
      ((n = o || (o = {})).Root = 'root'),
        (n.Earn = 'earn'),
        (n.Borrow = 'borrow'),
        (n.Explore = 'explore'),
        (n.Vault = 'vault'),
        (n.Market = 'market'),
        (n.Curator = 'curator');
      let c = i.z.object({
          version: i.z.coerce
            .number()
            .refine((e) => e === a, { message: 'Version must be exactly '.concat(a) }),
          root: i.z.record(i.z.unknown()).optional(),
          earn: i.z.record(i.z.unknown()).optional(),
          borrow: i.z.record(i.z.unknown()).optional(),
          explore: i.z.record(i.z.unknown()).optional(),
          vault: i.z.record(i.z.unknown()).optional(),
          market: i.z.record(i.z.unknown()).optional(),
          curator: i.z.record(i.z.unknown()).optional(),
        }),
        u = (e) => {
          try {
            let t = JSON.parse(e),
              r = c.safeParse(t);
            if (r.success) return r.data;
            return null;
          } catch (e) {
            return null;
          }
        };
    },
    91289: function (e, t, r) {
      r.d(t, {
        K: function () {
          return u;
        },
        e: function () {
          return c;
        },
      });
      var n = r(71938),
        o = r(75833),
        i = r(35047),
        l = r(55135);
      let a = { version: l.Mh },
        c = () => {
          let e = (0, n.getCookie)(l.ub),
            t = (0, l.qk)(e);
          return (0, i.isDefined)(e) && !(0, i.isDefined)(t) && (0, n.deleteCookie)(l.ub), t;
        },
        u = (e, t) => {
          let r = c() || a,
            i = (0, o.Z)(r, e, t);
          (0, n.setCookie)(l.ub, JSON.stringify(i));
        };
    },
    91767: function (e, t, r) {
      r.d(t, {
        a: function () {
          return o;
        },
      });
      var n = r(40252);
      let o = (e, t, r) => {
        let o = t && Math.ceil(t / e),
          i = (0, n.isFetched)(r) ? r + 1 : r;
        return o && i === o ? t % e : e;
      };
    },
    90836: function (e, t, r) {
      r.d(t, {
        h: function () {
          return o;
        },
      });
      var n = r(58258);
      let o = (e) => {
        let { defaultPageSize: t = 25 } = e,
          [r, o] = (0, n.useState)({ pageIndex: 0, pageSize: t });
        return {
          first: r.pageSize,
          skip: r.pageIndex * r.pageSize,
          pagination: r,
          onPaginationChange: o,
          reset: () => {
            o({ pageIndex: 0, pageSize: t });
          },
        };
      };
    },
    83669: function (e, t, r) {
      r.d(t, {
        s: function () {
          return a;
        },
      });
      var n = r(58258),
        o = r(56489),
        i = r(63658);
      let l = (e, t, r) => {
        let i = (0, o.Z)(r, e),
          l = (0, n.useRef)(null !== t && i);
        return l.current && !i && (l.current = !1), l.current;
      };
      function a(e) {
        let {
            queryDocument: t,
            queryVariables: r,
            serverQueryVariables: n,
            serverQueryResult: o,
            skipClientQuery: a,
          } = e,
          c = l(n, o, r),
          u = (0, i.aM)(t, { variables: r, skip: null != a ? a : c });
        return c ? Object.assign(u, o) : u;
      }
    },
    68866: function (e, t, r) {
      var n = r(58258),
        o = r(35047);
      t.Z = (e) => {
        let { pageInfo: t, filters: r, first: i, error: l } = e,
          [a, c] = (0, n.useState)(),
          u = (0, n.useMemo)(() => {
            if (!r) return;
            let { sorting: e, ...t } = r;
            return JSON.stringify(t);
          }, [r]),
          d = (0, n.useRef)(u);
        (0, n.useEffect)(() => {
          if (l) {
            c(void 0);
            return;
          }
          d.current !== u && (c(void 0), (d.current = u)),
            (0, o.isDefined)(null == t ? void 0 : t.countTotal) && c(t.countTotal);
        }, [u, t, l]);
        let s = (0, n.useMemo)(() => {
          if (void 0 !== i) return a ? Math.ceil(a / i) : a;
        }, [a, i]);
        return { totalItemsCount: a, pageCount: s };
      };
    },
    57892: function (e, t, r) {
      r.d(t, {
        Fj: function () {
          return d;
        },
        yM: function () {
          return l;
        },
      });
      var n = r(35047);
      let o = (e) => {
        let t,
          { simulationError: r, data: n, error: o, blockError: i, fetchError: l } = e;
        return r ? (t = r) : !n && o ? (t = o) : i ? (t = i) : l && (t = l), t;
      };
      var i = r(4205);
      let l = (e, t) => {
        var r, n, l, a;
        let {
          data: c,
          error: u,
          blockError: d,
          simulationError: s,
          isFetching: p,
          isPending: g,
        } = (0, i.f)(t);
        if (null == e || g) return { data: void 0, error: void 0, isFetching: !1, isPending: !0 };
        let h =
          null == c
            ? void 0
            : null === (r = c.tryGetMarket(e)) || void 0 === r
              ? void 0
              : r.accrueInterest(c.block.timestamp);
        return {
          data: h,
          error: o({
            simulationError: s,
            data: h,
            error: null == u ? void 0 : null === (n = u.markets) || void 0 === n ? void 0 : n[e],
            blockError: d,
          }),
          isFetching:
            null !==
              (a =
                !h &&
                (null == p ? void 0 : null === (l = p.markets) || void 0 === l ? void 0 : l[e])) &&
            void 0 !== a &&
            a,
          isPending: g,
        };
      };
      var a = r(58258),
        c = r(40252),
        u = r(12556);
      let d = (e, t) => {
        var r, l, d;
        let {
            data: s,
            error: p,
            blockError: g,
            simulationError: h,
            isFetching: f,
            isPending: b,
          } = (0, i.f)(t),
          v = null != e ? (null == s ? void 0 : s.tryGetVault(e)) : void 0,
          { accrualVault: m } = (0, u.HN)(
            (e) => {
              if (null == v) return { markets: [], positions: [], marketConfigs: [] };
              let t = v.withdrawQueue.map((e) => s.tryGetMarket(e)),
                r = v.withdrawQueue.map((e) => s.tryGetPosition(v.address, e)),
                n = v.withdrawQueue.map((e) => s.tryGetVaultMarketConfig(v.address, e));
              if (
                t.length === (null == e ? void 0 : e.markets.length) &&
                t.every((t, r) => t === (null == e ? void 0 : e.markets[r])) &&
                r.length === (null == e ? void 0 : e.positions.length) &&
                r.every((t, r) => t === (null == e ? void 0 : e.positions[r])) &&
                n.length === (null == e ? void 0 : e.marketConfigs.length) &&
                n.every((t, r) => t === (null == e ? void 0 : e.marketConfigs[r]))
              )
                return e;
              if (t.some((e) => null == e) || r.some((e) => null == e) || n.some((e) => null == e))
                return { markets: t, positions: r, marketConfigs: n };
              let o = v.withdrawQueue.map((e, o) => ({
                config: n[o],
                position: new c.AccrualPosition(r[o], t[o]),
              }));
              return {
                markets: t,
                positions: r,
                marketConfigs: n,
                accrualVault: new c.AccrualVault(v, o),
              };
            },
            [v, s]
          ),
          y = (0, a.useMemo)(
            () =>
              ((null == v ? void 0 : v.address) != null &&
                ((!v && (null == p ? void 0 : p.vaults)) ||
                  (null == v
                    ? void 0
                    : v.withdrawQueue
                        .map((e) => {
                          var t;
                          return (
                            !(null == s ? void 0 : s.tryGetMarket(e)) &&
                            (null == p
                              ? void 0
                              : null === (t = p.markets) || void 0 === t
                                ? void 0
                                : t[e])
                          );
                        })
                        .find(n.isDefined)) ||
                  (null == v
                    ? void 0
                    : v.withdrawQueue
                        .map((e) => {
                          var t, r;
                          return (
                            !(null == s ? void 0 : s.tryGetPosition(v.address, e)) &&
                            (null == p
                              ? void 0
                              : null === (r = p.positions) || void 0 === r
                                ? void 0
                                : null === (t = r[v.address]) || void 0 === t
                                  ? void 0
                                  : t[e])
                          );
                        })
                        .find(n.isDefined)) ||
                  (null == v
                    ? void 0
                    : v.withdrawQueue
                        .map((e) => {
                          var t, r;
                          return (
                            !(null == s ? void 0 : s.tryGetVaultMarketConfig(v.address, e)) &&
                            (null == p
                              ? void 0
                              : null === (r = p.vaultMarketConfigs) || void 0 === r
                                ? void 0
                                : null === (t = r[v.address]) || void 0 === t
                                  ? void 0
                                  : t[e])
                          );
                        })
                        .find(n.isDefined)))) ||
              void 0,
            [
              v,
              null == p ? void 0 : p.vaults,
              null == p ? void 0 : p.markets,
              null == p ? void 0 : p.positions,
              null == p ? void 0 : p.vaultMarketConfigs,
              s,
            ]
          );
        return null == e || b
          ? { data: void 0, error: void 0, isFetching: !1, isPending: !0 }
          : {
              data: m,
              error: o({
                simulationError: h,
                data: m,
                error: null == p ? void 0 : null === (r = p.vaults) || void 0 === r ? void 0 : r[e],
                blockError: g,
                fetchError: y,
              }),
              isFetching:
                null !==
                  (d =
                    !v &&
                    (null == f
                      ? void 0
                      : null === (l = f.vaults) || void 0 === l
                        ? void 0
                        : l[e])) &&
                void 0 !== d &&
                d,
              isPending: b,
            };
      };
    },
  },
]);
