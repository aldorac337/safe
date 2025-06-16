'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6467],
  {
    14633: (e, i, l) => {
      l.d(i, { A: () => s });
      var r = l(54568),
        t = l(27261),
        o = l.n(t);
      l(7620);
      var a = l(48341),
        n = l(31702);
      let d = (0, a.Ay)(o()).withConfig({ componentId: 'sc-4549052d-0' })(['', ''], n.$),
        s = ({ children: e, href: i = '', ...l }) => (0, r.jsx)(d, { ...l, href: i, children: e });
    },
    14695: (e, i, l) => {
      l.d(i, { _: () => t, d: () => r });
      let r = (e, i) =>
          ({
            [-2]: `2px 2px 0px 0px ${e.Color.Neutral[800]} inset`,
            [-1]: `1px 1px 0px 0px ${e.Color.Neutral[800]} inset`,
            1: '0px 0px 0px 1px #2A334524,0px 1px 1px -0.5px #2A334524,0px 3px 3px -1.5px #2A334624,0px 4px 4px -2px #2A334524,0px 8px 8px -8px #2A334514',
            2: '0px 0px 0px 1px #2A334524,0px 1px 1px -0.5px #2A334524,0px 3px 3px -1.5px #2A334624,0px 6px 6px -3px #2A334624,0px 8px 8px -6px #2A334524,0px 12px 12px -6px #2A334514',
            3: '0px 0px 0px 1px #2A334524,0px 1px 1px -0.5px #2A334524,0px 3px 3px -1.5px #2A334524,0px 8px 8px -4px #2A334524,0px 16px 16px -8px #2A334524,0px 32px 32px -16px #2A33451A',
          })[i],
        t = (e, i) =>
          r(e, i)
            .split(',')
            .map((e) => `inset ${e}`)
            .join(',');
    },
    31702: (e, i, l) => {
      l.d(i, { $: () => o });
      var r = l(48341),
        t = l(77878);
      let o = (0, r.AH)(
        [
          '',
          ';color:var(--link--color);font:var(--link--font-weight) var(--link--font);text-decoration:underline;transition:color 250ms cubic-bezier(0.4,0,0.2,1) 0ms;&:hover{color:var(--link--hover--color);text-decoration-color:var(--link--underline--hover-color);}&.active,&.active:hover{color:var(--link--active-color);background-color:var(--active--background-color);}',
          ' ',
          ' ',
          ' ',
          '',
        ],
        t.N,
        ({ size: e }) => {
          if ('small' === e)
            return `
        min-height: var(--height-small);
        padding: 0 var(--spacing-2);
        font-size: var(--font-size-2);
      `;
        },
        ({ variant: e }) => {
          if ('contained' === e)
            return `
        &:active {
          box-shadow: none;
          transform: translate3d(3px, 3px, 3px);
        }
    
        &:hover {
          color: var(--link_contained--color);
          background-color: var(--link_contained--background-color);
          text-decoration-color: var(--link_contained--underline-color);
        }
      `;
        },
        ({ isDarkBg: e }) => {
          if (e)
            return `
        color: var(--link_light--color);

        &:hover {
          color: var(--link_light--hover--color);
          text-decoration-color: var(--link_light--hover--color);
        }
      `;
        },
        ({ $noStyles: e }) => {
          if (e)
            return `
        color: inherit;
        text-transform: inherit;
        
        &:hover {
          color: inherit;
          text-decoration: inherit;
        }
      `;
        }
      );
    },
    35736: (e, i, l) => {
      l.d(i, { E: () => t.A, G: () => r.A });
      var r = l(59339),
        t = l(14633);
    },
    41265: (e, i, l) => {
      l.d(i, { jq: () => x, vX: () => m });
      var r = l(5230),
        t = l.n(r),
        o = l(40246),
        a = l.n(o),
        n = l(22174),
        d = l.n(n);
      let s = 'true' === l(40459).env.STORYBOOK,
        c = s ? { style: { fontFamily: 'MonaSans' } } : t(),
        g = s ? { style: { fontFamily: 'Hubot Sans' } } : a(),
        u = s ? { style: { fontFamily: 'Minecraft' } } : d(),
        h = [c.style.fontFamily, '"Helvetica Neue"', 'Helvetica', 'sans-serif'].join(','),
        b = [g.style.fontFamily, '"Helvetica Neue"', 'Helvetica', 'sans-serif'].join(','),
        p = [u.style.fontFamily, '"SF Mono Regular 11"', '"Ubuntu Mono"', 'monospace'].join(','),
        m = { 'Mona Sans': h, 'Hubot Sans': b, Minecraft: p },
        x = { '--font': b, '--button--font': p };
    },
    59339: (e, i, l) => {
      l.d(i, { A: () => n });
      var r = l(54568),
        t = l(48341),
        o = l(31702);
      let a = t.Ay.a.withConfig({ componentId: 'sc-5da00b5e-0' })(['', ''], o.$),
        n = function ({ className: e, children: i, ...l }) {
          return (0, r.jsx)(a, {
            target: '_blank',
            ...l,
            className: e,
            rel: 'noreferrer noopener',
            children: i,
          });
        };
    },
    69228: (e, i, l) => {
      l.d(i, { m: () => g });
      var r = l(54568),
        t = l(44876),
        o = l(78867),
        a = l(87401),
        n = l(84032),
        d = l(74043);
      let { Spacing: s } = n.B,
        c = ({ title: e, children: i }) =>
          (0, r.jsx)(d.iV, {
            inverted: !1,
            children: (0, r.jsxs)(t.A, {
              sx: { padding: s.md, backgroundColor: (e) => e.design.Layer[3].Fill, width: '100%' },
              onClick: (e) => e.stopPropagation(),
              children: [
                (0, r.jsx)(a.A, { variant: 'bodyMBold', color: 'textPrimary', children: e }),
                i,
              ],
            }),
          }),
        g = ({ title: e, body: i, clickable: l, children: t, slotProps: a, ...n }) =>
          (0, r.jsx)(o.A, {
            title: e && (0, r.jsx)(c, { title: e, children: i }),
            slotProps: {
              ...(!l && { popper: { sx: { userSelect: 'none', pointerEvents: 'none' } } }),
              tooltip: { sx: { '&': { padding: 0 } } },
            },
            ...n,
            children: t,
          });
    },
    72074: (e, i, l) => {
      l.d(i, { wl: () => eW, be: () => eP, L1: () => eN });
      var r = l(33377),
        t = l(84121),
        o = l(14695),
        a = l(72415),
        n = l(84032),
        d = l(41265);
      let { LineHeight: s, OutlineWidth: c, FontWeight: g, ButtonSize: u, FontSize: h } = n.B,
        b = ({ Fill: e, Label: i, Outline: l }) => ({
          color: i,
          backgroundColor: e,
          borderColor: l,
        }),
        p = ({ Default: e, Disabled: i, Hover: l, Current: r }) => ({
          ...b(e),
          '&:hover': b(l),
          '&:disabled': i && b(i),
          '&.current': r && b(r),
        }),
        m = (e, i, l, r, o) => ({
          [t.bK.breakpoints.up(o)]: { height: e, fontSize: i[o], fontWeight: l, lineHeight: r[o] },
        }),
        x = ({ height: e, fontSize: i, fontWeight: l = 'Bold', lineHeight: r }) => ({
          ...m(u[e], h[i], g[l], s[r], 'mobile'),
          ...m(u[e], h[i], g[l], s[r], 'tablet'),
          ...m(u[e], h[i], g[l], s[r], 'desktop'),
        }),
        y = ({ Button: e, Text: i }) => {
          let {
              Primary: l,
              Secondary: r,
              Success: o,
              Error: s,
              Outlined: g,
              Ghost: u,
              Navigation: h,
              Focus_Outline: b,
              Transition: m,
            } = e,
            y = {
              primary: p(l),
              secondary: p(r),
              success: p(o),
              error: p(s),
              outlined: p(g),
              ghost: p(u),
              navigation: p(h),
            },
            f = d.vX[i.FontFamily.Button];
          return {
            styleOverrides: {
              root: {
                variants: [
                  ...Object.entries(y).map(([e, i]) => ({ props: { color: e }, style: i })),
                  {
                    props: { variant: 'link' },
                    style: {
                      '&.MuiButton-link': { textTransform: 'none', padding: 0, height: a.XQ[400] },
                    },
                  },
                  {
                    props: { variant: 'inline' },
                    style: {
                      '&.MuiButton-inline': {
                        textTransform: 'none',
                        padding: 0,
                        border: 0,
                        lineHeight: 1,
                        height: 'auto',
                        minWidth: 'unset',
                        textAlign: 'start',
                        justifyContent: 'start',
                      },
                    },
                  },
                ],
                borderRadius: 0,
                border: `${c} solid transparent`,
                boxSizing: 'border-box',
                '&:focus-visible': { borderColor: b },
                fontFamily: f,
                textTransform: 'uppercase',
                transition: m,
              },
              sizeExtraSmall: {
                ...x({ height: 'xs', fontSize: 'sm', lineHeight: 'md' }),
                textTransform: 'none',
              },
              sizeSmall: x({ height: 'sm', fontSize: 'sm', lineHeight: 'md' }),
              sizeMedium: x({ height: 'md', fontSize: 'md', lineHeight: 'xl' }),
              sizeLarge: x({ height: 'lg', fontSize: 'md', lineHeight: 'xl' }),
              startIcon: {
                [t.bK.breakpoints.up('mobile')]: { marginInlineEnd: n.B.Spacing.xs.mobile },
                [t.bK.breakpoints.up('tablet')]: { marginInlineEnd: n.B.Spacing.xs.tablet },
                [t.bK.breakpoints.up('desktop')]: { marginInlineEnd: n.B.Spacing.xs.desktop },
              },
              endIcon: {
                [t.bK.breakpoints.up('mobile')]: { marginInlineStart: n.B.Spacing.xs.mobile },
                [t.bK.breakpoints.up('tablet')]: { marginInlineStart: n.B.Spacing.xs.tablet },
                [t.bK.breakpoints.up('desktop')]: { marginInlineStart: n.B.Spacing.xs.desktop },
              },
            },
          };
        },
        { ButtonSize: f, OutlineWidth: v } = n.B,
        B = ({ Button: e, Layer: i, Text: l }) => ({
          styleOverrides: {
            root: {
              height: f.sm,
              minWidth: f.sm,
              border: `${v} solid transparent`,
              borderRadius: '0',
              padding: 0,
              color: e.Ghost.Default.Label,
              transition: e.Transition,
              '&.current': { borderColor: i.Highlight.Outline },
              ':focus-visible': { borderColor: i.Highlight.Outline },
              '&:hover': {
                color: e.Ghost.Hover.Label,
                backgroundColor: 'transparent',
                filter: 'saturate(2)',
              },
              fontFamily: d.vX[l.FontFamily.Button],
            },
            sizeExtraSmall: { height: f.xs, minWidth: f.xs },
            sizeSmall: { height: f.sm, minWidth: f.sm },
            sizeMedium: { height: f.md, minWidth: f.md },
            sizeLarge: { height: f.lg, minWidth: f.lg },
          },
        }),
        {
          Spacing: F,
          ButtonSize: S,
          FontSize: C,
          FontWeight: A,
          LineHeight: L,
          OutlineWidth: H,
        } = n.B,
        k = ({ Label: e, Fill: i }) => ({ color: e, backgroundColor: i }),
        T = (e, i, l, r, o, a, n, d) => ({
          [t.bK.breakpoints.up(e)]: {
            minHeight: i,
            minWidth: l,
            ...(d && { height: d, width: d }),
            paddingBlock: r[e],
            paddingInline: o[e],
            fontSize: a[e],
            fontWeight: A.Bold,
            lineHeight: n[e],
          },
        }),
        M = ({
          minHeight: e,
          minWidth: i,
          paddingBlock: l,
          paddingInline: r,
          fontSize: t,
          lineHeight: o,
        }) => {
          let a = [S[e], S[i], F[l], F[r], C[t], L[o]];
          return { ...T('mobile', ...a), ...T('tablet', ...a), ...T('desktop', ...a) };
        },
        D = ({ size: e, padding: i, fontSize: l, lineHeight: r }) => {
          let t = [S[e], S[e], F[i], F[i], C[l], L[r], ...(e && [S[e]])];
          return {
            ...T('mobile', ...t),
            ...T('tablet', ...t),
            ...T('desktop', ...t),
            overflow: 'hidden',
          };
        },
        O = ({ Toggles: e, Button: i, Text: l }) => {
          let { Default: r, Hover: t, Current: o } = e;
          return {
            styleOverrides: {
              root: {
                ...k(r),
                '&:hover': k(t),
                '&.Mui-selected': k(o),
                '&.Mui-selected:hover': k(o),
                '&&': { margin: 0 },
                border: `${H} solid transparent !important`,
                borderRadius: 0,
                transition: i.Transition,
                fontFamily: d.vX[l.FontFamily.Button],
                textTransform: 'uppercase',
              },
              sizeExtraSmall: {
                ...M({
                  minHeight: 'xs',
                  minWidth: 'sm',
                  paddingBlock: 'xs',
                  paddingInline: 'sm',
                  fontSize: 'sm',
                  lineHeight: 'sm',
                }),
                textTransform: 'none',
              },
              sizeExtraSmallSquare: {
                ...D({ size: 'xs', padding: 'xs', fontSize: 'sm', lineHeight: 'sm' }),
                textTransform: 'none',
              },
              sizeSmall: M({
                minHeight: 'sm',
                minWidth: 'sm',
                paddingBlock: 'sm',
                paddingInline: 'md',
                fontSize: 'sm',
                lineHeight: 'sm',
              }),
              sizeSmallSquare: D({ size: 'sm', padding: 'sm', fontSize: 'sm', lineHeight: 'sm' }),
              sizeMedium: M({
                minHeight: 'md',
                minWidth: 'md',
                paddingBlock: 'sm',
                paddingInline: 'md',
                fontSize: 'md',
                lineHeight: 'xl',
              }),
              sizeMediumSquare: D({ size: 'md', padding: 'sm', fontSize: 'md', lineHeight: 'xl' }),
            },
          };
        },
        { Sizing: w, Spacing: z, ButtonSize: I } = n.B,
        W = (e, i) => ({
          styleOverrides: {
            root: {
              padding: `${z.lg.desktop} ${z.md.desktop} ${z.sm.desktop}`,
              borderBottom: `1px solid ${e.Layer[3].Outline}`,
              minHeight: `calc(${I.lg} + 1px)`,
              variants: [
                {
                  props: { size: 'small' },
                  style: {
                    minHeight: 'auto',
                    maxHeight: w.md.desktop,
                    padding: `${z.md.desktop} ${z.md.desktop} ${z.sm.desktop}`,
                  },
                },
              ],
            },
            action: { alignContent: 'center', alignSelf: 'center', margin: 0 },
            title: {
              ...i.headingSBold,
              variants: [{ props: { size: 'small' }, style: { ...i.headingXsBold } }],
            },
          },
        });
      var P = l(54568),
        N = l(44876),
        $ = l(69879);
      let E = (0, $.A)(
          (0, P.jsx)('svg', {
            viewBox: '0 0 16 16',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
            children: (0, P.jsx)('path', {
              d: 'M12.2314 3.97534C12.5396 4.17683 12.6261 4.58999 12.4246 4.89815L7.89123 11.8315C7.78439 11.9949 7.61131 12.1032 7.41766 12.128C7.22401 12.1527 7.02925 12.0913 6.8848 11.9599L3.95147 9.29328C3.67903 9.04561 3.65895 8.62398 3.90662 8.35154C4.1543 8.0791 4.57593 8.05902 4.84837 8.30669L7.20315 10.4474L11.3086 4.16849C11.5101 3.86032 11.9233 3.77385 12.2314 3.97534Z',
              fill: 'currentColor',
            }),
          }),
          'Check'
        ),
        { Sizing: j } = n.B,
        R = (0, $.A)((0, P.jsx)('svg', { viewBox: '0 0 24 24' }), 'Empty'),
        X = (e) =>
          (0, P.jsx)(N.A, {
            className: 'icon-wrapper',
            display: 'flex',
            sx: {
              outline: '1px solid currentColor',
              '& svg': {
                animation: 'checkmark-appear 300ms cubic-bezier(0.4, 0, 0.2, 1) forwards',
              },
              '@keyframes checkmark-appear': {
                from: { transform: 'scale(0)' },
                to: { transform: 'scale(1)' },
              },
            },
            children: e,
          }),
        _ = ({ size: e }) => ({ '& .icon-wrapper svg': (0, t.NI)({ fontSize: j[e] }) }),
        K = () => ({
          defaultProps: {
            icon: X((0, P.jsx)(R, {})),
            checkedIcon: X((0, P.jsx)(E, {})),
            disableRipple: !0,
          },
          styleOverrides: {
            root: {
              ..._({ size: 'sm' }),
              '&:hover .icon-wrapper, .MuiFormControlLabel-root:hover &:not(.Mui-disabled) .icon-wrapper, &.Mui-focusVisible .icon-wrapper':
                { outlineWidth: '2px' },
            },
            sizeSmall: { ..._({ size: 'xs' }) },
            sizeLarge: { ..._({ size: 'md' }) },
          },
        }),
        V = (e, i) => ({
          style: { backgroundColor: i.Fill[e], color: i.Label[e], borderColor: i.Border[e] },
          props: { color: e.toLowerCase() },
        }),
        { Sizing: U, Spacing: Z, IconSize: G } = n.B,
        Q = {
          extraSmall: { font: 'bodyXsBold', height: G.sm, iconSize: G.sm },
          small: { font: 'buttonXs', height: G.md, iconSize: G.sm },
          medium: { font: 'buttonXs', height: U.md, iconSize: G.md },
          large: { font: 'buttonM', height: U.md, iconSize: G.lg },
          extraLarge: { font: 'headingSBold', height: U.xl, iconSize: G.xl },
        },
        q = {
          extraSmall: { deleteIconSize: G.xs },
          small: { height: U.md, deleteIconSize: G.sm },
          medium: { font: 'buttonS', deleteIconSize: G.md },
          large: { height: U.lg, font: 'buttonS', deleteIconSize: G.lg },
          extraLarge: { height: U.xl, deleteIconSize: G.xl },
        },
        Y = ({ Chips: e, Text: { TextColors: i }, Badges: l }, r) => ({
          styleOverrides: {
            root: {
              borderStyle: 'solid',
              borderWidth: 1,
              borderColor: 'transparent',
              borderRadius: e.BorderRadius.NonClickable,
              color: i.Primary,
              backgroundColor: 'transparent',
              ...(0, t.NI)({ paddingInline: Z.xxs }),
              '&:has(.MuiChip-icon)': {
                ...(0, t.NI)({ gap: Z.xs }),
                '& .MuiChip-icon': { marginInline: 0 },
                '& .MuiChip-label': {
                  paddingInlineStart: 0,
                  paddingInlineEnd: Z.xs.desktop,
                  '&:empty': { display: 'none' },
                },
              },
            },
          },
          variants: [
            {
              props: { clickable: !0 },
              style: {
                borderRadius: e.BorderRadius.Clickable,
                borderColor: e.Default.Stroke,
                cursor: 'pointer',
                '& .MuiChip-deleteIcon': { margin: 0 },
                '&:hover, &:focus-visible': {
                  borderColor: 'transparent',
                  backgroundColor: e.Hover.Fill,
                  color: e.Hover.Label,
                  '& .MuiChip-deleteIcon': { fill: e.Hover.Label },
                },
              },
            },
            V('Default', l),
            V('Active', l),
            V('Alert', l),
            V('Highlight', l),
            V('Warning', l),
            V('Accent', l),
            {
              props: { color: 'selected' },
              style: {
                backgroundColor: e.Current.Fill,
                color: e.Current.Label,
                borderColor: e.Current.Outline,
                '& .MuiChip-deleteIcon': { fill: e.Current.Label },
              },
            },
            {
              props: { color: 'unselected' },
              style: {
                color: e.Default.Label,
                backgroundColor: e.Default.Fill,
                borderColor: e.Default.Stroke,
                '& .MuiChip-deleteIcon': { fill: e.Default.Label },
              },
            },
            ...Object.entries(Q).map(([e, { font: i, iconSize: l, ...o }]) => ({
              props: { size: e },
              style: {
                ...(0, t.NI)({ ...r[i], ...o }),
                '&:has(.MuiChip-icon)': { '& .MuiChip-icon': (0, t.NI)({ width: l, height: l }) },
              },
            })),
            ...Object.entries(q).map(([e, { font: i, deleteIconSize: l, ...o }]) => ({
              props: { size: e, clickable: !0 },
              style: {
                ...(0, t.NI)({ ...(i && r[i]), ...o }),
                '& .MuiChip-deleteIcon': (0, t.NI)({ width: l, height: l }),
              },
            })),
          ],
        });
      var J = l(83897);
      let ee = (0, $.A)(
          (0, P.jsxs)('svg', {
            viewBox: '0 0 16 16',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
            children: [
              (0, P.jsx)('path', {
                d: 'M8.79988 4.80006C8.79988 5.24189 8.44171 5.60006 7.99988 5.60006C7.55806 5.60006 7.19988 5.24189 7.19988 4.80006C7.19988 4.35823 7.55806 4.00006 7.99988 4.00006C8.44171 4.00006 8.79988 4.35823 8.79988 4.80006Z',
                fill: 'currentColor',
              }),
              (0, P.jsx)('path', {
                d: 'M6.40001 6.40006H8.00001C8.29456 6.40006 8.53334 6.63884 8.53334 6.93339V10.6667H9.60001V11.7334H6.40001V10.6667H7.46667V7.46672H6.40001V6.40006Z',
                fill: 'currentColor',
              }),
              (0, P.jsx)('path', {
                fillRule: 'evenodd',
                clipRule: 'evenodd',
                d: 'M7.99987 0.935425C4.09834 0.935425 0.935516 4.09825 0.935516 7.99978C0.935516 11.9013 4.09834 15.0641 7.99987 15.0641C11.9014 15.0641 15.0642 11.9013 15.0642 7.99978C15.0642 4.09825 11.9014 0.935425 7.99987 0.935425ZM1.94885 7.99978C1.94885 4.6579 4.65799 1.94876 7.99987 1.94876C11.3417 1.94876 14.0509 4.6579 14.0509 7.99978C14.0509 11.3416 11.3417 14.0508 7.99987 14.0508C4.65799 14.0508 1.94885 11.3416 1.94885 7.99978Z',
                fill: 'currentColor',
              }),
            ],
          }),
          'InfoCircled'
        ),
        { Spacing: ei, IconSize: el, OutlineWidth: er } = n.B,
        et = '.MuiAlertTitle-root, .MuiAlert-icon',
        eo = (
          { Layer: { 1: e, Feedback: i, Highlight: l }, Text: { TextColors: r } },
          { bodyXsRegular: o }
        ) => ({
          defaultProps: {
            iconMapping: {
              success: (0, P.jsx)(E, { fontSize: 'small' }),
              info: (0, P.jsx)(ee, { fontSize: 'small' }),
              warning: (0, P.jsx)(J.P, { fontSize: 'small' }),
              error: (0, P.jsx)(J.P, { fontSize: 'small' }),
            },
          },
          styleOverrides: {
            root: {
              ...(0, t.NI)({
                ...o,
                borderWidth: er,
                paddingInline: ei.xs,
                paddingBlockStart: 0,
                paddingBlockEnd: ei.xs,
              }),
              '& .MuiAlert-message': {
                ...(0, t.NI)({
                  paddingInlineEnd: ei.sm,
                  paddingBlockStart: ei.sm,
                  paddingBlockEnd: ei.xs,
                }),
              },
            },
            outlined: {
              backgroundColor: e.Fill,
              color: r.Secondary,
              '&.MuiAlert-colorInfo': { [et]: { color: r.Highlight }, borderColor: l.Outline },
              '&.MuiAlert-colorSuccess': {
                [et]: { color: r.Feedback.Success },
                borderColor: i.Success,
              },
              '&.MuiAlert-colorWarning': {
                [et]: { color: r.Feedback.Warning },
                borderColor: i.Warning,
              },
              '&.MuiAlert-colorError': { [et]: { color: r.Feedback.Error }, borderColor: i.Error },
            },
            filled: {
              color: r.Feedback.Inverted,
              '&.MuiAlert-colorInfo': { backgroundColor: i.Info },
              '&.MuiAlert-colorSuccess': { backgroundColor: i.Success },
              '&.MuiAlert-colorWarning': { backgroundColor: i.Warning, color: r.Primary },
              '&.MuiAlert-colorError': { backgroundColor: i.Error },
            },
            icon: {
              ...(0, t.NI)({
                paddingInlineStart: ei.sm,
                paddingBlockStart: ei.sm,
                paddingBlockEnd: ei.xs,
                marginRight: ei.xs,
              }),
              '& svg': (0, t.NI)({ width: el.sm, height: el.sm }),
            },
          },
        }),
        ea = ({}, { bodySBold: e }) => ({
          styleOverrides: { root: (0, t.NI)({ ...e, height: el.sm, marginBlockEnd: '4px' }) },
        }),
        { ButtonSize: en, Spacing: ed } = n.B,
        es = (e) => ({
          styleOverrides: {
            root: {
              ...(0, t.NI)({
                height: en.md,
                transition: e.Button.Transition,
                gap: ed.sm,
                paddingBlock: ed.xs,
                paddingInline: ed.sm,
              }),
              '&.Mui-focusVisible': {
                backgroundColor: e.Layer.TypeAction.Hover,
                '.MuiTypography-root': { '--mui-palette-text-primary': 'inherit' },
              },
              '&.Mui-selected': {
                backgroundColor: e.Layer.TypeAction.Selected,
                '&:hover': { backgroundColor: e.Layer.TypeAction.Selected },
              },
            },
            dense: { height: en.sm },
          },
        });
      var ec = l(1117);
      let { Spacing: eg, Sizing: eu, IconSize: eh } = n.B,
        eb = eh.lg,
        ep = (e, i) => ({
          defaultProps: { IconComponent: ec.A },
          styleOverrides: {
            root: {
              border: 'none',
              '& .MuiOutlinedInput-notchedOutline': {
                border: 'none',
                borderBottom: `1px solid ${e.Layer[3].Outline}`,
              },
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                border: `2px solid ${e.Inputs.Base.Default.Border.Active}`,
              },
            },
            select: {
              display: 'flex',
              alignItems: 'center',
              ...i.bodyMBold,
              ...(0, t.NI)({
                paddingBlock: eg.xs,
                paddingInlineStart: eg.sm,
                height: eu.xl,
                '--icon-size': eb,
                mask: 'linear-gradient(to right, black calc(100% - var(--icon-size)), transparent calc(100% - var(--icon-size)))',
              }),
            },
            icon: {
              transition: 'transform 225ms cubic-bezier(0.4, 0, 0.2, 1)',
              ...(0, t.NI)({
                width: eb,
                height: eb,
                '--icon-size': eb,
                top: '50%',
                translate: '0 calc(var(--icon-size) / -2)',
              }),
              right: 0,
            },
          },
        }),
        em = ({ Switch: { Default: e, Checked: i }, Button: { Focus_Outline: l } }) => ({
          styleOverrides: {
            root: { padding: 0, ':focus-within': { '.MuiSwitch-track': { borderColor: l } } },
            switchBase: { borderRadius: 0, '&.Mui-checked+.MuiSwitch-track': { opacity: 1 } },
            track: {
              borderRadius: 0,
              backgroundColor: e.Fill,
              border: `1px solid ${e.Outline}`,
              '.Mui-checked &': { backgroundColor: i.Fill, borderColor: i.Outline },
            },
            thumb: { borderRadius: 0, color: e.Label, '.Mui-checked &': { color: i.Label } },
          },
        }),
        { Spacing: ex, MaxWidth: ey } = n.B,
        ef = (e, i) => ({
          defaultProps: {
            enterDelay: a.dw.TooltipEnter,
            enterNextDelay: a.dw.TooltipEnter,
            enterTouchDelay: a.dw.TooltipEnter,
          },
          styleOverrides: {
            tooltip: {
              color: e.Text.TextColors.Secondary,
              backgroundColor: e.Layer[3].Fill,
              boxShadow: (0, o.d)(e, 2),
              maxWidth: ey.tooltip,
              display: 'flex',
              alignItems: 'center',
              ...(0, t.NI)({ padding: ex.md, ...i.bodyMBold }),
            },
          },
        }),
        { Sizing: ev } = n.B,
        eB = (0, $.A)((0, P.jsx)('svg', { viewBox: '0 0 24 24' }), 'Empty'),
        eF = (0, $.A)(
          (0, P.jsx)('svg', {
            viewBox: '0 0 24 24',
            children: (0, P.jsx)('circle', { cx: '12', cy: '12', r: '6', fill: 'currentColor' }),
          }),
          'Circle'
        ),
        eS = (e) =>
          (0, P.jsx)(N.A, {
            className: 'icon-wrapper',
            display: 'flex',
            sx: {
              outline: '1px solid currentColor',
              borderRadius: '50%',
              '& svg': { animation: 'circle-appear 300ms cubic-bezier(0.4, 0, 0.2, 1) forwards' },
              '@keyframes circle-appear': {
                from: { transform: 'scale(0)' },
                to: { transform: 'scale(1)' },
              },
            },
            children: e,
          }),
        eC = ({ size: e }) => ({ '& .icon-wrapper svg': (0, t.NI)({ fontSize: ev[e] }) }),
        eA = () => ({
          defaultProps: {
            icon: eS((0, P.jsx)(eB, {})),
            checkedIcon: eS((0, P.jsx)(eF, {})),
            disableRipple: !0,
          },
          styleOverrides: {
            root: {
              ...eC({ size: 'sm' }),
              '&:hover .icon-wrapper, .MuiFormControlLabel-root:hover &:not(.Mui-disabled) .icon-wrapper, &.Mui-focusVisible .icon-wrapper':
                { outlineWidth: '2px' },
            },
            sizeSmall: { ...eC({ size: 'xs' }) },
            sizeLarge: { ...eC({ size: 'md' }) },
          },
        }),
        { Sizing: eL } = n.B,
        eH = { small: eL.xs, medium: eL.sm },
        ek = {
          ...(0, t.NI)({ height: eH.small }),
          borderRadius: 0,
          border: 'none',
          '&.MuiSlider-sizeMedium, .MuiSlider-sizeMedium &': (0, t.NI)({ height: eH.medium }),
        },
        eT = (e) => ({
          '&::after': {
            content: '""',
            position: 'absolute',
            inset: 0,
            right: -10,
            left: -10,
            border: `1px solid ${e.Color.Neutral[500]}`,
            zIndex: -1,
            backgroundColor: 'var(--slider-background)',
          },
        }),
        eM = ':not(:has([data-index="1"]))',
        eD = (e) => ({
          '&::before': {
            content: '""',
            position: 'absolute',
            left: -10,
            width: 10,
            height: '100%',
          },
          [`&${eM}::before`]: { backgroundColor: e.Button.Primary.Default.Fill },
          [`&.Mui-disabled${eM}::before`]: { backgroundColor: 'var(--mui-palette-grey-400)' },
        }),
        eO = (e) => ({
          defaultProps: { size: 'small' },
          styleOverrides: {
            root: {
              ...ek,
              borderRadius: 0,
              '&': { paddingBlock: 0 },
              position: 'relative',
              ...eT(e),
              ...eD(e),
              '&.borderless::after': { border: 0 },
            },
            thumb: {
              ...ek,
              width: 20,
              background: `${e.Color.Neutral[950]} url(${e.Inputs.SliderThumbImage}) center no-repeat`,
              transition: `background ${a.Uw}, border ${a.Uw}`,
              '&:hover': {
                backdropFilter: 'invert(1)',
                background: `${e.Color.Neutral[50]} url(${e.Inputs.SliderThumbImage}) center no-repeat`,
                backgroundBlendMode: 'difference',
                border: `1px solid ${e.Color.Primary[500]}`,
              },
              '&:hover, &.Mui-focusVisible': { boxShadow: 'none' },
              '&.Mui-disabled': {
                background: `${e.Color.Neutral[600]} url(${e.Inputs.SliderThumbImage}) center no-repeat`,
              },
            },
            track: ek,
            rail: { height: 0 },
          },
        });
      var ew = l(81473);
      let ez = {
          headingXxl: 'h1',
          headingMBold: 'h2',
          headingMLight: 'h3',
          headingSBold: 'h4',
          headingXsBold: 'h5',
          headingXsMedium: 'h6',
          bodyMRegular: 'p',
          bodyMBold: 'p',
          bodySRegular: 'p',
          bodySBold: 'p',
          bodyXsRegular: 'p',
          bodyXsBold: 'p',
          buttonXs: 'span',
          buttonS: 'span',
          buttonM: 'span',
          tableHeaderM: 'p',
          tableHeaderS: 'p',
          tableCellL: 'p',
          tableCellMRegular: 'p',
          tableCellMBold: 'p',
          tableCellSRegular: 'p',
          tableCellSBold: 'p',
          highlightXsNotional: 'p',
          highlightXs: 'p',
          highlightS: 'p',
          highlightM: 'p',
          highlightL: 'p',
          highlightXl: 'p',
          highlightXxl: 'p',
        },
        eI = ({ Text: e }) => ({
          defaultProps: { variant: 'bodyMRegular', variantMapping: ez },
          variants: Object.entries(e.TextColors.Feedback).map(([e, i]) => ({
            props: { color: e.toLowerCase() },
            style: { color: i },
          })),
        }),
        eW = n.B.ButtonSize.sm,
        eP = { width: '100%', minWidth: 320, maxWidth: '100vw' },
        eN = (e, i) => ({
          MuiAlert: eo(e, i),
          MuiAlertTitle: ea(e, i),
          MuiButton: y(e),
          MuiButtonBase: { defaultProps: { disableRipple: !0 } },
          MuiCardHeader: W(e, i),
          MuiCardActions: {
            styleOverrides: {
              root: {
                borderTop: `1px solid ${e.Layer[3].Outline}`,
                minHeight: n.B.ButtonSize.lg,
                justifyContent: 'center',
              },
            },
          },
          MuiCheckbox: K(),
          MuiChip: Y(e, i),
          MuiContainer: { styleOverrides: { root: { display: 'flex', maxWidth: 'var(--width)' } } },
          MuiDialog: {
            styleOverrides: {
              paper: { maxHeight: '100dvh', [t.bK.breakpoints.down('tablet')]: { margin: 0 } },
            },
          },
          MuiDivider: { styleOverrides: { root: { borderColor: e.Layer[2].Outline } } },
          MuiFormControlLabel: {
            styleOverrides: {
              root: { margin: '0' },
              label: { marginLeft: n.B.Spacing.xs.desktop, ...i.headingXsBold },
            },
          },
          MuiIconButton: B(e),
          MuiLinearProgress: {
            styleOverrides: {
              root: { backgroundColor: e.Color.Neutral[300] },
              bar: { backgroundColor: e.Color.Primary[500] },
            },
          },
          MuiToggleButton: O(e),
          MuiToggleButtonGroup: {
            styleOverrides: {
              root: ({ ownerState: e }) => ({ gap: e.compact ? '0rem' : '0.25rem' }),
            },
          },
          MuiInputBase: {
            styleOverrides: {
              root: {
                backgroundColor: e.Inputs.Base.Default.Fill,
                ':has(input:autofill)': {
                  backgroundColor: 'light-dark(rgb(232, 240, 254), rgba(70, 90, 126, 0.4))',
                  boxShadow: '0 0 0 100px #266798 inset',
                  '& svg': { color: 'rgb(232, 240, 254)' },
                },
                '& .MuiOutlinedInput-notchedOutline': {
                  borderWidth: 1,
                  transition: `border-color ${a.Uw}`,
                },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: e.Inputs.Base.Default.Border.Active,
                },
                '&.Mui-error .MuiOutlinedInput-notchedOutline': {
                  borderColor: e.Inputs.Base.Default.Border.Error,
                },
              },
              input: { height: n.B.ButtonSize.md, boxSizing: 'border-box' },
              inputSizeSmall: { height: n.B.ButtonSize.sm },
            },
          },
          MuiMenuItem: es(e),
          MuiSelect: ep(e, i),
          MuiSlider: eO(e),
          MuiSkeleton: {
            styleOverrides: {
              root: { backgroundColor: (0, r.X4)(e.Text.TextColors.Primary, 0.13) },
            },
          },
          MuiTab: (0, ew.Yk)(e),
          MuiTabs: (0, ew.Xq)(e),
          MuiTableRow: {
            styleOverrides: {
              root: {
                backgroundColor: e.Table.Row.Default,
                '&.Mui-selected': { backgroundColor: e.Table.Row.Selected },
              },
              hover: { backgroundColor: e.Table.Row.Hover },
              head: { backgroundColor: e.Table.Header.Fill },
            },
          },
          MuiToolbar: { styleOverrides: { root: { minHeight: eW, paddingX: 3 } } },
          MuiTooltip: ef(e, i),
          MuiPaper: {
            styleOverrides: {
              root: { boxShadow: (0, o.d)(e, 1), backgroundImage: 'none' },
              elevation2: { boxShadow: (0, o.d)(e, 2) },
              elevation3: { boxShadow: (0, o.d)(e, 3) },
              elevation11: { boxShadow: (0, o.d)(e, -1) },
              elevation12: { boxShadow: (0, o.d)(e, -2) },
            },
          },
          MuiPopover: {
            defaultProps: { marginThreshold: 8, elevation: 3 },
            styleOverrides: {
              paper: {
                backgroundColor: e.Layer[3].Fill,
                '& .MuiMenu-list': { maxHeight: n.B.MaxHeight.popover },
              },
            },
          },
          MuiRadio: eA(),
          MuiSwitch: em(e),
          MuiTypography: eI(e),
        });
    },
    74043: (e, i, l) => {
      l.d(i, { Q_: () => $, iV: () => N, NP: () => P });
      var r = l(54568),
        t = l(7806),
        o = l.n(t),
        a = l(31809),
        n = l(93790),
        d = l(77310),
        s = l(84121),
        c = l(72074),
        g = l(72415);
      let u = {
          plain: {
            Light: (function () {
              let e = {
                  Primary: g.ri[950],
                  Secondary: g.ri[700],
                  Tertiary: g.ri[500],
                  Disabled: g.ri[400],
                  Highlight: g.w8[500],
                  Feedback: {
                    Success: g.vd[600],
                    Warning: g.B6[400],
                    Error: g.B6[500],
                    Inverted: g.ri[50],
                  },
                },
                i = {
                  1: { Fill: g.ri[50], Outline: g.ri[300] },
                  2: { Fill: g.ri[100], Outline: g.ri[200] },
                  3: { Fill: g.ri[50], Outline: g.ri[300] },
                  Highlight: g.w8[500],
                  TypeAction: { Selected: g.w8[100], Hover: g.ri[150] },
                  Feedback: {
                    Info: g.w8[500],
                    Success: g.vd[600],
                    Warning: g.B6[300],
                    Error: g.B6[500],
                  },
                };
              return {
                Text: e,
                Layer: i,
                Tables: { Header: { Fill: g.ri[200] } },
                Badges: {
                  Label: {
                    Default: e.Primary,
                    Active: g.ri[10],
                    Alert: g.ri[10],
                    Highlight: g.w8[500],
                    Warning: g.ri[975],
                    Accent: g.ri[10],
                  },
                  Border: {
                    Default: g.ri[400],
                    Active: g.vd[400],
                    Alert: g.B6[500],
                    Highlight: g.w8[500],
                    Warning: g.B6[300],
                    Accent: g.w8[500],
                  },
                  Fill: {
                    Default: i[1].Fill,
                    Active: g.vd[400],
                    Alert: g.B6[500],
                    Highlight: i[1].Fill,
                    Warning: g.B6[300],
                    Accent: g.w8[500],
                  },
                },
              };
            })(),
            Dark: (function () {
              let e = {
                  Primary: g.ri[50],
                  Secondary: g.ri[300],
                  Tertiary: g.ri[400],
                  Disabled: g.ri[500],
                  Highlight: g.w8[400],
                  Feedback: {
                    Success: g.vd[400],
                    Warning: g.B6[300],
                    Error: g.B6[500],
                    Inverted: g.ri[950],
                  },
                },
                i = {
                  1: { Fill: g.ri[950], Outline: g.ri[900] },
                  2: { Fill: g.ri[900], Outline: g.ri[800] },
                  3: { Fill: g.ri[800], Outline: g.ri[700] },
                  Highlight: g.w8[500],
                  TypeAction: { Selected: g.w8[900], Hover: g.ri[800] },
                  Feedback: {
                    Info: g.w8[50],
                    Success: g.vd[300],
                    Warning: g.B6[400],
                    Error: g.B6[500],
                  },
                };
              return {
                Text: e,
                Layer: i,
                Tables: { Header: { Fill: g.ri[800] } },
                Badges: {
                  Label: {
                    Default: e.Primary,
                    Active: g.ri[10],
                    Alert: g.ri[10],
                    Highlight: g.w8[400],
                    Warning: g.ri[975],
                    Accent: g.ri[10],
                  },
                  Border: {
                    Default: g.ri[600],
                    Active: g.vd[500],
                    Alert: g.B6[500],
                    Highlight: g.w8[400],
                    Warning: g.B6[300],
                    Accent: g.w8[400],
                  },
                  Fill: {
                    Default: i[1].Fill,
                    Active: g.vd[500],
                    Alert: g.B6[500],
                    Highlight: i[1].Fill,
                    Warning: g.B6[300],
                    Accent: g.w8[400],
                  },
                },
              };
            })(),
            Chad: (function () {
              let e = {
                  Primary: g.ri[950],
                  Secondary: g.ri[700],
                  Tertiary: g.ri[500],
                  Disabled: g.ri[400],
                  Highlight: g.Ac[600],
                  Feedback: {
                    Success: g.vd[600],
                    Warning: g.B6[400],
                    Error: g.B6[500],
                    Inverted: g.ri[50],
                  },
                },
                i = {
                  1: { Fill: g.Ac[100], Outline: g.Ac[300] },
                  2: { Fill: g.Ac[200], Outline: g.Ac[400] },
                  3: { Fill: g.Ac[300], Outline: g.Ac[500] },
                  Highlight: g.Ac[800],
                  TypeAction: { Selected: g.Ac[50], Hover: g.Ac[200] },
                  Feedback: {
                    Info: g.Ac[700],
                    Success: g.vd[600],
                    Warning: g.B6[300],
                    Error: g.B6[500],
                  },
                };
              return {
                Text: e,
                Layer: i,
                Tables: { Header: { Fill: g.Ac[50] } },
                Badges: {
                  Label: {
                    Default: e.Primary,
                    Active: g.ri[10],
                    Alert: g.ri[10],
                    Highlight: g.Ac[800],
                    Warning: g.ri[975],
                    Accent: g.ri[10],
                  },
                  Border: {
                    Default: g.ri[975],
                    Active: g.vd[500],
                    Alert: g.B6[500],
                    Highlight: g.Ac[800],
                    Warning: g.B6[300],
                    Accent: g.Ac[800],
                  },
                  Fill: {
                    Default: i[1].Fill,
                    Active: g.vd[500],
                    Alert: g.B6[500],
                    Highlight: i[1].Fill,
                    Warning: g.B6[300],
                    Accent: g.Ac[800],
                  },
                },
              };
            })(),
          },
          inverted: {
            Light: (function () {
              let e = {
                  1: { Fill: g.ri[950], Outline: g.ri[600] },
                  2: { Fill: g.ri[900], Outline: g.ri[750] },
                  3: { Fill: g.ri[750], Outline: g.ri[600] },
                  Highlight: g.w8[500],
                  TypeAction: { Selected: g.ri[850], Hover: g.ri[900] },
                  Feedback: {
                    Info: g.w8[800],
                    Success: g.vd[300],
                    Warning: g.B6[400],
                    Error: g.B6[500],
                  },
                },
                i = {
                  Primary: g.ri[50],
                  Secondary: g.ri[300],
                  Tertiary: g.ri[400],
                  Disabled: g.ri[500],
                  Highlight: g.w8[500],
                  Feedback: {
                    Success: g.vd[300],
                    Warning: g.B6[300],
                    Error: g.B6[500],
                    Inverted: g.ri[950],
                  },
                };
              return {
                Text: i,
                Layer: e,
                Tables: { Header: { Fill: g.ri[800] } },
                Badges: {
                  Label: {
                    Default: i.Primary,
                    Active: g.ri[10],
                    Alert: g.ri[10],
                    Highlight: g.w8[400],
                    Warning: g.ri[975],
                    Accent: g.ri[10],
                  },
                  Border: {
                    Default: g.ri[600],
                    Active: g.vd[400],
                    Alert: g.B6[500],
                    Highlight: g.w8[400],
                    Warning: g.B6[300],
                    Accent: g.w8[400],
                  },
                  Fill: {
                    Default: e[1].Fill,
                    Active: g.vd[400],
                    Alert: g.B6[500],
                    Highlight: g.ri[10],
                    Warning: g.B6[300],
                    Accent: g.w8[400],
                  },
                },
              };
            })(),
            Dark: (function () {
              let e = {
                  Primary: g.ri[950],
                  Secondary: g.ri[700],
                  Tertiary: g.ri[600],
                  Disabled: g.ri[400],
                  Highlight: g.w8[500],
                  Feedback: {
                    Success: g.vd[600],
                    Warning: g.B6[400],
                    Error: g.B6[500],
                    Inverted: g.ri[50],
                  },
                },
                i = {
                  1: { Fill: g.ri[75], Outline: g.ri[300] },
                  2: { Fill: g.ri[100], Outline: g.ri[200] },
                  3: { Fill: g.ri[50], Outline: g.ri[300] },
                  Highlight: g.w8[500],
                  TypeAction: { Selected: g.w8[100], Hover: g.w8[50] },
                  Feedback: {
                    Info: g.w8[500],
                    Success: g.vd[600],
                    Warning: g.B6[300],
                    Error: g.B6[500],
                  },
                };
              return {
                Text: e,
                Layer: i,
                Tables: { Header: { Fill: g.ri[200] } },
                Badges: {
                  Label: {
                    Default: g.ri[975],
                    Active: g.ri[10],
                    Alert: g.ri[10],
                    Highlight: g.w8[500],
                    Warning: g.ri[975],
                    Accent: g.ri[10],
                  },
                  Border: {
                    Default: g.ri[975],
                    Active: g.vd[400],
                    Alert: g.B6[500],
                    Highlight: g.w8[500],
                    Warning: g.B6[300],
                    Accent: g.w8[500],
                  },
                  Fill: {
                    Default: i[1].Fill,
                    Active: g.vd[500],
                    Alert: g.B6[500],
                    Highlight: i[1].Fill,
                    Warning: g.B6[300],
                    Accent: g.w8[500],
                  },
                },
              };
            })(),
            Chad: (function () {
              let e = {
                  Primary: g.ri[50],
                  Secondary: g.ri[300],
                  Tertiary: g.ri[400],
                  Disabled: g.ri[500],
                  Highlight: g.Ac[400],
                  Feedback: {
                    Success: g.vd[500],
                    Warning: g.B6[300],
                    Error: g.B6[500],
                    Inverted: g.ri[950],
                  },
                },
                i = {
                  1: { Fill: g.Ac[950], Outline: g.Ac[800] },
                  2: { Fill: g.Ac[800], Outline: g.Ac[600] },
                  3: { Fill: g.Ac[700], Outline: g.Ac[500] },
                  Highlight: g.Ac[400],
                  TypeAction: { Selected: g.Ac[800], Hover: g.Ac[900] },
                  Feedback: {
                    Info: g.ri[850],
                    Success: g.vd[300],
                    Warning: g.B6[400],
                    Error: g.B6[500],
                  },
                };
              return {
                Text: e,
                Layer: i,
                Tables: { Header: { Fill: g.Ac[800] } },
                Badges: {
                  Label: {
                    Default: e.Primary,
                    Active: g.ri[10],
                    Alert: g.ri[10],
                    Highlight: g.Ac[200],
                    Warning: g.ri[975],
                    Accent: g.ri[10],
                  },
                  Border: {
                    Default: g.ri[600],
                    Active: g.vd[500],
                    Alert: g.B6[500],
                    Highlight: g.Ac[200],
                    Warning: g.B6[300],
                    Accent: g.Ac[400],
                  },
                  Fill: {
                    Default: i[1].Fill,
                    Active: g.vd[500],
                    Alert: g.B6[500],
                    Highlight: i[1].Fill,
                    Warning: g.B6[300],
                    Accent: g.Ac[400],
                  },
                },
              };
            })(),
          },
        },
        { plain: h, inverted: b } = u,
        p = `all ${g.Uw}`,
        m = '0 0 auto',
        x = 'auto 0 0',
        y = (e) => {
          let i = { Neutral: g.ri, Primary: g.w8, Secondary: g.vd, Tertiary: g.B6 },
            l = {
              1: e.Layer[1],
              2: e.Layer[2],
              3: e.Layer[3],
              App: { Background: '#f0edeb' },
              Highlight: { Fill: e.Layer.Highlight, Outline: e.Layer.Highlight },
              TypeAction: e.Layer.TypeAction,
              Feedback: e.Layer.Feedback,
            },
            r = {
              TextColors: {
                Primary: e.Text.Primary,
                Secondary: e.Text.Secondary,
                Tertiary: e.Text.Tertiary,
                Highlight: e.Text.Highlight,
                Disabled: e.Text.Disabled,
                Feedback: e.Text.Feedback,
              },
              FontFamily: {
                Heading: 'Mona Sans',
                Body: 'Mona Sans',
                Mono: 'Mona Sans',
                Button: 'Mona Sans',
              },
            },
            t = {
              Focus_Outline: i.Primary[500],
              Transition: p,
              Primary: {
                Default: { Label: g.ri[50], Fill: g.w8[500] },
                Hover: { Label: g.ri[50], Fill: g.ri[900] },
                Disabled: { Label: r.TextColors.Disabled, Fill: i.Primary[100] },
              },
              Secondary: {
                Default: { Label: g.ri[50], Fill: g.ri[900] },
                Hover: { Label: g.ri[50], Fill: g.w8[500] },
                Disabled: { Label: r.TextColors.Disabled, Fill: i.Neutral[600] },
              },
              Outlined: {
                Default: { Label: g.ri[950], Outline: g.ri[300] },
                Hover: { Label: g.w8[500], Outline: g.w8[500] },
                Disabled: { Label: r.TextColors.Disabled, Outline: r.TextColors.Disabled },
              },
              Ghost: {
                Default: { Label: r.TextColors.Highlight },
                Hover: { Label: g.ri[975] },
                Disabled: { Label: r.TextColors.Disabled, Fill: g.ri[500] },
              },
              Success: {
                Default: { Label: g.ri[900], Fill: g.vd[400] },
                Hover: { Label: g.vd[300], Fill: g.ri[900] },
                Disabled: { Label: r.TextColors.Disabled, Fill: g.vd[600] },
              },
              Error: {
                Default: { Label: g.ri[50], Fill: g.B6[500] },
                Hover: { Label: g.B6[400], Fill: g.ri[900] },
                Disabled: { Label: g.ri[300], Fill: g.B6[700] },
              },
              Navigation: {
                Default: { Label: r.TextColors.Secondary },
                Hover: { Label: r.TextColors.Primary, Fill: l[1].Fill },
                Current: { Label: g.ri[50], Fill: l.Highlight.Fill },
              },
            },
            o = {
              Transition: p,
              UnderLined: {
                Inset: x,
                Default: { Label: r.TextColors.Secondary, Outline: i.Neutral[200] },
                Hover: { Label: r.TextColors.Highlight, Outline: l.Highlight.Outline },
                Current: { Label: r.TextColors.Primary, Outline: i.Primary[500] },
              },
              Contained: {
                Default: { Label: r.TextColors.Secondary, Fill: i.Neutral[300] },
                Hover: { Label: i.Neutral[50], Fill: i.Neutral[900] },
                Current: { Label: r.TextColors.Primary, Fill: l[1].Fill, Outline: i.Primary[500] },
              },
              OverLined: {
                Inset: m,
                Default: { Label: r.TextColors.Secondary, Outline: i.Neutral[200] },
                Hover: {
                  Label: r.TextColors.Primary,
                  Fill: i.Neutral[200],
                  Outline: i.Neutral[500],
                },
                Current: { Label: r.TextColors.Primary, Outline: i.Primary[500] },
              },
            },
            a = {
              BorderRadius: { Clickable: 0, NonClickable: '100px' },
              Default: { Label: r.TextColors.Secondary, Fill: l[2].Fill, Stroke: l[2].Outline },
              Hover: { Label: i.Neutral[50], Fill: i.Neutral[900] },
              Current: {
                Label: r.TextColors.Highlight,
                Fill: l[2].Fill,
                Outline: l.Highlight.Outline,
              },
            },
            n = {
              Label: {
                Default: e.Badges.Label.Default,
                Active: e.Badges.Label.Active,
                Alert: e.Badges.Label.Alert,
                Highlight: e.Badges.Label.Highlight,
                Warning: e.Badges.Label.Warning,
                Accent: e.Badges.Label.Accent,
              },
              Border: {
                Default: e.Badges.Border.Default,
                Active: e.Badges.Border.Active,
                Alert: e.Badges.Border.Alert,
                Highlight: e.Badges.Border.Highlight,
                Warning: e.Badges.Border.Warning,
                Accent: e.Badges.Border.Accent,
              },
              Fill: {
                Default: e.Badges.Fill.Default,
                Active: e.Badges.Fill.Active,
                Alert: e.Badges.Fill.Alert,
                Highlight: e.Badges.Fill.Highlight,
                Warning: e.Badges.Fill.Warning,
                Accent: e.Badges.Fill.Accent,
              },
            },
            d = {
              Default: { Label: r.TextColors.Primary },
              Hover: { Label: r.TextColors.Highlight, Fill: l[3].Fill },
              Current: { Label: g.ri[50], Fill: i.Neutral[900] },
            },
            s = {
              Header: { Fill: e.Tables.Header.Fill },
              Row: {
                Default: e.Layer[1].Fill,
                Selected: e.Layer.TypeAction.Selected,
                Hover: e.Layer.TypeAction.Hover,
              },
            },
            c = {
              Base: {
                Default: {
                  Fill: g.ri[100],
                  Border: {
                    Default: g.ri[400],
                    Active: e.Text.Highlight,
                    Filled: g.ri[850],
                    Error: g.B6[500],
                  },
                },
                Nested: {
                  Nested: g.ri[10],
                  Fill: g.ri[100],
                  Border: {
                    Default: g.ri[400],
                    Active: e.Text.Highlight,
                    Filled: g.ri[850],
                    Error: g.B6[500],
                  },
                },
              },
              Large: { Default: { Fill: g.ri[150] } },
              SliderThumbImage: '/mui/slider-thumb-white.svg',
            },
            u = {
              Default: { Fill: l[1].Fill, Outline: i.Neutral[400], Label: i.Primary[500] },
              Checked: { Fill: i.Primary[500], Outline: i.Neutral[400], Label: g.ri[50] },
            };
          return {
            theme: 'light',
            Color: i,
            Text: r,
            Button: t,
            Layer: l,
            Tabs: o,
            Chips: a,
            Badges: n,
            Toggles: d,
            Table: s,
            Inputs: c,
            Switch: u,
          };
        },
        f = (e) => {
          let i = g.ri,
            l = {
              Neutral: {
                25: i[975],
                50: i[950],
                75: i[900],
                100: i[850],
                150: i[800],
                200: i[750],
                300: i[700],
                400: i[600],
                500: i[500],
                600: i[400],
                700: i[300],
                750: i[200],
                800: i[150],
                850: i[100],
                900: i[75],
                950: i[50],
                975: i[25],
              },
              Primary: {
                50: g.w8[950],
                100: g.w8[900],
                200: g.w8[800],
                300: g.w8[700],
                400: g.w8[600],
                500: g.w8[500],
                600: g.w8[400],
                700: g.w8[300],
                800: g.w8[200],
                900: g.w8[100],
                950: g.w8[50],
              },
              Secondary: {
                100: g.vd[800],
                200: g.vd[700],
                300: g.vd[600],
                400: g.vd[500],
                500: g.vd[400],
                600: g.vd[300],
                700: g.vd[200],
                800: g.vd[100],
              },
              Tertiary: { 200: g.B6[500], 300: g.B6[400], 400: g.B6[300], 600: g.B6[200] },
            },
            r = {
              1: { Fill: e.Layer[1].Fill, Outline: e.Layer[1].Outline },
              2: { Fill: e.Layer[2].Fill, Outline: e.Layer[2].Outline },
              3: { Fill: e.Layer[3].Fill, Outline: e.Layer[3].Outline },
              App: { Background: '#12110f' },
              Highlight: { Fill: e.Layer.Highlight, Outline: e.Layer.Highlight },
              TypeAction: {
                Hover: e.Layer.TypeAction.Hover,
                Selected: e.Layer.TypeAction.Selected,
              },
              Feedback: e.Layer.Feedback,
            },
            t = {
              TextColors: {
                Primary: e.Text.Primary,
                Secondary: e.Text.Secondary,
                Tertiary: e.Text.Tertiary,
                Highlight: e.Text.Highlight,
                Disabled: e.Text.Disabled,
                Feedback: e.Text.Feedback,
              },
              FontFamily: {
                Heading: 'Mona Sans',
                Body: 'Mona Sans',
                Mono: 'Mona Sans',
                Button: 'Mona Sans',
              },
            },
            o = {
              Focus_Outline: l.Primary[500],
              Transition: p,
              Primary: {
                Default: { Label: i[50], Fill: g.w8[500] },
                Hover: { Label: i[900], Fill: i[50] },
                Disabled: { Label: t.TextColors.Disabled, Fill: l.Primary[800] },
              },
              Secondary: {
                Default: { Label: i[900], Fill: i[50] },
                Hover: { Label: i[900], Fill: g.w8[500] },
                Disabled: { Label: t.TextColors.Disabled, Fill: l.Neutral[600] },
              },
              Outlined: {
                Default: { Label: i[50], Outline: i[700] },
                Hover: { Label: g.w8[500], Outline: g.w8[500] },
                Disabled: { Label: t.TextColors.Disabled, Outline: t.TextColors.Disabled },
              },
              Ghost: {
                Default: { Label: l.Primary[700] },
                Hover: { Label: i[50] },
                Disabled: { Label: t.TextColors.Disabled, Fill: i[850] },
              },
              Success: {
                Default: { Label: i[900], Fill: g.vd[300] },
                Hover: { Label: g.vd[500], Fill: i[50] },
                Disabled: { Label: t.TextColors.Disabled, Fill: g.vd[600] },
              },
              Error: {
                Default: { Label: i[50], Fill: g.B6[500] },
                Hover: { Label: g.B6[400], Fill: i[900] },
                Disabled: { Label: i[300], Fill: g.B6[700] },
              },
              Navigation: {
                Default: { Label: t.TextColors.Secondary },
                Hover: { Label: t.TextColors.Primary, Fill: r[1].Fill },
                Current: { Label: i[50], Fill: r.Highlight.Fill },
              },
            },
            a = {
              Transition: p,
              UnderLined: {
                Inset: x,
                Default: { Label: t.TextColors.Secondary, Outline: l.Neutral[200] },
                Hover: { Label: t.TextColors.Highlight, Outline: r.Highlight.Outline },
                Current: { Label: t.TextColors.Primary, Outline: l.Primary[500] },
              },
              Contained: {
                Default: { Label: t.TextColors.Secondary, Fill: l.Neutral[200] },
                Hover: { Label: l.Neutral[50], Fill: l.Neutral[900] },
                Current: { Label: t.TextColors.Primary, Fill: r[1].Fill, Outline: l.Primary[500] },
              },
              OverLined: {
                Inset: m,
                Default: { Label: t.TextColors.Secondary, Outline: l.Neutral[200] },
                Hover: {
                  Label: t.TextColors.Primary,
                  Fill: l.Neutral[200],
                  Outline: l.Neutral[500],
                },
                Current: { Label: t.TextColors.Primary, Outline: l.Primary[500] },
              },
            },
            n = {
              BorderRadius: { Clickable: 0, NonClickable: '100px' },
              Default: { Label: t.TextColors.Secondary, Fill: r[2].Fill, Stroke: r[2].Outline },
              Hover: { Label: l.Neutral[50], Fill: l.Neutral[900] },
              Current: { Label: l.Neutral[950], Fill: r[2].Fill, Outline: r.Highlight.Outline },
            },
            d = {
              Label: {
                Default: e.Badges.Label.Default,
                Active: e.Badges.Label.Active,
                Alert: e.Badges.Label.Alert,
                Highlight: e.Badges.Label.Highlight,
                Warning: e.Badges.Label.Warning,
                Accent: e.Badges.Label.Accent,
              },
              Border: {
                Default: e.Badges.Border.Default,
                Active: e.Badges.Border.Active,
                Alert: e.Badges.Border.Alert,
                Highlight: e.Badges.Border.Highlight,
                Warning: e.Badges.Border.Warning,
                Accent: e.Badges.Border.Accent,
              },
              Fill: {
                Default: e.Badges.Fill.Default,
                Active: e.Badges.Fill.Active,
                Alert: e.Badges.Fill.Alert,
                Highlight: e.Badges.Fill.Highlight,
                Warning: e.Badges.Fill.Warning,
                Accent: e.Badges.Fill.Accent,
              },
            },
            s = {
              Default: { Label: t.TextColors.Primary },
              Hover: { Label: t.TextColors.Highlight, Fill: r[3].Fill },
              Current: { Label: l.Neutral[50], Fill: l.Neutral[950] },
            },
            c = {
              Header: { Fill: e.Tables.Header.Fill },
              Row: {
                Default: e.Layer[1].Fill,
                Selected: e.Layer.TypeAction.Selected,
                Hover: e.Layer.TypeAction.Hover,
              },
            },
            u = {
              Base: {
                Default: {
                  Fill: i[850],
                  Border: {
                    Default: i[600],
                    Active: e.Text.Highlight,
                    Filled: i[75],
                    Error: g.B6[500],
                  },
                },
                Nested: {
                  Nested: i[850],
                  Fill: i[850],
                  Border: {
                    Default: i[600],
                    Active: e.Text.Highlight,
                    Filled: i[75],
                    Error: g.B6[500],
                  },
                },
              },
              Large: { Default: { Fill: i[975] } },
              SliderThumbImage: '/mui/slider-thumb-black.svg',
            },
            h = {
              Default: { Fill: r[1].Fill, Outline: l.Neutral[400], Label: l.Primary[500] },
              Checked: { Fill: l.Primary[500], Outline: l.Neutral[400], Label: i[50] },
            };
          return {
            theme: 'dark',
            Color: l,
            Text: t,
            Button: o,
            Layer: r,
            Tabs: a,
            Chips: n,
            Badges: d,
            Toggles: s,
            Table: c,
            Inputs: u,
            Switch: h,
          };
        },
        v = (e) => {
          let i = { Neutral: g.ri, Primary: g.Ac, Secondary: g.vd, Tertiary: g.B6 },
            l = {
              1: e.Layer[1],
              2: e.Layer[2],
              3: e.Layer[3],
              App: { Background: '#bdbbec' },
              Highlight: { Fill: e.Layer.Highlight, Outline: e.Layer.Highlight },
              TypeAction: e.Layer.TypeAction,
              Feedback: e.Layer.Feedback,
            },
            r = {
              TextColors: {
                Primary: e.Text.Primary,
                Secondary: e.Text.Secondary,
                Tertiary: e.Text.Tertiary,
                Highlight: e.Text.Highlight,
                Disabled: e.Text.Disabled,
                Feedback: e.Text.Feedback,
              },
              FontFamily: {
                Heading: 'Minecraft',
                Body: 'Hubot Sans',
                Mono: 'Hubot Sans',
                Button: 'Minecraft',
              },
            },
            t = {
              Focus_Outline: i.Primary[600],
              Transition: p,
              Primary: {
                Default: { Label: g.ri[50], Fill: g.Ac[500] },
                Hover: { Label: g.ri[50], Fill: g.ri[900] },
                Disabled: { Label: r.TextColors.Disabled, Fill: g.Ac[200] },
              },
              Secondary: {
                Default: { Label: g.ri[50], Fill: g.Ac[900] },
                Hover: { Label: g.ri[50], Fill: g.Ac[500] },
                Disabled: { Label: r.TextColors.Disabled, Fill: g.ri[600] },
              },
              Outlined: {
                Default: { Label: g.ri[950], Outline: g.ri[300] },
                Hover: { Label: g.Ac[500], Outline: g.Ac[500] },
                Disabled: { Label: r.TextColors.Disabled, Outline: g.Ac[200] },
              },
              Ghost: {
                Default: { Label: r.TextColors.Highlight },
                Hover: { Label: g.ri[800] },
                Disabled: { Label: r.TextColors.Disabled, Fill: g.Ac[200] },
              },
              Success: {
                Default: { Label: g.ri[900], Fill: g.vd[400] },
                Hover: { Label: g.vd[500], Fill: g.ri[900] },
                Disabled: { Label: r.TextColors.Disabled, Fill: g.vd[600] },
              },
              Error: {
                Default: { Label: g.ri[50], Fill: g.B6[500] },
                Hover: { Label: g.B6[400], Fill: g.ri[900] },
                Disabled: { Label: g.ri[300], Fill: g.B6[700] },
              },
              Navigation: {
                Default: { Label: r.TextColors.Secondary },
                Hover: { Label: r.TextColors.Primary, Fill: l[1].Fill },
                Current: { Label: g.ri[50], Fill: l.Highlight.Fill },
              },
            },
            o = {
              Transition: p,
              UnderLined: {
                Inset: x,
                Default: { Label: r.TextColors.Secondary, Outline: i.Neutral[200] },
                Hover: { Label: r.TextColors.Highlight, Outline: l.Highlight.Outline },
                Current: { Label: r.TextColors.Primary, Outline: i.Primary[500] },
              },
              Contained: {
                Default: { Label: r.TextColors.Secondary, Fill: i.Primary[200] },
                Hover: { Label: i.Neutral[50], Fill: i.Primary[950] },
                Current: { Label: r.TextColors.Primary, Fill: l[1].Fill, Outline: i.Primary[500] },
              },
              OverLined: {
                Inset: m,
                Default: { Label: r.TextColors.Secondary, Outline: i.Neutral[200] },
                Hover: {
                  Label: r.TextColors.Primary,
                  Fill: i.Neutral[200],
                  Outline: i.Neutral[500],
                },
                Current: { Label: r.TextColors.Primary, Outline: i.Primary[500] },
              },
            },
            a = {
              BorderRadius: { Clickable: 0, NonClickable: 0 },
              Default: { Label: r.TextColors.Secondary, Fill: l[1].Fill, Stroke: l[2].Outline },
              Hover: { Label: i.Neutral[50], Fill: i.Primary[950] },
              Current: {
                Label: r.TextColors.Primary,
                Fill: l[2].Fill,
                Outline: l.Highlight.Outline,
              },
            },
            n = {
              Label: {
                Default: e.Badges.Label.Default,
                Active: e.Badges.Label.Active,
                Alert: e.Badges.Label.Alert,
                Highlight: e.Badges.Label.Highlight,
                Warning: e.Badges.Label.Warning,
                Accent: e.Badges.Label.Accent,
              },
              Border: {
                Default: e.Badges.Border.Default,
                Active: e.Badges.Border.Active,
                Alert: e.Badges.Border.Alert,
                Highlight: e.Badges.Border.Highlight,
                Warning: e.Badges.Border.Warning,
                Accent: e.Badges.Border.Accent,
              },
              Fill: {
                Default: e.Badges.Fill.Default,
                Active: e.Badges.Fill.Active,
                Alert: e.Badges.Fill.Alert,
                Highlight: e.Badges.Fill.Highlight,
                Warning: e.Badges.Fill.Warning,
                Accent: e.Badges.Fill.Accent,
              },
            },
            d = {
              Default: { Label: r.TextColors.Primary },
              Hover: { Label: r.TextColors.Highlight, Fill: l[3].Fill },
              Current: { Label: g.ri[50], Fill: i.Primary[800] },
            },
            s = {
              Header: { Fill: e.Tables.Header.Fill },
              Row: {
                Default: e.Layer[1].Fill,
                Selected: e.Layer.TypeAction.Selected,
                Hover: e.Layer.TypeAction.Hover,
              },
            },
            c = {
              Base: {
                Default: {
                  Fill: g.Ac[50],
                  Border: {
                    Default: g.Ac[200],
                    Active: e.Text.Highlight,
                    Filled: g.Ac[400],
                    Error: g.B6[500],
                  },
                },
                Nested: {
                  Nested: g.Ac[50],
                  Fill: g.Ac[50],
                  Border: {
                    Default: g.Ac[200],
                    Active: e.Text.Highlight,
                    Filled: g.Ac[400],
                    Error: g.B6[500],
                  },
                },
              },
              Large: { Default: { Fill: g.Ac[50] } },
              SliderThumbImage: '/mui/slider-thumb-white.svg',
            },
            u = {
              Default: { Fill: l[1].Fill, Outline: i.Neutral[400], Label: i.Primary[500] },
              Checked: { Fill: i.Primary[500], Outline: i.Neutral[400], Label: g.ri[50] },
            };
          return {
            theme: 'chad',
            Color: i,
            Text: r,
            Button: t,
            Layer: l,
            Tabs: o,
            Chips: a,
            Badges: n,
            Toggles: d,
            Table: s,
            Inputs: c,
            Switch: u,
          };
        },
        B = {
          light: ({ inverted: e }) => y(u[e ? 'inverted' : 'plain'].Light),
          dark: ({ inverted: e }) => f(u[e ? 'inverted' : 'plain'].Dark),
          chad: ({ inverted: e }) => v(u[e ? 'inverted' : 'plain'].Chad),
        },
        F = (e, { Layer: i, Color: l, Text: { TextColors: r } }) => ({
          mode: e,
          primary: { main: l.Primary[500] },
          secondary: { main: l.Secondary[500] },
          error: { main: i.Feedback.Error, contrastText: r.Feedback.Error },
          info: { main: i.Feedback.Info, contrastText: r.Primary },
          warning: { main: i.Feedback.Warning, contrastText: r.Feedback.Warning },
          success: { main: i.Feedback.Success, contrastText: r.Feedback.Success },
          text: {
            primary: r.Primary,
            secondary: r.Secondary,
            tertiary: r.Tertiary,
            disabled: r.Disabled,
            highlight: r.Highlight,
          },
          action: { hover: i.TypeAction.Hover, selected: i.TypeAction.Selected },
          background: { default: i.App.Background, paper: i[2].Fill },
          divider: i[1].Outline,
        });
      var S = l(84032),
        C = l(41265);
      let A = [
          'h1',
          'h2',
          'h3',
          'h4',
          'h5',
          'h6',
          'button',
          'body1',
          'body2',
          'caption',
          'overline',
          'subtitle1',
          'subtitle2',
        ],
        { LineHeight: L, FontWeight: H, FontSize: k } = S.B,
        T = (e, i, l) => ({
          [s.bK.breakpoints.up(l)]: { fontSize: k[e]?.[l], lineHeight: L[i]?.[l] },
        }),
        M = ({
          fontFamily: e,
          fontSize: i,
          fontWeight: l,
          lineHeight: r = i,
          letterSpacing: t = '0%',
          textCase: o,
        }) => ({
          fontFamily: e,
          fontWeight: H[l ?? 'Medium'],
          letterSpacing: t,
          ...('0%' !== t && { marginRight: `calc(${t} * -1)` }),
          textTransform: o,
          transition: `color ${g.Uw}, border ${g.Uw}`,
          ...(!(i in k) && { fontSize: i }),
          ...(!(r in L) && { lineHeight: r }),
          ...T(i, r, 'mobile'),
          ...T(i, r, 'tablet'),
          ...T(i, r, 'desktop'),
        }),
        D = {
          headingXxl: {
            fontFamily: 'Heading',
            fontWeight: 'Bold',
            fontSize: 'xxl',
            letterSpacing: '-2.56px',
          },
          headingMBold: {
            fontFamily: 'Heading',
            fontWeight: 'Bold',
            fontSize: 'xl',
            lineHeight: g.XQ[450],
            letterSpacing: '-1.28px',
            textCase: 'uppercase',
          },
          headingMLight: {
            fontFamily: 'Heading',
            fontWeight: 'Normal',
            fontSize: 'xl',
            lineHeight: g.XQ[450],
            letterSpacing: '-1.28px',
            textCase: 'uppercase',
          },
          headingSBold: {
            fontFamily: 'Heading',
            fontWeight: 'Bold',
            fontSize: 'lg',
            letterSpacing: '-0.48px',
            textCase: 'uppercase',
          },
          headingXsBold: {
            fontFamily: 'Heading',
            fontWeight: 'Bold',
            fontSize: 'sm',
            textCase: 'uppercase',
          },
          headingXsMedium: { fontFamily: 'Heading', fontSize: 'sm', textCase: 'capitalize' },
          bodyMRegular: { fontFamily: 'Body', fontSize: 'md' },
          bodyMBold: { fontFamily: 'Body', fontWeight: 'Bold', fontSize: 'md' },
          bodySRegular: { fontFamily: 'Body', fontSize: 'sm' },
          bodySBold: { fontFamily: 'Body', fontWeight: 'Bold', fontSize: 'sm' },
          bodyXsRegular: { fontFamily: 'Body', fontSize: 'xs' },
          bodyXsBold: { fontFamily: 'Body', fontWeight: 'Bold', fontSize: 'xs' },
          buttonXs: { fontFamily: 'Button', fontWeight: 'Bold', fontSize: 'sm' },
          buttonS: {
            fontFamily: 'Button',
            fontWeight: 'Bold',
            fontSize: 'sm',
            lineHeight: 'md',
            textCase: 'uppercase',
          },
          buttonM: {
            fontFamily: 'Button',
            fontWeight: 'Bold',
            fontSize: 'md',
            lineHeight: 'xl',
            textCase: 'uppercase',
          },
          tableHeaderM: { fontFamily: 'Body', fontSize: 'md', lineHeight: 'sm' },
          tableHeaderS: { fontFamily: 'Body', fontSize: 'sm', lineHeight: 'xs' },
          tableCellL: {
            fontFamily: 'Heading',
            fontWeight: 'Bold',
            fontSize: g.XQ[250],
            lineHeight: g.XQ[250],
          },
          tableCellMRegular: { fontFamily: 'Mono', fontSize: 'md', lineHeight: 'sm' },
          tableCellMBold: {
            fontFamily: 'Mono',
            fontWeight: 'Bold',
            fontSize: 'md',
            lineHeight: 'sm',
          },
          tableCellSRegular: { fontFamily: 'Mono', fontSize: 'sm', lineHeight: 'xs' },
          tableCellSBold: {
            fontFamily: 'Mono',
            fontWeight: 'Bold',
            fontSize: 'sm',
            lineHeight: 'xs',
          },
          highlightXsNotional: { fontFamily: 'Mono', fontSize: 'xs' },
          highlightXs: { fontFamily: 'Heading', fontWeight: 'Bold', fontSize: 'xs' },
          highlightS: { fontFamily: 'Heading', fontWeight: 'Bold', fontSize: 'sm' },
          highlightM: {
            fontFamily: 'Heading',
            fontWeight: 'Bold',
            fontSize: 'md',
            lineHeight: 'sm',
          },
          highlightL: {
            fontFamily: 'Heading',
            fontWeight: 'Bold',
            fontSize: 'lg',
            lineHeight: 'md',
          },
          highlightXl: {
            fontFamily: 'Heading',
            fontWeight: 'Bold',
            fontSize: 'xl',
            lineHeight: g.XQ[450],
            letterSpacing: '-1.28px',
          },
          highlightXxl: {
            fontFamily: 'Heading',
            fontWeight: 'Bold',
            fontSize: 'xxl',
            letterSpacing: '-2.56px',
          },
        },
        O = ({ Text: e }) => ({
          fontFamily: C.vX[e.FontFamily.Body],
          fontWeightBold: H.Bold,
          fontWeightMedium: H.Medium,
          fontWeightRegular: H.Normal,
          fontWeightLight: H.Light,
          ...A.reduce((e, i) => ({ ...e, [i]: void 0 }), {}),
          ...Object.fromEntries(
            Object.entries(D).map(([i, l]) => {
              let { fontFamily: r, ...t } = M(l);
              return [i, { ...t, fontFamily: C.vX[e.FontFamily[r]] }];
            })
          ),
        }),
        w = (e, i) => (i.inverted ? ('dark' == e ? 'light' : 'dark') : 'chad' == e ? 'light' : e),
        z = (e, i = {}) => {
          let l = B[e](i),
            r = O(l);
          return (0, d.A)({
            ...s.bK,
            key: e,
            design: { ...l, options: i },
            palette: F(w(e, i), l),
            typography: r,
            components: (0, c.L1)(l, r),
            shape: { borderRadius: 0 },
            cssVariables: !0,
            shadows: Array(25).fill('none'),
          });
        },
        I = { light: (e) => z('light', e), dark: (e) => z('dark', e), chad: (e) => z('chad', e) },
        W = o()((e, i) => I[e]({ inverted: i })),
        P = ({ theme: e, children: i }) => (0, r.jsx)(n.A, { theme: W(e), children: i }),
        N = ({ children: e, inverted: i = !0 }) => {
          let { theme: l } = (0, a.A)().design,
            t = W(l, i);
          return (0, r.jsx)(n.A, { theme: t, children: e });
        },
        $ = ({ children: e, to: i }) => {
          if (!i) return e;
          let l = W(i);
          return (0, r.jsx)(n.A, { theme: l, children: e });
        };
    },
    81473: (e, i, l) => {
      l.d(i, { yI: () => h, Mw: () => u, gH: () => g, Yk: () => b, Xq: () => v });
      var r = l(84121);
      let { Spacing: t } = l(84032).B,
        o = 'variant-contained',
        a = 'variant-underlined',
        n = 'variant-overlined',
        d = 'size-small',
        s = 'size-medium',
        c = 'size-large',
        g = { contained: o, underlined: a, overlined: n },
        u = { small: d, medium: s, large: c },
        h = 'hide-inactive-borders',
        b = ({ Tabs: { Transition: e } }) => ({
          styleOverrides: {
            root: {
              transition: e,
              textTransform: 'uppercase',
              position: 'relative',
              boxSizing: 'content-box',
              opacity: 1,
              minHeight: '2rem',
              minWidth: 0,
              '&::after': { content: '""', position: 'absolute', height: '2px' },
            },
          },
        }),
        p = ({ Label: e, Fill: i, Outline: l }, r) => ({
          color: e,
          backgroundColor: i,
          '::after': { backgroundColor: l ?? 'transparant', inset: r },
        }),
        m = ({ Current: e, Default: i, Hover: l, Inset: r }) => ({
          ...p(i, r),
          '&:hover': p(l, r),
          '&.Mui-selected': p(e, r),
        }),
        x = (e, i, l, o) =>
          (0, r.NI)({
            paddingBlockStart: t[e],
            paddingBlockEnd: t[i],
            paddingInlineStart: t[l],
            paddingInlineEnd: t[o],
          }),
        y = {
          [`&.${s} .MuiTab-root`]: x('md', 'xs', 'md', 'md'),
          [`&.${c} .MuiTab-root`]: x('md', 'xs', 'md', 'md'),
        },
        f = (e, ...i) =>
          i
            .map(
              (i) => `&.${i}${e ? `.${h}` : ''} .MuiTab-root:not(.Mui-selected):not(:hover)::after`
            )
            .join(', '),
        v = ({ Tabs: { UnderLined: e, OverLined: i, Contained: l }, Layer: r }) => ({
          styleOverrides: {
            root: {
              minHeight: 0,
              [`&.${o}`]: {
                '& .MuiTab-root': m(l),
                [`&.${d} .MuiTab-root`]: x('xs', 'xs', 'md', 'md'),
                [`&.${s} .MuiTab-root`]: x('md', 'xs', 'lg', 'lg'),
              },
              [`&.${n}`]: {
                '& .MuiTab-root': m(i),
                [`&.${d} .MuiTab-root`]: x('xs', 'xs', 'md', 'md'),
                [`&.${c} .MuiTab-root:hover`]: { backgroundColor: 'unset' },
                ...y,
              },
              [`&.${a}`]: {
                '& .MuiTab-root': m(e),
                [`&.${d} .MuiTab-root`]: x('xs', 'xs', 'sm', 'sm'),
                ...y,
              },
              [f(!1, n, a)]: { height: '1px' },
              [`${f(!0, n, a)}, &.${c} .MuiTab-root::after`]: { height: '0px !important' },
            },
            indicator: {
              backgroundColor: r.Highlight.Outline,
              [`.${n} &`]: { top: 0 },
              [`.${o} &`]: { top: 0 },
              [`.${c} &`]: { height: '4px' },
            },
          },
        });
    },
    83897: (e, i, l) => {
      l.d(i, { P: () => t });
      var r = l(54568);
      let t = (0, l(69879).A)(
        (0, r.jsxs)('svg', {
          viewBox: '0 0 16 16',
          fill: 'none',
          xmlns: 'http://www.w3.org/2000/svg',
          children: [
            (0, r.jsx)('path', {
              d: 'M7.28203 4.78525C7.26636 4.3779 7.59235 4.03913 8 4.03913C8.40764 4.03913 8.73363 4.3779 8.71797 4.78525L8.55383 9.05287C8.54238 9.35046 8.29781 9.58581 8 9.58581C7.70218 9.58581 7.45761 9.35046 7.44616 9.05287L7.28203 4.78525Z',
              fill: 'currentColor',
            }),
            (0, r.jsx)('path', {
              d: 'M8.79988 11.1745C8.79988 11.6163 8.4417 11.9744 7.99988 11.9744C7.55805 11.9744 7.19988 11.6163 7.19988 11.1745C7.19988 10.7326 7.55805 10.3745 7.99988 10.3745C8.4417 10.3745 8.79988 10.7326 8.79988 11.1745Z',
              fill: 'currentColor',
            }),
            (0, r.jsx)('path', {
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              d: 'M9.00789 0.649407C8.55285 -0.114093 7.44714 -0.114093 6.9921 0.649408L0.17192 12.0927C-0.294216 12.8748 0.269334 13.8667 1.17982 13.8667H14.8202C15.7307 13.8667 16.2942 12.8748 15.8281 12.0927L9.00789 0.649407ZM7.90837 1.19551C7.94974 1.1261 8.05025 1.1261 8.09162 1.19551L14.9118 12.6388C14.9542 12.7099 14.903 12.8 14.8202 12.8H1.17982C1.09705 12.8 1.04582 12.7099 1.08819 12.6388L7.90837 1.19551Z',
              fill: 'currentColor',
            }),
          ],
        }),
        'ExclamationTriangle'
      );
    },
  },
]);
