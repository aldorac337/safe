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
    (e._sentryDebugIds[t] = '8f755df6-3236-4039-96f3-2f47b0a0793d'),
    (e._sentryDebugIdIdentifier = 'sentry-dbid-8f755df6-3236-4039-96f3-2f47b0a0793d'));
} catch (e) {}
('use strict');
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7567],
  {
    94646: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return X;
        },
      });
      var i = n(78286),
        r = n(58258),
        a = n(26897),
        o = n(40252),
        s = n(56044),
        l = n(12556),
        d = n(54655),
        u = n(69886),
        c = n(53863),
        p = n(70064),
        C = n(22683),
        h = n(82803),
        y = n(96278),
        m = n(52714),
        f = n(57054),
        H = n(75147),
        g = n(89991);
      let Z = new Map(),
        V = { riskReason: null, risk: 'Low', isAuthorized: !0 },
        b = async (e, t) => {
          if (Z.has(e)) return Z.get(e);
          try {
            let n = await fetch('https://blue-services.morpho.dev/screen?address=' + e, t);
            if (!n.ok) throw Error('Failed to screen address');
            return Z.set(e, await n.json()), Z.get(e);
          } catch (e) {
            return V;
          }
        },
        M = function (e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            [n, i] = (0, r.useState)(!1),
            { value: a } = (0, l.ib)(
              async (n) => {
                if (e && !t) {
                  i(!0);
                  let t = await b(e, { signal: n.signal });
                  return i(!1), t;
                }
              },
              [e, t]
            );
          return { loading: n, value: a };
        };
      var k = n(4205),
        v = n(82078);
      let L = (0, n(38819).Z)(d.Kqy, { target: 'ewutvgm0' })(
        'padding:8px;background-color:',
        (e) => {
          let { theme: t } = e;
          return t.colors.background.primary;
        },
        ';border-radius:12px;'
      );
      var x = n(7149);
      let w = () => {
        let [e, t] = (0, r.useState)(!1),
          [n, i] = (0, r.useState)(!1),
          [a, o] = (0, r.useState)(!1);
        return {
          hasRiskyPositions: e,
          markPositionsAsRisky: (0, r.useCallback)(() => {
            t(!0);
          }, [t]),
          isRiskyPositionsAcknowledged: n,
          setIsRiskyPositionsAcknowledged: i,
          hasLiquidatablePositions: a,
          markPositionsAsLiquidatable: (0, r.useCallback)(() => {
            o(!0);
          }, [o]),
        };
      };
      var T = n(35047);
      let B = (e, t) => {
        let { account: n, targetChainId: i } = (0, g.Z_)();
        return (0, r.useMemo)(() => {
          let r = null == n ? void 0 : n.address;
          return r && e && t
            ? (0, T.values)(t.tokens)
                .filter((e) => e instanceof o.WrappedToken)
                .map((n) => {
                  if (
                    !e.getHolding(o.addressesRegistry[i].bundler3.generalAdapter1, n.address)
                      .canTransfer
                  )
                    return;
                  let a = e.getBundleBalance(r, n.address),
                    s = t.getBundleBalance(r, n.address);
                  if (null == s || null == a) return;
                  let l = s - a;
                  if (!(l <= 10)) return { token: n, unwrappableAmount: l };
                })
                .filter(T.isDefined)
            : [];
        }, [n.address, e, t, i]);
      };
      var X = (0, r.memo)((e) => {
        var t;
        let { operations: n, headerActionSlot: Z, onConfirm: V } = e,
          { toggleDialog: b } = (0, d.DAv)(),
          { toggleRightPanel: T } = (0, d.s8G)(),
          { data: X } = (0, k.f)(0),
          { account: A } = (0, g.Z_)(),
          { bundlerConfiguration: D } = (0, C.N)(),
          [O] = (0, f.b)(X, n, D),
          P = (0, y.B)(),
          { activeBundle: R, setActiveBundle: I } = (0, H.H)(),
          [S, _] = (0, r.useState)(),
          [z, , , E] = (0, l.$X)(),
          W = B(X, (0, a.Z)(O)),
          {
            hasRiskyPositions: N,
            isRiskyPositionsAcknowledged: q,
            setIsRiskyPositionsAcknowledged: F,
            markPositionsAsRisky: U,
            hasLiquidatablePositions: K,
            markPositionsAsLiquidatable: j,
          } = w(),
          G = (0, r.useCallback)(() => {
            if (V) {
              V();
              return;
            }
            if (X && (null == A ? void 0 : A.address))
              try {
                let e = (0, m.b)(n, X, A.address, P, A.isContract),
                  t = (0, s.finalizeBundle)(
                    e.operations,
                    X,
                    A.address,
                    z,
                    o.DEFAULT_SLIPPAGE_TOLERANCE
                  ),
                  r = (0, s.encodeBundle)(t, X, !A.isContract);
                I(r, n), T(!1), b((0, i.tZ)(v.Z, {}), { closable: !1 });
              } catch (e) {
                _(e);
              }
          }, [A.address, A.isContract, X, n, P, z, V, I, b, T]),
          { value: $, loading: J } = M(null == A ? void 0 : A.address),
          Y = (0, r.useMemo)(
            () =>
              n.some(
                (e) =>
                  e.type === h.H.InterfaceOperationType.metaMorphoDeposit ||
                  e.type === h.H.InterfaceOperationType.metaMorphoWithdraw
              ),
            [n]
          ),
          Q = (0, r.useMemo)(
            () =>
              R
                ? 'Please complete the pending transaction to execute a new one.'
                : K
                  ? 'You must lower your LTV below the Liquidation LTV to take this action.'
                  : N && !q
                    ? 'Please process liquidation warning.'
                    : A.isWrongChain
                      ? 'Please switch to the correct network.'
                      : (null == $ ? void 0 : $.isAuthorized)
                        ? null
                        : 'User is not allowed to perform this action.',
            [K, N, q, A.isWrongChain, null == $ ? void 0 : $.isAuthorized, R]
          ),
          ee =
            !!R || K || (N && !q) || A.isWrongChain || !(null == $ ? void 0 : $.isAuthorized) || J;
        return (0, i.BX)(d.Kqy, {
          direction: 'column',
          gap: 20,
          'data-testid': 'confirm-dialog',
          children: [
            (0, i.BX)(d.Kqy, {
              align: 'center',
              justify: 'space-between',
              gap: 16,
              children: [
                (0, i.tZ)(d.xvT.Title.S, { children: 'Review' }),
                (0, i.BX)(d.Kqy, {
                  direction: 'row',
                  gap: 's',
                  align: 'center',
                  children: [
                    Z,
                    (0, i.tZ)(d.zxk, {
                      iconAlone: 'ClosePlain20',
                      onClick: () => b(!1),
                      variant: 'secondary',
                    }),
                  ],
                }),
              ],
            }),
            (0, i.BX)(p.Z, {
              fallback: (0, i.tZ)(c.c, { minHeight: '494px' }),
              children: [
                (0, i.BX)(d.Kqy, {
                  direction: 'column',
                  gap: 'xs',
                  children: [
                    (0, i.tZ)(x.Z, {
                      operations: n,
                      initialState: null == O ? void 0 : O[0],
                      finalState: (0, a.Z)(O),
                      mode: 'Review',
                      markPositionsAsRisky: U,
                      markPositionsAsLiquidatable: j,
                    }),
                    W.length > 0 &&
                      (0, i.tZ)(d.Kqy, {
                        wrap: 'wrap',
                        gap: 'xs',
                        align: 'center',
                        children: W.map((e) => {
                          var t;
                          let { token: n } = e;
                          return (0, i.BX)(
                            L,
                            {
                              gap: 4,
                              align: 'center',
                              children: [
                                (0, i.tZ)(d.rsf, {
                                  active: z.has(n.address),
                                  onClick: E.bind(null, n.address),
                                  'data-testid': 'unwrap-token-switch-'.concat(n.symbol),
                                }),
                                (0, i.tZ)(d.xvT.Body.XXXS.Regular, {
                                  color: 'text.body',
                                  children: 'Unwrap '.concat(
                                    null !== (t = n.symbol) && void 0 !== t
                                      ? t
                                      : (0, d.GQT)(n.address)
                                  ),
                                }),
                              ],
                            },
                            n.address
                          );
                        }),
                      }),
                  ],
                }),
                !K &&
                  N &&
                  (0, i.tZ)(u.Z, {
                    isRiskyPositionsAcknowledged: q,
                    setIsRiskyPositionsAcknowledged: F,
                  }),
                J
                  ? (0, i.tZ)(d.OdW, { height: 35, borderRadius: '12px' })
                  : (null == $ ? void 0 : $.isAuthorized)
                    ? Y
                      ? (0, i.BX)(d.xvT.Body.XXXS.Regular, {
                          color: 'text.secondary',
                          children: [
                            'By confirming this transaction, you agree to the',
                            ' ',
                            (0, i.tZ)(d.dLw, {
                              href: l.CL,
                              underlined: !0,
                              children: 'Terms of Use',
                            }),
                            ' ',
                            'and the services provisions relating to the Morpho Vault.',
                          ],
                        })
                      : null
                    : (0, i.BX)(d.xvT.Body.XXXS.Regular, {
                        color: 'text.interactive.error',
                        children: [
                          'User is not allowed to perform this action:',
                          ' ',
                          null !== (t = null == $ ? void 0 : $.riskReason) && void 0 !== t
                            ? t
                            : 'unknown reason',
                          '.',
                          ' ',
                          (0, i.tZ)(d.dLw, {
                            href: 'https://www.chainalysis.com/',
                            underlined: !0,
                            children: 'Learn more ->',
                          }),
                        ],
                      }),
                (0, i.tZ)(d.ua7, {
                  content: Q,
                  disabled: !Q,
                  children: (0, i.tZ)(d.Kqy, {
                    width: '100%',
                    direction: 'column',
                    children: (0, i.tZ)(d._Lo, {
                      onClick: G,
                      height: 47,
                      disabled: ee,
                      textVariant: 'small',
                      children: 'Confirm',
                    }),
                  }),
                }),
                S &&
                  (0, i.tZ)(d.xvT.Label.S, {
                    color: 'text.interactive.error',
                    children: S.message,
                  }),
              ],
            }),
          ],
        });
      });
    },
    99971: function (e, t, n) {
      n.d(t, {
        sG: function () {
          return i.Z;
        },
        GI: function () {
          return k;
        },
        ar: function () {
          return Z;
        },
      });
      var i = n(94646),
        r = n(78286),
        a = n(58258),
        o = n(56044),
        s = n(54655),
        l = n(82078),
        d = n(53863),
        u = n(70064),
        c = n(68906),
        p = n(82803),
        C = n(86876),
        h = n(89991),
        y = n(49663),
        m = n(40816),
        f = n(91283),
        H = n(45609),
        g = n(23106),
        Z = (0, a.memo)((e) => {
          let {} = e,
            { toggleDialog: t } = (0, s.DAv)(),
            { account: n, targetChainId: i } = (0, h.Z_)(),
            {
              txData: { distributions: Z },
            } = (0, c.D2)(),
            { activeBundle: V, setActiveBundle: b } = (0, C.HT)(),
            M = (0, a.useMemo)(
              () =>
                Z.reduce((e, t) => {
                  var n;
                  let { claimable: i, asset: r } = t;
                  return (
                    0n === i ||
                      (e[r.address] = (null !== (n = e[r.address]) && void 0 !== n ? n : 0n) + i),
                    e
                  );
                }, {}),
              [Z]
            ),
            k = (0, f.g)(y.rr.legacyMorphoToken),
            v = (0, a.useMemo)(() => {
              if (!n.address) return;
              let e = n.address;
              if (Z && n.address) {
                let t = Z.flatMap((t) => {
                    let {
                      distributor: { address: n },
                      claimable: i,
                      asset: { address: r },
                      proof: a,
                    } = t;
                    return { type: 'urdClaim', args: [n, e, r, i, a, !1] };
                  }),
                  r = new o.ActionBundleRequirements(),
                  a = M[y.rr.legacyMorphoToken];
                if (a && k.value) {
                  let o = (0, m.S)({
                    amount: a,
                    userAddress: e,
                    supportsSignatures: !n.isContract,
                    bundlerAllowance: k.value.erc20Allowances['bundler3.generalAdapter1'],
                    erc2612Nonce: k.value.erc2612Nonce,
                    chainId: i,
                  });
                  o &&
                    (t.push(...o.actions),
                    r.signatures.push(...o.requirements.signatures),
                    r.txs.push(...o.requirements.txs));
                }
                return new o.ActionBundle(i, t, r);
              }
            }, [n.address, n.isContract, Z, M, k, i]),
            L = !!V || n.isWrongChain,
            x = (0, a.useCallback)(() => {
              v &&
                (b(v, [
                  {
                    id: 'claim',
                    type: p.H.InterfaceOperationType.claimMorpho,
                    options: { isMax: [], disabledPeripheralTokens: new Set() },
                  },
                ]),
                t((0, r.tZ)(l.h, {}), { closable: !1 }));
            }, [v, b, t]);
          return (0, r.BX)(s.Kqy, {
            direction: 'column',
            gap: 20,
            'data-testid': 'confirm-dialog',
            children: [
              (0, r.BX)(s.Kqy, {
                align: 'center',
                justify: 'space-between',
                gap: 16,
                children: [
                  (0, r.tZ)(s.xvT.Title.S, { children: 'Review' }),
                  (0, r.tZ)(s.zxk, {
                    iconAlone: 'ClosePlain20',
                    onClick: () => t(!1),
                    variant: 'secondary',
                  }),
                ],
              }),
              (0, r.BX)(u.Z, {
                fallback: (0, r.tZ)(d.c, { minHeight: '494px' }),
                children: [
                  (0, r.tZ)(H.F, {
                    children: (0, r.tZ)(g.Z, { mode: 'Review', rewardMode: 'MORPHO' }),
                  }),
                  (0, r.tZ)(s._Lo, {
                    onClick: x,
                    height: 47,
                    disabled: L,
                    textVariant: 'small',
                    children: 'Confirm',
                  }),
                ],
              }),
            ],
          });
        }),
        V = n(392),
        b = n(12556);
      let M = [
        { inputs: [], stateMutability: 'nonpayable', type: 'constructor' },
        { inputs: [], name: 'InvalidDispute', type: 'error' },
        { inputs: [], name: 'InvalidLengths', type: 'error' },
        { inputs: [], name: 'InvalidProof', type: 'error' },
        { inputs: [], name: 'InvalidUninitializedRoot', type: 'error' },
        { inputs: [], name: 'NoDispute', type: 'error' },
        { inputs: [], name: 'NotGovernor', type: 'error' },
        { inputs: [], name: 'NotTrusted', type: 'error' },
        { inputs: [], name: 'NotWhitelisted', type: 'error' },
        { inputs: [], name: 'UnresolvedDispute', type: 'error' },
        { inputs: [], name: 'ZeroAddress', type: 'error' },
        {
          anonymous: !1,
          inputs: [
            { indexed: !1, internalType: 'address', name: 'previousAdmin', type: 'address' },
            { indexed: !1, internalType: 'address', name: 'newAdmin', type: 'address' },
          ],
          name: 'AdminChanged',
          type: 'event',
        },
        {
          anonymous: !1,
          inputs: [{ indexed: !0, internalType: 'address', name: 'beacon', type: 'address' }],
          name: 'BeaconUpgraded',
          type: 'event',
        },
        {
          anonymous: !1,
          inputs: [
            { indexed: !0, internalType: 'address', name: 'user', type: 'address' },
            { indexed: !0, internalType: 'address', name: 'token', type: 'address' },
            { indexed: !1, internalType: 'uint256', name: 'amount', type: 'uint256' },
          ],
          name: 'Claimed',
          type: 'event',
        },
        {
          anonymous: !1,
          inputs: [
            { indexed: !1, internalType: 'uint256', name: '_disputeAmount', type: 'uint256' },
          ],
          name: 'DisputeAmountUpdated',
          type: 'event',
        },
        {
          anonymous: !1,
          inputs: [{ indexed: !1, internalType: 'uint48', name: '_disputePeriod', type: 'uint48' }],
          name: 'DisputePeriodUpdated',
          type: 'event',
        },
        {
          anonymous: !1,
          inputs: [{ indexed: !1, internalType: 'bool', name: 'valid', type: 'bool' }],
          name: 'DisputeResolved',
          type: 'event',
        },
        {
          anonymous: !1,
          inputs: [
            { indexed: !0, internalType: 'address', name: '_disputeToken', type: 'address' },
          ],
          name: 'DisputeTokenUpdated',
          type: 'event',
        },
        {
          anonymous: !1,
          inputs: [{ indexed: !1, internalType: 'string', name: 'reason', type: 'string' }],
          name: 'Disputed',
          type: 'event',
        },
        {
          anonymous: !1,
          inputs: [{ indexed: !1, internalType: 'uint8', name: 'version', type: 'uint8' }],
          name: 'Initialized',
          type: 'event',
        },
        {
          anonymous: !1,
          inputs: [
            { indexed: !0, internalType: 'address', name: 'user', type: 'address' },
            { indexed: !1, internalType: 'bool', name: 'isEnabled', type: 'bool' },
          ],
          name: 'OperatorClaimingToggled',
          type: 'event',
        },
        {
          anonymous: !1,
          inputs: [
            { indexed: !0, internalType: 'address', name: 'user', type: 'address' },
            { indexed: !0, internalType: 'address', name: 'operator', type: 'address' },
            { indexed: !1, internalType: 'bool', name: 'isWhitelisted', type: 'bool' },
          ],
          name: 'OperatorToggled',
          type: 'event',
        },
        {
          anonymous: !1,
          inputs: [
            { indexed: !0, internalType: 'address', name: 'token', type: 'address' },
            { indexed: !0, internalType: 'address', name: 'to', type: 'address' },
            { indexed: !1, internalType: 'uint256', name: 'amount', type: 'uint256' },
          ],
          name: 'Recovered',
          type: 'event',
        },
        { anonymous: !1, inputs: [], name: 'Revoked', type: 'event' },
        {
          anonymous: !1,
          inputs: [
            { indexed: !1, internalType: 'bytes32', name: 'merkleRoot', type: 'bytes32' },
            { indexed: !1, internalType: 'bytes32', name: 'ipfsHash', type: 'bytes32' },
            { indexed: !1, internalType: 'uint48', name: 'endOfDisputePeriod', type: 'uint48' },
          ],
          name: 'TreeUpdated',
          type: 'event',
        },
        {
          anonymous: !1,
          inputs: [
            { indexed: !0, internalType: 'address', name: 'eoa', type: 'address' },
            { indexed: !1, internalType: 'bool', name: 'trust', type: 'bool' },
          ],
          name: 'TrustedToggled',
          type: 'event',
        },
        {
          anonymous: !1,
          inputs: [
            { indexed: !0, internalType: 'address', name: 'implementation', type: 'address' },
          ],
          name: 'Upgraded',
          type: 'event',
        },
        {
          inputs: [{ internalType: 'address', name: '', type: 'address' }],
          name: 'canUpdateMerkleRoot',
          outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
          stateMutability: 'view',
          type: 'function',
        },
        {
          inputs: [
            { internalType: 'address[]', name: 'users', type: 'address[]' },
            { internalType: 'address[]', name: 'tokens', type: 'address[]' },
            { internalType: 'uint256[]', name: 'amounts', type: 'uint256[]' },
            { internalType: 'bytes32[][]', name: 'proofs', type: 'bytes32[][]' },
          ],
          name: 'claim',
          outputs: [],
          stateMutability: 'nonpayable',
          type: 'function',
        },
        {
          inputs: [
            { internalType: 'address', name: '', type: 'address' },
            { internalType: 'address', name: '', type: 'address' },
          ],
          name: 'claimed',
          outputs: [
            { internalType: 'uint208', name: 'amount', type: 'uint208' },
            { internalType: 'uint48', name: 'timestamp', type: 'uint48' },
            { internalType: 'bytes32', name: 'merkleRoot', type: 'bytes32' },
          ],
          stateMutability: 'view',
          type: 'function',
        },
        {
          inputs: [],
          name: 'core',
          outputs: [{ internalType: 'contract ICore', name: '', type: 'address' }],
          stateMutability: 'view',
          type: 'function',
        },
        {
          inputs: [],
          name: 'disputeAmount',
          outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
          stateMutability: 'view',
          type: 'function',
        },
        {
          inputs: [],
          name: 'disputePeriod',
          outputs: [{ internalType: 'uint48', name: '', type: 'uint48' }],
          stateMutability: 'view',
          type: 'function',
        },
        {
          inputs: [],
          name: 'disputeToken',
          outputs: [{ internalType: 'contract IERC20', name: '', type: 'address' }],
          stateMutability: 'view',
          type: 'function',
        },
        {
          inputs: [{ internalType: 'string', name: 'reason', type: 'string' }],
          name: 'disputeTree',
          outputs: [],
          stateMutability: 'nonpayable',
          type: 'function',
        },
        {
          inputs: [],
          name: 'disputer',
          outputs: [{ internalType: 'address', name: '', type: 'address' }],
          stateMutability: 'view',
          type: 'function',
        },
        {
          inputs: [],
          name: 'endOfDisputePeriod',
          outputs: [{ internalType: 'uint48', name: '', type: 'uint48' }],
          stateMutability: 'view',
          type: 'function',
        },
        {
          inputs: [],
          name: 'getMerkleRoot',
          outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
          stateMutability: 'view',
          type: 'function',
        },
        {
          inputs: [{ internalType: 'contract ICore', name: '_core', type: 'address' }],
          name: 'initialize',
          outputs: [],
          stateMutability: 'nonpayable',
          type: 'function',
        },
        {
          inputs: [],
          name: 'lastTree',
          outputs: [
            { internalType: 'bytes32', name: 'merkleRoot', type: 'bytes32' },
            { internalType: 'bytes32', name: 'ipfsHash', type: 'bytes32' },
          ],
          stateMutability: 'view',
          type: 'function',
        },
        {
          inputs: [{ internalType: 'address', name: '', type: 'address' }],
          name: 'onlyOperatorCanClaim',
          outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
          stateMutability: 'view',
          type: 'function',
        },
        {
          inputs: [
            { internalType: 'address', name: '', type: 'address' },
            { internalType: 'address', name: '', type: 'address' },
          ],
          name: 'operators',
          outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
          stateMutability: 'view',
          type: 'function',
        },
        {
          inputs: [],
          name: 'proxiableUUID',
          outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
          stateMutability: 'view',
          type: 'function',
        },
        {
          inputs: [
            { internalType: 'address', name: 'tokenAddress', type: 'address' },
            { internalType: 'address', name: 'to', type: 'address' },
            { internalType: 'uint256', name: 'amountToRecover', type: 'uint256' },
          ],
          name: 'recoverERC20',
          outputs: [],
          stateMutability: 'nonpayable',
          type: 'function',
        },
        {
          inputs: [{ internalType: 'bool', name: 'valid', type: 'bool' }],
          name: 'resolveDispute',
          outputs: [],
          stateMutability: 'nonpayable',
          type: 'function',
        },
        {
          inputs: [],
          name: 'revokeTree',
          outputs: [],
          stateMutability: 'nonpayable',
          type: 'function',
        },
        {
          inputs: [{ internalType: 'uint256', name: '_disputeAmount', type: 'uint256' }],
          name: 'setDisputeAmount',
          outputs: [],
          stateMutability: 'nonpayable',
          type: 'function',
        },
        {
          inputs: [{ internalType: 'uint48', name: '_disputePeriod', type: 'uint48' }],
          name: 'setDisputePeriod',
          outputs: [],
          stateMutability: 'nonpayable',
          type: 'function',
        },
        {
          inputs: [{ internalType: 'contract IERC20', name: '_disputeToken', type: 'address' }],
          name: 'setDisputeToken',
          outputs: [],
          stateMutability: 'nonpayable',
          type: 'function',
        },
        {
          inputs: [{ internalType: 'address', name: 'user', type: 'address' }],
          name: 'toggleOnlyOperatorCanClaim',
          outputs: [],
          stateMutability: 'nonpayable',
          type: 'function',
        },
        {
          inputs: [
            { internalType: 'address', name: 'user', type: 'address' },
            { internalType: 'address', name: 'operator', type: 'address' },
          ],
          name: 'toggleOperator',
          outputs: [],
          stateMutability: 'nonpayable',
          type: 'function',
        },
        {
          inputs: [{ internalType: 'address', name: 'eoa', type: 'address' }],
          name: 'toggleTrusted',
          outputs: [],
          stateMutability: 'nonpayable',
          type: 'function',
        },
        {
          inputs: [],
          name: 'tree',
          outputs: [
            { internalType: 'bytes32', name: 'merkleRoot', type: 'bytes32' },
            { internalType: 'bytes32', name: 'ipfsHash', type: 'bytes32' },
          ],
          stateMutability: 'view',
          type: 'function',
        },
        {
          inputs: [
            {
              components: [
                { internalType: 'bytes32', name: 'merkleRoot', type: 'bytes32' },
                { internalType: 'bytes32', name: 'ipfsHash', type: 'bytes32' },
              ],
              internalType: 'struct MerkleTree',
              name: '_tree',
              type: 'tuple',
            },
          ],
          name: 'updateTree',
          outputs: [],
          stateMutability: 'nonpayable',
          type: 'function',
        },
        {
          inputs: [{ internalType: 'address', name: 'newImplementation', type: 'address' }],
          name: 'upgradeTo',
          outputs: [],
          stateMutability: 'nonpayable',
          type: 'function',
        },
        {
          inputs: [
            { internalType: 'address', name: 'newImplementation', type: 'address' },
            { internalType: 'bytes', name: 'data', type: 'bytes' },
          ],
          name: 'upgradeToAndCall',
          outputs: [],
          stateMutability: 'payable',
          type: 'function',
        },
      ];
      var k = (0, a.memo)((e) => {
        let {} = e,
          { toggleDialog: t } = (0, s.DAv)(),
          { account: n, targetChainId: i } = (0, h.Z_)(),
          {
            txData: { rewardsMerkl: y },
          } = (0, c.D2)(),
          { activeBundle: m, setActiveBundle: f } = (0, C.HT)(),
          Z = (0, a.useMemo)(() => {
            if (!n.address) return;
            let e = new o.ActionBundleRequirements(),
              t = [],
              r = [],
              a = [];
            for (let e of y)
              e.token && (t.push(e.token.address), r.push(BigInt(e.amount)), a.push(e.proofs));
            let s = t.length;
            if (r.length != s || a.length != s)
              throw Error('Invalid arguments, must have same length');
            let l = new o.ActionBundle(i, [], e);
            return (
              (l.tx = () => ({
                to: b.FW.getMerklAddress(i),
                data: (0, V.R)({
                  abi: M,
                  functionName: 'claim',
                  args: [Array(s).fill(n.address), t, r, a],
                }),
                value: 0n,
              })),
              l
            );
          }, [n.address, y, i]),
          k = !!m || n.isWrongChain,
          v = (0, a.useCallback)(() => {
            Z &&
              (f(
                Z,
                [
                  {
                    id: 'claim',
                    type: p.H.InterfaceOperationType.claimMerkl,
                    options: { isMax: [], disabledPeripheralTokens: new Set() },
                  },
                ],
                void 0,
                !0
              ),
              t((0, r.tZ)(l.h, {}), { closable: !1 }));
          }, [Z, f, t]);
        return (0, r.BX)(s.Kqy, {
          direction: 'column',
          gap: 20,
          'data-testid': 'confirm-dialog',
          children: [
            (0, r.BX)(s.Kqy, {
              align: 'center',
              justify: 'space-between',
              gap: 16,
              children: [
                (0, r.tZ)(s.xvT.Title.S, { children: 'Review' }),
                (0, r.tZ)(s.zxk, {
                  iconAlone: 'ClosePlain20',
                  onClick: () => t(!1),
                  variant: 'secondary',
                }),
              ],
            }),
            (0, r.BX)(u.Z, {
              fallback: (0, r.tZ)(d.c, { minHeight: '494px' }),
              children: [
                (0, r.tZ)(H.F, {
                  children: (0, r.tZ)(g.Z, { mode: 'Review', rewardMode: 'MERKL' }),
                }),
                (0, r.BX)(s.xvT.Body.XXS.Regular, {
                  color: 'text.secondary',
                  children: [
                    'By claiming you accept Merkl’s',
                    ' ',
                    (0, r.tZ)(s.dLw, {
                      href: 'https://app.merkl.xyz/terms',
                      underlined: !0,
                      children: 'Terms of use',
                    }),
                    '.',
                  ],
                }),
                (0, r.tZ)(s._Lo, {
                  onClick: v,
                  height: 47,
                  disabled: k,
                  textVariant: 'small',
                  children: 'Confirm',
                }),
              ],
            }),
          ],
        });
      });
    },
    47567: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return et;
        },
      });
      var i = n(78286),
        r = n(58258),
        a = n(12556),
        o = n(54655),
        s = n(34097),
        l = n(44736);
      let d = (e) => {
        let [t, n] = (0, r.useState)(!1),
          i = (0, s.Q1)(e),
          a = (0, l.G)(),
          o = (0, r.useCallback)(
            (n) => {
              n.preventDefault(), t && (i || (0, s.aM)(e), a());
            },
            [i, t, e, a]
          );
        return {
          isChecked: t,
          consentStatus: i,
          setIsChecked: n,
          onClickConfirm: o,
          onClickContinue: (0, r.useCallback)(
            (e) => {
              e.preventDefault(), a();
            },
            [a]
          ),
        };
      };
      var u = n(23567),
        c = n(38819);
      let p = (0, c.Z)('div', { target: 'e1fucke70' })(
          'width:100%;height:100%;color:white;z-index:',
          (e) => {
            let { theme: t } = e;
            return t.zIndex.overlay.mid;
          },
          ';background-color:',
          (e) => {
            let { theme: t } = e;
            return t.colors.background.bloc;
          },
          ';display:flex;padding:0;gap:10px;-webkit-text-size-adjust:100%;',
          (e) => {
            let { theme: t } = e;
            return t.breakpoints.down('s');
          },
          '{flex-direction:column;padding:20px 10px;max-width:100vw;}'
        ),
        C = (0, c.Z)('div', { target: 'e1fucke71' })(
          'position:relative;width:44%;max-width:640px;flex-grow:1;flex-shrink:0;',
          (e) => {
            let { theme: t } = e;
            return t.breakpoints.down('m');
          },
          '{width:46%;}',
          (e) => {
            let { theme: t } = e;
            return t.breakpoints.down('s');
          },
          '{width:100%;max-width:unset;height:calc(100vh - 240px);height:calc(100dvh - 240px);min-height:300px;margin-bottom:-30px;max-height:calc((100vw - 20px) * 1.12);}'
        ),
        h = (0, c.Z)('div', { target: 'e1fucke72' })(
          'flex-shrink:1;display:flex;flex-direction:column;justify-content:center;',
          (e) => {
            let { theme: t } = e;
            return t.breakpoints.down('s');
          },
          '{padding-bottom:32px;}'
        ),
        y = (0, c.Z)('div', { target: 'e1fucke73' })(
          'margin-top:32px;display:flex;flex-direction:column;gap:',
          (e) => {
            let { theme: t } = e;
            return t.spacing.s;
          },
          ';'
        ),
        m = (0, c.Z)('div', { target: 'e1fucke74' })(
          'display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:center;gap:',
          (e) => {
            let { theme: t } = e;
            return t.spacing.m;
          },
          ';z-index:2;'
        ),
        f = (0, c.Z)('button', { target: 'e1fucke75' })(
          'all:unset;position:relative;cursor:pointer;color:',
          (e) => {
            let { theme: t, selected: n } = e;
            return n ? t.colors.text.primary : t.colors.text.secondary;
          },
          ';> span{color:currentColor;}&:after{content:"";position:absolute;inset:-10px -12px;}'
        ),
        H = (0, c.Z)('div', { target: 'e1fucke76' })(
          'position:relative;margin-top:',
          (e) => {
            let { theme: t } = e;
            return t.spacing.m;
          },
          ';'
        ),
        g = (0, c.Z)('div', { target: 'e1fucke77' })(
          'position:absolute;top:0;right:0;left:0;display:flex;flex-direction:column;justify-content:center;text-align:center;transition:opacity 400ms ease-in-out;gap:',
          (e) => {
            let { theme: t } = e;
            return t.spacing.xs;
          },
          ';opacity:',
          (e) => {
            let { selected: t } = e;
            return t ? 1 : 0;
          },
          ';visibility:',
          (e) => {
            let { selected: t } = e;
            return t ? 'visible' : 'hidden';
          },
          ';'
        ),
        Z = (0, c.Z)(o.xvT.Body.M.Regular, { target: 'e1fucke78' })(),
        V = (0, c.Z)('div', { target: 'e1fucke79' })(
          'display:flex;cursor:pointer;transition:opacity 120ms linear;opacity:',
          (e) => {
            let { selected: t } = e;
            return t ? 1 : 0.2;
          },
          ';'
        ),
        b = (0, c.Z)(o.xvT.Body.S.Regular, { target: 'e1fucke710' })(
          'color:',
          (e) => {
            let { theme: t } = e;
            return t.colors.text.primary;
          },
          ';width:42px;flex-shrink:0;span{display:inline-block;margin-top:2.5px;transform:scale(0.95,1.05);}'
        ),
        M = (0, c.Z)(o.xvT.Body.L.Regular, { target: 'e1fucke711' })(
          'color:',
          (e) => {
            let { theme: t } = e;
            return t.colors.text.primary;
          },
          ';'
        ),
        k = (0, c.Z)('div', { target: 'e1fucke712' })(
          'display:flex;flex-direction:column;gap:8px;'
        ),
        v = (0, c.Z)(o.xvT.Body.XS.Regular, { target: 'e1fucke713' })(
          'color:',
          (e) => {
            let { theme: t } = e;
            return t.colors.text.secondary;
          },
          ';'
        ),
        L = (0, c.Z)(o.xvT.Body.L.Regular, { target: 'e1fucke714' })(),
        x = (0, c.Z)(o.xvT.Title.XS, { target: 'e1fucke715' })('z-index:1;'),
        w = (0, c.Z)('hr', { target: 'e1fucke716' })(
          'all:unset;display:block;width:100%;margin:32px 0;border-top:0.5px solid ',
          (e) => {
            let { theme: t } = e;
            return t.colors.text.tertiary;
          },
          ';',
          (e) => {
            let { theme: t } = e;
            return t.breakpoints.down('s');
          },
          '{margin:24px 0;}'
        ),
        T = (e) =>
          (0, u.iv)(
            'a{text-decoration:underline;transition:color 120ms linear;}a:hover{color:',
            e.colors.text.primary,
            ';}'
          ),
        B = (0, c.Z)(o.xvT.Body.XXS.Regular, { target: 'e1fucke717' })(
          'color:',
          (e) => {
            let { theme: t } = e;
            return t.colors.text.secondary;
          },
          ';',
          (e) => {
            let { theme: t } = e;
            return T(t);
          },
          ' ',
          (e) => {
            let { theme: t } = e;
            return t.breakpoints.down('s');
          },
          '{margin-top:8px;}'
        ),
        X = (0, c.Z)('form', { target: 'e1fucke718' })(
          'margin-top:18px;display:flex;flex-direction:column;justify-content:flex-start;align-items:stretch;gap:12px;',
          (e) => {
            let { theme: t } = e;
            return t.breakpoints.down('s');
          },
          '{justify-content:center;margin-top:12px;flex-direction:row;}'
        ),
        A = (0, c.Z)('label', { target: 'e1fucke719' })(
          'display:flex;flex-direction:row;justify-content:flex-start;align-items:center;gap:12px;'
        ),
        D = (0, c.Z)(o.xvT.Body.XXS.Regular, { target: 'e1fucke720' })(
          'color:',
          (e) => {
            let { theme: t } = e;
            return t.colors.text.secondary;
          },
          ';',
          (e) => {
            let { theme: t } = e;
            return T(t);
          }
        ),
        O = (0, c.Z)(o.XZJ, { target: 'e1fucke721' })(),
        P = (0, c.Z)(o.zxk, { target: 'e1fucke722' })(
          'align-self:flex-end;',
          (e) => {
            let { theme: t } = e;
            return t.breakpoints.down('m');
          },
          '{margin-top:8px;align-self:center;}'
        ),
        R = (0, c.Z)(o.zxk, { target: 'e1fucke723' })(
          'z-index:3;position:absolute;top:30px;right:30px;',
          (e) => {
            let { theme: t } = e;
            return t.breakpoints.down('m');
          },
          '{top:15px;right:15px;}'
        ),
        I = (0, c.Z)('div', { target: 'eatb07r0' })(
          'position:relative;max-width:100%;max-height:100%;aspect-ratio:0.84;overflow:hidden;padding:40px;',
          (e) => {
            let { theme: t } = e;
            return t.breakpoints.down('l');
          },
          '{padding:20px;}',
          (e) => {
            let { theme: t } = e;
            return t.breakpoints.down('m');
          },
          '{padding:0;}',
          (e) => {
            let { theme: t } = e;
            return t.breakpoints.down('s');
          },
          '{position:absolute;height:100%;padding:5%;}'
        ),
        S = {
          opacities: { full: 1, hidden: 0.2 },
          colors: { full: '#FFF', half: '#777' },
          labels: { dashWidth: 0.5 },
          transitions: {
            transition:
              'opacity 170ms ease, transform 250ms cubic-bezier(0.33, 1, 0.68, 1), fill 170ms ease, stroke 170ms ease',
          },
        };
      function _(e) {
        let {
            direction: t,
            pathId: n,
            total: r = 4,
            duration: a = r,
            fillColor: o = S.colors.full,
          } = e,
          s = 'up' === t;
        return Array.from({ length: r }, (e, t) =>
          (0, i.BX)(
            'g',
            {
              children: [
                (0, i.tZ)('path', {
                  d: 'M12.8 1L7.2 5.8L1.5 1',
                  stroke: o,
                  strokeOpacity: '1',
                  strokeWidth: '1.35',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  transform: 'translate(0 '
                    .concat(s ? -7 : 7, ') rotate(')
                    .concat(s ? 90 : -90, ')'),
                }),
                (0, i.tZ)('animateMotion', {
                  dur: ''.concat(a, 's'),
                  begin: ''.concat(-((r / a) * t), 's'),
                  rotate: 'auto',
                  repeatCount: 'indefinite',
                  keyPoints: s ? '1;0' : '0;1',
                  keyTimes: '0;1',
                  children: (0, i.tZ)('mpath', { href: '#'.concat(n) }),
                }),
              ],
            },
            t
          )
        );
      }
      function z(e) {
        let { transform: t, rotation: n, fill: r, stroke: a = S.colors.half } = e;
        return (0, i.tZ)('g', {
          stroke: a,
          strokeWidth: '0.75',
          strokeMiterlimit: '10',
          transform: t,
          fill: r,
          children: (0, i.BX)('g', {
            transform: 'rotate('.concat(n, ')'),
            children: [
              (0, i.tZ)('path', {
                d: 'M24.8447 27.6773C4.78296 39.2603 4.67751 58.0401 24.6087 69.623C44.5398 81.206 76.9613 81.2061 97.0236 69.6245C117.087 58.041 117.192 39.2613 97.2609 27.6783C77.3279 16.0945 44.9064 16.0943 24.8447 27.6773Z',
              }),
              (0, i.tZ)('path', {
                d: 'M9.74156 49.371C9.99444 56.9494 15.2546 63.2779 21.228 67.4562C30.6014 73.9972 42.1673 77.0255 53.4446 78.0074C63.0748 78.7897 72.8589 78.0674 82.2109 75.5962C95.3466 72.1474 111.925 63.2572 112.14 48.5033L112.16 59.2332C112.352 67.0228 106.327 75.3997 96.1295 80.8666C88.2586 85.1643 79.4308 87.4855 70.5561 88.498C55.6176 90.1354 38.7634 88.1385 25.4693 80.8289C19.1249 77.2904 13.0742 72.1824 10.6781 65.115C10.261 63.8482 9.96806 62.5377 9.83875 61.2102C9.62801 59.9484 9.79142 50.1518 9.72725 48.7958C9.72781 48.9875 9.73305 49.1791 9.74106 49.3696L9.74156 49.371Z',
              }),
            ],
          }),
        });
      }
      function E(e) {
        let { selected: t, fillColor: n } = e,
          r = t ? S.opacities.full : S.opacities.hidden;
        return (0, i.BX)('g', {
          fill: n,
          opacity: r,
          style: S.transitions,
          children: [
            (0, i.BX)('g', {
              fillOpacity: '0.6',
              children: [
                (0, i.tZ)('path', {
                  d: 'M150.123 205.607C153.298 209.463 152.632 217.274 148.389 224.466C145.926 228.732 142.773 231.978 139.477 233.878C139.477 233.878 139.559 233.656 149.848 205.29L150.126 205.607H150.123Z',
                }),
                (0, i.tZ)('path', {
                  d: 'M128.969 217.185L139.425 218.102C139.441 223.31 139.457 228.99 139.47 233.882C139.47 233.882 139.388 233.753 128.969 217.185Z',
                }),
                (0, i.tZ)('path', {
                  d: 'M139.415 214.632L130.336 214.027L139.384 202.799L139.415 214.632Z',
                }),
                (0, i.tZ)('path', {
                  d: 'M148.46 203.561L139.381 202.797L139.352 192.856L148.46 203.561Z',
                }),
                (0, i.tZ)('path', {
                  d: 'M150.123 205.607C153.298 209.463 152.632 217.274 148.389 224.466C145.926 228.732 142.773 231.978 139.477 233.878C139.477 233.878 139.559 233.656 149.848 205.29L150.126 205.607H150.123Z',
                }),
                (0, i.tZ)('path', {
                  d: 'M128.969 217.185L139.425 218.102C139.441 223.31 139.457 228.99 139.47 233.882C139.47 233.882 139.388 233.753 128.969 217.185Z',
                }),
                (0, i.tZ)('path', {
                  d: 'M139.415 214.632L130.336 214.027L139.384 202.799L139.415 214.632Z',
                }),
                (0, i.tZ)('path', {
                  d: 'M148.46 203.561L139.381 202.797L139.352 192.856L148.46 203.561Z',
                }),
              ],
            }),
            (0, i.BX)('g', {
              fillOpacity: '1',
              children: [
                (0, i.tZ)('path', {
                  d: 'M139.384 202.797L130.336 214.026L139.355 192.856L139.384 202.797Z',
                }),
                (0, i.tZ)('path', {
                  d: 'M128.694 217.974L128.966 217.342L139.465 233.88C136.169 235.783 132.87 236.264 130.528 234.774C126.259 232.498 125.551 225.478 128.694 217.974Z',
                }),
                (0, i.tZ)('path', {
                  d: 'M139.384 202.797L130.336 214.026L139.355 192.856L139.384 202.797Z',
                }),
                (0, i.tZ)('path', {
                  d: 'M128.694 217.974L128.966 217.342L139.465 233.88C136.169 235.783 132.87 236.264 130.528 234.774C126.259 232.498 125.551 225.478 128.694 217.974Z',
                }),
              ],
            }),
            (0, i.BX)('g', {
              fillOpacity: '0.2',
              children: [
                (0, i.tZ)('path', {
                  d: 'M139.422 218.102L149.839 205.135L139.467 233.882C139.454 228.992 139.438 223.309 139.422 218.102Z',
                }),
                (0, i.tZ)('path', {
                  d: 'M139.415 214.631L139.383 202.798L148.462 203.562L139.415 214.631Z',
                }),
                (0, i.tZ)('path', {
                  d: 'M139.422 218.102L149.839 205.135L139.467 233.882C139.454 228.992 139.438 223.309 139.422 218.102Z',
                }),
                (0, i.tZ)('path', {
                  d: 'M139.415 214.631L139.383 202.798L148.462 203.562L139.415 214.631Z',
                }),
              ],
            }),
          ],
        });
      }
      function W(e) {
        let { selected: t, fillColor: n } = e,
          r = t ? S.opacities.full : S.opacities.hidden;
        return (0, i.tZ)('g', {
          opacity: r,
          style: S.transitions,
          children: (0, i.BX)('g', {
            fill: n,
            fillOpacity: '0.9',
            style: S.transitions,
            children: [
              (0, i.tZ)('path', {
                d: 'M271.02 201.202C271.557 201.636 271.878 202.193 271.877 202.687L271.868 205.65C274.338 207.323 276.266 210.538 276.688 213.502V213.626C276.687 214.12 276.363 214.304 275.933 214.055L274.215 213.063C273.892 212.877 273.571 212.445 273.464 212.012C272.933 209.851 271.861 208.489 269.927 207.373C267.778 206.132 266.7 206.623 266.696 208.351C266.691 210.08 267.332 211.439 270.554 213.794C275.065 217.016 277.317 219.8 277.304 224.121C277.295 227.454 275.139 228.806 271.914 227.562L271.906 230.525C271.797 231.08 271.473 231.265 271.043 231.016L269.432 230.086C268.895 229.652 268.574 229.096 268.575 228.602L268.584 225.639C265.04 222.975 263.327 219.761 262.906 216.426V216.303C262.908 215.809 263.232 215.624 263.661 215.873L265.487 216.927C265.81 217.113 266.131 217.546 266.237 218.102C266.554 220.139 267.517 222.056 270.311 223.669C272.352 224.847 273.86 224.358 273.865 222.382C273.871 220.407 272.906 219.108 269.9 216.754C265.389 213.532 263.245 210.686 263.257 206.612C263.265 203.526 265.313 202.236 268.538 203.603L268.546 200.763C268.655 200.208 268.979 200.024 269.409 200.271L271.02 201.202L271.02 201.202Z',
              }),
              (0, i.tZ)('path', {
                d: 'M288.721 219.709C291.911 233.297 286.289 242.54 276.072 240.351C275.964 240.413 275.749 240.289 275.642 240.226C275.212 239.855 274.999 239.361 275 238.867L275.005 237.139C275.007 236.522 275.222 236.275 275.652 236.276C280.063 236.968 283.619 235.064 285.245 230.81C288.388 223.103 284.121 209.882 275.751 201.587C275.43 201.153 275.109 200.474 275.11 199.98L275.115 198.252C275.116 198.005 275.116 197.881 275.224 197.82C275.303 197.503 275.555 197.42 275.853 197.592C275.961 197.654 276.077 197.752 276.192 197.884C282.094 203.518 286.806 211.555 288.72 219.709H288.721Z',
              }),
              (0, i.tZ)('path', {
                d: 'M264.808 191.187C265.238 191.558 265.451 192.053 265.45 192.547L265.445 194.275C265.443 194.892 265.227 195.139 264.797 195.137C260.387 194.446 256.831 196.349 255.205 200.604C252.062 208.311 256.329 221.532 264.699 229.827C265.02 230.26 265.341 230.94 265.34 231.31L265.335 233.038C265.335 233.285 265.334 233.409 265.227 233.47C265.147 233.786 264.895 233.87 264.597 233.699C264.489 233.636 264.374 233.538 264.258 233.406C258.248 227.71 253.643 219.734 251.729 211.704C248.539 198.116 254.161 188.873 264.378 191.061C264.486 191.001 264.7 191.125 264.808 191.186V191.187Z',
              }),
            ],
          }),
        });
      }
      var N = (0, r.memo)(
          (0, r.forwardRef)(function (e, t) {
            let {
              style: n,
              className: r,
              base: a,
              selectedPart: o,
              backgroundFillColor: s,
              textFillColor: l,
              pathsFillColor: d,
              themeMode: u,
            } = e;
            return (0, i.BX)('svg', {
              viewBox: '0 0 383 449',
              fill: 'none',
              className: r,
              ref: t,
              style: n,
              children: [
                (0, i.BX)('g', {
                  children: [
                    (0, i.BX)('g', {
                      opacity: 0 === o ? S.opacities.full : S.opacities.hidden,
                      style: S.transitions,
                      children: [
                        (0, i.tZ)('path', {
                          d: 'M0.93348 212.604C0.93348 211.577 1.11981 210.699 1.49248 209.971C1.86515 209.243 2.39598 208.691 3.08498 208.314C3.77831 207.933 4.59298 207.742 5.52898 207.742C6.39998 207.742 7.13665 207.898 7.73898 208.21C8.34565 208.518 8.80281 208.91 9.11048 209.386C9.41815 209.859 9.58931 210.342 9.62398 210.836V211.031H8.51248C8.48215 210.676 8.36081 210.327 8.14848 209.984C7.94048 209.638 7.61981 209.35 7.18648 209.12C6.75315 208.886 6.20715 208.769 5.54848 208.769C4.83781 208.769 4.22681 208.918 3.71548 209.217C3.20848 209.516 2.81848 209.954 2.54548 210.53C2.27681 211.102 2.14248 211.794 2.14248 212.604C2.14248 213.414 2.27681 214.108 2.54548 214.684C2.81848 215.256 3.20848 215.691 3.71548 215.99C4.22681 216.289 4.83781 216.439 5.54848 216.439C6.20715 216.439 6.75315 216.322 7.18648 216.088C7.62415 215.85 7.94915 215.555 8.16148 215.204C8.37381 214.853 8.49948 214.489 8.53848 214.112H9.64998V214.307C9.60665 214.814 9.42898 215.308 9.11698 215.789C8.80931 216.27 8.35215 216.671 7.74548 216.991C7.14315 217.308 6.40431 217.466 5.52898 217.466C4.59298 217.466 3.77831 217.277 3.08498 216.9C2.39598 216.519 1.86515 215.964 1.49248 215.236C1.11981 214.508 0.93348 213.631 0.93348 212.604ZM10.7398 213.975C10.7398 213.243 10.8785 212.617 11.1558 212.097C11.4375 211.577 11.8318 211.183 12.3388 210.914C12.8458 210.641 13.4373 210.504 14.1133 210.504C14.785 210.504 15.3743 210.641 15.8813 210.914C16.3927 211.183 16.787 211.577 17.0643 212.097C17.346 212.617 17.4868 213.243 17.4868 213.975C17.4868 214.703 17.346 215.33 17.0643 215.854C16.787 216.374 16.3927 216.768 15.8813 217.037C15.3743 217.306 14.785 217.44 14.1133 217.44C13.4373 217.44 12.8458 217.306 12.3388 217.037C11.8318 216.768 11.4375 216.374 11.1558 215.854C10.8785 215.33 10.7398 214.703 10.7398 213.975ZM11.8968 213.975C11.8968 214.513 11.9878 214.972 12.1698 215.353C12.3562 215.73 12.614 216.016 12.9433 216.211C13.277 216.406 13.667 216.504 14.1133 216.504C14.5553 216.504 14.941 216.406 15.2703 216.211C15.604 216.016 15.8618 215.73 16.0438 215.353C16.2302 214.972 16.3233 214.513 16.3233 213.975C16.3233 213.438 16.2323 212.981 16.0503 212.604C15.8683 212.223 15.6105 211.934 15.2768 211.739C14.9432 211.544 14.5553 211.447 14.1133 211.447C13.667 211.447 13.277 211.544 12.9433 211.739C12.614 211.934 12.3562 212.223 12.1698 212.604C11.9878 212.981 11.8968 213.438 11.8968 213.975ZM20.1134 207.924V217.284H18.9694V207.924H20.1134ZM23.1475 207.924V217.284H22.0035V207.924H23.1475ZM24.9597 212.5C25.003 212.093 25.146 211.739 25.3887 211.44C25.6357 211.137 25.9694 210.905 26.3897 210.745C26.81 210.585 27.3019 210.504 27.8652 210.504C28.7362 210.504 29.4035 210.706 29.8672 211.109C30.3352 211.508 30.5692 212.112 30.5692 212.922V217.284H29.5032V216.374H29.3992C29.2389 216.673 28.9659 216.924 28.5802 217.128C28.1989 217.327 27.6962 217.427 27.0722 217.427C26.5955 217.427 26.173 217.349 25.8047 217.193C25.4364 217.037 25.1504 216.812 24.9467 216.517C24.743 216.222 24.6412 215.873 24.6412 215.47C24.6412 214.851 24.8492 214.376 25.2652 214.047C25.6812 213.713 26.251 213.501 26.9747 213.41L29.4642 213.098V212.857C29.4642 212.35 29.3299 211.984 29.0612 211.759C28.7925 211.529 28.3852 211.414 27.8392 211.414C27.2932 211.414 26.8664 211.521 26.5587 211.733C26.251 211.945 26.0755 212.266 26.0322 212.695H24.9597V212.5ZM25.7787 215.418C25.7787 215.761 25.9109 216.027 26.1752 216.218C26.4439 216.409 26.8057 216.504 27.2607 216.504C27.6767 216.504 28.0494 216.428 28.3787 216.276C28.7124 216.12 28.9767 215.884 29.1717 215.568C29.3667 215.252 29.4642 214.859 29.4642 214.391V213.982L27.2022 214.281C26.7429 214.342 26.3897 214.463 26.1427 214.645C25.9 214.827 25.7787 215.085 25.7787 215.418ZM33.0621 210.66V208.84H34.2061V210.66H36.1886V211.59H34.2061V216.192L34.3101 216.296H36.1691V217.284H34.7651C34.2147 217.284 33.7922 217.147 33.4976 216.874C33.2072 216.601 33.0621 216.198 33.0621 215.665V211.59H31.4956V210.66H33.0621ZM37.0572 213.969C37.0572 213.232 37.1872 212.604 37.4472 212.084C37.7072 211.564 38.0777 211.172 38.5587 210.907C39.0397 210.639 39.6096 210.504 40.2682 210.504C40.9182 210.504 41.4707 210.634 41.9257 210.894C42.3851 211.15 42.7317 211.516 42.9657 211.993C43.2041 212.47 43.3232 213.033 43.3232 213.683V214.255H38.1622C38.1709 214.714 38.2597 215.115 38.4287 215.457C38.6021 215.795 38.8447 216.058 39.1567 216.244C39.4731 216.426 39.8436 216.517 40.2682 216.517C40.6539 216.517 40.9811 216.454 41.2497 216.328C41.5227 216.198 41.7329 216.036 41.8802 215.841C42.0276 215.642 42.1207 215.431 42.1597 215.21H43.1867V215.405C43.1304 215.717 42.9939 216.029 42.7772 216.341C42.5649 216.649 42.2486 216.909 41.8282 217.121C41.4122 217.334 40.8966 217.44 40.2812 217.44C39.6226 217.44 39.0506 217.308 38.5652 217.043C38.0842 216.775 37.7116 216.38 37.4472 215.86C37.1872 215.34 37.0572 214.71 37.0572 213.969ZM42.2312 213.351C42.2269 212.97 42.1489 212.634 41.9972 212.344C41.8456 212.054 41.6224 211.828 41.3277 211.668C41.0374 211.503 40.6821 211.421 40.2617 211.421C39.8501 211.421 39.4926 211.503 39.1892 211.668C38.8902 211.833 38.6541 212.06 38.4807 212.35C38.3117 212.641 38.2121 212.974 38.1817 213.351H42.2312ZM45.922 210.66V211.453H46.026C46.1517 211.193 46.3402 210.992 46.5915 210.849C46.8428 210.706 47.2003 210.634 47.664 210.634H48.587V211.622H47.69C47.079 211.622 46.637 211.789 46.364 212.123C46.0953 212.452 45.961 212.961 45.961 213.65V217.284H44.817V210.66H45.922ZM49.4871 212.5C49.5304 212.093 49.6734 211.739 49.9161 211.44C50.1631 211.137 50.4967 210.905 50.9171 210.745C51.3374 210.585 51.8292 210.504 52.3926 210.504C53.2636 210.504 53.9309 210.706 54.3946 211.109C54.8626 211.508 55.0966 212.112 55.0966 212.922V217.284H54.0306V216.374H53.9266C53.7662 216.673 53.4932 216.924 53.1076 217.128C52.7262 217.327 52.2236 217.427 51.5996 217.427C51.1229 217.427 50.7004 217.349 50.3321 217.193C49.9637 217.037 49.6777 216.812 49.4741 216.517C49.2704 216.222 49.1686 215.873 49.1686 215.47C49.1686 214.851 49.3766 214.376 49.7926 214.047C50.2086 213.713 50.7784 213.501 51.5021 213.41L53.9916 213.098V212.857C53.9916 212.35 53.8572 211.984 53.5886 211.759C53.3199 211.529 52.9126 211.414 52.3666 211.414C51.8206 211.414 51.3937 211.521 51.0861 211.733C50.7784 211.945 50.6029 212.266 50.5596 212.695H49.4871V212.5ZM50.3061 215.418C50.3061 215.761 50.4382 216.027 50.7026 216.218C50.9712 216.409 51.3331 216.504 51.7881 216.504C52.2041 216.504 52.5767 216.428 52.9061 216.276C53.2397 216.12 53.5041 215.884 53.6991 215.568C53.8941 215.252 53.9916 214.859 53.9916 214.391V213.982L51.7296 214.281C51.2702 214.342 50.9171 214.463 50.6701 214.645C50.4274 214.827 50.3061 215.085 50.3061 215.418ZM58.0723 207.924V217.284H56.9283V207.924H58.0723Z',
                          fill: l,
                        }),
                        (0, i.tZ)('path', {
                          d: 'M110.931 212.785L69.9941 212.782',
                          stroke: d,
                          strokeWidth: S.labels.dashWidth,
                          strokeLinecap: 'round',
                        }),
                      ],
                    }),
                    (0, i.tZ)('g', {
                      opacity: 0 === o ? S.opacities.full : S.opacities.hidden,
                      style: S.transitions,
                      children: (0, i.tZ)('path', {
                        d: 'M178.125 95.8132L156.42 95.8132C141.682 95.8132 129.734 107.761 129.734 122.499L129.734 312.156C129.734 326.894 141.682 338.841 156.42 338.841L178.125 338.841',
                        stroke: d,
                        strokeOpacity: '0.9',
                        strokeWidth: '1.5',
                        strokeLinecap: 'round',
                        strokeDasharray: '0.09 3.6',
                        id: 'collateral-path',
                      }),
                    }),
                    (0, i.tZ)('g', {
                      opacity: 0 === o ? 1 : 0,
                      style: S.transitions,
                      children: (0, i.tZ)(_, {
                        direction: 'down',
                        pathId: 'collateral-path',
                        total: 4,
                        fillColor: d,
                      }),
                    }),
                    (0, i.tZ)(z, {
                      transform: 'translate(196.5 180.4) scale(0.86) rotate(20.6)',
                      fill: s,
                      rotation: 90,
                    }),
                    (0, i.tZ)('image', {
                      x: '101.398',
                      y: '168.753',
                      width: '65.9989',
                      height: '88.8144',
                      href: ''.concat(a, '/vertical-color-coin.png'),
                      opacity: 0 === o ? 1 : 0,
                      style: S.transitions,
                    }),
                    (0, i.tZ)(E, { selected: 0 === o, fillColor: 0 === o ? S.colors.full : d }),
                  ],
                }),
                (0, i.BX)('g', {
                  children: [
                    (0, i.BX)('g', {
                      opacity: o % 2 == 1 ? S.opacities.full : S.opacities.hidden,
                      style: S.transitions,
                      children: [
                        (0, i.tZ)('path', {
                          d: 'M353.817 208.276V216.589H359.017V217.636H352.621V208.276H353.817ZM359.826 214.327C359.826 213.595 359.965 212.969 360.242 212.449C360.524 211.929 360.918 211.534 361.425 211.266C361.932 210.993 362.524 210.856 363.2 210.856C363.871 210.856 364.461 210.993 364.968 211.266C365.479 211.534 365.873 211.929 366.151 212.449C366.432 212.969 366.573 213.595 366.573 214.327C366.573 215.055 366.432 215.681 366.151 216.206C365.873 216.726 365.479 217.12 364.968 217.389C364.461 217.657 363.871 217.792 363.2 217.792C362.524 217.792 361.932 217.657 361.425 217.389C360.918 217.12 360.524 216.726 360.242 216.206C359.965 215.681 359.826 215.055 359.826 214.327ZM360.983 214.327C360.983 214.865 361.074 215.324 361.256 215.705C361.443 216.082 361.7 216.368 362.03 216.563C362.363 216.758 362.753 216.856 363.2 216.856C363.642 216.856 364.027 216.758 364.357 216.563C364.69 216.368 364.948 216.082 365.13 215.705C365.317 215.324 365.41 214.865 365.41 214.327C365.41 213.79 365.319 213.333 365.137 212.956C364.955 212.574 364.697 212.286 364.363 212.091C364.03 211.896 363.642 211.799 363.2 211.799C362.753 211.799 362.363 211.896 362.03 212.091C361.7 212.286 361.443 212.574 361.256 212.956C361.074 213.333 360.983 213.79 360.983 214.327ZM367.952 212.852C367.996 212.444 368.139 212.091 368.381 211.792C368.628 211.489 368.962 211.257 369.382 211.097C369.803 210.936 370.295 210.856 370.858 210.856C371.729 210.856 372.396 211.058 372.86 211.461C373.328 211.859 373.562 212.464 373.562 213.274V217.636H372.496V216.726H372.392C372.232 217.025 371.959 217.276 371.573 217.48C371.192 217.679 370.689 217.779 370.065 217.779C369.588 217.779 369.166 217.701 368.797 217.545C368.429 217.389 368.143 217.163 367.939 216.869C367.736 216.574 367.634 216.225 367.634 215.822C367.634 215.203 367.842 214.728 368.258 214.399C368.674 214.065 369.244 213.853 369.967 213.762L372.457 213.45V213.209C372.457 212.702 372.323 212.336 372.054 212.111C371.785 211.881 371.378 211.766 370.832 211.766C370.286 211.766 369.859 211.872 369.551 212.085C369.244 212.297 369.068 212.618 369.025 213.047H367.952V212.852ZM368.771 215.77C368.771 216.113 368.904 216.379 369.168 216.57C369.437 216.76 369.798 216.856 370.253 216.856C370.669 216.856 371.042 216.78 371.371 216.628C371.705 216.472 371.969 216.236 372.164 215.92C372.359 215.603 372.457 215.211 372.457 214.743V214.334L370.195 214.633C369.736 214.693 369.382 214.815 369.135 214.997C368.893 215.179 368.771 215.437 368.771 215.77ZM376.505 211.012V211.864H376.609C377.047 211.196 377.786 210.863 378.826 210.863C379.614 210.863 380.228 211.064 380.665 211.467C381.107 211.87 381.328 212.468 381.328 213.261V217.636H380.184V213.372C380.184 212.336 379.645 211.818 378.566 211.818C378.176 211.818 377.829 211.896 377.526 212.052C377.222 212.208 376.982 212.444 376.804 212.761C376.627 213.077 376.538 213.469 376.538 213.937V217.636H375.394V211.012H376.505Z',
                          fill: l,
                        }),
                        (0, i.tZ)('path', {
                          d: 'M340.577 213.136H264.969',
                          stroke: d,
                          strokeWidth: S.labels.dashWidth,
                          strokeLinecap: 'round',
                        }),
                      ],
                    }),
                    (0, i.tZ)('g', {
                      opacity: o % 2 == 1 ? S.opacities.full : S.opacities.hidden,
                      style: S.transitions,
                      children: (0, i.tZ)('path', {
                        d: 'M228.828 338.842L250.533 338.842C265.271 338.842 277.219 326.894 277.219 312.157L277.219 122.499C277.219 107.761 265.271 95.814 250.533 95.814L228.828 95.814',
                        stroke: d,
                        strokeOpacity: '0.9',
                        strokeWidth: '1.5',
                        strokeLinecap: 'round',
                        strokeDasharray: '0.09 3.6',
                        id: 'load-path',
                      }),
                    }),
                    (0, i.tZ)('g', {
                      opacity: 1 === o ? 1 : 0,
                      style: S.transitions,
                      children: (0, i.tZ)(_, {
                        direction: 'down',
                        pathId: 'load-path',
                        fillColor: d,
                      }),
                    }),
                    (0, i.tZ)('g', {
                      opacity: 3 === o ? 1 : 0,
                      style: S.transitions,
                      children: (0, i.tZ)(_, {
                        direction: 'up',
                        pathId: 'load-path',
                        fillColor: d,
                      }),
                    }),
                    (0, i.tZ)(z, {
                      transform: 'translate(248.2 278.3) scale(0.86) rotate(-20)',
                      rotation: -90,
                      fill: s,
                    }),
                    (0, i.tZ)('image', {
                      width: '65.9989',
                      height: '88.8144',
                      transform: 'matrix(-1 0 0 1 306.789 168.753)',
                      href: ''.concat(a, '/vertical-color-coin.png'),
                      opacity: o % 2 == 1 ? 1 : 0,
                      style: S.transitions,
                    }),
                    (0, i.tZ)(W, {
                      selected: o % 2 == 1,
                      fillColor: o % 2 == 1 ? S.colors.full : d,
                    }),
                    (0, i.tZ)('g', {
                      style: S.transitions,
                      opacity: 3 === o ? 1 : 0,
                      transform: 3 === o ? '' : 'translate(-6, 2)',
                      children: (0, i.tZ)('image', {
                        width: '50',
                        height: '45',
                        x: '270',
                        y: '180',
                        href: ''.concat(a, '/yield-').concat(u, '.png'),
                        style: { filter: 'brightness(130%) contrast(0.9)' },
                      }),
                    }),
                  ],
                }),
                (0, i.BX)('g', {
                  children: [
                    (0, i.tZ)('path', {
                      d: 'M5.53206 69.8597C6.0954 69.8597 6.5959 69.9486 7.03356 70.1262C7.47123 70.3039 7.81356 70.5704 8.06056 70.9257C8.30756 71.2767 8.43106 71.7079 8.43106 72.2192C8.43106 72.6786 8.34873 73.0577 8.18406 73.3567C8.0194 73.6557 7.82223 73.8811 7.59256 74.0327C7.3629 74.1801 7.13323 74.2797 6.90356 74.3317V74.4357C7.3369 74.5354 7.72906 74.7542 8.08006 75.0922C8.43106 75.4302 8.60656 75.9567 8.60656 76.6717C8.60656 77.2264 8.4744 77.6966 8.21006 78.0822C7.95006 78.4636 7.59256 78.7496 7.13756 78.9402C6.68256 79.1266 6.16256 79.2197 5.57756 79.2197H1.41106V69.8597H5.53206ZM5.44756 78.2122C6.05856 78.2122 6.54173 78.0822 6.89706 77.8222C7.25673 77.5579 7.43656 77.1462 7.43656 76.5872C7.43656 76.0282 7.2589 75.6187 6.90356 75.3587C6.54823 75.0987 6.0629 74.9687 5.44756 74.9687H2.58756V78.2122H5.44756ZM5.38256 73.9612C5.96323 73.9612 6.42473 73.8377 6.76706 73.5907C7.11373 73.3437 7.28706 72.9516 7.28706 72.4142C7.28706 71.8769 7.11373 71.4847 6.76706 71.2377C6.42473 70.9907 5.96323 70.8672 5.38256 70.8672H2.58756V73.9612H5.38256ZM9.70811 75.9112C9.70811 75.1789 9.84678 74.5527 10.1241 74.0327C10.4058 73.5127 10.8001 73.1184 11.3071 72.8497C11.8141 72.5767 12.4056 72.4402 13.0816 72.4402C13.7533 72.4402 14.3426 72.5767 14.8496 72.8497C15.3609 73.1184 15.7553 73.5127 16.0326 74.0327C16.3143 74.5527 16.4551 75.1789 16.4551 75.9112C16.4551 76.6392 16.3143 77.2654 16.0326 77.7897C15.7553 78.3097 15.3609 78.7041 14.8496 78.9727C14.3426 79.2414 13.7533 79.3757 13.0816 79.3757C12.4056 79.3757 11.8141 79.2414 11.3071 78.9727C10.8001 78.7041 10.4058 78.3097 10.1241 77.7897C9.84678 77.2654 9.70811 76.6392 9.70811 75.9112ZM10.8651 75.9112C10.8651 76.4486 10.9561 76.9079 11.1381 77.2892C11.3244 77.6662 11.5823 77.9522 11.9116 78.1472C12.2453 78.3422 12.6353 78.4397 13.0816 78.4397C13.5236 78.4397 13.9093 78.3422 14.2386 78.1472C14.5723 77.9522 14.8301 77.6662 15.0121 77.2892C15.1984 76.9079 15.2916 76.4486 15.2916 75.9112C15.2916 75.3739 15.2006 74.9167 15.0186 74.5397C14.8366 74.1584 14.5788 73.8702 14.2451 73.6752C13.9114 73.4802 13.5236 73.3827 13.0816 73.3827C12.6353 73.3827 12.2453 73.4802 11.9116 73.6752C11.5823 73.8702 11.3244 74.1584 11.1381 74.5397C10.9561 74.9167 10.8651 75.3739 10.8651 75.9112ZM19.0426 72.5962V73.3892H19.1466C19.2723 73.1292 19.4608 72.9277 19.7121 72.7847C19.9635 72.6417 20.321 72.5702 20.7846 72.5702H21.7076V73.5582H20.8106C20.1996 73.5582 19.7576 73.7251 19.4846 74.0587C19.216 74.3881 19.0816 74.8972 19.0816 75.5862V79.2197H17.9376V72.5962H19.0426ZM24.0827 72.5962V73.3892H24.1867C24.3123 73.1292 24.5008 72.9277 24.7522 72.7847C25.0035 72.6417 25.361 72.5702 25.8247 72.5702H26.7477V73.5582H25.8507C25.2397 73.5582 24.7977 73.7251 24.5247 74.0587C24.256 74.3881 24.1217 74.8972 24.1217 75.5862V79.2197H22.9777V72.5962H24.0827ZM27.3673 75.9112C27.3673 75.1789 27.506 74.5527 27.7833 74.0327C28.065 73.5127 28.4593 73.1184 28.9663 72.8497C29.4733 72.5767 30.0648 72.4402 30.7408 72.4402C31.4125 72.4402 32.0018 72.5767 32.5088 72.8497C33.0201 73.1184 33.4145 73.5127 33.6918 74.0327C33.9735 74.5527 34.1143 75.1789 34.1143 75.9112C34.1143 76.6392 33.9735 77.2654 33.6918 77.7897C33.4145 78.3097 33.0201 78.7041 32.5088 78.9727C32.0018 79.2414 31.4125 79.3757 30.7408 79.3757C30.0648 79.3757 29.4733 79.2414 28.9663 78.9727C28.4593 78.7041 28.065 78.3097 27.7833 77.7897C27.506 77.2654 27.3673 76.6392 27.3673 75.9112ZM28.5243 75.9112C28.5243 76.4486 28.6153 76.9079 28.7973 77.2892C28.9836 77.6662 29.2415 77.9522 29.5708 78.1472C29.9045 78.3422 30.2945 78.4397 30.7408 78.4397C31.1828 78.4397 31.5685 78.3422 31.8978 78.1472C32.2315 77.9522 32.4893 77.6662 32.6713 77.2892C32.8576 76.9079 32.9508 76.4486 32.9508 75.9112C32.9508 75.3739 32.8598 74.9167 32.6778 74.5397C32.4958 74.1584 32.238 73.8702 31.9043 73.6752C31.5706 73.4802 31.1828 73.3827 30.7408 73.3827C30.2945 73.3827 29.9045 73.4802 29.5708 73.6752C29.2415 73.8702 28.9836 74.1584 28.7973 74.5397C28.6153 74.9167 28.5243 75.3739 28.5243 75.9112ZM35.949 72.5962L37.2945 77.9132H37.405L39.017 72.5962H40.2845L41.903 77.9132H42.007L43.346 72.5962H44.4055V72.7912L42.67 79.2197H41.2985L39.6865 73.9222H39.5825L37.9705 79.2197H36.5925L34.857 72.7912V72.5962H35.949ZM45.1661 75.9047C45.1661 75.1681 45.2961 74.5397 45.5561 74.0197C45.8161 73.4997 46.1866 73.1076 46.6676 72.8432C47.1486 72.5746 47.7185 72.4402 48.3771 72.4402C49.0271 72.4402 49.5796 72.5702 50.0346 72.8302C50.494 73.0859 50.8406 73.4521 51.0746 73.9287C51.313 74.4054 51.4321 74.9687 51.4321 75.6187V76.1907H46.2711C46.2798 76.6501 46.3686 77.0509 46.5376 77.3932C46.711 77.7312 46.9536 77.9934 47.2656 78.1797C47.582 78.3617 47.9525 78.4527 48.3771 78.4527C48.7628 78.4527 49.09 78.3899 49.3586 78.2642C49.6316 78.1342 49.8418 77.9717 49.9891 77.7767C50.1365 77.5774 50.2296 77.3672 50.2686 77.1462H51.2956V77.3412C51.2393 77.6532 51.1028 77.9652 50.8861 78.2772C50.6738 78.5849 50.3575 78.8449 49.9371 79.0572C49.5211 79.2696 49.0055 79.3757 48.3901 79.3757C47.7315 79.3757 47.1595 79.2436 46.6741 78.9792C46.1931 78.7106 45.8205 78.3162 45.5561 77.7962C45.2961 77.2762 45.1661 76.6457 45.1661 75.9047ZM50.3401 75.2872C50.3358 74.9059 50.2578 74.5701 50.1061 74.2797C49.9545 73.9894 49.7313 73.7641 49.4366 73.6037C49.1463 73.4391 48.791 73.3567 48.3706 73.3567C47.959 73.3567 47.6015 73.4391 47.2981 73.6037C46.9991 73.7684 46.763 73.9959 46.5896 74.2862C46.4206 74.5766 46.321 74.9102 46.2906 75.2872H50.3401ZM54.0309 72.5962V73.3892H54.1349C54.2606 73.1292 54.4491 72.9277 54.7004 72.7847C54.9517 72.6417 55.3092 72.5702 55.7729 72.5702H56.6959V73.5582H55.7989C55.1879 73.5582 54.7459 73.7251 54.4729 74.0587C54.2042 74.3881 54.0699 74.8972 54.0699 75.5862V79.2197H52.9259V72.5962H54.0309Z',
                      fill: l,
                    }),
                    (0, i.tZ)('path', {
                      d: 'M202.828 74.7213L67.9941 74.7183',
                      stroke: d,
                      strokeWidth: S.labels.dashWidth,
                      strokeLinecap: 'round',
                    }),
                    (0, i.tZ)('image', {
                      x: '161.445',
                      y: '0.66748',
                      width: '83.1511',
                      height: '122.947',
                      href: ''.concat(a, '/person.png'),
                    }),
                    (0, i.BX)('g', {
                      style: S.transitions,
                      transform: 2 === o ? '' : 'translate(5, 3)',
                      opacity: 2 === o ? 1 : 0,
                      children: [
                        (0, i.tZ)('image', {
                          x: '220.031',
                          y: '20.6509',
                          width: '93.3986',
                          height: '124.531',
                          href: ''.concat(a, '/screen.png'),
                        }),
                        (0, i.BX)('g', {
                          transform: 'translate(-2 2)',
                          opacity: 2 === o ? 1 : 0,
                          style: S.transitions,
                          children: [
                            (0, i.BX)('g', {
                              opacity: '0.5',
                              stroke: d,
                              strokeWidth: '1.33',
                              strokeLinecap: 'round',
                              strokeDasharray: '0.13 4',
                              children: [
                                (0, i.tZ)('line', {
                                  x1: '0.667133',
                                  y1: '-0.667133',
                                  x2: '99.7334',
                                  y2: '-0.667133',
                                  transform:
                                    'matrix(-0.868243 0.496139 0.496139 0.868243 313.43 33.1038)',
                                }),
                                (0, i.tZ)('line', {
                                  x1: '0.667133',
                                  y1: '-0.667133',
                                  x2: '99.7334',
                                  y2: '-0.667133',
                                  transform:
                                    'matrix(-0.868243 0.496139 0.496139 0.868243 313.43 45.5566)',
                                }),
                                (0, i.tZ)('line', {
                                  x1: '0.667133',
                                  y1: '-0.667133',
                                  x2: '99.7334',
                                  y2: '-0.667133',
                                  transform:
                                    'matrix(-0.868243 0.496139 0.496139 0.868243 313.43 58.0107)',
                                }),
                                (0, i.tZ)('line', {
                                  x1: '0.667133',
                                  y1: '-0.667133',
                                  x2: '99.7334',
                                  y2: '-0.667133',
                                  transform:
                                    'matrix(-0.868243 0.496139 0.496139 0.868243 313.43 70.4636)',
                                }),
                                (0, i.tZ)('line', {
                                  x1: '0.667133',
                                  y1: '-0.667133',
                                  x2: '99.7334',
                                  y2: '-0.667133',
                                  transform:
                                    'matrix(-0.868243 0.496139 0.496139 0.868243 313.43 82.9153)',
                                }),
                              ],
                            }),
                            (0, i.BX)('g', {
                              stroke: S.colors.full,
                              strokeWidth: '1.33427',
                              strokeLinecap: 'round',
                              children: [
                                (0, i.tZ)('path', {
                                  d: 'M233.727 90.3884C233.996 89.9752 234.242 89.5523 234.475 89.1253C237.352 83.8549 243.924 77.2409 247.624 81.9704V81.9704C249.198 83.9838 250.552 86.2015 253.521 88.048C258.165 90.9364 264.547 90.0243 268.458 86.506C271.882 83.4263 274.155 79.5994 278.231 77.1084C279.927 76.0719 282.283 74.8904 284.355 75.7296C286.438 76.5729 287.036 78.9452 287.715 80.7368C288.694 83.3183 291.025 90.513 295.51 88.7556C297.904 87.8177 299.931 85.0168 301.539 83.2767C303.048 81.6435 304.487 79.9696 305.955 78.3057',
                                }),
                                (0, i.tZ)('path', {
                                  d: 'M233.727 90.3884C237.282 79.4693 246.18 83.5392 253.521 91.9345C255.594 94.3052 257.896 95.3749 260.158 95.2813C267.436 94.9804 269.253 85.2428 271.628 78.357C273.229 73.7143 275.014 69.8123 277.435 66.853C279.131 64.7799 281.487 62.417 283.559 64.0954C285.642 65.782 286.24 70.5266 286.919 74.1098C287.898 79.2728 290.884 97.639 295.37 94.1242C297.764 92.2484 299.931 85.8721 301.539 82.3918C303.048 79.1254 303.242 78.7726 304.71 75.4448',
                                  strokeDasharray: '0.13 2.67',
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, i.BX)('g', {
                  children: [
                    (0, i.BX)('g', {
                      opacity: 2 != o ? S.opacities.full : S.opacities.hidden,
                      children: [
                        (0, i.tZ)('path', {
                          d: 'M2.77322 368.734L6.28322 376.853H6.38722L9.89722 368.734H11.3857V378.094H10.2807V370.645H10.1767L6.95922 378.094H5.68522L2.46772 370.645H2.36372V378.094H1.25872V368.734H2.77322ZM13.3147 373.31C13.358 372.903 13.501 372.55 13.7437 372.251C13.9907 371.948 14.3244 371.716 14.7447 371.555C15.165 371.395 15.6569 371.315 16.2202 371.315C17.0912 371.315 17.7585 371.516 18.2222 371.919C18.6902 372.318 18.9242 372.923 18.9242 373.733V378.094H17.8582V377.184H17.7542C17.5939 377.483 17.3209 377.735 16.9352 377.938C16.5539 378.138 16.0512 378.237 15.4272 378.237C14.9505 378.237 14.528 378.159 14.1597 378.003C13.7914 377.847 13.5054 377.622 13.3017 377.327C13.098 377.033 12.9962 376.684 12.9962 376.281C12.9962 375.661 13.2042 375.187 13.6202 374.857C14.0362 374.524 14.606 374.311 15.3297 374.22L17.8192 373.908V373.668C17.8192 373.161 17.6849 372.795 17.4162 372.569C17.1475 372.34 16.7402 372.225 16.1942 372.225C15.6482 372.225 15.2214 372.331 14.9137 372.543C14.606 372.756 14.4305 373.076 14.3872 373.505H13.3147V373.31ZM14.1337 376.229C14.1337 376.571 14.2659 376.838 14.5302 377.028C14.7989 377.219 15.1607 377.314 15.6157 377.314C16.0317 377.314 16.4044 377.239 16.7337 377.087C17.0674 376.931 17.3317 376.695 17.5267 376.378C17.7217 376.062 17.8192 375.67 17.8192 375.202V374.792L15.5572 375.091C15.0979 375.152 14.7447 375.273 14.4977 375.455C14.255 375.637 14.1337 375.895 14.1337 376.229ZM21.861 371.471V372.264H21.965C22.0906 372.004 22.2791 371.802 22.5305 371.659C22.7818 371.516 23.1393 371.445 23.603 371.445H24.526V372.433H23.629C23.018 372.433 22.576 372.6 22.303 372.933C22.0343 373.263 21.9 373.772 21.9 374.461V378.094H20.756V371.471H21.861ZM26.94 368.734V374.155H27.044L30.3005 371.471H31.6135V371.666L27.9735 374.63L31.698 377.899V378.094H30.3655L27.044 375.15H26.94V378.094H25.796V368.734H26.94ZM32.1915 374.779C32.1915 374.043 32.3215 373.414 32.5815 372.894C32.8415 372.374 33.212 371.982 33.693 371.718C34.174 371.449 34.7438 371.315 35.4025 371.315C36.0525 371.315 36.605 371.445 37.06 371.705C37.5193 371.961 37.866 372.327 38.1 372.803C38.3383 373.28 38.4575 373.843 38.4575 374.493V375.065H33.2965C33.3052 375.525 33.394 375.926 33.563 376.268C33.7363 376.606 33.979 376.868 34.291 377.054C34.6073 377.236 34.9778 377.327 35.4025 377.327C35.7882 377.327 36.1153 377.265 36.384 377.139C36.657 377.009 36.8672 376.846 37.0145 376.651C37.1618 376.452 37.255 376.242 37.294 376.021H38.321V376.216C38.2647 376.528 38.1282 376.84 37.9115 377.152C37.6992 377.46 37.3828 377.72 36.9625 377.932C36.5465 378.144 36.0308 378.25 35.4155 378.25C34.7568 378.25 34.1848 378.118 33.6995 377.854C33.2185 377.585 32.8458 377.191 32.5815 376.671C32.3215 376.151 32.1915 375.52 32.1915 374.779ZM37.3655 374.162C37.3612 373.781 37.2832 373.445 37.1315 373.154C36.9798 372.864 36.7567 372.639 36.462 372.478C36.1717 372.314 35.8163 372.231 35.396 372.231C34.9843 372.231 34.6268 372.314 34.3235 372.478C34.0245 372.643 33.7883 372.871 33.615 373.161C33.446 373.451 33.3463 373.785 33.316 374.162H37.3655ZM40.6124 371.471V369.651H41.7564V371.471H43.7389V372.4H41.7564V377.002L41.8604 377.106H43.7194V378.094H42.3154C41.765 378.094 41.3425 377.958 41.0479 377.685C40.7575 377.412 40.6124 377.009 40.6124 376.476V372.4H39.0459V371.471H40.6124Z',
                          fill: l,
                        }),
                        (0, i.tZ)('path', {
                          d: 'M166 373L54 373',
                          stroke: d,
                          strokeWidth: S.labels.dashWidth,
                        }),
                        (0, i.tZ)('path', {
                          d: 'M156 415.632L157.346 420.949H157.456L159.068 415.632H160.336L161.954 420.949H162.058L163.397 415.632H164.457V415.827L162.721 422.255H161.35L159.738 416.958H159.634L158.022 422.255H156.644L154.908 415.827V415.632H156ZM165.34 417.367C165.34 416.977 165.446 416.641 165.658 416.36C165.875 416.074 166.185 415.857 166.588 415.71C166.991 415.558 167.474 415.482 168.037 415.482C168.891 415.482 169.565 415.653 170.059 415.996C170.557 416.338 170.832 416.823 170.884 417.452V417.647H169.838C169.795 416.806 169.197 416.386 168.044 416.386C167.528 416.386 167.13 416.468 166.848 416.633C166.571 416.797 166.432 417.033 166.432 417.341C166.432 417.631 166.536 417.85 166.744 417.998C166.952 418.141 167.247 418.236 167.628 418.284L168.765 418.427C169.463 418.513 170.009 418.715 170.403 419.031C170.798 419.343 170.995 419.787 170.995 420.364C170.995 420.775 170.889 421.135 170.676 421.443C170.468 421.746 170.156 421.982 169.74 422.151C169.324 422.32 168.82 422.405 168.226 422.405C167.628 422.405 167.104 422.322 166.653 422.158C166.207 421.989 165.858 421.752 165.606 421.449C165.355 421.141 165.216 420.788 165.19 420.39V420.195H166.25C166.28 420.628 166.473 420.955 166.828 421.176C167.184 421.393 167.65 421.501 168.226 421.501C168.772 421.501 169.186 421.406 169.467 421.215C169.749 421.024 169.89 420.76 169.89 420.422C169.89 420.11 169.773 419.872 169.539 419.707C169.309 419.542 168.969 419.432 168.518 419.376L167.381 419.233C166.02 419.059 165.34 418.437 165.34 417.367ZM173.219 415.632V413.812H174.363V415.632H176.346V416.561H174.363V421.163L174.467 421.267H176.326V422.255H174.922C174.372 422.255 173.949 422.119 173.655 421.846C173.364 421.573 173.219 421.17 173.219 420.637V416.561H171.653V415.632H173.219ZM184.355 412.895V413.903H179.025V417.023H183.705V418.03H179.025V421.248H184.446V422.255H177.842V412.895H184.355ZM193.24 412.895V413.929H189.86V422.255H188.664V413.929H185.284V412.895H193.24ZM195.828 412.895V417.029H200.846V412.895H202.042V422.255H200.846V418.082H195.828V422.255H194.638V412.895H195.828ZM211.331 412.895V413.09L207.665 422.255H206.56V422.06L210.226 412.895H211.331ZM216.977 412.895V418.778C216.977 419.618 217.196 420.26 217.633 420.702C218.071 421.144 218.714 421.365 219.564 421.365C220.413 421.365 221.057 421.144 221.494 420.702C221.932 420.26 222.151 419.618 222.151 418.778V412.895H223.347V418.804C223.347 419.545 223.206 420.186 222.924 420.728C222.643 421.265 222.22 421.681 221.657 421.976C221.093 422.266 220.396 422.411 219.564 422.411C218.74 422.411 218.047 422.266 217.484 421.976C216.92 421.681 216.496 421.263 216.21 420.721C215.928 420.179 215.787 419.54 215.787 418.804V412.895H216.977ZM225.145 415.268C225.145 414.752 225.279 414.306 225.548 413.929C225.821 413.547 226.215 413.255 226.731 413.051C227.251 412.847 227.875 412.746 228.603 412.746C229.335 412.746 229.972 412.854 230.514 413.071C231.056 413.287 231.478 413.606 231.782 414.026C232.085 414.442 232.254 414.945 232.289 415.534V415.729H231.164C231.134 415.04 230.889 414.533 230.43 414.208C229.97 413.879 229.364 413.714 228.61 413.714C227.899 413.714 227.338 413.851 226.926 414.124C226.514 414.392 226.309 414.771 226.309 415.261C226.309 415.738 226.484 416.097 226.835 416.34C227.186 416.578 227.704 416.743 228.389 416.834L229.383 416.971C230.358 417.101 231.101 417.378 231.613 417.803C232.124 418.223 232.38 418.838 232.38 419.649C232.38 420.221 232.239 420.712 231.957 421.124C231.68 421.536 231.275 421.852 230.742 422.073C230.213 422.294 229.578 422.405 228.837 422.405C228.087 422.405 227.424 422.294 226.848 422.073C226.272 421.848 225.815 421.521 225.477 421.092C225.139 420.658 224.948 420.143 224.905 419.545V419.35H226.023C226.092 420.065 226.38 420.591 226.887 420.929C227.394 421.267 228.04 421.436 228.824 421.436C229.561 421.436 230.144 421.289 230.573 420.994C231.006 420.695 231.223 420.264 231.223 419.701C231.223 419.176 231.036 418.784 230.664 418.524C230.291 418.26 229.754 418.082 229.052 417.991L228.057 417.855C227.099 417.729 226.374 417.458 225.88 417.042C225.39 416.622 225.145 416.03 225.145 415.268ZM237.438 412.895C238.353 412.895 239.156 413.084 239.85 413.461C240.543 413.838 241.078 414.379 241.455 415.086C241.837 415.788 242.027 416.617 242.027 417.575C242.027 418.533 241.837 419.365 241.455 420.071C241.078 420.773 240.543 421.313 239.85 421.69C239.156 422.067 238.353 422.255 237.438 422.255H234.006V412.895H237.438ZM237.406 421.228C238.09 421.228 238.688 421.087 239.2 420.806C239.715 420.52 240.114 420.104 240.396 419.558C240.677 419.007 240.818 418.346 240.818 417.575C240.818 416.804 240.677 416.145 240.396 415.599C240.114 415.049 239.715 414.633 239.2 414.351C238.688 414.065 238.09 413.922 237.406 413.922H235.196V421.228H237.406ZM243.186 417.575C243.186 416.548 243.373 415.671 243.745 414.943C244.118 414.215 244.649 413.662 245.338 413.285C246.031 412.904 246.846 412.713 247.782 412.713C248.653 412.713 249.39 412.869 249.992 413.181C250.599 413.489 251.056 413.881 251.363 414.358C251.671 414.83 251.842 415.313 251.877 415.807V416.002H250.765C250.735 415.647 250.614 415.298 250.401 414.956C250.193 414.609 249.873 414.321 249.439 414.091C249.006 413.857 248.46 413.74 247.801 413.74C247.091 413.74 246.48 413.89 245.968 414.189C245.461 414.488 245.071 414.925 244.798 415.502C244.53 416.074 244.395 416.765 244.395 417.575C244.395 418.385 244.53 419.079 244.798 419.655C245.071 420.227 245.461 420.663 245.968 420.962C246.48 421.261 247.091 421.41 247.801 421.41C248.46 421.41 249.006 421.293 249.439 421.059C249.877 420.821 250.202 420.526 250.414 420.175C250.627 419.824 250.752 419.46 250.791 419.083H251.903V419.278C251.86 419.785 251.682 420.279 251.37 420.76C251.062 421.241 250.605 421.642 249.998 421.963C249.396 422.279 248.657 422.437 247.782 422.437C246.846 422.437 246.031 422.249 245.338 421.872C244.649 421.49 244.118 420.936 243.745 420.208C243.373 419.48 243.186 418.602 243.186 417.575Z',
                          fill: l,
                        }),
                      ],
                    }),
                    (0, i.BX)('g', {
                      transform: 'scale(1.1) translate(-11 -5)',
                      children: [
                        (0, i.BX)('g', {
                          fill: s,
                          stroke: S.colors.half,
                          strokeMiterlimit: '10',
                          transform: 'translate(148 270) scale(0.8)',
                          children: [
                            (0, i.tZ)('path', {
                              d: 'M9.74156 81.5309C9.99444 89.1094 15.2546 95.4378 21.228 99.6162C30.6014 106.157 42.1673 109.185 53.4446 110.167C63.0748 110.95 72.8589 110.227 82.2109 107.756C95.3466 104.307 111.925 95.4171 112.14 80.6632L112.16 91.3931C112.352 99.1827 106.327 107.56 96.1295 113.027C88.2586 117.324 79.4308 119.645 70.5561 120.658C55.6176 122.295 38.7634 120.298 25.4693 112.989C19.1249 109.45 13.0742 104.342 10.6781 97.275C10.261 96.0081 9.96806 94.6976 9.83875 93.3701C9.62801 92.1083 9.79142 82.3117 9.72725 80.9557C9.72781 81.1474 9.73305 81.339 9.74106 81.5295L9.74156 81.5309Z',
                            }),
                            (0, i.tZ)('path', {
                              d: 'M9.74156 70.8038C9.99444 78.3823 15.2546 84.7107 21.228 88.8891C30.6014 95.4301 42.1673 98.4584 53.4446 99.4402C63.0748 100.223 72.8589 99.5003 82.2109 97.0291C95.3466 93.5802 111.925 84.6901 112.14 69.9361L112.16 80.6661C112.352 88.4557 106.327 96.8326 96.1295 102.3C88.2586 106.597 79.4308 108.918 70.5561 109.931C55.6176 111.568 38.7634 109.571 25.4693 102.262C19.1249 98.7233 13.0742 93.6152 10.6781 86.5479C10.261 85.2811 9.96806 83.9706 9.83875 82.643C9.62801 81.3813 9.79142 71.5847 9.72725 70.2287C9.72781 70.4204 9.73305 70.6119 9.74106 70.8025L9.74156 70.8038Z',
                            }),
                            (0, i.tZ)('path', {
                              d: 'M9.74156 60.0875C9.99444 67.666 15.2546 73.9944 21.228 78.1728C30.6014 84.7138 42.1673 87.7421 53.4446 88.7239C63.0748 89.5062 72.8589 88.784 82.2109 86.3128C95.3466 82.8639 111.925 73.9738 112.14 59.2198L112.16 69.9498C112.352 77.7394 106.327 86.1163 96.1295 91.5832C88.2586 95.8808 79.4308 98.2021 70.5561 99.2146C55.6176 100.852 38.7634 98.855 25.4693 91.5454C19.1249 88.007 13.0742 82.8989 10.6781 75.8316C10.261 74.5647 9.96806 73.2543 9.83875 71.9267C9.62801 70.665 9.79142 60.8684 9.72725 59.5124C9.72781 59.7041 9.73305 59.8956 9.74106 60.0862L9.74156 60.0875Z',
                            }),
                            (0, i.tZ)('path', {
                              d: 'M24.8447 27.6773C4.78296 39.2603 4.67751 58.0401 24.6087 69.623C44.5398 81.206 76.9613 81.2061 97.0236 69.6245C117.087 58.041 117.192 39.2613 97.2609 27.6783C77.3279 16.0945 44.9064 16.0943 24.8447 27.6773Z',
                            }),
                            (0, i.tZ)('path', {
                              d: 'M9.74156 49.371C9.99444 56.9494 15.2546 63.2779 21.228 67.4562C30.6014 73.9972 42.1673 77.0255 53.4446 78.0074C63.0748 78.7897 72.8589 78.0674 82.2109 75.5962C95.3466 72.1474 111.925 63.2572 112.14 48.5033L112.16 59.2332C112.352 67.0228 106.327 75.3997 96.1295 80.8666C88.2586 85.1643 79.4308 87.4855 70.5561 88.498C55.6176 90.1354 38.7634 88.1385 25.4693 80.8289C19.1249 77.2904 13.0742 72.1824 10.6781 65.115C10.261 63.8482 9.96806 62.5377 9.83875 61.2102C9.62801 59.9484 9.79142 50.1518 9.72725 48.7958C9.72781 48.9875 9.73305 49.1791 9.74106 49.3696L9.74156 49.371Z',
                            }),
                          ],
                        }),
                        (0, i.tZ)('image', {
                          width: '99.6',
                          height: '112',
                          x: '146.9',
                          y: '269.8',
                          href: ''.concat(a, '/coinstack.png'),
                          opacity: 2 != o ? 1 : 0,
                          style: S.transitions,
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            });
          })
        ),
        q = (0, r.memo)((e) => {
          let { animationStep: t, base: n } = e,
            { theme: r, themeMode: a } = (0, o.TCT)();
          return (0, i.tZ)(I, {
            children: (0, i.tZ)(N, {
              base: n,
              selectedPart: t,
              backgroundFillColor: r.colors.background.bloc,
              textFillColor: r.colors.text.primary,
              pathsFillColor: r.colors.icon.primary,
              themeMode: a,
            }),
          });
        }),
        F = n(55412);
      function U() {
        let e = (0, F._)(['\n          top: -0;\n        ']);
        return (
          (U = function () {
            return e;
          }),
          e
        );
      }
      function K() {
        let e = (0, F._)(['\n          bottom: 0;\n        ']);
        return (
          (K = function () {
            return e;
          }),
          e
        );
      }
      let j = (0, c.Z)('div', { target: 'e5bt3va0' })(
          'position:relative;max-width:100%;max-height:100%;aspect-ratio:0.7;overflow:hidden;padding:20px;',
          (e) => {
            let { theme: t } = e;
            return t.breakpoints.down('l');
          },
          '{padding:10px;}',
          (e) => {
            let { theme: t } = e;
            return t.breakpoints.down('m');
          },
          '{padding:0;}',
          (e) => {
            let { theme: t } = e;
            return t.breakpoints.down('s');
          },
          '{position:absolute;top:-5%;height:100%;}'
        ),
        G = (0, c.Z)('div', { target: 'e5bt3va1' })(
          'position:absolute;',
          (e) => {
            let { position: t } = e;
            return 'top' === t ? (0, u.iv)(U()) : (0, u.iv)(K());
          },
          '  height:12%;width:100%;background:linear-gradient(\n    ',
          (e) => {
            let { position: t } = e;
            return 'bottom' === t ? '0deg' : '180deg';
          },
          ',',
          (e) => {
            let { theme: t } = e;
            return t.colors.background.bloc;
          },
          ' 0%,rgba(34,37,41,0) 100%\n  );'
        ),
        $ = {
          opacities: { full: 1, hidden: 0.2 },
          labels: { dashWidth: 0.5 },
          transitions: { transition: 'opacity 170ms ease' },
        };
      var J = (0, r.memo)(
        (0, r.forwardRef)(function (e, t) {
          let {
            style: n,
            className: r,
            base: a,
            selectedPart: o,
            backgroundFillColor: s,
            textFillColor: l,
            pathsFillColor: d,
          } = e;
          return (0, i.BX)('svg', {
            viewBox: '0 0 537 1415',
            fill: 'none',
            className: r,
            ref: t,
            style: n,
            children: [
              (0, i.BX)('g', {
                opacity: 0 === o ? $.opacities.full : $.opacities.hidden,
                style: $.transitions,
                children: [
                  (0, i.tZ)('path', {
                    d: 'M53.6741 59.9883H55.1461V70.2203H61.5461V71.5083H53.6741V59.9883ZM62.5421 67.4283C62.5421 64.6603 64.0781 63.1643 66.4941 63.1643C68.9181 63.1643 70.2541 64.6763 70.2541 67.0763V67.7803H63.9021C63.9341 69.4763 64.9101 70.5643 66.4941 70.5643C67.9981 70.5643 68.6941 69.7083 68.8221 68.9563H70.0861V69.1963C69.9021 70.1963 68.9581 71.7003 66.5101 71.7003C64.0941 71.7003 62.5421 70.2043 62.5421 67.4283ZM63.9261 66.6683H68.9101C68.8941 65.2763 68.0701 64.2923 66.4861 64.2923C64.9341 64.2923 64.0381 65.2923 63.9261 66.6683ZM72.0926 63.3563H73.4606V64.4043H73.5886C74.1726 63.5163 75.1566 63.1723 76.3166 63.1723C78.2126 63.1723 79.3966 64.1323 79.3966 66.1243V71.5083H77.9886V66.2603C77.9886 64.9323 77.2686 64.3483 75.9966 64.3483C74.6046 64.3483 73.5006 65.1723 73.5006 66.9563V71.5083H72.0926V63.3563ZM89.1435 59.9883V71.5083H87.7755V70.3883H87.6475C87.0315 71.3243 86.0475 71.6923 84.8875 71.6923C82.7675 71.6923 81.1515 70.2523 81.1515 67.4363C81.1515 64.6123 82.7675 63.1723 84.8875 63.1723C86.0235 63.1723 86.9995 63.5323 87.6075 64.4363H87.7355V59.9883H89.1435ZM82.5675 67.4363C82.5675 69.4123 83.6235 70.5243 85.1755 70.5243C86.7355 70.5243 87.7915 69.4123 87.7915 67.4363C87.7915 65.4523 86.7355 64.3403 85.1755 64.3403C83.6235 64.3403 82.5675 65.4523 82.5675 67.4363ZM90.9796 67.4283C90.9796 64.6603 92.5156 63.1643 94.9316 63.1643C97.3556 63.1643 98.6916 64.6763 98.6916 67.0763V67.7803H92.3396C92.3716 69.4763 93.3476 70.5643 94.9316 70.5643C96.4356 70.5643 97.1316 69.7083 97.2596 68.9563H98.5236V69.1963C98.3396 70.1963 97.3956 71.7003 94.9476 71.7003C92.5316 71.7003 90.9796 70.2043 90.9796 67.4283ZM92.3636 66.6683H97.3476C97.3316 65.2763 96.5076 64.2923 94.9236 64.2923C93.3716 64.2923 92.4756 65.2923 92.3636 66.6683ZM100.53 63.3563H101.89V64.3323H102.018C102.298 63.7563 102.81 63.3243 104.034 63.3243H105.17V64.5403H104.066C102.538 64.5403 101.938 65.3803 101.938 67.0363V71.5083H100.53V63.3563Z',
                    fill: l,
                  }),
                  (0, i.tZ)('path', {
                    d: 'M276 66L117 66',
                    stroke: d,
                    strokeWidth: $.labels.dashWidth,
                    strokeLinecap: 'round',
                  }),
                ],
              }),
              (0, i.BX)('g', {
                opacity: 0 === o ? $.opacities.full : $.opacities.hidden,
                style: $.transitions,
                transform: 'translate(68, 225)',
                children: [
                  (0, i.tZ)('path', {
                    d: 'M4.95097 5.6859C7.70697 5.6859 9.53997 7.4539 9.53997 10.3659C9.53997 13.2779 7.70697 15.0459 4.95097 15.0459H1.51897V5.6859H4.95097ZM2.70847 14.0189H4.91847C6.95947 14.0189 8.33097 12.7254 8.33097 10.3659C8.33097 8.0064 6.95947 6.7129 4.91847 6.7129H2.70847V14.0189ZM10.6539 11.7309C10.6539 9.4819 11.9019 8.2664 13.8649 8.2664C15.8344 8.2664 16.9199 9.4949 16.9199 11.4449V12.0169H11.7589C11.7849 13.3949 12.5779 14.2789 13.8649 14.2789C15.0869 14.2789 15.6524 13.5834 15.7564 12.9724H16.7834V13.1674C16.6339 13.9799 15.8669 15.2019 13.8779 15.2019C11.9149 15.2019 10.6539 13.9864 10.6539 11.7309ZM11.7784 11.1134H15.8279C15.8149 9.9824 15.1454 9.1829 13.8584 9.1829C12.5974 9.1829 11.8694 9.9954 11.7784 11.1134ZM18.4137 17.6459V8.4224H19.5317V9.3389H19.6357C20.1297 8.5719 20.9357 8.2729 21.8717 8.2729C23.5942 8.2729 24.9137 9.4429 24.9137 11.7374C24.9137 14.0254 23.5942 15.1954 21.8717 15.1954C20.9552 15.1954 20.1557 14.9029 19.6617 14.1684H19.5577V17.6459H18.4137ZM19.5187 11.7374C19.5187 13.3429 20.3767 14.2464 21.6377 14.2464C22.9052 14.2464 23.7632 13.3429 23.7632 11.7374C23.7632 10.1254 22.9052 9.2219 21.6377 9.2219C20.3767 9.2219 19.5187 10.1254 19.5187 11.7374ZM26.0025 11.7374C26.0025 9.5014 27.361 8.2664 29.376 8.2664C31.3845 8.2664 32.7495 9.5014 32.7495 11.7374C32.7495 13.9669 31.3845 15.2019 29.376 15.2019C27.361 15.2019 26.0025 13.9669 26.0025 11.7374ZM27.1595 11.7374C27.1595 13.3754 28.05 14.2659 29.376 14.2659C30.6955 14.2659 31.586 13.3754 31.586 11.7374C31.586 10.0929 30.6955 9.2089 29.376 9.2089C28.05 9.2089 27.1595 10.0929 27.1595 11.7374ZM33.9201 10.1579C33.9201 8.9814 34.9211 8.2729 36.6176 8.2729C38.3206 8.2729 39.3606 8.9814 39.4646 10.2424V10.4374H38.4181C38.3726 9.5209 37.6576 9.1764 36.6241 9.1764C35.5906 9.1764 35.0121 9.5144 35.0121 10.1319C35.0121 10.7494 35.5061 10.9899 36.2081 11.0744L37.3456 11.2174C38.6651 11.3799 39.5751 11.9454 39.5751 13.1544C39.5751 14.3764 38.6261 15.1954 36.8061 15.1954C34.9861 15.1954 33.8486 14.3829 33.7706 13.1804V12.9854H34.8301C34.8951 13.8824 35.7011 14.2919 36.8061 14.2919C37.9176 14.2919 38.4701 13.8759 38.4701 13.2129C38.4701 12.5629 37.9501 12.2769 37.0986 12.1664L35.9611 12.0234C34.7326 11.8674 33.9201 11.3214 33.9201 10.1579ZM40.9733 8.4224H42.1173V15.0459H40.9733V8.4224ZM40.8888 7.2914V6.0369H42.2148V7.2914H40.8888ZM43.2924 8.4224H44.8589V6.6024H46.0029V8.4224H47.9854V9.3519H46.0029V13.9539L46.1069 14.0579H47.9659V15.0459H46.5619C45.4764 15.0459 44.8589 14.5064 44.8589 13.4274V9.3519H43.2924V8.4224ZM52.1066 5.6859H53.2766L55.1616 13.7394H55.2656L57.4301 5.6859H58.8471L61.0051 13.7394H61.1091L62.9941 5.6859H64.1316V5.8809L61.9021 15.0459H60.2901L58.1711 7.1744H58.0671L55.9481 15.0459H54.3361L52.1066 5.8809V5.6859ZM65.5795 5.6859H72.0925V6.6934H66.7625V9.8134H71.4425V10.8209H66.7625V14.0384H72.1835V15.0459H65.5795V5.6859ZM73.0211 5.6859H80.9771V6.7194H77.5971V15.0459H76.4011V6.7194H73.0211V5.6859ZM82.3754 5.6859H83.5649V9.8199H88.5829V5.6859H89.7789V15.0459H88.5829V10.8729H83.5649V15.0459H82.3754V5.6859Z',
                    fill: l,
                    transform: 'scale(1.18) translate(-14 -2)',
                  }),
                  (0, i.tZ)('path', {
                    d: 'M220 10L101 10',
                    stroke: d,
                    strokeWidth: $.labels.dashWidth,
                    strokeLinecap: 'round',
                  }),
                ],
              }),
              (0, i.BX)('g', {
                opacity: 0 === o || 1 === o ? $.opacities.full : $.opacities.hidden,
                style: $.transitions,
                children: [
                  (0, i.tZ)('path', {
                    d: 'M52.9207 445.365H54.3607L56.6807 455.277H56.8087L59.4727 445.365H61.2167L63.8727 455.277H64.0007L66.3207 445.365H67.7207V445.605L64.9767 456.885H62.9927L60.3847 447.197H60.2567L57.6487 456.885H55.6647L52.9207 445.605V445.365ZM69.5027 445.365H77.5187V446.605H70.9587V450.445H76.7187V451.685H70.9587V455.645H77.6307V456.885H69.5027V445.365ZM78.6616 445.365H88.4536V446.637H84.2936V456.885H82.8216V446.637H78.6616V445.365ZM90.1746 445.365H91.6386V450.453H97.8146V445.365H99.2866V456.885H97.8146V451.749H91.6386V456.885H90.1746V445.365ZM105.075 445.365H106.555L110.179 455.389H110.307L113.939 445.365H115.371V445.605L111.171 456.885H109.283L105.075 445.605V445.365ZM115.685 450.997C115.853 449.485 117.149 448.541 119.261 448.541C121.357 448.541 122.589 449.485 122.589 451.517V456.885H121.277V455.765H121.149C120.805 456.397 119.957 457.061 118.285 457.061C116.525 457.061 115.293 456.173 115.293 454.653C115.293 453.037 116.517 452.325 118.165 452.117L121.229 451.733V451.437C121.229 450.165 120.549 449.661 119.229 449.661C117.901 449.661 117.117 450.165 117.005 451.237H115.685V450.997ZM116.693 454.589C116.693 455.437 117.405 455.925 118.517 455.925C120.005 455.925 121.229 455.125 121.229 453.325V452.821L118.445 453.189C117.365 453.333 116.693 453.733 116.693 454.589ZM132.012 456.885H130.644V455.845H130.516C129.94 456.725 128.964 457.069 127.804 457.069C125.908 457.069 124.74 456.109 124.74 454.117V448.733H126.148V453.981C126.148 455.309 126.852 455.893 128.124 455.893C129.516 455.893 130.604 455.069 130.604 453.285V448.733H132.012V456.885ZM134.327 445.365H135.735V456.885H134.327V445.365ZM137.182 448.733H139.11V446.493H140.518V448.733H142.958V449.877H140.518V455.541L140.646 455.669H142.934V456.885H141.206C139.87 456.885 139.11 456.221 139.11 454.893V449.877H137.182V448.733Z',
                    fill: l,
                  }),
                  (0, i.tZ)('path', {
                    d: 'M204.972 451.887L155.972 451.883',
                    stroke: d,
                    strokeWidth: $.labels.dashWidth,
                    strokeLinecap: 'round',
                  }),
                ],
              }),
              (0, i.BX)('g', {
                opacity: 2 === o ? $.opacities.full : $.opacities.hidden,
                style: $.transitions,
                transform: 'translate(0 -50)',
                children: [
                  (0, i.tZ)('path', {
                    d: 'M58.4732 1378.91C60.5212 1378.91 62.0412 1379.87 62.0412 1381.81C62.0412 1383.65 60.8412 1384.26 60.1612 1384.41V1384.54C60.8972 1384.71 62.2572 1385.29 62.2572 1387.29C62.2572 1389.41 60.6332 1390.43 58.5292 1390.43H53.4012V1378.91H58.4732ZM54.8492 1389.19H58.3692C59.7852 1389.19 60.8172 1388.63 60.8172 1387.19C60.8172 1385.74 59.7852 1385.19 58.3692 1385.19H54.8492V1389.19ZM54.8492 1383.95H58.2892C59.6092 1383.95 60.6332 1383.45 60.6332 1382.05C60.6332 1380.65 59.6092 1380.15 58.2892 1380.15H54.8492V1383.95ZM63.6129 1386.35C63.6129 1383.6 65.2849 1382.08 67.7649 1382.08C70.2369 1382.08 71.9169 1383.6 71.9169 1386.35C71.9169 1389.1 70.2369 1390.62 67.7649 1390.62C65.2849 1390.62 63.6129 1389.1 63.6129 1386.35ZM65.0369 1386.35C65.0369 1388.37 66.1329 1389.47 67.7649 1389.47C69.3889 1389.47 70.4849 1388.37 70.4849 1386.35C70.4849 1384.33 69.3889 1383.24 67.7649 1383.24C66.1329 1383.24 65.0369 1384.33 65.0369 1386.35ZM73.7415 1382.27H75.1015V1383.25H75.2295C75.5095 1382.67 76.0215 1382.24 77.2455 1382.24H78.3815V1383.46H77.2775C75.7495 1383.46 75.1495 1384.3 75.1495 1385.95V1390.43H73.7415V1382.27ZM79.9447 1382.27H81.3047V1383.25H81.4327C81.7127 1382.67 82.2247 1382.24 83.4487 1382.24H84.5847V1383.46H83.4807C81.9527 1383.46 81.3527 1384.3 81.3527 1385.95V1390.43H79.9447V1382.27ZM85.3473 1386.35C85.3473 1383.6 87.0193 1382.08 89.4993 1382.08C91.9713 1382.08 93.6513 1383.6 93.6513 1386.35C93.6513 1389.1 91.9713 1390.62 89.4993 1390.62C87.0193 1390.62 85.3473 1389.1 85.3473 1386.35ZM86.7713 1386.35C86.7713 1388.37 87.8673 1389.47 89.4993 1389.47C91.1233 1389.47 92.2193 1388.37 92.2193 1386.35C92.2193 1384.33 91.1233 1383.24 89.4993 1383.24C87.8673 1383.24 86.7713 1384.33 86.7713 1386.35ZM94.5654 1382.27H95.9094L97.5654 1388.82H97.7014L99.6854 1382.27H101.245L103.237 1388.82H103.365L105.013 1382.27H106.317V1382.51L104.181 1390.43H102.493L100.509 1383.91H100.381L98.3974 1390.43H96.7014L94.5654 1382.51V1382.27ZM107.254 1386.35C107.254 1383.58 108.79 1382.08 111.206 1382.08C113.63 1382.08 114.966 1383.59 114.966 1385.99V1386.7H108.614C108.646 1388.39 109.622 1389.48 111.206 1389.48C112.71 1389.48 113.406 1388.63 113.534 1387.87H114.798V1388.11C114.614 1389.11 113.67 1390.62 111.222 1390.62C108.806 1390.62 107.254 1389.12 107.254 1386.35ZM108.638 1385.59H113.622C113.606 1384.19 112.782 1383.21 111.198 1383.21C109.646 1383.21 108.75 1384.21 108.638 1385.59ZM116.804 1382.27H118.164V1383.25H118.292C118.572 1382.67 119.084 1382.24 120.308 1382.24H121.444V1383.46H120.34C118.812 1383.46 118.212 1384.3 118.212 1385.95V1390.43H116.804V1382.27Z',
                    fill: l,
                  }),
                  (0, i.tZ)('path', {
                    d: 'M276.972 1385.43L133.972 1385.42',
                    stroke: d,
                    strokeWidth: $.labels.dashWidth,
                    strokeLinecap: 'round',
                  }),
                ],
              }),
              (0, i.tZ)('path', {
                id: 'first-path',
                d: 'M268.468 109.474v295',
                stroke: d,
                strokeWidth: '1.75',
                strokeLinecap: 'round',
                strokeDasharray: '0.1 4',
                opacity: 0 === o ? $.opacities.full : $.opacities.hidden,
                style: $.transitions,
              }),
              (0, i.BX)('g', {
                opacity: 0 === o ? 1 : 0,
                style: $.transitions,
                children: [
                  (0, i.BX)('g', {
                    children: [
                      (0, i.tZ)('path', {
                        d: 'M6.2683 0l-6.2683 6l-6.2683 -6',
                        stroke: d,
                        strokeWidth: '1.5',
                        strokeLinecap: 'round',
                        strokeLinejoin: 'round',
                        transform: 'rotate(-90)',
                      }),
                      (0, i.tZ)('animateMotion', {
                        dur: '4s',
                        begin: '0s',
                        rotate: 'auto',
                        repeatCount: 'indefinite',
                        children: (0, i.tZ)('mpath', { href: '#first-path' }),
                      }),
                    ],
                  }),
                  (0, i.BX)('g', {
                    children: [
                      (0, i.tZ)('path', {
                        d: 'M6.2683 0l-6.2683 6l-6.2683 -6',
                        stroke: d,
                        strokeWidth: '1.5',
                        strokeLinecap: 'round',
                        strokeLinejoin: 'round',
                        transform: 'rotate(-90)',
                        opacity: '0',
                        children: (0, i.tZ)('animate', {
                          attributeName: 'opacity',
                          from: '0',
                          to: '1',
                          begin: '2s',
                          dur: '0.01s',
                          fill: 'freeze',
                        }),
                      }),
                      (0, i.tZ)('animateMotion', {
                        dur: '4s',
                        begin: '2s',
                        rotate: 'auto',
                        repeatCount: 'indefinite',
                        children: (0, i.tZ)('mpath', { href: '#first-path' }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, i.BX)('g', {
                opacity: 1 === o ? $.opacities.full : $.opacities.hidden,
                style: $.transitions,
                children: [
                  (0, i.tZ)('path', {
                    id: 'second-path-long-vertical',
                    d: 'M268.46 558.8L268.46 760',
                    stroke: d,
                    strokeWidth: '1.75',
                    strokeLinecap: 'round',
                    strokeDasharray: '0.1 4',
                  }),
                  (0, i.tZ)('path', {
                    id: 'second-path-left-part',
                    d: 'M268.448 680.458L97.1001 680.458C86.0544 680.458 77.1001 689.413 77.1001 700.458L77.1001 825',
                    stroke: d,
                    strokeWidth: '1.75',
                    strokeLinecap: 'round',
                    strokeDasharray: '0.1 4',
                  }),
                  (0, i.tZ)('path', {
                    id: 'second-path-right-part',
                    d: 'M268.448 680.458L439.535 680.458C450.563 680.458 459.51 689.386 459.535 700.414L459.809 825',
                    stroke: d,
                    strokeWidth: '1.75',
                    strokeLinecap: 'round',
                    strokeDasharray: '0.1 4',
                  }),
                ],
              }),
              (0, i.BX)('g', {
                opacity: 1 === o ? 1 : 0,
                style: $.transitions,
                children: [
                  (0, i.BX)('g', {
                    children: [
                      (0, i.tZ)('path', {
                        d: 'M6.2683 0l-6.2683 6l-6.2683 -6',
                        stroke: d,
                        strokeWidth: '1.5',
                        strokeLinecap: 'round',
                        strokeLinejoin: 'round',
                        transform: 'rotate(-90)',
                      }),
                      (0, i.tZ)('animateMotion', {
                        dur: '2s',
                        begin: '0s',
                        rotate: 'auto',
                        repeatCount: 'indefinite',
                        children: (0, i.tZ)('mpath', { href: '#second-path-long-vertical' }),
                      }),
                    ],
                  }),
                  (0, i.BX)('g', {
                    children: [
                      (0, i.tZ)('path', {
                        d: 'M6.2683 0l-6.2683 6l-6.2683 -6',
                        stroke: d,
                        strokeWidth: '1.5',
                        strokeLinecap: 'round',
                        strokeLinejoin: 'round',
                        transform: 'rotate(-90)',
                        opacity: '0',
                        children: (0, i.tZ)('animate', {
                          attributeName: 'opacity',
                          from: '0',
                          to: '1',
                          begin: '1.26s',
                          dur: '0.01s',
                          fill: 'freeze',
                        }),
                      }),
                      (0, i.tZ)('animateMotion', {
                        dur: '2s',
                        begin: '1.26s',
                        rotate: 'auto',
                        repeatCount: 'indefinite',
                        children: (0, i.tZ)('mpath', { href: '#second-path-right-part' }),
                      }),
                    ],
                  }),
                  (0, i.BX)('g', {
                    children: [
                      (0, i.tZ)('path', {
                        d: 'M6.2683 0l-6.2683 6l-6.2683 -6',
                        stroke: d,
                        strokeWidth: '1.5',
                        strokeLinecap: 'round',
                        strokeLinejoin: 'round',
                        transform: 'rotate(-90)',
                        opacity: '0',
                        children: (0, i.tZ)('animate', {
                          attributeName: 'opacity',
                          from: '0',
                          to: '1',
                          begin: '1.26s',
                          dur: '0.01s',
                          fill: 'freeze',
                        }),
                      }),
                      (0, i.tZ)('animateMotion', {
                        dur: '2s',
                        begin: '1.26s',
                        rotate: 'auto',
                        repeatCount: 'indefinite',
                        children: (0, i.tZ)('mpath', { href: '#second-path-left-part' }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, i.BX)('g', {
                opacity: 2 === o ? $.opacities.full : $.opacities.hidden,
                style: $.transitions,
                children: [
                  (0, i.tZ)('path', {
                    id: 'third-path-vertical-part',
                    d: 'M268.468 1387.43L268.468 930',
                    stroke: d,
                    strokeWidth: '1.75',
                    strokeLinecap: 'round',
                    strokeDasharray: '0.1 4',
                  }),
                  (0, i.tZ)('path', {
                    id: 'third-path-left-part',
                    d: 'M268.512 1009.24L97.1016 1009.24C86.0559 1009.24 77.1016 1000.28 77.1016 989.237L77.1016 930',
                    stroke: d,
                    strokeWidth: '1.75',
                    strokeLinecap: 'round',
                    strokeDasharray: '0.1 4',
                  }),
                  (0, i.tZ)('path', {
                    id: 'third-path-right-part',
                    d: 'M268.472 1009.24L439.826 1009.24C450.872 1009.24 459.826 1000.28 459.826 989.237L459.826 930',
                    stroke: d,
                    strokeWidth: '1.75',
                    strokeLinecap: 'round',
                    strokeDasharray: '0.1 4',
                  }),
                ],
              }),
              (0, i.BX)('g', {
                opacity: 2 === o ? 1 : 0,
                style: $.transitions,
                children: [
                  (0, i.BX)('g', {
                    children: [
                      (0, i.tZ)('path', {
                        d: 'M6.2683 0l-6.2683 6l-6.2683 -6',
                        stroke: d,
                        strokeWidth: '1.5',
                        strokeLinecap: 'round',
                        strokeLinejoin: 'round',
                        transform: 'rotate(-90)',
                      }),
                      (0, i.tZ)('animateMotion', {
                        dur: '3s',
                        begin: '0s',
                        rotate: 'auto',
                        repeatCount: 'indefinite',
                        children: (0, i.tZ)('mpath', { href: '#third-path-vertical-part' }),
                      }),
                    ],
                  }),
                  (0, i.BX)('g', {
                    children: [
                      (0, i.tZ)('path', {
                        d: 'M6.2683 0l-6.2683 6l-6.2683 -6',
                        stroke: d,
                        strokeWidth: '1.5',
                        strokeLinecap: 'round',
                        strokeLinejoin: 'round',
                        transform: 'rotate(-90)',
                        opacity: '0',
                        children: (0, i.tZ)('animate', {
                          attributeName: 'opacity',
                          from: '0',
                          to: '1',
                          begin: '2s',
                          dur: '0.01s',
                          fill: 'freeze',
                        }),
                      }),
                      (0, i.tZ)('animateMotion', {
                        dur: '3s',
                        begin: '2.4375s',
                        rotate: 'auto',
                        repeatCount: 'indefinite',
                        children: (0, i.tZ)('mpath', { href: '#third-path-left-part' }),
                      }),
                    ],
                  }),
                  (0, i.BX)('g', {
                    children: [
                      (0, i.tZ)('path', {
                        d: 'M6.2683 0l-6.2683 6l-6.2683 -6',
                        stroke: d,
                        strokeWidth: '1.5',
                        strokeLinecap: 'round',
                        strokeLinejoin: 'round',
                        transform: 'rotate(-90)',
                        opacity: '0',
                        children: (0, i.tZ)('animate', {
                          attributeName: 'opacity',
                          from: '0',
                          to: '1',
                          begin: '2s',
                          dur: '0.01s',
                          fill: 'freeze',
                        }),
                      }),
                      (0, i.tZ)('animateMotion', {
                        dur: '3s',
                        begin: '2.4375s',
                        rotate: 'auto',
                        repeatCount: 'indefinite',
                        children: (0, i.tZ)('mpath', { href: '#third-path-right-part' }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, i.tZ)('circle', {
                fill: s,
                r: '50',
                transform: 'translate(270 86) scale(0.4, 1)',
              }),
              (0, i.tZ)('circle', {
                fill: s,
                r: '47',
                transform: 'translate(270 236) scale(0.5, 1)',
              }),
              (0, i.tZ)('ellipse', {
                fill: s,
                rx: '50',
                ry: '105',
                transform: 'translate(270 452)',
              }),
              (0, i.tZ)('circle', { fill: s, r: '57', transform: 'translate(268 820)' }),
              (0, i.tZ)('circle', { fill: s, r: '57', transform: 'translate(76 820)' }),
              (0, i.tZ)('circle', { fill: s, r: '57', transform: 'translate(460 820)' }),
              (0, i.tZ)('circle', { fill: s, r: '46', transform: 'translate(268 1138)' }),
              (0, i.tZ)('circle', { fill: s, r: '40', transform: 'translate(268 1303)' }),
              (0, i.BX)('g', {
                opacity: 0 === o ? $.opacities.full : $.opacities.hidden,
                style: $.transitions,
                children: [
                  (0, i.tZ)('image', {
                    href: ''.concat(a, '/person.png'),
                    x: '222',
                    y: '0',
                    height: '136',
                  }),
                  (0, i.tZ)('image', {
                    href: ''.concat(a, '/weth.png'),
                    x: '232',
                    y: '187',
                    height: '97',
                    style: { filter: 'brightness(118%)' },
                  }),
                ],
              }),
              (0, i.tZ)('image', {
                href: ''.concat(a, '/weth-vault.png'),
                x: '174',
                y: '343',
                height: '218',
                opacity: 0 === o || 1 === o ? $.opacities.full : $.opacities.hidden,
                style: {
                  ...$.transitions,
                  transform: 'scale(-1, 1)',
                  transformOrigin: 'center center',
                },
              }),
              (0, i.BX)('g', {
                opacity: 2 === o ? $.opacities.full : $.opacities.hidden,
                style: $.transitions,
                children: [
                  (0, i.tZ)('image', {
                    href: ''.concat(a, '/yield.png'),
                    x: '232',
                    y: '1090',
                    height: '98',
                    style: { filter: 'brightness(130%) contrast(0.9)' },
                  }),
                  (0, i.tZ)('image', {
                    href: ''.concat(a, '/person.png'),
                    x: '222',
                    y: '1260',
                    height: '136',
                  }),
                ],
              }),
              (0, i.BX)('g', {
                opacity: 1 === o || 2 === o ? $.opacities.full : $.opacities.hidden,
                style: $.transitions,
                children: [
                  (0, i.tZ)('image', {
                    href: ''.concat(a, '/coinstack.png'),
                    x: '4',
                    y: '741',
                    width: '140',
                    height: '160',
                  }),
                  (0, i.tZ)('image', {
                    href: ''.concat(a, '/coinstack.png'),
                    x: '197',
                    y: '741',
                    width: '140',
                    height: '160',
                  }),
                  (0, i.tZ)('image', {
                    href: ''.concat(a, '/coinstack.png'),
                    x: '390',
                    y: '741',
                    width: '140',
                    height: '160',
                  }),
                  (0, i.tZ)('path', {
                    d: 'M23.043 903.767H24.219L25.668 909.493H25.787L27.523 903.767H28.888L30.631 909.493H30.743L32.185 903.767H33.326V903.977L31.457 910.9H29.98L28.244 905.195H28.132L26.396 910.9H24.912L23.043 903.977V903.767ZM34.2771 905.636C34.2771 904.369 35.3551 903.606 37.1821 903.606C39.0161 903.606 40.1361 904.369 40.2481 905.727V905.937H39.1211C39.0721 904.95 38.3021 904.579 37.1891 904.579C36.0761 904.579 35.4531 904.943 35.4531 905.608C35.4531 906.273 35.9851 906.532 36.7411 906.623L37.9661 906.777C39.3871 906.952 40.3671 907.561 40.3671 908.863C40.3671 910.179 39.3451 911.061 37.3851 911.061C35.4251 911.061 34.2001 910.186 34.1161 908.891V908.681H35.2571C35.3271 909.647 36.1951 910.088 37.3851 910.088C38.5821 910.088 39.1771 909.64 39.1771 908.926C39.1771 908.226 38.6171 907.918 37.7001 907.799L36.4751 907.645C35.1521 907.477 34.2771 906.889 34.2771 905.636ZM41.0756 903.767H42.7626V901.807H43.9946V903.767H46.1296V904.768H43.9946V909.724L44.1066 909.836H46.1086V910.9H44.5966C43.4276 910.9 42.7626 910.319 42.7626 909.157V904.768H41.0756V903.767ZM47.7411 900.82H54.7551V901.905H49.0151V905.265H54.0551V906.35H49.0151V909.815H54.8531V910.9H47.7411V900.82ZM55.7551 900.82H64.3231V901.933H60.6831V910.9H59.3951V901.933H55.7551V900.82ZM65.829 900.82H67.11V905.272H72.514V900.82H73.802V910.9H72.514V906.406H67.11V910.9H65.829V900.82ZM82.6158 900.82H83.8058V901.03L79.8578 910.9H78.6678V910.69L82.6158 900.82ZM87.8373 900.82H89.0973L91.1273 909.493H91.2393L93.5703 900.82H95.0963L97.4203 909.493H97.5323L99.5623 900.82H100.787V901.03L98.3863 910.9H96.6503L94.3683 902.423H94.2563L91.9743 910.9H90.2383L87.8373 901.03V900.82ZM102.347 900.82H109.361V901.905H103.621V905.265H108.661V906.35H103.621V909.815H109.459V910.9H102.347V900.82ZM110.361 900.82H118.929V901.933H115.289V910.9H114.001V901.933H110.361V900.82ZM120.434 900.82H121.715V905.272H127.119V900.82H128.407V910.9H127.119V906.406H121.715V910.9H120.434V900.82Z',
                    fill: l,
                  }),
                  (0, i.tZ)('path', {
                    d: 'M226.552 905.636C226.552 904.369 227.63 903.606 229.457 903.606C231.291 903.606 232.411 904.369 232.523 905.727V905.937H231.396C231.347 904.95 230.577 904.579 229.464 904.579C228.351 904.579 227.728 904.943 227.728 905.608C227.728 906.273 228.26 906.532 229.016 906.623L230.241 906.777C231.662 906.952 232.642 907.561 232.642 908.863C232.642 910.179 231.62 911.061 229.66 911.061C227.7 911.061 226.475 910.186 226.391 908.891V908.681H227.532C227.602 909.647 228.47 910.088 229.66 910.088C230.857 910.088 231.452 909.64 231.452 908.926C231.452 908.226 230.892 907.918 229.975 907.799L228.75 907.645C227.427 907.477 226.552 906.889 226.552 905.636ZM237.97 900.82C240.938 900.82 242.912 902.724 242.912 905.86C242.912 908.996 240.938 910.9 237.97 910.9H234.274V900.82H237.97ZM235.555 909.794H237.935C240.133 909.794 241.61 908.401 241.61 905.86C241.61 903.319 240.133 901.926 237.935 901.926H235.555V909.794ZM247.173 900.82H248.825L252.507 910.69V910.9H251.226L250.162 908.002H245.801L244.744 910.9H243.498V910.69L247.173 900.82ZM246.172 906.896H249.791L248.041 902.108H247.929L246.172 906.896ZM254.03 900.82H255.318V910.9H254.03V900.82ZM264.131 900.82H265.321V901.03L261.373 910.9H260.183V910.69L264.131 900.82ZM269.352 900.82H270.612L272.642 909.493H272.754L275.085 900.82H276.611L278.935 909.493H279.047L281.077 900.82H282.302V901.03L279.901 910.9H278.165L275.883 902.423H275.771L273.489 910.9H271.753L269.352 901.03V900.82ZM283.862 900.82H290.876V901.905H285.136V905.265H290.176V906.35H285.136V909.815H290.974V910.9H283.862V900.82ZM291.876 900.82H300.444V901.933H296.804V910.9H295.516V901.933H291.876V900.82ZM301.95 900.82H303.231V905.272H308.635V900.82H309.923V910.9H308.635V906.406H303.231V910.9H301.95V900.82Z',
                    fill: l,
                  }),
                  (0, i.tZ)('path', {
                    d: 'M406.918 905.636C406.918 904.369 407.996 903.606 409.823 903.606C411.657 903.606 412.777 904.369 412.889 905.727V905.937H411.762C411.713 904.95 410.943 904.579 409.83 904.579C408.717 904.579 408.094 904.943 408.094 905.608C408.094 906.273 408.626 906.532 409.382 906.623L410.607 906.777C412.028 906.952 413.008 907.561 413.008 908.863C413.008 910.179 411.986 911.061 410.026 911.061C408.066 911.061 406.841 910.186 406.757 908.891V908.681H407.898C407.968 909.647 408.836 910.088 410.026 910.088C411.223 910.088 411.818 909.64 411.818 908.926C411.818 908.226 411.258 907.918 410.341 907.799L409.116 907.645C407.793 907.477 406.918 906.889 406.918 905.636ZM413.73 904.768V903.767H415.473V902.563C415.473 901.401 416.138 900.82 417.307 900.82H418.91V901.821H416.817L416.705 901.933V903.767H418.756V904.768H416.705V910.9H415.473V904.768H413.73ZM420.024 903.767H421.214V904.621H421.326C421.571 904.117 422.019 903.739 423.09 903.739H424.084V904.803H423.118C421.781 904.803 421.256 905.538 421.256 906.987V910.9H420.024V903.767ZM425.089 903.767H426.356L428.358 906.42H428.47L430.633 903.767H431.872V903.977L429.17 907.288L431.753 910.69V910.9H430.493L428.4 908.135H428.288L426.034 910.9H424.795V910.69L427.588 907.274L425.089 903.977V903.767ZM433.507 900.82H440.521V901.905H434.781V905.265H439.821V906.35H434.781V909.815H440.619V910.9H433.507V900.82ZM441.521 900.82H450.089V901.933H446.449V910.9H445.161V901.933H441.521V900.82ZM451.595 900.82H452.876V905.272H458.28V900.82H459.568V910.9H458.28V906.406H452.876V910.9H451.595V900.82ZM468.382 900.82H469.572V901.03L465.624 910.9H464.434V910.69L468.382 900.82ZM473.603 900.82H474.863L476.893 909.493H477.005L479.336 900.82H480.862L483.186 909.493H483.298L485.328 900.82H486.553V901.03L484.152 910.9H482.416L480.134 902.423H480.022L477.74 910.9H476.004L473.603 901.03V900.82ZM488.113 900.82H495.127V901.905H489.387V905.265H494.427V906.35H489.387V909.815H495.225V910.9H488.113V900.82ZM496.127 900.82H504.695V901.933H501.055V910.9H499.767V901.933H496.127V900.82ZM506.201 900.82H507.482V905.272H512.886V900.82H514.174V910.9H512.886V906.406H507.482V910.9H506.201V900.82Z',
                    fill: l,
                  }),
                ],
              }),
            ],
          });
        })
      );
      let Y = [-7, 18, 49];
      var Q = (0, r.memo)((e) => {
        let { animationStep: t, base: n } = e,
          a = (0, r.useRef)(null),
          { theme: s } = (0, o.TCT)(),
          l = (0, r.useRef)(-7);
        function d() {
          a.current && (a.current.style.transform = 'translate3d(0, '.concat(-l.current, '%, 0)'));
        }
        return (
          (0, r.useLayoutEffect)(() => {
            var e;
            d(),
              (0, o.ifp)(
                l,
                { current: null !== (e = Y[t]) && void 0 !== e ? e : 0 },
                { duration: 0.9, ease: o.GG3.aggressiveInOut, onUpdate: d }
              );
          }, [t]),
          (0, i.BX)(j, {
            children: [
              (0, i.tZ)(J, {
                ref: a,
                base: n,
                selectedPart: t,
                backgroundFillColor: s.colors.background.bloc,
                textFillColor: s.colors.text.primary,
                pathsFillColor: s.colors.icon.primary,
              }),
              (0, i.tZ)(G, { position: 'top' }),
              (0, i.tZ)(G, { position: 'bottom' }),
            ],
          })
        );
      });
      let ee = (e) => {
        let { steps: t } = e,
          n = (0, o.dD4)(),
          [i, s] = (0, r.useState)(0),
          l = (0, r.useRef)(null),
          d = (0, r.useRef)([]),
          u = (0, r.useRef)(0),
          c = (0, r.useRef)(null),
          p = (0, r.useRef)(null),
          C = (0, r.useRef)(),
          h = (0, a.$B)('v2/assets/animations-assets'),
          y = (0, r.useCallback)((e) => {
            e.nativeEvent.detail > 1 && e.preventDefault();
          }, []),
          m = (0, r.useCallback)(
            (e) => (t) => {
              d.current && (d.current[e] = t);
            },
            []
          ),
          f = (0, r.useCallback)(
            (e) => {
              if (!l.current) return;
              if (!n) {
                l.current.style.height = '';
                return;
              }
              let t = d.current[i];
              if (!t) return;
              let r = t.getBoundingClientRect();
              (0, o.ifp)(
                u,
                { current: r.height },
                {
                  ease: o.GG3.aggressiveInOut,
                  duration: e ? 0 : 0.4,
                  onUpdate() {
                    l.current && (l.current.style.height = ''.concat(u.current, 'px'));
                  },
                }
              );
            },
            [n, i]
          ),
          H = (0, r.useCallback)(
            (e) => {
              var n;
              let { nativeEvent: r } = e;
              if ('touchstart' === e.type) {
                c.current = r;
                return;
              }
              let a = r.changedTouches.item(0),
                o = null === (n = c.current) || void 0 === n ? void 0 : n.changedTouches.item(0);
              if (!a || !o) return;
              let l = a.clientX - o.clientX;
              if (Math.abs(l) > Math.abs(a.clientY - o.clientY)) {
                let n = l > 0 ? i - 1 : i + 1;
                s((n = Math.max(0, Math.min(n, t.length - 1)))), e.preventDefault();
              }
            },
            [i, t.length]
          ),
          g = (0, r.useCallback)(() => {
            let e = p.current,
              t = null == e ? void 0 : e.firstChild;
            if (!e || !t) return;
            let n = e.getBoundingClientRect(),
              i = t.getBoundingClientRect(),
              r = n.width / n.height > i.width / i.height,
              a = r ? (n.width - i.width) / 2 : 0,
              o = r ? 0 : (n.height - i.height) / 2;
            t.style.transform = 'translate3d('.concat(a, 'px, ').concat(o, 'px, 0)');
          }, []);
        return (
          (0, r.useLayoutEffect)(
            () => (
              f(),
              window.addEventListener('resize', f),
              () => window.removeEventListener('resize', f)
            ),
            [i, n]
          ),
          (0, o.rr1)(() => {
            g(), clearTimeout(C.current), (C.current = setTimeout(g, 300));
          }),
          {
            animationContainer: p,
            animationStep: i,
            mobileStepsContainer: l,
            mediaBase: h,
            getMobileStepRef: m,
            setAnimationStep: s,
            preventDoubleClickToSelect: y,
            onTouchStep: H,
          }
        );
      };
      var et = (0, r.memo)((e) => {
        let { type: t, title: n, steps: r, terms: s } = e,
          { toggleDialog: l } = (0, o.DAv)(),
          u = (0, o.dD4)(),
          {
            consentStatus: c,
            isChecked: T,
            setIsChecked: I,
            onClickConfirm: S,
            onClickContinue: _,
          } = d(t),
          {
            animationContainer: z,
            animationStep: E,
            mediaBase: W,
            mobileStepsContainer: N,
            setAnimationStep: F,
            onTouchStep: U,
            preventDoubleClickToSelect: K,
            getMobileStepRef: j,
          } = ee({ steps: r });
        function G() {
          return (0, i.BX)(X, {
            children: [
              (0, i.BX)(A, {
                children: [
                  (0, i.tZ)(O, { onChange: () => I((e) => !e), checked: T, variant: 'square' }),
                  (0, i.tZ)('p', {
                    children: (0, i.BX)(D, {
                      onMouseDown: K,
                      children: [
                        'Check this box to confirm you have read the ',
                        (0, i.tZ)('a', {
                          href: a.CL,
                          target: '_blank',
                          children: 'Morpho Terms of Use',
                        }),
                        ' and understand the associated risks.',
                      ],
                    }),
                  }),
                ],
              }),
              (0, i.tZ)(P, {
                variant: 'primary',
                size: 'default',
                label: 'Proceed',
                disabled: !T,
                onClick: S,
              }),
            ],
          });
        }
        return (0, i.BX)(p, {
          children: [
            u &&
              (0, i.BX)(i.HY, {
                children: [
                  (0, i.tZ)(x, { textAlign: 'center', children: n }),
                  (0, i.tZ)(B, {
                    children: (0, i.tZ)('p', { dangerouslySetInnerHTML: { __html: s } }),
                  }),
                  !c && G(),
                  (0, i.tZ)(w, {}),
                ],
              }),
            (0, i.BX)(C, {
              ref: z,
              children: [
                'earn' === t && (0, i.tZ)(Q, { animationStep: E, base: W }),
                'borrow' === t && (0, i.tZ)(q, { animationStep: E, base: W }),
              ],
            }),
            (0, i.tZ)(h, {
              children: u
                ? (0, i.BX)(i.HY, {
                    children: [
                      (0, i.tZ)(m, {
                        children: r.map((e, t) =>
                          (0, i.tZ)(
                            f,
                            {
                              onClick: () => F(t),
                              selected: t === E,
                              children: (0, i.tZ)(o.xvT.Body.M.Regular, {
                                children: '0' + (t + 1),
                              }),
                            },
                            t
                          )
                        ),
                      }),
                      (0, i.tZ)(H, {
                        ref: N,
                        onTouchStart: U,
                        onTouchEnd: U,
                        children: r.map((e, t) =>
                          (0, i.BX)(
                            g,
                            {
                              ref: j(t),
                              selected: t === E,
                              children: [
                                (0, i.tZ)('h4', { children: (0, i.tZ)(Z, { children: e.title }) }),
                                (0, i.tZ)('p', {
                                  children: (0, i.tZ)(v, { children: e.description }),
                                }),
                              ],
                            },
                            t
                          )
                        ),
                      }),
                    ],
                  })
                : (0, i.BX)(i.HY, {
                    children: [
                      (0, i.tZ)(L, { children: n }),
                      (0, i.tZ)(y, {
                        children: r.map((e, t) =>
                          (0, i.BX)(
                            V,
                            {
                              onClick: () => F(t),
                              selected: t === E,
                              children: [
                                (0, i.tZ)(b, {
                                  children: (0, i.tZ)('span', { children: '0' + (t + 1) }),
                                }),
                                (0, i.BX)(k, {
                                  onMouseDown: K,
                                  children: [
                                    (0, i.tZ)('h4', {
                                      children: (0, i.tZ)(M, { children: e.title }),
                                    }),
                                    (0, i.tZ)('p', {
                                      children: (0, i.tZ)(v, { children: e.description }),
                                    }),
                                  ],
                                }),
                              ],
                            },
                            t
                          )
                        ),
                      }),
                      (0, i.tZ)(w, {}),
                      (0, i.tZ)(B, {
                        children: (0, i.tZ)('p', { dangerouslySetInnerHTML: { __html: s } }),
                      }),
                      c
                        ? (0, i.tZ)(X, {
                            children: (0, i.tZ)(P, {
                              variant: 'primary',
                              size: 'default',
                              label: 'Continue',
                              onClick: _,
                            }),
                          })
                        : G(),
                    ],
                  }),
            }),
            c &&
              (0, i.tZ)(R, {
                variant: 'secondary',
                size: 'medium',
                iconAlone: 'ClosePlain20',
                onClick: () => l(!1),
              }),
          ],
        });
      });
    },
    30957: function (e, t, n) {
      n.r(t),
        n.d(t, {
          COINBASE_ONE_END_DIALOG_ID: function () {
            return s;
          },
        });
      var i = n(78286),
        r = n(58258),
        a = n(54655),
        o = n(58404);
      let s = 'morpho.viewed.cb1-end';
      t.default = (0, r.memo)((e) => {
        let {} = e,
          { toggleDialog: t } = (0, a.DAv)(),
          n = (0, r.useCallback)(() => {
            (0, o.po)(s, 'true'), t(!1);
          }, [t]);
        return (0, i.BX)(a.Kqy, {
          direction: 'column',
          gap: 40,
          align: 'center',
          paddingBlock: 16,
          children: [
            (0, i.tZ)(a.zxk, {
              size: 'medium',
              iconAlone: 'ClosePlain20',
              onClick: n,
              variant: 'secondary',
              style: { position: 'absolute', top: 20, right: 20 },
            }),
            (0, i.BX)(a.Kqy, {
              gap: 24,
              align: 'center',
              children: [
                (0, i.tZ)(a.JO$, { icon: 'MorphoShade20', size: 30, padding: 0 }),
                (0, i.tZ)(a.JO$, {
                  icon: 'ClosePlain20',
                  size: 24,
                  padding: 0,
                  color: 'icon.secondary',
                }),
                (0, i.tZ)(a.JO$, { icon: 'CoinbaseOnePlain20', size: 30, padding: 0 }),
              ],
            }),
            (0, i.BX)(a.Kqy, {
              direction: 'column',
              align: 'center',
              gap: 20,
              children: [
                (0, i.tZ)(a.xvT.Title.S, { children: 'Coinbase One Rewards' }),
                (0, i.tZ)(a.xvT.Body.M.Regular, {
                  color: 'text.secondary',
                  textAlign: 'center',
                  children:
                    'Coinbase One rewards are over. The MORPHO and WELL you earned will be claimable on the Morpho App within 30 days.',
                }),
                (0, i.tZ)(a.zxk, {
                  size: 'big',
                  onClick: n,
                  children: (0, i.tZ)(a.xvT.Body.S.Regular, { children: 'Explore the App' }),
                }),
              ],
            }),
          ],
        });
      });
    },
    52242: function (e, t, n) {
      n.r(t),
        n.d(t, {
          COINBASE_ONE_RECAP_DIALOG_ID: function () {
            return C;
          },
        });
      var i = n(78286),
        r = n(58258),
        a = n(12556),
        o = n(54655),
        s = n(99971),
        l = n(68906),
        d = n(49663),
        u = n(67024),
        c = n(58404);
      let p = (e) => o.$0l.short.default('0.00').digits(2).of(e, 18),
        C = 'morpho.viewed.cb1-recap',
        h = (0, a.$B)('assets/logos/morpho.svg'),
        y = (0, a.$B)('assets/logos/well.svg');
      t.default = (0, r.memo)((e) => {
        let {} = e,
          { toggleDialog: t } = (0, o.DAv)(),
          {
            display: { rewardsMorpho: n },
          } = (0, l.D2)(),
          a = (0, r.useCallback)(() => {
            (0, c.po)(C, 'true'), t(!1);
          }, [t]),
          m = (0, r.useCallback)(() => {
            (0, c.po)(C, 'true'), t((0, i.tZ)(s.ar, {}));
          }, [t]),
          f = (0, r.useMemo)(
            () => ({ morpho: (0, u.I)(n, d.id.morphoToken), well: (0, u.I)(n, d.id.wellToken) }),
            [n]
          );
        return (0, i.BX)(o.Kqy, {
          direction: 'column',
          gap: 40,
          align: 'center',
          paddingBlock: 16,
          children: [
            (0, i.tZ)(o.zxk, {
              size: 'medium',
              iconAlone: 'ClosePlain20',
              onClick: a,
              variant: 'secondary',
              style: { position: 'absolute', top: 20, right: 20 },
            }),
            (0, i.BX)(o.Kqy, {
              gap: 24,
              align: 'center',
              children: [
                (0, i.tZ)(o.JO$, { icon: 'MorphoShade20', size: 30, padding: 0 }),
                (0, i.tZ)(o.JO$, {
                  icon: 'ClosePlain20',
                  size: 24,
                  padding: 0,
                  color: 'icon.secondary',
                }),
                (0, i.tZ)(o.JO$, { icon: 'CoinbaseOnePlain20', size: 30, padding: 0 }),
              ],
            }),
            (0, i.BX)(o.Kqy, {
              direction: 'column',
              align: 'center',
              gap: 'm',
              children: [
                (0, i.BX)(o.Kqy, {
                  direction: 'column',
                  align: 'center',
                  gap: 'xs',
                  children: [
                    (0, i.tZ)(o.xvT.Title.S, { children: 'Coinbase One Rewards' }),
                    (0, i.tZ)(o.xvT.Body.M.Regular, {
                      color: 'text.secondary',
                      style: { textAlign: 'center' },
                      children:
                        'Coinbase One rewards are now available to claim! Your wallet has earned:',
                    }),
                  ],
                }),
                (0, i.BX)(o.Kqy, {
                  align: 'center',
                  gap: 8,
                  children: [
                    (0, i.tZ)(o.qEK, { size: 'small', padding: 0, src: h }),
                    (0, i.BX)(o.xvT.Body.M.Regular, {
                      lineHeight: 'normal',
                      children: [p(f.morpho), ' MORPHO'],
                    }),
                    (0, i.tZ)(o.qEK, { size: 'small', padding: 0, src: y }),
                    (0, i.BX)(o.xvT.Body.M.Regular, {
                      lineHeight: 'normal',
                      children: [p(f.well), ' WELL'],
                    }),
                  ],
                }),
                (0, i.tZ)(o.zxk, {
                  size: 'big',
                  onClick: m,
                  children: (0, i.tZ)(o.xvT.Body.S.Regular, { children: 'Claim Rewards' }),
                }),
              ],
            }),
          ],
        });
      });
    },
    1072: function (e, t, n) {
      n.r(t),
        n.d(t, {
          COINBASE_ONE_START_DIALOG_ID: function () {
            return u;
          },
        });
      var i = n(78286),
        r = n(58258),
        a = n(85957),
        o = n(93726),
        s = n(54655),
        l = n(89991),
        d = n(58404);
      let u = 'morpho.viewed.cb1-start';
      t.default = (0, r.memo)((e) => {
        let {} = e,
          { toggleDialog: t } = (0, s.DAv)(),
          n = (0, a.useRouter)(),
          c = (0, a.usePathname)(),
          { setTargetChain: p } = (0, l.Z_)(),
          C = (0, r.useCallback)(() => {
            (0, d.po)(u, 'true'), t(!1);
          }, [t]),
          h = (0, r.useCallback)(() => {
            '/base/earn' !== c && (n.push('/base/earn'), p(o.u)), C();
          }, [C, n, c, p]);
        return (0, i.BX)(s.Kqy, {
          direction: 'column',
          gap: 40,
          align: 'center',
          paddingBlock: 16,
          children: [
            (0, i.tZ)(s.zxk, {
              size: 'medium',
              iconAlone: 'ClosePlain20',
              onClick: C,
              variant: 'secondary',
              style: { position: 'absolute', top: 20, right: 20 },
            }),
            (0, i.BX)(s.Kqy, {
              gap: 24,
              align: 'center',
              children: [
                (0, i.tZ)(s.JO$, { icon: 'MorphoShade20', size: 30, padding: 0 }),
                (0, i.tZ)(s.JO$, {
                  icon: 'ClosePlain20',
                  size: 24,
                  padding: 0,
                  color: 'icon.secondary',
                }),
                (0, i.tZ)(s.JO$, { icon: 'CoinbaseOnePlain20', size: 30, padding: 0 }),
              ],
            }),
            (0, i.BX)(s.Kqy, {
              direction: 'column',
              align: 'center',
              gap: 20,
              children: [
                (0, i.tZ)(s.xvT.Title.S, { children: 'Coinbase One Rewards' }),
                (0, i.tZ)(s.xvT.Body.M.Regular, {
                  color: 'text.secondary',
                  textAlign: 'center',
                  children:
                    'Coinbase One members are eligible for a portion of up to $58,000 MORPHO when depositing into any Morpho Vault on Base and an additional 1.8M WELL tokens if it’s a Moonwell Vault, until 31 May 2025. Rewards will be distributed and claimable on the Morpho App within 30 days of the end date.',
                }),
                (0, i.tZ)(s.zxk, {
                  size: 'big',
                  onClick: h,
                  children: (0, i.tZ)(s.xvT.Body.S.Regular, { children: 'View Vaults' }),
                }),
              ],
            }),
          ],
        });
      });
    },
    58321: function (e, t, n) {
      n.d(t, {
        il: function () {
          return k;
        },
      });
      var i = n(78286),
        r = n(58258),
        a = n(85957),
        o = n(40252),
        s = n(30957),
        l = n(52242),
        d = n(1072),
        u = n(34895),
        c = n(68906),
        p = n(49663),
        C = n(34097),
        h = n(67024),
        y = n(75638),
        m = n(89991);
      let f = (0, r.lazy)(() => n.e(242).then(n.bind(n, 90242))),
        H = (0, r.lazy)(() => n.e(9286).then(n.bind(n, 29286))),
        g = (0, r.lazy)(() => Promise.resolve().then(n.bind(n, 1072))),
        Z = (0, r.lazy)(() => Promise.resolve().then(n.bind(n, 30957))),
        V = (0, r.lazy)(() => Promise.resolve().then(n.bind(n, 52242))),
        b = (0, r.lazy)(() => n.e(4930).then(n.bind(n, 94930))),
        M = (0, r.createContext)(null),
        k = () => {
          let e = (0, r.useContext)(M);
          if (!e)
            throw Error(
              'useDialogOnMountData Context must be called inside a DialogOnMountDataContextProvider'
            );
          return e;
        };
      t.ZP = (e) => {
        let { children: t } = e,
          { account: n, targetChain: k } = (0, m.Z_)(),
          { navigationValue: v } = (0, y.v)(),
          {
            display: { rewardsMorpho: L },
          } = (0, c.D2)(),
          x = (0, a.useSearchParams)(),
          { shouldAskForReferrerConfirmation: w, referrerDialogViewedSessionKey: T } = (0, u.sf)(),
          B = (0, r.useMemo)(() => n.isConnected && n.attestations.base.coinbaseOne, [n]),
          X = (0, r.useMemo)(() => {
            let e = (0, h.I)(L, p.id.morphoToken),
              t = (0, h.I)(L, p.id.wellToken);
            return e > 0n || t > 0n;
          }, [L]),
          A = (0, r.useMemo)(() => {
            var e;
            return (
              'cb1' ===
                (null === (e = x.get('campaign')) || void 0 === e ? void 0 : e.toLowerCase()) &&
              k.id === o.ChainId.BaseMainnet
            );
          }, [x, k]),
          D = (0, r.useMemo)(
            () => [
              {
                component: (0, i.tZ)(f, {}),
                keyStore: (0, C.Hv)(C.RX.Earn),
                condition: n.isConnected && 'earn' === v,
                store: 'local',
                dialogOptions: { fullSize: !0, closable: !1 },
              },
              {
                component: (0, i.tZ)(H, {}),
                keyStore: (0, C.Hv)(C.RX.Borrow),
                condition: n.isConnected && 'borrow' === v,
                store: 'local',
                dialogOptions: { fullSize: !0, closable: !1 },
              },
              {
                component: (0, i.tZ)(b, {}),
                keyStore: T,
                condition: w,
                store: 'session',
                dialogOptions: { closable: !0 },
              },
              {
                component: (0, i.tZ)(g, {}),
                keyStore: d.COINBASE_ONE_START_DIALOG_ID,
                condition: B && !A,
                store: 'local',
                start: Date.UTC(2025, 1, 26, 8, 0, 0),
                end: Date.UTC(2025, 4, 31, 23, 59, 59),
                dialogOptions: { closable: !1 },
              },
              {
                component: (0, i.tZ)(g, {}),
                condition: A,
                store: 'local',
                start: Date.UTC(2025, 1, 26, 8, 0, 0),
                end: Date.UTC(2025, 4, 31, 23, 59, 59),
                dialogOptions: { closable: !1 },
              },
              {
                component: (0, i.tZ)(Z, {}),
                keyStore: s.COINBASE_ONE_END_DIALOG_ID,
                condition: B,
                store: 'local',
                start: Date.UTC(2025, 5, 1, 0, 0, 0),
                end: Date.UTC(2025, 5, 30, 23, 59, 59),
                dialogOptions: { closable: !1 },
              },
              {
                component: (0, i.tZ)(V, {}),
                keyStore: l.COINBASE_ONE_RECAP_DIALOG_ID,
                condition: B && X,
                store: 'local',
                start: Date.UTC(2025, 6, 1, 0, 0, 0),
                end: Date.UTC(2025, 6, 30, 23, 59, 59),
                dialogOptions: { closable: !1 },
              },
            ],
            [n, v, B, X, A, T, w]
          ),
          O = (0, r.useMemo)(() => ({ dialogs: D }), [D]);
        return (0, i.tZ)(M.Provider, { value: O, children: t });
      };
    },
    34895: function (e, t, n) {
      n.d(t, {
        sf: function () {
          return V;
        },
      });
      var i = n(78286),
        r = n(58258),
        a = n(85957),
        o = n(85605),
        s = n(74332),
        l = n(34361),
        d = n(40252),
        u = n(35047),
        c = n(18313),
        p = n(58404),
        C = n(89991);
      let { NEXT_PUBLIC_FUUL_API_KEY: h } = c.clientEnvs,
        y = 'Accept affiliate on '.concat(new Date().toISOString()),
        m = [
          'df1197c8-47e6-40ee-842d-bb9d577838c2',
          '8b29c45b-d9e2-4a9b-a5ff-4ac2105cf240',
          'e705b5c7-857a-405f-8176-7c7216758ecf',
          '2d4fa90c-f52f-43ac-ba8c-816564dcb04b',
          '52dc2591-51e6-474b-948f-94f92c1511b8',
          'df754a8e-d199-45ed-856a-321a25c47bae',
          'ddc12935-aa5c-43d1-b300-966c6ad36a87',
          '709bc13c-883e-4a93-bd71-4c6b19467186',
          '29bd7210-3a09-487c-8a24-712b4e8611d4',
          '3926986b-d87d-4a18-9565-9fb67ebb4cf9',
          '7b666934-00d5-480e-9176-0b1d56571e7f',
        ],
        f = (e) => 'morpho.referrer.viewed.'.concat(e),
        H = (e) => 'morpho.referrer.accepted.'.concat(e),
        g = 'fuul.referrer',
        Z = (0, r.createContext)(null),
        V = () => {
          let e = (0, r.useContext)(Z);
          if (!e) throw Error('useFuulContext must be used within a FuulProvider');
          return e;
        };
      t.ZP = (0, r.memo)((e) => {
        let { children: t } = e,
          { account: n } = (0, C.Z_)(),
          c = (0, a.usePathname)(),
          V = (0, a.useSearchParams)(),
          [b, M] = (0, r.useState)(!1),
          k = (0, r.useMemo)(() => {
            let e = V.get('referrer') || V.get('af'),
              t = (0, p.G)(g);
            return e && (0, p.t_)(g, e), t || e;
          }, [V]),
          v = (0, r.useMemo)(() => {
            if (null == n ? void 0 : n.address) return f(n.address);
          }, [n]),
          L = (0, r.useMemo)(() => {
            if (null == n ? void 0 : n.address) return H(n.address);
          }, [n]),
          x = (0, r.useMemo)(() => {
            if (!b || !h || !(null == n ? void 0 : n.address) || !(0, u.isDefined)(k)) return !1;
            let e = (0, p.wB)(f(n.address)),
              t = (0, p.kY)(H(n.address));
            return !e && !t;
          }, [b, null == n ? void 0 : n.address, k]),
          w = (0, s.useSignMessage)({
            mutation: {
              async onSuccess(e, t) {
                let { message: i } = t;
                (null == n ? void 0 : n.address) &&
                  (await (0, o.n)({ address: n.address, message: i, signature: e })) &&
                  ((0, d._try)(
                    async () =>
                      await l.ix.sendConnectWallet(
                        { address: n.address, signature: e, message: i.toString() },
                        m
                      )
                  ),
                  L && (0, p.po)(L, 'true'));
              },
            },
          });
        (0, r.useEffect)(() => {
          h &&
            !b &&
            (0, d._try)(() => {
              l.ix.init({ apiKey: h }), M(!0);
            });
        }, [b]),
          (0, r.useEffect)(() => {
            h && b && (0, d._try)(async () => await l.ix.sendPageview(c, m));
          }, [c, b]);
        let T = (0, r.useMemo)(
          () => ({
            isFuulInitialized: b,
            acceptReferralMessage: y,
            shouldAskForReferrerConfirmation: x,
            referrer: k,
            referrerDialogViewedSessionKey: v,
            referrerAcceptedLocalKey: L,
            trackConnectWallet: w,
          }),
          [b, k, v, L, x, w]
        );
        return (0, i.tZ)(Z.Provider, { value: T, children: t });
      });
    },
    3712: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return T;
        },
        w: function () {
          return L;
        },
      });
      var i = n(78286),
        r = n(58258),
        a = n(8152),
        o = n(23837),
        s = n(10943),
        l = n(40252),
        d = n(12556),
        u = n(33764),
        c = n(35047),
        p = n(55412),
        C = n(3245),
        h = n(95413),
        y = n(93114),
        m = n(91576),
        f = n(24387),
        H = n(60059);
      function g() {
        let e = (0, p._)([
          '\n  fragment sdkTokenFields on Asset {\n    id\n    address\n    symbol\n    name\n    decimals\n    priceUsd\n  }\n',
        ]);
        return (
          (g = function () {
            return e;
          }),
          e
        );
      }
      let Z = (0, C.Ps)(g());
      function V() {
        let e = (0, p._)([
          '\n  query GetVaultsForMigration(\n    $first: Int\n    $skip: Int\n    $orderBy: VaultOrderBy\n    $orderDirection: OrderDirection\n    $where: VaultFilters\n  ) {\n    vaults(\n      first: $first\n      skip: $skip\n      orderBy: $orderBy\n      orderDirection: $orderDirection\n      where: $where\n    ) {\n      items {\n        ...simpleVaultFields\n        creatorAddress\n        address\n        name\n        symbol\n        asset {\n          ...simpleAssetFields\n        }\n        chain {\n          id\n        }\n        metadata {\n          curators {\n            name\n            image\n          }\n        }\n        warnings {\n          type\n          level\n        }\n        state {\n          id\n          fee\n          totalAssets\n          totalAssetsUsd\n          dailyApy\n          dailyNetApy\n          rewards {\n            asset {\n              ...simpleAssetFields\n            }\n            amountPerSuppliedToken\n            supplyApr\n          }\n          allocation {\n            id\n            supplyAssets\n            supplyAssetsUsd\n            market {\n              id\n              uniqueKey\n              lltv\n              ...collateralExposuresFields\n              loanAsset {\n                id\n                name\n                address\n                ...sdkTokenFields\n              }\n              collateralAsset {\n                id\n                name\n                address\n                ...sdkTokenFields\n              }\n              state {\n                id\n                rewards {\n                  asset {\n                    ...simpleAssetFields\n                  }\n                  supplyApr\n                  amountPerSuppliedToken\n                }\n              }\n            }\n          }\n        }\n      }\n      pageInfo {\n        ...pageInfoFields\n      }\n    }\n  }\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n',
        ]);
        return (
          (V = function () {
            return e;
          }),
          e
        );
      }
      let b = {},
        M = (0, C.Ps)(V(), H.U, f.G, y.j, Z, m.Q);
      var k = n(89991);
      let v = (0, r.createContext)({
          migratablePositionsByProtocol: void 0,
          isLoading: !1,
          hasMigratablePositions: !1,
          migratablePositionCounter: 0,
          error: !1,
        }),
        L = () => {
          let e = (0, r.useContext)(v);
          if (!e) throw Error('useMigrationContext must be used within an MigrationProvider');
          return e;
        },
        x = [
          u.MigratableProtocol.aaveV2,
          u.MigratableProtocol.aaveV3,
          u.MigratableProtocol.aaveV3Optimizer,
          u.MigratableProtocol.compoundV2,
          u.MigratableProtocol.compoundV3,
        ],
        w = (0, r.memo)((e) => {
          let { children: t } = e,
            { account: n, targetChainId: p } = (0, k.Z_)(),
            C = (0, o.usePublicClient)(),
            {
              data: y,
              isLoading: m,
              error: f,
            } = (0, s.a)({
              queryKey: ['migratablePositions', n.address, p],
              queryFn: () =>
                C && n.address
                  ? (0, u.fetchMigratablePositions)(n.address, C, { protocols: x })
                  : null,
              enabled: void 0 !== n.address,
            }),
            H = (0, r.useMemo)(
              () =>
                y
                  ? Object.values(y)
                      .flat()
                      .map((e) => (e instanceof u.MigratableSupplyPosition ? e.loanToken : void 0))
                      .filter(c.isDefined)
                  : null,
              [y]
            ),
            {
              data: g,
              loading: Z,
              error: V,
            } = (function (e) {
              let t = { ...b, ...e };
              return h.aM(M, t);
            })({
              variables: {
                first: 1e3,
                where: { chainId_in: [p], assetAddress_in: H, whitelisted: !0 },
              },
              skip: !H || 0 === H.length,
            }),
            L = (0, r.useMemo)(() => {
              var e;
              if (!(null == g ? void 0 : g.vaults.items)) return new Map();
              let t = new Map();
              return (
                null === (e = g.vaults.items) ||
                  void 0 === e ||
                  e.forEach((e) => {
                    var n;
                    let i = e.asset.address;
                    t.has(i) || t.set(i, []), null === (n = t.get(i)) || void 0 === n || n.push(e);
                  }),
                t
              );
            }, [g]),
            w = (0, r.useCallback)(
              (e) => {
                let t = L.get(e.loanToken);
                return (
                  e.chainId === l.ChainId.BaseMainnet &&
                    e.protocol === u.MigratableProtocol.compoundV2 &&
                    (t = d.e8[e.chainId]
                      .map((e) => (null == t ? void 0 : t.find((t) => t.address === e)))
                      .filter(c.isDefined)),
                  null == t
                    ? void 0
                    : t
                        .filter((t) => {
                          var n;
                          return (
                            (0, a.E)(
                              null == t
                                ? void 0
                                : null === (n = t.asset) || void 0 === n
                                  ? void 0
                                  : n.address,
                              e.loanToken
                            ) && !(0, d.zF)({ chainId: t.chain.id, address: t.address }).isReadOnly
                          );
                        })
                        .sort((e, t) => {
                          var n, i, r, a;
                          let o =
                            null !==
                              (r =
                                null === (n = e.state) || void 0 === n ? void 0 : n.dailyNetApy) &&
                            void 0 !== r
                              ? r
                              : 0;
                          return (
                            (null !==
                              (a =
                                null === (i = t.state) || void 0 === i ? void 0 : i.dailyNetApy) &&
                            void 0 !== a
                              ? a
                              : 0) - o
                          );
                        })
                );
              },
              [L]
            ),
            T = (0, r.useCallback)(
              (e) => {
                if (e instanceof u.MigratableSupplyPosition && 0n !== e.max.value) {
                  let t = w(e);
                  return !!t && t.length > 0;
                }
                return !1;
              },
              [w]
            ),
            B = (0, r.useMemo)(() => {
              if (!y || !g) return;
              let e = Object.fromEntries(
                Object.entries(y).map((e) => {
                  let [t, n] = e;
                  return [
                    t,
                    n
                      .filter(T)
                      .map((e) => {
                        if (e instanceof u.MigratableSupplyPosition) {
                          var t;
                          let n = w(e),
                            i = null == n ? void 0 : n[0],
                            r = (0, d.wk)(null == i ? void 0 : i.asset);
                          if (i && r)
                            return {
                              migratablePosition: e,
                              maxUsdValue:
                                null !== (t = r.toUsd(e.max.value)) && void 0 !== t ? t : null,
                              compatibleVaults:
                                null == n
                                  ? void 0
                                  : n.sort(
                                      (0, c.bigIntComparator)((e) => {
                                        var t;
                                        return null === (t = e.state) || void 0 === t
                                          ? void 0
                                          : t.totalAssets;
                                      }, 'desc')
                                    ),
                              mostYieldingVault: i,
                            };
                        }
                      })
                      .filter(c.isDefined),
                  ];
                })
              );
              return x.reduce((t, n) => {
                var i;
                return { ...t, [n]: null !== (i = e[n]) && void 0 !== i ? i : [] };
              }, {});
            }, [y, g, T, w]),
            X = (0, r.useMemo)(
              () => Object.values(null != B ? B : {}).some((e) => e.length > 0),
              [B]
            ),
            A = (0, r.useMemo)(
              () => (B ? Object.values(B).reduce((e, t) => e + t.length, 0) : 0),
              [B]
            ),
            D = (0, r.useMemo)(
              () => ({
                migratablePositionsByProtocol: B,
                isLoading: m || Z,
                error: (0, c.isDefined)(f) || (0, c.isDefined)(V),
                hasMigratablePositions: X,
                migratablePositionCounter: A,
              }),
              [B, m, Z, f, V, X, A]
            );
          return (0, i.tZ)(v.Provider, { value: D, children: t });
        });
      w.displayName = 'MigrationContextProvider';
      var T = (0, r.memo)(w);
    },
    91576: function (e, t, n) {
      n.d(t, {
        Q: function () {
          return a;
        },
      });
      var i = n(55412);
      function r() {
        let e = (0, i._)([
          '\n  fragment pageInfoFields on PageInfo {\n    countTotal\n    count\n    limit\n    skip\n  }\n',
        ]);
        return (
          (r = function () {
            return e;
          }),
          e
        );
      }
      let a = (0, n(3245).Ps)(r());
    },
    60059: function (e, t, n) {
      n.d(t, {
        U: function () {
          return a;
        },
      });
      var i = n(55412);
      function r() {
        let e = (0, i._)([
          '\n  fragment simpleVaultFields on Vault {\n    id\n    address\n    symbol\n    name\n    metadata {\n      image\n    }\n  }\n',
        ]);
        return (
          (r = function () {
            return e;
          }),
          e
        );
      }
      let a = (0, n(3245).Ps)(r());
    },
    34097: function (e, t, n) {
      n.d(t, {
        Hv: function () {
          return o;
        },
        Q1: function () {
          return l;
        },
        RX: function () {
          return r;
        },
        aM: function () {
          return d;
        },
      });
      var i,
        r,
        a = n(58404);
      ((i = r || (r = {})).Earn = 'earn'), (i.Borrow = 'borrow');
      let o = (e) => 'morpho.consent.'.concat(e),
        s = (e, t) => {
          let n = o(e);
          (0, a.po)(n, t.toString());
        },
        l = (e) => {
          let t = o(e);
          return 'true' === (0, a.cF)(t);
        },
        d = (e) => {
          s(e, !0);
        };
    },
    73866: function (e, t, n) {
      n.d(t, {
        F: function () {
          return r;
        },
      });
      var i = n(58404);
      let r = (e) => {
        for (let r = 0; r < e.length; r++) {
          var t, n;
          let a = e[r];
          if ((null == a ? void 0 : a.start) && (null == a ? void 0 : a.end)) {
            let e = new Date(),
              t = new Date(null == a ? void 0 : a.start),
              n = new Date(null == a ? void 0 : a.end);
            if (e < t || e > n) continue;
          }
          let o = !1;
          switch (null == a ? void 0 : a.store) {
            case 'local':
              o = (0, i.kY)(
                null !== (t = null == a ? void 0 : a.keyStore) && void 0 !== t ? t : ''
              );
              break;
            case 'session':
              o = (0, i.wB)(
                null !== (n = null == a ? void 0 : a.keyStore) && void 0 !== n ? n : ''
              );
          }
          if ((null == a ? void 0 : a.condition) && !o) return { dialog: a };
        }
        return { dialog: null };
      };
    },
    67024: function (e, t, n) {
      n.d(t, {
        I: function () {
          return r;
        },
        K: function () {
          return i;
        },
      });
      let i = (e) =>
          e.reduce((e, t) => {
            var n, i;
            return (
              e +
              (null !== (i = null === (n = t.claimable) || void 0 === n ? void 0 : n.amountUsd) &&
              void 0 !== i
                ? i
                : 0n)
            );
          }, 0n),
        r = (e, t) =>
          e
            .filter((e) => e.rewardToken.token.address === t)
            .reduce((e, t) => {
              var n, i;
              return (
                e +
                (null !== (i = null === (n = t.claimable) || void 0 === n ? void 0 : n.amount) &&
                void 0 !== i
                  ? i
                  : 0n)
              );
            }, 0n);
    },
    58404: function (e, t, n) {
      n.d(t, {
        G: function () {
          return s;
        },
        cF: function () {
          return r;
        },
        kY: function () {
          return a;
        },
        po: function () {
          return i;
        },
        t_: function () {
          return o;
        },
        wB: function () {
          return l;
        },
      });
      let i = (e, t) => {
          try {
            localStorage.setItem(e, t);
          } catch (e) {}
        },
        r = (e) => {
          try {
            return localStorage.getItem(e);
          } catch (e) {
            return null;
          }
        },
        a = (e) => {
          let t = r(e);
          return !!t && 'true' === t;
        },
        o = (e, t) => {
          try {
            sessionStorage.setItem(e, t);
          } catch (e) {}
        },
        s = (e) => {
          try {
            return sessionStorage.getItem(e);
          } catch (e) {
            return null;
          }
        },
        l = (e) => {
          let t = s(e);
          return !!t && 'true' === t;
        };
    },
    75638: function (e, t, n) {
      n.d(t, {
        v: function () {
          return u;
        },
      });
      var i = n(58258),
        r = n(85957),
        a = n(12556),
        o = n(26726),
        s = n(3712),
        l = n(89991),
        d = n(6423);
      let u = () => {
        let e = (0, r.usePathname)(),
          { targetChain: t } = (0, l.Z_)(),
          n = (0, o.nh)(o.TP.UI_KIT),
          u = (0, o.nh)(o.TP.MIGRATION_PAGE),
          [c, p] = (0, i.useState)((0, d.BG)(e)),
          { migratablePositionCounter: C } = (0, s.w)(),
          h = (0, i.useMemo)(() => {
            let e = a.FW.getNameById(t.id);
            return (0, d.ge)({
              chainName: e,
              flags: { isUiKitAppEnabled: n, isMigrationPageEnabled: u },
              migratablePositionCounter: C,
            });
          }, [t.id, n, u, C]);
        return (
          (0, i.useEffect)(() => {
            p((0, d.BG)(e));
          }, [e]),
          { navigationValue: c, navigationOptions: h, onNavigationValueChange: p }
        );
      };
    },
    44736: function (e, t, n) {
      n.d(t, {
        G: function () {
          return s;
        },
      });
      var i = n(58258),
        r = n(54655),
        a = n(58321),
        o = n(73866);
      let s = () => {
        let { dialogs: e } = (0, a.il)(),
          { toggleDialog: t } = (0, r.DAv)();
        return (0, i.useCallback)(() => {
          let { dialog: n } = (0, o.F)(e);
          n ? t(null == n ? void 0 : n.component, null == n ? void 0 : n.dialogOptions) : t(!1);
        }, [e, t]);
      };
    },
  },
]);
