'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7399],
  {
    12078: (e, t, i) => {
      i.d(t, { GM: () => s, Ww: () => d, al: () => a, sA: () => l });
      var n = i(14241);
      let r = (e) => e.breakpoints.up('desktop'),
        o = (e) => e.breakpoints.down('tablet'),
        l = () => (0, n.A)('(max-width:400px)'),
        a = () => (0, n.A)(o),
        s = () => (0, n.A)(r),
        d = () => ![s(), a()].includes(!0);
    },
    12819: (e, t, i) => {
      i.d(t, { A: () => u });
      var n = i(54568),
        r = i(48341),
        o = i(39416),
        l = i(84561),
        a = i(5254),
        s = i(60264),
        d = i(72990);
      let c = (0, r.Ay)(l.A).withConfig({ componentId: 'sc-efd8ad6c-0' })([
          'display:none;min-width:1.5625rem;opacity:1;padding:0;&.show{display:inline-block;}.svg-tooltip{position:relative;top:2px;}',
        ]),
        u = ({
          className: e,
          id: t,
          value: i,
          variant: r,
          handleInputChange: l,
          handleSearchClose: u,
          ...h
        }) =>
          (0, n.jsxs)(d.Ay, {
            className: e,
            grid: !0,
            gridTemplateColumns: 'auto 1fr auto',
            gridColumnGap: 2,
            flexAlignItems: 'center',
            id: t,
            inputVariant: r,
            children: [
              'small' === r
                ? (0, n.jsx)(o.A, { name: 'Search', size: 16, 'aria-label': 'search-icon' })
                : (0, n.jsx)(o.A, { name: 'Search', size: 24, 'aria-label': 'search-icon' }),
              (0, n.jsx)(s.A, {
                ...h,
                id: t,
                type: 'search',
                labelProps: !1,
                value: i,
                delay: 1e3,
                variant: r,
                onChange: l,
              }),
              (0, n.jsx)(c, {
                className: i ? 'show' : '',
                size: 'small' === r ? 'x-small' : r,
                onClick: u,
                padding: 'small' === r ? 1 : 2,
                children: (0, n.jsx)(a.xz, { className: 'svg-tooltip' }),
              }),
            ],
          });
    },
    19115: (e, t, i) => {
      i.d(t, { A: () => o });
      var n = i(54568),
        r = i(81619);
      let o = ({ children: e, customIcon: t, ...i }) =>
        (0, n.jsx)(r.A, { ...i, showIcon: !0, customIcon: t, tooltip: e });
    },
    21035: (e, t, i) => {
      i.d(t, { A: () => n.A });
      var n = i(7908);
    },
    26509: (e, t, i) => {
      i.d(t, { A: () => a });
      var n = i(54568),
        r = i(7620),
        o = i(86649);
      let l = (0, r.forwardRef)(({ id: e, globalDisabled: t, testId: i, ...l }, a) => {
        let s = (0, r.useRef)(null),
          { disabled: d, ...c } = l ?? {};
        return (0, n.jsx)(o.s, {
          type: 'text',
          ref: a || s,
          disabled: d || t,
          ...c,
          'data-testid': `inp-${i}`,
          id: e,
          name: e,
        });
      });
      l.displayName = 'Input';
      let a = l;
    },
    46170: (e, t, i) => {
      i.d(t, { Q: () => n });
      let n = i(48341).Ay.button.withConfig({ componentId: 'sc-1a28d847-0' })(
        [
          'align-items:center;background-color:transparent;border:none;color:inherit;cursor:pointer;display:flex;font-size:var(--font-size-2);font-weight:bold;height:100%;min-height:var(--height-medium);padding:0 0.25rem 0 0.5rem;white-space:nowrap;&:disabled{cursor:initial;transition:none;}&:hover:not(:disabled){color:var(--button_outlined--hover--color);border-color:var(--button_outlined--hover--color);background-color:var(--button_outlined--hover--background-color);}',
          '',
        ],
        ({ $loading: e }) => e && 'opacity: 0.5;'
      );
    },
    49698: (e, t, i) => {
      i.d(t, { A: () => c });
      var n = i(54568),
        r = i(7620),
        o = i(94990),
        l = i(48341),
        a = i(77878);
      let s = l.Ay.button.withConfig({ componentId: 'sc-26f3547b-0' })(
          [
            '',
            ';align-items:center;display:flex;justify-content:center;padding:',
            ';color:inherit;background-color:transparent;border:none;cursor:pointer;opacity:',
            ';transition:opacity 250ms cubic-bezier(0.4,0,0.2,1) 0ms;&:hover{opacity:1;}',
            ' ',
            '',
          ],
          a.N,
          ({ padding: e }) => `var(--spacing-${e || '0'})`,
          ({ opacity: e }) => e || 0.6,
          ({ size: e }) =>
            'small' === e
              ? `
        min-height: var(--height-small);
        min-width: var(--height-small);
      `
              : 'medium' === e
                ? `
        min-height: var(--height-medium);
        min-width: var(--height-medium);
      `
                : 'large' === e
                  ? `
        min-height: var(--height-large);
        min-width: var(--height-large);
      `
                  : void 0,
          ({ hidden: e }) => {
            if (e) return 'visibility: hidden;';
          }
        ),
        d = (0, r.forwardRef)(
          ({ className: e, children: t, testId: i, size: l = 'large', ...a }, d) => {
            let c = (0, r.useRef)(null),
              { isFocusVisible: u } = (0, o.o)();
            return (0, n.jsx)(s, {
              ...a,
              'data-testid': `btn-${i}`,
              ref: d || c,
              className: `${e || ''} ${u ? 'focus-visible' : ''}`,
              size: l,
              children: t,
            });
          }
        );
      d.displayName = 'IconButton';
      let c = d;
    },
    50567: (e, t, i) => {
      i.d(t, { mL: () => l, V2: () => r.A, Ay: () => a.A });
      var n = i(54568),
        r = i(19115),
        o = i(45765);
      let l = ({ alertType: e, isDeprecated: t, ...i }) =>
        (0, n.jsx)(r.A, {
          ...i,
          customIcon: (0, n.jsx)(o.A, {
            color: t ? 'error' : '' === e ? 'info' : 'danger' === e ? 'error' : e,
          }),
        });
      var a = i(81619);
    },
    56343: (e, t, i) => {
      i.d(t, { sx: () => x, rU: () => r, z6: () => u });
      var n = i(7620);
      let r = (0, n.createContext)(void 0);
      var o = i(54568),
        l = i(48341),
        a = i(39651),
        s = i(76859),
        d = i(30653);
      let c = l.Ay.div.withConfig({ componentId: 'sc-607bde65-0' })(
          ['display:flex;flex-direction:column;', ''],
          (0, a.HP)('md')((0, l.AH)(['display:grid;column-gap:10px;']))
        ),
        u = ({ children: e, className: t, testId: i, ...n }) => {
          let l = (0, d.Z)(n),
            { radioGroupProps: a } = (0, s.m)(n, l);
          return (0, o.jsx)(c, {
            'data-testid': `radio-group-${i}`,
            ...a,
            className: t,
            children: (0, o.jsx)(r.Provider, { value: l, children: e }),
          });
        };
      var h = i(64387),
        p = i(94990),
        m = i(39496),
        g = i(35308);
      let f = ({ children: e, className: t, isCustom: i, testId: l, ...a }) => {
        let s = (0, n.useRef)(null),
          d = (0, n.useContext)(r),
          { inputProps: c = {}, isSelected: u } = (0, m.z)(a, d, s),
          { isFocusVisible: h, focusProps: f } = (0, p.o)(),
          x = `${t} ${d.isDisabled ? 'disabled' : ''}`;
        return (0, o.jsxs)(b, {
          'data-testid': `radio-${l}`,
          as: 'label',
          className: x,
          flex: !0,
          flexAlignItems: 'center',
          children: [
            (0, o.jsx)(g.s, { children: (0, o.jsx)('input', { ...c, ...f, ref: s }) }),
            i
              ? null
              : (0, o.jsxs)('svg', {
                  width: 28,
                  height: 24,
                  'aria-hidden': 'true',
                  children: [
                    (0, o.jsx)('circle', {
                      cx: '12',
                      cy: '12',
                      r: '8',
                      stroke: 'var(--radio--border-color)',
                      strokeWidth: '2',
                    }),
                    u
                      ? (0, o.jsx)('circle', {
                          cx: '12',
                          cy: '12',
                          r: '6',
                          fill: 'var(--radio--selected--background-color)',
                          stroke: 'var(--radio--selected--background-color)',
                          strokeWidth: '2',
                        })
                      : (0, o.jsx)('circle', {
                          cx: '12',
                          cy: '12',
                          r: '6',
                          fill: 'var(--white)',
                          stroke: 'var(--white)',
                          strokeWidth: '2',
                        }),
                    h &&
                      (0, o.jsx)('circle', {
                        cx: 12,
                        cy: 12,
                        r: 11,
                        fill: 'none',
                        stroke: 'var(--radio--active--border-color)',
                        strokeWidth: 2,
                      }),
                  ],
                }),
            e,
          ],
        });
      };
      f.displayName = 'Radio';
      let b = (0, l.Ay)(h.A).withConfig({ componentId: 'sc-ca3f0c29-0' })([
          'font-weight:500;cursor:pointer;&.disabled{opacity:0.5;cursor:initial;}',
        ]),
        x = f;
    },
    58387: (e, t, i) => {
      i.d(t, { E5: () => r.A, l1: () => h, xI: () => b, kc: () => A, Ay: () => s.Ay });
      var n = i(26509),
        r = i(60264),
        o = i(54568),
        l = i(48341);
      i(45808), (0, l.Ay)(n.A).withConfig({ componentId: 'sc-220f4429-0' })(['height:100%;']);
      var a = i(7620),
        s = i(72990),
        d = i(21035);
      let c = ({
          className: e,
          label: t,
          description: i,
          descriptionLoading: n,
          testId: r,
          ...l
        }) => {
          let c = (0, a.useRef)(null),
            { id: h } = (0, s.zS)(),
            [p, m] = (0, a.useState)(null),
            g = c.current;
          return (
            (0, a.useEffect)(() => {
              let { offsetWidth: e, offsetHeight: t } = g ?? {};
              e && t && '-' !== i && m([e > 10 ? e : 20, t - 4]);
            }, [g?.offsetHeight, g?.offsetWidth]),
            (0, o.jsxs)(u, {
              ...l,
              'data-testid': `inp-label-${r}`,
              className: e,
              htmlFor: h,
              descriptionLoading: void 0 !== n,
              children: [
                t,
                ' ',
                n && p
                  ? (0, o.jsx)(d.A, { isLightBg: !0, skeleton: p })
                  : i
                    ? (0, o.jsx)('span', {
                        'data-testid': `inp-label-description-${r}`,
                        ref: c,
                        children: i,
                      })
                    : null,
              ],
            })
          );
        },
        u = l.Ay.label.withConfig({ componentId: 'sc-e8ad845d-0' })([
          'display:inline-block;font-size:var(--font-size-1);font-weight:500;line-height:1;margin-top:0.1875rem;',
        ]);
      c.displayName = 'InputLabel';
      let h = c;
      var p = i(64387),
        m = i(47990);
      let g = ({ className: e, disabled: t, isNetworkToken: i, testId: n, onClick: r, ...l }) => {
          let { disabled: a } = (0, s.zS)();
          return (0, o.jsx)(p.A, {
            flex: !0,
            flexAlignItems: 'center',
            children: (0, o.jsxs)(f, {
              ...l,
              onClick: r,
              testId: n,
              className: e,
              variant: 'filled',
              ...(a || t ? { disabled: !0 } : {}),
              ...(i ? { title: 'Balance minus estimated gas' } : {}),
              children: ['MAX', i ? '*' : ''],
            }),
          });
        },
        f = (0, l.Ay)(m.A).withConfig({ componentId: 'sc-cd7285ef-0' })([
          'padding:var(--spacing-1);font-size:var(--font-size-2);',
        ]);
      g.displayName = 'InputMaxBtn';
      let b = g;
      var x = i(39416);
      let v = ({ message: e }) => {
          let { inputVariant: t } = (0, s.zS)() ?? {},
            i = (0, a.useMemo)(
              () =>
                'error' === t
                  ? (0, o.jsx)(x.A, { name: 'Misuse', size: 20 })
                  : 'warning' === t
                    ? (0, o.jsx)(x.A, { name: 'WarningSquareFilled', size: 20 })
                    : null,
              [t]
            );
          return (0, o.jsxs)(y, { inputVariant: t, children: [i, (0, o.jsx)(w, { children: e })] });
        },
        w = l.Ay.span.withConfig({ componentId: 'sc-ff9b4344-0' })([
          'margin-left:var(--spacing-1);white-space:nowrap;text-overflow:ellipsis;',
        ]),
        y = l.Ay.div.withConfig({ componentId: 'sc-ff9b4344-1' })(
          [
            'align-items:center;display:inline-flex;justify-content:flex-end;height:80%;margin:var(--spacing-1);max-width:100%;overflow:hidden;position:absolute;top:0;right:0;background:var(--input--background-color);font-size:var(--font-size-4);white-space:nowrap;',
            '',
          ],
          ({ inputVariant: e }) =>
            'warning' === e
              ? `
        color: var(--warning-400);
       `
              : 'error' === e
                ? `
        color: var(--danger-400);
      `
                : void 0
        );
      v.displayName = 'InputMessage';
      let A = v;
    },
    60264: (e, t, i) => {
      i.d(t, { A: () => c });
      var n = i(54568),
        r = i(85273),
        o = i(45808),
        l = i(58387),
        a = i(26509),
        s = i(72990);
      let d = ({
        className: e,
        delay: t = 700,
        disabled: i,
        labelProps: d,
        value: c,
        onChange: u,
        testId: h,
        ...p
      }) => {
        let { disabled: m } = (0, s.zS)(),
          [g, f] = (0, r.d)(c, t, u);
        return (0, n.jsxs)(o.A, {
          grid: !0,
          children: [
            d && (0, n.jsx)(l.l1, { ...d, testId: h }),
            (0, n.jsx)(a.A, {
              value: g,
              onChange: (e) => f(e.target.value),
              disabled: m || i,
              testId: h,
              ...p,
            }),
          ],
        });
      };
      d.displayName = 'InputDebounced';
      let c = d;
    },
    66947: (e, t, i) => {
      i.d(t, { A: () => z });
      var n = i(54568),
        r = i(7620),
        o = i(25834),
        l = i(20071),
        a = i(96336),
        s = i(48341),
        d = i(39416),
        c = i(18098),
        u = i(46170),
        h = i(99599),
        p = i(71741);
      let m = ({ loading: e, style: t, ...i }) => {
        let r = i.buttonRef,
          { buttonProps: o } = (0, c.s)(i, r);
        return (0, n.jsxs)(u.Q, {
          ...o,
          $loading: e,
          ref: r,
          style: t,
          children: [
            e && (0, n.jsx)(g, { children: (0, n.jsx)(h.A, { isDisabled: !0, size: 17 }) }),
            i.children,
          ],
        });
      };
      m.displayName = 'SelectBtn';
      let g = (0, s.Ay)(p.A).withConfig({ componentId: 'sc-b507f60d-0' })([
        'padding:0;position:absolute;width:calc(100% - 0.75rem);',
      ]);
      var f = i(95869),
        b = i(68781),
        x = i(75551),
        v = i(56343),
        w = i(77241);
      function y({ title: e, state: t, onSelectionChange: i }) {
        return (0, n.jsx)(b.A, {
          children: (0, n.jsx)(x.Ay, {
            title: e,
            state: t,
            children: (0, n.jsx)(v.z6, {
              'aria-label': e,
              onChange: (e) => {
                'function' == typeof i && i(e), (0, w.q5)(t.close);
              },
              value: t.selectedKey?.toString(),
              children: [...t.collection].map((e) => {
                let t = e.key.toString();
                return (0, n.jsx)(A, { value: t, 'aria-label': t, children: e.rendered }, e.key);
              }),
            }),
          }),
        });
      }
      y.displayName = 'SelectModalFull';
      let A = (0, s.Ay)(v.sx).withConfig({ componentId: 'sc-48ed5d61-0' })([
        'min-height:var(--height-medium);',
      ]);
      function j({
        buttonStyles: e = {},
        noLabelChange: t,
        onSelectionDelete: i,
        selectSearchOptions: s,
        ...d
      }) {
        let c = (0, a.n)(d),
          u = (0, r.useRef)(null),
          { labelProps: h, triggerProps: p, menuProps: g } = (0, o.W)(d, c, u),
          b = d['aria-label'] || 'Select',
          x = [...(d.items ?? [])].length > 1;
        return (0, n.jsxs)(k, {
          className: d.className,
          children: [
            (0, n.jsx)('div', { ...h, children: d.label }),
            (0, n.jsx)(l.H, { state: c, triggerRef: u, label: d.label, name: d.name }),
            (0, n.jsx)(C, {
              children: (0, n.jsxs)(m, {
                ...p,
                isDisabled: p.isDisabled || !x || d.loading,
                style: e,
                loading: d.loading,
                buttonRef: u,
                children: [
                  t ? b : c.selectedItem ? d.selectedItemLabel || c.selectedItem.rendered : b,
                  !i &&
                    (0, n.jsx)(I, {
                      name: 'CaretDown',
                      $hideIcon: !x,
                      size: 16,
                      'aria-hidden': 'true',
                      'aria-label': 'select',
                    }),
                ],
              }),
            }),
            c.isOpen &&
              (0, n.jsx)(n.Fragment, {
                children: (0, w._p)()
                  ? (0, n.jsx)(y, { title: b, state: c, onSelectionChange: d.onSelectionChange })
                  : (0, n.jsx)(f.A, {
                      isOpen: !0,
                      minWidth: d.minWidth,
                      mobileRightAlign: d.mobileRightAlign,
                      menuProps: g,
                      state: c,
                      ...(s ? { ...s, onSelectionChange: d.onSelectionChange } : {}),
                    }),
              }),
          ],
        });
      }
      j.displayName = 'Select';
      let k = s.Ay.div.withConfig({ componentId: 'sc-ca9b6ad5-0' })([
          'border:1px solid var(--button_outlined--border-color);display:inline-block;height:100%;min-height:var(--height-medium);position:relative;transition:background-color 250ms cubic-bezier(0.4,0,0.2,1) 0ms,border-color 250ms cubic-bezier(0.4,0,0.2,1) 0ms,color 250ms cubic-bezier(0.4,0,0.2,1) 0ms,opacity 250ms cubic-bezier(0.4,0,0.2,1) 0ms;',
        ]),
        C = s.Ay.div.withConfig({ componentId: 'sc-ca9b6ad5-1' })([
          'align-items:center;display:flex;height:100%;',
        ]),
        I = (0, s.Ay)(d.A).withConfig({ componentId: 'sc-ca9b6ad5-2' })(
          ['margin-left:0.25rem;', ''],
          ({ $hideIcon: e }) => {
            if (e)
              return `
        visibility: hidden;
        width: 0px;
      `;
          }
        ),
        z = j;
    },
    68781: (e, t, i) => {
      i.d(t, { A: () => o });
      var n = i(54568),
        r = i(7620);
      let o = ({ children: e, ms: t }) => {
        let [i, o] = (0, r.useState)(!1);
        return (
          (0, r.useEffect)(() => {
            let e = setTimeout(() => {
              o(!0);
            }, t || 100);
            return () => clearTimeout(e);
          }, []),
          (0, n.jsx)(n.Fragment, { children: i ? e : null })
        );
      };
    },
    72990: (e, t, i) => {
      i.d(t, { Ay: () => u, zS: () => h });
      var n = i(54568),
        r = i(7620),
        o = i(48341),
        l = i(45808),
        a = i(77878);
      let s = (0, r.createContext)(void 0),
        d = ({ className: e, children: t, disabled: i, id: o, inputVariant: l, ...a }) => {
          let [d, u] = (0, r.useState)(!1);
          return (0, n.jsx)(s.Provider, {
            value: { disabled: i, id: o, inputVariant: l, setIsFocusVisible: u },
            children: (0, n.jsx)(c, {
              flex: !0,
              gridColumnGap: 2,
              ...a,
              className: `${e || ''} ${d ? 'focus-visible' : ''}`,
              disabled: i,
              inputVariant: l,
              minHeight: 'small' === l ? 'medium' : 'x-large',
              children: t,
            }),
          });
        },
        c = (0, o.Ay)(l.A).withConfig({ componentId: 'sc-74cfa54-0' })(
          [
            '',
            ';min-height:',
            ';padding:',
            ';position:relative;color:var(--input--color);background-color:var(--input--background-color);border:1px solid var(--input--border-color);box-shadow:inset 0.5px 0.5px 0 0.5px var(--input--border-color);',
            ' ',
            '',
          ],
          a.N,
          ({ minHeight: e }) => `var(--height-${e || 'x-large'})`,
          ({ padding: e }) =>
            e || 'var(--spacing-1) var(--spacing-1) var(--spacing-1) var(--spacing-2)',
          ({ disabled: e }) => {
            if (e)
              return `
        color: var(--input--disabled--color);
      `;
          },
          ({ inputVariant: e }) =>
            'warning' === e
              ? `
        border-color: var(--warning-400);
        box-shadow: inset 0.5px 0.5px 0px 0.5px var(--warning-400);
      `
              : 'error' === e
                ? `
        border-color: var(--danger-400);
        box-shadow: inset 0.5px 0.5px 0px 0.5px var(--danger-400);
      `
                : void 0
        );
      d.displayName = 'InputProvider';
      let u = d;
      function h() {
        return (0, r.useContext)(s);
      }
    },
    75551: (e, t, i) => {
      i.d(t, { vz: () => h, Ay: () => p.A });
      var n = i(54568),
        r = i(12078),
        o = i(7620),
        l = i(18098),
        a = i(48341),
        s = i(47990),
        d = i(39416),
        c = i(53082);
      let u = (0, a.Ay)(d.A).withConfig({ componentId: 'sc-2cfa662f-0' })([
          'margin-left:var(--spacing-1);',
        ]),
        h = ({ children: e, overlayTriggerState: t, showBorder: i, showCaret: a, ...d }) => {
          let h = (0, o.useRef)(null),
            p = (0, r.al)(),
            { buttonProps: m } = (0, l.s)({ onPress: () => (p ? (0, c.q5)(t.open) : t.open()) }, h);
          return (0, n.jsxs)(s.A, {
            size: 'medium',
            ...m,
            ...d,
            ref: h,
            children: [e, ' ', a ? (0, n.jsx)(u, { name: 'CaretDown', size: 16 }) : null],
          });
        };
      i(84561);
      var p = i(95897);
    },
    81619: (e, t, i) => {
      i.d(t, { A: () => x });
      var n = i(54568),
        r = i(12078),
        o = i(7620),
        l = i(31542),
        a = i(45826),
        s = i(48341),
        d = i(56457),
        c = i(96200),
        u = i(15258);
      let h = ({ buttonNode: e, state: t, increaseZIndex: i = !1, ...r }) => {
        let { tooltipProps: l } = (0, c.f)(r, t),
          a = 'string' == typeof r.children ? r.children.length : null,
          s = (0, o.useCallback)((e) => {
            if (e) {
              let { top: t, left: i, bottom: n, right: r } = e.getBoundingClientRect(),
                { innerHeight: o, innerWidth: l } = window;
              return {
                top: t > 0 && t < 200,
                bottom: n > 0 && o - n < 200,
                left: i > 0 && i < 200,
                right: r > 0 && l - r < 200,
              };
            }
            return { top: !1, bottom: !1, left: !1, right: !1 };
          }, []);
        return (0, n.jsx)(p, {
          ...(0, u.v)(r, l),
          isClosePlacement: s(e),
          charCount: a,
          increaseZIndex: i,
          children: r.children,
        });
      };
      h.displayName = 'Tooltip';
      let p = s.Ay.span.withConfig({ componentId: 'sc-f376643b-0' })(
        [
          'background:var(--tooltip--background-color);border:1px solid gray;border-radius:2px;box-shadow:0 8px 20px rgba(0 0 0 / 0.1);color:var(--tooltip--color);font-size:var(--font-size-2);line-height:1.25;margin-top:0.625rem;max-width:20rem;outline:none;padding:0.5rem;position:absolute;',
          ';top:100%;',
          ' z-index:',
          ';',
          ' ',
          ';',
        ],
        ({ textAlign: e }) => e && `text-align: ${e};`,
        ({ noWrap: e }) => e && 'white-space: nowrap;',
        ({ increaseZIndex: e }) => (e ? '2' : 'var(--z-index-tooltip)'),
        ({ minWidth: e, charCount: t }) =>
          e ? `min-width: ${e};` : null !== t && t > 30 ? 'min-width: 150px;' : void 0,
        ({ isClosePlacement: e, placement: t }) => {
          let i = {};
          if (
            ((e.top || e.bottom || e.left || e.right) &&
              (i = e.bottom
                ? e.left
                  ? { top: 'initial', left: 0, bottom: '20px' }
                  : { top: 'initial', right: 0, bottom: '20px' }
                : e.left
                  ? { left: 0 }
                  : { right: 0 }),
            t)
          ) {
            if ('top end' === t || 'top' === t)
              void 0 === i.top && (i.top = 'initial'),
                void 0 === i.right && (i.right = 0),
                void 0 === i.bottom && (i.bottom = '20px');
            else if ('start' === t) return void 0 === i.left && (i.left = 0), 'left: 0;';
          }
          if (!(Object.keys(i).length > 0)) return 'right: 0;';
          {
            let e = '';
            return (
              Object.keys(i).forEach((t) => {
                e += ` ${t}: ${i[t]};`;
              }),
              e
            );
          }
        }
      );
      var m = i(77241);
      let g = s.Ay.span.withConfig({ componentId: 'sc-4d7be51e-0' })(['position:relative;']),
        f = s.Ay.span.withConfig({ componentId: 'sc-4d7be51e-1' })(
          [
            'align-items:center;background-color:transparent;color:inherit;cursor:pointer;display:inline-flex;font-size:inherit;justify-content:center;min-height:var(--height-small);min-width:var(--height-small);@media (min-width:',
            'rem){min-height:16px;min-width:16px;}> svg{opacity:0.6;&:hover{opacity:1;}}',
          ],
          m.fi.sm
        ),
        b = (0, s.Ay)(d.A).withConfig({ componentId: 'sc-4d7be51e-2' })(
          ['position:relative;top:', ';'],
          ({ $svgTop: e }) => e || '0.2rem'
        ),
        x = function ({
          className: e = '',
          children: t,
          showIcon: i,
          customIcon: s,
          onClick: d,
          increaseZIndex: c,
          iconStyles: u = {},
          as: p,
          ...m
        }) {
          let x = (0, a.O)({ delay: 0, ...m }),
            v = (0, r.al)(),
            w = (0, o.useRef)(null),
            { triggerProps: y, tooltipProps: A } = (0, l.D)(m, x, w),
            [j, k] = (0, o.useState)(null),
            C = (0, o.useCallback)(() => {
              j !== window.scrollY && (x.close(), window.removeEventListener('scroll', C));
            }, [j, x]),
            I = (0, o.useCallback)(
              (e) => {
                'function' == typeof y.onClick && y.onClick(e),
                  'function' == typeof d && d(),
                  v && (x.open(), k(window.scrollY), window.addEventListener('scroll', C));
              },
              [C, d, x, y, v]
            );
          return (0, n.jsxs)(g, {
            ...(p ? { as: p } : {}),
            children: [
              (0, n.jsx)(f, {
                ref: w,
                ...y,
                className: `${e} tooltip-button`,
                onClick: I,
                children:
                  i || s ? (s ?? (0, n.jsx)(b, { ...u, name: 'InformationSquare', size: 16 })) : t,
              }),
              x.isOpen &&
                (0, n.jsx)(h, {
                  state: x,
                  buttonNode: w?.current,
                  ...m,
                  ...A,
                  increaseZIndex: c,
                  children: m.tooltip,
                }),
            ],
          });
        };
    },
    84561: (e, t, i) => {
      i.d(t, { A: () => n.A });
      var n = i(49698);
    },
    85273: (e, t, i) => {
      i.d(t, { S: () => o, d: () => r });
      var n = i(7620);
      function r(e, t, i) {
        let [r, o] = (0, n.useState)(e),
          l = (0, n.useRef)(null);
        return (
          (0, n.useEffect)(() => {
            o(e);
          }, [e]),
          (0, n.useEffect)(
            () => () => {
              null !== l.current && clearTimeout(l.current);
            },
            []
          ),
          [
            r,
            (0, n.useCallback)(
              (e) => {
                o(e),
                  null !== l.current && clearTimeout(l.current),
                  (l.current = window.setTimeout(() => {
                    i(e), (l.current = null);
                  }, t));
              },
              [i, t]
            ),
          ]
        );
      }
      function o(e, t, i = 166) {
        let l = (0, n.useRef)(e),
          [a, s] = r(
            e,
            i,
            (0, n.useCallback)(
              (e) => {
                'string' == typeof e && (e = e.trim()), e !== l.current && ((l.current = e), t(e));
              },
              [t]
            )
          );
        return [a, s];
      }
    },
    85709: (e, t, i) => {
      i.d(t, { A: () => r });
      var n = i(7620);
      function r(e, t = {}) {
        let {
            threshold: i = 0,
            root: o = null,
            rootMargin: l = '0%',
            freezeOnceVisible: a = !1,
          } = t,
          [s, d] = (0, n.useState)({ isIntersecting: !1 }),
          c = a && s?.isIntersecting,
          u = (0, n.useCallback)((e) => d(e[e.length - 1]), []);
        return (
          (0, n.useEffect)(() => {
            if (!window.IntersectionObserver) {
              d({ isIntersecting: !0 });
              return;
            }
            let t = e?.current;
            if (c || !t) return;
            let n = new IntersectionObserver(u, { threshold: i, root: o, rootMargin: l });
            return n.observe(t), () => n.disconnect();
          }, [e, o, l, c, u, i]),
          s
        );
      }
    },
    86649: (e, t, i) => {
      i.d(t, { s: () => n });
      let n = i(48341).Ay.input.withConfig({ componentId: 'sc-5f5fd5ea-0' })(
        [
          'width:100%;background-color:transparent;&:-webkit-autofill,&:-webkit-autofill:focus{-webkit-text-fill-color:var(--input--color) !important;transition:background-color 600000s 0s,color 600000s 0s;}input[data-autocompleted]{background-color:transparent !important;}font-size:var(--input--font-size);',
          " color:inherit;&:disabled{-webkit-text-fill-color:var(--input--disabled--color);opacity:1;}&:focus,&:focus:not(.focus-visible){outline:none;}&::placeholder,&::-webkit-input-placeholder{font-weight:400;}&:-ms-input-placeholder{font-weight:400;}&[type='search']::-webkit-search-cancel-button{margin-left:var(--spacing-1);}&[type='search']::-webkit-search-decoration,&[type='search']::-webkit-search-results-button,&[type='search']::-webkit-search-results-decoration,&[type='search']::-webkit-search-cancel-button{display:none;}&[type='number']::-webkit-inner-spin-button,&[type='number']::-webkit-outer-spin-button{-webkit-appearance:none;margin:0;}&[type='number']{-moz-appearance:textfield;}",
          '',
        ],
        ({ variant: e }) =>
          'small' === e &&
          `
    font-size: var(--font-size-2);
  `,
        ({ minHeight: e }) => {
          if (e) return `min-height: var(--height-${e});`;
        }
      );
    },
    95869: (e, t, i) => {
      i.d(t, { A: () => v });
      var n = i(54568),
        r = i(7620),
        o = i(45818),
        l = i(35662),
        a = i(7487),
        s = i(14089),
        d = i(48341),
        c = i(33604),
        u = i(61719);
      function h({ item: e, state: t }) {
        let i = (0, r.useRef)(null),
          { optionProps: o } = (0, u.x)(e, t, i);
        return (0, n.jsx)(p, { ...o, ref: i, children: e.rendered });
      }
      h.displayName = 'SelectModalListBoxItem';
      let p = d.Ay.li.withConfig({ componentId: 'sc-94826fa6-0' })([
        "align-items:center;color:var(--dropdown--color);cursor:pointer;display:flex;outline:none;padding:var(--spacing-2);&[tabindex='0'][aria-selected='false']{color:var(--dropdown--hover--color);background-color:var(--dropdown--hover--background-color);}&[aria-selected='true']{color:var(--dropdown--active--color);background-color:var(--dropdown--active--background-color);}",
      ]);
      function m(e) {
        let t = (0, r.useRef)(null),
          { listBoxRef: i = t, state: o } = e,
          { listBoxProps: l } = (0, c.X)(e, o, i);
        return (0, n.jsx)(g, {
          ...l,
          ref: i,
          children: [...o.collection].map((e) => (0, n.jsx)(h, { state: o, item: e }, e.key)),
        });
      }
      m.displayName = 'SelectModalListBox';
      let g = d.Ay.ul.withConfig({ componentId: 'sc-2d37142-0' })(
        [
          'background-color:var(--page--background-color);border:3px solid var(--dropdown--background-color);box-shadow:6px 6px 0 var(--box--primary--shadow-color);font-size:var(--font-size-2);max-height:80vh;overflow-x:auto;',
          '',
        ],
        ({ minWidth: e }) => e && `min-width: ${e};`
      );
      var f = i(77241);
      function b({ menuProps: e, state: t, selectSearchOptions: i, ...d }) {
        let c = (0, r.useRef)(null),
          { mobileRightAlign: u, popoverRef: h = c, minWidth: p } = d;
        (0, o.H)();
        let { overlayProps: g } = (0, l.e)(
          { isOpen: t.isOpen, onClose: t.close, shouldCloseOnBlur: !0, isDismissable: !0 },
          h
        );
        return (0, n.jsx)(a.n1, {
          restoreFocus: !0,
          children: (0, n.jsxs)(x, {
            className: `select-dropdown-list ${u ? 'isRightAlign' : ''}`,
            ...g,
            ref: h,
            minWidth: p,
            children: [(0, n.jsx)(m, { ...e, state: t }), (0, n.jsx)(s.R, { onDismiss: t.close })],
          }),
        });
      }
      b.displayName = 'SelectModal';
      let x = d.Ay.div.withConfig({ componentId: 'sc-aaed2edf-0' })(
          [
            'background-color:lightgray;border:1px solid gray;margin-top:0.25rem;',
            ';position:absolute;width:100%;z-index:var(--z-index-page-nav-scrolled);&.isRightAlign{right:0;}@media (min-width:',
            'rem){right:auto;}',
          ],
          ({ minWidth: e }) => e && `min-width: ${e}`,
          f.fi.sm
        ),
        v = b;
    },
    95897: (e, t, i) => {
      i.d(t, { A: () => y });
      var n = i(54568),
        r = i(7620),
        o = i(40230),
        l = i(15302),
        a = i(45818),
        s = i(18098),
        d = i(29448),
        c = i(7487),
        u = i(48341),
        h = i(45808),
        p = i(39416),
        m = i(84561),
        g = i(39651);
      let f = u.Ay.h2.withConfig({ componentId: 'sc-96d2bc9d-0' })(
          [
            'align-items:center;display:flex;justify-content:',
            ';min-height:var(--box_header--height);padding:0 var(--spacing-2);padding-left:var(--spacing-3);',
          ],
          ({ showCloseButton: e }) => (e ? 'space-between' : 'flex-start')
        ),
        b = u.Ay.footer.withConfig({ componentId: 'sc-96d2bc9d-1' })(['margin-top:1rem;']),
        x = (0, u.Ay)(h.A).withConfig({ componentId: 'sc-96d2bc9d-2' })(['']),
        v = u.Ay.div.withConfig({ componentId: 'sc-96d2bc9d-3' })(
          [
            'display:flex;flex-direction:column;width:calc(100% - var(--spacing-4));color:var(--page--text-color);background-color:var(--dialog--background-color);border:3px solid var(--dialog--border-color);@media (min-width:',
            'rem){height:100%;width:100%;max-width:100%;border:none;}@media (min-width:',
            'rem){height:auto;max-width:',
            ';}',
          ],
          g.fi.xxs,
          g.fi.sm,
          ({ maxWidth: e }) => e ?? '28.125rem'
        ),
        w = u.Ay.div.withConfig({ componentId: 'sc-96d2bc9d-4' })(
          [
            'align-items:center;display:flex;justify-content:center;position:fixed;top:0;left:0;bottom:0;right:0;z-index:var(--z-index-overlay);backdrop-filter:blur(3px);background:var(--dialog--background-color);@media (min-width:',
            'rem){background:rgba(0,0,0,0.5);}',
          ],
          g.fi.sm
        ),
        y = ({
          children: e,
          className: t,
          footerContent: i,
          maxWidth: u,
          noContentPadding: h = !1,
          state: g,
          title: y,
          testId: A,
          ...j
        }) => {
          let k = (0, r.useRef)(null),
            C = (0, r.useRef)(null),
            { modalProps: I, underlayProps: z } = (0, o.l)({ isDismissable: !0, ...j }, g, C),
            { titleProps: N } = (0, l.s)(j, C);
          (0, a.H)({ isDisabled: !1 });
          let { buttonProps: S } = (0, s.s)(
              {
                onPress: () => {
                  'function' == typeof g.close && g.close();
                },
              },
              k
            ),
            R = !!g.close;
          return (0, n.jsx)(d.hJ, {
            children: (0, n.jsx)(w, {
              ...z,
              children: (0, n.jsx)(c.n1, {
                contain: !0,
                restoreFocus: !0,
                autoFocus: !0,
                children: (0, n.jsxs)(v, {
                  ...I,
                  'data-testid': `modal-${A}`,
                  ref: C,
                  maxWidth: u,
                  children: [
                    y &&
                      (0, n.jsxs)(f, {
                        ...N,
                        showCloseButton: R,
                        children: [
                          y,
                          R &&
                            (0, n.jsx)(m.A, {
                              testId: 'close',
                              ...S,
                              ref: k,
                              padding: 2,
                              children: (0, n.jsx)(p.A, {
                                name: 'Close',
                                size: 24,
                                'aria-label': 'Close',
                              }),
                            }),
                        ],
                      }),
                    (0, n.jsxs)(x, {
                      padding: h ? '0' : 'var(--spacing-3)',
                      children: [
                        (0, n.jsx)('div', { children: e }),
                        i && (0, n.jsx)(b, { children: i }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
          });
        };
    },
  },
]);
