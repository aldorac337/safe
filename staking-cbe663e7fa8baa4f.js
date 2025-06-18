(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8879],
  {
    82590: function (e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, {
          default: function () {
            return ft;
          },
        });
      var r,
        a = n(5152),
        i = n.n(a),
        o = n(67294),
        s = n(64283),
        l = n(55986),
        c = n(17674),
        d = n(57499),
        u = n(2734),
        x = n(61730),
        m = n(1924),
        h = n(68860),
        p = n(44154),
        f = n(60377),
        j = n(93153),
        y = n(3062),
        v = n(73886),
        b = n(80822),
        g = n(15861),
        k = n(85893),
        w = function () {
          return (0, k.jsx)(b.Z, {
            sx: {
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 1,
              pt: 15,
              pb: 32,
              px: 4,
            },
            children: (0, k.jsx)(g.Z, {
              variant: 'h3',
              sx: { textAlign: 'center' },
              children: (0, k.jsx)(d.cC, { id: 'RTG4/6' }),
            }),
          });
        },
        S = n(59499),
        T = n(90116),
        Z = n(24957),
        D = n(88328),
        C = n(745),
        O = n(38577),
        A = n(49212),
        P = function () {
          return (0, k.jsx)(A.G, {
            text: (0, k.jsx)(d.cC, { id: 'rSayea' }),
            children: (0, k.jsxs)(k.Fragment, {
              children: [
                (0, k.jsx)(d.cC, { id: '/1xACT' }),
                ' ',
                (0, k.jsx)(O.rU, {
                  href: 'https://aave.com/docs/primitives/umbrella#rewards-and-safety-incentives',
                  underline: 'always',
                  children: (0, k.jsx)(d.cC, { id: 'zwWKhA' }),
                }),
              ],
            }),
          });
        },
        B = n(88078),
        I = n(25135),
        L = function () {
          return (0, k.jsxs)(I.H, {
            px: 6,
            minHeight: 76,
            button: !0,
            children: [
              (0, k.jsxs)(Z.h, {
                isRow: !0,
                minWidth: 275,
                children: [
                  (0, k.jsx)(B.Z, { variant: 'circular', width: 32, height: 32 }),
                  (0, k.jsx)(b.Z, {
                    sx: { pl: 2, overflow: 'hidden' },
                    children: (0, k.jsx)(B.Z, { width: 175, height: 24 }),
                  }),
                ],
              }),
              (0, k.jsx)(Z.h, { children: (0, k.jsx)(B.Z, { width: 70, height: 24 }) }),
              (0, k.jsx)(Z.h, { children: (0, k.jsx)(B.Z, { width: 70, height: 24 }) }),
              (0, k.jsx)(Z.h, { children: (0, k.jsx)(B.Z, { width: 70, height: 24 }) }),
              (0, k.jsx)(Z.h, { children: (0, k.jsx)(B.Z, { width: 70, height: 24 }) }),
              (0, k.jsx)(Z.h, { children: (0, k.jsx)(B.Z, { width: 40, height: 40 }) }),
            ],
          });
        },
        E = n(36864),
        R = n(90244),
        U = n(4431),
        N = n(79369),
        M = n(23839),
        V = n(69417),
        F = n(26447),
        q = n(93946),
        W = n(35294),
        _ = n(18972),
        z = n(90948),
        K = n(2593),
        H = n(20929),
        X = n(87970),
        Y = n(44949),
        G = n(65361),
        $ = (0, z.ZP)(_.Z)({
          display: 'flex',
          gap: '8px',
          alignItems: 'center',
          '& .MuiSvgIcon-root': { fontSize: 20 },
          '& .timeLabel': { marginLeft: 'auto', fontSize: '0.75rem', color: 'rgba(0, 0, 0, 0.6)' },
        }),
        J = function (e) {
          var t = e.stakeData,
            n = (0, Y.vR)(),
            r = n.openUmbrella,
            a = n.openUmbrellaStakeCooldown,
            i = n.openUmbrellaUnstake,
            s = n.openUmbrellaClaim,
            l = (0, y.Y)(function (e) {
              return e.trackEvent;
            }),
            c = (0, X.p)(1),
            m = (0, u.Z)().breakpoints,
            h = (0, x.Z)(m.down('lg')),
            p = (null === t || void 0 === t ? void 0 : t.cooldownData.endOfCooldown) || 0,
            f = (null === t || void 0 === t ? void 0 : t.cooldownData.withdrawalWindow) || 0,
            j = p - c,
            v = p + f - c,
            b = j > 0,
            w = p < c && c < p + f,
            S =
              b &&
              K.O$.from(
                (null === t || void 0 === t ? void 0 : t.balances.stakeTokenRedeemableAmount) || 0
              ).gt((null === t || void 0 === t ? void 0 : t.cooldownData.cooldownAmount) || 0),
            T = (0, o.useState)(null),
            Z = T[0],
            D = T[1],
            C = Boolean(Z),
            O = (0, u.Z)(),
            A = function () {
              D(null);
            },
            P = t.formattedBalances.totalAvailableToStake,
            B = t.formattedRewards.some(function (e) {
              return Number(e.accrued) > 0;
            }),
            I = '0' !== t.balances.stakeTokenBalance;
          return (0, k.jsx)('div', {
            children:
              I || B
                ? (0, k.jsxs)(k.Fragment, {
                    children: [
                      (0, k.jsx)(q.Z, {
                        style: {
                          width: h ? '100%' : 'auto',
                          backgroundColor: 'light' === O.palette.mode ? '#F7F7F9' : '#383D51',
                          borderRadius: 4,
                        },
                        'aria-label': 'more',
                        'aria-controls': C ? 'staking-menu' : void 0,
                        'aria-haspopup': 'true',
                        'aria-expanded': C ? 'true' : void 0,
                        onClick: function (e) {
                          D(e.currentTarget);
                        },
                        size: 'medium',
                        children: (0, k.jsx)(N.Z, {}),
                      }),
                      (0, k.jsxs)(W.Z, {
                        id: 'staking-menu',
                        anchorEl: Z,
                        open: C,
                        onClose: A,
                        onClick: A,
                        transformOrigin: { horizontal: 'right', vertical: 'top' },
                        anchorOrigin: { horizontal: 'right', vertical: 'bottom' },
                        children: [
                          w
                            ? (0, k.jsxs)($, {
                                onClick: function () {
                                  A(),
                                    l(G.so.STAKE_TOKEN, {
                                      action: G.so.OPEN_WITHDRAW_MODAL,
                                      asset: t.symbol,
                                      tokenAddress: t.tokenAddress,
                                      isUnstakeWindowActive: w,
                                      unstakeTimeRemaining: v,
                                    }),
                                    i(
                                      t.tokenAddress,
                                      t.underlyingTokenAddress,
                                      t.stataTokenData.asset,
                                      t.symbol
                                    );
                                },
                                disabled: !w,
                                children: [
                                  (0, k.jsx)(M.Z, { sx: { transform: 'rotate(180deg)' } }),
                                  (0, k.jsxs)(F.Z, {
                                    sx: { width: '100%' },
                                    direction: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    children: [
                                      (0, k.jsx)(g.Z, {
                                        color: 'text.primary',
                                        children: (0, k.jsx)(d.cC, { id: 'OsyKSt' }),
                                      }),
                                      (0, k.jsx)(g.Z, {
                                        variant: 'helperText',
                                        children: (0, k.jsx)(H.S, { seconds: v }),
                                      }),
                                    ],
                                  }),
                                ],
                              })
                            : (0, k.jsxs)($, {
                                onClick: function () {
                                  A(),
                                    l(G.so.STAKE_TOKEN, {
                                      action: G.so.OPEN_COOLDOWN_MODAL,
                                      asset: t.symbol,
                                      tokenAddress: t.tokenAddress,
                                      isCooldownActive: b,
                                      availableToReactivateCooldown: S,
                                    }),
                                    a(t.tokenAddress, t.symbol);
                                },
                                disabled: !I || w || (b && !S),
                                children: [
                                  (0, k.jsx)(R.Z, {}),
                                  b && !S
                                    ? (0, k.jsxs)(F.Z, {
                                        sx: { width: '100%' },
                                        direction: 'row',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        children: [
                                          (0, k.jsx)(g.Z, {
                                            color: 'text.primary',
                                            children: (0, k.jsx)(d.cC, { id: 'j8cF1R' }),
                                          }),
                                          (0, k.jsx)(g.Z, {
                                            variant: 'helperText',
                                            children: (0, k.jsx)(H.S, { seconds: j }),
                                          }),
                                        ],
                                      })
                                    : (0, k.jsx)(d.cC, { id: 'oHFrpj' }),
                                ],
                              }),
                          (0, k.jsxs)($, {
                            onClick: function () {
                              A(),
                                l(G.so.STAKE_TOKEN, {
                                  action: G.so.OPEN_STAKE_MODAL,
                                  asset: t.symbol,
                                  tokenAddress: t.tokenAddress,
                                  type: I ? 'Stake More' : 'Initial Stake',
                                }),
                                r(
                                  t.tokenAddress,
                                  t.underlyingTokenAddress,
                                  t.symbol,
                                  t.stataTokenData.aToken,
                                  t.stataTokenData.asset
                                );
                            },
                            children: [
                              (0, k.jsx)(U.Z, {}),
                              (0, k.jsx)(g.Z, { children: I ? 'Stake more' : 'Stake' }),
                            ],
                          }),
                          (0, k.jsxs)($, {
                            onClick: function () {
                              A(),
                                l(G.so.STAKE_TOKEN, {
                                  action: G.so.OPEN_CLAIM_MODAL,
                                  asset: t.symbol,
                                  tokenAddress: t.tokenAddress,
                                  hasUnclaimedRewards: B,
                                }),
                                s(t.tokenAddress);
                            },
                            children: [(0, k.jsx)(M.Z, {}), (0, k.jsx)(g.Z, { children: 'Claim' })],
                          }),
                        ],
                      }),
                    ],
                  })
                : (0, k.jsx)(V.Z, {
                    disabled: '0' === P,
                    fullWidth: h,
                    variant: 'contained',
                    onClick: function () {
                      l(G.so.STAKE_TOKEN, {
                        action: G.so.OPEN_STAKE_MODAL,
                        asset: t.symbol,
                        tokenAddress: t.tokenAddress,
                        type: 'Initial Stake',
                      }),
                        r(
                          t.tokenAddress,
                          t.underlyingTokenAddress,
                          t.symbol,
                          t.stataTokenData.aToken,
                          t.stataTokenData.asset
                        );
                    },
                    children: (0, k.jsx)(d.cC, { id: 'JYKRJS' }),
                  }),
          });
        },
        Q = n(20986),
        ee = n(90327),
        te = n(71383),
        ne = n(70917),
        re = n(56371),
        ae = n(2127),
        ie = n(32867),
        oe = n(85078),
        se = n(13974),
        le = n(41129),
        ce = function (e) {
          var t = e.stakeData,
            n = (0, X.p)(1),
            r = t.formattedBalances,
            a = r.stakeTokenBalance,
            i = r.stakeTokenBalanceUSD,
            o = (null === t || void 0 === t ? void 0 : t.cooldownData.endOfCooldown) || 0,
            s = (null === t || void 0 === t ? void 0 : t.cooldownData.withdrawalWindow) || 0,
            l = (0, re.formatUnits)(
              (null === t || void 0 === t ? void 0 : t.cooldownData.cooldownAmount) || '0',
              t.decimals
            ),
            c = o - n,
            d = c > 0,
            u = o < n && n < o + s,
            x = o + s - n;
          return (0, k.jsxs)(F.Z, {
            direction: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            children: [
              d || u
                ? (0, k.jsx)(le.k, { value: a, subValue: i, withTooltip: !0, disabled: '0' === a })
                : (0, k.jsxs)(k.Fragment, {
                    children: [
                      (0, k.jsx)(ie.B, { compact: !0, value: a, variant: 'secondary14' }),
                      (0, k.jsx)(oe.i, { value: i }),
                    ],
                  }),
              d &&
                (0, k.jsx)(ue, {
                  timeRemaining: c,
                  tooltipContent: (0, k.jsx)(xe, { cooldownAmount: l, unstakeWindow: s }),
                }),
              u &&
                (0, k.jsx)(ue, {
                  animate: !0,
                  timeRemaining: x,
                  tooltipContent: (0, k.jsx)(me, { cooldownAmount: l }),
                }),
            ],
          });
        },
        de = (0, ne.F4)(
          r ||
            (r = (0, te.Z)([
              '\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.35;\n  }\n  100% {\n    opacity: 1;\n  }\n',
            ]))
        ),
        ue = function (e) {
          var t = e.timeRemaining,
            n = e.tooltipContent,
            r = e.animate;
          return (0, k.jsx)(ae.a, {
            tooltipContent: n,
            children: (0, k.jsxs)(F.Z, {
              gap: 1,
              direction: 'row',
              alignItems: 'center',
              sx: { animation: r ? ''.concat(de, ' 1.5s infinite') : 'none' },
              children: [
                (0, k.jsx)(R.Z, { fontSize: 'small' }),
                (0, k.jsx)(g.Z, {
                  variant: 'helperText',
                  children: (0, k.jsx)(H.S, { seconds: t }),
                }),
              ],
            }),
          });
        },
        xe = function (e) {
          var t = e.cooldownAmount,
            n = e.unstakeWindow;
          return (0, k.jsxs)(F.Z, {
            gap: 2,
            direction: 'column',
            children: [
              (0, k.jsx)(d.cC, { id: '1YH41K', values: { 0: (0, se.vd)(n) } }),
              (0, k.jsxs)(F.Z, {
                direction: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                children: [
                  (0, k.jsx)(d.cC, { id: 'SM58dD' }),
                  (0, k.jsx)(ie.B, { variant: 'caption', value: t }),
                ],
              }),
            ],
          });
        },
        me = function (e) {
          var t = e.cooldownAmount;
          return (0, k.jsxs)(F.Z, {
            gap: 2,
            direction: 'column',
            children: [
              (0, k.jsx)(d.cC, { id: '7hb2+s' }),
              (0, k.jsxs)(F.Z, {
                direction: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                children: [
                  (0, k.jsx)(d.cC, { id: 'bBHmeP' }),
                  (0, k.jsx)(ie.B, { variant: 'caption', value: t }),
                ],
              }),
            ],
          });
        },
        he = n(45640),
        pe = function (e) {
          var t = e.symbol,
            n = e.name,
            r = e.value,
            a = e.aToken,
            i = e.waToken;
          return (0, k.jsx)(Q.X, {
            sx: { mb: 2 },
            caption: (0, k.jsxs)(F.Z, {
              direction: 'row',
              alignItems: 'center',
              children: [
                (0, k.jsx)(he.T1, {
                  symbol: t,
                  sx: { fontSize: '20px', mr: 1 },
                  aToken: a,
                  waToken: i,
                }),
                (0, k.jsx)(g.Z, { variant: 'secondary12', children: n }),
              ],
            }),
            width: '100%',
            children: (0, k.jsx)(ie.B, { value: r, compact: !0, variant: 'secondary12' }),
          });
        },
        fe = (0, z.ZP)(b.Z)(function (e) {
          var t = e.theme,
            n = e.expanded;
          return {
            display: 'flex',
            alignItems: 'center',
            gap: n ? '2px' : '0',
            transition: t.transitions.create('width'),
            width: n ? 'auto' : 'fit-content',
            maxWidth: '240px',
            overflow: 'hidden',
          };
        }),
        je = (0, z.ZP)(b.Z)(function (e) {
          var t = e.theme,
            n = e.index,
            r = e.expanded,
            a = e.total;
          return {
            position: 'relative',
            marginLeft: r || 0 === n ? 0 : -15,
            transition: t.transitions.create(['margin-left', 'z-index']),
            zIndex: a - n,
          };
        });
      function ye(e) {
        var t = e.icons,
          n = e.onHover,
          r = (0, o.useState)(!1),
          a = r[0],
          i = r[1];
        return (0, k.jsx)(b.Z, {
          display: 'flex',
          alignItems: 'center',
          onMouseEnter: function () {
            i(!0), null === n || void 0 === n || n(!0);
          },
          onMouseLeave: function () {
            i(!1), null === n || void 0 === n || n(!1);
          },
          children: (0, k.jsx)(fe, {
            expanded: a,
            children: t.map(function (e, n) {
              return (0, k.jsx)(
                je,
                {
                  index: n,
                  expanded: a,
                  total: t.length,
                  children: (0, k.jsx)(he.T1, {
                    symbol: e.src,
                    aToken: e.aToken,
                    waToken: e.waToken,
                  }),
                },
                n
              );
            }),
          }),
        });
      }
      function ve(e) {
        var t = e.icons,
          n = e.tooltipContent,
          r = (0, o.useState)(!1),
          a = r[0],
          i = r[1];
        return (0, k.jsx)(ae.a, {
          open: a,
          tooltipContent: n,
          withoutHover: !0,
          children: (0, k.jsx)(ye, {
            icons: t,
            onHover: function (e) {
              return i(e);
            },
          }),
        });
      }
      var be = function (e) {
          var t = e.stakeData,
            n = e.isMobile,
            r = t.formattedRewards.map(function (e) {
              return { src: e.rewardTokenSymbol, aToken: e.aToken };
            }),
            a = t.formattedRewards.reduce(function (e, t) {
              return e + +t.accrued;
            }, 0),
            i = t.formattedRewards.reduce(function (e, t) {
              return e + +t.accruedUsd;
            }, 0);
          return (0, k.jsxs)(F.Z, {
            direction: n ? 'row' : 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 2,
            width: '100%',
            children: [
              (0, k.jsx)(le.k, {
                listColumnProps: { p: 0, minWidth: 0 },
                value: a,
                subValue: i,
                withTooltip: !0,
                disabled: 0 === a,
              }),
              t.formattedRewards.length > 1 &&
                (0, k.jsx)(ve, { icons: r, tooltipContent: (0, k.jsx)(ge, { stakeData: t }) }),
              1 === t.formattedRewards.length &&
                (0, k.jsx)(he.T1, {
                  aToken: t.formattedRewards[0].aToken,
                  symbol: t.formattedRewards[0].rewardTokenSymbol,
                }),
            ],
          });
        },
        ge = function (e) {
          var t = e.stakeData;
          return (0, k.jsxs)(F.Z, {
            direction: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minWidth: 160,
            children: [
              (0, k.jsx)(g.Z, {
                variant: 'caption',
                color: 'text.secondary',
                mb: 3,
                children: (0, k.jsx)(d.cC, { id: 'qhhf9L' }),
              }),
              (0, k.jsx)(b.Z, {
                sx: { width: '100%' },
                children: t.formattedRewards.map(function (e, t) {
                  return (0, k.jsx)(
                    pe,
                    { symbol: e.rewardTokenSymbol, name: e.rewardTokenSymbol, value: e.accrued },
                    t
                  );
                }),
              }),
            ],
          });
        },
        ke = function (e) {
          var t = e.stakeData,
            n = e.isMobile,
            r = t.formattedBalances,
            a = r.stataTokenAssetBalance,
            i = r.aTokenBalanceAvailableToStake,
            o = r.underlyingTokenBalance,
            s = [];
          o && s.push({ src: t.stataTokenData.assetSymbol, aToken: !1 }),
            a && s.push({ src: t.stataTokenData.assetSymbol, aToken: !0 }),
            o &&
              Number(o) > 0 &&
              s.push({ src: t.stataTokenData.assetSymbol, aToken: !1, waToken: !0 });
          var l = Number(o) + Number(a) + Number(i);
          return (0, k.jsxs)(F.Z, {
            direction: n ? 'row' : 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 2,
            children: [
              (0, k.jsx)(ie.B, {
                compact: !0,
                value: l,
                variant: 'secondary14',
                color: 0 === l ? 'text.disabled' : 'text.main',
              }),
              t.underlyingIsStataToken
                ? (0, k.jsx)(ve, { icons: s, tooltipContent: (0, k.jsx)(we, { stakeData: t }) })
                : (0, k.jsx)(he.T1, { symbol: t.symbol, sx: { fontSize: '24px' } }),
            ],
          });
        },
        we = function (e) {
          var t = e.stakeData,
            n = t.formattedBalances,
            r = n.aTokenBalanceAvailableToStake,
            a = n.stataTokenAssetBalance,
            i = n.underlyingTokenBalance,
            o = t.stataTokenData.assetSymbol;
          return (0, k.jsxs)(F.Z, {
            direction: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minWidth: 160,
            children: [
              (0, k.jsx)(g.Z, {
                variant: 'caption',
                color: 'text.secondary',
                mb: 3,
                children: (0, k.jsx)(d.cC, { id: 'C4/GSi' }),
              }),
              (0, k.jsxs)(b.Z, {
                sx: { width: '100%' },
                children: [
                  a && (0, k.jsx)(pe, { symbol: o, name: o, value: a }),
                  r && (0, k.jsx)(pe, { symbol: o, name: 'a'.concat(o), value: r, aToken: !0 }),
                  i &&
                    Number(i) > 0 &&
                    (0, k.jsx)(pe, {
                      symbol: o,
                      name: t.underlyingTokenSymbol,
                      value: i,
                      waToken: !0,
                    }),
                ],
              }),
            ],
          });
        },
        Se = n(38776);
      function Te(e, t) {
        var n = ('undefined' !== typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
        if (!n) {
          if (
            Array.isArray(e) ||
            (n = (function (e, t) {
              if (!e) return;
              if ('string' === typeof e) return Ze(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              'Object' === n && e.constructor && (n = e.constructor.name);
              if ('Map' === n || 'Set' === n) return Array.from(e);
              if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                return Ze(e, t);
            })(e)) ||
            (t && e && 'number' === typeof e.length)
          ) {
            n && (e = n);
            var r = 0,
              a = function () {};
            return {
              s: a,
              n: function () {
                return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
              },
              e: function (e) {
                throw e;
              },
              f: a,
            };
          }
          throw new TypeError(
            'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
          );
        }
        var i,
          o = !0,
          s = !1;
        return {
          s: function () {
            n = n.call(e);
          },
          n: function () {
            var e = n.next();
            return (o = e.done), e;
          },
          e: function (e) {
            (s = !0), (i = e);
          },
          f: function () {
            try {
              o || null == n.return || n.return();
            } finally {
              if (s) throw i;
            }
          },
        };
      }
      function Ze(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      var De = function (e) {
          var t,
            n = e.stakeData,
            r = e.isMobile,
            a = (0, f.HT)().reserves,
            i = [],
            o = [],
            s = Te(n.formattedRewards);
          try {
            var l = function () {
              var e = t.value,
                n = a.find(function (t) {
                  return t.aTokenAddress.toLowerCase() === e.rewardToken.toLowerCase();
                });
              n
                ? (i.push({ src: n.symbol, aToken: !0 }),
                  o.push({
                    address: e.rewardToken,
                    symbol: n.symbol,
                    name: 'a'.concat(n.symbol),
                    aToken: !0,
                    apy: e.apy,
                  }))
                : (i.push({ src: e.rewardTokenSymbol, aToken: !1 }),
                  o.push({
                    address: e.rewardToken,
                    symbol: e.rewardTokenSymbol,
                    name: e.rewardTokenSymbol,
                    aToken: !1,
                    apy: e.apy,
                  }));
            };
            for (s.s(); !(t = s.n()).done; ) l();
          } catch (u) {
            s.e(u);
          } finally {
            s.f();
          }
          if (n.underlyingIsStataToken) {
            var c = a.find(function (e) {
              return e.underlyingAsset === n.stataTokenData.asset.toLowerCase();
            });
            (0, Se.Z)(
              c,
              'Underlying reserve not found for waToken underlying '.concat(n.stataTokenData.asset)
            ),
              i.push({ src: c.symbol, aToken: !0 }),
              o.push({
                address: n.stataTokenData.asset,
                symbol: c.symbol,
                name: 'a'.concat(c.symbol),
                aToken: !0,
                apy: c.supplyAPY,
                fromSupply: !0,
              });
          }
          return (0, k.jsxs)(F.Z, {
            direction: r ? 'row' : 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 2,
            children: [
              (0, k.jsx)(ie.B, {
                value: n.totalRewardApy,
                percent: !0,
                variant: 'secondary14',
                visibleDecimals: 2,
              }),
              (0, k.jsx)(ve, {
                icons: i,
                tooltipContent: (0, k.jsx)(Ce, {
                  description: (0, k.jsx)(g.Z, {
                    variant: 'caption',
                    color: 'text.secondary',
                    mb: 3,
                    children: n.underlyingIsStataToken
                      ? (0, k.jsx)(d.cC, { id: 'oWQnqT' })
                      : (0, k.jsx)(d.cC, { id: 'eVpCmf' }),
                  }),
                  rewards: o,
                }),
              }),
            ],
          });
        },
        Ce = function (e) {
          var t = e.description,
            n = e.rewards,
            r = n.reduce(function (e, t) {
              return e + parseFloat(t.apy);
            }, 0);
          return (0, k.jsxs)(b.Z, {
            sx: {
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
            },
            children: [
              t,
              (0, k.jsxs)(b.Z, {
                sx: { width: '100%', minWidth: '160px' },
                children: [
                  n.map(function (e, t) {
                    return (0, k.jsx)(
                      Q.X,
                      {
                        sx: { mb: 2 },
                        caption: (0, k.jsxs)(F.Z, {
                          direction: 'row',
                          alignItems: 'center',
                          children: [
                            (0, k.jsx)(he.T1, {
                              aToken: e.aToken,
                              symbol: e.symbol,
                              sx: { fontSize: '20px', mr: 1 },
                            }),
                            (0, k.jsx)(g.Z, { variant: 'secondary12', children: e.name }),
                            e.fromSupply &&
                              (0, k.jsxs)(g.Z, {
                                variant: 'caption',
                                color: 'text.secondary',
                                sx: { ml: 1 },
                                children: ['(', (0, k.jsx)(d.cC, { id: 'bq0uL+' }), ')'],
                              }),
                          ],
                        }),
                        width: '100%',
                        children: (0, k.jsxs)(F.Z, {
                          direction: 'row',
                          children: [
                            (0, k.jsx)(ie.B, {
                              value: +e.apy,
                              percent: !0,
                              variant: 'secondary12',
                            }),
                            (0, k.jsx)(g.Z, {
                              variant: 'secondary12',
                              sx: { ml: 1 },
                              children: (0, k.jsx)(d.cC, { id: 'rSayea' }),
                            }),
                          ],
                        }),
                      },
                      t
                    );
                  }),
                  n.length > 1 &&
                    (0, k.jsx)(Q.X, {
                      sx: { mt: 1, pt: 2, borderTop: '1px solid', borderColor: 'divider' },
                      caption: (0, k.jsx)(g.Z, {
                        variant: 'secondary12',
                        fontWeight: 'medium',
                        children: (0, k.jsx)(d.cC, { id: '72c5Qo' }),
                      }),
                      width: '100%',
                      children: (0, k.jsxs)(F.Z, {
                        direction: 'row',
                        children: [
                          (0, k.jsx)(ie.B, {
                            value: r,
                            percent: !0,
                            variant: 'secondary12',
                            fontWeight: 'medium',
                          }),
                          (0, k.jsx)(g.Z, {
                            variant: 'secondary12',
                            fontWeight: 'medium',
                            sx: { ml: 1 },
                            children: (0, k.jsx)(d.cC, { id: 'rSayea' }),
                          }),
                        ],
                      }),
                    }),
                ],
              }),
            ],
          });
        },
        Oe = n(33494),
        Ae = function (e) {
          var t = e.iconSymbol,
            n = e.symbol,
            r = e.totalAmountStakedUSD,
            a = e.targetLiquidityUSD,
            i = e.apyAtTargetLiquidity,
            o = e.explorerUrl;
          return (0, k.jsxs)(k.Fragment, {
            children: [
              (0, k.jsx)(he.T1, { symbol: t, fontSize: 'large' }),
              (0, k.jsxs)(F.Z, {
                ml: 2,
                children: [
                  (0, k.jsxs)(F.Z, {
                    direction: 'row',
                    alignItems: 'center',
                    gap: 1,
                    children: [
                      (0, k.jsxs)(g.Z, { variant: 'h4', noWrap: !0, children: ['Stake ', n] }),
                      (0, k.jsx)(Oe.Z, { explorerUrl: o }),
                    ],
                  }),
                  (0, k.jsxs)(F.Z, {
                    direction: 'row',
                    children: [
                      (0, k.jsxs)(g.Z, {
                        variant: 'caption',
                        color: 'text.secondary',
                        children: [
                          'Total staked:',
                          ' ',
                          (0, k.jsx)(ie.B, {
                            variant: 'caption',
                            value: r,
                            visibleDecimals: 2,
                            symbol: 'usd',
                          }),
                        ],
                      }),
                      (0, k.jsx)(A.G, {
                        children: (0, k.jsxs)(F.Z, {
                          direction: 'column',
                          gap: 2,
                          sx: { width: '100%', minWidth: '160px' },
                          children: [
                            (0, k.jsx)(Q.X, {
                              caption: (0, k.jsx)(g.Z, {
                                variant: 'secondary12',
                                sx: { ml: 1 },
                                children: (0, k.jsx)(d.cC, { id: 'ogU9GD' }),
                              }),
                              children: (0, k.jsx)(ie.B, {
                                variant: 'caption',
                                value: a,
                                visibleDecimals: 2,
                                symbol: 'usd',
                              }),
                            }),
                            (0, k.jsx)(Q.X, {
                              caption: (0, k.jsxs)(F.Z, {
                                direction: 'column',
                                children: [
                                  (0, k.jsx)(g.Z, {
                                    variant: 'secondary12',
                                    sx: { ml: 1 },
                                    children: (0, k.jsx)(d.cC, { id: '+5vxU4' }),
                                  }),
                                  (0, k.jsxs)(g.Z, {
                                    variant: 'helperText',
                                    sx: { ml: 1, fontStyle: 'italic' },
                                    children: ['(', (0, k.jsx)(d.cC, { id: 'zNgzxM' }), ')'],
                                  }),
                                ],
                              }),
                              children: (0, k.jsx)(ie.B, {
                                sx: { alignSelf: 'start' },
                                variant: 'caption',
                                value: i,
                                percent: !0,
                              }),
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        Pe = function (e) {
          var t = (0, E.Z)({}, e),
            n = (0, y.Y)(
              (0, v.N)(function (e) {
                return [e.currentNetworkConfig];
              })
            ),
            r = (0, c.Z)(n, 1)[0];
          return (0, k.jsxs)(ee.o, {
            children: [
              (0, k.jsx)(Z.h, {
                isRow: !0,
                children: (0, k.jsx)(Ae, {
                  iconSymbol: t.iconSymbol,
                  symbol: t.symbol,
                  totalAmountStakedUSD: t.formattedStakeTokenData.totalAmountStakedUSD,
                  targetLiquidityUSD: t.formattedStakeTokenData.targetLiquidityUSD,
                  apyAtTargetLiquidity: t.totalRewardApyAtTargetLiquidity,
                  explorerUrl: ''.concat(r.explorerLink, '/address/').concat(t.tokenAddress),
                }),
              }),
              (0, k.jsx)(Q.X, {
                mt: 2,
                caption: (0, k.jsx)(P, {}),
                captionVariant: 'description',
                mb: 3,
                children: (0, k.jsx)(b.Z, {
                  sx: {
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: { xs: 'flex-end' },
                    justifyContent: 'center',
                    textAlign: 'center',
                  },
                  children: (0, k.jsx)(De, { stakeData: t, isMobile: !0 }),
                }),
              }),
              (0, k.jsx)(Q.X, {
                caption: (0, k.jsx)(d.cC, { id: '6TdrO+' }),
                captionVariant: 'description',
                mb: 3,
                align: 'flex-start',
                children: (0, k.jsx)(ce, { stakeData: t }),
              }),
              (0, k.jsx)(Q.X, {
                caption: (0, k.jsx)(d.cC, { id: 'TQ7WsV' }),
                captionVariant: 'description',
                mb: 3,
                align: 'flex-start',
                children: (0, k.jsx)(ke, { stakeData: t, isMobile: !0 }),
              }),
              (0, k.jsx)(Q.X, {
                caption: (0, k.jsx)(d.cC, { id: 'kIC28N' }),
                captionVariant: 'description',
                mb: 3,
                children: (0, k.jsx)(b.Z, {
                  sx: {
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: { xs: 'flex-end' },
                    justifyContent: 'center',
                    textAlign: 'center',
                  },
                  children: (0, k.jsx)(be, { stakeData: t, isMobile: !0 }),
                }),
              }),
              (0, k.jsx)(J, { stakeData: t }),
            ],
          });
        },
        Be = function () {
          return (0, k.jsxs)(ee.o, {
            children: [
              (0, k.jsx)(Z.h, {
                isRow: !0,
                children: (0, k.jsxs)(F.Z, {
                  direction: 'row',
                  alignItems: 'center',
                  height: 40,
                  children: [
                    (0, k.jsx)(B.Z, { variant: 'circular', width: 32, height: 32 }),
                    (0, k.jsx)(b.Z, {
                      sx: { pl: 2, overflow: 'hidden' },
                      children: (0, k.jsx)(B.Z, { width: 150, height: 28 }),
                    }),
                  ],
                }),
              }),
              (0, k.jsx)(Q.X, {
                caption: (0, k.jsx)(B.Z, { width: 80, height: 20 }),
                captionVariant: 'description',
                mt: 3,
                mb: 3,
                align: 'flex-start',
                children: (0, k.jsx)(B.Z, { width: 100, height: 20 }),
              }),
              (0, k.jsx)(Q.X, {
                caption: (0, k.jsx)(B.Z, { width: 135, height: 20 }),
                mb: 6,
                children: (0, k.jsx)(B.Z, { width: 55, height: 38 }),
              }),
              (0, k.jsx)(Q.X, {
                caption: (0, k.jsx)(B.Z, { width: 120, height: 20 }),
                captionVariant: 'description',
                mb: 4,
                align: 'flex-start',
                children: (0, k.jsx)(B.Z, { width: 110, height: 20 }),
              }),
              (0, k.jsx)(Q.X, {
                caption: (0, k.jsx)(B.Z, { width: 120, height: 20 }),
                captionVariant: 'description',
                mb: 4,
                align: 'flex-start',
                children: (0, k.jsx)(B.Z, { width: 75, height: 20 }),
              }),
              (0, k.jsx)(B.Z, { width: '100%', height: 38 }),
            ],
          });
        },
        Ie = function (e) {
          var t = (0, E.Z)({}, e),
            n = (0, y.Y)(
              (0, v.N)(function (e) {
                return [e.currentNetworkConfig];
              })
            ),
            r = (0, c.Z)(n, 1)[0];
          return (0, k.jsxs)(I.H, {
            px: 6,
            minHeight: 76,
            sx: { cursor: 'default' },
            button: !0,
            children: [
              (0, k.jsx)(Z.h, {
                isRow: !0,
                minWidth: 275,
                children: (0, k.jsx)(Ae, {
                  iconSymbol: t.iconSymbol,
                  symbol: t.symbol,
                  totalAmountStakedUSD: t.formattedStakeTokenData.totalAmountStakedUSD,
                  targetLiquidityUSD: t.formattedStakeTokenData.targetLiquidityUSD,
                  apyAtTargetLiquidity: t.totalRewardApyAtTargetLiquidity,
                  explorerUrl: ''.concat(r.explorerLink, '/address/').concat(t.tokenAddress),
                }),
              }),
              (0, k.jsx)(Z.h, { children: (0, k.jsx)(De, { stakeData: t }) }),
              (0, k.jsx)(Z.h, { children: (0, k.jsx)(ce, { stakeData: t }) }),
              (0, k.jsx)(Z.h, { children: (0, k.jsx)(ke, { stakeData: t }) }),
              (0, k.jsx)(Z.h, { children: (0, k.jsx)(be, { stakeData: t }) }),
              (0, k.jsx)(Z.h, { children: (0, k.jsx)(J, { stakeData: t }) }),
            ],
          });
        };
      function Le(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function Ee(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Le(Object(n), !0).forEach(function (t) {
                (0, S.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : Le(Object(n)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
        }
        return e;
      }
      var Re = [
        { title: (0, k.jsx)(d.cC, { id: 'bUUVED' }), sortKey: 'symbol' },
        { title: (0, k.jsx)(P, {}), sortKey: 'totalAPY' },
        { title: (0, k.jsx)(d.cC, { id: 'fgRo1l' }), sortKey: 'stakeTokenBalance' },
        { title: (0, k.jsx)(d.cC, { id: '6lFSyT' }), sortKey: 'totalAvailableToStake' },
        { title: (0, k.jsx)(d.cC, { id: 'hIJzBh' }), sortKey: 'totalAvailableToClaim' },
        { title: (0, k.jsx)(k.Fragment, {}) },
      ];
      function Ue(e) {
        var t = e.loading,
          n = e.stakedDataWithTokenBalances,
          r = e.isLoadingStakedDataWithTokenBalances,
          a = (0, x.Z)('(max-width:1125px)'),
          i = (0, o.useState)(''),
          s = i[0],
          l = i[1],
          c = (0, o.useState)(!1),
          d = c[0],
          u = c[1],
          m = (0, o.useMemo)(
            function () {
              return n
                ? (0, T.Z)(n).sort(function (e, t) {
                    if ('symbol' === s)
                      return d
                        ? t.symbol.localeCompare(e.symbol)
                        : e.symbol.localeCompare(t.symbol);
                    if ('totalAPY' === s) {
                      var n = Number(e.totalRewardApy),
                        r = Number(t.totalRewardApy);
                      return d ? r - n : n - r;
                    }
                    if ('totalAvailableToClaim' === s) {
                      var a,
                        i,
                        o =
                          (null === (a = e.formattedRewards) || void 0 === a
                            ? void 0
                            : a.reduce(function (e, t) {
                                return e + Number(t.accrued || '0');
                              }, 0)) || 0,
                        l =
                          (null === (i = t.formattedRewards) || void 0 === i
                            ? void 0
                            : i.reduce(function (e, t) {
                                return e + Number(t.accrued || '0');
                              }, 0)) || 0;
                      return d ? l - o : o - l;
                    }
                    if ('totalAvailableToStake' === s) {
                      var c = Number(e.formattedBalances.totalAvailableToStake),
                        u = Number(t.formattedBalances.totalAvailableToStake);
                      return d ? u - c : c - u;
                    }
                    if ('stakeTokenBalance' === s) {
                      var x,
                        m,
                        h = Number(
                          (null === (x = e.formattedBalances) || void 0 === x
                            ? void 0
                            : x.stakeTokenBalance) || '0'
                        ),
                        p = Number(
                          (null === (m = t.formattedBalances) || void 0 === m
                            ? void 0
                            : m.stakeTokenBalance) || '0'
                        );
                      return d ? p - h : h - p;
                    }
                    return 0;
                  })
                : [];
            },
            [n, s, d]
          );
        return t || r
          ? a
            ? (0, k.jsxs)(k.Fragment, {
                children: [(0, k.jsx)(Be, {}), (0, k.jsx)(Be, {}), (0, k.jsx)(Be, {})],
              })
            : (0, k.jsxs)(b.Z, {
                mt: 11,
                children: [
                  (0, k.jsx)(L, {}),
                  (0, k.jsx)(L, {}),
                  (0, k.jsx)(L, {}),
                  (0, k.jsx)(L, {}),
                ],
              })
          : void 0 == n || 0 === n.length
            ? null
            : (0, k.jsxs)(k.Fragment, {
                children: [
                  !a &&
                    (0, k.jsx)(C.u, {
                      px: 6,
                      children: Re.map(function (e) {
                        return (0, k.jsx)(
                          Z.h,
                          {
                            isRow: 'symbol' === e.sortKey,
                            minWidth: 'symbol' === e.sortKey ? 275 : void 0,
                            children: (0, k.jsx)(D.M, {
                              sortName: s,
                              sortDesc: d,
                              setSortName: l,
                              setSortDesc: u,
                              sortKey: e.sortKey,
                              children: e.title,
                            }),
                          },
                          e.sortKey
                        );
                      }),
                    }),
                  m.map(function (e, t) {
                    return a
                      ? (0, o.createElement)(Pe, Ee(Ee({}, e), {}, { key: t }))
                      : (0, o.createElement)(Ie, Ee(Ee({}, e), {}, { key: t }));
                  }),
                ],
              });
      }
      var Ne = function () {
          var e = (0, f.HT)().loading,
            t = (0, y.Y)(
              (0, v.N)(function (e) {
                return [e.currentMarketData];
              })
            ),
            n = (0, c.Z)(t, 1)[0],
            r = (0, j.t)(n),
            a = r.data,
            i = r.loading,
            s = (0, o.useState)(''),
            l = s[0],
            b = s[1],
            g = (0, u.Z)().breakpoints,
            S = (0, x.Z)(g.down('sm')),
            T =
              null === a || void 0 === a
                ? void 0
                : a.stakeData.filter(function (e) {
                    if (!l) return !0;
                    var t = l.toLowerCase().trim();
                    return (
                      e.name.toLowerCase().includes(t) || e.iconSymbol.toLowerCase().includes(t)
                    );
                  }),
            Z = !i && !a;
          return (0, k.jsxs)(m.l, {
            titleComponent: (0, k.jsx)(p._, {
              onSearchTermChange: b,
              title: (0, k.jsx)(d.cC, { id: 'ZiXN+B' }),
              searchPlaceholder: S ? 'Search asset' : 'Search asset name or symbol',
            }),
            children: [
              (0, k.jsx)(Ue, {
                loading: e,
                isLoadingStakedDataWithTokenBalances: i,
                stakedDataWithTokenBalances: null !== T && void 0 !== T ? T : [],
              }),
              Z
                ? (0, k.jsx)(w, {})
                : !e &&
                  !i &&
                  0 === (null === T || void 0 === T ? void 0 : T.length) &&
                  (0, k.jsx)(h.q, { searchTerm: l, subtitle: (0, k.jsx)(d.cC, { id: 'ZrEc8j' }) }),
            ],
          });
        },
        Me = function () {
          return (0, k.jsx)(m.l, {
            titleComponent: (0, k.jsx)(g.Z, {
              variant: 'h2',
              children: (0, k.jsx)(d.cC, { id: 'ZiXN+B' }),
            }),
            children: (0, k.jsx)(Ve, {}),
          });
        },
        Ve = function () {
          var e = (0, y.Y)(
              (0, v.N)(function (e) {
                return [e.currentMarketData];
              })
            ),
            t = (0, c.Z)(e, 1)[0],
            n = (0, j.C)(t),
            r = n.data,
            a = n.loading,
            i = (0, x.Z)('(max-width:1125px)');
          return a
            ? i
              ? (0, k.jsxs)(k.Fragment, {
                  children: [
                    (0, k.jsx)(_e, {}),
                    (0, k.jsx)(_e, {}),
                    (0, k.jsx)(_e, {}),
                    (0, k.jsx)(_e, {}),
                  ],
                })
              : (0, k.jsxs)(b.Z, {
                  pt: 10,
                  children: [
                    (0, k.jsx)(We, {}),
                    (0, k.jsx)(We, {}),
                    (0, k.jsx)(We, {}),
                    (0, k.jsx)(We, {}),
                  ],
                })
            : a || (r && 0 !== r.stakeAssets.length)
              ? (0, k.jsxs)(k.Fragment, {
                  children: [
                    !i &&
                      (0, k.jsxs)(C.u, {
                        children: [
                          (0, k.jsx)(Z.h, {
                            isRow: !0,
                            children: (0, k.jsx)(D.M, {
                              children: (0, k.jsx)(d.cC, { id: 'bUUVED' }),
                            }),
                          }),
                          (0, k.jsx)(Z.h, {
                            children: (0, k.jsx)(D.M, {
                              children: (0, k.jsx)(d.cC, { id: 'rSayea' }),
                            }),
                          }),
                        ],
                      }),
                    r &&
                      r.stakeAssets.map(function (e, t) {
                        return i
                          ? (0, k.jsx)(qe, { stakeData: e }, t)
                          : (0, k.jsx)(Fe, { stakeData: e }, t);
                      }),
                  ],
                })
              : (0, k.jsx)(w, {});
        },
        Fe = function (e) {
          var t = e.stakeData,
            n = (0, y.Y)(
              (0, v.N)(function (e) {
                return [e.currentNetworkConfig];
              })
            ),
            r = (0, c.Z)(n, 1)[0];
          return (0, k.jsxs)(I.H, {
            children: [
              (0, k.jsx)(Z.h, {
                isRow: !0,
                minWidth: 275,
                children: (0, k.jsx)(Ae, {
                  iconSymbol: t.iconSymbol,
                  symbol: t.symbol,
                  totalAmountStakedUSD: t.totalSupplyUsd,
                  targetLiquidityUSD: t.targetLiquidityUSD,
                  apyAtTargetLiquidity: t.totalRewardApyAtTargetLiquidity,
                  explorerUrl: ''.concat(r.explorerLink, '/address/').concat(t.tokenAddress),
                }),
              }),
              (0, k.jsx)(Z.h, {
                children: (0, k.jsx)(ie.B, {
                  value: t.totalRewardApy,
                  percent: !0,
                  variant: 'main16',
                  visibleDecimals: 2,
                }),
              }),
            ],
          });
        },
        qe = function (e) {
          var t = e.stakeData,
            n = (0, y.Y)(
              (0, v.N)(function (e) {
                return [e.currentNetworkConfig];
              })
            ),
            r = (0, c.Z)(n, 1)[0];
          return (0, k.jsxs)(ee.o, {
            children: [
              (0, k.jsx)(Z.h, {
                isRow: !0,
                children: (0, k.jsx)(Ae, {
                  iconSymbol: t.iconSymbol,
                  symbol: t.symbol,
                  totalAmountStakedUSD: t.totalSupplyUsd,
                  targetLiquidityUSD: t.targetLiquidityUSD,
                  apyAtTargetLiquidity: t.totalRewardApyAtTargetLiquidity,
                  explorerUrl: ''.concat(r.explorerLink, '/address/').concat(t.tokenAddress),
                }),
              }),
              (0, k.jsx)(Q.X, {
                mt: 8,
                px: 2,
                caption: (0, k.jsx)(d.cC, { id: 'ciSsYT' }),
                captionVariant: 'description',
                mb: 3,
                children: (0, k.jsx)(b.Z, {
                  sx: {
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: { xs: 'flex-end' },
                    justifyContent: 'center',
                    textAlign: 'center',
                  },
                  children: (0, k.jsx)(ie.B, {
                    value: t.totalRewardApy,
                    percent: !0,
                    variant: 'secondary14',
                    visibleDecimals: 2,
                  }),
                }),
              }),
            ],
          });
        },
        We = function () {
          return (0, k.jsxs)(I.H, {
            px: 4,
            minHeight: 76,
            children: [
              (0, k.jsxs)(Z.h, {
                isRow: !0,
                minWidth: 275,
                children: [
                  (0, k.jsx)(B.Z, { variant: 'circular', width: 32, height: 32 }),
                  (0, k.jsx)(b.Z, {
                    sx: { pl: 2, overflow: 'hidden' },
                    children: (0, k.jsx)(B.Z, { width: 150, height: 28 }),
                  }),
                ],
              }),
              (0, k.jsx)(Z.h, { children: (0, k.jsx)(B.Z, { width: 50, height: 28 }) }),
            ],
          });
        },
        _e = function () {
          return (0, k.jsxs)(ee.o, {
            children: [
              (0, k.jsx)(Z.h, {
                isRow: !0,
                children: (0, k.jsxs)(F.Z, {
                  direction: 'row',
                  alignItems: 'center',
                  height: 40,
                  children: [
                    (0, k.jsx)(B.Z, { variant: 'circular', width: 32, height: 32 }),
                    (0, k.jsx)(b.Z, {
                      sx: { pl: 2, overflow: 'hidden' },
                      children: (0, k.jsx)(B.Z, { width: 150, height: 28 }),
                    }),
                  ],
                }),
              }),
              (0, k.jsx)(Q.X, {
                mt: 8,
                mb: 3,
                px: 2,
                caption: (0, k.jsx)(B.Z, { width: 100, height: 20 }),
                captionVariant: 'description',
                align: 'flex-start',
                children: (0, k.jsx)(B.Z, { width: 45, height: 20 }),
              }),
            ],
          });
        },
        ze = n(33329),
        Ke = n(72005),
        He = n(81391),
        Xe = n(61782),
        Ye = n(34386),
        Ge = n(77931),
        $e = n(53219),
        Je = n(59334),
        Qe = n(79850);
      function et(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function tt(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? et(Object(n), !0).forEach(function (t) {
                (0, S.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : et(Object(n)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
        }
        return e;
      }
      var nt,
        rt = function (e) {
          var t = Qe.ei[e],
            n = Qe.m5[t.chainId];
          return { market: t, logo: t.logo || n.networkLogoPath };
        },
        at = function (e) {
          var t = [
              'G\xf6rli',
              'Ropsten',
              'Mumbai',
              'Sepolia',
              'Fuji',
              'Testnet',
              'Kovan',
              'Rinkeby',
            ],
            n = e.split(' '),
            r = n.filter(function (e) {
              return t.indexOf(e) > -1;
            });
          return {
            name: n
              .filter(function (e) {
                return !r.includes(e);
              })
              .join(' '),
            testChainName: r[0],
          };
        },
        it = function (e) {
          var t = e.size,
            n = e.logo,
            r = e.testChainName,
            a = e.sx;
          return (0, k.jsxs)(b.Z, {
            sx: tt({ mr: 2, width: t, height: t, position: 'relative' }, a),
            children: [
              (0, k.jsx)('img', { src: n, alt: '', width: '100%', height: '100%' }),
              r &&
                (0, k.jsx)(Ye.Z, {
                  title: r,
                  arrow: !0,
                  children: (0, k.jsx)(b.Z, {
                    sx: {
                      bgcolor: '#29B6F6',
                      width: '16px',
                      height: '16px',
                      borderRadius: '50%',
                      color: 'common.white',
                      fontSize: '12px',
                      lineHeight: '16px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      position: 'absolute',
                      right: '-2px',
                      bottom: '-2px',
                    },
                    children: r.split('')[0],
                  }),
                }),
            ],
          });
        };
      !(function (e) {
        (e[(e.V2 = 0)] = 'V2'), (e[(e.V3 = 1)] = 'V3');
      })(nt || (nt = {}));
      var ot = function () {
          var e = (0, o.useState)(nt.V3)[0],
            t = (0, u.Z)(),
            n = (0, x.Z)(t.breakpoints.up('lg')),
            r = (0, x.Z)(t.breakpoints.down('xsm')),
            a = (0, y.Y)(
              (0, v.N)(function (e) {
                return [e.trackEvent, e.currentMarket, e.setCurrentMarket];
              })
            ),
            i = (0, c.Z)(a, 3),
            s = i[0],
            l = i[1],
            m = i[2],
            h = Qe.z2
              .map(function (e) {
                return rt(e).market.v3;
              })
              .some(function (e) {
                return !!e;
              });
          return (0, k.jsxs)(Ge.Z, {
            select: !0,
            'aria-label': 'select market',
            'data-cy': 'marketSelector',
            value: l,
            onChange: function (e) {
              s(G.h1.CHANGE_MARKET, { market: e.target.value }), m(e.target.value);
            },
            sx: { mr: 2, '& .MuiOutlinedInput-notchedOutline': { border: 'none' } },
            SelectProps: {
              native: !1,
              className: 'MarketSwitcher__select',
              IconComponent: function () {
                return null;
              },
              renderValue: function (e) {
                var t = rt(e),
                  a = t.market,
                  i = t.logo;
                return (0, k.jsx)(b.Z, {
                  children: (0, k.jsxs)(b.Z, {
                    sx: { display: 'flex', alignItems: 'center' },
                    children: [
                      (0, k.jsx)(it, {
                        size: n ? 32 : 28,
                        logo: i,
                        testChainName: at(a.marketTitle).testChainName,
                      }),
                      (0, k.jsxs)(b.Z, {
                        sx: { display: 'flex', alignItems: 'center', gap: 1 },
                        children: [
                          (0, k.jsxs)(g.Z, {
                            variant: n ? 'display1' : 'h1',
                            sx: { fontSize: r ? '1.55rem' : void 0, color: 'common.white', mr: 1 },
                            children: [at(a.marketTitle).name, ' ', a.isFork ? 'Fork' : ''],
                          }),
                          (0, k.jsx)(b.Z, {
                            sx: { display: 'flex', alignItems: 'center' },
                            children: (0, k.jsx)($e.Z, {
                              fontSize: 'medium',
                              sx: { ml: 1, color: '#F1F1F3' },
                              children: (0, k.jsx)(Xe.Z, {}),
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                });
              },
              sx: {
                '&.MarketSwitcher__select .MuiSelect-outlined': {
                  pl: 0,
                  py: 0,
                  backgroundColor: 'transparent !important',
                },
                '.MuiSelect-icon': { color: '#F1F1F3' },
              },
              MenuProps: {
                anchorOrigin: { vertical: 'bottom', horizontal: 'right' },
                transformOrigin: { vertical: 'top', horizontal: 'right' },
                PaperProps: { style: { minWidth: 240 }, variant: 'outlined', elevation: 0 },
              },
            },
            children: [
              (0, k.jsx)(b.Z, {
                children: (0, k.jsx)(g.Z, {
                  variant: 'subheader2',
                  color: 'text.secondary',
                  sx: { px: 4, pt: 2 },
                  children: (0, k.jsx)(d.cC, {
                    id: 'J/hVSQ',
                    values: {
                      0: Qe.p8 || Qe.aV ? 'Select Aave Testnet Market' : 'Select Aave Market',
                    },
                  }),
                }),
              }),
              h &&
                (0, k.jsx)(b.Z, { sx: { mx: '18px', display: 'flex', justifyContent: 'center' } }),
              Qe.z2.map(function (t) {
                var n = rt(t),
                  r = n.market,
                  a = n.logo,
                  i = at(r.marketTitle);
                return (0, k.jsxs)(
                  _.Z,
                  {
                    'data-cy': 'marketSelector_'.concat(t),
                    value: t,
                    sx: {
                      '.MuiListItemIcon-root': { minWidth: 'unset' },
                      display: (r.v3 && e === nt.V2) || (!r.v3 && e === nt.V3) ? 'none' : 'flex',
                    },
                    children: [
                      (0, k.jsx)(it, { size: 32, logo: a, testChainName: i.testChainName }),
                      (0, k.jsxs)(Je.Z, {
                        sx: { mr: 0 },
                        children: [i.name, ' ', r.isFork ? 'Fork' : ''],
                      }),
                      (0, k.jsx)(Je.Z, {
                        sx: { textAlign: 'right' },
                        children: (0, k.jsx)(g.Z, {
                          color: 'text.muted',
                          variant: 'description',
                          children: i.testChainName,
                        }),
                      }),
                    ],
                  },
                  t
                );
              }),
            ],
          });
        },
        st = function () {
          var e = (0, u.Z)(),
            t = (0, Ke.Z)().currentAccount,
            n = (0, y.Y)(
              (0, v.N)(function (e) {
                return [e.currentMarketData, e.trackEvent];
              })
            ),
            r = (0, c.Z)(n, 2),
            a = r[0],
            i = r[1],
            o = (0, x.Z)(e.breakpoints.up('lg')),
            s = (0, x.Z)(e.breakpoints.down('sm')),
            l = (0, x.Z)(e.breakpoints.down('xsm')),
            m = s ? 'main16' : 'main21',
            h = s ? 'secondary16' : 'secondary21';
          return (0, k.jsx)(ze.f, {
            titleComponent: (0, k.jsxs)(b.Z, {
              mb: 4,
              children: [
                (0, k.jsxs)(b.Z, {
                  sx: { display: 'flex', alignItems: 'center', mb: 4 },
                  children: [
                    (0, k.jsx)(g.Z, {
                      variant: l ? 'h2' : o ? 'display1' : 'h1',
                      sx: { ml: 2, mr: 3 },
                      children: (0, k.jsx)(d.cC, { id: 'KsqhWn' }),
                    }),
                    (0, k.jsx)(ot, {}),
                  ],
                }),
                (0, k.jsxs)(g.Z, {
                  sx: { color: '#8E92A3', maxWidth: '824px' },
                  children: [
                    (0, k.jsx)(d.cC, { id: 'zr58Jd' }),
                    ' ',
                    (0, k.jsx)(O.rU, {
                      href: '/safety-module',
                      sx: { textDecoration: 'underline', color: '#8E92A3' },
                      children: (0, k.jsx)(d.cC, { id: 'jqVo/k' }),
                    }),
                    (0, k.jsx)('br', {}),
                    (0, k.jsx)('br', {}),
                    (0, k.jsx)(d.cC, { id: 'DhaOWH' }),
                    ' ',
                    (0, k.jsx)(O.rU, {
                      href: 'https://aave.com/docs/primitives/umbrella',
                      sx: { textDecoration: 'underline', color: '#8E92A3' },
                      onClick: function () {
                        return i(G.vh.EXTERNAL_LINK, { Link: 'Staking Risks' });
                      },
                      children: (0, k.jsx)(d.cC, { id: '1PMU2v' }),
                    }),
                  ],
                }),
              ],
            }),
            children: t
              ? (0, k.jsx)(lt, {
                  currentMarketData: a,
                  valueTypographyVariant: m,
                  symbolsTypographyVariant: h,
                })
              : (0, k.jsx)(ct, {
                  currentMarketData: a,
                  valueTypographyVariant: m,
                  symbolsTypographyVariant: h,
                }),
          });
        },
        lt = function (e) {
          var t = e.currentMarketData,
            n = e.valueTypographyVariant,
            r = e.symbolsTypographyVariant,
            a = (0, j.t)(t),
            i = a.data,
            o = a.loading,
            s = (0, Y.vR)().openUmbrellaClaimAll,
            l = null === i || void 0 === i ? void 0 : i.aggregatedTotalStakedUSD,
            c = null === i || void 0 === i ? void 0 : i.weightedAverageApy,
            u =
              null === i || void 0 === i
                ? void 0
                : i.stakeData.reduce(function (e, t) {
                    return (
                      e +
                      t.formattedRewards.reduce(function (e, t) {
                        return e + Number(t.accruedUsd || '0');
                      }, 0)
                    );
                  }, 0),
            x = void 0 !== u && u > 0 && !o;
          return (0, k.jsxs)(k.Fragment, {
            children: [
              (0, k.jsx)(He.d, {
                hideIcon: !0,
                title: (0, k.jsx)(F.Z, {
                  direction: 'row',
                  alignItems: 'center',
                  children: (0, k.jsx)(d.cC, { id: 'i/fZ2Z' }),
                }),
                loading: o,
                children: (0, k.jsx)(ie.B, {
                  value: l || '0',
                  symbol: 'USD',
                  variant: n,
                  symbolsVariant: r,
                  symbolsColor: '#A5A8B6',
                  visibleDecimals: 2,
                }),
              }),
              (0, k.jsx)(He.d, {
                hideIcon: !0,
                title: (0, k.jsx)(d.cC, { id: 'hIS4N0' }),
                loading: o,
                children: (0, k.jsx)(ie.B, {
                  value: c || 0,
                  variant: n,
                  symbolsColor: '#A5A8B6',
                  visibleDecimals: 2,
                  percent: !0,
                  symbolsVariant: r,
                }),
              }),
              x &&
                (0, k.jsx)(He.d, {
                  title: (0, k.jsx)(d.cC, { id: '5rsnKT' }),
                  loading: o,
                  hideIcon: !0,
                  children: (0, k.jsxs)(b.Z, {
                    sx: {
                      display: 'flex',
                      alignItems: { xs: 'flex-start', xsm: 'center' },
                      flexDirection: { xs: 'column', xsm: 'row' },
                    },
                    children: [
                      (0, k.jsx)(b.Z, {
                        sx: { display: 'inline-flex', alignItems: 'center' },
                        children: (0, k.jsx)(ie.B, {
                          value: u,
                          variant: n,
                          visibleDecimals: 2,
                          compact: !0,
                          symbol: 'USD',
                          symbolsColor: '#A5A8B6',
                          symbolsVariant: r,
                        }),
                      }),
                      (0, k.jsx)(V.Z, {
                        variant: 'gradient',
                        size: 'small',
                        onClick: function () {
                          return s();
                        },
                        sx: { minWidth: 'unset', ml: { xs: 0, xsm: 2 } },
                        children: (0, k.jsx)(d.cC, { id: 'hom7qf' }),
                      }),
                    ],
                  }),
                }),
            ],
          });
        },
        ct = function (e) {
          var t = e.currentMarketData,
            n = e.valueTypographyVariant,
            r = e.symbolsTypographyVariant,
            a = (0, j.C)(t),
            i = a.data,
            o = a.loading;
          return (0, k.jsx)(k.Fragment, {
            children: (0, k.jsx)(He.d, {
              hideIcon: !0,
              title: (0, k.jsx)(F.Z, {
                direction: 'row',
                alignItems: 'center',
                children: (0, k.jsx)(d.cC, { id: '4p5njr' }),
              }),
              loading: o,
              children: (0, k.jsx)(ie.B, {
                value:
                  (null === i || void 0 === i ? void 0 : i.allStakeAssetsToatlSupplyUsd) || '0',
                symbol: 'USD',
                variant: n,
                visibleDecimals: 2,
                compact: !0,
                symbolsColor: '#A5A8B6',
                symbolsVariant: r,
              }),
            }),
          });
        },
        dt = i()(
          function () {
            return Promise.all([
              n.e(7333),
              n.e(7440),
              n.e(1998),
              n.e(6138),
              n.e(1790),
              n.e(1150),
              n.e(5195),
              n.e(7310),
              n.e(315),
            ])
              .then(n.bind(n, 26291))
              .then(function (e) {
                return e.UmbrellaModal;
              });
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [26291];
              },
            },
          }
        ),
        ut = i()(
          function () {
            return Promise.all([n.e(1998), n.e(6138), n.e(6543), n.e(1697)])
              .then(n.bind(n, 1610))
              .then(function (e) {
                return e.StakeCooldownModal;
              });
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [1610];
              },
            },
          }
        ),
        xt = i()(
          function () {
            return Promise.all([n.e(7333), n.e(6138), n.e(3807), n.e(7015)])
              .then(n.bind(n, 2880))
              .then(function (e) {
                return e.StakeRewardClaimModal;
              });
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [2880];
              },
            },
          }
        ),
        mt = i()(
          function () {
            return Promise.all([n.e(7333), n.e(6138), n.e(1790), n.e(1150), n.e(7531), n.e(3587)])
              .then(n.bind(n, 40890))
              .then(function (e) {
                return e.StakeRewardClaimRestakeModal;
              });
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [40890];
              },
            },
          }
        ),
        ht = i()(
          function () {
            return Promise.all([
              n.e(7333),
              n.e(7440),
              n.e(6138),
              n.e(1790),
              n.e(1150),
              n.e(5195),
              n.e(7310),
              n.e(2772),
            ])
              .then(n.bind(n, 11100))
              .then(function (e) {
                return e.UnStakeModal;
              });
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [11100];
              },
            },
          }
        ),
        pt = i()(
          function () {
            return Promise.all([n.e(6138), n.e(1790), n.e(1150), n.e(5195), n.e(7977)])
              .then(n.bind(n, 13352))
              .then(function (e) {
                return e.UmbrellaClaimModal;
              });
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [13352];
              },
            },
          }
        );
      function ft() {
        var e = (0, Ke.Z)().currentAccount,
          t = (0, y.Y)(function (e) {
            return e.trackEvent;
          });
        return (
          (0, o.useEffect)(
            function () {
              t('Page Viewed', { 'Page Name': 'Staking' });
            },
            [t]
          ),
          (0, k.jsxs)(k.Fragment, {
            children: [
              (0, k.jsx)(st, {}),
              (0, k.jsx)(s.O, { children: e ? (0, k.jsx)(Ne, {}) : (0, k.jsx)(Me, {}) }),
            ],
          })
        );
      }
      ft.getLayout = function (e) {
        return (0, k.jsxs)(l.Z, {
          children: [
            e,
            (0, k.jsx)(dt, {}),
            (0, k.jsx)(ut, {}),
            (0, k.jsx)(ht, {}),
            (0, k.jsx)(xt, {}),
            (0, k.jsx)(mt, {}),
            (0, k.jsx)(pt, {}),
          ],
        });
      };
    },
    64283: function (e, t, n) {
      'use strict';
      n.d(t, {
        O: function () {
          return o;
        },
      });
      var r = n(80822),
        a = n(65582),
        i = n(85893),
        o = function (e) {
          var t = e.children;
          return (0, i.jsx)(r.Z, {
            sx: {
              display: 'flex',
              flexDirection: 'column',
              flex: 1,
              mt: { xs: '-32px', lg: '-46px', xl: '-44px', xxl: '-48px' },
            },
            children: (0, i.jsx)(a.Z, { children: t }),
          });
        };
    },
    68860: function (e, t, n) {
      'use strict';
      n.d(t, {
        q: function () {
          return c;
        },
      });
      var r = n(89555),
        a = n(2734),
        i = n(61730),
        o = n(80822),
        s = n(15861),
        l = n(85893),
        c = function (e) {
          var t = e.searchTerm,
            n = e.subtitle,
            c = (0, a.Z)().breakpoints,
            d = (0, i.Z)(c.down('sm'));
          return (0, l.jsxs)(o.Z, {
            sx: {
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 1,
              pt: 15,
              pb: 32,
              px: 4,
            },
            children: [
              d
                ? (0, l.jsxs)(o.Z, {
                    sx: { textAlign: 'center', maxWidth: '300px' },
                    children: [
                      (0, l.jsx)(s.Z, {
                        variant: 'h2',
                        children: r.ag._({ id: 'u8Gfu7', values: { 0: t && ' for' } }),
                      }),
                      t &&
                        (0, l.jsxs)(s.Z, {
                          sx: { overflowWrap: 'anywhere' },
                          variant: 'h2',
                          children: ["'", t, "'"],
                        }),
                    ],
                  })
                : (0, l.jsx)(s.Z, {
                    sx: { textAlign: 'center', maxWidth: '480px', overflowWrap: 'anywhere' },
                    variant: 'h2',
                    children: r.ag._({ id: 'u8Gfu7', values: { 0: t && " for '".concat(t, "'") } }),
                  }),
              n &&
                (0, l.jsx)(s.Z, {
                  sx: { width: '280px', textAlign: 'center' },
                  variant: 'description',
                  color: 'text.secondary',
                  children: n,
                }),
            ],
          });
        };
    },
    85078: function (e, t, n) {
      'use strict';
      n.d(t, {
        i: function () {
          return l;
        },
      });
      var r = n(57499),
        a = n(15861),
        i = n(80822),
        o = (n(67294), n(32867)),
        s = n(85893);
      function l(e) {
        var t = e.value,
          n = e.rightAlign;
        return (0, s.jsx)(i.Z, {
          sx: {
            p: n ? { xs: '0', xsm: '2px 0' } : { xs: '0', xsm: '3.625px 0px' },
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
          },
          children:
            'Disabled' === t
              ? (0, s.jsxs)(a.Z, {
                  component: 'span',
                  sx: { mr: 0.5 },
                  variant: 'secondary12',
                  color: 'text.muted',
                  children: ['(', (0, s.jsx)(r.cC, { id: 'E/QGRL' }), ')'],
                })
              : (0, s.jsx)(o.B, {
                  compact: !0,
                  value: t,
                  variant: 'secondary12',
                  color: 'text.secondary',
                  symbolsVariant: 'secondary12',
                  symbolsColor: 'text.secondary',
                  symbol: 'USD',
                }),
        });
      }
    },
    10818: function (e, t, n) {
      'use strict';
      n.d(t, {
        M: function () {
          return f;
        },
      });
      var r = n(59499),
        a = n(53737),
        i = n(33740),
        o = n(2734),
        s = n(61730),
        l = n(80822),
        c = n(73601),
        d = n(93946),
        u = n(23279),
        x = n.n(u),
        m = n(67294),
        h = n(85893);
      function p(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      var f = function (e) {
        var t = e.onSearchTermChange,
          n = e.wrapperSx,
          u = e.placeholder,
          f = e.disableFocus,
          j = (0, m.useRef)(null),
          y = (0, m.useState)(''),
          v = y[0],
          b = y[1],
          g = (0, o.Z)().breakpoints,
          k = (0, s.Z)(g.down('sm')),
          w = (0, m.useMemo)(
            function () {
              return x()(function (e) {
                t(e);
              }, 300);
            },
            [t]
          );
        return (0, h.jsxs)(l.Z, {
          sx: function (e) {
            return (function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2
                  ? p(Object(n), !0).forEach(function (t) {
                      (0, r.Z)(e, t, n[t]);
                    })
                  : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                    : p(Object(n)).forEach(function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                      });
              }
              return e;
            })(
              {
                display: 'flex',
                alignItems: 'center',
                gap: 2,
                border: '1px solid '.concat(e.palette.divider),
                borderRadius: '6px',
                height: '36px',
              },
              n
            );
          },
          children: [
            (0, h.jsx)(l.Z, { sx: { ml: 2, mt: 1 }, children: (0, h.jsx)(a.Z, { height: 16 }) }),
            (0, h.jsx)(c.ZP, {
              autoFocus: k,
              inputRef: j,
              sx: { width: '100%', fontSize: { xs: 16, sm: 14 } },
              placeholder: u,
              value: v,
              onChange: function (e) {
                b(e.target.value), w(e.target.value);
              },
              onKeyDown: function (e) {
                f && e.stopPropagation();
              },
            }),
            (0, h.jsx)(d.Z, {
              sx: { p: 0, mr: 2, visibility: v ? 'visible' : 'hidden' },
              onClick: function () {
                return (function () {
                  var e;
                  b(''), t(''), null === (e = j.current) || void 0 === e || e.focus();
                })();
              },
              children: (0, h.jsx)(i.Z, { height: 16 }),
            }),
          ],
        });
      };
    },
    20929: function (e, t, n) {
      'use strict';
      n.d(t, {
        S: function () {
          return i;
        },
      });
      var r = n(57499),
        a = n(85893);
      function i(e) {
        var t = (function (e) {
            return {
              d: Math.floor(e / 86400),
              h: Math.floor((e % 86400) / 3600),
              m: Math.floor((e % 3600) / 60),
              s: Math.floor(e % 60),
            };
          })(e.seconds),
          n = t.d,
          i = t.h,
          o = t.m,
          s = t.s;
        return (0, a.jsxs)(a.Fragment, {
          children: [
            0 !== n &&
              (0, a.jsx)('span', {
                children: (0, a.jsx)(r.cC, { id: 'HkEDbS', values: { d: n } }),
              }),
            0 !== i &&
              (0, a.jsx)('span', {
                children: (0, a.jsx)(r.cC, { id: 'ntyFSE', values: { h: i } }),
              }),
            0 !== o &&
              (0, a.jsx)('span', {
                children: (0, a.jsx)(r.cC, { id: 'Nh9DAo', values: { m: o } }),
              }),
            0 !== s &&
              (0, a.jsx)('span', {
                children: (0, a.jsx)(r.cC, { id: 'jaKbwW', values: { s: s } }),
              }),
          ],
        });
      }
    },
    44154: function (e, t, n) {
      'use strict';
      n.d(t, {
        _: function () {
          return y;
        },
      });
      var r = n(59499),
        a = n(57499),
        i = n(69743),
        o = n(2734),
        s = n(61730),
        l = n(80822),
        c = n(15861),
        d = n(93946),
        u = n(53219),
        x = n(69417),
        m = n(67294),
        h = n(10818),
        p = n(85893);
      function f(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function j(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? f(Object(n), !0).forEach(function (t) {
                (0, r.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : f(Object(n)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
        }
        return e;
      }
      var y = function (e) {
        var t = e.onSearchTermChange,
          n = e.searchPlaceholder,
          r = e.titleProps,
          f = e.title,
          y = (0, m.useState)(!1),
          v = y[0],
          b = y[1],
          g = (0, o.Z)().breakpoints,
          k = (0, s.Z)(g.down('sm')),
          w = k && !v,
          S = !k || !v;
        return (0, p.jsxs)(l.Z, {
          sx: {
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          },
          children: [
            S &&
              (0, p.jsx)(
                c.Z,
                j(j({ component: 'div', variant: 'h2', sx: { mr: 4 } }, r), {}, { children: f })
              ),
            (0, p.jsxs)(l.Z, {
              sx: {
                height: '40px',
                width: v && k ? '100%' : 'unset',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              },
              children: [
                w &&
                  (0, p.jsx)(d.Z, {
                    onClick: function () {
                      return b(!0);
                    },
                    children: (0, p.jsx)(u.Z, { children: (0, p.jsx)(i.Z, {}) }),
                  }),
                (v || !k) &&
                  (0, p.jsxs)(l.Z, {
                    sx: { width: '100%', display: 'flex', justifyContent: 'space-between' },
                    children: [
                      (0, p.jsx)(h.M, {
                        wrapperSx: { width: { xs: '100%', sm: '340px' } },
                        placeholder: n,
                        onSearchTermChange: t,
                      }),
                      k &&
                        (0, p.jsx)(x.Z, {
                          sx: { ml: 2 },
                          onClick: function () {
                            return b(!1), void t('');
                          },
                          children: (0, p.jsx)(c.Z, {
                            variant: 'buttonM',
                            children: (0, p.jsx)(a.cC, { id: 'dEgA5A' }),
                          }),
                        }),
                    ],
                  }),
              ],
            }),
          ],
        });
      };
    },
    33494: function (e, t, n) {
      'use strict';
      n.d(t, {
        Z: function () {
          return c;
        },
      });
      var r = n(56365),
        a = n(93946),
        i = n(53219),
        o = n(38577),
        s = n(12523),
        l = n(85893),
        c = function (e) {
          var t = e.explorerUrl;
          return (0, l.jsx)(s.y, {
            title: 'View token contract',
            sx: { display: { xsm: 'none' } },
            children: (0, l.jsx)(a.Z, {
              LinkComponent: o.rU,
              href: t,
              sx: { height: '24px', width: '24px' },
              children: (0, l.jsx)(i.Z, {
                sx: { fontSize: '14px' },
                children: (0, l.jsx)(r.Z, {}),
              }),
            }),
          });
        };
    },
    11312: function (e, t, n) {
      'use strict';
      n.d(t, {
        M: function () {
          return i;
        },
      });
      var r = n(1279),
        a = n(70794),
        i = function (e, t, n) {
          var i = (0, r.hE)((null === t || void 0 === t ? void 0 : t.underlyingBalance) || '0'),
            o = (0, r.hE)(n.unborrowedLiquidity),
            s = a.O.min(i, o),
            l = (0, r.hE)('0'),
            c = n.eModes.find(function (t) {
              return t.id === e.userEmodeCategoryId;
            }),
            d =
              e.isInEmode && c
                ? c.eMode.formattedLiquidationThreshold
                : n.formattedReserveLiquidationThreshold;
          if (
            null !== t &&
            void 0 !== t &&
            t.usageAsCollateralEnabledOnUser &&
            '0' !== n.reserveLiquidationThreshold &&
            '0' !== e.totalBorrowsMarketReferenceCurrency
          ) {
            var u = (0, r.hE)(e.healthFactor).minus('1.01');
            u.gt('0') && (l = u.multipliedBy(e.totalBorrowsMarketReferenceCurrency).div(d)),
              (s = a.O.min(s, l.dividedBy(n.formattedPriceInMarketReferenceCurrency)));
          }
          return s;
        };
    },
    13974: function (e, t, n) {
      'use strict';
      n.d(t, {
        vd: function () {
          return i;
        },
      });
      var r = function (e) {
          return e / 60 / 60 / 24;
        },
        a = function (e) {
          return e / 60 / 60;
        },
        i = function (e) {
          return ''.concat(o(e), ' ').concat(s(e));
        },
        o = function (e) {
          return r(e) < 1
            ? a(e) < 1
              ? (function (e) {
                  return e / 60;
                })(e)
              : a(e)
            : r(e);
        },
        s = function (e) {
          return r(e) < 1 ? (a(e) < 1 ? 'minutes' : 'hours') : 'days';
        };
    },
    50060: function (e, t, n) {
      'use strict';
      n.d(t, {
        P: function () {
          return y;
        },
      });
      var r = n(80854),
        a = n(1279),
        i = n(81206),
        o = n(82403),
        s = n(70794),
        l = n(3062),
        c = n(79850),
        d = n(47892),
        u = n(59499),
        x = n(99673),
        m = n(52251),
        h = n(13441);
      function p(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      var f = function (e, t, n) {
          var r = (0, h.z)().poolTokensBalanceService;
          return (0, x.h)({
            queries: e.map(function (e) {
              return (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = null != arguments[t] ? arguments[t] : {};
                  t % 2
                    ? p(Object(n), !0).forEach(function (t) {
                        (0, u.Z)(e, t, n[t]);
                      })
                    : Object.getOwnPropertyDescriptors
                      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                      : p(Object(n)).forEach(function (t) {
                          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                        });
                }
                return e;
              })(
                {
                  queryKey: m.B.poolTokens(t, e),
                  queryFn: function () {
                    return r.getPoolTokensBalances(e, t);
                  },
                  enabled: !!t,
                  refetchInterval: m.g,
                },
                n
              );
            }),
          });
        },
        j = function (e) {
          var t = (0, l.Y)(function (e) {
              return e.account;
            }),
            n = f(e, t),
            u = (0, d.T)(e),
            x =
              n.some(function (e) {
                return e.isLoading;
              }) ||
              u.some(function (e) {
                return e.isLoading;
              });
          return {
            walletBalances: u.map(function (t, l) {
              var d;
              return (function (e) {
                var t = e.reservesHumanized,
                  n = e.balances,
                  l = e.marketData,
                  d = (null === t || void 0 === t ? void 0 : t.reservesData) || [],
                  u = (null === t || void 0 === t ? void 0 : t.baseCurrencyData) || {
                    marketReferenceCurrencyDecimals: 0,
                    marketReferenceCurrencyPriceInUsd: '0',
                    networkBaseTokenPriceInUsd: '0',
                    networkBaseTokenPriceDecimals: 0,
                  },
                  x = !0;
                return {
                  walletBalances: (null !== n && void 0 !== n ? n : []).reduce(function (e, t) {
                    var n = d.find(function (e) {
                      var n;
                      return t.address === r.hP.toLowerCase()
                        ? e.symbol.toLowerCase() ===
                            (null === (n = c.m5[l.chainId].wrappedBaseAssetSymbol) || void 0 === n
                              ? void 0
                              : n.toLowerCase())
                        : e.underlyingAsset.toLowerCase() === t.address;
                    });
                    return (
                      '0' !== t.amount && (x = !1),
                      n &&
                        (e[t.address] = {
                          amount: (0, a.Fv)(t.amount, n.decimals),
                          amountUSD: (0, i.Z)({
                            amount: new s.O(t.amount),
                            currencyDecimals: n.decimals,
                            priceInMarketReferenceCurrency: n.priceInMarketReferenceCurrency,
                            marketReferenceCurrencyDecimals: u.marketReferenceCurrencyDecimals,
                            normalizedMarketReferencePriceInUsd: (0, a.Fv)(
                              u.marketReferenceCurrencyPriceInUsd,
                              o.$3
                            ),
                          }),
                        }),
                      e
                    );
                  }, {}),
                  hasEmptyWallet: x,
                };
              })({
                reservesHumanized: t.data,
                balances: null === (d = n[l]) || void 0 === d ? void 0 : d.data,
                marketData: e[l],
              });
            }),
            isLoading: x,
          };
        },
        y = function (e) {
          var t = j([e]),
            n = t.walletBalances,
            r = t.isLoading;
          return {
            walletBalances: n[0].walletBalances,
            hasEmptyWallet: n[0].hasEmptyWallet,
            loading: r,
          };
        };
    },
    93153: function (e, t, n) {
      'use strict';
      n.d(t, {
        C: function () {
          return D;
        },
        t: function () {
          return Z;
        },
      });
      var r = n(59499),
        a = n(80854),
        i = n(1279),
        o = n(82403),
        s = n(70794),
        l = n(11312),
        c = n(78551),
        d = n(3062),
        u = n(52251),
        x = n(13441);
      function m(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function h(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? m(Object(n), !0).forEach(function (t) {
                (0, r.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : m(Object(n)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
        }
        return e;
      }
      var p = function (e, t) {
          var n = (0, x.z)().stakeDataService;
          return (0, c.a)(
            h(
              {
                queryFn: function () {
                  return n.getStakeData(e);
                },
                queryKey: u.B.umbrellaStakeData(e),
              },
              t
            )
          );
        },
        f = n(84314),
        j = n(50060),
        y = n(62535),
        v = n(21617),
        b = n(41783),
        g = function (e, t, n, r, a, i) {
          var o = new s.O(e)
              .multipliedBy(new s.O(10).exponentiatedBy(i))
              .multipliedBy(31536e3)
              .multipliedBy(a),
            l = new s.O(t).multipliedBy(new s.O(10).exponentiatedBy(r)).multipliedBy(n);
          return o.dividedBy(l);
        };
      function k(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function w(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? k(Object(n), !0).forEach(function (t) {
                (0, r.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : k(Object(n)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
        }
        return e;
      }
      var S = function (e, t) {
          var n = new s.O(0),
            r = new s.O(0),
            a = e.map(function (e) {
              var a,
                s = (0, i.pV)(e.price, o.$3).toString(),
                l = (0, i.pV)(e.totalAssets, e.underlyingTokenDecimals).toString(),
                c = (0, i.hE)(l).multipliedBy(s).toString(),
                d = (0, i.pV)(e.targetLiquidity, e.underlyingTokenDecimals).toString(),
                u = (0, i.hE)(d).multipliedBy(s).toString();
              (n = n.plus(l)),
                (r = r.plus(c)),
                (a = e.underlyingIsStataToken
                  ? t.find(function (t) {
                      return (
                        t.aTokenAddress.toLowerCase() === e.stataTokenData.aToken.toLowerCase()
                      );
                    })
                  : t.find(function (t) {
                      return (
                        t.underlyingAsset.toLowerCase() === e.underlyingTokenAddress.toLowerCase()
                      );
                    }));
              var x = T(a, e),
                m = e.rewards.reduce(
                  function (t, n) {
                    var r = n.maxEmissionPerSecond,
                      a = n.price,
                      i = n.decimals,
                      o = g(r, e.targetLiquidity, e.price, e.underlyingTokenDecimals, a, i);
                    return t.plus(o);
                  },
                  (0, i.hE)('0')
                );
              return {
                tokenAddress: e.tokenAddress,
                symbol: e.underlyingIsStataToken
                  ? e.stataTokenData.assetSymbol
                  : e.underlyingTokenSymbol,
                iconSymbol: e.underlyingIsStataToken
                  ? e.stataTokenData.assetSymbol
                  : e.underlyingTokenSymbol,
                stakeTokenPrice: s,
                stakeTokenTotalSupply: l,
                targetLiquidity: d,
                totalSupplyUsd: c,
                totalRewardApy: x,
                totalRewardApyAtTargetLiquidity: m.toString(),
                targetLiquidityUSD: u.toString(),
              };
            });
          return {
            allStakeAssetsTotalSupply: n.toString(),
            allStakeAssetsToatlSupplyUsd: r.toString(),
            stakeAssets: a,
          };
        },
        T = function (e, t) {
          var n = (0, i.pV)(
            t.rewards.reduce(
              function (e, t) {
                return e.plus(t.apy);
              },
              (0, i.hE)('0')
            ),
            4
          );
          if (t.underlyingIsStataToken) {
            if (!e) throw new Error('Reserve is required when underlying is a stataToken');
            return n.plus(e.supplyAPY).toString();
          }
          return n.toString();
        },
        Z = function (e) {
          var t = p(e),
            n = (function (e, t) {
              var n = (0, x.z)().stakeDataService,
                r = (0, d.Y)(function (e) {
                  return e.account;
                });
              return (0, c.a)(
                h(
                  {
                    queryFn: function () {
                      return n.getUserStakeData(e, r);
                    },
                    queryKey: u.B.umbrellaStakeUserData(r, e),
                    enabled: !!r,
                  },
                  t
                )
              );
            })(e),
            r = (0, y.C)(e),
            m = (0, v.b)(e),
            k = (0, j.P)(e),
            S = (0, b.W)([t, n, r, m], function (e, t, n, r) {
              return (function (e, t, n, r, c) {
                var d = (0, i.hE)('0'),
                  u = (0, i.hE)('0'),
                  x = n.userReservesData,
                  m = e.reduce(function (e, m) {
                    var h = t.find(function (e) {
                      return e.stakeToken.toLowerCase() === m.tokenAddress.toLowerCase();
                    });
                    if (!h) return e;
                    var p = (0, i.pV)(h.balances.stakeTokenBalance, m.underlyingTokenDecimals),
                      j = p.multipliedBy(m.price).shiftedBy(-o.$3),
                      y = (0, i.pV)(
                        h.balances.underlyingTokenBalance,
                        m.underlyingTokenDecimals
                      ).toString(),
                      v = (0, s.O)(y).multipliedBy(m.price).shiftedBy(-o.$3).toString(),
                      b = (0, i.pV)(m.totalAssets, m.underlyingTokenDecimals).toString(),
                      k = (0, i.pV)(m.targetLiquidity, m.underlyingTokenDecimals).toString(),
                      S =
                        null === x || void 0 === x
                          ? void 0
                          : x.find(function (e) {
                              return (
                                e.reserve.aTokenAddress.toLowerCase() ===
                                m.stataTokenData.aToken.toLowerCase()
                              );
                            }),
                      Z = r.find(function (e) {
                        return (
                          e.aTokenAddress.toLowerCase() === m.stataTokenData.aToken.toLowerCase()
                        );
                      }),
                      D = T(Z, m);
                    (u = j.multipliedBy(D).plus(u)), (d = d.plus(j));
                    var C = m.rewards.reduce(
                        function (e, t) {
                          var n = t.maxEmissionPerSecond,
                            r = t.price,
                            a = t.decimals,
                            i = g(n, m.targetLiquidity, m.price, m.underlyingTokenDecimals, r, a);
                          return e.plus(i);
                        },
                        (0, i.hE)('0')
                      ),
                      O = '0',
                      A = c.walletBalances[a.hP.toLowerCase()]
                        ? c.walletBalances[a.hP.toLowerCase()].amount
                        : '0',
                      P = !1;
                    S &&
                      Z &&
                      ((O = (0, f.$w)((0, l.M)(n, S, Z).toString(), m.underlyingTokenDecimals)),
                      Z.isWrappedBaseAsset && (P = !0));
                    var B = (0, i.Fv)(h.balances.stataTokenAssetBalance, m.underlyingTokenDecimals),
                      I = Number(y);
                    return (
                      m.underlyingIsStataToken && (I += Number(B) + Number(O)),
                      e.push(
                        w(
                          w({}, m),
                          {},
                          {
                            stataTokenData: w(
                              w({}, m.stataTokenData),
                              {},
                              { isUnderlyingWrappedBaseToken: P }
                            ),
                            balances: h.balances,
                            totalRewardApy: D,
                            totalRewardApyAtTargetLiquidity: C.toString(),
                            formattedBalances: {
                              stakeTokenBalance: p.toString(),
                              stakeTokenBalanceUSD: j.toString(),
                              stakeTokenRedeemableAmount: (0, i.Fv)(
                                h.balances.stakeTokenRedeemableAmount,
                                m.underlyingTokenDecimals
                              ),
                              underlyingTokenBalance: y.toString(),
                              underlyingTokenBalanceUSD: v,
                              stataTokenAssetBalance: B,
                              aTokenBalanceAvailableToStake: O,
                              totalAvailableToStake: I.toString(),
                              nativeTokenBalance: A,
                            },
                            formattedRewards: h.rewards.map(function (e) {
                              var t = m.rewards.find(function (t) {
                                return t.rewardAddress === e.rewardAddress;
                              });
                              if (!t) throw new Error('Reward data not found');
                              var n = (0, i.Fv)(e.accrued, t.decimals),
                                a = (0, i.Fv)(t.price, o.$3),
                                l = (0, s.O)(n).multipliedBy(a).toString(),
                                c = r.find(function (t) {
                                  return (
                                    t.aTokenAddress.toLowerCase() === e.rewardAddress.toLowerCase()
                                  );
                                }),
                                d = void 0 !== c,
                                u = t.maxEmissionPerSecond,
                                x = t.price,
                                h = t.decimals,
                                p = g(
                                  u,
                                  m.targetLiquidity,
                                  m.price,
                                  m.underlyingTokenDecimals,
                                  x,
                                  h
                                );
                              return {
                                accruedUsd: l,
                                accrued: n,
                                rewardToken: e.rewardAddress,
                                rewardTokenSymbol: d ? c.symbol : t.rewardSymbol,
                                rewardTokenName: d ? 'a'.concat(c.symbol) : t.rewardName,
                                apy: (0, i.Fv)(t.apy, 4),
                                apyAtTargetLiquidity: p.toString(),
                                aToken: d,
                              };
                            }),
                            formattedStakeTokenData: {
                              totalAmountStaked: b,
                              totalAmountStakedUSD: (0, s.O)(b)
                                .multipliedBy((0, i.Fv)(m.price, 8))
                                .toString(),
                              targetLiquidityUSD: (0, s.O)(k)
                                .multipliedBy((0, i.Fv)(m.price, 8))
                                .toString(),
                            },
                            cooldownData: h.cooldown,
                            name: m.underlyingIsStataToken
                              ? m.stataTokenData.assetName
                              : m.underlyingTokenName,
                            symbol: m.underlyingIsStataToken
                              ? m.stataTokenData.assetSymbol
                              : m.underlyingTokenSymbol,
                            decimals: m.underlyingTokenDecimals,
                            iconSymbol: m.underlyingIsStataToken
                              ? m.stataTokenData.assetSymbol
                              : m.underlyingTokenSymbol,
                            totalStakedUSD: ''.concat(v),
                          }
                        )
                      ),
                      e
                    );
                  }, []);
                return {
                  aggregatedTotalStakedUSD: d.toString(),
                  weightedAverageApy: d.isZero() ? '0' : u.div(d).toString(),
                  stakeData: m,
                };
              })(e, t, n, r, k);
            });
          return { data: S.data, loading: S.isPending };
        },
        D = function (e) {
          var t = (0, v.b)(e),
            n = p(e),
            r = (0, b.W)([n, t], S);
          return { data: r.data, loading: r.isPending };
        };
    },
    87970: function (e, t, n) {
      'use strict';
      n.d(t, {
        p: function () {
          return o;
        },
      });
      var r = n(27484),
        a = n.n(r),
        i = n(67294);
      function o() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 15,
          t = (0, i.useState)(0),
          n = t[0],
          r = t[1],
          o = (0, i.useState)(0),
          s = o[0],
          l = o[1];
        return (
          (0, i.useEffect)(
            function () {
              var t = setInterval(function () {
                return l(a()().unix() + n);
              }, 1e3 * e);
              return function () {
                return clearInterval(t);
              };
            },
            [e, n]
          ),
          (0, i.useEffect)(function () {
            var e = Number(localStorage.getItem('forkTimeAhead') || 0);
            r(e), l(a()().unix() + e);
          }, []),
          s
        );
      }
    },
    41129: function (e, t, n) {
      'use strict';
      n.d(t, {
        k: function () {
          return x;
        },
      });
      var r = n(59499),
        a = n(80822),
        i = n(34386),
        o = n(24957),
        s = n(32867),
        l = n(85893);
      function c(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function d(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? c(Object(n), !0).forEach(function (t) {
                (0, r.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : c(Object(n)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
        }
        return e;
      }
      var u = function (e) {
          var t = e.value,
            n = e.withTooltip,
            r = e.subValue,
            i = e.disabled,
            o = e.capsComponent;
          return (0, l.jsxs)(l.Fragment, {
            children: [
              (0, l.jsxs)(a.Z, {
                sx: { display: 'flex', alignItems: 'center' },
                children: [
                  (0, l.jsx)(s.B, {
                    value: t,
                    variant: 'secondary14',
                    sx: { mb: !n && r ? '2px' : 0 },
                    color: i ? 'text.disabled' : 'text.main',
                    'data-cy': 'nativeAmount',
                  }),
                  o,
                ],
              }),
              !n &&
                !!r &&
                !i &&
                (0, l.jsx)(s.B, {
                  value: r,
                  symbol: 'USD',
                  variant: 'secondary12',
                  color: 'text.secondary',
                }),
            ],
          });
        },
        x = function (e) {
          var t = e.symbol,
            n = e.value,
            r = e.subValue,
            c = e.withTooltip,
            x = e.capsComponent,
            m = e.disabled,
            h = e.listColumnProps,
            p = void 0 === h ? {} : h;
          return (0, l.jsx)(
            o.h,
            d(
              d({}, p),
              {},
              {
                children: c
                  ? (0, l.jsx)(i.Z, {
                      title: (0, l.jsxs)(a.Z, {
                        sx: {
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          justifyContent: 'center',
                        },
                        children: [
                          (0, l.jsx)(s.B, {
                            value: r || 0,
                            symbol: 'USD',
                            variant: 'secondary14',
                            sx: { mb: '2px' },
                            symbolsColor: 'common.white',
                            compact: !1,
                          }),
                          (0, l.jsx)(s.B, {
                            value: n,
                            variant: 'secondary12',
                            symbol: t,
                            symbolsColor: 'common.white',
                            compact: !1,
                          }),
                        ],
                      }),
                      arrow: !0,
                      placement: 'top',
                      children: (0, l.jsx)(a.Z, {
                        sx: {
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          justifyContent: 'center',
                        },
                        children: (0, l.jsx)(u, {
                          symbol: t,
                          value: n,
                          subValue: r,
                          capsComponent: x,
                          disabled: m,
                          withTooltip: c,
                        }),
                      }),
                    })
                  : (0, l.jsx)(u, {
                      symbol: t,
                      value: n,
                      subValue: r,
                      capsComponent: x,
                      disabled: m,
                      withTooltip: c,
                    }),
              }
            )
          );
        };
    },
    57814: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/staking',
        function () {
          return n(82590);
        },
      ]);
    },
  },
  function (e) {
    e.O(0, [2577, 9771, 2645, 205, 9774, 2888, 179], function () {
      return (t = 57814), e((e.s = t));
      var t;
    });
    var t = e.O();
    _N_E = t;
  },
]);
