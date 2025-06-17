'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2306],
  {
    1334: (e, t, r) => {
      r.d(t, { w: () => ei });
      var s = r(54568),
        n = r(44876),
        l = r(13342),
        i = r(32678),
        o = r(5254),
        a = r(12078),
        c = r(64174),
        A = r(42822),
        C = r(84032),
        d = r(17703),
        p = r(56120),
        h = r(33161),
        u = r(94804),
        m = r(50010),
        x = r(12312),
        g = r(40576),
        f = r(33431),
        v = r(87401),
        b = r(36074);
      let w = ({ isBeta: e, setIsBeta: t, open: r, openBetaSnackbar: n, onClose: l }) =>
        (0, s.jsx)(g.A, {
          open: r,
          onClose: l,
          children: (0, s.jsxs)(h.A, {
            sx: {
              width: C.B.Width.modal.md,
              maxWidth: '100vw',
              display: 'flex',
              flexDirection: 'column',
            },
            children: [
              (0, s.jsx)(x.A, {
                action: (0, s.jsx)(f.A, {
                  onClick: l,
                  size: 'extraSmall',
                  children: (0, s.jsx)(d.A, {}),
                }),
                title: (0, s.jsx)(v.A, {
                  variant: 'headingXsBold',
                  color: 'textSecondary',
                  children: e ? (0, b.t)`Disable Beta Features` : (0, b.t)`Enable Beta Features`,
                }),
              }),
              (0, s.jsx)(m.A, {
                sx: {
                  flexGrow: 1,
                  overflowY: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 4,
                },
                children: [
                  (0,
                  b.t)`Get early access to upcoming features and UI experiments before they go live.`,
                  (0,
                  b.t)`These are work-in-progress tools meant for testing, feedback, and iteration. You might experience minor bugs or visual inconsistencies — but your funds remain safe, and core functionality is unaffected.`,
                  (0,
                  b.t)`By enabling beta mode, you help shape the future of the Curve interface.`,
                  (0, b.t)`You can turn this off at any time.`,
                ].map((e) => (0, s.jsx)(v.A, { color: 'textSecondary', children: e }, e)),
              }),
              (0, s.jsx)(u.A, {
                children: (0, s.jsx)(p.A, {
                  color: e ? 'secondary' : 'primary',
                  onClick: () => {
                    t(!e), l(), n();
                  },
                  sx: { width: '100%' },
                  children: e ? (0, b.t)`Disable Beta Features` : (0, b.t)`Enable Beta Features`,
                }),
              }),
            ],
          }),
        });
      var L = r(24388),
        j = r(2926),
        y = r(15984),
        D = r(72415);
      let B = ({ isBeta: e, open: t, onClose: r, headerHeight: n }) =>
        (0, s.jsx)(y.A, {
          open: t,
          onClose: r,
          autoHideDuration: D.dw.Snackbar,
          anchorOrigin: { horizontal: 'right', vertical: 'top' },
          sx: { top: n, left: 'unset' },
          children: (0, s.jsxs)(L.A, {
            variant: 'outlined',
            severity: 'success',
            children: [
              (0, s.jsx)(j.A, {
                children: e ? (0, b.t)`Beta Features On` : (0, b.t)`Beta Features Off`,
              }),
              e
                ? (0, b.t)`You have successfully enabled beta features.`
                : (0, b.t)`You have successfully disabled beta features.`,
            ],
          }),
        });
      var H = r(51121),
        M = r(26055);
      let { IconSize: Q, Spacing: k, FontWeight: Z } = C.B,
        U = () =>
          (0, s.jsxs)(n.A, {
            sx: { display: 'flex', flexDirection: 'column' },
            children: [
              (0, s.jsxs)(H.A, {
                href: '/',
                sx: { display: 'flex', alignItems: 'center', textDecoration: 'none', gap: k.xs },
                children: [
                  (0, s.jsx)(M.A, {
                    sx: { width: Q.xxl, height: Q.xxl, margin: k.sm },
                    children: (0, s.jsx)(o.$J, {}),
                  }),
                  (0, s.jsx)(v.A, {
                    color: 'textPrimary',
                    sx: { '&': { fontSize: D.XQ[600] }, fontWeight: Z.Bold },
                    children: 'Curve',
                  }),
                ],
              }),
              (0, s.jsx)(v.A, {
                variant: 'bodySRegular',
                color: 'textSecondary',
                sx: { textWrap: 'balance' },
                children: (0,
                b.t)`Curve DAO is building the software that powers the future world economy: decentralised, trustless, inclusive and autonomous.`,
              }),
            ],
          });
      var S = r(27261),
        O = r.n(S);
      let P = ({ label: e, href: t, icon: r, target: n = '_blank', appName: l, networkId: i }) =>
          (0, s.jsx)(p.A, {
            ...(t.startsWith('http')
              ? { component: H.A, href: t, target: n, rel: 'noreferrer' }
              : { component: O(), href: `/${l}/${i}/${t}` }),
            color: 'ghost',
            variant: 'link',
            startIcon: r,
            children: e,
          }),
        V = ({ title: e, links: t, networkId: r, appName: n, isTiny: i }) =>
          (0, s.jsxs)(l.A, {
            container: !0,
            spacing: 1,
            children: [
              (0, s.jsx)(l.A, {
                size: 12,
                children: (0, s.jsx)(v.A, {
                  variant: 'headingXsBold',
                  sx: { display: 'flex', alignItems: 'center', height: C.B.ButtonSize.sm },
                  children: e,
                }),
              }),
              t.map((e) =>
                (0, s.jsx)(
                  l.A,
                  {
                    size: { mobile: i ? 12 : 6, tablet: 12 },
                    'data-testid': 'footer-link',
                    children: (0, s.jsx)(P, { ...e, appName: n, networkId: r }),
                  },
                  e.href
                )
              ),
            ],
          });
      var z = r(26491),
        N = r(92041),
        E = r(55298),
        T = r(8268),
        R = r(56465),
        I = r(99730),
        J = r(69879);
      let K = (0, J.A)(
        (0, s.jsxs)('svg', {
          xmlns: 'http://www.w3.org/2000/svg',
          viewBox: '0 0 16 16',
          fill: 'currentColor',
          children: [
            (0, s.jsx)('path', {
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              d: 'M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM3.28893 10.4509C3.13606 10.5391 2.93965 10.4827 2.86681 10.322C2.54605 9.61397 2.36745 8.82784 2.36745 8C2.36745 7.17216 2.54605 6.38603 2.86681 5.67804C2.93965 5.51725 3.13606 5.46086 3.28894 5.54912L3.74154 5.81044C3.83767 5.86593 3.89688 5.9685 3.89688 6.07949V9.92051C3.89688 10.0315 3.83767 10.1341 3.74154 10.1896L3.28893 10.4509ZM4.28523 5.40685C4.18911 5.46235 4.07068 5.46235 3.97456 5.40685L3.52282 5.14604C3.36976 5.05767 3.32051 4.85903 3.42369 4.71553C4.34436 3.43501 5.7892 2.55665 7.44414 2.39454C7.61983 2.37732 7.76699 2.51922 7.76699 2.69576V3.21729C7.76699 3.32828 7.70778 3.43085 7.61165 3.48635L4.28523 5.40685ZM3.52282 10.854C3.36976 10.9423 3.32051 11.141 3.42369 11.2845C4.34436 12.565 5.7892 13.4433 7.44414 13.6055C7.61984 13.6227 7.76699 13.4808 7.76699 13.3042V12.7827C7.76699 12.6717 7.70778 12.5692 7.61165 12.5137L4.28523 10.5931C4.18911 10.5376 4.07068 10.5376 3.97455 10.5931L3.52282 10.854ZM12.7111 10.4509C12.8639 10.5391 13.0603 10.4828 13.1332 10.322C13.454 9.61397 13.6325 8.82784 13.6325 8C13.6325 7.17216 13.454 6.38603 13.1332 5.67804C13.0603 5.51725 12.8639 5.46086 12.7111 5.54912L12.2584 5.81044C12.1623 5.86594 12.1031 5.9685 12.1031 6.0795V9.9205C12.1031 10.0315 12.1623 10.1341 12.2584 10.1896L12.7111 10.4509ZM12.5763 11.2845C12.6795 11.141 12.6302 10.9423 12.4772 10.854L12.0254 10.5931C11.9293 10.5376 11.8109 10.5376 11.7148 10.5931L8.38835 12.5136C8.29222 12.5691 8.23301 12.6717 8.23301 12.7827V13.3042C8.23301 13.4808 8.38017 13.6227 8.55586 13.6055C10.2108 13.4433 11.6556 12.565 12.5763 11.2845ZM8.23301 2.69576C8.23301 2.51923 8.38017 2.37732 8.55586 2.39454C10.2108 2.55665 11.6556 3.43501 12.5763 4.71553C12.6795 4.85903 12.6302 5.05767 12.4772 5.14604L12.0254 5.40686C11.9293 5.46235 11.8109 5.46235 11.7148 5.40686L8.38835 3.48635C8.29222 3.43086 8.23301 3.32829 8.23301 3.2173V2.69576ZM7.84465 5.68192C7.94078 5.62642 8.05921 5.62642 8.15533 5.68192L9.92984 6.70643C10.026 6.76193 10.0852 6.86449 10.0852 6.97549V9.02451C10.0852 9.13551 10.026 9.23807 9.92984 9.29357L8.15533 10.3181C8.05921 10.3736 7.94078 10.3736 7.84465 10.3181L6.07015 9.29357C5.97402 9.23807 5.91481 9.13551 5.91481 9.02451V6.97549C5.91481 6.86449 5.97402 6.76193 6.07015 6.70643L7.84465 5.68192ZM7.76698 4.25929C7.91117 4.17605 8.08881 4.17605 8.233 4.25929L11.123 5.92786C11.2672 6.0111 11.356 6.16495 11.356 6.33144V9.66856C11.356 9.83505 11.2672 9.9889 11.123 10.0721L8.233 11.7407C8.08881 11.824 7.91117 11.824 7.76698 11.7407L4.87695 10.0721C4.73276 9.9889 4.64394 9.83505 4.64394 9.66856V6.33144C4.64394 6.16495 4.73276 6.0111 4.87695 5.92786L7.76698 4.25929ZM8.07766 4.52835C8.0296 4.5006 7.97038 4.5006 7.92232 4.52835L5.03229 6.19691C4.98423 6.22466 4.95462 6.27594 4.95462 6.33144V9.66856C4.95462 9.72406 4.98423 9.77534 5.03229 9.80309L7.92232 11.4716C7.97038 11.4994 8.0296 11.4994 8.07766 11.4716L10.9677 9.80309C11.0158 9.77534 11.0454 9.72406 11.0454 9.66856V6.33144C11.0454 6.27594 11.0158 6.22466 10.9677 6.19691L8.07766 4.52835Z',
            }),
            (0, s.jsx)('path', {
              d: 'M7.41375 8.46416C7.07698 8.46416 6.83962 8.28024 6.83962 7.99814C6.83962 7.71729 7.07698 7.53585 7.41375 7.53585C7.71449 7.53585 7.93569 7.6887 7.96179 7.89251H7.78657C7.76544 7.78812 7.62874 7.67628 7.41375 7.67628C7.17018 7.67628 7.01235 7.81049 7.01235 7.99814C7.01235 8.18703 7.17018 8.32249 7.41375 8.32249C7.62874 8.32249 7.76544 8.2094 7.78657 8.10377H7.96179C7.93694 8.31006 7.71449 8.46416 7.41375 8.46416Z',
            }),
            (0, s.jsx)('path', {
              d: 'M8.12146 8.43931V7.55822H8.28799V7.92855H8.99385V7.55822H9.16037V8.43931H8.99385V8.06898H8.28799V8.43931H8.12146Z',
            }),
          ],
        }),
        'CrvHub'
      );
      var q = r(14766);
      let X = (0, J.A)(
          (0, s.jsx)('svg', {
            xmlns: 'http://www.w3.org/2000/svg',
            viewBox: '0 0 16 16',
            fill: 'currentColor',
            children: (0, s.jsx)('path', {
              d: 'M7.33484 11.3577C7.54313 11.3577 7.73059 11.5243 7.73059 11.7534C7.73059 11.9617 7.56396 12.1492 7.33484 12.1492C7.12655 12.1492 6.93909 11.9825 6.93909 11.7534C6.93909 11.5243 7.12655 11.3577 7.33484 11.3577ZM13.4586 8.9415C13.2503 8.9415 13.0628 8.77487 13.0628 8.54575C13.0628 8.33746 13.2295 8.15 13.4586 8.15C13.6669 8.15 13.8543 8.31663 13.8543 8.54575C13.8543 8.75404 13.6669 8.9415 13.4586 8.9415ZM13.4586 7.33767C12.7921 7.33767 12.2505 7.87922 12.2505 8.54575C12.2505 8.67073 12.2713 8.7957 12.313 8.92067L8.33464 11.0452C8.10552 10.712 7.73059 10.5245 7.33484 10.5245C6.8766 10.5245 6.46002 10.7953 6.25173 11.191L2.66913 9.31643C2.29421 9.10813 2.0026 8.50409 2.04426 7.92088C2.06509 7.62927 2.16924 7.40015 2.31504 7.31684C2.41918 7.25435 2.52333 7.27518 2.66913 7.33767L2.68996 7.35849C3.6481 7.85839 6.75163 9.48306 6.8766 9.54555C7.08489 9.62886 7.18904 9.67052 7.54313 9.50389L13.9585 6.17124C14.0626 6.12958 14.1668 6.04626 14.1668 5.90046C14.1668 5.713 13.9793 5.62968 13.9793 5.62968C13.6044 5.46305 13.042 5.19227 12.5004 4.94232C11.334 4.40077 10.001 3.7759 9.41775 3.46346C8.91785 3.19268 8.50127 3.4218 8.43878 3.46346L8.29298 3.52595C5.64769 4.85901 2.14841 6.58782 1.94012 6.71279C1.58602 6.92108 1.3569 7.35849 1.33607 7.90005C1.29442 8.75404 1.73183 9.64969 2.3567 9.96213L6.14759 11.9201C6.2309 12.5033 6.75163 12.9615 7.33484 12.9615C8.00137 12.9615 8.5221 12.4408 8.54293 11.7743L12.7087 9.52472C12.917 9.69135 13.1878 9.77466 13.4586 9.77466C14.1251 9.77466 14.6667 9.23311 14.6667 8.56658C14.6667 7.87922 14.1251 7.33767 13.4586 7.33767Z',
            }),
          }),
          'Docs'
        ),
        G = (0, J.A)(
          (0, s.jsxs)('svg', {
            xmlns: 'http://www.w3.org/2000/svg',
            viewBox: '0 0 16 16',
            fill: 'currentColor',
            children: [
              (0, s.jsx)('path', {
                fillRule: 'evenodd',
                clipRule: 'evenodd',
                d: 'M15.9995 7.91027C15.9514 3.53333 12.3883 0 8 0C3.58172 0 0 3.58172 0 8C0 9.48951 0.407072 10.8839 1.11604 12.0781C1.23377 12.2764 1.35983 12.4692 1.49373 12.656L15.9995 7.91027ZM1.76671 11.8652L15.3118 7.43382C15.0228 3.64837 11.8596 0.666667 8 0.666667C3.94991 0.666667 0.666667 3.94991 0.666667 8C0.666667 9.41912 1.06922 10.7431 1.76671 11.8652Z',
              }),
              (0, s.jsx)('path', {
                d: 'M8.00001 16C12.4183 16 16 12.4183 16 8C16 7.97006 15.9998 7.94015 15.9995 7.91028L1.49374 12.656C2.9453 14.6808 5.3186 16 8.00001 16Z',
              }),
            ],
          }),
          'Dune'
        ),
        Y = (0, J.A)(
          (0, s.jsx)('svg', {
            xmlns: 'http://www.w3.org/2000/svg',
            viewBox: '0 0 16 16',
            fill: 'currentColor',
            children: (0, s.jsx)('path', {
              d: 'M14.94 7.76L11.94 2.26C11.8968 2.18109 11.8332 2.11529 11.7557 2.06954C11.6783 2.02378 11.5899 1.99976 11.5 2H4.5C4.41005 1.99976 4.32171 2.02378 4.24427 2.06954C4.16683 2.11529 4.10317 2.18109 4.06 2.26L1.06 7.76C1.01612 7.83601 0.993012 7.92223 0.993012 8.01C0.993012 8.09777 1.01612 8.18399 1.06 8.26L4.06 13.76C4.10573 13.8352 4.1705 13.897 4.24776 13.9391C4.32501 13.9813 4.41203 14.0023 4.5 14H11.5C11.5899 14.0002 11.6783 13.9762 11.7557 13.9305C11.8332 13.8847 11.8968 13.8189 11.94 13.74L14.94 8.24C14.9803 8.16642 15.0014 8.08388 15.0014 8C15.0014 7.91612 14.9803 7.83359 14.94 7.76V7.76ZM11.465 3.5L13.66 7.5H8.91L11.465 3.5ZM8 7.07L5.41 3H10.59L8 7.07ZM4.535 3.5L7.09 7.5H2.34L4.535 3.5ZM2.34 8.5H7.09L4.535 12.5L2.34 8.5ZM8 8.93L10.59 13H5.41L8 8.93ZM11.465 12.5L8.91 8.5H13.66L11.465 12.5Z',
            }),
          }),
          'Integrations'
        ),
        F = (0, J.A)(
          (0, s.jsxs)('svg', {
            xmlns: 'http://www.w3.org/2000/svg',
            viewBox: '0 0 16 17',
            fill: 'currentColor',
            children: [
              (0, s.jsx)('path', {
                d: 'M0.625977 9.39249H6.55174L10.2218 6.10938H3.78138L0.625977 9.39249Z',
              }),
              (0, s.jsx)('path', {
                d: 'M6.53687 9.35117L6.67961 15.9306L10.2219 12.8071V6.10938L6.53687 9.35117Z',
              }),
              (0, s.jsx)('path', {
                d: 'M5.77808 4.48324H11.7038L15.3739 1.19824H8.93348L5.77808 4.48324Z',
              }),
              (0, s.jsx)('path', {
                d: 'M11.6904 4.44192L11.8313 11.0194L15.3736 7.89595V1.19824L11.6904 4.44192Z',
              }),
            ],
          }),
          'LAF'
        ),
        W = (0, J.A)(
          (0, s.jsx)('svg', {
            xmlns: 'http://www.w3.org/2000/svg',
            viewBox: '0 0 16 16',
            fill: 'currentColor',
            children: (0, s.jsx)('path', {
              d: 'M2 12H7V13H2V12ZM2 9H7V10H2V9ZM13 7H3C2.73478 7 2.48043 6.89464 2.29289 6.70711C2.10536 6.51957 2 6.26522 2 6V3C2 2.73478 2.10536 2.48043 2.29289 2.29289C2.48043 2.10536 2.73478 2 3 2H13C13.2652 2 13.5196 2.10536 13.7071 2.29289C13.8946 2.48043 14 2.73478 14 3V6C14 6.26522 13.8946 6.51957 13.7071 6.70711C13.5196 6.89464 13.2652 7 13 7ZM3 3V6H13V3H3ZM13 14H10C9.73478 14 9.48043 13.8946 9.29289 13.7071C9.10536 13.5196 9 13.2652 9 13V10C9 9.73478 9.10536 9.48043 9.29289 9.29289C9.48043 9.10536 9.73478 9 10 9H13C13.2652 9 13.5196 9.10536 13.7071 9.29289C13.8946 9.48043 14 9.73478 14 10V13C14 13.2652 13.8946 13.5196 13.7071 13.7071C13.5196 13.8946 13.2652 14 13 14ZM10 10V13H13V10H10Z',
            }),
          }),
          'News'
        ),
        _ = (0, J.A)(
          (0, s.jsxs)('svg', {
            xmlns: 'http://www.w3.org/2000/svg',
            viewBox: '0 0 16 16',
            fill: 'currentColor',
            children: [
              (0, s.jsx)('path', {
                fillRule: 'evenodd',
                clipRule: 'evenodd',
                d: 'M9.1999 13.3833C11.6138 13.3833 13.5706 11.4265 13.5706 9.01264C13.5706 6.59878 11.6138 4.64197 9.1999 4.64197C6.78605 4.64197 4.82923 6.59878 4.82923 9.01264C4.82923 11.4265 6.78605 13.3833 9.1999 13.3833ZM9.20026 5.65122C8.8549 5.65122 8.57872 5.93823 8.59199 6.28333L8.73105 9.89891C8.74075 10.151 8.94796 10.3504 9.20026 10.3504C9.45257 10.3504 9.65978 10.151 9.66948 9.89891L9.80854 6.28333C9.82181 5.93823 9.54563 5.65122 9.20026 5.65122ZM9.20016 12.3741C9.57448 12.3741 9.87793 12.0707 9.87793 11.6963C9.87793 11.322 9.57448 11.0186 9.20016 11.0186C8.82584 11.0186 8.5224 11.322 8.5224 11.6963C8.5224 12.0707 8.82584 12.3741 9.20016 12.3741Z',
              }),
              (0, s.jsx)('path', {
                d: 'M5.44266 12H2V13H6.52682C6.116 12.724 5.75018 12.3863 5.44266 12Z',
              }),
              (0, s.jsx)('path', {
                d: 'M4.50165 10H2V9H4.40002C4.40001 9.00422 4.4 9.00844 4.4 9.01266C4.4 9.3511 4.43503 9.68135 4.50165 10Z',
              }),
              (0, s.jsx)('path', {
                d: 'M13.4957 6.86852C13.5724 6.82475 13.6436 6.77064 13.7071 6.70711C13.8946 6.51957 14 6.26522 14 6V3C14 2.73478 13.8946 2.48043 13.7071 2.29289C13.5196 2.10536 13.2652 2 13 2H3C2.73478 2 2.48043 2.10536 2.29289 2.29289C2.10536 2.48043 2 2.73478 2 3V6C2 6.26522 2.10536 6.51957 2.29289 6.70711C2.48043 6.89464 2.73478 7 3 7H4.84107C5.00739 6.64038 5.21691 6.30483 5.46296 6H3V3H13V6H12.937C13.1529 6.26737 13.3406 6.55837 13.4957 6.86852Z',
              }),
            ],
          }),
          'Risk Disclaimers'
        ),
        $ = (0, J.A)(
          (0, s.jsxs)('svg', {
            xmlns: 'http://www.w3.org/2000/svg',
            viewBox: '0 0 14 12',
            fill: 'none',
            children: [
              (0, s.jsx)('path', {
                fillRule: 'evenodd',
                clipRule: 'evenodd',
                d: 'M10.5464 11.433C10.7255 11.5594 10.9555 11.5912 11.1618 11.5139C11.3664 11.4357 11.5182 11.2594 11.5637 11.0457C12.0464 8.77751 13.2182 3.03471 13.6573 0.971953C13.6901 0.815587 13.6355 0.653767 13.5137 0.550129C13.3901 0.445582 13.221 0.416491 13.0701 0.471946C10.7409 1.33468 3.56629 4.02654 0.633525 5.1111C0.448977 5.18019 0.328066 5.35838 0.333521 5.55565C0.339884 5.75202 0.472614 5.92202 0.662616 5.97929C1.97809 6.37293 3.70357 6.92021 3.70357 6.92021C3.70357 6.92021 4.51085 9.35661 4.93086 10.5948C4.98358 10.7512 5.1054 10.873 5.26541 10.9148C5.42632 10.9566 5.59723 10.913 5.71723 10.7994C6.39269 10.163 7.43543 9.17661 7.43543 9.17661C7.43543 9.17661 9.42092 10.6312 10.5464 11.433V11.433ZM4.42994 6.61112L5.36268 9.68753L5.57086 7.73932L11.2273 2.63834C11.2873 2.58379 11.2955 2.49288 11.2455 2.42925C11.1964 2.36561 11.1046 2.35015 11.0364 2.39288L4.43085 6.61294L4.42994 6.61112Z',
                fill: '#EE1C25',
              }),
              (0, s.jsx)('path', {
                fillRule: 'evenodd',
                clipRule: 'evenodd',
                d: 'M10.5464 11.433C10.7255 11.5594 10.9555 11.5912 11.1618 11.5139C11.3664 11.4357 11.5182 11.2594 11.5637 11.0457C12.0464 8.77751 13.2182 3.03471 13.6573 0.971953C13.6901 0.815587 13.6355 0.653767 13.5137 0.550129C13.3901 0.445582 13.221 0.416491 13.0701 0.471946C10.7409 1.33468 3.56629 4.02654 0.633525 5.1111C0.448977 5.18019 0.328066 5.35838 0.333521 5.55565C0.339884 5.75202 0.472614 5.92202 0.662616 5.97929C1.97809 6.37293 3.70357 6.92021 3.70357 6.92021C3.70357 6.92021 4.51085 9.35661 4.93086 10.5948C4.98358 10.7512 5.1054 10.873 5.26541 10.9148C5.42632 10.9566 5.59723 10.913 5.71723 10.7994C6.39269 10.163 7.43543 9.17661 7.43543 9.17661C7.43543 9.17661 9.42092 10.6312 10.5464 11.433V11.433ZM4.42994 6.61112L5.36268 9.68753L5.57086 7.73932L11.2273 2.63834C11.2873 2.58379 11.2955 2.49288 11.2455 2.42925C11.1964 2.36561 11.1046 2.35015 11.0364 2.39288L4.43085 6.61294L4.42994 6.61112Z',
                fill: 'url(#pattern0_8981_295)',
              }),
              (0, s.jsxs)('defs', {
                children: [
                  (0, s.jsx)('pattern', {
                    id: 'pattern0_8981_295',
                    patternContentUnits: 'objectBoundingBox',
                    width: '1',
                    height: '1',
                    children: (0, s.jsx)('use', {
                      xlinkHref: '#image0_8981_295',
                      transform: 'matrix(0.00520842 0 0 0.00625 0.1278 0.233495)',
                    }),
                  }),
                  (0, s.jsx)('image', {
                    id: 'image0_8981_295',
                    width: '255',
                    height: '160',
                    xlinkHref:
                      'data:image/png;base64,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',
                  }),
                ],
              }),
            ],
          }),
          'TelegramCN'
        ),
        ee = (0, J.A)(
          (0, s.jsx)('svg', {
            xmlns: 'http://www.w3.org/2000/svg',
            viewBox: '0 0 16 16',
            fill: 'currentColor',
            children: (0, s.jsx)('path', {
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              d: 'M11.5464 13.433C11.7255 13.5594 11.9555 13.5912 12.1618 13.5139C12.3664 13.4357 12.5182 13.2594 12.5637 13.0457C13.0464 10.7775 14.2182 5.03471 14.6573 2.97195C14.6901 2.81559 14.6355 2.65377 14.5137 2.55013C14.3901 2.44558 14.221 2.41649 14.0701 2.47195C11.7409 3.33468 4.56629 6.02654 1.63352 7.1111C1.44898 7.18019 1.32807 7.35838 1.33352 7.55565C1.33988 7.75202 1.47261 7.92202 1.66262 7.97929C2.97809 8.37293 4.70357 8.92021 4.70357 8.92021C4.70357 8.92021 5.51085 11.3566 5.93086 12.5948C5.98358 12.7512 6.1054 12.873 6.26541 12.9148C6.42632 12.9566 6.59723 12.913 6.71723 12.7994C7.39269 12.163 8.43543 11.1766 8.43543 11.1766C8.43543 11.1766 10.4209 12.6312 11.5464 13.433V13.433ZM5.42994 8.61112L6.36268 11.6875L6.57086 9.73932L12.2273 4.63834C12.2873 4.58379 12.2955 4.49288 12.2455 4.42925C12.1964 4.36561 12.1046 4.35015 12.0364 4.39288L5.43085 8.61294L5.42994 8.61112Z',
            }),
          }),
          'Telegram'
        ),
        et = (0, J.A)(
          (0, s.jsxs)('svg', {
            xmlns: 'http://www.w3.org/2000/svg',
            viewBox: '0 0 14 12',
            fill: 'none',
            children: [
              (0, s.jsx)('path', {
                fillRule: 'evenodd',
                clipRule: 'evenodd',
                d: 'M10.5464 11.433C10.7255 11.5594 10.9555 11.5912 11.1618 11.5139C11.3664 11.4357 11.5182 11.2594 11.5637 11.0457C12.0464 8.77751 13.2182 3.03471 13.6573 0.971953C13.6901 0.815587 13.6355 0.653767 13.5137 0.550129C13.3901 0.445582 13.221 0.416491 13.0701 0.471946C10.7409 1.33468 3.56629 4.02654 0.633525 5.1111C0.448977 5.18019 0.328066 5.35838 0.333521 5.55565C0.339884 5.75202 0.472614 5.92202 0.662616 5.97929C1.97809 6.37293 3.70357 6.92021 3.70357 6.92021C3.70357 6.92021 4.51085 9.35661 4.93086 10.5948C4.98358 10.7512 5.1054 10.873 5.26541 10.9148C5.42632 10.9566 5.59723 10.913 5.71723 10.7994C6.39269 10.163 7.43543 9.17661 7.43543 9.17661C7.43543 9.17661 9.42092 10.6312 10.5464 11.433V11.433ZM4.42994 6.61112L5.36268 9.68753L5.57086 7.73932L11.2273 2.63834C11.2873 2.58379 11.2955 2.49288 11.2455 2.42925C11.1964 2.36561 11.1046 2.35015 11.0364 2.39288L4.43085 6.61294L4.42994 6.61112Z',
                fill: 'url(#pattern0_8981_277)',
              }),
              (0, s.jsxs)('defs', {
                children: [
                  (0, s.jsx)('pattern', {
                    id: 'pattern0_8981_277',
                    patternContentUnits: 'objectBoundingBox',
                    width: '1',
                    height: '1',
                    children: (0, s.jsx)('use', {
                      xlinkHref: '#image0_8981_277',
                      transform: 'matrix(0.00520842 0 0 0.00625 -0.125011 0)',
                    }),
                  }),
                  (0, s.jsx)('image', {
                    id: 'image0_8981_277',
                    width: '240',
                    height: '160',
                    xlinkHref:
                      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAACgCAIAAAC9uXYyAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAA8KADAAQAAAABAAAAoAAAAADt++UAAAADgElEQVR4Ae3WUU3EUBRF0ZbpHxZQwAeuUIEAhGAFFQQnkAzBxj6rDvY9K8077/f74XOBygUeKiE6XOD/AkBzkLoA0Kk5xQDNQOoCQKfmFAM0A6kLAJ2aUwzQDKQuAHRqTjFAM5C6ANCpOcUAzUDqAkCn5hQDNAOpCwCdmlMM0AykLgB0ak4xQDOQugDQqTnFAM1A6gJAp+YUAzQDqQsAnZpTDNAMpC4AdGpOMUAzkLoA0Kk5xQDNQOoCQKfmFAM0A6kLAJ2aUwzQDKQuAHRqTjFAM5C6ANCpOcUAzUDqAkCn5hQDNAOpCwCdmlMM0AykLgB0ak4xQDOQugDQqTnFAM1A6gJAp+YUAzQDqQsAnZpTDNAMpC4AdGpOMUAzkLoA0Kk5xQDNQOoC19v7ZypIzPYFzuPlY/sC6lMXuI7HWypIzPYFvKG398/VA52bdDsI6O39c/VA5ybdDgJ6e/9cPdC5SbeDgN7eP1cPdG7S7SCgt/fP1QOdm3Q7COjt/XP1QOcm3Q4Cenv/XD3QuUm3g4De3j9XD3Ru0u0goLf3z9UDnZt0Owjo7f1z9UDnJt0OAnp7/1w90LlJt4OA3t4/Vw90btLtIKC398/VA52bdDsI6O39c/VA5ybdDgJ6e/9cPdC5SbeDgN7eP1cPdG7S7SCgt/fP1QOdm3Q7COjt/XP1QOcm3Q4Cenv/XD3QuUm3g4De3j9XD3Ru0u0goLf3z9UDnZt0Owjo7f1z9UDnJt0OAnp7/1w90LlJt4OA3t4/Vw90btLtIKC398/VX8dxy0UJ2r3A9fr7vVuvPHeB8+vZqyO36nDQ9XM+DedLr13A77m26HgP0OMAavlA1xYd7wF6HEAtH+jaouM9QI8DqOUDXVt0vAfocQC1fKBri473AD0OoJYPdG3R8R6gxwHU8oGuLTreA/Q4gFo+0LVFx3uAHgdQywe6tuh4D9DjAGr5QNcWHe8BehxALR/o2qLjPUCPA6jlA11bdLwH6HEAtXyga4uO9wA9DqCWD3Rt0fEeoMcB1PKBri063gP0OIBaPtC1Rcd7gB4HUMsHurboeA/Q4wBq+UDXFh3vAXocQC0f6Nqi4z1AjwOo5QNdW3S8B+hxALV8oGuLjvcAPQ6glg90bdHxHqDHAdTyga4tOt4D9DiAWj7QtUXHe4AeB1DLB7q26HgP0OMAavlA1xYd7/kDmLYLSMLYL7EAAAAASUVORK5CYII=',
                  }),
                ],
              }),
            ],
          }),
          'TelegramRU'
        ),
        er = (0, J.A)(
          (0, s.jsx)('svg', {
            xmlns: 'http://www.w3.org/2000/svg',
            viewBox: '0 0 300 271',
            fill: 'currentColor',
            children: (0, s.jsx)('path', {
              d: 'm236 0h46l-101 115 118 156h-92.6l-72.5-94.8-83 94.8h-46l107-123-113-148h94.9l65.5 86.6zm-16.1 244h25.5l-165-218h-27.4z',
            }),
          }),
          'X'
        ),
        es = (e) => [
          {
            title: (0, b.t)`Community`,
            links: [
              {
                label: (0, b.t)`Twitter`,
                href: 'https://twitter.com/curvefinance',
                icon: (0, s.jsx)(er, {}),
              },
              {
                label: (0, b.t)`Discord`,
                href: 'https://discord.gg/rgrfS7W',
                icon: (0, s.jsx)(q.E, {}),
              },
              {
                label: (0, b.t)`Youtube`,
                href: 'https://www.youtube.com/c/CurveFinance',
                icon: (0, s.jsx)(I.A, {}),
              },
              {
                label: (0, b.t)`Announcements`,
                href: 'https://t.me/curvefiann',
                icon: (0, s.jsx)(ee, {}),
              },
              { label: (0, b.t)`Telegram`, href: 'https://t.me/curvefi', icon: (0, s.jsx)(ee, {}) },
              {
                label: (0, b.t)`Telegram (CN)`,
                href: 'https://t.me/curveficn',
                icon: (0, s.jsx)($, {}),
              },
              {
                label: (0, b.t)`Telegram (RU)`,
                href: 'https://t.me/crvrussianchat',
                icon: (0, s.jsx)(et, {}),
              },
            ],
          },
          {
            title: (0, b.t)`Documentation`,
            links: [
              {
                label: (0, b.t)`News`,
                href: 'https://news.curve.finance/',
                icon: (0, s.jsx)(W, {}),
              },
              {
                label: (0, b.t)`User Docs`,
                href: 'https://resources.curve.finance/',
                icon: (0, s.jsx)(T.A, {}),
              },
              { label: (0, b.t)`Integrations`, href: 'integrations/', icon: (0, s.jsx)(Y, {}) },
              {
                label: (0, b.t)`Technical Docs`,
                href: 'https://docs.curve.finance/',
                icon: (0, s.jsx)(X, {}),
              },
              {
                label: (0, b.t)`Github`,
                href: 'https://github.com/curvefi',
                icon: (0, s.jsx)(E.A, {}),
              },
              {
                label: (0, b.t)`Risk Disclaimers`,
                href: `disclaimer/${(function (e) {
                  return 'lend' === e
                    ? '?tab=lend'
                    : 'crvusd' !== e
                      ? ''
                      : window.location.href.toLocaleLowerCase().includes('scrvusd')
                        ? '?tab=scrvusd'
                        : '?tab=crvusd';
                })(e)}`,
                icon: (0, s.jsx)(_, {}),
              },
            ],
          },
          {
            title: (0, b.t)`Security`,
            links: [
              {
                label: (0, b.t)`Audits`,
                href: 'https://docs.curve.finance/security/security/#security-audits',
                icon: (0, s.jsx)(z.A, {}),
              },
              {
                label: (0, b.t)`Bug Bounty`,
                href: 'https://docs.curve.finance/security/security/#bug-bounty',
                icon: (0, s.jsx)(N.A, {}),
              },
              {
                label: (0, b.t)`Curve Monitor`,
                href: 'https://curvemonitor.com/',
                icon: (0, s.jsx)(F, {}),
              },
              { label: (0, b.t)`CrvHub`, href: 'https://crvhub.com/', icon: (0, s.jsx)(K, {}) },
              {
                label: (0, b.t)`Dune Analytics`,
                href: 'https://dune.com/mrblock_buidl/Curve.fi',
                icon: (0, s.jsx)(G, {}),
              },
              {
                label: (0, b.t)`API Status`,
                href: 'https://statuspage.freshping.io/59335-CurveAPI',
                icon: (0, s.jsx)(R.A, {}),
              },
            ],
          },
        ],
        en = o.NC.src,
        el = (0, i.Ay)('img')({ alt: 'Llama', position: 'absolute' }),
        ei = ({ appName: e, networkId: t, headerHeight: r }) => {
          let [i, o, d] = (0, A.K)(),
            [p, h, u] = (0, A.K)(),
            [m, x] = (0, c.iq)(),
            g = (0, a.sA)();
          return (0, s.jsx)(n.A, {
            component: 'footer',
            'data-testid': 'footer',
            display: 'flex',
            justifyContent: 'center',
            sx: (e) => ({
              backgroundColor: e.design.Layer[3].Fill,
              paddingInline: C.B.Spacing.lg,
              paddingBlock: C.B.Spacing.xl,
            }),
            children: (0, s.jsxs)(l.A, {
              container: !0,
              spacing: C.B.Grid.Column_Spacing,
              rowGap: C.B.Grid.Row_Spacing,
              sx: { position: 'relative', maxWidth: C.B.MaxWidth.footer },
              'data-testid': 'footer-content',
              children: [
                (0, s.jsx)(l.A, { size: { mobile: 12, desktop: 3 }, children: (0, s.jsx)(U, {}) }),
                es(e).map((r) =>
                  (0, s.jsx)(
                    l.A,
                    {
                      size: { mobile: 12, tablet: 4, desktop: 3 },
                      children: (0, s.jsx)(V, { ...r, networkId: t, appName: e, isTiny: g }),
                    },
                    r.title
                  )
                ),
                (0, s.jsx)(el, {
                  src: en,
                  sx: { height: C.B.IconSize.xxl, right: C.B.Spacing.lg, cursor: 'pointer' },
                  onClick: o,
                }),
                null != i &&
                  (0, s.jsx)(w, {
                    open: i,
                    onClose: d,
                    isBeta: m,
                    setIsBeta: x,
                    openBetaSnackbar: h,
                  }),
                null != p && (0, s.jsx)(B, { open: p, onClose: u, headerHeight: r, isBeta: m }),
              ],
            }),
          });
        };
    },
    41257: () => {
      (Date.prototype.getUTCTimestamp = function () {
        return this.getTime() / 1e3;
      }),
        (Date.prototype.getLocalTimestamp = function () {
          return (this.getTime() - 6e4 * this.getTimezoneOffset()) / 1e3;
        }),
        (BigInt.prototype.fromWei = function () {
          return Number(this) / 1e18;
        });
    },
    61213: (e, t, r) => {
      r.d(t, { $: () => eA });
      var s = r(54568),
        n = r(7620),
        l = r(56924);
      let i = (0, r(48341).DU)([
        'html,body{display:block;height:100%;width:100%;}body{min-width:20rem;font-size:16px;color:var(--page--text-color);background-color:var(--page--background-color);scroll-behavior:smooth;}*{box-sizing:border-box;}html,body,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,button,abbr,acronym,address,big,cite,code,del,dfn,em,img,input,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-family:var(--font);}li{list-style:none;}.width--full{width:100%;}.height--full{height:100%;}.vertical-align-middle{vertical-align:middle;}',
      ]);
      var o = r(88456),
        a = r(9473),
        c = r.n(a),
        A = r(7806),
        C = r.n(A),
        d = r(55695),
        p = r(75673),
        h = r(89601),
        u = r(43448),
        m = r(68267),
        x = r(84693),
        g = r(94958),
        f = r(10304),
        v = r(39259),
        b = r(76344),
        w = r(48245),
        L = r(24186),
        j = r(16792),
        y = r(78158),
        D = r(33533),
        B = r(52213),
        H = r(77364),
        M = r(4693),
        Q = r(9720),
        k = r(46973),
        Z = r(33782),
        U = r(77489),
        S = r(50353),
        O = r(7219),
        P = r(11142),
        V = r(79214),
        z = r(3233);
      let N = {
          [V.s.Ethereum]: [
            'https://eth.drpc.org',
            'https://eth-pokt.nodies.app',
            'https://eth.blockrazor.xyz',
          ],
          [V.s.Arbitrum]: ['https://arb1.arbitrum.io/rpc', 'https://1rpc.io/arb'],
          [V.s.Avalanche]: ['https://api.avax.network/ext/bc/C/rpc'],
          [V.s.Base]: ['https://mainnet.base.org'],
          [V.s.Bsc]: ['https://56.rpc.thirdweb.com'],
          [V.s.Celo]: ['https://forno.celo.org'],
          [V.s.Fantom]: ['https://250.rpc.thirdweb.com'],
          [V.s.Fraxtal]: ['https://rpc.frax.com'],
          [V.s.Gnosis]: ['https://rpc.gnosischain.com'],
          [V.s.Kava]: ['https://evm.kava.io'],
          [V.s.Optimism]: ['https://mainnet.optimism.io'],
          [V.s.Polygon]: ['https://polygon-rpc.com'],
          [V.s.Moonbeam]: ['https://moonbeam.public.blastapi.io'],
          [V.s.Mantle]: ['https://rpc.mantle.xyz'],
          [V.s.Sonic]: ['https://rpc.soniclabs.com'],
          [V.s.XLayer]: ['https://rpc.xlayer.tech'],
          [V.s.Aurora]: ['https://mainnet.aurora.dev'],
          [V.s.Corn]: ['https://rpc.ankr.com/corn_maizenet', 'https://mainnet.corn-rpc.com'],
          [V.s.Taiko]: ['https://rpc.ankr.com/taiko', 'https://taiko.drpc.org'],
          [V.s.Ink]: ['https://rpc-gel.inkonchain.com', 'https://ink.drpc.org'],
          [V.s.Hyperliquid]: ['https://rpc.hyperliquid.xyz/evm', 'https://rpc.hypurrscan.io'],
          [V.s.Plume]: ['https://rpc.plume.org'],
          [V.s.Xdc]: ['https://rpc1.xinfin.network', 'https://rpc.xdcrpc.com'],
          [V.s.Tac]: ['https://turin.rpc.tac.build'],
          [V.s.MegaEth]: ['https://carrot.megaeth.com/rpc'],
          [V.s.Strata]: ['https://stratareth3666f0713.devnet-annapurna.stratabtc.org'],
          [V.s.ExpChain]: ['https://rpc0-testnet.expchain.ai'],
          [V.s.ZkSync]: ['https://zksync.drpc.org', 'https://mainnet.era.zksync.io'],
        },
        E = (0, d.x)({
          ...z.r,
          rpcUrls: { default: { http: N[V.s.Ethereum] }, public: { http: N[V.s.Ethereum] } },
        }),
        T = (0, d.x)({
          ...P.o,
          id: V.s.Hyperliquid,
          name: 'hyperliquid',
          testnet: !1,
          nativeCurrency: { name: 'Hype', symbol: 'HYPE', decimals: 18 },
          rpcUrls: { default: { http: N[V.s.Hyperliquid] } },
          blockExplorers: { default: { name: 'Hyperscan', url: 'https://www.hyperscan.com/' } },
        }),
        R = (0, d.x)({
          ...P.o,
          id: V.s.Tac,
          name: 'tac',
          testnet: !0,
          nativeCurrency: { name: 'tac', symbol: 'TAC', decimals: 8 },
          rpcUrls: { default: { http: N[V.s.Tac] } },
          blockExplorers: {
            default: { name: 'Turin Explorer', url: 'https://turin.explorer.tac.build/' },
          },
        }),
        I = (0, d.x)({
          ...P.o,
          id: V.s.MegaEth,
          name: 'MEGA Testnet',
          testnet: !0,
          nativeCurrency: z.r.nativeCurrency,
          rpcUrls: { default: { http: N[V.s.MegaEth] } },
          blockExplorers: {
            default: { name: 'Mega Explorer', url: 'https://www.megaexplorer.xyz/' },
          },
        }),
        J = (0, d.x)({
          ...P.o,
          id: V.s.Strata,
          name: 'Strata',
          testnet: !0,
          nativeCurrency: { name: 'BTC', symbol: 'BTC', decimals: 18 },
          rpcUrls: { default: { http: N[V.s.Strata] } },
          blockExplorers: {
            default: {
              name: 'Strata Explorer',
              url: 'https://blockscoutb86fae58ae.devnet-annapurna.stratabtc.org/',
            },
          },
        }),
        K = (0, d.x)({
          ...P.o,
          id: V.s.ExpChain,
          name: 'EXPchain',
          testnet: !0,
          nativeCurrency: { name: 'tZKJ', symbol: 'tZKJ', decimals: 18 },
          rpcUrls: { default: { http: N[V.s.ExpChain] } },
          blockExplorers: {
            default: { name: 'BlockScout', url: 'https://blockscout-testnet.expchain.ai/' },
          },
        }),
        q = [
          E,
          p.R,
          h.N,
          u.c,
          m.n,
          x.T,
          g._,
          f.O,
          v.d,
          b.d,
          T,
          w.L,
          L.c,
          R,
          j.S,
          I,
          J,
          y.E,
          K,
          D.D,
          B.A,
          H.m,
          M.P,
          Q.E,
          k.h,
          Z.Y,
          U.b,
          S.n,
          O.Z,
        ];
      var X = r(90046),
        G = r(80572),
        Y = r(53616),
        F = r(12815),
        W = r(87240),
        _ = r(35420);
      let $ = { [V.s.Tac]: 8 },
        ee = C()(
          (e) => {
            let t = Object.fromEntries(q.map((e) => [e.id, e])),
              r = Object.entries(e).map(([e, t]) => [+e, t]),
              s = (r) => c()([...(N[r] ?? []), e[r].rpcUrl, ...(t[r]?.rpcUrls.default.http ?? [])]);
            return (0, G.Z)({
              chains: r.map(([e, r]) =>
                (0, d.x)({
                  ...(t[e] ?? {
                    nativeCurrency: { name: r.symbol, symbol: r.symbol, decimals: $[e] ?? 18 },
                  }),
                  id: e,
                  testnet: r.isTestnet,
                  name: r.name,
                  rpcUrls: { default: { http: s(e) } },
                  ...(r.explorerUrl && {
                    blockExplorers: {
                      default: { name: new URL(r.explorerUrl).host, url: r.explorerUrl },
                    },
                  }),
                })
              ),
              connectors: Object.values(_.t),
              transports: Object.fromEntries(
                r.map(([e, t]) => [
                  e,
                  (0, Y.N)([
                    (0, F.l)(X.b),
                    ...s(e).map((e) => (0, W.L)(e, { batch: { batchSize: 3 } })),
                  ]),
                ])
              ),
              multiInjectedProviderDiscovery: !1,
            });
          },
          { max: 1 }
        );
      var et = r(75911),
        er = r(61873),
        es = r(38071),
        en = r(87606),
        el = r(82099),
        ei = r(54152);
      function eo({ children: e, persister: t, queryClient: r }) {
        return ((e = (0, s.jsxs)(s.Fragment, { children: [e, !es.OC && (0, s.jsx)(el.E, {})] })), t)
          ? (0, s.jsx)(ei.t, { client: r, persistOptions: { persister: t }, children: e })
          : (0, s.jsx)(en.QueryClientProvider, { client: r, children: e });
      }
      var ea = r(74043),
        ec = r(41265);
      let eA = ({ children: e, loading: t, networks: r }) => {
        let a = (0, et.nv)((e) => e.theme),
          c = (0, n.useMemo)(() => !t && ee(r), [r, t]);
        return (0, s.jsxs)('div', {
          suppressHydrationWarning: !0,
          style: { ...('chad' === a && ec.jq) },
          children: [
            (0, s.jsx)(i, {}),
            (0, s.jsx)(ea.NP, {
              theme: a,
              children: (0, s.jsx)(o.so, {
                children: (0, s.jsx)(eo, {
                  persister: er.a,
                  queryClient: er.q,
                  children: c && (0, s.jsx)(l.x, { config: c, children: e }),
                }),
              }),
            }),
          ],
        });
      };
    },
  },
]);
