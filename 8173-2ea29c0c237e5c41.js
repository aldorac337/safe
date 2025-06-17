'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8173],
  {
    3717: (e, r, t) => {
      t.d(r, { x: () => h });
      var n = t(54568),
        i = t(44876),
        o = t(35183),
        a = t(69228),
        l = t(84121),
        c = t(84032),
        s = t(38071);
      let d = '/images/default-crypto.png',
        { IconSize: u } = c.B,
        h = ({
          className: e = '',
          blockchainId: r = '',
          tooltip: t = '',
          size: c = 'sm',
          address: h,
          sx: g,
        }) =>
          (0, n.jsx)(a.m, {
            title: t,
            placement: 'top',
            children: (0, n.jsx)(i.A, {
              component: 'img',
              'data-testid': `token-icon-${t}`,
              className: `${e}`,
              alt: t,
              onError: ({ currentTarget: e }) => {
                e.src = d;
              },
              src: h ? `${(0, o.YQ)(r ?? '')}${h.toLowerCase()}.png` : d,
              loading: 'lazy',
              sx: (e) => ({
                border: '1px solid transparent',
                borderRadius: '50%',
                ...('sm' === c && {
                  width: '1.75rem',
                  height: '1.75rem',
                  [e.breakpoints.down(400)]: { width: '1.5rem', height: '1.5rem' },
                }),
                ...('mui-sm' === c && (0, l.NI)({ width: u.sm, height: u.sm })),
                ...('mui-md' === c && (0, l.NI)({ width: u.md, height: u.md })),
                ...('xl' === c && (0, l.NI)({ width: u.xl, height: u.xl })),
                ...(0, s.Ms)(g, e),
              }),
            }),
          });
    },
    14815: (e, r, t) => {
      t.d(r, { Gw: () => o, l8: () => a, yp: () => i });
      let n = {
          '5m': 300,
          '15m': 900,
          '30m': 1800,
          '1h': 3600,
          '4h': 14400,
          '6h': 21600,
          '12h': 43200,
          '1d': 86400,
          '7d': 604800,
          '14d': 1209600,
        },
        i = (e, r) => r - n[e],
        o = (e, r) => Math.floor(r - 299 * n[e]),
        a = (e) => e - 60 * new Date().getTimezoneOffset();
    },
    23795: (e, r, t) => {
      t.d(r, { c: () => a, t: () => o });
      var n = t(40038),
        i = t.n(n);
      let o = async (e, r) => {
          let t = await r.waitForTransaction(e);
          if (!t?.status) throw Error(`Transaction ${e} failed`);
          return t;
        },
        a = async (e, r) => {
          let { results: t, errors: n } = await i()
            .for(e)
            .process((e) => o(e, r));
          if (Array.isArray(n) && n.length > 0) throw n;
          return t;
        };
    },
    50654: (e, r, t) => {
      t.d(r, { A: () => H });
      var n = t(54568),
        i = t(7620),
        o = t(48341),
        a = t(16726),
        l = t(31176),
        c = t(20591),
        s = t.n(c);
      function d(e) {
        return e.replace(/hsla?\((\d+),\s*(\d+)%,\s*(\d+)%(?:,\s*[\d.]+)?\)/, (e, r, t, n) => {
          let i = t / 100,
            o = n / 100,
            a = (e) => (e + r / 30) % 12,
            l = (e) => o - i * Math.min(o, 1 - o) * Math.max(-1, Math.min(a(e) - 3, 9 - a(e), 1));
          return `rgb(${Math.round(255 * l(0))}, ${Math.round(255 * l(8))}, ${Math.round(255 * l(4))})`;
        });
      }
      let u = o.Ay.div.withConfig({ componentId: 'sc-67bdbbb-0' })([
          'position:absolute;width:100%;font-variant-numeric:tabular-nums;',
        ]),
        h = ({
          chartHeight: e,
          ohlcData: r,
          volumeData: t,
          oraclePriceData: o,
          liquidationRange: a,
          timeOption: c,
          wrapperRef: h,
          chartExpanded: g,
          magnet: p,
          colors: f,
          refetchingCapped: m,
          fetchMoreChartData: x,
          lastFetchEndTime: b,
          oraclePriceVisible: v,
          liqRangeCurrentVisible: C,
          liqRangeNewVisible: y,
          latestOraclePrice: w,
        }) => {
          let j = (0, i.useRef)(null),
            A = (0, i.useRef)(null),
            k = (0, i.useRef)(null),
            S = (0, i.useRef)(null),
            I = (0, i.useRef)(null),
            R = (0, i.useRef)(null),
            V = (0, i.useRef)(null),
            F = (0, i.useRef)(null),
            z = (0, i.useRef)(null),
            D = (0, i.useRef)(b),
            O = (0, i.useRef)(!0),
            M = (0, i.useRef)(4),
            [P, L] = (0, i.useState)(!1),
            [E, N] = (0, i.useState)(null),
            [q, $] = (0, i.useState)(!1);
          (0, i.useEffect)(() => {
            D.current = b;
          }, [b]);
          let _ = (0, i.useRef)(
            s()(
              () => {
                !q && !m && ($(!0), x(D.current));
              },
              500,
              { leading: !0, trailing: !1 }
            )
          );
          return (
            (0, i.useEffect)(() => {
              if (!j.current) return;
              (A.current = (0, l.R9)(j.current, {
                layout: {
                  background: { type: l.mE.Solid, color: d(f.backgroundColor) },
                  textColor: d(f.textColor),
                },
                width: h.current.clientWidth,
                height: g ? e.expanded : e.standard,
                timeScale: { timeVisible: 'day' !== c },
                rightPriceScale: {
                  autoScale: !0,
                  alignLabels: !0,
                  borderVisible: !1,
                  scaleMargins: { top: 0.1, bottom: 0.1 },
                },
                grid: { vertLines: { visible: !1 }, horzLines: { visible: !1 } },
                crosshair: {
                  mode: p ? l._q.Magnet : l._q.Normal,
                  vertLine: {
                    width: 4,
                    color: '#C3BCDB44',
                    style: l.Sc.Solid,
                    labelBackgroundColor: '#9B7DFF',
                  },
                  horzLine: { color: '#9B7DFF', labelBackgroundColor: '#9B7DFF' },
                },
              })),
                A.current.timeScale(),
                (O.current = !0);
              let n = () => {
                  A.current &&
                    ((I.current = A.current.addSeries(l.ti, {
                      topColor: f.rangeColorA25,
                      bottomColor: f.rangeColorA25,
                      lineColor: f.rangeColor,
                      lineWidth: 1,
                      lineStyle: 3,
                      crosshairMarkerVisible: !1,
                      pointMarkersVisible: !1,
                      lineVisible: !1,
                      priceLineStyle: 2,
                      visible: C,
                      priceFormat: {
                        type: 'custom',
                        formatter: (e) => {
                          let [, r] = e.toString().split('.');
                          if (!r) return e.toFixed(4);
                          let t = r.split('').findIndex((e) => '0' !== e);
                          return (M.current = e >= 1 ? 4 : t + 4), e.toFixed(M.current);
                        },
                        minMove: 1e-7,
                      },
                    })),
                    (R.current = A.current.addSeries(l.ti, {
                      topColor: f.backgroundColor,
                      bottomColor: f.backgroundColor,
                      lineColor: f.rangeColor,
                      lineWidth: 1,
                      lineStyle: 3,
                      crosshairMarkerVisible: !1,
                      pointMarkersVisible: !1,
                      lineVisible: !1,
                      priceLineStyle: 2,
                      visible: C,
                      priceFormat: {
                        type: 'custom',
                        formatter: (e) => {
                          let [, r] = e.toString().split('.');
                          if (!r) return e.toFixed(4);
                          let t = r.split('').findIndex((e) => '0' !== e);
                          return (M.current = e >= 1 ? 4 : t + 4), e.toFixed(M.current);
                        },
                        minMove: 1e-7,
                      },
                    })));
                },
                i = () => {
                  A.current &&
                    ((k.current = A.current.addSeries(l.ti, {
                      topColor: f.rangeColorA25,
                      bottomColor: f.rangeColorA25,
                      lineColor: f.rangeColor,
                      lineWidth: 1,
                      lineStyle: 3,
                      crosshairMarkerVisible: !1,
                      pointMarkersVisible: !1,
                      lineVisible: !1,
                      priceLineStyle: 2,
                      visible: y,
                      priceFormat: {
                        type: 'custom',
                        formatter: (e) => {
                          let [, r] = e.toString().split('.');
                          if (!r) return e.toFixed(4);
                          let t = r.split('').findIndex((e) => '0' !== e);
                          return (M.current = e >= 1 ? 4 : t + 4), e.toFixed(M.current);
                        },
                        minMove: 1e-7,
                      },
                    })),
                    (S.current = A.current.addSeries(l.ti, {
                      topColor: f.backgroundColor,
                      bottomColor: f.backgroundColor,
                      lineColor: f.rangeColor,
                      lineWidth: 1,
                      lineStyle: 3,
                      crosshairMarkerVisible: !1,
                      pointMarkersVisible: !1,
                      lineVisible: !1,
                      priceLineStyle: 2,
                      visible: y,
                      priceFormat: {
                        type: 'custom',
                        formatter: (e) => {
                          let [, r] = e.toString().split('.');
                          if (!r) return e.toFixed(4);
                          let t = r.split('').findIndex((e) => '0' !== e);
                          return (M.current = e >= 1 ? 4 : t + 4), e.toFixed(M.current);
                        },
                        minMove: 1e-7,
                      },
                    })));
                };
              a &&
                a.current &&
                a.new &&
                (a.new.price2[0].value > a.current.price2[0].value ? (i(), n()) : (n(), i())),
                a && !a.current && a.new && !k.current && i(),
                a && a.current && !a.new && !I.current && n(),
                r &&
                  !V.current &&
                  (V.current = A.current.addSeries(l.HD, {
                    priceLineStyle: 2,
                    upColor: '#26a69a',
                    downColor: '#ef5350',
                    borderVisible: !1,
                    wickUpColor: '#26a69a',
                    wickDownColor: '#ef5350',
                    priceFormat: {
                      type: 'custom',
                      formatter: (e) => {
                        let [, r] = e.toString().split('.');
                        if (!r) return e.toFixed(4);
                        let t = r.split('').findIndex((e) => '0' !== e);
                        return (M.current = e >= 1 ? 4 : t + 4), e.toFixed(M.current);
                      },
                      minMove: 1e-7,
                    },
                  })),
                t &&
                  !F.current &&
                  ((F.current = A.current.addSeries(l.Ej, {
                    priceFormat: { type: 'volume' },
                    priceScaleId: '',
                  })),
                  F.current.priceScale().applyOptions({ scaleMargins: { top: 0.7, bottom: 0 } })),
                o &&
                  !z.current &&
                  (z.current = A.current.addSeries(l.Im, {
                    color: f.chartOraclePrice,
                    lineWidth: 2,
                    priceLineStyle: 2,
                    visible: v,
                  }));
              let s = () => {
                  if (q || m || !A.current || !V.current) return;
                  let e = A.current.timeScale(),
                    r = e.getVisibleLogicalRange();
                  if (!r) return;
                  let t = V.current.barsInLogicalRange(r);
                  t && t.barsBefore < 50 && (_.current(), N(e.getVisibleRange()));
                },
                u = A.current.timeScale();
              return (
                u.subscribeVisibleLogicalRangeChange(s),
                () => {
                  u.unsubscribeVisibleLogicalRangeChange(s),
                    (V.current = null),
                    A.current && (A.current.remove(), (A.current = null)),
                    (k.current = null),
                    (S.current = null),
                    (I.current = null),
                    (R.current = null),
                    (V.current = null),
                    (F.current = null),
                    (z.current = null);
                }
              );
            }, [
              g,
              e.expanded,
              e.standard,
              f.backgroundColor,
              f.chartOraclePrice,
              f.rangeColor,
              f.rangeColorA25,
              f.textColor,
              q,
              E,
              C,
              y,
              a,
              p,
              r,
              o,
              v,
              m,
              c,
              t,
              h,
            ]),
            (0, i.useEffect)(() => {
              if (!A.current) return;
              let e = A.current.timeScale();
              V.current && (V.current.setData(r), $(!1), E && e.setVisibleRange(E)),
                F.current && void 0 !== t && F.current.setData(t),
                z.current && void 0 !== o && z.current.setData(o),
                void 0 !== a &&
                  (a.new &&
                    k.current &&
                    S.current &&
                    (k.current.setData(a.new.price1), S.current.setData(a.new.price2)),
                  a.current &&
                    I.current &&
                    R.current &&
                    (I.current.setData(a.current.price1), R.current.setData(a.current.price2)),
                  I.current &&
                    R.current &&
                    a &&
                    a.current &&
                    a.new &&
                    (I.current.applyOptions({
                      topColor: f.rangeColorA25Old,
                      bottomColor: f.rangeColorA25Old,
                      lineColor: f.rangeColorOld,
                    }),
                    R.current.applyOptions({
                      topColor: f.backgroundColor,
                      bottomColor: f.backgroundColor,
                      lineColor: f.rangeColorOld,
                    }))),
                w &&
                  z.current &&
                  o &&
                  o[o.length - 1].value !== +w &&
                  z.current.update({ time: o[o.length - 1].time, value: +w });
            }, [f.backgroundColor, f.rangeColorA25Old, f.rangeColorOld, x, q, E, w, a, r, o, m, t]),
            (0, i.useEffect)(
              () => (
                (h.current = new ResizeObserver((e) => {
                  if (P) return;
                  let { width: r, height: t } = e[0].contentRect;
                  (r -= 1) <= 0 ||
                    (A.current?.applyOptions({ width: r, height: t }),
                    A.current?.timeScale().getVisibleLogicalRange());
                })),
                h.current.observe(j.current),
                () => {
                  L(!0), h?.current && h.current.disconnect();
                }
              ),
              [h, P]
            ),
            (0, n.jsx)(u, { ref: j })
          );
        },
        g = o.Ay.div.withConfig({ componentId: 'sc-9e325f2c-0' })([
          'display:flex;flex-direction:column;margin:var(--spacing-2) auto 0 0;border-top:1px solid var(--border-600);',
        ]),
        p = (0, o.Ay)(a.A).withConfig({ componentId: 'sc-9e325f2c-1' })([
          'color:var(--page--text-color);margin-right:auto;margin-top:var(--spacing-2);font-family:var(--font);font-weight:var(--bold);text-transform:none;&.active{color:var(--button_text--hover--color);background-color:var(--button_outlined--hover--background-color);&:hover{opacity:0.8;}}',
        ]),
        f = ({ data: e, currentData: r, setCurrentData: t, ...i }) => {
          let o = (e) => {
            t(e), i.close && i.close();
          };
          return (0, n.jsx)(g, {
            children: e.map((e, t) =>
              (0, n.jsx)(
                p,
                {
                  className: t === r ? 'active' : '',
                  variant: 'select',
                  onClick: () => o(t),
                  children: e.label,
                },
                t
              )
            ),
          });
        };
      var m = t(11209);
      let x = (0, o.Ay)(m.uM).withConfig({ componentId: 'sc-29ce7b14-0' })([
          'display:flex;flex-direction:column;h3{font-size:var(--font-size-2);}',
        ]),
        b = o.Ay.h3.withConfig({ componentId: 'sc-29ce7b14-1' })([
          'font-size:var(--font-size-3);margin:auto;padding-left:var(--spacing-2);',
        ]),
        v = ({
          selectedChartIndex: e,
          selectChartList: r,
          setChartSelectedIndex: t,
          isDisabled: i,
        }) =>
          (0, n.jsx)(n.Fragment, {
            children:
              1 === r.length
                ? (0, n.jsx)(b, { children: r[0]?.label ?? 'Loading' })
                : (0, n.jsx)(m.Ay, {
                    buttonProps: { isDisabled: i },
                    placement: 'bottom',
                    offset: 0,
                    buttonStyles: { padding: '0.5rem' },
                    label: (0, n.jsx)('h3', { children: r[e]?.label ?? 'Loading' }),
                    showExpandIcon: !0,
                    children: (0, n.jsx)(x, {
                      title: 'Select Chart',
                      children: (0, n.jsx)(f, { data: r, currentData: e, setCurrentData: t }),
                    }),
                  }),
          }),
        C = o.Ay.div.withConfig({ componentId: 'sc-349a4466-0' })([
          'display:flex;flex-direction:column;margin:var(--spacing-2) auto 0 0;border-top:1px solid var(--border-600);',
        ]),
        y = o.Ay.div.withConfig({ componentId: 'sc-349a4466-1' })([
          'display:flex;margin-top:var(--spacing-2);',
        ]),
        w = (0, o.Ay)(a.A).withConfig({ componentId: 'sc-349a4466-2' })([
          'color:var(--page--text-color);margin-right:var(--spacing-2);margin-top:var(--spacing-1);&.active{color:var(--button_text--hover--color);background-color:var(--button_outlined--hover--background-color);&:hover{opacity:0.8;}}',
        ]),
        j = ({ currentTimeOption: e, setCurrentTimeOption: r, ...t }) => {
          let i = (e) => {
            r(e), t.close && t.close();
          };
          return (0, n.jsxs)(C, {
            children: [
              (0, n.jsxs)(y, {
                children: [
                  (0, n.jsx)(w, {
                    className: '15m' === e ? 'active' : '',
                    variant: 'select',
                    onClick: () => i('15m'),
                    children: '15m',
                  }),
                  (0, n.jsx)(w, {
                    className: '30m' === e ? 'active' : '',
                    variant: 'select',
                    onClick: () => i('30m'),
                    children: '30m',
                  }),
                ],
              }),
              (0, n.jsxs)(y, {
                children: [
                  (0, n.jsx)(w, {
                    className: '1h' === e ? 'active' : '',
                    variant: 'select',
                    onClick: () => i('1h'),
                    children: '1h',
                  }),
                  (0, n.jsx)(w, {
                    className: '4h' === e ? 'active' : '',
                    variant: 'select',
                    onClick: () => i('4h'),
                    children: '4h',
                  }),
                  (0, n.jsx)(w, {
                    className: '6h' === e ? 'active' : '',
                    variant: 'select',
                    onClick: () => i('6h'),
                    children: '6h',
                  }),
                ],
              }),
              (0, n.jsxs)(y, {
                children: [
                  (0, n.jsx)(w, {
                    className: '1d' === e ? 'active' : '',
                    variant: 'select',
                    onClick: () => i('1d'),
                    children: '1d',
                  }),
                  (0, n.jsx)(w, {
                    className: '7d' === e ? 'active' : '',
                    variant: 'select',
                    onClick: () => i('7d'),
                    children: '7d',
                  }),
                  (0, n.jsx)(w, {
                    className: '14d' === e ? 'active' : '',
                    variant: 'select',
                    onClick: () => i('14d'),
                    children: '14d',
                  }),
                ],
              }),
            ],
          });
        },
        A = (0, o.Ay)(m.uM).withConfig({ componentId: 'sc-5bc9254e-0' })([
          'display:flex;flex-direction:column;h3{font-size:var(--font-size-2);margin-right:auto;}',
        ]),
        k = ({ currentTimeOption: e, setCurrentTimeOption: r, isDisabled: t }) =>
          (0, n.jsx)(m.Ay, {
            buttonProps: { isDisabled: t },
            placement: 'bottom',
            offset: 0,
            buttonStyles: {
              padding: '0.5rem',
              border: '1px solid var(--nav_button--border-color)',
            },
            label: (0, n.jsx)('h3', { children: e }),
            showExpandIcon: !0,
            buttonVariant: 'outlined',
            children: (0, n.jsx)(A, {
              title: 'Select Timeframe',
              children: (0, n.jsx)(j, { currentTimeOption: e, setCurrentTimeOption: r }),
            }),
          });
      var S = t(38526),
        I = t(56457),
        R = t(99599);
      let V = {
          backgroundColor: '#fafafa',
          lineColor: '#2962FF',
          textColor: 'black',
          areaTopColor: '#2962FF',
          areaBottomColor: 'rgba(41, 98, 255, 0.28)',
          chartGreenColor: '#2962FF',
          chartRedColor: '#ef5350',
          chartLabelColor: '#9B7DFF',
          chartVolumeRed: '#ef53507e',
          chartVolumeGreen: '#26a6997e',
          chartOraclePrice: '#3360c9c0',
          rangeColor: '#dfb316',
          rangeColorA25: '#dfb4167f',
          rangeColorOld: '#ab792f',
          rangeColorA25Old: '#ab792f25',
        },
        F = o.Ay.div.withConfig({ componentId: 'sc-d94fcb67-0' })([
          'display:flex;flex-direction:column;',
        ]),
        z = (0, o.Ay)(a.A).withConfig({ componentId: 'sc-d94fcb67-1' })([
          'margin:auto var(--spacing-3) auto 0;',
        ]),
        D = (0, o.Ay)(I.A).withConfig({ componentId: 'sc-d94fcb67-2' })(['']),
        O = o.Ay.div.withConfig({ componentId: 'sc-d94fcb67-3' })([
          'display:flex;flex-direction:row;margin-bottom:var(--spacing-3);padding-right:var(--spacing-2);',
        ]),
        M = o.Ay.div.withConfig({ componentId: 'sc-d94fcb67-4' })([
          'display:flex;flex-direction:row;margin-right:auto;',
        ]),
        P = (0, o.Ay)(a.A).withConfig({ componentId: 'sc-d94fcb67-5' })([
          'margin-left:var(--spacing-2);margin-right:var(--spacing-2);box-shadow:none;display:none;align-items:center;&.active:not(:disabled){box-shadow:none;}@media (min-width:31.25rem){display:flex;}',
        ]),
        L = (0, o.Ay)(a.A).withConfig({ componentId: 'sc-d94fcb67-6' })([
          'margin-left:var(--spacing-2);box-shadow:none;display:none;align-items:center;&.active:not(:disabled){box-shadow:none;}@media (min-width:31.25rem){display:flex;}',
        ]),
        E = o.Ay.div.withConfig({ componentId: 'sc-d94fcb67-7' })(
          [
            'display:flex;flex-direction:column;position:relative;width:100%;min-height:',
            ';padding-bottom:var(--spacing-3);',
          ],
          (e) =>
            e.chartExpanded
              ? e.chartHeight.expanded.toString() + 'px'
              : e.chartHeight.standard.toString() + 'px'
        ),
        N = (0, o.Ay)(R.V).withConfig({ componentId: 'sc-d94fcb67-8' })([
          'flex-direction:column;gap:var(--spacing-2);',
        ]),
        q = o.Ay.p.withConfig({ componentId: 'sc-d94fcb67-9' })(['font-size:var(--font-size-2);']),
        $ = o.Ay.div.withConfig({ componentId: 'sc-d94fcb67-10' })([
          'display:flex;flex-direction:column;',
        ]),
        _ = o.Ay.div.withConfig({ componentId: 'sc-d94fcb67-11' })([
          'display:flex;flex-direction:row;justify-content:center;flex-wrap:wrap;gap:var(--spacing-2);',
        ]),
        B = (0, o.Ay)(S.A).withConfig({ componentId: 'sc-d94fcb67-12' })([
          'align-items:center;justify-content:center;display:flex;font-size:var(--font-size-1);font-weight:var(--font-weight);margin-right:0;svg{margin-right:0;}',
        ]),
        T = o.Ay.p.withConfig({ componentId: 'sc-d94fcb67-13' })([
          'font-size:var(--font-size-1);font-weight:none;',
        ]),
        H = ({
          chartType: e,
          chartStatus: r,
          chartHeight: t,
          chartExpanded: o,
          themeType: a,
          ohlcData: l,
          volumeData: c,
          oraclePriceData: s,
          liquidationRange: d,
          selectedChartIndex: u,
          setChartSelectedIndex: g,
          timeOption: p,
          setChartTimeOption: f,
          flipChart: m,
          refetchPricesData: x,
          fetchMoreChartData: b,
          lastFetchEndTime: C,
          refetchingCapped: y,
          selectChartList: w,
          oraclePriceVisible: j,
          liqRangeCurrentVisible: A,
          liqRangeNewVisible: S,
          toggleOraclePriceVisible: H,
          toggleLiqRangeCurrentVisible: W,
          toggleLiqRangeNewVisible: G,
          latestOraclePrice: Y,
        }) => {
          let [X, U] = (0, i.useState)(!1),
            Q = [...l],
            Z = (0, i.useRef)(null),
            [J, K] = (0, i.useState)(a),
            [ee, er] = (0, i.useState)(V);
          return (
            (0, i.useEffect)(() => {
              let r = getComputedStyle(document.body),
                t =
                  'crvusd' !== e || o
                    ? r.getPropertyValue('--box--secondary--background-color')
                    : r.getPropertyValue('--tab-secondary--content--background-color'),
                n = r.getPropertyValue('--line-color'),
                i = r.getPropertyValue('--page--text-color'),
                l = r.getPropertyValue('--area-top-color'),
                c = r.getPropertyValue('--area-bottom-color'),
                s = r.getPropertyValue('--chart-green'),
                d = r.getPropertyValue('--chart-red'),
                u = r.getPropertyValue('--chart-label'),
                h = r.getPropertyValue('--chart-volume-green'),
                g = r.getPropertyValue('--chart-volume-red'),
                p = r.getPropertyValue('--chart-oracle-price-line'),
                f = r.getPropertyValue('--chart-liq-range'),
                m = r.getPropertyValue('--chart-liq-range-a25');
              er({
                backgroundColor: t,
                lineColor: n,
                textColor: i,
                areaTopColor: l,
                areaBottomColor: c,
                chartGreenColor: s,
                chartRedColor: d,
                chartLabelColor: u,
                chartVolumeRed: g,
                chartVolumeGreen: h,
                chartOraclePrice: p,
                rangeColor: f,
                rangeColorA25: m,
                rangeColorOld: r.getPropertyValue('--chart-liq-range-old'),
                rangeColorA25Old: r.getPropertyValue('--chart-liq-range-a25-old'),
              }),
                K(a);
            }, [o, e, J, a]),
            (0, n.jsx)(F, {
              children: (0, n.jsxs)($, {
                children: [
                  (0, n.jsxs)(O, {
                    children: [
                      (0, n.jsx)(M, {
                        children:
                          void 0 !== u && void 0 !== g
                            ? (0, n.jsxs)(n.Fragment, {
                                children: [
                                  (0, n.jsx)(v, {
                                    isDisabled: !1,
                                    selectedChartIndex: u,
                                    selectChartList: w ?? [],
                                    setChartSelectedIndex: g,
                                  }),
                                  u > 1 &&
                                    void 0 !== m &&
                                    (0, n.jsx)(z, {
                                      onClick: () => m(),
                                      variant: 'icon-outlined',
                                      children: (0, n.jsx)(D, {
                                        name: 'ArrowsHorizontal',
                                        size: 16,
                                        'aria-label': 'Flip tokens',
                                      }),
                                    }),
                                ],
                              })
                            : (0, n.jsx)(v, {
                                isDisabled: !1,
                                selectedChartIndex: 0,
                                selectChartList: w ?? [],
                                setChartSelectedIndex: () => 0,
                              }),
                      }),
                      (0, n.jsx)(L, {
                        size: 'small',
                        variant: 'select',
                        onClick: () => {
                          x();
                        },
                        children: (0, n.jsx)(I.A, {
                          name: 'Renew',
                          size: 16,
                          'aria-label': 'Refresh chart',
                        }),
                      }),
                      (0, n.jsx)(P, {
                        size: 'small',
                        variant: 'select',
                        className: X ? 'active' : '',
                        onClick: () => U(!X),
                        children: (0, n.jsx)(I.A, {
                          name: 'Cursor_1',
                          size: 16,
                          'aria-label': 'Toggle magnet mode',
                        }),
                      }),
                      (0, n.jsx)(k, {
                        isDisabled: 'READY' !== r,
                        currentTimeOption: p,
                        setCurrentTimeOption: f,
                      }),
                    ],
                  }),
                  'crvusd' === e &&
                    H &&
                    G &&
                    W &&
                    (0, n.jsxs)(_, {
                      children: [
                        s &&
                          s?.length > 0 &&
                          (0, n.jsx)(B, {
                            fillColor: 'var(--chart-oracle-price-line)',
                            blank: !0,
                            isSelected: j,
                            onChange: () => H(),
                            children: 'Oracle Price',
                          }),
                        d?.new &&
                          G &&
                          (0, n.jsx)(B, {
                            fillColor: 'var(--chart-liq-range)',
                            blank: !0,
                            isSelected: S,
                            onChange: () => G(),
                            children: (0, n.jsx)(T, { children: 'Liquidation Range (New)' }),
                          }),
                        d?.current &&
                          (0, n.jsx)(B, {
                            fillColor: d.new
                              ? 'var(--chart-liq-range-old)'
                              : 'var(--chart-liq-range)',
                            blank: !0,
                            isSelected: A,
                            onChange: () => W(),
                            children: (0, n.jsx)(T, { children: 'Liquidation Range (Current)' }),
                          }),
                      ],
                    }),
                  'READY' === r &&
                    (0, n.jsx)(E, {
                      ref: Z,
                      chartExpanded: o,
                      chartHeight: t,
                      children: (0, n.jsx)(h, {
                        chartHeight: t,
                        ohlcData: Q,
                        volumeData: c,
                        oraclePriceData: s,
                        liquidationRange: d,
                        timeOption: p,
                        wrapperRef: Z,
                        chartExpanded: o,
                        magnet: X,
                        colors: ee,
                        refetchingCapped: y,
                        fetchMoreChartData: b,
                        lastFetchEndTime: C,
                        liqRangeCurrentVisible: A,
                        liqRangeNewVisible: S,
                        oraclePriceVisible: j,
                        latestOraclePrice: Y,
                      }),
                    }),
                  'LOADING' === r &&
                    (0, n.jsx)(N, {
                      minHeight: o ? t.expanded.toString() + 'px' : t.standard.toString() + 'px',
                      children: (0, n.jsx)(R.A, { size: 18 }),
                    }),
                  'ERROR' === r &&
                    (0, n.jsxs)(N, {
                      minHeight: o ? t.expanded.toString() + 'px' : t.standard.toString() + 'px',
                      children: [
                        (0, n.jsx)(q, {
                          children: `Unable to fetch ${w?.[u ?? 0]?.label ?? ''} data.`,
                        }),
                        (0, n.jsx)(L, {
                          size: 'small',
                          variant: 'text',
                          onClick: () => {
                            x();
                          },
                          children: (0, n.jsx)(I.A, {
                            name: 'Renew',
                            size: 16,
                            'aria-label': 'Refresh chart',
                          }),
                        }),
                      ],
                    }),
                ],
              }),
            })
          );
        };
    },
    86854: (e, r, t) => {
      t.d(r, { A: () => C });
      var n = t(54568),
        i = t(61773),
        o = t(48341),
        a = t(64387),
        l = t(35736),
        c = t(77241);
      let s = o.Ay.div.withConfig({ componentId: 'sc-e77517e5-0' })([
          'display:flex;flex-direction:column;gap:var(--spacing-2);text-align:left;z-index:2;',
        ]),
        d = o.Ay.h3.withConfig({ componentId: 'sc-e77517e5-1' })([
          'font-size:var(--font-size-3);font-weight:var(--semi-bold);text-align:left;',
        ]),
        u = o.Ay.p.withConfig({ componentId: 'sc-e77517e5-2' })([
          'text-align:left;font-weight:normal;',
        ]),
        h = o.Ay.p.withConfig({ componentId: 'sc-e77517e5-3' })([
          'text-align:left;font-weight:normal;font-size:var(--font-size-2);font-style:italic;',
        ]),
        g = ({ rewardsPool: e }) => {
          let {
              campaignName: r,
              platform: t,
              description: i,
              action: o,
              dashboardLink: g,
              campaignStart: p,
              campaignEnd: f,
            } = e,
            m = (0, c.Yq)(new Date(1e3 * +p)),
            x = (0, c.Yq)(new Date(1e3 * +f));
          return (0, n.jsxs)(s, {
            children: [
              r && t
                ? (0, n.jsxs)(a.A, {
                    flex: !0,
                    flexColumn: !0,
                    children: [
                      (0, n.jsx)(d, { children: r }),
                      (0, n.jsxs)(u, { children: ['by ', t] }),
                    ],
                  })
                : r
                  ? (0, n.jsx)(d, { children: r })
                  : (0, n.jsx)(d, { children: t }),
              p &&
                '0' !== p &&
                f &&
                '0' !== f &&
                (0, n.jsxs)(a.A, {
                  flex: !0,
                  flexColumn: !0,
                  children: [
                    (0, n.jsx)(u, { children: `from: ${m}` }),
                    (0, n.jsx)(u, { children: `to: ${x}` }),
                  ],
                }),
              (0, n.jsx)(u, {
                children:
                  'lp' === o
                    ? i
                    : 'supply' === o
                      ? 'Earn points by supplying liquidity.'
                      : 'Earn points by borrowing.',
              }),
              (0, n.jsx)(h, {
                children:
                  'External rewards are project dependent, always check with the token issuer to make sure you have taken all the necessary actions to benefit from their rewards program.',
              }),
              (0, n.jsx)(l.G, { $noStyles: !0, href: g, children: 'Go to issuer' }),
            ],
          });
        };
      var p = t(56457),
        f = t(50567);
      let m = o.Ay.div.withConfig({ componentId: 'sc-a3b97d0f-0' })(
          [
            'display:flex;flex-direction:row;align-items:center;gap:var(--spacing-1);padding:var(--spacing-1);border:',
            ';',
          ],
          ({ highContrast: e }) => (e ? '1px solid var(--white)' : '1px solid var(--gray-500a25)')
        ),
        x = (0, o.Ay)(i.default).withConfig({ componentId: 'sc-a3b97d0f-1' })([
          'border:1px solid transparent;border-radius:50%;',
        ]),
        b = o.Ay.p.withConfig({ componentId: 'sc-a3b97d0f-2' })(
          ['text-transform:uppercase;font-size:var(--font-size-3);color:', ';white-space:nowrap;'],
          ({ highContrast: e }) => (e ? 'var(--white)' : 'var(--page--text-color)')
        ),
        v = (0, o.Ay)(p.A).withConfig({ componentId: 'sc-a3b97d0f-3' })(
          ['color:', ';'],
          ({ $highContrast: e }) => (e ? 'var(--white)' : 'var(--page--text-color)')
        ),
        C = ({ rewardsPool: e, highContrast: r, mobile: t, banner: i }) => {
          let { platform: o, multiplier: a, platformImageSrc: l } = e;
          return (0, n.jsx)(f.Ay, {
            tooltip: (0, n.jsx)(g, { rewardsPool: e }),
            minWidth: '200px',
            placement: t ? 'top' : 'auto',
            increaseZIndex: i,
            children: (0, n.jsxs)(m, {
              highContrast: r,
              children: [
                (0, n.jsx)(x, { src: l, alt: o, width: 16, height: 16 }),
                !!a && (0, n.jsx)(b, { highContrast: r, children: `${a}` }),
                e.lock && (0, n.jsx)(v, { size: 16, name: 'Locked', $highContrast: r }),
              ],
            }),
          });
        };
    },
    95262: (e, r, t) => {
      t.d(r, { oX: () => n.o, D6: () => n.D, X6: () => i.X6, D$: () => i.D$ });
      var n = t(89425),
        i = t(53001);
    },
    95292: (e, r, t) => {
      t.d(r, { A: () => i });
      var n = t(7620);
      function i(e, r, t) {
        let i = (0, n.useRef)(null),
          o = (0, n.useRef)(e);
        (0, n.useEffect)(() => {
          o.current = e;
        }, [e]),
          (0, n.useEffect)(() => {
            if (null !== r && t) {
              let e = setInterval(function () {
                o.current();
              }, r);
              return (i.current = e), () => clearInterval(e);
            }
          }, [r, t]);
      }
    },
  },
]);
