(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [479, 3860],
  {
    2580: (e) => {
      e.exports = {
        card: 'styles_card__n9cqN',
        header: 'styles_header__QeZM4',
        step: 'styles_step__R3EWt',
        content: 'styles_content__wZRTX',
        actions: 'styles_actions__nsEiB',
        progress: 'styles_progress__byfBc',
      };
    },
    8596: (e, s, n) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/new-safe/load',
        function () {
          return n(32146);
        },
      ]);
    },
    13484: (e, s, n) => {
      'use strict';
      n.d(s, { A: () => r });
      var a = n(6029);
      n(55729);
      var t = n(32676);
      let r = (e) => {
        let { name: s, value: n } = e;
        return (0, a.jsxs)(a.Fragment, {
          children: [
            s &&
              (0, a.jsx)(t.xA9, {
                item: !0,
                xs: 3,
                children: (0, a.jsx)(t.o5u, { variant: 'body2', children: s }),
              }),
            (0, a.jsx)(t.xA9, { item: !0, xs: s ? 9 : 12, children: n }),
          ],
        });
      };
    },
    19066: (e) => {
      e.exports = { helper: 'styles_helper__VddZk' };
    },
    32146: (e, s, n) => {
      'use strict';
      n.r(s), n.d(s, { default: () => Q });
      var a = n(6029),
        t = n(77328),
        r = n.n(t),
        l = n(89099),
        d = n(55729),
        i = n(85205),
        o = n(57597),
        c = n(33916),
        h = n(88992),
        x = n(78726),
        m = n(60089),
        u = n.n(m),
        j = n(30992),
        p = n(21128),
        f = n(35823),
        A = n.n(f),
        y = n(40939),
        w = n(74827),
        _ = n(99408),
        g = n(45650),
        v = n(54222),
        S = n(54926),
        b = n(50293),
        N = n(57187),
        k = n(52283),
        z = n(72830),
        C = n(94760),
        E = n(48230),
        B = n.n(E),
        I = (function (e) {
          return (e.name = 'name'), (e.address = 'address'), e;
        })(I || {});
      let J = (e) => {
        var s;
        let { data: n, onSubmit: t, onBack: r } = e,
          l = (0, b.Ay)(),
          d = (0, N.GV)((e) => (0, k.hM)(e, l)),
          o = (0, h.mN)({ mode: 'all', defaultValues: { name: n.name, address: n.address } }),
          {
            handleSubmit: c,
            formState: { errors: m, isValid: f },
            watch: E,
            getValues: I,
          } = o,
          J = E('address'),
          P = (0, w.qH)(),
          { ens: R, name: M, resolving: F } = (0, _.M)(J),
          O = M || R || P,
          T = async (e) => {
            if (d && Object.keys(d).includes(e)) return 'Safe Account is already added';
            try {
              await (0, S.getSafeInfo)(l, e);
            } catch (e) {
              return 'Address given is not a valid Safe Account address';
            }
          },
          H = c((e) => {
            t({ ...e, name: e.name || O }), e.name && (0, i.sx)(i.rR.NAME_SAFE);
          });
        return (0, a.jsx)(h.Op, {
          ...o,
          children: (0, a.jsxs)('form', {
            onSubmit: H,
            children: [
              (0, a.jsxs)(x.azJ, {
                className: u().row,
                children: [
                  (0, a.jsxs)(x.xA9, {
                    container: !0,
                    spacing: [3, 1],
                    sx: { mb: 3, pr: '40px' },
                    children: [
                      (0, a.jsx)(x.xA9, {
                        item: !0,
                        xs: 12,
                        md: !0,
                        children: (0, a.jsx)(j.A, {
                          name: 'name',
                          label:
                            (null == m
                              ? void 0
                              : null === (s = m.name) || void 0 === s
                                ? void 0
                                : s.message) || 'Name',
                          placeholder: O,
                          InputLabelProps: { shrink: !0 },
                          InputProps: {
                            endAdornment: F
                              ? (0, a.jsx)(x.jC1, {
                                  position: 'end',
                                  children: (0, a.jsx)(x.PaH, { size: 20 }),
                                })
                              : (0, a.jsx)(x.m_M, {
                                  title:
                                    'This name is stored locally and will never be shared with us or any third parties.',
                                  arrow: !0,
                                  placement: 'top',
                                  children: (0, a.jsx)(x.jC1, {
                                    position: 'end',
                                    children: (0, a.jsx)(x.Ahz, {
                                      component: p.A,
                                      inheritViewBox: !0,
                                    }),
                                  }),
                                }),
                          },
                        }),
                      }),
                      (0, a.jsx)(x.xA9, {
                        item: !0,
                        sx: { order: [-1, 1] },
                        children: (0, a.jsx)(x.azJ, {
                          className: A().select,
                          children: (0, a.jsx)(y.A, {}),
                        }),
                      }),
                    ],
                  }),
                  (0, a.jsx)(v.A, {
                    'data-testid': 'address-section',
                    label: 'Safe Account',
                    validate: T,
                    name: 'address',
                  }),
                  (0, a.jsxs)(x.o5u, {
                    sx: { mt: 4 },
                    children: [
                      'By continuing you consent to the',
                      ' ',
                      (0, a.jsx)(B(), {
                        href: z.S.terms,
                        passHref: !0,
                        legacyBehavior: !0,
                        children: (0, a.jsx)(C.A, { children: 'terms of use' }),
                      }),
                      ' ',
                      'and',
                      ' ',
                      (0, a.jsx)(B(), {
                        href: z.S.privacy,
                        passHref: !0,
                        legacyBehavior: !0,
                        children: (0, a.jsx)(C.A, { children: 'privacy policy' }),
                      }),
                      '.',
                    ],
                  }),
                ],
              }),
              (0, a.jsx)(x.cGx, {}),
              (0, a.jsx)(x.azJ, {
                className: u().row,
                children: (0, a.jsxs)(x.azJ, {
                  sx: {
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    gap: 3,
                  },
                  children: [
                    (0, a.jsx)(x.$nd, {
                      variant: 'outlined',
                      size: 'small',
                      onClick: () => {
                        let e = I();
                        r({ ...e, name: e.name || O });
                      },
                      startIcon: (0, a.jsx)(g.A, { fontSize: 'small' }),
                      children: 'Back',
                    }),
                    (0, a.jsx)(x.$nd, {
                      'data-testid': 'load-safe-next-btn',
                      type: 'submit',
                      variant: 'contained',
                      size: 'stretched',
                      disabled: !f,
                      children: 'Next',
                    }),
                  ],
                }),
              }),
            ],
          }),
        });
      };
      var P = n(8694),
        R = n(66225),
        M = (function (e) {
          return (e.owners = 'owners'), (e.threshold = 'threshold'), e;
        })(M || {});
      let F = (e) => {
        let { data: s, onSubmit: n, onBack: t } = e,
          r = (0, b.Ay)(),
          l = (0, h.mN)({ defaultValues: s, mode: 'onChange' }),
          {
            handleSubmit: i,
            setValue: o,
            control: c,
            formState: { isValid: m },
            getValues: j,
          } = l,
          { fields: p } = (0, h.jz)({ control: c, name: 'owners' }),
          [f] = (0, P.A)(() => {
            if (s.address) return (0, S.getSafeInfo)(r, s.address);
          }, [r, s.address]);
        return (
          (0, d.useEffect)(() => {
            f &&
              (o('threshold', f.threshold),
              o(
                'owners',
                f.owners.map((e, s) => ({
                  address: e.value,
                  name: j('owners.'.concat(s, '.name')) || '',
                }))
              ));
          }, [j, f, o]),
          (0, a.jsx)(h.Op, {
            ...l,
            children: (0, a.jsxs)('form', {
              onSubmit: i(n),
              children: [
                (0, a.jsx)(x.azJ, {
                  className: u().row,
                  children: p.map((e, s) =>
                    (0, a.jsx)(R.m, { index: s, groupName: 'owners', readOnly: !0 }, e.id)
                  ),
                }),
                (0, a.jsx)(x.cGx, {}),
                (0, a.jsx)(x.azJ, {
                  className: u().row,
                  children: (0, a.jsxs)(x.azJ, {
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    gap: 3,
                    children: [
                      (0, a.jsx)(x.$nd, {
                        variant: 'outlined',
                        size: 'small',
                        onClick: () => {
                          t(j());
                        },
                        startIcon: (0, a.jsx)(g.A, { fontSize: 'small' }),
                        children: 'Back',
                      }),
                      (0, a.jsx)(x.$nd, {
                        type: 'submit',
                        variant: 'contained',
                        size: 'stretched',
                        disabled: !m,
                        children: 'Next',
                      }),
                    ],
                  }),
                }),
              ],
            }),
          })
        );
      };
      var O = n(75073),
        T = n(86252),
        H = n.n(T),
        L = n(4876),
        W = n(30697),
        D = n(46549),
        V = n(13484),
        Z = n(62994),
        $ = n(12426);
      let q = (e) => {
          let { data: s, onBack: n } = e,
            t = (0, W._J)(),
            r = (0, N.jL)(),
            d = (0, l.useRouter)(),
            o = (null == t ? void 0 : t.chainId) || '';
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)(x.azJ, {
                className: u().row,
                children: (0, a.jsxs)(x.xA9, {
                  container: !0,
                  spacing: 3,
                  children: [
                    (0, a.jsx)(V.A, {
                      name: 'Network',
                      value: (0, a.jsx)(O.A, {
                        chainId: null == t ? void 0 : t.chainId,
                        inline: !0,
                      }),
                    }),
                    (0, a.jsx)(V.A, {
                      name: 'Name',
                      value: (0, a.jsx)(x.o5u, { children: s.name }),
                    }),
                    (0, a.jsx)(V.A, {
                      name: 'Signers',
                      value: (0, a.jsx)(x.azJ, {
                        className: H().ownersArray,
                        children: s.owners.map((e, s) =>
                          (0, a.jsx)(
                            L.A,
                            {
                              address: e.address,
                              name: e.name || e.ens,
                              shortAddress: !1,
                              showPrefix: !1,
                              showName: !0,
                              hasExplorer: !0,
                              showCopyButton: !0,
                            },
                            s
                          )
                        ),
                      }),
                    }),
                    (0, a.jsx)(V.A, {
                      name: 'Threshold',
                      value: (0, a.jsxs)(x.o5u, {
                        children: [
                          s.threshold,
                          ' out of ',
                          s.owners.length,
                          ' signer',
                          (0, $.Tz)(s.owners),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
              (0, a.jsx)(x.cGx, {}),
              (0, a.jsx)(x.azJ, {
                className: u().row,
                children: (0, a.jsxs)(x.azJ, {
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  gap: 3,
                  children: [
                    (0, a.jsx)(x.$nd, {
                      variant: 'outlined',
                      size: 'small',
                      onClick: () => {
                        n(s);
                      },
                      startIcon: (0, a.jsx)(g.A, { fontSize: 'small' }),
                      children: 'Back',
                    }),
                    (0, a.jsx)(x.$nd, {
                      onClick: () => {
                        let e = s.name,
                          n = s.address;
                        for (let { address: a, name: t, ens: l } of (r(
                          (0, k.f3)({
                            safe: {
                              ...D.p,
                              address: { value: n, name: e },
                              threshold: s.threshold,
                              owners: s.owners.map((e) => ({
                                value: e.address,
                                name: e.name || e.ens,
                              })),
                              chainId: o,
                            },
                          })
                        ),
                        r((0, Z.ds)({ chainIds: [o], address: n, name: e })),
                        s.owners)) {
                          let e = t || l;
                          e && r((0, Z.ds)({ chainIds: [o], address: a, name: e }));
                        }
                        (0, i.sx)({ ...i.rR.OWNERS, label: s.owners.length }),
                          (0, i.sx)({ ...i.rR.THRESHOLD, label: s.threshold }),
                          (0, i.sx)({ ...i.kg.OPEN_SAFE, label: i.lN.after_add }),
                          d.push({
                            pathname: z.S.home,
                            query: {
                              safe: ''.concat(null == t ? void 0 : t.shortName, ':').concat(n),
                            },
                          });
                      },
                      variant: 'contained',
                      size: 'stretched',
                      children: 'Add',
                    }),
                  ],
                }),
              }),
            ],
          });
        },
        G = [
          {
            title: 'Choose address, network and a name',
            subtitle:
              'Paste the address of the Safe Account you want to add, select the network and choose a name.',
            render: (e, s, n, t) => (0, a.jsx)(J, { onSubmit: s, onBack: n, data: e, setStep: t }),
          },
          {
            title: 'Signers and confirmations',
            subtitle: 'Optional: Provide a name for each signer.',
            render: (e, s, n, t) => (0, a.jsx)(F, { onSubmit: s, onBack: n, data: e, setStep: t }),
          },
          {
            title: 'Review',
            subtitle: 'Confirm adding Safe Account to your Watchlist',
            render: (e, s, n, t) => (0, a.jsx)(q, { onSubmit: s, onBack: n, data: e, setStep: t }),
          },
        ],
        X = { threshold: -1, owners: [], address: '', name: '' },
        U = (e) => {
          let { initialData: s } = e,
            n = (0, l.useRouter)(),
            t = null != s ? s : X;
          return (0, a.jsx)(o.mcf, {
            'data-testid': 'load-safe-form',
            children: (0, a.jsxs)(o.xA9, {
              container: !0,
              columnSpacing: 3,
              sx: { mt: [2, null, 7], justifyContent: 'center' },
              children: [
                (0, a.jsx)(o.xA9, {
                  item: !0,
                  xs: 12,
                  md: 10,
                  lg: 8,
                  children: (0, a.jsx)(o.o5u, {
                    variant: 'h2',
                    sx: { pb: 2 },
                    children: 'Add existing Safe Account',
                  }),
                }),
                (0, a.jsx)(o.xA9, {
                  item: !0,
                  xs: 12,
                  md: 10,
                  lg: 8,
                  sx: { order: [1, null, 0] },
                  children: (0, a.jsx)(
                    c.m,
                    {
                      initialData: t,
                      onClose: () => {
                        n.push(z.S.welcome.index);
                      },
                      steps: G,
                      eventCategory: i.y,
                    },
                    t.address
                  ),
                }),
              ],
            }),
          });
        };
      var K = n(94937);
      let Q = () => {
        let { address: e = '' } = (0, l.useRouter)().query,
          s = Array.isArray(e) ? e[0] : e;
        return (0, a.jsxs)('main', {
          children: [
            (0, a.jsx)(r(), {
              children: (0, a.jsx)('title', { children: ''.concat(K.Az, ' – Add Safe Account') }),
            }),
            s
              ? (0, a.jsx)(U, { initialData: { ...X, address: s } })
              : (0, a.jsx)(U, { initialData: X }),
          ],
        });
      };
    },
    33916: (e, s, n) => {
      'use strict';
      n.d(s, { m: () => x });
      var a = n(6029),
        t = n(55729),
        r = n(89037),
        l = n(88239),
        d = n(2580),
        i = n.n(d),
        o = n(78726),
        c = n(85205);
      let h = (e) => {
        let {
            steps: s,
            initialData: n,
            initialStep: a,
            eventCategory: r = c.gN,
            onClose: l,
            setWidgetStep: d,
          } = e,
          [i, o] = (0, t.useState)(a || 0),
          [h, x] = (0, t.useState)(n),
          m = () => {
            o((e) => e + 1),
              d && d((e) => e + 1),
              (0, c.sx)({ category: r, action: j ? 'Submit' : 'Next', label: i });
          },
          u = 0 === i,
          j = i === s.length - 1;
        return {
          onBack: u
            ? l
            : (e) => {
                o((e) => e - 1),
                  d && d((e) => e - 1),
                  (0, c.sx)({ category: r, action: u ? 'Cancel' : 'Back', label: i }),
                  e && x((s) => ({ ...s, ...e }));
              },
          onSubmit: (e) => {
            if (j) {
              l();
              return;
            }
            x((s) => ({ ...s, ...e })), m();
          },
          setStep: (e) => {
            o(e), d && d(e);
          },
          activeStep: i,
          stepData: h,
          firstStep: u,
          setStepData: x,
        };
      };
      function x(e) {
        let [s, n] = (0, t.useState)(l.A.secondary.main),
          { activeStep: d, onSubmit: c, onBack: x, stepData: m, setStep: u, setStepData: j } = h(e),
          { steps: p } = e,
          f = p[d],
          A = ((d + 1) / p.length) * 100;
        return (0, a.jsxs)(o.ZpM, {
          className: i().card,
          children: [
            (0, a.jsx)(r.A, {
              className: i().progress,
              color: s,
              children: (0, a.jsx)(o.hZv, {
                color: 'inherit',
                variant: 'determinate',
                value: Math.min(A, 100),
              }),
            }),
            f.title &&
              (0, a.jsx)(o.aRn, {
                title: f.title,
                subheader: f.subtitle,
                titleTypographyProps: { variant: 'h4' },
                subheaderTypographyProps: { variant: 'body2' },
                avatar: (0, a.jsx)(o.euF, {
                  className: i().step,
                  children: (0, a.jsx)(o.o5u, { variant: 'body2', children: d + 1 }),
                }),
                className: i().header,
              }),
            (0, a.jsx)(o.Wux, { className: i().content, children: f.render(m, c, x, u, n, j) }),
          ],
        });
      }
    },
    35823: (e) => {
      e.exports = {
        card: 'styles_card__uoWK3',
        select: 'styles_select__P_k1Z',
        networkSelect: 'styles_networkSelect__R8qLL',
      };
    },
    57597: (e, s, n) => {
      'use strict';
      n.d(s, { mcf: () => a.mcf, o5u: () => a.o5u, xA9: () => a.xA9 });
      var a = n(78726);
    },
    60089: (e) => {
      e.exports = { row: 'styles_row__UGXjL' };
    },
    66225: (e, s, n) => {
      'use strict';
      n.d(s, { m: () => w, A: () => _ });
      var a = n(6029),
        t = n(55729),
        r = n(78726),
        l = n(30992),
        d = n(19957),
        i = n(57506),
        o = n(10240),
        c = n(88992),
        h = n(99408),
        x = n(4876),
        m = n(88683),
        u = n(10996),
        j = n(19066),
        p = n.n(j),
        f = n(32988),
        A = n.n(f),
        y = n(51110);
      let w = (e) => {
          let { index: s, groupName: n, removable: j = !0, remove: f, readOnly: w = !1 } = e,
            { safeAddress: _ } = (0, y.A)(),
            g = (0, m.Ay)(),
            v = ''.concat(n, '.').concat(s),
            { control: S, getValues: b, setValue: N } = (0, c.xW)(),
            k = (0, c.FH)({ control: S, name: n }),
            z = (0, c.FH)({ control: S, name: v }),
            C = (0, t.useMemo)(
              () => Array.from({ length: k.length }, (e, s) => ''.concat(n, '.').concat(s)),
              [k, n]
            ),
            E = (0, t.useCallback)(
              async (e) =>
                (0, u.xU)(e, _)
                  ? 'The Safe Account cannot own itself'
                  : b('owners').filter((s) => (0, u.xU)(s.address, e)).length > 1
                    ? 'Signer is already added'
                    : void 0,
              [b, _]
            ),
            { name: B, ens: I, resolving: J } = (0, h.M)(z.address);
          (0, t.useEffect)(() => {
            B && !b(''.concat(v, '.name')) && N(''.concat(v, '.name'), B);
          }, [N, b, B, v]),
            (0, t.useEffect)(() => {
              I && N(''.concat(v, '.ens'), I);
            }, [I, N, v]);
          let P = z.address === (null == g ? void 0 : g.address);
          return (0, a.jsxs)(r.xA9, {
            container: !0,
            spacing: 3,
            className: A()({ [p().helper]: P }),
            sx: { alignItems: 'center', marginBottom: 3, flexWrap: ['wrap', void 0, 'nowrap'] },
            children: [
              (0, a.jsx)(r.xA9, {
                item: !0,
                xs: 12,
                md: w ? 5 : 4,
                children: (0, a.jsx)(r.MJN, {
                  fullWidth: !0,
                  children: (0, a.jsx)(l.A, {
                    'data-testid': 'owner-name',
                    name: ''.concat(v, '.name'),
                    label: 'Signer name',
                    InputLabelProps: { shrink: !0 },
                    placeholder: I || 'Signer '.concat(s + 1),
                    helperText: P && 'Your connected wallet',
                    InputProps: {
                      endAdornment: J
                        ? (0, a.jsx)(d.A, {
                            position: 'end',
                            children: (0, a.jsx)(r.PaH, { size: 20 }),
                          })
                        : null,
                    },
                  }),
                }),
              }),
              (0, a.jsx)(r.xA9, {
                item: !0,
                xs: 11,
                md: 7,
                children: w
                  ? (0, a.jsx)(r.o5u, {
                      variant: 'body2',
                      component: 'div',
                      children: (0, a.jsx)(x.A, {
                        address: z.address,
                        shortAddress: !0,
                        hasExplorer: !0,
                        showCopyButton: !0,
                      }),
                    })
                  : (0, a.jsx)(r.MJN, {
                      fullWidth: !0,
                      children: (0, a.jsx)(i.A, {
                        name: ''.concat(v, '.address'),
                        label: 'Signer',
                        validate: E,
                        deps: C,
                        onReset: () => N(''.concat(v, '.name'), ''),
                      }),
                    }),
              }),
              !w &&
                (0, a.jsx)(r.xA9, {
                  item: !0,
                  xs: 1,
                  sx: {
                    ml: -2,
                    alignSelf: 'stretch',
                    display: 'flex',
                    alignItems: 'center',
                    flexShrink: 0,
                  },
                  children:
                    j &&
                    (0, a.jsx)(a.Fragment, {
                      children: (0, a.jsx)(r.K0, {
                        'data-testid': 'remove-owner-btn',
                        onClick: () => (null == f ? void 0 : f(s)),
                        'aria-label': 'Remove signer',
                        children: (0, a.jsx)(r.Ahz, { component: o.A, inheritViewBox: !0 }),
                      }),
                    }),
                }),
            ],
          });
        },
        _ = w;
    },
    86252: (e) => {
      e.exports = {
        ownersArray: 'styles_ownersArray__Lwugg',
        strikethrough: 'styles_strikethrough__dsfcO',
        errorMessage: 'styles_errorMessage__EgiJf',
        networkFee: 'styles_networkFee__s25eL',
        networkFeeInline: 'styles_networkFeeInline__o4u72',
      };
    },
  },
  (e) => {
    var s = (s) => e((e.s = s));
    e.O(0, [636, 6593, 8792], () => s(8596)), (_N_E = e.O());
  },
]);
//# sourceMappingURL=load-077e6103c01c54f3.js.map
