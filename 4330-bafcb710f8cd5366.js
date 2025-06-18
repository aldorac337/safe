'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4330],
  {
    3452: (e, t, n) => {
      n.d(t, { A: () => s, j: () => i });
      var r = n(7620);
      function s(e, { threshold: t = 10 } = {}) {
        let [n, i] = (0, r.useState)(null);
        return (
          (0, r.useEffect)(() => {
            let n = e?.current;
            if (!n) return;
            let { width: r, height: s } = n.getBoundingClientRect();
            i([r, s]);
            let a = new ResizeObserver(([e]) => {
              let { width: n, height: r } = e?.contentRect,
                s = [n, r].map((e) => Math.round(e || 0));
              i((e) => (null == e ? s : s.some((n, r) => Math.abs(n - e[r]) > t) ? s : e));
            });
            return (
              a.observe(n),
              () => {
                a?.disconnect();
              }
            );
          }, [e, t]),
          n
        );
      }
      function i(e, t, n) {
        let [, i] = s(e) ?? [];
        (0, r.useEffect)(() => {
          null != i && n(t, i);
        }, [i, t, n]);
      }
    },
    14766: (e, t, n) => {
      n.d(t, { E: () => s });
      var r = n(54568);
      let s = (0, n(69879).A)(
        (0, r.jsx)('svg', {
          xmlns: 'http://www.w3.org/2000/svg',
          viewBox: '0 0 34 34',
          fill: 'currentColor',
          children: (0, r.jsx)('path', {
            d: 'M26.0015 6.9529C24.0021 6.03845 21.8787 5.37198 19.6623 5C19.3833 5.48048 19.0733 6.13144 18.8563 6.64292C16.4989 6.30193 14.1585 6.30193 11.8336 6.64292C11.6166 6.13144 11.2911 5.48048 11.0276 5C8.79575 5.37198 6.67235 6.03845 4.6869 6.9529C0.672601 12.8736 -0.41235 18.6548 0.130124 24.3585C2.79599 26.2959 5.36889 27.4739 7.89682 28.2489C8.51679 27.4119 9.07477 26.5129 9.55525 25.5675C8.64079 25.2265 7.77283 24.808 6.93587 24.312C7.15286 24.1571 7.36986 23.9866 7.57135 23.8161C12.6241 26.1255 18.0969 26.1255 23.0876 23.8161C23.3046 23.9866 23.5061 24.1571 23.7231 24.312C22.8861 24.808 22.0182 25.2265 21.1037 25.5675C21.5842 26.5129 22.1422 27.4119 22.7621 28.2489C25.2885 27.4739 27.8769 26.2959 30.5288 24.3585C31.1952 17.7559 29.4733 12.0212 26.0015 6.9529ZM10.2527 20.8402C8.73376 20.8402 7.49382 19.4608 7.49382 17.7714C7.49382 16.082 8.70276 14.7025 10.2527 14.7025C11.7871 14.7025 13.0425 16.082 13.0115 17.7714C13.0115 19.4608 11.7871 20.8402 10.2527 20.8402ZM20.4373 20.8402C18.9183 20.8402 17.6768 19.4608 17.6768 17.7714C17.6768 16.082 18.8873 14.7025 20.4373 14.7025C21.9717 14.7025 23.2271 16.082 23.1961 17.7714C23.1961 19.4608 21.9872 20.8402 20.4373 20.8402Z',
          }),
        }),
        'Discord'
      );
    },
    42374: (e, t, n) => {
      n.d(t, { u: () => x });
      var r = n(54568),
        s = n(27261),
        i = n.n(s),
        a = n(7005),
        l = n(45629),
        o = n(87401),
        d = n(81473);
      let c = { small: 'buttonS', medium: 'buttonM', large: 'headingMBold' },
        x = ({
          variant: e = 'contained',
          size: t = 'small',
          muiVariant: n,
          options: s,
          onChange: x,
          value: h,
          textVariant: C,
          hideInactiveBorders: g = !1,
          ...j
        }) =>
          (0, r.jsx)(l.A, {
            variant: n,
            textColor: 'inherit',
            value: h ?? !1,
            onChange: (e, t) => x?.(t),
            className: `${d.gH[e]} ${d.Mw[t]} ${g && d.yI}`,
            ...j,
            children: s.map(({ value: e, label: n, sx: s, ...l }) =>
              (0, r.jsx)(
                a.A,
                {
                  value: e,
                  component: i(),
                  label: (0, r.jsx)(o.A, { variant: C ?? c[t], children: n }),
                  sx: { ...s, whiteSpace: 'nowrap' },
                  ...l,
                },
                e
              )
            ),
          });
    },
    48631: (e, t, n) => {
      n.d(t, { Y: () => te, g: () => tt });
      var r = n(54568),
        s = n(62942),
        i = n(7620),
        a = n(31809),
        l = n(88411),
        o = n(44042),
        d = n(12078),
        c = n(64174),
        x = n(21802),
        h = n(89822),
        C = n(44876),
        g = n(55570),
        j = n(95004),
        p = n(47983),
        m = n(55329),
        u = n(36074);
      let f = ({ advancedMode: [e, t], label: n }) => {
        let s = (0, r.jsx)(m.A, {
          checked: e,
          onChange: () => t(!e),
          inputProps: { ...(!n && { 'aria-label': (0, u.t)`Advanced mode` }) },
          size: 'small',
        });
        return (0, r.jsx)(C.A, {
          display: 'inline-flex',
          alignItems: 'center',
          children: n ? (0, r.jsx)(p.A, { control: s, label: n, sx: { marginLeft: 2 } }) : s,
        });
      };
      var v = n(63797),
        A = n(1117),
        w = n(24388),
        b = n(2926),
        y = n(33431),
        k = n(15984),
        L = n(42822),
        M = n(34202),
        S = n(65209),
        I = n(72415),
        z = n(7834),
        T = n.n(z),
        B = n(27261),
        E = n.n(B),
        N = n(76653),
        D = n(49770),
        O = n(87401),
        P = n(84032);
      let F = ({ children: e }) =>
        (0, r.jsx)(O.A, {
          variant: 'headingXsBold',
          sx: (e) => ({
            position: 'sticky',
            top: 0,
            backgroundColor: 'background.paper',
            zIndex: 1,
            paddingBlockEnd: P.B.Spacing.xs,
            height: P.B.ButtonSize.sm,
            alignContent: 'end',
            borderBottom: `1px solid ${e.design.Layer[1].Outline}`,
          }),
          children: e,
        });
      var V = n(97912),
        H = n(61773);
      let R = ({ chain: { chainId: e, label: t, src: n }, size: s = 28 }) =>
        (0, r.jsx)(C.A, {
          component: 'span',
          alignItems: 'center',
          display: 'flex',
          'data-testid': `chain-icon-${e}`,
          children: (0, r.jsx)(H.default, { alt: t, src: n, loading: 'lazy', width: s, height: s }),
        });
      var Z = (function (e) {
        return (e.test = 'test'), (e.main = 'main'), e;
      })(Z || {});
      function $({ options: e, showTestnets: t, selectedNetwork: n }) {
        let a = (0, s.usePathname)() || '',
          [l, o] = (0, i.useState)(''),
          d = (0, i.useMemo)(
            () =>
              T()(
                e.filter((e) => e.label.toLocaleLowerCase().includes(l.toLocaleLowerCase())),
                (e) => (e.isTestnet ? 'test' : 'main')
              ),
            [e, l]
          ),
          c = { test: (0, u.t)`Test networks`, main: (0, u.t)`Main networks` },
          h = Object.entries(d);
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(V.L, {
              sx: { marginBottom: 2 },
              placeholder: (0, u.t)`Search Networks`,
              onSearch: o,
              name: 'chainName',
            }),
            (0, r.jsx)(C.A, {
              sx: { overflowY: 'auto', flexGrow: '1' },
              children: h.length
                ? h
                    .filter(([e]) => t || 'test' !== e)
                    .flatMap(([e, s]) =>
                      (0, r.jsxs)(
                        i.Fragment,
                        {
                          children: [
                            t && (0, r.jsx)(F, { children: c[e] }),
                            (0, r.jsx)(N.A, {
                              children: s.map((e) =>
                                (0, r.jsx)(
                                  D.D,
                                  {
                                    'data-testid': `menu-item-chain-${e.chainId}`,
                                    value: e.chainId,
                                    component: E(),
                                    href: (function (e, t) {
                                      let [, n = x.WU[0], , ...r] = e.split('/');
                                      return ['', n, t, ...r].join('/');
                                    })(a, e.networkId),
                                    isSelected: e.chainId == n?.chainId,
                                    icon: (0, r.jsx)(R, { chain: e, size: 36 }),
                                    label: e.label,
                                  },
                                  e.chainId
                                )
                              ),
                            }),
                          ],
                        },
                        e
                      )
                    )
                : (0, r.jsx)(w.A, {
                    variant: 'filled',
                    severity: 'info',
                    sx: { marginTop: 3 },
                    children: (0, r.jsx)(b.A, { children: (0, u.t)`No networks found` }),
                  }),
            }),
          ],
        });
      }
      let _ = ({ showTestnets: e, setShowTestnets: t }) =>
          (0, r.jsxs)(C.A, {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            children: [
              (0, r.jsx)(O.A, {
                variant: 'headingXsBold',
                display: 'inline-block',
                sx: { marginLeft: 4, marginRight: 2 },
                children: (0, u.t)`Show testnets`,
              }),
              (0, r.jsx)(m.A, {
                checked: e,
                onChange: () => t(!e),
                color: 'primary',
                inputProps: { 'aria-label': (0, u.t)`Show testnets` },
                size: 'small',
              }),
            ],
          }),
        W = ({ options: e, chainId: t, headerHeight: n }) => {
          let { connectState: s } = (0, l.w5)(),
            [a, , o, d] = (0, L.K)(),
            [x, h, C] = (0, L.K)(),
            [j, p, m] = (0, L.K)(),
            [f, z] = (0, c.xM)(),
            T = (0, i.useMemo)(() => e.find((e) => e.chainId === t) ?? e[0], [e, t]);
          (0, i.useEffect)(() => () => o(), [t, o]);
          let B = e.length > 1 ? d : h;
          return (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsxs)(y.A, {
                size: 'small',
                disabled: (0, l.VP)(s, l.Ej.SWITCH_NETWORK),
                onClick: B,
                'data-testid': 'btn-change-chain',
                children: [T && (0, r.jsx)(R, { chain: T }), e.length > 1 && (0, r.jsx)(A.A, {})],
              }),
              (0, r.jsx)(k.A, {
                open: x,
                onClose: C,
                anchorOrigin: { horizontal: 'center', vertical: 'top' },
                sx: { top: n },
                autoHideDuration: I.dw.Snackbar,
                children: (0, r.jsx)(g.A, {
                  sx: { justifyContent: 'end', marginTop: 4 },
                  children: (0, r.jsx)(w.A, {
                    variant: 'filled',
                    severity: 'warning',
                    'data-testid': 'alert-eth-only',
                    children: (0, r.jsx)(b.A, {
                      children: (0,
                      u.t)`This application is only available on the Ethereum Mainnet`,
                    }),
                  }),
                }),
              }),
              null != a &&
                (0, r.jsx)(M.y, {
                  open: a,
                  onClose: o,
                  title: j ? (0, u.t)`Select Network Settings` : (0, u.t)`Select Network`,
                  titleAction:
                    j &&
                    (0, r.jsx)(y.A, {
                      onClick: m,
                      size: 'extraSmall',
                      children: (0, r.jsx)(v.A, {}),
                    }),
                  footer: !j && (0, r.jsx)(S.l, { onClick: p }),
                  children: j
                    ? (0, r.jsx)(_, { showTestnets: f, setShowTestnets: z })
                    : (0, r.jsx)($, { showTestnets: f, options: e, selectedNetwork: T }),
                }),
            ],
          });
        };
      var Y = n(35018);
      let G = ({ theme: e, onChange: t }) =>
        Y.Z.map(({ type: n, Component: s }) =>
          (0, r.jsx)(
            y.A,
            {
              size: 'small',
              onClick: () => t(n),
              className: e === n ? 'current' : '',
              'data-testid': `theme-switcher-button-${n}`,
              children: (0, r.jsx)(s, { size: 18 }),
            },
            n
          )
        );
      var X = n(69228);
      let K = ({ theme: e, onChange: t, label: n }) => {
        let s = Y.Z.findIndex((t) => t.type === e),
          a = -1 === s ? 0 : s,
          l = (0, i.useCallback)(() => {
            let e = (a + 1) % Y.Z.length;
            t(Y.Z[e].type);
          }, [a, t]),
          { Component: o } = Y.Z[a];
        return (0, r.jsx)(X.m, {
          title: n,
          children: (0, r.jsx)(y.A, {
            size: 'small',
            onClick: l,
            sx: { padding: 2 },
            'data-testid': `theme-switcher-${e}`,
            children: (0, r.jsx)(o, { size: 28 }),
          }),
        });
      };
      var q = n(75911),
        J = n(33055),
        U = n(8230),
        Q = n(92797),
        ee = n(69879);
      let et = (0, ee.A)(
        (0, r.jsxs)('svg', {
          viewBox: '0 0 16 16',
          fill: 'none',
          xmlns: 'http://www.w3.org/2000/svg',
          children: [
            (0, r.jsx)('path', {
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              d: 'M5.70261 6.66667C5.03791 6.66667 4.53338 7.1625 4.53338 7.73333C4.53338 8.30417 5.03791 8.8 5.70261 8.8C5.98067 8.8 6.24054 8.98149 6.32773 9.25255C6.34438 9.30434 6.36393 9.35546 6.38635 9.40571C6.47234 9.59847 6.59896 9.77495 6.76004 9.92452C6.92115 10.0741 7.11348 10.1938 7.32649 10.2757C7.53952 10.3576 7.76845 10.4 8.00005 10.4C8.23165 10.4 8.46058 10.3576 8.67361 10.2757C8.88662 10.1938 9.07895 10.0741 9.24006 9.92452C9.40114 9.77495 9.52776 9.59847 9.61375 9.40571C9.63616 9.35546 9.65571 9.30434 9.67237 9.25255C9.75955 8.98149 10.0194 8.8 10.2975 8.8C10.9622 8.8 11.4667 8.30417 11.4667 7.73333C11.4667 7.1625 10.9622 6.66667 10.2975 6.66667C9.99293 6.66667 9.71829 6.77262 9.51214 6.94337C9.3773 7.05506 9.20665 7.09009 9.05989 7.08198C8.91278 7.07384 8.7523 7.02059 8.63086 6.90783C8.4667 6.7554 8.2401 6.66667 8.00005 6.66667C7.76 6.66667 7.5334 6.7554 7.36924 6.90783C7.2478 7.02059 7.08732 7.07384 6.94021 7.08198C6.79345 7.09009 6.6228 7.05506 6.48796 6.94337C6.28181 6.77262 6.00717 6.66667 5.70261 6.66667ZM10.2975 9.33333C10.2443 9.33333 10.1943 9.37163 10.1801 9.41585C10.1575 9.48604 10.1311 9.55518 10.1008 9.62298C9.98476 9.88317 9.81523 10.1182 9.60297 10.3153C9.39075 10.5124 9.13985 10.6678 8.86507 10.7735C8.59031 10.8791 8.29643 10.9333 8.00005 10.9333C7.70367 10.9333 7.40979 10.8791 7.13503 10.7735C6.86025 10.6678 6.60935 10.5124 6.39713 10.3153C6.18487 10.1182 6.01534 9.88317 5.89928 9.62298C5.86904 9.55518 5.84259 9.48604 5.82001 9.41585C5.80579 9.37163 5.75575 9.33333 5.70261 9.33333C4.78127 9.33333 4.00005 8.63526 4.00005 7.73333C4.00005 6.83141 4.78127 6.13333 5.70261 6.13333C6.13182 6.13333 6.52668 6.28292 6.82817 6.53264C6.83432 6.53773 6.86145 6.55218 6.91076 6.54946C6.95973 6.54675 6.99361 6.52882 7.00633 6.51701C7.27302 6.26936 7.63078 6.13333 8.00005 6.13333C8.36932 6.13333 8.72708 6.26936 8.99377 6.51701C9.00648 6.52882 9.04037 6.54675 9.08934 6.54946C9.13865 6.55218 9.16578 6.53773 9.17193 6.53264C9.47342 6.28292 9.86827 6.13333 10.2975 6.13333C11.2188 6.13333 12.0001 6.83141 12.0001 7.73333C12.0001 8.63526 11.2188 9.33333 10.2975 9.33333Z',
              fill: 'currentColor',
            }),
            (0, r.jsx)('path', {
              d: 'M6.27697 7.73333C6.27697 8.02789 6.01982 8.26667 5.70261 8.26667C5.3854 8.26667 5.12825 8.02789 5.12825 7.73333C5.12825 7.43878 5.3854 7.2 5.70261 7.2C6.01982 7.2 6.27697 7.43878 6.27697 7.73333Z',
              fill: 'currentColor',
            }),
            (0, r.jsx)('path', {
              d: 'M10.8718 7.73333C10.8718 8.02789 10.6147 8.26667 10.2975 8.26667C9.98028 8.26667 9.72313 8.02789 9.72313 7.73333C9.72313 7.43878 9.98028 7.2 10.2975 7.2C10.6147 7.2 10.8718 7.43878 10.8718 7.73333Z',
              fill: 'currentColor',
            }),
            (0, r.jsx)('path', {
              d: 'M8.53338 8.8C8.82793 8.8 9.06672 8.56122 9.06672 8.26667C9.06672 8.11939 8.94732 8 8.80005 8H7.20005C7.05277 8 6.93338 8.11939 6.93338 8.26667C6.93338 8.56122 7.17216 8.8 7.46672 8.8H7.73338V9.54542L7.727 9.54173C7.70042 9.42248 7.59398 9.33333 7.46672 9.33333C7.31944 9.33333 7.20005 9.45272 7.20005 9.6C7.20005 9.70894 7.24377 9.80193 7.30196 9.87217C7.35864 9.94058 7.43104 9.99076 7.50367 10.0271C7.57737 10.0639 7.65877 10.0903 7.74187 10.1075C7.8254 10.1248 7.91292 10.1333 8.00005 10.1333C8.08718 10.1333 8.1747 10.1248 8.25823 10.1075C8.34133 10.0903 8.42272 10.0639 8.49643 10.0271C8.56906 9.99076 8.64146 9.94058 8.69814 9.87217C8.75633 9.80193 8.80005 9.70894 8.80005 9.6C8.80005 9.45272 8.68066 9.33333 8.53338 9.33333C8.40612 9.33333 8.29968 9.42248 8.2731 9.54173L8.26672 9.54542V8.8H8.53338Z',
              fill: 'currentColor',
            }),
            (0, r.jsx)('path', {
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              d: 'M4.40005 0.866667C3.86672 0.155556 2.80005 0.155556 2.26672 0.866667C2.09362 1.09746 2.00005 1.37817 2.00005 1.66667V3.07323C2.00005 3.28133 2.0336 3.48807 2.09941 3.6855L2.22347 4.05769C2.37365 4.50822 2.70192 4.84264 3.09978 5.01598C2.67973 5.47451 2.41649 6.06963 2.37353 6.71399L1.99087 12.4538C1.86774 14.3008 3.3327 15.8667 5.18379 15.8667H10.8164C12.6675 15.8667 14.1324 14.3008 14.0093 12.4538L13.6267 6.71399C13.5837 6.06962 13.3204 5.47449 12.9004 5.01595C13.2982 4.8426 13.6265 4.5082 13.7766 4.05769L13.9007 3.6855C13.9665 3.48807 14 3.28133 14 3.07323V1.66667C14 1.37817 13.9065 1.09746 13.7334 0.866667C13.2 0.155556 12.1334 0.155556 11.6 0.866667L11.4634 1.04888C11.4093 1.12106 11.3617 1.19798 11.3214 1.27869L10.9079 2.10557C10.7493 2.42282 10.6667 2.77263 10.6667 3.12732V3.55302C10.6667 3.66145 10.6777 3.76821 10.6989 3.87197C9.82581 3.60369 8.91625 3.46667 8.00009 3.46667C7.0839 3.46667 6.17431 3.6037 5.30123 3.872C5.32239 3.76823 5.33338 3.66146 5.33338 3.55302V3.12732C5.33338 2.77263 5.2508 2.42282 5.09218 2.10557L4.67874 1.27869C4.63838 1.19798 4.59085 1.12106 4.53671 1.04888L4.40005 0.866667ZM12.2263 4.47783C12.116 4.41491 12.0005 4.35908 11.8804 4.31104L11.5911 4.1953C11.4284 4.02518 11.3334 3.79632 11.3334 3.55302V3.12732C11.3334 2.87613 11.3919 2.62839 11.5042 2.40372L11.9176 1.57683C11.9401 1.53189 11.9666 1.48907 11.9967 1.44888L12.1334 1.26667C12.4 0.911111 12.9334 0.911111 13.2 1.26667C13.2866 1.38206 13.3334 1.52242 13.3334 1.66667V3.07323C13.3334 3.20968 13.3114 3.34523 13.2682 3.47468L13.1442 3.84687C13.0841 4.0271 12.9751 4.17541 12.8376 4.28332C12.9012 4.01278 12.9334 3.73546 12.9334 3.45682V3.41202C12.9334 2.88045 12.8096 2.35618 12.5719 1.88074C12.506 1.74901 12.3459 1.69562 12.2141 1.76148C12.0824 1.82734 12.029 1.98752 12.0949 2.11925C12.2956 2.52064 12.4 2.96325 12.4 3.41202V3.45682C12.4 3.78792 12.3467 4.11686 12.242 4.43096L12.2263 4.47783ZM4.11978 4.31104L4.40899 4.19536C4.57168 4.02523 4.66672 3.79634 4.66672 3.55302V3.12732C4.66672 2.87613 4.60823 2.62839 4.4959 2.40372L4.08245 1.57683C4.05998 1.53189 4.03352 1.48907 4.00337 1.44888L3.86672 1.26667C3.60005 0.911111 3.06672 0.911111 2.80005 1.26667C2.7135 1.38206 2.66672 1.52242 2.66672 1.66667V3.07323C2.66672 3.20968 2.68871 3.34523 2.73186 3.47468L2.85593 3.84687C2.916 4.0271 3.02502 4.17541 3.1625 4.28332C3.09894 4.01278 3.06672 3.73546 3.06672 3.45682V3.41202C3.06672 2.88045 3.19048 2.35618 3.4282 1.88074C3.49407 1.74901 3.65424 1.69562 3.78597 1.76148C3.9177 1.82734 3.97109 1.98752 3.90523 2.11925C3.70453 2.52064 3.60005 2.96325 3.60005 3.41202V3.45682C3.60005 3.78792 3.65343 4.11686 3.75813 4.43096L3.77377 4.47787C3.88415 4.41493 3.99966 4.35909 4.11978 4.31104ZM8.00009 4.53333C6.96695 4.53333 5.94329 4.73047 4.98404 5.11417L4.51593 5.30142C3.90109 5.54735 3.48188 6.12421 3.43783 6.78494L3.05518 12.5248C2.97309 13.7561 3.94973 14.8 5.18379 14.8H10.8164C12.0505 14.8 13.0271 13.7561 12.945 12.5248L12.5623 6.78494C12.5183 6.12421 12.0991 5.54735 11.4843 5.30142L11.0161 5.11417C10.0569 4.73047 9.03324 4.53333 8.00009 4.53333Z',
              fill: 'currentColor',
            }),
          ],
        }),
        'Llama'
      );
      var en = n(17703),
        er = n(56120),
        es = n(33161),
        ei = n(51121),
        ea = n(31184),
        el = n(69452),
        eo = n(74043);
      let ed = {
          default: {
            border: (e) => `1px solid ${e.design.Layer.Highlight.Outline}`,
            backgroundColor: (e) => e.design.Layer[1].Fill,
          },
          highlight: {
            border: (e) => `1px solid ${e.design.Layer.Highlight.Outline}`,
            backgroundColor: (e) => e.design.Color.Primary[800],
          },
          alert: { backgroundColor: (e) => e.design.Layer.Feedback.Error },
          warning: { backgroundColor: (e) => e.design.Layer.Feedback.Warning },
        },
        ec = {
          default: 'textHighlight',
          alert: 'textPrimary',
          warning: 'textPrimary',
          highlight: 'textPrimary',
        },
        ex = { default: !1, alert: !0, warning: !1, highlight: !0 },
        { MaxWidth: eh, Spacing: eC } = P.B,
        eg = ({
          onClick: e,
          buttonText: t,
          children: n,
          severity: s = 'default',
          learnMoreUrl: i,
          color: a,
        }) =>
          (0, r.jsx)(es.A, {
            sx: {
              display: 'flex',
              gap: eC.md,
              alignSelf: 'stretch',
              paddingInline: eC.md,
              paddingBlock: eC.xs,
              alignItems: 'center',
              justifyContent: 'center',
              ...ed[s],
            },
            children: (0, r.jsxs)(ea.A, {
              direction: 'row',
              sx: { width: '100%', maxWidth: eh.banner },
              alignItems: 'center',
              justifyContent: 'space-between',
              children: [
                (0, r.jsx)(eo.iV, {
                  inverted: ex[s],
                  children: (0, r.jsx)(O.A, {
                    color: a ?? ec[s],
                    variant: 'headingXsBold',
                    children: n,
                  }),
                }),
                (0, r.jsx)(ea.A, {
                  direction: 'row',
                  alignItems: 'center',
                  justifyContent: 'start',
                  height: '100%',
                  children: (0, r.jsxs)(eo.Q_, {
                    to: '#000' === a && 'light',
                    children: [
                      i &&
                        (0, r.jsx)(er.A, {
                          component: ei.A,
                          href: i,
                          target: '_blank',
                          color: 'ghost',
                          variant: 'link',
                          endIcon: (0, r.jsx)(el.I, {}),
                          size: 'extraSmall',
                          children: (0, u.t)`Learn more`,
                        }),
                      e &&
                        (t
                          ? (0, r.jsx)(er.A, {
                              color: 'ghost',
                              onClick: e,
                              size: 'extraSmall',
                              children: t,
                            })
                          : (0, r.jsx)(y.A, {
                              onClick: e,
                              size: 'extraSmall',
                              children: (0, r.jsx)(en.A, {}),
                            })),
                    ],
                  }),
                }),
              ],
            }),
          });
      var ej = n(83897);
      let { Spacing: ep } = P.B,
        em = ({ onDismiss: e, color: t }) =>
          (0, r.jsxs)(eg, {
            severity: 'warning',
            onClick: e,
            color: t,
            learnMoreUrl: 'https://x.com/CurveFinance/status/1922664429646184482',
            children: [
              (0, r.jsxs)(ea.A, {
                direction: 'row',
                alignItems: 'end',
                gap: ep.xxs,
                children: [
                  (0, r.jsx)(ej.P, {}),
                  (0, r.jsx)(b.A, { children: (0, u.t)`Domain Change` }),
                ],
              }),
              (0, r.jsxs)(O.A, {
                variant: 'bodySRegular',
                sx: { textTransform: 'none' },
                children: [
                  (0, u.t)`Curve Finance has moved to a new domain`,
                  ': ',
                  (0, r.jsx)(ei.A, {
                    href: 'https://curve.finance',
                    target: '_blank',
                    color: t,
                    children: (0, u.t)`curve.finance`,
                  }),
                  '. ',
                  (0, u.t)`Always make sure you are on the right domain.`,
                  ' ',
                  (0, u.t)`Read the announcement `,
                  (0, r.jsx)(ei.A, {
                    href: 'https://x.com/CurveFinance/status/1922664429646184482',
                    target: '_blank',
                    color: t,
                    children: (0, u.t)`tweet`,
                  }),
                  '.',
                ],
              }),
            ],
          });
      var eu = n(38071),
        ef = n(40459);
      let { IconSize: ev } = P.B,
        eA = ef.env.NEXT_PUBLIC_MAINTENANCE_MESSAGE,
        ew = (0, i.forwardRef)(({ networkId: e, chainId: t }, n) => {
          let [s, i] = (0, c.iq)(),
            o = s && !eu.OC,
            [d, x] = (0, c.kA)(),
            h = !d && new Date() < new Date('2025-06-01'),
            { isConnected: g } = (0, J.F)(),
            { switchChain: j } = (0, U.R)(),
            { connectState: p } = (0, l.w5)(),
            m = (0, l.N6)(p, l.Ej.CONNECT_API),
            f = (0, Q.i)(),
            v = (g && f != t) || (0, l.N6)(p, l.Ej.SWITCH_NETWORK),
            A = 'dark' === (0, a.A)().palette.mode ? '#000' : 'textSecondary';
          return (0, r.jsxs)(C.A, {
            ref: n,
            children: [
              o &&
                (0, r.jsxs)(eg, {
                  onClick: () => i(!1),
                  buttonText: (0, u.t)`Disable Beta Mode`,
                  children: [
                    (0, r.jsx)(et, { sx: { width: ev.sm, height: ev.sm } }),
                    ' ',
                    (0, u.t)`BETA MODE ENABLED`,
                  ],
                }),
              eA && (0, r.jsx)(eg, { severity: 'warning', color: A, children: eA }),
              v &&
                (0, r.jsxs)(eg, {
                  severity: 'warning',
                  color: A,
                  buttonText: (0, u.t)`Change network`,
                  onClick: () => j({ chainId: t }),
                  children: [
                    (0, u.t)`Please switch your wallet's network to`,
                    ' ',
                    (0, r.jsx)('strong', { children: e }),
                    ' ',
                    (0, u.t)`to use Curve on`,
                    ' ',
                    (0, r.jsx)('strong', { children: e }),
                    '.',
                    ' ',
                  ],
                }),
              m &&
                (0, r.jsx)(eg, {
                  severity: 'alert',
                  children: (0,
                  u.t)`There is an issue connecting to the API. You can try switching your RPC or, if you are connected to a wallet, please switch to a different one.`,
                }),
              h && (0, r.jsx)(em, { onDismiss: () => x(!0), color: A }),
            ],
          });
        });
      ew.displayName = 'GlobalBanner';
      var eb = n(72074);
      let ey = ({ currentMenu: e, onChange: t, networkId: n }) =>
        (0, r.jsx)(C.A, {
          display: 'flex',
          alignItems: 'center',
          marginX: [2, 3, 4],
          gap: 2,
          children: Object.entries(x.VS).map(([s, { label: i, routes: a }]) =>
            (0, r.jsx)(
              er.A,
              {
                color: 'navigation',
                size: 'small',
                className: e === s ? 'current' : '',
                component: ei.A,
                onClick: () => t(s),
                href: (0, x.PE)(a[0].app, n),
                'data-testid': `app-link-${s}`,
                children: i,
              },
              s
            )
          ),
        });
      var ek = n(32678),
        eL = n(5254);
      let eM = (0, ek.Ay)('img')({ width: 30, marginRight: 8 }),
        eS = eL.jp.src,
        eI = { dex: 'Curve', lend: 'LLAMALEND', crvusd: 'crvUSD', dao: 'DAO' },
        ez = ({ currentMenu: e, isLite: t, sx: n }) =>
          (0, r.jsxs)(ei.A, {
            href: '/',
            sx: { display: 'flex', alignItems: 'center', textDecoration: 'none', ...n },
            children: [
              (0, r.jsx)(eM, { src: eS, alt: 'Curve', width: 30 }),
              (0, r.jsxs)(C.A, {
                display: 'inline-flex',
                flexDirection: 'column',
                children: [
                  (0, r.jsx)(O.A, {
                    variant: 'headingSBold',
                    sx: { '&': { lineHeight: '1.2rem' }, textTransform: 'none' },
                    color: 'textPrimary',
                    children: eI[e],
                  }),
                  'dex' === e
                    ? t &&
                      (0, r.jsx)(O.A, {
                        variant: 'bodyXsBold',
                        color: 'textTertiary',
                        children: 'Lite',
                      })
                    : (0, r.jsx)(O.A, {
                        variant: 'bodyXsRegular',
                        color: 'textTertiary',
                        children: 'powered by Curve',
                      }),
                ],
              }),
            ],
          }),
        eT = ({ appStats: e }) =>
          e?.map(({ label: e, value: t }) =>
            r.jsxs(
              C.A,
              {
                display: 'inline-flex',
                alignItems: 'baseline',
                children: [
                  r.jsxs(O.A, {
                    variant: 'bodyMRegular',
                    color: 'grey.600',
                    sx: { whiteSpace: 'nowrap' },
                    children: [e, ':'],
                  }),
                  '\xa0',
                  r.jsx(O.A, { variant: 'highlightM', color: 'text.primary', children: t || '-' }),
                ],
              },
              e
            )
          );
      var eB = n(42374);
      let eE = ({ pages: e }) =>
          (0, r.jsx)(eB.u, {
            value: (0, i.useMemo)(() => e.find(({ isActive: e }) => e)?.href, [e]),
            options: (0, i.useMemo)(
              () =>
                e.map(({ label: e, href: t, target: n }) => ({
                  label: e,
                  component: t.startsWith('http') ? ei.A : E(),
                  value: t,
                  href: t,
                  target: n,
                })),
              [e]
            ),
            variant: 'overlined',
            muiVariant: 'standard',
            hideInactiveBorders: !0,
            sx: { overflow: 'visible' },
          }),
        eN = ({
          mainNavRef: e,
          currentMenu: t,
          chainId: n,
          chains: s,
          globalAlertRef: a,
          height: o,
          pages: d,
          appStats: x,
          networkId: p,
          isLite: m = !1,
        }) => {
          let [v, A] = (0, i.useState)(t),
            w = (0, q.nv)((e) => e.theme),
            b = (0, q.nv)((e) => e.setTheme),
            y = (0, q.nv)((e) => e.isAdvancedMode),
            k = (0, q.nv)((e) => e.setAdvancedMode),
            [L] = (0, c.iq)();
          return (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsxs)(h.A, {
                color: 'transparent',
                ref: e,
                children: [
                  (0, r.jsx)(ew, { networkId: p, ref: a, chainId: n }),
                  (0, r.jsx)(j.A, {
                    sx: {
                      backgroundColor: (e) => e.design.Layer[1].Fill,
                      justifyContent: 'space-around',
                      paddingY: 3,
                    },
                    'data-testid': 'main-nav',
                    children: (0, r.jsxs)(g.A, {
                      children: [
                        (0, r.jsx)(ez, { isLite: m, currentMenu: t }),
                        (0, r.jsx)(ey, { currentMenu: v, onChange: A, networkId: p }),
                        (0, r.jsx)(C.A, { sx: { flexGrow: 1 } }),
                        (0, r.jsxs)(C.A, {
                          display: 'flex',
                          marginLeft: 2,
                          justifyContent: 'flex-end',
                          gap: 3,
                          alignItems: 'center',
                          children: [
                            L && !eu.OC
                              ? (0, r.jsx)(q.FD, {})
                              : (0, r.jsxs)(r.Fragment, {
                                  children: [
                                    (0, r.jsx)(f, {
                                      advancedMode: [y, k],
                                      label: (0, u.t)`Advanced`,
                                    }),
                                    (0, r.jsx)(K, { theme: w, onChange: b, label: (0, u.t)`Mode` }),
                                  ],
                                }),
                            (0, r.jsx)(W, { chainId: n, options: s, headerHeight: o }),
                            (0, r.jsx)(l.vz, {}),
                          ],
                        }),
                      ],
                    }),
                  }),
                  (0, r.jsx)(j.A, {
                    sx: {
                      backgroundColor: (e) => e.design.Layer[2].Fill,
                      justifyContent: 'space-around',
                      borderWidth: '1px 0',
                      borderColor: (e) => e.design.Layer[2].Outline,
                      borderStyle: 'solid',
                      boxSizing: 'content-box',
                      height: eb.wl,
                    },
                    'data-testid': 'subnav',
                    children: (0, r.jsxs)(g.A, {
                      children: [
                        (0, r.jsx)(eE, { pages: d }),
                        (0, r.jsx)(C.A, { flexGrow: 1 }),
                        (0, r.jsx)(C.A, {
                          display: 'flex',
                          gap: 3,
                          alignItems: 'center',
                          sx: { textOverflow: 'ellipsis', overflow: 'hidden' },
                          children: (0, r.jsx)(eT, { appStats: x }),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              (0, r.jsx)(C.A, { height: o }),
            ],
          });
        };
      var eD = n(10470);
      let eO = (0, ek.Ay)('svg')({ fill: 'currentColor', width: '24px', height: '24px' }),
        eP = (0, ek.Ay)('path')``,
        eF = ({ toggle: e, isOpen: t }) =>
          (0, r.jsx)(y.A, {
            onClick: e,
            sx: { display: 'inline-flex' },
            'data-testid': 'menu-toggle',
            size: 'small',
            children: (0, r.jsxs)(eO, {
              focusable: 'false',
              'aria-hidden': 'true',
              viewBox: '0 0 24 24',
              children: [
                (0, r.jsx)(eP, {
                  d: 'M0 7h24v-2H0z',
                  sx: {
                    transition: 'transform 1.5s',
                    ...(t && { transform: 'skewY(-45deg) translate(0, 17px)' }),
                  },
                }),
                (0, r.jsx)(eP, {
                  d: 'M0 13h24v-2H0z',
                  sx: { transition: 'opacity 1s', ...(t && { opacity: 0 }) },
                }),
                (0, r.jsx)(eP, {
                  d: 'M0 19h24v-2H0z',
                  sx: {
                    transition: 'transform 1.5s',
                    ...(t && { transform: 'skewY(45deg) translate(0, -17px)' }),
                  },
                }),
              ],
            }),
          }),
        eV = ({ ChainProps: e, currentMenu: t, isSidebarOpen: n, toggleSidebar: s, isLite: i }) =>
          (0, r.jsxs)(ea.A, {
            direction: 'row',
            width: '100%',
            paddingX: 2,
            children: [
              (0, r.jsx)(eF, { isOpen: n, toggle: s }),
              (0, r.jsx)(ez, { isLite: i, currentMenu: t }),
              (0, r.jsx)(ea.A, { flexGrow: 1 }),
              (0, r.jsx)(W, { ...e }),
            ],
          });
      var eH = n(6572),
        eR = n(30513),
        eZ = n(74145),
        e$ = n(52187),
        e_ = n(19245);
      let eW = 'background.paper',
        eY = ({ onConnect: e }) => {
          let t = (0, q.nv)((e) => e.theme),
            n = (0, q.nv)((e) => e.setTheme),
            s = (0, q.nv)((e) => e.isAdvancedMode),
            i = (0, q.nv)((e) => e.setAdvancedMode);
          return (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsxs)(C.A, {
                position: 'fixed',
                bottom: 0,
                sx: (e) => ({ ...eb.be, zIndex: e.zIndex.drawer + 1, backgroundColor: eW }),
                children: [
                  (0, r.jsx)(C.A, {
                    display: 'flex',
                    paddingX: 4,
                    marginTop: 4,
                    children: (0, r.jsx)(l.vz, { sx: { flexGrow: 1 }, onConnect: e }),
                  }),
                  (0, r.jsxs)(eR.A, {
                    sx: { backgroundColor: eW },
                    disableGutters: !0,
                    children: [
                      (0, r.jsxs)(e$.A, {
                        expandIcon: (0, r.jsx)(eH.A, {}),
                        sx: { backgroundColor: eW, paddingInline: 4 },
                        children: [
                          (0, r.jsx)(e_.L, {
                            sx: { fontSize: 22, fill: 'transparent', stroke: 'currentColor' },
                          }),
                          (0, r.jsx)(O.A, {
                            sx: { marginLeft: 1, alignContent: 'center' },
                            variant: 'bodyMBold',
                            color: 'navigation',
                            'data-testid': 'sidebar-settings',
                            children: (0, u.t)`Settings`,
                          }),
                        ],
                      }),
                      (0, r.jsxs)(eZ.A, {
                        sx: {
                          backgroundColor: eW,
                          borderTop: (e) => `1px solid ${e.palette.text.secondary}`,
                          paddingBottom: 4,
                        },
                        children: [
                          (0, r.jsx)(eG, {
                            label: (0, u.t)`Mode`,
                            children: (0, r.jsx)(G, {
                              theme: t,
                              onChange: n,
                              label: (0, u.t)`Mode`,
                            }),
                          }),
                          (0, r.jsx)(eG, {
                            label: (0, u.t)`Advanced Mode`,
                            children: (0, r.jsx)(f, { advancedMode: [s, i] }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, r.jsx)(C.A, { minHeight: 150 }),
              ' ',
            ],
          });
        },
        eG = ({ label: e, children: t, ...n }) =>
          (0, r.jsxs)(C.A, {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            ...n,
            children: [
              (0, r.jsx)(O.A, {
                variant: 'bodyMBold',
                color: 'navigation',
                marginLeft: 2,
                sx: { display: 'flex', alignItems: 'center' },
                children: e,
              }),
              (0, r.jsx)(C.A, { display: 'flex', alignItems: 'center', children: t }),
            ],
          });
      var eX = n(78006),
        eK = n(83721),
        eq = n(99825),
        eJ = n(30234);
      let eU = ({ page: e, child: t }) =>
          (0, r.jsx)(eJ.Ay, {
            disableGutters: !0,
            sx: { display: 'flex', paddingY: 0, paddingRight: 4, paddingLeft: 4 * !!t },
            children: (0, r.jsx)(er.A, {
              ...(e.href.startsWith('http')
                ? { component: ei.A, href: e.href, target: e.target }
                : { component: E(), href: e.href, className: e.isActive ? 'current' : '' }),
              color: 'navigation',
              size: 'small',
              'data-testid': `sidebar-item-${e.label.toLowerCase()}`,
              sx: {
                justifyContent: 'flex-start',
                textDecoration: 'none',
                textTransform: 'uppercase',
                width: '100%',
              },
              children: e.label,
            }),
          }),
        eQ = ({ pages: e, title: t, children: n }) =>
          (0, r.jsxs)(eX.A, {
            subheader: (0, r.jsxs)(eK.A, {
              disableSticky: !0,
              sx: { padding: 0 },
              children: [
                (0, r.jsx)(O.A, {
                  variant: 'headingSBold',
                  color: 'text.primary',
                  sx: { paddingX: 4, paddingTop: 4, paddingBottom: 2 },
                  children: t,
                }),
                (0, r.jsx)(eq.A, {}),
              ],
            }),
            sx: { marginTop: 3 },
            children: [e?.map((e) => r.jsx(eU, { child: !0, page: e }, e.href)), n],
          });
      var e1 = n(41390),
        e0 = n(5404),
        e3 = n(99730),
        e2 = n(14766);
      let e6 = (0, ee.A)(
          (0, r.jsx)('svg', {
            version: '1.1',
            xmlns: 'http://www.w3.org/2000/svg',
            viewBox: '0 0 800 800',
            children: (0, r.jsx)('g', {
              transform: 'translate(0.000000,800.000000) scale(0.100000,-0.100000)',
              fill: 'currentColor',
              stroke: 'none',
              children: (0, r.jsx)('path', {
                d: 'M2120 7593 c-217 -13 -455 -54 -600 -102 -105 -36 -290 -126 -372 -182 -32 -21 -62 -39 -67 -39 -5 0 -11 -4 -13 -8 -1 -4 -23 -23 -47 -42 -107 -83 -242 -233 -326 -360 -17 -25 -32 -47 -35 -50 -9 -9 -110 -218 -130 -270 -46 -117 -82 -277 -111 -500 -25 -194 -35 -3718 -10 -3975 37 -388 91 -587 230 -837 94 -169 223 -322 379 -448 137 -111 344 -225 492 -272 141 -45 137 -45 145 -6 20 96 465 2061 467 2064 2 1 41 -9 88 -22 284 -83 645 -96 932 -34 175 38 353 104 517 192 108 58 116 59 301 39 241 -26 444 -1 600 76 94 45 227 174 289 279 53 91 111 232 150 368 124 432 134 874 28 1181 -160 465 -589 781 -1249 920 -373 79 -678 43 -894 -106 l-47 -32 23 41 c81 144 277 350 435 458 173 118 379 204 570 239 l90 16 114 -111 c330 -320 639 -499 936 -541 95 -13 278 -6 352 15 l52 14 42 -66 c151 -238 235 -503 246 -772 l5 -125 -51 -33 c-65 -44 -185 -169 -239 -252 -94 -143 -170 -331 -214 -533 -19 -88 -22 -133 -22 -317 -1 -227 10 -303 64 -448 47 -126 130 -255 202 -315 l42 -35 -127 -1129 c-70 -620 -128 -1131 -127 -1135 0 -5 79 -8 175 -8 l174 0 6 32 c3 18 39 337 80 708 42 371 79 691 83 710 l8 34 52 -55 c83 -88 130 -155 182 -264 57 -117 85 -214 100 -343 13 -121 9 -169 -51 -511 -28 -156 -49 -285 -47 -286 7 -8 249 27 328 46 192 48 390 132 540 230 203 132 384 325 501 537 138 250 197 461 230 832 27 311 18 3755 -11 3985 -27 210 -64 378 -111 498 -33 83 -117 247 -160 309 -21 32 -39 62 -39 67 0 5 -4 11 -8 13 -4 2 -23 23 -42 47 -204 261 -565 484 -901 556 -41 9 -139 26 -219 38 -144 21 -163 21 -2035 22 -1039 1 -1915 0 -1945 -2z m2668 -1199 c40 -13 103 -39 140 -58 106 -53 186 -83 301 -113 93 -24 125 -27 263 -28 87 0 158 -1 158 -3 0 -16 -91 -130 -139 -174 -265 -246 -640 -181 -1066 184 -163 141 -158 129 -81 166 58 28 105 43 176 56 51 9 177 -6 248 -30z m-1618 -1314 c53 -27 83 -72 88 -135 3 -41 -11 -106 -71 -330 -81 -299 -90 -330 -106 -339 -6 -4 -50 13 -98 37 -48 24 -116 55 -150 68 -35 13 -63 28 -63 32 0 11 127 490 147 552 36 116 150 168 253 115z m1047 -301 c62 -23 113 -95 113 -160 0 -58 -153 -614 -178 -649 -35 -47 -80 -70 -139 -70 -30 0 -67 7 -82 15 -63 32 -109 121 -95 182 20 87 156 589 164 602 13 25 63 69 90 80 34 13 92 13 127 0z m-1998 -178 c-19 -85 -23 -91 -46 -91 -21 0 -23 3 -17 23 12 42 74 170 79 165 3 -3 -4 -46 -16 -97z m3811 -317 c50 -46 102 -151 127 -259 27 -117 24 -376 -4 -501 -48 -205 -136 -385 -243 -494 -73 -74 -139 -107 -187 -95 -64 16 -135 126 -175 273 -30 107 -32 376 -4 502 53 242 171 463 296 555 91 67 132 71 190 19z m-3585 -153 c348 -75 763 -320 1087 -642 113 -112 181 -206 199 -272 12 -46 4 -106 -15 -113 -33 -12 -758 76 -1121 136 -276 46 -780 147 -879 176 -194 56 -266 115 -266 218 0 279 238 478 615 516 121 12 270 4 380 -19z m-245 -1181 c236 -44 579 -99 792 -127 76 -9 134 -21 130 -24 -21 -21 -217 -43 -377 -43 -333 0 -613 80 -785 224 l-25 21 25 -6 c14 -2 122 -23 240 -45z',
              }),
            }),
          }),
          'Dodo'
        ),
        e7 = ({ icon: e, href: t, label: n }) =>
          (0, r.jsx)(y.A, {
            component: ei.A,
            href: t,
            target: '_blank',
            rel: 'noopener noreferrer',
            size: 'small',
            children: (0, r.jsx)(X.m, {
              title: n,
              children: (0, r.jsx)(e, { fontSize: 'large', color: 'primary' }),
            }),
          }),
        e4 = ({ title: e }) =>
          (0, r.jsx)(eQ, {
            title: e,
            children: (0, r.jsxs)(C.A, {
              display: 'flex',
              justifyContent: 'space-around',
              children: [
                (0, r.jsx)(e7, {
                  label: 'Discord',
                  href: 'https://discord.gg/rgrfS7W',
                  icon: e2.E,
                }),
                (0, r.jsx)(e7, {
                  label: 'Telegram',
                  href: (0, u.Y)() ? 'https://t.me/curveficn' : 'https://t.me/curvefi',
                  icon: e1.A,
                }),
                (0, r.jsx)(e7, {
                  label: 'Twitter',
                  href: 'https://x.com/curvefinance',
                  icon: e0.A,
                }),
                (0, r.jsx)(e7, {
                  label: 'YouTube',
                  href: (0, u.Y)()
                    ? 'https://www.youtube.com/watch?v=FtzDlWdcou8&list=PLh7yM-DPEDYgP-vyEOCIboD3xg_TgJmkj'
                    : 'https://www.youtube.com/@CurveFinanceChannel',
                  icon: e3.A,
                }),
                (0, u.Y)() &&
                  (0, r.jsx)(e7, {
                    label: 'Dodo',
                    href: 'https://imdodo.com/s/147186?inv=7J46',
                    icon: e6,
                  }),
              ],
            }),
          }),
        e8 = {
          '&::-webkit-scrollbar': { display: 'none' },
          msOverflowStyle: 'none',
          scrollbarWidth: 'none',
        },
        e5 = (e) => `2 * ${e.spacing(3)} + ${eb.wl}`,
        e9 = ({
          mainNavRef: e,
          currentMenu: t,
          pages: n,
          appStats: a,
          sections: l,
          chainId: o,
          chains: d,
          globalAlertRef: c,
          height: g,
          isLite: p = !1,
          networkId: m,
        }) => {
          let [f, v] = (0, i.useState)(!1),
            A = (0, i.useCallback)(() => v(!1), []),
            w = (0, i.useCallback)(() => v((e) => !e), []),
            b = (0, s.usePathname)();
          (0, i.useEffect)(() => () => A(), [b, A]);
          let y = (0, i.useMemo)(
            () =>
              Object.entries(x.VS)
                .filter(([e]) => e != t)
                .map(([e, { label: t, routes: n }]) => ({
                  appName: e,
                  title: t,
                  pages: n.map((e) => (0, x.WS)(e, { networkId: m, pathname: b })),
                })),
            [t, m, b]
          );
          return (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsxs)(h.A, {
                color: 'transparent',
                ref: e,
                sx: { backgroundColor: (e) => e.design.Layer[1].Fill },
                children: [
                  (0, r.jsx)(ew, { networkId: m, ref: c, chainId: o }),
                  (0, r.jsxs)(j.A, {
                    sx: (e) => ({ paddingBlock: 3, zIndex: e.zIndex.drawer + 1 }),
                    children: [
                      (0, r.jsx)(eV, {
                        isLite: p,
                        ChainProps: { chainId: o, options: d, headerHeight: g },
                        currentMenu: t,
                        isSidebarOpen: f,
                        toggleSidebar: w,
                      }),
                      (0, r.jsxs)(eD.Ay, {
                        anchor: 'left',
                        onClose: A,
                        open: f,
                        slotProps: { paper: { sx: { top: g, ...eb.be, ...e8 } } },
                        sx: { top: g },
                        variant: 'temporary',
                        hideBackdrop: !0,
                        'data-testid': 'mobile-drawer',
                        children: [
                          (0, r.jsxs)(C.A, {
                            children: [
                              (0, r.jsx)(ea.A, {
                                padding: 4,
                                children: (0, r.jsx)(eT, { appStats: a }),
                              }),
                              (0, r.jsx)(eQ, { title: x.VS[t].label, pages: n }),
                              y.map(({ appName: e, ...t }) => (0, r.jsx)(eQ, { ...t }, e)),
                              l.map(({ title: e, links: t }) =>
                                (0, r.jsx)(eQ, { title: e, pages: t }, e)
                              ),
                              (0, r.jsx)(e4, { title: (0, u.t)`Community` }),
                            ],
                          }),
                          (0, r.jsx)(eY, { onConnect: A }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, r.jsx)(C.A, { height: g }),
            ],
          });
        },
        te = ({ routes: e, ...t }) => {
          let n = (0, d.GM)(),
            [a] = (0, c.iq)(),
            h = (0, s.usePathname)(),
            { networkId: C, height: g } = t,
            j = (0, i.useMemo)(
              () =>
                e
                  .filter((e) => !e.betaFeature || a)
                  .map((e) => (0, x.WS)(e, { networkId: C, pathname: h })),
              [a, C, h, e]
            );
          return (0, r.jsxs)(r.Fragment, {
            children: [
              n ? (0, r.jsx)(eN, { pages: j, ...t }) : (0, r.jsx)(e9, { pages: j, ...t }),
              (0, r.jsx)(o.f, {}),
              (0, r.jsx)(l.fI, { headerHeight: g }),
            ],
          });
        },
        tt = (e) => {
          let t = (0, d.GM)(),
            n = (0, a.A)(),
            r = t ? '96px' : e5(n);
          return `calc(${r} + ${e ?? 0}px)`;
        };
    },
    64174: (e, t, n) => {
      n.d(t, { Dc: () => h, QX: () => C, iq: () => c, kA: () => x, pQ: () => g, xM: () => d });
      var r = n(3861),
        s = n.n(r),
        i = n(38071),
        a = n(68642);
      function l(e) {
        let t = window.localStorage.getItem(e);
        return t && JSON.parse(t);
      }
      let o = (e, t) =>
          (0, a.E)({
            key: e,
            initialValue: t,
            get: (e, t) => {
              let n = l(e);
              return null == n ? t : n;
            },
            set: (e, t) => {
              if (null == t) return window.localStorage.removeItem(e);
              window.localStorage.setItem(e, JSON.stringify(t));
            },
          }),
        d = () => o('showTestnets', !1),
        c = () => o('beta', i.ay),
        x = () => o('isNewDomainNotificationSeen', !1),
        h = (e) => o(`filter-expanded-${s()(e)}`),
        C = () => l('favoriteMarkets') ?? [],
        g = () => o('favoriteMarkets', []);
    },
    69452: (e, t, n) => {
      n.d(t, { I: () => s });
      var r = n(54568);
      let s = (0, n(69879).A)(
        (0, r.jsx)('svg', {
          viewBox: '0 0 16 16',
          fill: 'none',
          xmlns: 'http://www.w3.org/2000/svg',
          children: (0, r.jsx)('path', {
            d: 'M3.89058 12.1104C3.68231 11.9021 3.68231 11.5645 3.89058 11.3562L10.9801 4.26662L6.40104 4.26662C6.10649 4.26662 5.86771 4.02784 5.86771 3.73329C5.86771 3.43873 6.10649 3.19995 6.40104 3.19995L12.2677 3.19995C12.4092 3.19995 12.5448 3.25614 12.6448 3.35616C12.7449 3.45618 12.801 3.59184 12.801 3.73328L12.801 9.59996C12.801 9.89451 12.5623 10.1333 12.2677 10.1333C11.9732 10.1333 11.7344 9.89451 11.7344 9.59996V5.02087L4.64483 12.1104C4.43655 12.3187 4.09886 12.3187 3.89058 12.1104Z',
            fill: 'currentColor',
          }),
        }),
        'ArrowTopRight'
      );
    },
  },
]);
