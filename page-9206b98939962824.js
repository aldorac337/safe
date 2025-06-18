(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2711],
  {
    39276: (e, s, r) => {
      'use strict';
      r.d(s, { A: () => o });
      var t = r(54568),
        i = r(7620),
        a = r(46205),
        l = r(77241);
      let o = ({ isHighlight: e, rewardsApy: s }) =>
        s?.other && 0 !== s.other.length
          ? (0, t.jsx)('div', {
              children: s?.other?.map((s) =>
                t.jsxs(
                  i.Fragment,
                  {
                    children: [
                      t.jsxs(a.v, {
                        size: 'md',
                        isBold: e,
                        children: [l.ZV(s.apy, l.hd.PERCENT), ' ', s.symbol],
                      }),
                      t.jsx('br', {}),
                    ],
                  },
                  s.tokenAddress
                )
              ),
            })
          : null;
    },
    55928: (e, s, r) => {
      'use strict';
      r.d(s, { S: () => l });
      var t = r(54568),
        i = r(44876),
        a = r(3717);
      function l({ tokens: e, ...s }) {
        let r = e.length,
          l = r % 2 == 1,
          o = r > 4 ? 3 : 2,
          n = l ? 2 : 1;
        return (0, t.jsx)(i.A, {
          display: 'inline-grid',
          sx: {
            gridTemplateColumns: `repeat(${o}, auto)`,
            [`& > *:nth-of-type(${o}n-1)`]: { justifySelf: 'center' },
            [`& > *:nth-of-type(${o}n-1):nth-last-of-type(1)`]: { gridColumn: `span ${n}` },
          },
          children: e.map(({ address: e, symbol: i }, n) => {
            let d = n + 1,
              c = d > o,
              h = l && d !== r && r < 6 && c;
            return (0, t.jsx)(
              a.x,
              {
                ...s,
                address: e,
                tooltip: i,
                sx: {
                  ...(c && { marginTop: '-6px' }),
                  ...(n % o != 0 && { marginLeft: '-4px' }),
                  ...(h && { position: 'relative', left: '8px' }),
                },
              },
              `${e}${n}`
            );
          }),
        });
      }
    },
    62196: (e, s, r) => {
      'use strict';
      r.d(s, { A: () => n });
      var t = r(54568),
        i = r(48341),
        a = r(12819),
        l = r(94990);
      let o = (0, i.Ay)(a.A).withConfig({ componentId: 'sc-9d409d30-0' })(['min-height:3.375rem;']),
        n = function ({
          className: e = '',
          searchText: s,
          handleInputChange: r,
          handleClose: i,
          ...a
        }) {
          let { isFocusVisible: n, focusProps: d } = (0, l.o)();
          return (0, t.jsx)(o, {
            id: 'inp-search',
            ...a,
            ...d,
            className: `${e} ${n ? 'focus-visible' : ''}`,
            value: s,
            handleInputChange: r,
            handleSearchClose: i,
          });
        };
    },
    67520: (e, s, r) => {
      'use strict';
      r.d(s, { PagePoolList: () => eP });
      var t = r(54568),
        i = r(62942),
        a = r(7620),
        l = r(48341),
        o = r(49339),
        n = r(98330),
        d = r(90395),
        c = r(39276),
        h = r(70657),
        p = r(17416);
      let m = l.Ay.div.withConfig({ componentId: 'sc-7f397507-0' })(['line-height:1.2;']),
        x = ({
          isHighlightBase: e,
          isHighlightCrv: s,
          isHighlightOther: r,
          poolData: i,
          rewardsApy: a,
        }) => {
          let l = (0, p.l5)((e) => e.isMdUp),
            o = (0, p.l5)((e) => e.isXSmDown);
          return void 0 === a
            ? (0, t.jsx)(t.Fragment, { children: '-' })
            : (0, t.jsxs)('div', {
                children: [
                  !o && !l && (0, t.jsx)(d.A, { base: a?.base, isHighlight: e, poolData: i }),
                  (0, t.jsxs)(m, {
                    children: [
                      (0, t.jsx)(h.A, { isHighlight: s, poolData: i, rewardsApy: a }),
                      (0, t.jsx)(c.A, { isHighlight: r, rewardsApy: a }),
                    ],
                  }),
                ],
              });
        },
        g = ({ isHighlight: e, poolData: s, rewardsApy: r }) =>
          (0, t.jsx)(h.A, { poolData: s, rewardsApy: r, isHighlight: e });
      var u = r(46205),
        f = r(77241);
      let j = ({ isHighLight: e, tvlCached: s, tvl: r }) =>
          (0, t.jsx)(u.v, {
            isBold: e,
            size: 'md',
            tooltip: (0, f.ZV)(r?.value, f.hd.USD),
            tooltipProps: { placement: 'bottom end' },
            children: (0, f.ZV)(r?.value ?? s?.value, { currency: 'USD', notation: 'compact' }),
          }),
        w = ({ isHighLight: e, volumeCached: s, volume: r }) =>
          (0, t.jsx)(u.v, {
            isBold: e,
            size: 'md',
            tooltip: (0, f.ZV)(r?.value, f.hd.USD),
            tooltipProps: { placement: 'bottom end' },
            children: (0, f.ZV)(r?.value ?? s?.value, { currency: 'USD', notation: 'compact' }),
          });
      var A = r(51701),
        y = r(96025),
        v = r(64387),
        b = r(85709),
        C = r(36074);
      let k = ({ children: e, id: s, style: r, ...i }) => {
          let l = (0, a.useRef)(null),
            { isIntersecting: n } = (0, b.A)(l) ?? {},
            [d, c] = (0, a.useState)('88px');
          return (
            (0, a.useEffect)(() => {
              n && l.current && c(`${l.current.clientHeight}px`);
            }, [n]),
            (0, t.jsx)(o.Tr, {
              ref: l,
              id: s,
              style: { ...r, ...(!n && { height: d }) },
              ...i,
              children: n && e,
            })
          );
        },
        P = ({
          index: e,
          poolId: s,
          isCrvRewardsEnabled: r,
          formValues: i,
          isInPool: l,
          blockchainId: h,
          columnKeys: p,
          poolData: m,
          poolDataCachedOrApi: u,
          rewardsApy: f,
          searchParams: b,
          showInPoolColumn: P,
          campaignRewardsMapper: I,
          tvlCached: L,
          tvl: N,
          volumeCached: T,
          volume: R,
          handleCellClick: O,
        }) => {
          let { searchTextByTokensAndAddresses: M, searchTextByOther: S } = i,
            { searchText: $, sortBy: D } = b;
          return (0, t.jsx)(k, {
            id: `${s}-${e}`,
            className: 'row--info',
            onClick: ({ target: e }) => O(e),
            children: p.map((e, s) =>
              (0, t.jsxs)(
                a.Fragment,
                {
                  children: [
                    e === A.m.inPool &&
                      (0, t.jsx)(o.uC, {
                        isIn: l,
                        type: 'pool',
                        tooltip: (0, C.t)`You have a balance in this pool`,
                      }),
                    e === A.m.poolName &&
                      (0, t.jsx)(o.Td, {
                        $first: !P,
                        children: (0, t.jsx)(y.A, {
                          isVisible: !0,
                          blockchainId: h,
                          poolData: u,
                          poolListProps: {
                            searchText: $,
                            searchTextByTokensAndAddresses: M,
                            searchTextByOther: S,
                            onClick: O,
                          },
                        }),
                      }),
                    e === A.m.rewardsLite &&
                      (0, t.jsx)(o.Td, {
                        className: 'right',
                        children: (0, t.jsxs)(v.A, {
                          flex: !0,
                          flexColumn: !0,
                          style: { gap: 'var(--spacing-1)' },
                          children: [
                            f &&
                              (0, t.jsxs)(t.Fragment, {
                                children: [
                                  r &&
                                    (0, t.jsx)(g, {
                                      isHighlight: 'rewardsCrv' === D,
                                      poolData: m,
                                      rewardsApy: f,
                                    }),
                                  (0, t.jsx)(c.A, {
                                    isHighlight: 'rewardsOther' === D,
                                    rewardsApy: f,
                                  }),
                                ],
                              }),
                            m &&
                              I[m.pool.address] &&
                              (0, t.jsx)(n.A, { rewardItems: I[m.pool.address] }),
                          ],
                        }),
                      }),
                    e === A.m.rewardsDesktop &&
                      (0, t.jsxs)(t.Fragment, {
                        children: [
                          (0, t.jsx)(o.Td, {
                            className: 'right',
                            children: (0, t.jsx)(d.A, {
                              base: f?.base,
                              isHighlight: 'rewardsBase' === D,
                              poolData: m,
                            }),
                          }),
                          (0, t.jsx)(o.Td, {
                            className: 'right',
                            children: (0, t.jsxs)(v.A, {
                              flex: !0,
                              flexColumn: !0,
                              style: { gap: 'var(--spacing-1)' },
                              children: [
                                f &&
                                  (0, t.jsx)(g, {
                                    isHighlight: 'rewardsCrv' === D,
                                    poolData: m,
                                    rewardsApy: f,
                                  }),
                                f &&
                                  (0, t.jsx)(c.A, {
                                    isHighlight: 'rewardsOther' === D,
                                    rewardsApy: f,
                                  }),
                                m &&
                                  I[m.pool.address] &&
                                  (0, t.jsx)(n.A, { rewardItems: I[m.pool.address] }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    e === A.m.rewardsMobile &&
                      (0, t.jsx)(o.Td, {
                        className: 'right',
                        children: (0, t.jsxs)(v.A, {
                          flex: !0,
                          flexColumn: !0,
                          style: { gap: 'var(--spacing-1)' },
                          children: [
                            (0, t.jsx)(x, {
                              poolData: m,
                              isHighlightBase: 'rewardsBase' === D,
                              isHighlightCrv: 'rewardsCrv' === D,
                              isHighlightOther: 'rewardsOther' === D,
                              rewardsApy: f,
                            }),
                            m &&
                              I[m.pool.address] &&
                              (0, t.jsx)(n.A, { rewardItems: I[m.pool.address] }),
                          ],
                        }),
                      }),
                    e === A.m.volume &&
                      (0, t.jsx)(o.Td, {
                        className: 'right',
                        children: (0, t.jsx)(w, {
                          isHighLight: 'volume' === D,
                          volumeCached: T,
                          volume: R,
                        }),
                      }),
                    e === A.m.tvl &&
                      (0, t.jsx)(o.Td, {
                        className: 'right',
                        $last: !0,
                        children: (0, t.jsx)(j, { isHighLight: 'tvl' === D, tvlCached: L, tvl: N }),
                      }),
                  ],
                },
                `tRow${e}${s}`
              )
            ),
          });
        };
      var I = r(47990),
        L = r(56457),
        N = r(84561),
        T = r(24633);
      let R = l.Ay.div.withConfig({ componentId: 'sc-fd906268-0' })([
          'display:flex;justify-content:space-between;padding:4px;padding-left:var(--spacing-narrow);width:100%;',
        ]),
        O = l.Ay.div.withConfig({ componentId: 'sc-fd906268-1' })(
          ['display:grid;min-height:150px;padding:', ';'],
          ({ themeType: e }) => ('chad' === e ? '1rem 0.75rem 0.75rem' : '1rem 1rem 0.75rem 1rem')
        ),
        M = l.Ay.div.withConfig({ componentId: 'sc-fd906268-2' })([
          'margin:0.3rem 0;> button:not(:last-of-type){border-right:1px solid rgba(255,255,255,0.25);}',
        ]),
        S = l.Ay.div.withConfig({ componentId: 'sc-fd906268-3' })([
          'max-height:0;overflow:hidden;transition:max-height 0.5s cubic-bezier(0,1,0,1);&.show{max-height:100rem;transition:max-height 1s ease-in-out;}',
        ]),
        $ = ({
          index: e,
          columnKeys: s,
          formValues: r,
          isInPool: i,
          blockchainId: l,
          poolData: h,
          poolDataCachedOrApi: p,
          poolId: m,
          rewardsApy: u,
          searchParams: b,
          showDetail: P,
          tableLabel: $,
          themeType: D,
          tvlCached: B,
          tvl: F,
          volumeCached: H,
          volume: z,
          handleCellClick: E,
          setShowDetail: V,
          campaignRewardsMapper: K,
        }) => {
          let { searchTextByTokensAndAddresses: U, searchTextByOther: W } = r,
            { searchText: Y, sortBy: _ } = b,
            Z = P === m,
            G = (0, a.useMemo)(() => {
              if (_ && !P) {
                if ('rewardsBase' === _)
                  return (0, t.jsx)(d.A, {
                    base: u?.base,
                    isHighlight: 'rewardsBase' === _,
                    poolData: h,
                  });
                if ('rewardsCrv' === _)
                  return (0, t.jsx)(g, {
                    poolData: h,
                    isHighlight: 'rewardsCrv' === _,
                    rewardsApy: u,
                  });
                if ('rewardsOther' === _)
                  return (0, t.jsx)(c.A, { isHighlight: 'rewardsOther' === _, rewardsApy: u });
                else if ('volume' === _)
                  return (0, f.ZV)(z?.value, { notation: 'compact', currency: 'USD' });
                else if ('tvl' === _)
                  return (0, f.ZV)(F?.value, { notation: 'compact', currency: 'USD' });
              }
            }, [P, _]);
          return (0, t.jsx)(k, {
            id: `${e}`,
            className: 'row--info',
            children: (0, t.jsxs)('td', {
              children: [
                (0, t.jsxs)(v.A, {
                  grid: !0,
                  gridTemplateColumns: i ? 'auto 1fr' : '1fr',
                  children: [
                    (0, t.jsx)(o.uC, {
                      as: 'div',
                      isMobile: !0,
                      isIn: i,
                      type: 'pool',
                      tooltip: i ? (0, C.t)`You have a balance in this pool` : '',
                    }),
                    (0, t.jsxs)(R, {
                      children: [
                        (0, t.jsx)(y.A, {
                          isVisible: !0,
                          blockchainId: l,
                          poolData: p,
                          poolListProps: {
                            quickViewValue: G,
                            searchText: Y,
                            searchTextByTokensAndAddresses: U,
                            searchTextByOther: W,
                            onClick: E,
                          },
                        }),
                        (0, t.jsx)(N.A, {
                          onClick: () => V((e) => (e === m ? '' : m)),
                          children: Z
                            ? (0, t.jsx)(L.A, { name: 'ChevronUp', size: 16 })
                            : (0, t.jsx)(L.A, { name: 'ChevronDown', size: 16 }),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, t.jsx)(S, {
                  className: Z ? 'show' : '',
                  children: (0, t.jsx)(O, {
                    themeType: D,
                    children:
                      Z &&
                      (0, t.jsxs)(t.Fragment, {
                        children: [
                          (0, t.jsxs)(T.db, {
                            children: [
                              -1 !== s.indexOf(A.m.volume) &&
                                (0, t.jsx)(T.Ay, {
                                  title: $.volume.name,
                                  children: (0, t.jsx)(w, {
                                    isHighLight: 'volume' === _,
                                    volumeCached: H,
                                    volume: z,
                                  }),
                                }),
                              (0, t.jsx)(T.Ay, {
                                title: $.tvl.name,
                                children: (0, t.jsx)(j, {
                                  isHighLight: 'tvl' === _,
                                  tvlCached: B,
                                  tvl: F,
                                }),
                              }),
                              (0, t.jsx)(T.Ay, {
                                title: (0, C.t)`BASE vAPY`,
                                titleNoCap: !0,
                                children: (0, t.jsx)(d.A, {
                                  base: u?.base,
                                  isHighlight: 'rewardsBase' === _,
                                  poolData: h,
                                }),
                              }),
                              !h?.gauge.isKilled &&
                                (0, t.jsxs)(t.Fragment, {
                                  children: [
                                    -1 !== s.indexOf(A.m.rewardsLite)
                                      ? (0, t.jsx)(T.Ay, {
                                          title: (0, C.t)`REWARDS tAPR`,
                                          titleNoCap: !0,
                                          tooltip: (0,
                                          C.t)`Token APR based on current prices of tokens and reward rates`,
                                          children: (0, t.jsx)(c.A, {
                                            isHighlight: 'rewardsOther' === _,
                                            rewardsApy: u,
                                          }),
                                        })
                                      : (0, t.jsx)(T.Ay, {
                                          title: (0, C.t)`REWARDS tAPR`,
                                          titleNoCap: !0,
                                          titleDescription: `(${$.rewardsCrv.name} + ${$.rewardsOther.name})`,
                                          tooltip: (0,
                                          C.t)`Token APR based on current prices of tokens and reward rates`,
                                          children: (0, t.jsx)(x, {
                                            poolData: h,
                                            isHighlightBase: 'rewardsBase' === _,
                                            isHighlightCrv: 'rewardsCrv' === _,
                                            isHighlightOther: 'rewardsOther' === _,
                                            rewardsApy: u,
                                          }),
                                        }),
                                    h &&
                                      K[h.pool.address] &&
                                      (0, t.jsx)(T.Ay, {
                                        title: (0, C.t)`Additional external rewards`,
                                        children: (0, t.jsx)(n.A, {
                                          rewardItems: K[h.pool.address],
                                          mobile: !0,
                                        }),
                                      }),
                                  ],
                                }),
                            ],
                          }),
                          (0, t.jsxs)(M, {
                            children: [
                              (0, t.jsx)(I.A, {
                                variant: 'filled',
                                onClick: ({ target: e }) => E(e),
                                children: (0, C.t)`Deposit`,
                              }),
                              (0, t.jsx)(I.A, {
                                variant: 'filled',
                                onClick: ({ target: e }) => E(e, 'withdraw'),
                                children: (0, C.t)`Withdraw`,
                              }),
                              (0, t.jsx)(I.A, {
                                variant: 'filled',
                                onClick: ({ target: e }) => E(e, 'swap'),
                                children: (0, C.t)`Swap`,
                              }),
                            ],
                          }),
                        ],
                      }),
                  }),
                }),
              ],
            }),
          });
        };
      var D = r(55906),
        B = r(11988),
        F = r(54210),
        H = r(78866),
        z = r(28822),
        E = r(31305),
        V = r(75911);
      let K = {
          swap: D.a$.PAGE_SWAP,
          withdraw: D.a$.PAGE_POOL_WITHDRAW,
          deposit: D.a$.PAGE_POOL_DEPOSIT,
        },
        U = ({
          poolId: e,
          index: s,
          isCrvRewardsEnabled: r,
          rChainId: l,
          columnKeys: n,
          searchParams: d,
          showInPoolColumn: c,
          tableLabels: h,
          searchTermMapper: m,
          showDetail: x,
          setShowDetail: g,
          curve: u,
        }) => {
          let { push: f } = (0, i.useRouter)(),
            j = (0, H.jv)(u),
            w = (0, z.A)((e) => e.poolList.formValues),
            A = (0, p.l5)((e) => e.isXSmDown),
            y = (0, z.A)((s) => s.storeCache.poolsMapper[l]?.[e]),
            v = (0, z.A)((s) => s.pools.poolsMapper[l]?.[e]),
            b = (0, z.A)((s) => s.pools.rewardsApyMapper[l]?.[e]),
            C = (0, z.A)((s) => s.poolList.searchedByAddresses[e]),
            k = (0, z.A)((s) => s.storeCache.tvlMapper[l]?.[e]),
            I = (0, z.A)((s) => s.pools.tvlMapper[l]?.[e]),
            L = (0, z.A)((s) => s.user.poolList[j]?.[e]),
            N = (0, z.A)((s) => s.storeCache.volumeMapper[l]?.[e]),
            T = (0, z.A)((s) => s.pools.volumeMapper[l]?.[e]),
            R = (0, z.A)((e) => e.networks.networks[l]),
            O = (0, B.A)(),
            M = (0, V.nv)((e) => e.theme),
            S = v ?? y,
            U = (0, a.useMemo)(() => (0, F.ln)(C, m, S), [S, m, C]),
            W = (0, a.useCallback)(
              (s, r) => {
                let { nodeName: t } = s;
                'A' !== t &&
                  f((0, E.Yn)({ network: R.id }, `${D.a$.PAGE_POOLS}/${e}${K[r ?? 'deposit']}`));
              },
              [f, R.id, e]
            ),
            Y = {
              index: s,
              isCrvRewardsEnabled: r,
              formValues: w,
              searchParams: d,
              isInPool: L,
              blockchainId: R.networkId,
              poolId: e,
              columnKeys: n,
              poolData: v,
              poolDataCachedOrApi: S,
              rewardsApy: b,
              showInPoolColumn: c,
              tvlCached: k,
              tvl: I,
              volumeCached: N,
              volume: T,
              handleCellClick: W,
              campaignRewardsMapper: O,
            };
          return (0, t.jsxs)(t.Fragment, {
            children: [
              A
                ? (0, t.jsx)($, {
                    tableLabel: h,
                    showDetail: x,
                    themeType: M,
                    setShowDetail: g,
                    ...Y,
                  })
                : (0, t.jsx)(P, { ...Y }),
              C &&
                Object.keys(C).length > 0 &&
                (0, t.jsx)(o.c1, {
                  colSpan: 10,
                  id: e,
                  isMobile: A,
                  result: C,
                  searchTermMapper: U,
                  scanAddressPath: R.scanAddressPath,
                }),
            ],
          });
        };
      var W = r(45182),
        Y = r(19115);
      let _ = ({ isReadyRewardsApy: e, tableLabels: s, ...r }) =>
        (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsxs)('div', {
              children: [
                (0, C.t)`Rewards tAPR`,
                ' ',
                (0, t.jsx)(Y.A, {
                  placement: 'top',
                  children: (0, C.t)`Token APR based on current prices of tokens and reward rates`,
                }),
              ],
            }),
            (0, t.jsxs)(v.A, {
              grid: !0,
              gridAutoFlow: 'column',
              flexAlignItems: 'center',
              gridColumnGap: 1,
              flexJustifyContent: 'flex-end',
              children: [
                (0, t.jsx)(W.A, {
                  sortIdKey: 'rewardsCrv',
                  nowrap: !0,
                  ...r,
                  loading: !e,
                  children: s.rewardsCrv.name,
                }),
                '+',
                (0, t.jsx)(W.A, {
                  sortIdKey: 'rewardsOther',
                  nowrap: !0,
                  ...r,
                  loading: !e,
                  children: s.rewardsOther.name,
                }),
              ],
            }),
          ],
        });
      var Z = r(39651);
      let G = l.Ay.col.withConfig({ componentId: 'sc-ffc2c4ea-0' })(
          [
            '@media (min-width:',
            'rem){min-width:200px;&.pool{min-width:400px;}&.base{min-width:100px;}&.rewards{min-width:300px;}&.tvl{min-width:150px;}}',
          ],
          Z.fi.lg
        ),
        J = l.Ay.col.withConfig({ componentId: 'sc-ffc2c4ea-1' })(['width:21px;']),
        X = (0, l.Ay)(o.d8).withConfig({ componentId: 'sc-ffc2c4ea-2' })([
          'font-size:var(--font-size-2);',
        ]),
        q = (0, l.Ay)(o.rl).withConfig({ componentId: 'sc-ffc2c4ea-3' })([
          'width:100%;height:100%;',
        ]),
        Q = ({
          isLite: e,
          isReadyRewardsApy: s,
          isReadyTvl: r,
          isReadyVolume: i,
          columnKeys: l,
          searchParams: n,
          tableLabels: d,
          updatePath: c,
        }) => {
          let h = (0, a.useCallback)(
              (e, s) => {
                c({ sortBy: e, sortByOrder: s });
              },
              [c]
            ),
            p = { sortBy: n.sortBy, sortByOrder: n.sortByOrder, handleBtnClickSort: h },
            m = (0, C.t)`Token APR based on current prices of tokens and reward rates`,
            x = (0, C.t)`Variable APY based on today's trading activity`;
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)('colgroup', {
                children: l.map((s, r) =>
                  (0, t.jsxs)(
                    a.Fragment,
                    {
                      children: [
                        s === A.m.inPool && (0, t.jsx)(J, { className: 'row-in-pool' }),
                        s === A.m.poolName && (0, t.jsx)(G, { className: 'left pool' }),
                        s === A.m.rewardsLite && (0, t.jsx)(G, { className: 'right' }),
                        s === A.m.rewardsDesktop &&
                          (0, t.jsxs)(t.Fragment, {
                            children: [
                              (0, t.jsx)(G, { className: 'right base' }),
                              (0, t.jsx)(G, { className: 'right rewards' }),
                            ],
                          }),
                        s === A.m.rewardsMobile && (0, t.jsx)(G, { className: 'right rewards' }),
                        s === A.m.volume && (0, t.jsx)('col', { className: 'right' }),
                        s === A.m.tvl && e && (0, t.jsx)(G, { className: 'right tvl' }),
                        s === A.m.tvl && !e && (0, t.jsx)('col', { className: 'right' }),
                      ],
                    },
                    `col${s}${r}`
                  )
                ),
              }),
              (0, t.jsx)(X, {
                children: (0, t.jsx)('tr', {
                  children: l.map((e, l) =>
                    (0, t.jsxs)(
                      a.Fragment,
                      {
                        children: [
                          e === A.m.inPool &&
                            (0, t.jsx)('th', { className: 'in-pool', children: ' ' }, e),
                          e === A.m.poolName &&
                            (0, t.jsx)(
                              o.Th,
                              {
                                $first: 0 === l,
                                children: (0, t.jsx)(q, {
                                  className: 'left',
                                  sortIdKey: 'name',
                                  ...p,
                                  loading: !1,
                                  indicatorPlacement: 'right',
                                  children: d.name.name,
                                }),
                              },
                              e
                            ),
                          e === A.m.rewardsLite &&
                            (0, t.jsx)(o.Th, {
                              className: 'right',
                              children: (0, t.jsxs)(o.rl, {
                                className: 'right',
                                sortIdKey: 'rewardsLite',
                                nowrap: !0,
                                ...p,
                                loading: !s,
                                children: [
                                  d.rewardsLite.name,
                                  ' tAPR',
                                  (0, t.jsx)(Y.A, { placement: 'top', children: m }),
                                ],
                              }),
                            }),
                          e === A.m.rewardsDesktop &&
                            (0, t.jsxs)(t.Fragment, {
                              children: [
                                (0, t.jsx)(o.Th, {
                                  children: (0, t.jsxs)(q, {
                                    className: 'right',
                                    sortIdKey: 'rewardsBase',
                                    ...p,
                                    loading: !s,
                                    children: [
                                      d.rewardsBase.name,
                                      (0, t.jsx)(Y.A, { placement: 'top', children: x }),
                                    ],
                                  }),
                                }),
                                (0, t.jsx)(o.Th, {
                                  className: 'right',
                                  children: (0, t.jsx)(v.A, {
                                    grid: !0,
                                    gridRowGap: 1,
                                    children: (0, t.jsx)(_, {
                                      isReadyRewardsApy: s,
                                      tableLabels: d,
                                      ...p,
                                    }),
                                  }),
                                }),
                              ],
                            }),
                          e === A.m.rewardsMobile &&
                            (0, t.jsx)(o.Th, {
                              className: 'right',
                              children: (0, t.jsxs)(v.A, {
                                grid: !0,
                                gridRowGap: 2,
                                flexJustifyContent: 'flex-end',
                                children: [
                                  (0, t.jsxs)(o.rl, {
                                    sortIdKey: 'rewardsBase',
                                    ...p,
                                    loading: !s,
                                    children: [
                                      d.rewardsBase.name,
                                      (0, t.jsx)(Y.A, { placement: 'top', children: x }),
                                    ],
                                  }),
                                  (0, t.jsx)(v.A, {
                                    flex: !0,
                                    flexJustifyContent: 'flex-end',
                                    children: (0, t.jsx)(_, {
                                      isReadyRewardsApy: s,
                                      tableLabels: d,
                                      ...p,
                                    }),
                                  }),
                                ],
                              }),
                            }),
                          e === A.m.volume &&
                            (0, t.jsx)(o.Th, {
                              children: (0, t.jsx)(q, {
                                className: 'right',
                                sortIdKey: 'volume',
                                ...p,
                                loading: !i,
                                children: d.volume.name,
                              }),
                            }),
                          e === A.m.tvl &&
                            (0, t.jsx)(o.Th, {
                              $last: !0,
                              children: (0, t.jsx)(q, {
                                className: 'right',
                                sortIdKey: 'tvl',
                                ...p,
                                loading: !r,
                                indicatorPlacement: 'left',
                                children: d.tvl.name,
                              }),
                            }),
                        ],
                      },
                      `thead${e}${l}`
                    )
                  ),
                }),
              }),
            ],
          });
        },
        ee = ({ showInPoolColumn: e }) =>
          (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsxs)('colgroup', {
                children: [e && (0, t.jsx)(er, {}), (0, t.jsx)(es, { className: 'left pool' })],
              }),
              (0, t.jsx)('thead', {
                children: (0, t.jsx)(o.Tr, {
                  children: (0, t.jsx)(o.Th, {
                    $first: !0,
                    className: 'left',
                    children: (0, C.t)`Pools`,
                  }),
                }),
              }),
            ],
          });
      ee.displayName = 'TableHeadMobile';
      let es = l.Ay.col.withConfig({ componentId: 'sc-3c6e0c19-0' })(
          ['@media (min-width:', 'rem){&.pool{min-width:400px;}&.rewards{min-width:310px;}}'],
          Z.fi.lg
        ),
        er = l.Ay.col.withConfig({ componentId: 'sc-3c6e0c19-1' })(['width:25px;']);
      var et = r(59339),
        ei = r(77540),
        ea = (function (e) {
          return (e.api = 'api'), (e.search = 'search'), (e.filter = 'filter'), e;
        })(ea || {});
      let el = l.Ay.div.withConfig({ componentId: 'sc-b1afab0e-0' })([
          'padding:var(--spacing-5);text-align:center;',
        ]),
        eo = ({ colSpan: e, searchParams: s, signerAddress: r, updatePath: i }) => {
          let { filterKey: l, searchText: n } = s,
            d = (0, z.A)((e) => e.user.poolListLoaded),
            c = (0, z.A)((e) => e.user.poolListError),
            h = (0, a.useMemo)(
              () => (n ? 'search' : l ? 'filter' : d && c ? 'api' : void 0),
              [l, n, c, d]
            ),
            p = (0, a.useMemo)(
              () =>
                'search' === h
                  ? { searchText: '' }
                  : 'filter' === h
                    ? { filterKey: 'all' }
                    : void 0,
              [h]
            ),
            m = (0, a.useMemo)(
              () =>
                'search' === h ? n : 'filter' === h ? ('user' === l && r ? (0, f.z5)(r) : l) : '',
              [l, h, n, r]
            );
          return (0, t.jsx)(o.Tr, {
            children: (0, t.jsx)(o.Td, {
              colSpan: e,
              children: (0, t.jsx)(el, {
                children:
                  'api' === h
                    ? (0, t.jsx)(v.A, {
                        flex: !0,
                        flexJustifyContent: 'center',
                        children: (0, t.jsx)(ei.A, {
                          alertType: 'error',
                          children: 'Unable to retrieve pool list. Please try again later.',
                        }),
                      })
                    : 'search' === h || 'filter' === h
                      ? (0, t.jsx)(t.Fragment, {
                          children:
                            'all' === l
                              ? (0, t.jsx)(C.x, { children: 'No pool found' })
                              : (0, t.jsxs)(C.x, {
                                  children: [
                                    'No pool found for “',
                                    m,
                                    '”.',
                                    p &&
                                      (0, t.jsxs)(t.Fragment, {
                                        children: [
                                          (0, t.jsx)('br', {}),
                                          ' ',
                                          (0, t.jsx)(I.A, {
                                            variant: 'text',
                                            onClick: () => i(p),
                                            children: 'View all',
                                          }),
                                        ],
                                      }),
                                  ],
                                }),
                        })
                      : (0, t.jsxs)(C.x, {
                          children: [
                            "Can't find what you're looking for?",
                            ' ',
                            (0, t.jsx)(et.A, {
                              $noStyles: !0,
                              href: 'https://t.me/curvefi',
                              children: 'Feel free to ask us on Telegram',
                            }),
                          ],
                        }),
              }),
            }),
          });
        };
      var en = r(23368),
        ed = r(37862),
        ec = r(38526);
      let eh = ({ poolDatasCachedOrApi: e }) => {
        let s = e.length < 10,
          r = (0, V.nv)((e) => e.hideSmallPools),
          i = (0, V.nv)((e) => e.setHideSmallPools);
        return (0, t.jsx)(ec.A, {
          isDisabled: s,
          isSelected: !s && r,
          onChange: (e) => i(e),
          children: (0, C.t)`Hide very small pools`,
        });
      };
      var ep = r(62196),
        em = r(33523),
        ex = r(14026);
      let eg = l.Ay.div.withConfig({ componentId: 'sc-cc49e222-0' })(
          [
            'display:flex;flex-direction:column;grid-gap:var(--spacing-narrow);padding:var(--spacing-narrow);padding-top:var(--spacing-normal);@media (min-width:',
            'rem){padding:var(--spacing-normal);padding-bottom:var(--spacing-narrow);}',
          ],
          f.fi.sm
        ),
        eu = (0, l.Ay)(v.A).withConfig({ componentId: 'sc-cc49e222-1' })(
          [
            'align-items:flex-start;display:flex;flex-wrap:wrap;grid-gap:var(--spacing-narrow);@media (min-width:',
            'rem){display:grid;grid-template-columns:auto 1fr auto;}@media (min-width:',
            'rem){grid-template-columns:',
            ';}',
          ],
          f.fi.sm,
          f.fi.lg,
          ({ $isLite: e }) => (e ? 'auto 1fr auto' : '1fr auto auto')
        ),
        ef = ({
          isReady: e,
          activeKey: s,
          rChainId: r,
          isLite: i,
          poolDatasCachedOrApi: l,
          result: o,
          signerAddress: n,
          searchParams: d,
          tableLabels: c,
          updatePath: h,
        }) => {
          let m = (0, z.A)((e) => e.poolList.formStatus[s]),
            x = (0, p.l5)((e) => e.isLgUp),
            { poolFilters: g } = (0, z.A)((e) => e.networks.networks[r]),
            u = (0, a.useMemo)(
              () => [
                { key: 'all', label: (0, C.t)`All` },
                { key: 'usd', label: 'USD' },
                { key: 'btc', label: 'BTC' },
                { key: 'kava', label: 'KAVA' },
                { key: 'eth', label: 'ETH' },
                { key: 'crvusd', label: (0, C.t)`crvUSD` },
                { key: 'tricrypto', label: (0, C.t)`Tricrypto` },
                { key: 'crypto', label: (0, C.t)`Crypto` },
                { key: 'stableng', label: (0, C.t)`Stable NG` },
                { key: 'cross-chain', label: (0, C.t)`Cross-chain` },
                { key: 'user', label: (0, C.t)`My Pools` },
              ],
              []
            ),
            f = (0, a.useMemo)(() => {
              let e = u.filter((e) => -1 !== g.indexOf(e.key));
              if ((n || (e = e.filter((e) => 'user' !== e.key)), Array.isArray(e))) {
                let s = {};
                for (let { key: r, label: t } of e) s[r] = { id: r, displayName: t };
                return s;
              }
            }, [u, n, g]);
          return (0, t.jsxs)(eg, {
            children: [
              (0, t.jsx)('div', {
                children: (0, t.jsx)(ep.A, {
                  placeholder: (0, C.t)`Search by tokens or address`,
                  searchText: d.searchText,
                  handleInputChange: (e) => h({ searchText: e }),
                  handleClose: () => h({ searchText: '' }),
                  testId: 'search-pools',
                }),
              }),
              (0, t.jsx)(eu, {
                $isLite: i,
                children:
                  x && !i
                    ? (0, t.jsxs)(t.Fragment, {
                        children: [
                          (0, t.jsx)(em.A, {
                            disabled: !1,
                            filters: f,
                            filterKey: d.filterKey,
                            isLoading: !e || m?.isLoading,
                            resultsLength: o?.length,
                            updateRouteFilterKey: (e) => h({ filterKey: e }),
                          }),
                          (0, t.jsxs)(v.A, {
                            flex: !0,
                            gridGap: 2,
                            children: [
                              (0, t.jsx)(en.A, { searchParams: d, labelsMapper: c, updatePath: h }),
                              (0, t.jsx)(eh, { poolDatasCachedOrApi: l }),
                            ],
                          }),
                        ],
                      })
                    : (0, t.jsxs)(t.Fragment, {
                        children: [
                          (0, t.jsx)(ex.A, {
                            filters: f,
                            filterKey: d.filterKey,
                            updateRouteFilterKey: (e) => h({ filterKey: e }),
                          }),
                          (0, t.jsx)(ed.A, { searchParams: d, labelsMapper: c, updatePath: h }),
                          (0, t.jsx)(eh, { poolDatasCachedOrApi: l }),
                        ],
                      }),
              }),
            ],
          });
        };
      var ej = r(51569),
        ew = r(99599),
        eA = r(95292),
        ey = r(95262);
      let ev = ({
        rChainId: e,
        curve: s,
        isLite: r,
        searchParams: i,
        searchTermMapper: l,
        tableLabels: n,
        updatePath: d,
      }) => {
        let c = (0, B.A)(),
          h = (0, ej.uZ)(e, i),
          m = (0, z.A)((e) => e.poolList.activeKey),
          x = (0, z.A)((e) => e.poolList.formStatus[h] ?? ej.kR),
          g = (0, p.l5)((e) => e.isMdUp),
          u = (0, p.l5)((e) => e.isXSmDown),
          f = (0, p.l5)((e) => e.isPageVisible),
          j = (0, z.A)((s) => s.storeCache.poolsMapper[e]),
          w = (0, z.A)((s) => s.pools.poolsMapper[e]),
          y = (0, z.A)((e) => e.poolList.result),
          v = (0, z.A)((s) => s.pools.rewardsApyMapper[e]),
          b = (0, z.A)((e) => e.poolList.showHideSmallPools),
          C = (0, z.A)((s) => s.storeCache.tvlMapper[e]),
          k = (0, z.A)((s) => s.pools.tvlMapper[e]),
          P = (0, H.jv)(s),
          I = (0, z.A)((e) => e.user.poolList[P]),
          L = (0, z.A)((s) => s.storeCache.volumeMapper[e]),
          N = (0, z.A)((s) => s.pools.volumeMapper[e]),
          T = (0, z.A)((e) => e.pools.fetchPoolsRewardsApy),
          R = (0, z.A)((e) => e.poolList.setFormValues),
          { initCampaignRewards: O, initiated: M } = (0, z.A)((e) => e.campaigns),
          S = (0, V.nv)((e) => e.hideSmallPools),
          $ = (0, z.A)((s) => s.networks.networks[e]?.isCrvRewardsEnabled),
          [D, F] = (0, a.useState)(''),
          E = (0, a.useMemo)(
            () => ((y[h] ?? h.split('-')[0] === m.split('-')[0]) ? y[m] : void 0),
            [h, m, y]
          ),
          { chainId: K, signerAddress: W = '' } = s ?? {},
          Y = !!W,
          _ = (0, a.useMemo)(() => Object.values(w ?? {}), [w]),
          Z = (0, a.useMemo)(() => Object.values(j ?? {}), [j]),
          G = (0, a.useMemo)(() => {
            let e = void 0 !== N && Object.keys(N).length >= 0,
              s = N || L || {},
              t = e || Object.keys(s).length > 0,
              i = void 0 !== k && Object.keys(k).length >= 0,
              a = k || C || {},
              l = i || Object.keys(a).length > 0;
            return r ? l : t && l;
          }, [r, k, C, N, L]),
          J = (0, a.useMemo)(() => {
            let e = void 0 !== N && Object.keys(N).length >= 0,
              s = void 0 !== k && Object.keys(k).length >= 0;
            return r ? s : e && s;
          }, [r, k, N]),
          X = (0, a.useMemo)(() => {
            let e = [];
            return (Y && e.push(A.m.inPool), e.push(A.m.poolName), r)
              ? e.concat([A.m.rewardsLite, A.m.tvl])
              : (g ? e.push(A.m.rewardsDesktop) : e.push(A.m.rewardsMobile),
                e.concat([A.m.volume, A.m.tvl]));
          }, [r, g, Y]),
          q = (0, a.useCallback)(
            (s) => {
              R(
                e,
                r,
                s,
                S,
                void 0 !== w ? _ : void 0,
                Z,
                v ?? {},
                N ?? {},
                L ?? {},
                k ?? {},
                C ?? {},
                I ?? {},
                c
              );
            },
            [R, e, r, S, w, _, Z, v, N, L, k, C, I, c]
          );
        (0, eA.A)(
          (0, a.useCallback)(() => {
            s && v && Object.keys(v).length > 0 && T(e, _);
          }, [s, T, _, e, v]),
          ey.oX['11m'],
          f
        ),
          (0, a.useEffect)(() => {
            (G || J) && i && q(i);
          }, [G, J, K, W, i, S]),
          (0, a.useEffect)(() => {
            M || O(e);
          }, [O, e, M]);
        let es = g ? 7 : 4;
        return (
          b && es++,
          (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)(ef, {
                isReady: G,
                activeKey: h,
                rChainId: e,
                isLite: r,
                poolDatasCachedOrApi: _ ?? Z,
                result: E,
                signerAddress: W,
                searchParams: i,
                tableLabels: n,
                updatePath: d,
              }),
              (0, t.jsxs)(o.Ay, {
                cellPadding: 0,
                cellSpacing: 0,
                children: [
                  u
                    ? (0, t.jsx)(ee, { showInPoolColumn: Y })
                    : (0, t.jsx)(Q, {
                        columnKeys: X,
                        isLite: r,
                        isReadyRewardsApy: !!v,
                        isReadyTvl: !!k,
                        isReadyVolume: !!N,
                        searchParams: i,
                        tableLabels: n,
                        updatePath: d,
                      }),
                  (0, t.jsx)(o.NN, {
                    $borderBottom: !0,
                    children:
                      J && x.noResult
                        ? (0, t.jsx)(eo, {
                            colSpan: es,
                            searchParams: i,
                            signerAddress: W,
                            updatePath: d,
                          })
                        : G && Array.isArray(E)
                          ? (0, t.jsx)(t.Fragment, {
                              children: E.map((r, a) =>
                                (0, t.jsx)(
                                  U,
                                  {
                                    index: a,
                                    columnKeys: X,
                                    isCrvRewardsEnabled: $,
                                    poolId: r,
                                    rChainId: e,
                                    searchParams: i,
                                    showInPoolColumn: Y,
                                    tableLabels: n,
                                    searchTermMapper: l,
                                    showDetail: D,
                                    setShowDetail: F,
                                    curve: s,
                                  },
                                  r
                                )
                              ),
                            })
                          : (0, t.jsx)('tr', {
                              children: (0, t.jsx)('td', {
                                colSpan: es,
                                children: (0, t.jsx)(ew.V, { children: (0, t.jsx)(ew.A, {}) }),
                              }),
                            }),
                  }),
                ],
              }),
            ],
          })
        );
      };
      var eb = r(88935),
        eC = r(88411),
        ek = (function (e) {
          return (
            (e.filter = 'filter'),
            (e.sortBy = 'sortBy'),
            (e.order = 'order'),
            (e.search = 'search'),
            e
          );
        })(ek || {});
      let eP = (e) => {
          let { push: s } = (0, i.useRouter)(),
            r = (0, i.useSearchParams)(),
            { lib: l = null } = (0, eC.w5)(),
            o = (0, F.Ay)(),
            [n, d] = (0, a.useState)(null),
            c = (0, E.iW)(e.network),
            h = (0, z.A)((e) => e.pools.poolsMapper[c]),
            p = (0, z.A)((e) => e.storeCache.poolsMapper[c]),
            { isLite: m, poolFilters: x } = (0, z.A)((e) => e.networks.networks[c]),
            g = Object.keys(h ?? p ?? {}).length,
            u = m ? 'tvl' : 'volume',
            f = (0, a.useMemo)(
              () => ({
                name: { name: (0, C.t)`Pool` },
                ...(m
                  ? { rewardsLite: { name: (0, C.t)`Rewards`, mobile: (0, C.t)`Rewards` } }
                  : {
                      rewardsBase: { name: (0, C.t)`Base vAPY`, mobile: (0, C.t)`Rewards Base` },
                      rewardsCrv: { name: 'CRV', mobile: (0, C.t)`Rewards CRV` },
                      rewardsOther: {
                        name: (0, C.t)`Incentives`,
                        mobile: (0, C.t)`Rewards Incentives`,
                      },
                    }),
                tvl: { name: (0, C.t)`TVL` },
                volume: { name: (0, C.t)`Volume` },
                points: { name: (0, C.t)`Points` },
              }),
              [m]
            ),
            j = (0, a.useCallback)(
              (r) => {
                let { filterKey: t, searchText: i, sortBy: a, sortByOrder: l } = { ...n, ...r },
                  o = new URLSearchParams(
                    [
                      ['filter', t && 'all' !== t ? t : ''],
                      ['sortBy', a && a !== u ? a : ''],
                      ['order', l && 'desc' !== l ? l : ''],
                      ['search', i ? encodeURIComponent(i) : ''],
                    ].filter(([, e]) => e)
                  ).toString();
                s((0, E.Yn)(e, `${D.a$.PAGE_POOLS}?${o}`));
              },
              [u, s, e, n]
            );
          return (
            (0, a.useEffect)(() => {
              if (c) {
                let e = (r?.get('filter') || 'all').toLowerCase(),
                  s = (r?.get('sortBy') || u).toLowerCase(),
                  t = (r?.get('order') || 'desc').toLowerCase(),
                  i = decodeURIComponent(r?.get('search') || ''),
                  a = x.find((s) => s === e);
                ('user' !== e || !l || l?.signerAddress) && a
                  ? d({
                      filterKey: e,
                      searchText: i,
                      sortBy: Object.keys(f).find((e) => e.toLowerCase() === s) ?? u,
                      sortByOrder: ['desc', 'asc'].find((e) => e.toLowerCase() === t) ?? 'desc',
                    })
                  : j({ filterKey: 'all', sortBy: s, sortByOrder: t, searchText: i });
              }
            }, [l?.signerAddress, g, c, r, u, x]),
            (0, t.jsxs)(t.Fragment, {
              children: [
                (0, t.jsx)(eI, {
                  $isLite: m,
                  children:
                    c &&
                    n &&
                    (0, t.jsx)(ev, {
                      rChainId: c,
                      curve: l,
                      params: e,
                      isLite: m,
                      tableLabels: f,
                      searchParams: n,
                      searchTermMapper: o,
                      updatePath: j,
                    }),
                }),
                (0, t.jsx)(eb.A, { showScrollButton: !0 }),
              ],
            })
          );
        },
        eI = l.Ay.div.withConfig({ componentId: 'sc-35e6d4a-0' })(
          [
            'margin:0 auto;max-width:',
            ';min-height:50vh;background-color:var(--table--background-color);border:1px solid var(--box--secondary--border);@media (min-width:',
            'rem){margin:1.5rem auto;}',
          ],
          ({ $isLite: e }) => (e ? '870px' : 'var(--width)'),
          Z.fi.lg
        );
    },
    88935: (e, s, r) => {
      'use strict';
      r.d(s, { A: () => h });
      var t = r(54568),
        i = r(48341),
        a = r(47990),
        l = r(56457),
        o = r(17416);
      let n = (0, i.i7)(['0%{opacity:0;transform:scale(0.5);}100%{opacity:1;transform:scale(1);}']),
        d = (0, i.Ay)(a.A).withConfig({ componentId: 'sc-ae04afcd-0' })(
          ['padding:0.5rem;opacity:0;&.pop-in{animation:', ' 0.25s;animation-fill-mode:forwards;}'],
          n
        ),
        c = i.Ay.div.withConfig({ componentId: 'sc-ae04afcd-1' })([
          'position:fixed;bottom:2rem;right:1rem;padding:1rem;z-index:var(--z-index-page-settings);',
        ]),
        h = ({ showScrollButton: e }) => {
          let s = (0, o.l5)((e) => e.showScrollButton);
          return (0, t.jsx)(c, {
            children: (0, t.jsx)(d, {
              className: e && s ? 'pop-in' : '',
              show: !!e && s,
              variant: 'icon-filled',
              onClick: () => {
                window.scroll({ top: 0, left: 0, behavior: 'smooth' });
              },
              children: (0, t.jsx)(l.A, { name: 'UpToTop', size: 24 }),
            }),
          });
        };
    },
    90395: (e, s, r) => {
      'use strict';
      r.d(s, { A: () => g });
      var t = r(54568),
        i = r(39904),
        a = r(48341),
        l = r(64387),
        o = r(46205),
        n = r(77241),
        d = r(36074);
      let c = a.Ay.p.withConfig({ componentId: 'sc-d3941c84-0' })([
          'font-weight:bold;margin-bottom:var(--spacing-1);white-space:nowrap;',
        ]),
        h = (0, a.Ay)(o.v).withConfig({ componentId: 'sc-d3941c84-1' })([
          'display:block;margin-top:var(--spacing-2);',
        ]),
        p = ({ baseApy: e, poolData: s }) => {
          let r = (0, d.t)`Pool APY`;
          return (
            s?.pool.isLending
              ? (r = (0, d.t)`Pool APY + Lending APY`)
              : s?.tokenAddresses.indexOf('0xae7ab96520de3a18e5e111b5eaab095312d7fe84') !== -1
                ? (r = (0, d.t)`Pool APY + Staking APY`)
                : (s?.pool?.implementation === '0x36dc03c0e12a1c241306a6a8f327fe28ba2be5b0' ||
                    s?.pool?.implementation === '0x7ca46a636b02d4abc66883d7ff164bde506dc66a') &&
                  (r = (0, d.t)`Pool APY + Interest APY`),
            (0, t.jsxs)(l.A, {
              children: [
                (0, t.jsxs)(c, {
                  children: [r, ' ', (0, t.jsx)(o.v, { size: 'xs', children: '(annualized)' })],
                }),
                (0, t.jsxs)('ul', {
                  children: [
                    (0, t.jsxs)('li', { children: ['Daily: ', (0, n.ZV)(e?.day, n.hd.PERCENT)] }),
                    (0, t.jsxs)('li', { children: ['Weekly: ', (0, n.ZV)(e?.week, n.hd.PERCENT)] }),
                  ],
                }),
                e?.day &&
                  0 > Number(e.day) &&
                  (0, t.jsx)(h, {
                    children: (0,
                    d.t)`Base vAPY can temporarily be negative when A parameter is ramped down, or crypto pools spend profit to rebalance.`,
                  }),
              ],
            })
          );
        };
      var m = r(55906),
        x = r(19115);
      let g = ({ base: e, isHighlight: s, poolData: r }) => {
        let a = r && 'failedFetching24hOldVprice' in r && r.failedFetching24hOldVprice;
        return (0, t.jsx)(t.Fragment, {
          children: a
            ? (0, t.jsxs)('span', {
                children: ['-', (0, t.jsx)(x.A, { children: 'Not available currently' })],
              })
            : void 0 !== e &&
              (0, t.jsx)(t.Fragment, {
                children:
                  +e.day > m.l5
                    ? (0, t.jsx)(i.A, { isBold: s })
                    : (0, t.jsx)(o.v, {
                        isBold: s,
                        size: 'md',
                        tooltip: e ? (0, t.jsx)(p, { poolData: r, baseApy: e }) : null,
                        tooltipProps: {
                          placement: 'bottom end',
                          textAlign: 'left',
                          ...(e && 0 > Number(e.day) ? { minWidth: '200px' } : {}),
                        },
                        children: (0, n.ZV)(e.day, n.hd.PERCENT),
                      }),
              }),
        });
      };
    },
    96025: (e, s, r) => {
      'use strict';
      r.d(s, { A: () => Y });
      var t = r(54568),
        i = r(99123),
        a = r.n(i),
        l = r(7620),
        o = r(48341),
        n = r(18098),
        d = r(83106),
        c = r(56457),
        h = r(25025),
        p = r(39651),
        m = r(38071);
      let x = ({ className: e, ...s }) => {
          let r = (0, l.useRef)(null),
            { buttonProps: i, isPressed: a } = (0, n.s)(s, r),
            { children: o } = s;
          return (0, t.jsx)(g, {
            className: `${e} ${a ? 'isPressed' : ''}`,
            ...i,
            ref: r,
            children: o,
          });
        },
        g = o.Ay.button.withConfig({ componentId: 'sc-ac374233-0' })([
          'margin-right:2px;color:inherit;background:transparent;cursor:pointer;&.isPressed{color:white;background-color:var(--primary-400);}',
        ]),
        u = o.Ay.span.withConfig({ componentId: 'sc-ac374233-1' })([
          'align-items:center;display:inline-flex;max-width:0;transition:max-width 1s;white-space:nowrap;overflow:hidden;',
        ]),
        f = o.Ay.span.withConfig({ componentId: 'sc-ac374233-2' })(
          [
            'display:inherit;min-height:21px;border:1px solid transparent;&:hover{border-color:lightgray;',
            '{max-width:18.75rem;}}',
          ],
          u
        ),
        j = o.Ay.span.withConfig({ componentId: 'sc-ac374233-3' })([
          'margin-right:2px;font-family:var(--font-mono);font-size:var(--font-size-2);',
        ]),
        w = (0, o.Ay)(h.A).withConfig({ componentId: 'sc-ac374233-4' })(
          [
            'font-size:var(--font-size-4);max-width:13.125rem;@media (min-width:',
            'rem){font-size:1.25rem;max-width:16.25rem;}@media (min-width:',
            'rem){max-width:16.25rem;}',
          ],
          p.fi.sm,
          p.fi.lg
        ),
        A = (0, o.Ay)(c.A).withConfig({ componentId: 'sc-ac374233-5' })([
          'position:relative;top:2px;',
        ]),
        y = ({
          className: e,
          isHighlightPoolName: s,
          isHighlightPoolAddress: r,
          poolName: i,
          poolAddress: a,
          ...o
        }) => {
          let n = (0, l.useMemo)(() => (a ? `${(0, m.Wr)(a)}` : (0, d.b)(a)), [a]);
          return (0, t.jsxs)(f, {
            className: e,
            children: [
              (0, t.jsxs)(w, {
                children: [s || r ? (0, t.jsx)('strong', { children: i }) : i, ' '],
              }),
              (0, t.jsx)(u, {
                children: (0, t.jsxs)(x, {
                  ...o,
                  onPress: () => (0, m.lW)(a),
                  children: [
                    (0, t.jsx)(j, { children: r ? (0, t.jsx)('mark', { children: n }) : n }),
                    (0, t.jsx)(A, { name: 'Copy', size: 16 }),
                  ],
                }),
              }),
            ],
          });
        };
      var v = r(28822),
        b = r(99599),
        C = r(77241),
        k = r(88411);
      let P = ({ className: e, ...s }) => {
          let r = (0, l.useRef)(null),
            { buttonProps: i, isPressed: a } = (0, n.s)(s, r),
            { children: o } = s;
          return (0, t.jsx)(I, {
            className: `${e} ${a ? 'isPressed' : ''}`,
            ...i,
            ref: r,
            children: o,
          });
        },
        I = o.Ay.button.withConfig({ componentId: 'sc-81d6bdb3-0' })([
          'margin-left:2px;color:inherit;background:transparent;cursor:pointer;&.isPressed{color:white;background-color:var(--primary-400);}',
        ]),
        L = o.Ay.span.withConfig({ componentId: 'sc-81d6bdb3-1' })([
          'align-items:center;max-width:0;transition:max-width 1s;white-space:nowrap;overflow:hidden;',
        ]),
        N = o.Ay.span.withConfig({ componentId: 'sc-81d6bdb3-2' })(
          [
            'align-items:center;display:inline-flex;min-height:24px;padding:0 1px;border:1px solid transparent;font-size:var(--font-size-2);&:hover{margin-right:4px;border-color:lightgray;',
            '{max-width:18.75rem;}}',
          ],
          L
        ),
        T = o.Ay.span.withConfig({ componentId: 'sc-81d6bdb3-3' })([
          'margin:0 2px;position:relative;top:-2px;font-size:var(--font-size-1);font-weight:bold;',
        ]),
        R = (0, o.Ay)(c.A).withConfig({ componentId: 'sc-81d6bdb3-4' })([
          'position:relative;top:1px;margin:0 2px;',
        ]),
        O = ({ className: e, isHighlight: s, tokenName: r, tokenAddress: i, ...a }) => {
          let { lib: o } = (0, k.w5)(),
            n = (0, v.A)((e) => e.usdRates.usdRatesMapper[i]),
            d = (0, v.A)((e) => e.usdRates.fetchUsdRateByToken),
            c = (0, C.vk)(n),
            h = (e) => {
              !e && o && d(o, i);
            },
            p = (0, l.useMemo)(() => (r && r.length > 10 ? `${r.slice(0, 5)}...` : r), [r]);
          return (0, t.jsxs)(N, {
            className: e,
            onMouseEnter: () => h(c),
            children: [
              (0, t.jsxs)('span', {
                children: [s ? (0, t.jsx)('strong', { children: p }) : p, ' '],
              }),
              (0, t.jsx)(L, {
                children: (0, t.jsxs)(P, {
                  ...a,
                  onPress: () => (0, m.lW)(i),
                  children: [
                    (0, t.jsx)(T, { children: void 0 === n ? (0, t.jsx)(b.A, { size: 10 }) : c }),
                    (0, t.jsx)(R, { name: 'Copy', size: 16 }),
                  ],
                }),
              }),
            ],
          });
        };
      var M = r(79614),
        S = r(70184),
        $ = r(77540),
        D = r(64387),
        B = r(50567),
        F = r(46205),
        H = r(12078),
        z = r(55928);
      let E = o.Ay.div.withConfig({ componentId: 'sc-85d371d7-0' })(['min-width:3.3125rem;']),
        V = o.Ay.div.withConfig({ componentId: 'sc-85d371d7-1' })([
          'display:grid;align-items:center;grid-template-columns:auto 1fr;grid-column-gap:var(--spacing-2);width:100%;',
        ]),
        K = o.Ay.div.withConfig({ componentId: 'sc-85d371d7-2' })([
          'min-height:1.5rem;max-width:24.375rem;',
        ]),
        U = o.Ay.span.withConfig({ componentId: 'sc-85d371d7-3' })([
          'font-size:var(--font-size-2);',
        ]),
        W = (0, o.Ay)($.A).withConfig({ componentId: 'sc-85d371d7-4' })([
          'font-size:var(--font-size-2);margin:var(--spacing-2) 0;max-height:100px;overflow:scroll;max-width:260px;',
        ]),
        Y = ({
          className: e = '',
          blockchainId: s,
          isVisible: r = !0,
          poolData: i,
          poolListProps: o,
        }) => {
          let { pool: n } = i ?? {},
            d = (0, l.useMemo)(
              () => a()(i?.tokens, i?.tokenAddresses).map(([e, s]) => ({ symbol: e, address: s })),
              [i?.tokens, i?.tokenAddresses]
            ),
            c = (0, M.A)(i?.pool.address, i?.hasVyperVulnerability),
            h = (0, S.A)(i?.tokenAddressesAll ?? []),
            p = (0, H.al)(),
            m = (0, v.A)((e) => e.poolList.searchedTerms),
            { quickViewValue: x, onClick: g } = o ?? {},
            u = (e) => {
              if ('function' == typeof g) {
                let { nodeName: s } = e;
                'A' !== s && g(e);
              }
            },
            { highlightedTokens: f } = (0, l.useMemo)(() => {
              if (p || !r) return { highlightedTokens: [] };
              let e = !1;
              return {
                highlightedTokens: d.map(({ symbol: s, address: r }) => {
                  let t =
                    -1 !==
                    m.findIndex((e) => {
                      let t = s.toLowerCase(),
                        i = r.toLowerCase(),
                        a = e.toLowerCase();
                      return t.includes(a) || i === a || i.startsWith(a);
                    });
                  return t && (e = !0), { symbol: s, address: r, isHighLight: t };
                }),
                isHighlightPoolName: !e,
              };
            }, [p, r, m, d]);
          return (0, t.jsxs)('div', {
            children: [
              (0, t.jsxs)(V, {
                className: e,
                onClick: ({ target: e }) => u(e),
                children: [
                  (0, t.jsx)(E, { children: r && (0, t.jsx)(z.S, { blockchainId: s, tokens: d }) }),
                  (0, t.jsxs)(D.A, {
                    fillWidth: !0,
                    children: [
                      (0, t.jsxs)(D.A, {
                        flex: !0,
                        flexAlignItems: 'center',
                        children: [
                          !p &&
                            (0, t.jsxs)(t.Fragment, {
                              children: [
                                (c?.isInformationOnly || c?.isInformationOnlyAndShowInForm) &&
                                  (0, t.jsx)(B.mL, {
                                    minWidth: '300px',
                                    placement: 'start',
                                    ...c,
                                    children: c.message,
                                  }),
                                h &&
                                  (0, t.jsx)(B.mL, {
                                    minWidth: '300px',
                                    placement: 'start',
                                    ...h,
                                    children: h.message,
                                  }),
                              ],
                            }),
                          n &&
                            (0, t.jsx)(y, {
                              poolAddress: n.address,
                              poolName: n.name,
                              isHighlightPoolName: !0,
                            }),
                        ],
                      }),
                      (0, t.jsx)(K, {
                        children:
                          n &&
                          (0, t.jsx)('div', {
                            children: p
                              ? d.map(({ symbol: e }, s) =>
                                  (0, t.jsxs)(U, { children: [e, ' '] }, `${e}-${s}`)
                                )
                              : r &&
                                f.map(({ symbol: e, address: s, isHighLight: r }, i) =>
                                  (0, t.jsx)(
                                    O,
                                    { tokenName: e, tokenAddress: s, isHighlight: r },
                                    `${e}${s}${i}`
                                  )
                                ),
                          }),
                      }),
                      x && (0, t.jsx)(F.v, { children: x }),
                    ],
                  }),
                ],
              }),
              h && p && (0, t.jsx)(W, { alertType: h.alertType, children: h.message }),
              c &&
                !c.isPoolPageOnly &&
                (0, t.jsx)(t.Fragment, {
                  children:
                    c.isInformationOnly || c.isInformationOnlyAndShowInForm
                      ? p
                        ? (0, t.jsx)(W, { alertType: c.alertType, children: c.message })
                        : null
                      : (0, t.jsx)(D.A, { padding: '0.5rem 0 0 0', children: c.message }),
                }),
            ],
          });
        };
    },
    96244: (e, s, r) => {
      Promise.resolve().then(r.bind(r, 67520));
    },
  },
  (e) => {
    var s = (s) => e((e.s = s));
    e.O(
      0,
      [
        4599, 921, 9335, 909, 7261, 5077, 8341, 9902, 7806, 4439, 7388, 7208, 2519, 1356, 7999,
        8867, 7496, 7044, 4925, 9720, 9556, 168, 4148, 9630, 2059, 4612, 4034, 2038, 3627, 2193,
        6467, 6116, 7399, 5911, 8173, 8822, 587, 8315, 7358,
      ],
      () => s(96244)
    ),
      (_N_E = e.O());
  },
]);
