(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6604],
  {
    32042: (e) => {
      e.exports = {
        bulletList: 'styles_bulletList__t6e9z',
        numberList: 'styles_numberList__cK526',
        marquee: 'styles_marquee__XdtEB',
        marqueeContent: 'styles_marqueeContent__MPbhU',
        scroll: 'styles_scroll__gN_Xj',
        marqueeItem: 'styles_marqueeItem__e41yh',
        content: 'styles_content__CKrba',
        gradient: 'styles_gradient__Gbnbb',
        checkIcon: 'styles_checkIcon__teSjQ',
        button: 'styles_button___Rtnn',
      };
    },
    34039: (e, t, n) => {
      'use strict';
      n.d(t, { A: () => c });
      var l = n(37876),
        r = n(75026),
        i = n(88683),
        s = n(8027),
        a = n(4876),
        o = n(19563);
      let c = (e) => {
        let { onLogin: t, onContinue: n, buttonText: c } = e,
          C = (0, i.Ay)(),
          u = (0, r.A)();
        return null !== C
          ? (0, l.jsx)(s.$nd, {
              variant: 'contained',
              sx: { padding: '8px 16px' },
              onClick: n,
              children: (0, l.jsxs)(s.azJ, {
                justifyContent: 'space-between',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: 1,
                children: [
                  (0, l.jsxs)(s.azJ, {
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    children: [
                      (0, l.jsxs)(s.o5u, {
                        variant: 'subtitle2',
                        fontWeight: 700,
                        children: [c || 'Continue with', ' ', C.label],
                      }),
                      C.address &&
                        (0, l.jsx)(a.A, {
                          address: C.address,
                          shortAddress: !0,
                          avatarSize: 16,
                          showName: !1,
                          copyAddress: !1,
                        }),
                    ],
                  }),
                  C.icon &&
                    (0, l.jsx)(o.A, { icon: C.icon, provider: C.label, width: 24, height: 24 }),
                ],
              }),
            })
          : (0, l.jsx)(s.$nd, {
              onClick: () => {
                u(), t();
              },
              sx: { minHeight: '42px' },
              variant: 'contained',
              size: 'small',
              disableElevation: !0,
              children: 'Connect wallet',
            });
      };
    },
    34761: (e, t, n) => {
      'use strict';
      n.r(t), n.d(t, { default: () => T });
      var l,
        r,
        i,
        s,
        a,
        o,
        c,
        C,
        u = n(37876),
        d = n(77328),
        h = n.n(d),
        x = n(14232),
        m = n(13814),
        f = n(32042),
        p = n.n(f),
        g = ['title', 'titleId'];
      function _() {
        return (_ = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var l in n) ({}).hasOwnProperty.call(n, l) && (e[l] = n[l]);
              }
              return e;
            }).apply(null, arguments);
      }
      let w = function (e) {
        var t = e.title,
          n = e.titleId,
          r = (function (e, t) {
            if (null == e) return {};
            var n,
              l,
              r = (function (e, t) {
                if (null == e) return {};
                var n = {};
                for (var l in e)
                  if ({}.hasOwnProperty.call(e, l)) {
                    if (-1 !== t.indexOf(l)) continue;
                    n[l] = e[l];
                  }
                return n;
              })(e, t);
            if (Object.getOwnPropertySymbols) {
              var i = Object.getOwnPropertySymbols(e);
              for (l = 0; l < i.length; l++)
                (n = i[l]),
                  -1 === t.indexOf(n) && {}.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
            }
            return r;
          })(e, g);
        return x.createElement(
          'svg',
          _(
            {
              width: 24,
              height: 24,
              viewBox: '0 0 24 24',
              fill: 'none',
              xmlns: 'http://www.w3.org/2000/svg',
              'aria-labelledby': n,
            },
            r
          ),
          t ? x.createElement('title', { id: n }, t) : null,
          l ||
            (l = x.createElement('path', {
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              d: 'M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM9.27482 10.6992L11.5334 12.8123L14.8096 9.45275C15.388 8.85965 16.3377 8.84772 16.9308 9.4261C17.5239 10.0045 17.5358 10.9541 16.9574 11.5472L12.6554 15.9587C12.0855 16.5432 11.1528 16.5646 10.5567 16.0068L7.22519 12.8898C6.62026 12.3238 6.58868 11.3746 7.15467 10.7697C7.72066 10.1648 8.66988 10.1332 9.27482 10.6992Z',
              fill: 'currentColor',
            }))
        );
      };
      var j = n(72830),
        y = ['title', 'titleId'];
      function b() {
        return (b = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var l in n) ({}).hasOwnProperty.call(n, l) && (e[l] = n[l]);
              }
              return e;
            }).apply(null, arguments);
      }
      let v = function (e) {
        var t = e.title,
          n = e.titleId,
          l = (function (e, t) {
            if (null == e) return {};
            var n,
              l,
              r = (function (e, t) {
                if (null == e) return {};
                var n = {};
                for (var l in e)
                  if ({}.hasOwnProperty.call(e, l)) {
                    if (-1 !== t.indexOf(l)) continue;
                    n[l] = e[l];
                  }
                return n;
              })(e, t);
            if (Object.getOwnPropertySymbols) {
              var i = Object.getOwnPropertySymbols(e);
              for (l = 0; l < i.length; l++)
                (n = i[l]),
                  -1 === t.indexOf(n) && {}.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
            }
            return r;
          })(e, y);
        return x.createElement(
          'svg',
          b(
            {
              width: 78,
              height: 24,
              viewBox: '0 0 78 24',
              fill: 'none',
              xmlns: 'http://www.w3.org/2000/svg',
              'aria-labelledby': n,
            },
            l
          ),
          t ? x.createElement('title', { id: n }, t) : null,
          r ||
            (r = x.createElement('path', {
              d: 'M38.8669 11.3279C38.0779 11.011 37.1142 10.7469 35.9759 10.535H35.9517C34.8458 10.34 34.0162 10.161 33.4632 9.998C32.9103 9.83594 32.4753 9.61631 32.158 9.33959C31.8406 9.06336 31.6824 8.68118 31.6824 8.19305C31.6824 7.47756 31.9509 6.93283 32.4874 6.55888C33.0244 6.18492 33.7317 5.9977 34.6097 5.9977C35.5695 5.9977 36.3455 6.24152 36.9396 6.72965C37.4727 7.16794 37.7992 7.72476 37.9192 8.39914C37.9429 8.53363 38.0566 8.6328 38.193 8.63425L40.8925 8.65457C41.0579 8.65602 41.1905 8.51379 41.174 8.34883C41.0836 7.4466 40.7861 6.62612 40.282 5.88789C39.7208 5.06693 38.9482 4.42835 37.9642 3.97264C36.9802 3.51741 35.8622 3.28955 34.6097 3.28955C33.4226 3.28955 32.3534 3.50918 31.4019 3.94845C30.4508 4.38771 29.7106 4.99726 29.1818 5.77807C28.6531 6.55888 28.3889 7.43692 28.3889 8.41269C28.3889 9.48617 28.6245 10.3483 29.0962 10.9984C29.5679 11.6491 30.1857 12.1411 30.95 12.4744C31.7144 12.8077 32.6331 13.0719 33.7065 13.2673L33.8285 13.2915C34.9663 13.5029 35.8168 13.6901 36.3779 13.8527C36.9391 14.0157 37.3818 14.2431 37.7073 14.5358C38.0324 14.8285 38.195 15.2271 38.195 15.7312C38.195 16.4472 37.9023 17.0078 37.3169 17.4142C36.7316 17.8211 35.9749 18.0243 35.048 18.0243C33.9417 18.0243 33.0476 17.7437 32.3646 17.1825C31.7429 16.6721 31.3772 16.0166 31.2674 15.2164C31.2485 15.0781 31.1334 14.9731 30.994 14.9712L28.298 14.9305C28.134 14.9281 28.0014 15.0665 28.014 15.23C28.0904 16.214 28.3981 17.1007 28.937 17.8902C29.5306 18.7605 30.3477 19.4436 31.3888 19.9395C32.4294 20.4359 33.6248 20.6835 34.975 20.6835C36.227 20.6835 37.3493 20.4562 38.3416 20.0005C39.3333 19.5452 40.1102 18.9149 40.6714 18.1099C41.2326 17.3049 41.5132 16.3983 41.5132 15.3896C41.5132 14.3161 41.2689 13.4502 40.7812 12.7913C40.2936 12.1324 39.655 11.6448 38.8664 11.3274L38.8669 11.3279Z',
              fill: 'currentColor',
            })),
          i ||
            (i = x.createElement('path', {
              d: 'M55.4443 17.9028H55.023C54.7791 17.9028 54.5876 17.838 54.4497 17.7073C54.3113 17.5777 54.2421 17.3658 54.2421 17.0731V12.4134C54.2421 10.9336 53.7705 9.80737 52.8276 9.03479C51.8842 8.26269 50.7735 7.8689 49.0334 7.8689C47.3905 7.8689 46.1071 8.22592 45.0989 8.92497C44.1797 9.56258 43.6258 10.4358 43.4362 11.546C43.4066 11.7187 43.5373 11.8769 43.7119 11.8769H46.1912C46.3156 11.8769 46.4268 11.7952 46.4597 11.6752C46.5729 11.2645 46.8226 10.9292 47.2086 10.6694C47.6556 10.3685 48.1868 10.2181 48.8863 10.2181C50.2056 10.2181 51.1436 11.0313 51.1436 12.2427V12.6215C51.1436 12.7763 51.0183 12.9016 50.8635 12.9016H48.6178C46.7964 12.9016 45.4138 13.2596 44.4709 13.9751C43.5276 14.691 43.0559 15.7074 43.0559 17.0243C43.0559 18.1631 43.487 19.0576 44.349 19.7077C44.9958 20.1954 45.7689 20.4769 46.5647 20.6003C47.1728 20.6946 47.7973 20.729 48.4069 20.6313C49.0455 20.5292 49.5641 20.266 50.0832 19.8906C50.5495 19.5539 50.9385 19.1224 51.2936 18.596C51.4667 18.2985 51.921 18.418 51.921 18.762V19.1756C51.9205 19.9274 52.5296 20.5369 53.2814 20.5369H55.4443C55.5991 20.5369 55.7244 20.4116 55.7244 20.2568V18.1824C55.7244 18.0276 55.5991 17.9023 55.4443 17.9023V17.9028ZM51.1441 15.3901C51.1441 15.9919 51.0178 16.5163 50.7658 16.9633C50.2375 17.9009 49.2922 18.3904 48.2284 18.3904C47.6101 18.3904 47.1143 18.2443 46.7403 17.9517C46.3659 17.659 46.1791 17.2686 46.1791 16.7804C46.1791 16.228 46.3867 15.8008 46.8013 15.4999C47.2159 15.1995 47.8051 15.0485 48.5699 15.0485H50.864C51.0188 15.0485 51.1441 15.1738 51.1441 15.3286V15.3901Z',
              fill: 'currentColor',
            })),
          s ||
            (s = x.createElement('path', {
              d: 'M64.4827 3.46802H61.2565C59.5546 3.46802 58.1749 4.84773 58.1749 6.54964V7.90371C58.1749 8.05852 58.0496 8.18382 57.8948 8.18382H56.0526C55.8978 8.18382 55.7725 8.30912 55.7725 8.46392V10.5625C55.7725 10.7173 55.8978 10.8426 56.0526 10.8426H57.8948C58.0496 10.8426 58.1749 10.9679 58.1749 11.1227V20.2573C58.1749 20.4121 58.3002 20.5374 58.455 20.5374H60.9686C61.1234 20.5374 61.2487 20.4121 61.2487 20.2573V11.1227C61.2487 10.9679 61.374 10.8426 61.5288 10.8426H64.4581C64.6129 10.8426 64.7382 10.7173 64.7382 10.5625V8.46392C64.7382 8.30912 64.6129 8.18382 64.4581 8.18382H61.5288C61.374 8.18382 61.2487 8.05852 61.2487 7.90371V6.68703C61.2487 6.37742 61.4998 6.12682 61.8089 6.12682H64.4823C64.6371 6.12682 64.7624 6.00153 64.7624 5.84672V3.74812C64.7624 3.59331 64.6371 3.46802 64.4823 3.46802H64.4827Z',
              fill: 'currentColor',
            })),
          a ||
            (a = x.createElement('path', {
              d: 'M76.7975 10.7062C76.2527 9.79576 75.5082 9.09623 74.5653 8.6081C73.622 8.12046 72.5321 7.86938 71.2965 7.86938C70.0609 7.86938 68.9947 8.14078 68.0518 8.66906C67.1085 9.19782 66.3765 9.94573 65.8565 10.9133C65.336 11.8813 65.0757 13.0153 65.0757 14.3166C65.0757 15.6179 65.3442 16.7035 65.8807 17.6711C66.4177 18.6386 67.1859 19.3827 68.1858 19.9032C69.1858 20.4237 70.3609 20.684 71.7111 20.684C72.7517 20.684 73.6829 20.4929 74.5044 20.1107C75.3253 19.729 75.9881 19.2041 76.4922 18.5375C76.9237 17.9667 77.2183 17.3416 77.376 16.6629C77.4172 16.4868 77.2841 16.3175 77.1032 16.3175H74.5779C74.457 16.3175 74.351 16.3959 74.3123 16.5105C74.1343 17.0364 73.8203 17.4519 73.3699 17.7567C72.8654 18.0982 72.2394 18.269 71.4915 18.269C70.8732 18.269 70.3328 18.1389 69.8694 17.8786C69.4059 17.6188 69.0402 17.2526 68.7717 16.7809C68.6657 16.5947 68.5792 16.3978 68.51 16.1951C68.436 15.9774 68.3827 15.7529 68.346 15.5255C68.3334 15.4462 68.3218 15.3659 68.3121 15.2856C68.2932 15.1201 68.4243 14.9755 68.5908 14.9755H77.2991C77.4404 14.9755 77.5613 14.871 77.5773 14.7302C77.5894 14.6272 77.5976 14.5222 77.602 14.4143C77.6102 14.2194 77.6141 14.0404 77.6141 13.8778C77.6141 12.6747 77.3417 11.6176 76.797 10.7067L76.7975 10.7062ZM74.1807 12.8527H68.7267C68.5477 12.8527 68.4127 12.6868 68.4524 12.5121C68.5395 12.1295 68.6904 11.7841 68.9052 11.4744C69.1814 11.0763 69.5394 10.771 69.9787 10.5596C70.418 10.3482 70.8974 10.2423 71.4179 10.2423C72.2636 10.2423 72.9631 10.4701 73.516 10.9254C73.9906 11.3163 74.3031 11.8445 74.4546 12.5107C74.4942 12.6858 74.3602 12.8527 74.1807 12.8527Z',
              fill: 'currentColor',
            })),
          o ||
            (o = x.createElement('path', {
              d: 'M21.7425 11.9983H19.3517C18.6377 11.9983 18.0591 12.5769 18.0591 13.2909V16.761C18.0591 17.4751 17.4805 18.0537 16.7665 18.0537H7.25504C6.54099 18.0537 5.9624 18.6322 5.9624 19.3463V21.7371C5.9624 22.4511 6.54099 23.0297 7.25504 23.0297H17.317C18.031 23.0297 18.6014 22.4511 18.6014 21.7371V19.8189C18.6014 19.1049 19.18 18.5984 19.894 18.5984H21.742C22.4561 18.5984 23.0347 18.0198 23.0347 17.3057V13.2759C23.0347 12.5619 22.4561 11.9983 21.742 11.9983H21.7425Z',
              fill: 'currentColor',
            })),
          c ||
            (c = x.createElement('path', {
              d: 'M5.96191 7.24869C5.96191 6.53464 6.5405 5.95605 7.25455 5.95605H16.7602C17.4742 5.95605 18.0528 5.37746 18.0528 4.66341V2.27262C18.0528 1.55857 17.4742 0.97998 16.7602 0.97998H6.70353C5.98948 0.97998 5.41089 1.55857 5.41089 2.27262V4.11482C5.41089 4.82886 4.8323 5.40745 4.11826 5.40745H2.27848C1.56443 5.40745 0.98584 5.98604 0.98584 6.70009V10.7343C0.98584 11.4483 1.56685 11.9979 2.2809 11.9979H4.67169C5.38574 11.9979 5.96433 11.4193 5.96433 10.7052L5.96191 7.24917V7.24869Z',
              fill: 'currentColor',
            })),
          C ||
            (C = x.createElement('path', {
              d: 'M10.8851 9.48511H13.1815C13.9299 9.48511 14.5371 10.0927 14.5371 10.8406V13.1371C14.5371 13.8855 13.9294 14.4926 13.1815 14.4926H10.8851C10.1367 14.4926 9.52954 13.885 9.52954 13.1371V10.8406C9.52954 10.0922 10.1372 9.48511 10.8851 9.48511Z',
              fill: 'currentColor',
            }))
        );
      };
      var E = n(63248),
        H = n.n(E),
        O = n(89099),
        V = n(13090),
        A = n(85205),
        S = n(88683),
        L = n(5172),
        N = n(57187),
        k = n(52283),
        I = n(17203),
        P = n.n(I);
      let z = () => {
        let { address: e = '' } = (0, S.Ay)() || {},
          t = (0, N.GV)(k.cv),
          n = !P()(t),
          [l] = (0, L.A)(n ? '' : e);
        return n
          ? { isLoaded: !0, hasSafes: n }
          : l
            ? { isLoaded: !0, hasSafes: !P()(Object.values(l).flat()) }
            : { isLoaded: !1 };
      };
      var M = n(84942),
        Z = n(34039);
      let q = () => {
          let e = (0, O.useRouter)(),
            t = (0, S.Ay)(),
            { isLoaded: n, hasSafes: l } = z(),
            [r, i] = (0, x.useState)(!1),
            s = (0, x.useCallback)(() => {
              t &&
                (n && !l
                  ? ((0, A.sx)(V.$t.OPEN_SAFE_CREATION),
                    e.push({ pathname: j.S.newSafe.create, query: e.query }))
                  : e.push({ pathname: j.S.welcome.accounts, query: e.query }));
            }, [l, n, e, t]),
            a = (0, x.useCallback)(() => {
              i(!0);
            }, []);
          return (
            (0, x.useEffect)(() => {
              r && s();
            }, [s, r]),
            (0, u.jsx)(m.tu9, {
              className: H().loginCard,
              'data-testid': 'welcome-login',
              children: (0, u.jsxs)(m.azJ, {
                className: H().loginContent,
                children: [
                  (0, u.jsx)(m.Ahz, {
                    component: v,
                    inheritViewBox: !0,
                    sx: { height: '24px', width: '80px', ml: '-8px' },
                  }),
                  (0, u.jsx)(m.o5u, {
                    variant: 'h6',
                    mt: 6,
                    fontWeight: 700,
                    children: 'Get started',
                  }),
                  (0, u.jsx)(m.o5u, {
                    mb: 2,
                    textAlign: 'center',
                    children: t
                      ? 'Open your existing Safe Accounts or create a new one'
                      : 'Connect your wallet to create a new Safe Account or open an existing one',
                  }),
                  (0, u.jsx)(M.A, {
                    ...A.kg.OPEN_ONBOARD,
                    label: A.ui.welcome_page,
                    children: (0, u.jsx)(Z.A, { onLogin: a, onContinue: s }),
                  }),
                  !t &&
                    (0, u.jsxs)(u.Fragment, {
                      children: [
                        (0, u.jsx)(m.cGx, {
                          sx: { mt: 2, mb: 2, width: '100%' },
                          children: (0, u.jsx)(m.o5u, {
                            color: 'text.secondary',
                            fontWeight: 700,
                            variant: 'overline',
                            children: 'or',
                          }),
                        }),
                        l
                          ? (0, u.jsx)(m.N_E, {
                              href: j.S.welcome.accounts,
                              children: (0, u.jsx)(m.$nd, {
                                disableElevation: !0,
                                size: 'small',
                                children: 'View my accounts',
                              }),
                            })
                          : (0, u.jsx)(m.N_E, {
                              href: j.S.newSafe.load,
                              children: (0, u.jsx)(m.$nd, {
                                disableElevation: !0,
                                size: 'small',
                                children: 'Watch any account',
                              }),
                            }),
                      ],
                    }),
                ],
              }),
            })
          );
        },
        B = (e) => {
          let { text: t } = e;
          return (0, u.jsxs)('li', {
            children: [
              (0, u.jsx)(m.Ahz, { className: p().checkIcon, component: w, inheritViewBox: !0 }),
              (0, u.jsx)(m.o5u, { sx: { color: 'static.main', fontWeight: 700 }, children: t }),
            ],
          });
        },
        R = () =>
          (0, u.jsx)(u.Fragment, {
            children: (0, u.jsxs)(m.xA9, {
              container: !0,
              spacing: 3,
              direction: 'row-reverse',
              sx: { p: 3, pb: 0, flex: 1 },
              children: [
                (0, u.jsx)(m.xA9, { item: !0, xs: 12, lg: 6, children: (0, u.jsx)(q, {}) }),
                (0, u.jsx)(m.xA9, {
                  item: !0,
                  xs: 12,
                  lg: 6,
                  sx: { flex: 1 },
                  children: (0, u.jsxs)('div', {
                    className: p().content,
                    children: [
                      (0, u.jsx)(m.o5u, {
                        variant: 'h1',
                        sx: {
                          fontSize: [44, null, 52],
                          lineHeight: 1,
                          letterSpacing: -1.5,
                          color: 'static.main',
                        },
                        children: 'Unlock a new way of ownership',
                      }),
                      (0, u.jsx)(m.o5u, {
                        sx: { mb: 1, color: 'static.main' },
                        children:
                          'The most trusted decentralized custody protocol and collective asset management platform.',
                      }),
                      (0, u.jsxs)('ul', {
                        className: p().bulletList,
                        children: [
                          (0, u.jsx)(B, { text: 'Stealth security with multiple signers' }),
                          (0, u.jsx)(B, { text: 'Make it yours with modules and guards' }),
                          (0, u.jsx)(B, { text: 'Access 130+ ecosystem apps' }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            }),
          });
      var W = n(94937);
      let T = () =>
        (0, u.jsxs)(u.Fragment, {
          children: [
            (0, u.jsx)(h(), {
              children: (0, u.jsx)('title', { children: ''.concat(W.Az, ' – Welcome') }),
            }),
            (0, u.jsx)(R, {}),
          ],
        });
    },
    63248: (e) => {
      e.exports = {
        loginCard: 'styles_loginCard__4lP1u',
        loginContent: 'styles_loginContent__77BLT',
      };
    },
    74677: (e, t, n) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/welcome',
        function () {
          return n(34761);
        },
      ]);
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    e.O(0, [636, 6593, 8792], () => t(74677)), (_N_E = e.O());
  },
]);
//# sourceMappingURL=welcome-7b6348a36a2c727a.js.map
