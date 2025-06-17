(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6866],
  {
    81145: function (r, e, t) {
      'use strict';
      t.d(e, {
        x: function () {
          return s;
        },
      });
      var o = t(75040),
        n = t(76986);
      function s(r) {
        let {
            as: e,
            gap: t,
            flexDirection: s = 'column',
            style: i,
            alignItems: d,
            justifyContent: h,
            ...C
          } = r,
          l = {
            style: {
              display: 'flex',
              flexDirection: s,
              alignItems: d,
              justifyContent: h,
              gap: t ? (0, n.Q)(t) : void 0,
              ...i,
            },
            ...C,
          };
        return (0, o.jsx)(e, { ...l });
      }
    },
    26934: function (r, e, t) {
      'use strict';
      t.d(e, {
        J: function () {
          return d;
        },
        c: function () {
          return i;
        },
      });
      var o = t(75040),
        n = t(95248),
        s = t(50413);
      let i = {
          chevronRight: () => (0, o.jsx)('div', { children: '➡' }),
          danger: n.Yf,
          success: n.R$,
          warning: n.FC,
          close: n.bM,
          info: n.aU,
          question: n.BS,
          dot: n.kr,
          toastCheck: n.pp,
          toastError: n.z2,
          plus: () =>
            (0, o.jsx)('svg', {
              xmlns: 'http://www.w3.org/2000/svg',
              width: '21',
              height: '21',
              fill: 'none',
              viewBox: '0 0 16 16',
              children: (0, o.jsx)('path', {
                stroke: 'currentColor',
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: '1.5',
                d: 'M3 8h10M8 3v10',
              }),
            }),
          minus: () =>
            (0, o.jsx)('svg', {
              xmlns: 'http://www.w3.org/2000/svg',
              width: '24',
              height: '24',
              fill: 'none',
              viewBox: '0 0 24 24',
              children: (0, o.jsx)('g', {
                stroke: 'currentColor',
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: '1.5',
                children: (0, o.jsx)('path', { d: 'M18 12H6' }),
              }),
            }),
          editSmall: () =>
            (0, o.jsx)('svg', {
              width: '20',
              height: '20',
              viewBox: '0 0 20 20',
              fill: 'none',
              xmlns: 'http://www.w3.org/2000/svg',
              children: (0, o.jsx)('path', {
                d: 'M12.6022 4.02949L13.22 4.64907L13.2203 4.64882L12.6022 4.02949ZM15.9693 4.02949L16.5874 3.41016V3.41016L15.9693 4.02949ZM15.9693 7.39004L16.5872 8.00962L16.5874 8.00937L15.9693 7.39004ZM6.66672 16.6668V17.5418C6.89836 17.5418 7.12055 17.45 7.28458 17.2864L6.66672 16.6668ZM3.33337 16.6668H2.45837C2.45837 17.1501 2.85012 17.5418 3.33337 17.5418V16.6668ZM3.33337 13.2725L2.71552 12.6529C2.5509 12.8171 2.45837 13.04 2.45837 13.2725H3.33337ZM13.2203 4.64882C13.8085 4.06172 14.763 4.06172 15.3512 4.64882L16.5874 3.41016C15.3161 2.14127 13.2554 2.14127 11.984 3.41016L13.2203 4.64882ZM15.3512 4.64882C15.9385 5.23496 15.9385 6.18457 15.3512 6.77071L16.5874 8.00937C17.8598 6.73953 17.8598 4.68 16.5874 3.41016L15.3512 4.64882ZM15.3515 6.77046L6.04886 16.0473L7.28458 17.2864L16.5872 8.00962L15.3515 6.77046ZM6.66672 15.7918H3.33337V17.5418H6.66672V15.7918ZM11.9843 3.40991L2.71552 12.6529L3.95123 13.8921L13.22 4.64907L11.9843 3.40991ZM2.45837 13.2725V16.6668H4.20837V13.2725H2.45837ZM10.5555 6.07458L13.9227 9.43513L15.1589 8.19647L11.7917 4.83592L10.5555 6.07458Z',
                fill: 'currentColor',
              }),
            }),
          edit: () =>
            (0, o.jsx)('svg', {
              xmlns: 'http://www.w3.org/2000/svg',
              width: '24',
              height: '24',
              fill: 'none',
              viewBox: '0 0 24 24',
              children: (0, o.jsx)('path', {
                fill: 'currentColor',
                d: 'm15.123 4.837.706.708zm4.04 0 .707-.708zm0 4.033.707.708zM8.002 20.002v1a1 1 0 0 0 .706-.292zm-4 0H3a1 1 0 0 0 1 1zm0-4.073-.707-.708a1 1 0 0 0-.294.708zM15.828 5.545a1.86 1.86 0 0 1 2.628 0l1.413-1.416a3.86 3.86 0 0 0-5.453 0zm2.628 0a1.847 1.847 0 0 1 0 2.617l1.413 1.416a3.85 3.85 0 0 0 0-5.449zm0 2.617L7.294 19.294l1.413 1.416L19.87 9.578zM8.002 19.002H4v2h4zm6.416-14.873L3.294 15.221l1.413 1.416L15.829 5.545zM3 15.93v4.073h2v-4.073zm9.702-8.673 4.04 4.033 1.414-1.416-4.04-4.033z',
              }),
            }),
          copy: () =>
            (0, o.jsxs)('svg', {
              width: '20',
              height: '20',
              viewBox: '0 0 20 20',
              fill: 'none',
              xmlns: 'http://www.w3.org/2000/svg',
              children: [
                (0, o.jsx)('path', {
                  d: 'M7.77783 12.7778H5.55561C4.02149 12.7778 2.77783 11.5342 2.77783 10.0001V5.55561C2.77783 4.02149 4.02149 2.77783 5.55561 2.77783H10.0001C11.5342 2.77783 12.7778 4.02149 12.7778 5.55561V7.77783',
                  stroke: 'currentColor',
                  strokeWidth: '1.75',
                }),
                (0, o.jsx)('rect', {
                  x: '7.22217',
                  y: '7.22217',
                  width: '10',
                  height: '10',
                  rx: '2.77778',
                  stroke: 'currentColor',
                  strokeWidth: '1.75',
                }),
                (0, o.jsx)('path', {
                  style: { opacity: 0 },
                  d: 'M1 3L3 5L7 1',
                  stroke: 'var(--body-bg)',
                  strokeWidth: '2',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                }),
              ],
            }),
          star: () =>
            (0, o.jsx)('svg', {
              width: '20',
              height: '20',
              viewBox: '0 0 20 20',
              fill: 'none',
              xmlns: 'http://www.w3.org/2000/svg',
              children: (0, o.jsx)('path', {
                d: 'M8.71969 2.90327C9.2724 1.88981 10.7276 1.88981 11.2803 2.90327L12.7838 5.66012C12.9936 6.04472 13.3651 6.31466 13.7957 6.3953L16.8822 6.9733C18.0169 7.18578 18.4666 8.56976 17.6735 9.40859L15.5162 11.6904C15.2152 12.0088 15.0733 12.4455 15.1297 12.88L15.5338 15.994C15.6823 17.1388 14.505 17.9942 13.4622 17.4991L10.6254 16.1525C10.2296 15.9647 9.77038 15.9647 9.37462 16.1525L6.53783 17.4991C5.49499 17.9942 4.3177 17.1388 4.46624 15.994L4.87032 12.88C4.92669 12.4455 4.78478 12.0088 4.48382 11.6904L2.3265 9.40859C1.53345 8.56976 1.98313 7.18578 3.11778 6.9733L6.20431 6.3953C6.6349 6.31466 7.00644 6.04472 7.21619 5.66012L8.71969 2.90327Z',
                stroke: 'currentColor',
                strokeWidth: '1.75',
              }),
            }),
          starFilled: () =>
            (0, o.jsx)('svg', {
              width: '9',
              height: '9',
              viewBox: '0 0 9 9',
              fill: 'none',
              xmlns: 'http://www.w3.org/2000/svg',
              children: (0, o.jsx)('path', {
                d: 'M4.02619 0.89804C4.22719 0.517069 4.77281 0.517067 4.97381 0.898039L5.90532 2.66358C5.98284 2.8105 6.12412 2.91315 6.2878 2.94147L8.25478 3.2818C8.67922 3.35524 8.84782 3.87415 8.54761 4.18305L7.15634 5.61455C7.04056 5.73367 6.9866 5.89976 7.01024 6.06418L7.29439 8.04006C7.35571 8.46641 6.9143 8.78712 6.52775 8.59706L4.73638 7.71623C4.58732 7.64293 4.41268 7.64293 4.26362 7.71623L2.47225 8.59705C2.08571 8.78712 1.64429 8.46642 1.70561 8.04006L1.98976 6.06418C2.0134 5.89976 1.95944 5.73367 1.84366 5.61455L0.452388 4.18305C0.152176 3.87415 0.32078 3.35524 0.745219 3.2818L2.7122 2.94147C2.87588 2.91315 3.01716 2.8105 3.09468 2.66358L4.02619 0.89804Z',
                fill: 'currentColor',
              }),
            }),
          family: () =>
            (0, o.jsxs)('svg', {
              width: '18',
              height: '18',
              viewBox: '0 0 18 18',
              fill: 'none',
              xmlns: 'http://www.w3.org/2000/svg',
              children: [
                (0, o.jsx)('path', {
                  d: 'M10.1667 6.27783H7.83339C6.97428 6.27783 6.27783 6.97428 6.27783 7.83339V10.1667C6.27783 11.0258 6.97428 11.7223 7.83339 11.7223H10.1667C11.0258 11.7223 11.7223 11.0258 11.7223 10.1667V7.83339C11.7223 6.97428 11.0258 6.27783 10.1667 6.27783Z',
                  stroke: 'currentColor',
                  strokeWidth: '1.55556',
                  strokeLinecap: 'round',
                }),
                (0, o.jsx)('path', {
                  d: 'M16 9.00189C16 7.86726 15.1932 6.91858 14.1224 6.70247C14.1095 6.69987 14.1002 6.68859 14.1002 6.67546V6.67546C14.1002 6.66233 14.1095 6.65106 14.1224 6.64846C15.1932 6.43235 16 5.48367 16 4.34904C16 3.05198 14.9483 2.00377 13.6554 2.00377C12.5306 2.00377 11.5947 2.79303 11.3619 3.84626C11.3583 3.86234 11.3442 3.87396 11.3277 3.87396V3.87396C11.3112 3.87396 11.297 3.86232 11.2935 3.84624C11.0606 2.78929 10.1211 2 9 2C7.87893 2 6.93939 2.78928 6.70653 3.84253C6.70298 3.85858 6.68881 3.87019 6.67237 3.87019V3.87019C6.65588 3.87019 6.64169 3.85852 6.63818 3.84241C6.40895 2.78922 5.4694 2 4.34464 2C3.0517 2 2 3.05198 2 4.34527C2 5.47989 2.80677 6.42856 3.87755 6.64468C3.89044 6.64729 3.89984 6.65858 3.89984 6.67173V6.67173C3.89984 6.68485 3.89049 6.69612 3.87764 6.69876C2.80681 6.9185 2 7.8635 2 9.00189C2 10.1403 2.80679 11.0852 3.87758 11.3013C3.89045 11.3039 3.89984 11.3152 3.89984 11.3283V11.3283C3.89984 11.3414 3.89045 11.3527 3.87758 11.3553C2.80679 11.5714 2 12.5201 2 13.6547C2 14.9518 3.0517 16 4.34464 16C5.46945 16 6.40903 15.2107 6.63821 14.1538C6.6417 14.1377 6.65587 14.126 6.67233 14.126V14.126C6.68878 14.126 6.70295 14.1377 6.70645 14.1538C6.93566 15.207 7.87522 16 9 16C10.1248 16 11.0644 15.2107 11.2936 14.1538C11.2971 14.1377 11.3112 14.126 11.3277 14.126V14.126C11.3441 14.126 11.3583 14.1377 11.3618 14.1538C11.591 15.207 12.5306 16 13.6554 16C14.9521 16 16 14.948 16 13.6547C16 12.5201 15.1932 11.5714 14.1224 11.3553C14.1095 11.3527 14.1002 11.3414 14.1002 11.3283V11.3283C14.1002 11.3152 14.1095 11.3039 14.1224 11.3013C15.1932 11.0852 16 10.1365 16 9.00189Z',
                  stroke: 'currentColor',
                  strokeWidth: '1.55556',
                }),
              ],
            }),
          archive: () =>
            (0, o.jsxs)('svg', {
              width: '20',
              height: '20',
              viewBox: '0 0 20 20',
              fill: 'none',
              xmlns: 'http://www.w3.org/2000/svg',
              children: [
                (0, o.jsx)('path', {
                  d: 'M16.1111 7.77783V14.4445C16.1111 15.6718 15.1162 16.6667 13.8889 16.6667H6.11114C4.88384 16.6667 3.88892 15.6718 3.88892 14.4445V7.77783',
                  stroke: 'currentColor',
                  strokeWidth: '1.75',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                }),
                (0, o.jsx)('path', {
                  d: 'M16.6666 4.44434H3.33328C2.71963 4.44434 2.22217 4.9418 2.22217 5.55545V6.66656C2.22217 7.28021 2.71963 7.77767 3.33328 7.77767H16.6666C17.2803 7.77767 17.7777 7.28021 17.7777 6.66656V5.55545C17.7777 4.9418 17.2803 4.44434 16.6666 4.44434Z',
                  stroke: 'currentColor',
                  strokeWidth: '1.75',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                }),
                (0, o.jsx)('path', {
                  d: 'M8.33362 11.1118H11.667',
                  stroke: 'currentColor',
                  strokeWidth: '1.75',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                }),
              ],
            }),
          trash: () =>
            (0, o.jsxs)('svg', {
              width: '20',
              height: '20',
              viewBox: '0 0 20 20',
              fill: 'none',
              xmlns: 'http://www.w3.org/2000/svg',
              children: [
                (0, o.jsx)('path', {
                  d: 'M3 5.2002H5.13333H17.9333',
                  stroke: 'currentColor',
                  strokeWidth: '1.75',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                }),
                (0, o.jsx)('path', {
                  d: 'M7.26677 5.2V4.13333C7.26677 3.56754 7.49153 3.02492 7.89161 2.62484C8.29169 2.22476 8.83431 2 9.40011 2H11.5334C12.0992 2 12.6419 2.22476 13.0419 2.62484C13.442 3.02492 13.6668 3.56754 13.6668 4.13333V5.2M16.8668 5.2L15.012 16.3288C14.8512 17.2932 14.0169 18 13.0392 18H7.89436C6.91668 18 6.0823 17.2932 5.92157 16.3288L4.06677 5.2H16.8668Z',
                  stroke: 'currentColor',
                  strokeWidth: '1.75',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                }),
              ],
            }),
          undo: () =>
            (0, o.jsxs)('svg', {
              width: '18',
              height: '18',
              viewBox: '0 0 18 18',
              fill: 'none',
              xmlns: 'http://www.w3.org/2000/svg',
              children: [
                (0, o.jsx)('path', {
                  d: 'M7.88379 2.40137L5.45557 4.82959L7.88379 7.25781',
                  stroke: 'currentColor',
                  strokeWidth: '1.5',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                }),
                (0, o.jsx)('path', {
                  d: 'M4.04322 11.1073C4.26302 12.2023 4.83272 13.1961 5.66647 13.9391C6.50022 14.6821 7.55286 15.134 8.66578 15.2267C9.7787 15.3195 10.8916 15.048 11.8368 14.4532C12.782 13.8585 13.5084 12.9726 13.9063 11.9292C14.3043 10.8857 14.3524 9.74116 14.0434 8.668C13.7343 7.59484 13.0848 6.65119 12.1928 5.97923C11.3008 5.30727 10.2146 4.94341 9.09785 4.94247L5.45552 4.82915',
                  stroke: 'currentColor',
                  strokeWidth: '1.5',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                }),
              ],
            }),
          view: () =>
            (0, o.jsxs)('svg', {
              width: '20',
              height: '20',
              viewBox: '0 0 20 20',
              fill: 'none',
              xmlns: 'http://www.w3.org/2000/svg',
              children: [
                (0, o.jsx)('path', {
                  d: 'M9.99995 17.7777C14.2955 17.7777 17.7777 14.2955 17.7777 9.99995C17.7777 5.7044 14.2955 2.22217 9.99995 2.22217C5.7044 2.22217 2.22217 5.7044 2.22217 9.99995C2.22217 14.2955 5.7044 17.7777 9.99995 17.7777Z',
                  stroke: 'currentColor',
                  strokeWidth: '1.75',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                }),
                (0, o.jsx)('path', {
                  d: 'M2.22217 10H17.7777',
                  stroke: 'currentColor',
                  strokeWidth: '1.75',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                }),
                (0, o.jsx)('path', {
                  d: 'M9.99991 2.22217C11.9453 4.352 13.0509 7.11597 13.111 9.99995C13.0509 12.8839 11.9453 15.6479 9.99991 17.7777C8.05446 15.6479 6.94888 12.8839 6.88879 9.99995C6.94888 7.11597 8.05446 4.352 9.99991 2.22217V2.22217Z',
                  stroke: 'currentColor',
                  strokeWidth: '1.75',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                }),
              ],
            }),
          qrCode: () =>
            (0, o.jsxs)('svg', {
              width: '20',
              height: '20',
              viewBox: '0 0 20 20',
              fill: 'none',
              xmlns: 'http://www.w3.org/2000/svg',
              children: [
                (0, o.jsx)('rect', {
                  x: '2.75',
                  y: '2.75',
                  width: '5.75',
                  height: '5.75',
                  rx: '1.5',
                  stroke: 'currentColor',
                  strokeWidth: '1.75',
                  strokeLinejoin: 'round',
                }),
                (0, o.jsx)('rect', {
                  x: '2.75',
                  y: '2.75',
                  width: '5.75',
                  height: '5.75',
                  rx: '1.5',
                  stroke: 'currentColor',
                  strokeWidth: '1.75',
                  strokeLinejoin: 'round',
                }),
                (0, o.jsx)('rect', {
                  x: '11.5',
                  y: '2.75',
                  width: '5.75',
                  height: '5.75',
                  rx: '1.5',
                  stroke: 'currentColor',
                  strokeWidth: '1.75',
                  strokeLinejoin: 'round',
                }),
                (0, o.jsx)('rect', {
                  x: '11.5',
                  y: '2.75',
                  width: '5.75',
                  height: '5.75',
                  rx: '1.5',
                  stroke: 'currentColor',
                  strokeWidth: '1.75',
                  strokeLinejoin: 'round',
                }),
                (0, o.jsx)('rect', {
                  x: '2.75',
                  y: '11.5',
                  width: '5.75',
                  height: '5.75',
                  rx: '1.5',
                  stroke: 'currentColor',
                  strokeWidth: '1.75',
                  strokeLinejoin: 'round',
                }),
                (0, o.jsx)('rect', {
                  x: '2.75',
                  y: '11.5',
                  width: '5.75',
                  height: '5.75',
                  rx: '1.5',
                  stroke: 'currentColor',
                  strokeWidth: '1.75',
                  strokeLinejoin: 'round',
                }),
                (0, o.jsx)('rect', {
                  x: '15.25',
                  y: '11',
                  width: '2.75',
                  height: '2.75',
                  rx: '1',
                  fill: 'currentColor',
                }),
                (0, o.jsx)('rect', {
                  x: '11',
                  y: '11',
                  width: '2.75',
                  height: '2.75',
                  rx: '1',
                  fill: 'currentColor',
                }),
                (0, o.jsx)('rect', {
                  x: '11',
                  y: '15.25',
                  width: '2.75',
                  height: '2.75',
                  rx: '1',
                  fill: 'currentColor',
                }),
              ],
            }),
          collectible: () =>
            (0, o.jsxs)('svg', {
              width: '20',
              height: '20',
              viewBox: '0 0 20 20',
              fill: 'none',
              xmlns: 'http://www.w3.org/2000/svg',
              children: [
                (0, o.jsx)('rect', {
                  x: '2.22217',
                  y: '2.22266',
                  width: '15.5556',
                  height: '15.5556',
                  rx: '3.33333',
                  stroke: 'currentColor',
                  strokeWidth: '1.75',
                }),
                (0, o.jsx)('rect', {
                  x: '2.22217',
                  y: '2.22266',
                  width: '15.5556',
                  height: '15.5556',
                  rx: '3.33333',
                  stroke: 'currentColor',
                  strokeWidth: '1.75',
                }),
                (0, o.jsx)('path', {
                  d: 'M2.77783 15.5556L11.6007 10.9119C12.591 10.3907 13.8145 10.6872 14.4562 11.6041L17.2223 15.5556',
                  stroke: 'currentColor',
                  strokeWidth: '1.75',
                  strokeLinecap: 'round',
                }),
                (0, o.jsx)('circle', {
                  cx: '7.22233',
                  cy: '7.22233',
                  r: '1.66667',
                  stroke: 'currentColor',
                  strokeWidth: '1.75',
                }),
              ],
            }),
          token: () =>
            (0, o.jsxs)('svg', {
              width: '18',
              height: '18',
              viewBox: '0 0 18 18',
              fill: 'none',
              xmlns: 'http://www.w3.org/2000/svg',
              children: [
                (0, o.jsx)('ellipse', {
                  cx: '9',
                  cy: '7',
                  rx: '7',
                  ry: '3',
                  transform: 'rotate(-180 9 7)',
                  stroke: 'currentColor',
                  strokeWidth: '1.5',
                  strokeLinecap: 'round',
                }),
                (0, o.jsx)('path', {
                  d: 'M16 7L16 11C16 12.6569 12.866 14 9 14C5.13401 14 2 12.6569 2 11L2 7',
                  stroke: 'currentColor',
                  strokeWidth: '1.5',
                  strokeLinecap: 'round',
                }),
              ],
            }),
          send: () =>
            (0, o.jsxs)('svg', {
              width: '20',
              height: '20',
              viewBox: '0 0 20 20',
              fill: 'none',
              xmlns: 'http://www.w3.org/2000/svg',
              children: [
                (0, o.jsx)('path', {
                  d: 'M12.2222 8.3335L8.97217 11.5835',
                  stroke: 'currentColor',
                  strokeWidth: '1.75',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                }),
                (0, o.jsx)('path', {
                  d: 'M16.6776 3.52408C16.8973 3.4472 17.1085 3.65836 17.0316 3.87803L12.2036 17.6722C12.1205 17.9096 11.7898 17.9231 11.6876 17.6932L8.97217 11.5835L2.86243 8.86806C2.63253 8.76588 2.64603 8.43515 2.88348 8.35204L16.6776 3.52408Z',
                  stroke: 'currentColor',
                  strokeWidth: '1.75',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                }),
              ],
            }),
          externalLink: () =>
            (0, o.jsx)('svg', {
              width: '16',
              height: '16',
              viewBox: '0 0 16 16',
              fill: 'none',
              xmlns: 'http://www.w3.org/2000/svg',
              children: (0, o.jsx)('path', {
                d: 'M12 10L12 4M12 4L6 4M12 4L4 12',
                stroke: 'currentColor',
                strokeWidth: '1.5',
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
              }),
            }),
          emoji: () =>
            (0, o.jsx)('svg', {
              width: '20',
              height: '20',
              viewBox: '0 0 20 20',
              fill: 'none',
              xmlns: 'http://www.w3.org/2000/svg',
              children: (0, o.jsx)('path', {
                d: 'M7.55573 12.4448C8.9057 13.7947 11.0944 13.7947 12.4444 12.4448M12.5926 8.27204H12.584M7.40746 8.27204H7.39882M2.22228 10.0004C2.22228 14.296 5.70451 17.7782 10.0001 17.7782C14.2956 17.7782 17.7778 14.296 17.7778 10.0004C17.7778 5.70489 14.2956 2.22266 10.0001 2.22266C5.70451 2.22266 2.22228 5.70489 2.22228 10.0004Z',
                stroke: 'currentColor',
                strokeWidth: '1.75',
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
              }),
            }),
          change: () =>
            (0, o.jsxs)('svg', {
              width: '18',
              height: '18',
              viewBox: '0 0 18 18',
              fill: 'none',
              xmlns: 'http://www.w3.org/2000/svg',
              children: [
                (0, o.jsx)('defs', {
                  children: (0, o.jsxs)('mask', {
                    id: 'icon-changeLine-mask',
                    children: [
                      (0, o.jsx)('rect', {
                        x: '0',
                        y: '0',
                        width: '18',
                        height: '18',
                        fill: 'white',
                      }),
                      (0, o.jsx)('path', {
                        d: 'M1.1672 12.8378L2.17236 9.08643L5.9237 10.0916',
                        stroke: 'black',
                        strokeWidth: '1.5',
                        strokeLinecap: 'round',
                        strokeLinejoin: 'round',
                      }),
                      (0, o.jsx)('path', {
                        d: 'M16.8329 5.12382L15.8277 8.87516L12.0764 7.86999',
                        stroke: 'black',
                        strokeWidth: '1.5',
                        strokeLinecap: 'round',
                        strokeLinejoin: 'round',
                      }),
                    ],
                  }),
                }),
                (0, o.jsx)('path', {
                  d: 'M1.1672 12.8378L2.17236 9.08643L5.9237 10.0916',
                  stroke: 'currentColor',
                  strokeWidth: '1.5',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                }),
                (0, o.jsx)('path', {
                  d: 'M2.17236 9.08643L4.34298 12.5897C4.83479 13.4421 5.53451 14.1559 6.37684 14.6647C7.21917 15.1735 8.17665 15.4606 9.15995 15.4993C10.1433 15.5379 11.1203 15.3268 12 14.8857C12.8796 14.4446 13.6332 13.7879 14.1904 12.9768',
                  stroke: 'currentColor',
                  strokeWidth: '1.5',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  mask: 'url(#icon-changeLine-mask)',
                }),
                (0, o.jsx)('path', {
                  d: 'M16.8329 5.12382L15.8277 8.87516L12.0764 7.86999',
                  stroke: 'currentColor',
                  strokeWidth: '1.5',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                }),
                (0, o.jsx)('path', {
                  d: 'M3.80968 4.98423C4.36688 4.17312 5.12047 3.51637 6.00013 3.07528C6.87979 2.63418 7.85686 2.4231 8.84016 2.46175C9.82346 2.5004 10.7809 2.78751 11.6233 3.29629C12.4656 3.80506 13.1653 4.51893 13.6571 5.37127L15.8277 8.87458',
                  stroke: 'currentColor',
                  strokeWidth: '1.5',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  mask: 'url(#icon-changeLine-mask)',
                }),
              ],
            }),
          random: () =>
            (0, o.jsxs)('svg', {
              width: '20',
              height: '20',
              viewBox: '0 0 20 20',
              fill: 'none',
              xmlns: 'http://www.w3.org/2000/svg',
              children: [
                (0, o.jsx)('path', {
                  d: 'M1.29672 14.2648L2.41357 10.0967L6.58173 11.2135',
                  stroke: 'currentColor',
                  strokeWidth: '1.66667',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                }),
                (0, o.jsx)('path', {
                  d: 'M2.41357 10.0967L4.82537 13.9892C5.37183 14.9363 6.14929 15.7295 7.08521 16.2948C8.02113 16.8601 9.08501 17.1791 10.1776 17.222C11.2701 17.265 12.3557 17.0305 13.3332 16.5403C14.3106 16.0502 15.1479 15.3205 15.767 14.4193',
                  stroke: 'currentColor',
                  strokeWidth: '1.66667',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                }),
                (0, o.jsx)('path', {
                  d: 'M18.7028 5.694L17.586 9.86215L13.4178 8.7453',
                  stroke: 'currentColor',
                  strokeWidth: '1.66667',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                }),
                (0, o.jsx)('path', {
                  d: 'M4.23222 5.53858C4.85133 4.63734 5.68865 3.90762 6.66605 3.41752C7.64345 2.92741 8.72908 2.69288 9.82164 2.73582C10.9142 2.77876 11.9781 3.09777 12.914 3.66308C13.8499 4.22839 14.6274 5.02158 15.1738 5.96863L17.5856 9.86118',
                  stroke: 'currentColor',
                  strokeWidth: '1.66667',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                }),
              ],
            }),
          switch: () =>
            (0, o.jsxs)('svg', {
              width: '18',
              height: '18',
              viewBox: '0 0 18 18',
              fill: 'none',
              xmlns: 'http://www.w3.org/2000/svg',
              children: [
                (0, o.jsx)('path', {
                  d: 'M6.00049 5L15.5005 5M15.5005 5L12.2505 8M15.5005 5L12.2505 2',
                  stroke: 'currentColor',
                  strokeWidth: '1.5',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                }),
                (0, o.jsx)('path', {
                  d: 'M11.5 13.0005L2 13.0005M2 13.0005L5.25 10.0005M2 13.0005L5.25 16.0005',
                  stroke: 'currentColor',
                  strokeWidth: '1.5',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                }),
              ],
            }),
          read: () =>
            (0, o.jsxs)('svg', {
              width: '18',
              height: '18',
              viewBox: '0 0 18 18',
              fill: 'none',
              xmlns: 'http://www.w3.org/2000/svg',
              children: [
                (0, o.jsx)('path', {
                  d: 'M2 9H15',
                  stroke: 'currentColor',
                  strokeWidth: '1.5',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                }),
                (0, o.jsx)('path', {
                  d: 'M2 4H13',
                  stroke: 'currentColor',
                  strokeWidth: '1.5',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                }),
                (0, o.jsx)('path', {
                  d: 'M2 14H11',
                  stroke: 'currentColor',
                  strokeWidth: '1.5',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                }),
              ],
            }),
          currency: () =>
            (0, o.jsxs)('svg', {
              width: '18',
              height: '18',
              viewBox: '0 0 18 18',
              fill: 'none',
              xmlns: 'http://www.w3.org/2000/svg',
              children: [
                (0, o.jsx)('path', {
                  d: 'M9.0918 2V17',
                  stroke: 'currentColor',
                  strokeWidth: '1.5',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                }),
                (0, o.jsx)('path', {
                  d: 'M12.5 4.72754H7.38636C6.75346 4.72754 6.14648 4.97896 5.69895 5.42649C5.25142 5.87402 5 6.481 5 7.1139C5 7.74681 5.25142 8.35379 5.69895 8.80132C6.14648 9.24885 6.75346 9.50027 7.38636 9.50027H10.7955C11.4284 9.50027 12.0353 9.75169 12.4829 10.1992C12.9304 10.6467 13.1818 11.2537 13.1818 11.8866C13.1818 12.5195 12.9304 13.1265 12.4829 13.574C12.0353 14.0216 11.4284 14.273 10.7955 14.273H5',
                  stroke: 'currentColor',
                  strokeWidth: '1.5',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                }),
              ],
            }),
          reset: () =>
            (0, o.jsx)('svg', {
              width: '20',
              height: '20',
              viewBox: '0 0 20 20',
              fill: 'none',
              xmlns: 'http://www.w3.org/2000/svg',
              children: (0, o.jsx)('path', {
                d: 'M3 6.88889L4.75778 5.13111C6.16475 3.77095 8.04307 3.00736 10 3C11.3845 3 12.7378 3.41054 13.889 4.17971C15.0401 4.94888 15.9373 6.04213 16.4672 7.32121C16.997 8.6003 17.1356 10.0078 16.8655 11.3656C16.5954 12.7235 15.9287 13.9708 14.9497 14.9497C13.9708 15.9287 12.7235 16.5954 11.3656 16.8655C10.0078 17.1356 8.6003 16.997 7.32121 16.4672C6.04213 15.9373 4.94888 15.0401 4.17971 13.889C3.66653 13.121 3.31298 12.2629 3.1345 11.3656C3.11251 11.2551 3.09317 11.1439 3.07653 11.0323M3 6.88889V3M3 6.88889H6.88889',
                stroke: 'currentColor',
                strokeWidth: '1.75',
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
              }),
            }),
          hide: () =>
            (0, o.jsx)('svg', {
              xmlns: 'http://www.w3.org/2000/svg',
              width: '22',
              height: '18',
              fill: 'none',
              children: (0, o.jsx)('path', {
                stroke: 'currentColor',
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: '2',
                d: 'M9.186 2.215A7.877 7.877 0 0 1 11 2.008c5.101 0 8.358 4.92 9.25 6.456a.9.9 0 0 1-.001.905c-.47.813-1.01 1.584-1.614 2.303m-5.804-.924a2.59 2.59 0 1 1-3.662-3.662m6.961 6.96a8.697 8.697 0 0 1-5.13 1.78c-5.1 0-8.357-4.918-9.25-6.455a.9.9 0 0 1 .002-.907A15.934 15.934 0 0 1 5.87 3.787l10.26 10.26ZM3.083 1l15.834 15.833',
              }),
            }),
          wallet: s.nr,
          account: s.Uu,
          security: s.z0,
          support: s.M6,
          addressBook: s.X6,
          password: () =>
            (0, o.jsxs)('svg', {
              width: '24',
              height: '24',
              viewBox: '0 0 24 24',
              fill: 'none',
              xmlns: 'http://www.w3.org/2000/svg',
              children: [
                (0, o.jsx)('path', {
                  d: 'M8 9V6.88889C8 5.85749 8.42143 4.86834 9.17157 4.13903C9.92172 3.40972 10.9391 3 12 3C13.0609 3 14.0783 3.40972 14.8284 4.13903C15.5786 4.86834 16 5.85749 16 6.88889V9',
                  stroke: 'currentColor',
                  strokeWidth: '2',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                }),
                (0, o.jsx)('path', {
                  d: 'M4.63691 13.0362C4.8034 11.2387 6.24409 9.84983 8.04315 9.70101C9.33301 9.59431 10.8097 9.5 12 9.5C13.1903 9.5 14.667 9.59431 15.9568 9.70101C17.7559 9.84983 19.1966 11.2387 19.3631 13.0362C19.4408 13.8749 19.5 14.7577 19.5 15.5C19.5 16.2423 19.4408 17.1251 19.3631 17.9638C19.1966 19.7613 17.7559 21.1502 15.9568 21.299C14.667 21.4057 13.1903 21.5 12 21.5C10.8097 21.5 9.33301 21.4057 8.04315 21.299C6.24409 21.1502 4.8034 19.7613 4.63691 17.9638C4.55923 17.1251 4.5 16.2423 4.5 15.5C4.5 14.7577 4.55923 13.8749 4.63691 13.0362Z',
                  stroke: 'currentColor',
                  strokeWidth: '2',
                }),
              ],
            }),
          passkey: () =>
            (0, o.jsxs)('svg', {
              width: '24',
              height: '24',
              viewBox: '0 0 24 24',
              fill: 'none',
              xmlns: 'http://www.w3.org/2000/svg',
              children: [
                (0, o.jsx)('path', {
                  fillRule: 'evenodd',
                  clipRule: 'evenodd',
                  d: 'M6 6.5C6 3.46243 8.46243 1 11.5 1C14.0938 1 16.2682 2.79544 16.8482 5.21128C16.1918 5.35576 15.5531 5.60021 14.9562 5.94461C14.6901 4.27555 13.244 3 11.5 3C9.567 3 8 4.567 8 6.5C8 8.433 9.567 10 11.5 10C11.6166 10 11.732 9.99429 11.8457 9.98314C11.6679 10.6415 11.5925 11.3218 11.6196 11.9987C11.5798 11.9996 11.54 12 11.5 12C8.46243 12 6 9.53757 6 6.5ZM12.0116 14.0034C11.8413 14.0012 11.6707 14 11.5 14C9.61542 14 7.74006 14.1404 6.22472 14.2983C3.75046 14.5561 2 16.6745 2 19.0918C2 20.3724 2.95533 21.4712 4.25566 21.6025C5.86196 21.7647 8.67568 22 11.5 22C12.3559 22 13.2109 21.9784 14.0315 21.9438C13.8057 21.492 13.685 20.9899 13.685 20.4754V19.9561C12.9712 19.9834 12.2352 20 11.5 20C8.77205 20 6.0335 19.7719 4.45658 19.6127C4.20389 19.5871 4 19.3721 4 19.0918C4 17.6277 5.04575 16.432 6.43199 16.2876C7.90563 16.134 9.70743 16 11.5 16C12.0655 16 12.6318 16.0133 13.1885 16.0364C12.6663 15.4192 12.2739 14.7295 12.0116 14.0034Z',
                  fill: 'currentColor',
                }),
                (0, o.jsx)('path', {
                  d: 'M21.1056 14.4963C22.5941 13.0078 22.5941 10.5945 21.1056 9.10597C19.6171 7.61748 17.2038 7.61748 15.7153 9.10597C14.2268 10.5945 14.2268 13.0078 15.7153 14.4963C15.9876 14.7685 16.2908 14.991 16.6137 15.1637L16.6137 20.2849C16.6137 20.4366 16.6739 20.5821 16.7812 20.6894L17.6139 21.5225C18.0649 21.9739 18.798 21.9691 19.2432 21.5119L20.2072 20.5218L20.2072 15.1637C20.5301 14.991 20.8333 14.7685 21.1056 14.4963Z',
                  stroke: 'currentColor',
                  strokeWidth: '2',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                }),
              ],
            }),
          email: () =>
            (0, o.jsxs)('svg', {
              width: '24',
              height: '24',
              viewBox: '0 0 24 24',
              fill: 'none',
              xmlns: 'http://www.w3.org/2000/svg',
              children: [
                (0, o.jsx)('path', {
                  d: 'M3.5 7L10.6341 11.1966C11.4772 11.6925 12.5228 11.6925 13.3658 11.1966L20.5 7',
                  stroke: 'currentColor',
                  strokeWidth: '2',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                }),
                (0, o.jsx)('path', {
                  d: 'M2.57796 9.67711C2.67691 7.96835 2.72639 7.11397 3.14683 6.33343C3.49237 5.69192 4.12691 5.05675 4.76808 4.71058C5.54821 4.28937 6.42403 4.23779 8.17566 4.13462C9.486 4.05744 10.8481 4 12 4C13.1519 4 14.514 4.05744 15.8243 4.13462C17.576 4.23779 18.4518 4.28937 19.2319 4.71058C19.8731 5.05675 20.5076 5.69192 20.8532 6.33343C21.2736 7.11397 21.3231 7.96835 21.422 9.67711C21.469 10.4881 21.5 11.2916 21.5 12C21.5 12.7084 21.469 13.5119 21.422 14.3229C21.3231 16.0316 21.2736 16.886 20.8532 17.6666C20.5076 18.3081 19.8731 18.9432 19.2319 19.2894C18.4518 19.7106 17.576 19.7622 15.8243 19.8654C14.514 19.9426 13.1519 20 12 20C10.8481 20 9.486 19.9426 8.17566 19.8654C6.42403 19.7622 5.54821 19.7106 4.76808 19.2894C4.12691 18.9432 3.49237 18.3081 3.14683 17.6666C2.72639 16.886 2.67691 16.0316 2.57796 14.3229C2.53099 13.5119 2.5 12.7084 2.5 12C2.5 11.2916 2.53099 10.4881 2.57796 9.67711Z',
                  stroke: 'currentColor',
                  strokeWidth: '2',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                }),
              ],
            }),
          phone: () =>
            (0, o.jsxs)('svg', {
              width: '24',
              height: '24',
              viewBox: '0 0 24 24',
              fill: 'none',
              xmlns: 'http://www.w3.org/2000/svg',
              children: [
                (0, o.jsx)('path', {
                  d: 'M11.5 2.5C10.6458 2.5 9.62042 2.56599 8.66092 2.65002C6.80596 2.81247 5.37902 4.31321 5.25063 6.17083C5.12542 7.98237 5 10.237 5 12C5 13.763 5.12542 16.0176 5.25063 17.8292C5.37902 19.6868 6.80596 21.1875 8.66092 21.35C9.62042 21.434 10.6458 21.5 11.5 21.5C12.3542 21.5 13.3796 21.434 14.3391 21.35C16.194 21.1875 17.621 19.6868 17.7494 17.8292C17.8746 16.0176 18 13.763 18 12C18 10.237 17.8746 7.98237 17.7494 6.17083C17.621 4.31321 16.194 2.81247 14.3391 2.65002C13.3796 2.56599 12.3542 2.5 11.5 2.5Z',
                  stroke: 'currentColor',
                  strokeWidth: '2',
                }),
                (0, o.jsx)('path', {
                  d: 'M9.5 6H13.5',
                  stroke: 'currentColor',
                  strokeWidth: '2',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                }),
              ],
            }),
          testnets: () =>
            (0, o.jsxs)('svg', {
              width: '24',
              height: '24',
              viewBox: '0 0 24 24',
              fill: 'none',
              xmlns: 'http://www.w3.org/2000/svg',
              children: [
                (0, o.jsx)('path', {
                  d: 'M11.8697 14.0871C13.0944 14.0871 14.0871 13.0944 14.0871 11.8697C14.0871 10.6451 13.0944 9.65234 11.8697 9.65234C10.6451 9.65234 9.65234 10.6451 9.65234 11.8697C9.65234 13.0944 10.6451 14.0871 11.8697 14.0871Z',
                  stroke: 'currentColor',
                  strokeWidth: '2',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                }),
                (0, o.jsx)('path', {
                  d: 'M8.9127 7.43477C10.1373 7.43477 11.1301 6.44201 11.1301 5.21739C11.1301 3.99276 10.1373 3 8.9127 3C7.68807 3 6.69531 3.99276 6.69531 5.21739C6.69531 6.44201 7.68807 7.43477 8.9127 7.43477Z',
                  stroke: 'currentColor',
                  strokeWidth: '2',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                }),
                (0, o.jsx)('path', {
                  d: 'M18.5221 11.8703C19.7467 11.8703 20.7395 10.8776 20.7395 9.65293C20.7395 8.4283 19.7467 7.43555 18.5221 7.43555C17.2974 7.43555 16.3047 8.4283 16.3047 9.65293C16.3047 10.8776 17.2974 11.8703 18.5221 11.8703Z',
                  stroke: 'currentColor',
                  strokeWidth: '2',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                }),
                (0, o.jsx)('path', {
                  d: 'M18.5221 19.259C19.7467 19.259 20.7395 18.2662 20.7395 17.0416C20.7395 15.817 19.7467 14.8242 18.5221 14.8242C17.2974 14.8242 16.3047 15.817 16.3047 17.0416C16.3047 18.2662 17.2974 19.259 18.5221 19.259Z',
                  stroke: 'currentColor',
                  strokeWidth: '2',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                }),
                (0, o.jsx)('path', {
                  d: 'M5.21739 19.9992C6.44201 19.9992 7.43477 19.0065 7.43477 17.7818C7.43477 16.5572 6.44201 15.5645 5.21739 15.5645C3.99276 15.5645 3 16.5572 3 17.7818C3 19.0065 3.99276 19.9992 5.21739 19.9992Z',
                  stroke: 'currentColor',
                  strokeWidth: '2',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                }),
                (0, o.jsx)('path', {
                  d: 'M10.9737 9.84566L9.80957 7.24023',
                  stroke: 'currentColor',
                  strokeWidth: '2',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                }),
                (0, o.jsx)('path', {
                  d: 'M16.4157 10.3535L13.9766 11.1666',
                  stroke: 'currentColor',
                  strokeWidth: '2',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                }),
                (0, o.jsx)('path', {
                  d: 'M16.775 15.6842L13.6152 13.2266',
                  stroke: 'currentColor',
                  strokeWidth: '2',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                }),
                (0, o.jsx)('path', {
                  d: 'M10.2157 13.3379L6.87109 16.3129',
                  stroke: 'currentColor',
                  strokeWidth: '2',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                }),
              ],
            }),
          switching: () =>
            (0, o.jsxs)('svg', {
              width: '24',
              height: '24',
              viewBox: '0 0 24 24',
              fill: 'none',
              xmlns: 'http://www.w3.org/2000/svg',
              children: [
                (0, o.jsx)('path', {
                  d: 'M6 17L20 17M20 17L16 21M20 17L16 13',
                  stroke: 'currentColor',
                  strokeWidth: '2',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                }),
                (0, o.jsx)('path', {
                  d: 'M18 7.00195L4 7.00195M4 7.00195L8 3.00195M4 7.00195L8 11.002',
                  stroke: 'currentColor',
                  strokeWidth: '2',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                }),
              ],
            }),
          export: () =>
            (0, o.jsxs)('svg', {
              width: '24',
              height: '24',
              viewBox: '0 0 24 24',
              fill: 'none',
              xmlns: 'http://www.w3.org/2000/svg',
              children: [
                (0, o.jsx)('path', {
                  d: 'M14 8.5L17.5 8.5',
                  stroke: 'currentColor',
                  strokeWidth: '2',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                }),
                (0, o.jsx)('path', {
                  d: 'M14 12L17.5 12',
                  stroke: 'currentColor',
                  strokeWidth: '2',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                }),
                (0, o.jsx)('path', {
                  d: 'M14 15.5L17.5 15.5',
                  stroke: 'currentColor',
                  strokeWidth: '2',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                }),
                (0, o.jsx)('path', {
                  d: 'M6.5 8.5L10 8.5',
                  stroke: 'currentColor',
                  strokeWidth: '2',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                }),
                (0, o.jsx)('path', {
                  d: 'M6.5 12L10 12',
                  stroke: 'currentColor',
                  strokeWidth: '2',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                }),
                (0, o.jsx)('path', {
                  d: 'M6.5 15.5L10 15.5',
                  stroke: 'currentColor',
                  strokeWidth: '2',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                }),
                (0, o.jsx)('path', {
                  d: 'M2.08257 9.66866C2.18647 7.96831 2.23841 7.11814 2.66005 6.33995C3.00686 5.69986 3.64081 5.06781 4.28193 4.7229C5.06137 4.30359 5.94038 4.25251 7.69838 4.15036C9.16086 4.06538 10.7064 4 12 4C13.2936 4 14.8391 4.06538 16.3016 4.15036C18.0596 4.25251 18.9386 4.30359 19.7181 4.7229C20.3592 5.06781 20.9931 5.69986 21.34 6.33995C21.7616 7.11814 21.8135 7.96831 21.9174 9.66866C21.9672 10.4825 22 11.2891 22 12C22 12.7109 21.9672 13.5175 21.9174 14.3313C21.8135 16.0317 21.7616 16.8819 21.34 17.66C20.9931 18.3001 20.3592 18.9322 19.7181 19.2771C18.9386 19.6964 18.0596 19.7475 16.3016 19.8496C14.8391 19.9346 13.2936 20 12 20C10.7064 20 9.16086 19.9346 7.69838 19.8496C5.94038 19.7475 5.06137 19.6964 4.28193 19.2771C3.64081 18.9322 3.00686 18.3001 2.66005 17.66C2.23841 16.8819 2.18647 16.0317 2.08257 14.3313C2.03285 13.5175 2 12.7109 2 12C2 11.2891 2.03285 10.4825 2.08257 9.66866Z',
                  stroke: 'currentColor',
                  strokeWidth: '2',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                }),
              ],
            }),
          exportSmall: () =>
            (0, o.jsxs)('svg', {
              width: '20',
              height: '20',
              viewBox: '0 0 20 20',
              fill: 'none',
              xmlns: 'http://www.w3.org/2000/svg',
              children: [
                (0, o.jsx)('path', {
                  d: 'M6.11108 9.97201L14.1666 9.97201M14.1666 9.97201L11.25 12.8887M14.1666 9.97201L11.25 7.05534',
                  stroke: 'currentColor',
                  strokeWidth: '1.75',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                }),
                (0, o.jsx)('path', {
                  d: 'M2.28589 8.06626C2.36698 6.64007 2.40753 5.92697 2.75759 5.27585C3.04518 4.74092 3.57426 4.21065 4.10854 3.92187C4.75888 3.57036 5.48763 3.52729 6.94513 3.44114C7.99438 3.37912 9.07921 3.3335 9.99995 3.3335C10.9207 3.3335 12.0055 3.37912 13.0548 3.44114C14.5123 3.52729 15.241 3.57036 15.8913 3.92187C16.4256 4.21065 16.9547 4.74092 17.2423 5.27585C17.5924 5.92697 17.6329 6.64007 17.714 8.06626C17.7524 8.74143 17.7777 9.41036 17.7777 10.0002C17.7777 10.59 17.7524 11.2589 17.714 11.9341C17.6329 13.3603 17.5924 14.0734 17.2423 14.7245C16.9547 15.2594 16.4256 15.7897 15.8913 16.0785C15.241 16.43 14.5123 16.473 13.0548 16.5592C12.0055 16.6212 10.9207 16.6668 9.99995 16.6668C9.07921 16.6668 7.99438 16.6212 6.94513 16.5592C5.48763 16.473 4.75888 16.43 4.10854 16.0785C3.57426 15.7897 3.04518 15.2594 2.75759 14.7245C2.40753 14.0734 2.36698 13.3603 2.28589 11.9341C2.2475 11.2589 2.22217 10.59 2.22217 10.0002C2.22217 9.41036 2.2475 8.74143 2.28589 8.06626Z',
                  stroke: 'currentColor',
                  strokeWidth: '1.75',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                }),
              ],
            }),
          twoFactorAuthSmall: () =>
            (0, o.jsxs)('svg', {
              width: '25',
              height: '24',
              viewBox: '0 0 25 24',
              fill: 'none',
              xmlns: 'http://www.w3.org/2000/svg',
              children: [
                (0, o.jsx)('path', {
                  fillRule: 'evenodd',
                  clipRule: 'evenodd',
                  d: 'M13.1038 7.5C13.6561 7.5 14.1038 7.94772 14.1038 8.5V10.9147L16.3966 10.1665C16.9216 9.99519 17.4861 10.2819 17.6574 10.807C17.8288 11.332 17.542 11.8965 17.017 12.0679L14.7173 12.8183L16.1414 14.7818C16.4657 15.2288 16.3661 15.8541 15.9191 16.1784C15.472 16.5026 14.8467 16.4031 14.5225 15.956L13.1036 13.9999L11.6848 15.9561C11.3605 16.4032 10.7352 16.5027 10.2882 16.1784C9.84109 15.8542 9.74154 15.2289 10.0658 14.7818L11.4899 12.8183L9.19005 12.0679C8.66501 11.8965 8.37828 11.332 8.5496 10.807C8.72093 10.2819 9.28545 9.99519 9.81049 10.1665L12.1038 10.9149V8.5C12.1038 7.94772 12.5515 7.5 13.1038 7.5Z',
                  fill: 'currentColor',
                  transform: 'translate(-0.25, 0)',
                }),
                (0, o.jsx)('path', {
                  d: 'M13 21C17.9706 21 22 16.9706 22 12C22 7.02944 17.9706 3 13 3C8.02944 3 4 7.02944 4 12C4 16.9706 8.02944 21 13 21Z',
                  stroke: 'currentColor',
                  strokeWidth: '2',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  strokeDasharray: '2.5 4.55',
                  transform: 'rotate(7 12.5 12)',
                }),
                (0, o.jsx)('path', {
                  d: 'M13 21C17.9706 21 22 16.9706 22 12C22 7.02944 17.9706 3 13 3',
                  stroke: 'currentColor',
                  strokeWidth: '2',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  transform: 'rotate(7 12.5 12)',
                }),
              ],
            }),
          twoFactorAuth: () =>
            (0, o.jsxs)('svg', {
              xmlns: 'http://www.w3.org/2000/svg',
              width: '34',
              height: '33',
              fill: 'none',
              viewBox: '0 0 34 33',
              children: [
                (0, o.jsx)('path', {
                  fill: 'currentColor',
                  fillRule: 'evenodd',
                  d: 'M16.9 9.768c.691 0 1.25.56 1.25 1.25v3.942l3.743-1.221a1.25 1.25 0 1 1 .775 2.377l-3.751 1.224 2.323 3.202a1.25 1.25 0 0 1-2.024 1.468L16.9 18.818l-2.316 3.192a1.25 1.25 0 0 1-2.024-1.468l2.323-3.202-3.751-1.224a1.25 1.25 0 1 1 .775-2.377l3.743 1.221v-3.942c0-.69.56-1.25 1.25-1.25',
                  clipRule: 'evenodd',
                  transform: 'translate(-0.25, 0)',
                }),
                (0, o.jsx)('path', {
                  stroke: 'currentColor',
                  strokeDasharray: '3 5.65',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  strokeWidth: '2.5',
                  d: 'M17 31.5c8.284 0 15-6.716 15-15s-6.716-15-15-15-15 6.716-15 15 6.716 15 15 15',
                }),
                (0, o.jsx)('path', {
                  stroke: 'currentColor',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  strokeWidth: '2.5',
                  d: 'M17 31.5c8.284 0 15-6.716 15-15s-6.716-15-15-15',
                }),
              ],
            }),
          backupCodes: () =>
            (0, o.jsxs)('svg', {
              width: '25',
              height: '24',
              viewBox: '0 0 25 24',
              fill: 'none',
              xmlns: 'http://www.w3.org/2000/svg',
              children: [
                (0, o.jsx)('path', {
                  fillRule: 'evenodd',
                  clipRule: 'evenodd',
                  d: 'M4.5169 8.07796C4.56055 7.16104 5.35331 6.50842 6.25991 6.36451C8.23497 6.051 9.88782 5.20302 11.4239 3.95436C12.0478 3.44718 12.9522 3.44718 13.5761 3.95436C15.1121 5.203 16.765 6.05098 18.74 6.3645C19.6466 6.50842 20.4394 7.16111 20.4831 8.07807C20.4943 8.31374 20.5 8.55097 20.5 8.78962C20.5 14.1963 18.035 18.2614 13.8848 20.3868C13.0159 20.8317 11.9841 20.8317 11.1152 20.3868C6.96502 18.2614 4.5 14.1963 4.5 8.78962C4.5 8.55093 4.50568 8.31366 4.5169 8.07796Z',
                  stroke: 'currentColor',
                  strokeWidth: '2',
                }),
                (0, o.jsx)('path', {
                  d: 'M9.5 12.1667L11.3871 14L15.5 10',
                  stroke: 'currentColor',
                  strokeWidth: '2',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                }),
              ],
            }),
          backupCodeSmall: () =>
            (0, o.jsxs)('svg', {
              width: '24',
              height: '24',
              viewBox: '0 0 24 24',
              fill: 'none',
              xmlns: 'http://www.w3.org/2000/svg',
              children: [
                (0, o.jsx)('path', {
                  d: 'M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z',
                  stroke: 'currentColor',
                  strokeWidth: '2',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                }),
                (0, o.jsx)('path', {
                  d: 'M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z',
                  stroke: 'currentColor',
                  strokeWidth: '2',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                }),
                (0, o.jsx)('path', {
                  d: 'M18 6L15 9M6 6L9 9M6 18L9 15M18 18L15 15',
                  stroke: 'currentColor',
                  strokeWidth: '2',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                }),
              ],
            }),
          backupCode: () =>
            (0, o.jsx)('svg', {
              xmlns: 'http://www.w3.org/2000/svg',
              width: '24',
              height: '24',
              fill: 'none',
              viewBox: '0 0 31 31',
              children: (0, o.jsx)('path', {
                fill: 'currentColor',
                fillRule: 'evenodd',
                d: 'M5.394 7.161A12.7 12.7 0 0 0 2.5 15.25c0 3.07 1.085 5.888 2.894 8.088l4.07-4.07a7 7 0 0 1-1.257-4.018 7 7 0 0 1 1.258-4.018zM7.16 5.394l4.071 4.07a7 7 0 0 1 4.018-1.257 7 7 0 0 1 4.018 1.257l4.07-4.07A12.7 12.7 0 0 0 15.25 2.5c-3.07 0-5.888 1.085-8.089 2.894M25.106 7.16l-4.07 4.071a7 7 0 0 1 1.257 4.018 7 7 0 0 1-1.257 4.018l4.07 4.07A12.7 12.7 0 0 0 28 15.25c0-3.07-1.085-5.888-2.894-8.089M23.34 25.106l-4.071-4.07a7 7 0 0 1-4.018 1.257 7 7 0 0 1-4.018-1.258l-4.07 4.071A12.7 12.7 0 0 0 15.25 28c3.07 0 5.888-1.085 8.089-2.894M0 15.25C0 6.828 6.828 0 15.25 0S30.5 6.828 30.5 15.25 23.672 30.5 15.25 30.5 0 23.672 0 15.25m15.25-4.543a4.543 4.543 0 1 0 0 9.086 4.543 4.543 0 0 0 0-9.086',
                clipRule: 'evenodd',
              }),
            }),
          deviceDesktop: () =>
            (0, o.jsxs)('svg', {
              width: '24',
              height: '24',
              viewBox: '0 0 24 24',
              fill: 'none',
              xmlns: 'http://www.w3.org/2000/svg',
              transform: 'translate(0,1)',
              children: [
                (0, o.jsx)('path', {
                  d: 'M12 3.5C10.1227 3.5 7.6559 3.65937 5.86356 3.79815C4.47715 3.90551 3.36443 4.97284 3.22571 6.35647C3.10931 7.51756 3 8.90061 3 10C3 11.0994 3.10931 12.4824 3.22571 13.6435C3.36443 15.0272 4.47715 16.0945 5.86356 16.2018C7.6559 16.3406 10.1227 16.5 12 16.5C13.8773 16.5 16.3441 16.3406 18.1364 16.2018C19.5229 16.0945 20.6356 15.0272 20.7743 13.6435C20.8907 12.4824 21 11.0994 21 10C21 8.90061 20.8907 7.51756 20.7743 6.35647C20.6356 4.97284 19.5229 3.90551 18.1364 3.79815C16.3441 3.65937 13.8773 3.5 12 3.5Z',
                  stroke: 'currentColor',
                  strokeWidth: '2',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                }),
                (0, o.jsx)('path', {
                  d: 'M8.5 20H15.5',
                  stroke: 'currentColor',
                  strokeWidth: '2',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                }),
                (0, o.jsx)('path', {
                  d: 'M12 17V20',
                  stroke: 'currentColor',
                  strokeWidth: '2',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                }),
              ],
            }),
          deviceMobile: () =>
            (0, o.jsxs)('svg', {
              width: '24',
              height: '24',
              viewBox: '0 0 24 24',
              fill: 'none',
              xmlns: 'http://www.w3.org/2000/svg',
              children: [
                (0, o.jsx)('path', {
                  d: 'M11.5 2.5C10.6458 2.5 9.62042 2.56599 8.66092 2.65002C6.80596 2.81247 5.37902 4.31321 5.25063 6.17083C5.12542 7.98237 5 10.237 5 12C5 13.763 5.12542 16.0176 5.25063 17.8292C5.37902 19.6868 6.80596 21.1875 8.66092 21.35C9.62042 21.434 10.6458 21.5 11.5 21.5C12.3542 21.5 13.3796 21.434 14.3391 21.35C16.194 21.1875 17.621 19.6868 17.7494 17.8292C17.8746 16.0176 18 13.763 18 12C18 10.237 17.8746 7.98237 17.7494 6.17083C17.621 4.31321 16.194 2.81247 14.3391 2.65002C13.3796 2.56599 12.3542 2.5 11.5 2.5Z',
                  stroke: 'currentColor',
                  strokeWidth: '2',
                }),
                (0, o.jsx)('path', {
                  d: 'M9.5 6H13.5',
                  stroke: 'currentColor',
                  strokeWidth: '2',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                }),
              ],
            }),
          deviceTablet: () =>
            (0, o.jsxs)('svg', {
              width: '24',
              height: '24',
              viewBox: '0 0 24 24',
              fill: 'none',
              xmlns: 'http://www.w3.org/2000/svg',
              children: [
                (0, o.jsx)('path', {
                  d: 'M5 7.66843C5 6.14688 6.13842 4.86578 7.65426 4.73401C9.02835 4.61456 10.6882 4.5 12 4.5C13.3118 4.5 14.9716 4.61456 16.3457 4.73401C17.8616 4.86578 19 6.14688 19 7.66843V14H5V7.66843Z',
                  stroke: 'currentColor',
                  strokeWidth: '2',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                }),
                (0, o.jsx)('path', {
                  d: 'M19 14H5L4.26841 15.5607C3.39879 17.4159 4.6043 19.5692 6.64644 19.7353C8.39312 19.8774 10.3898 20.002 12 20C13.5942 19.998 15.574 19.8707 17.2991 19.728C19.3073 19.5618 20.5152 17.4682 19.7085 15.6217L19 14Z',
                  stroke: 'currentColor',
                  strokeWidth: '2',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                }),
              ],
            }),
          secretKeys: () =>
            (0, o.jsxs)('svg', {
              xmlns: 'http://www.w3.org/2000/svg',
              width: '21',
              height: '21',
              fill: 'none',
              children: [
                (0, o.jsx)('path', {
                  stroke: 'currentColor',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  strokeWidth: '2',
                  d: 'M13.167 13.167a6.083 6.083 0 1 0-5.875-4.5c.03.113 0 .235-.083.318l-5.912 5.913c-.19.19-.297.447-.297.716v3.317c0 .176.143.319.319.319h3.405a.332.332 0 0 0 .332-.332V16.75c0-.183.148-.332.331-.332h1.889a.332.332 0 0 0 .332-.332v-1.853c0-.184.148-.332.332-.332h2.296a.332.332 0 0 0 .23-.093l.799-.772a.329.329 0 0 1 .314-.079 6.09 6.09 0 0 0 1.588.21Z',
                }),
                (0, o.jsx)('path', {
                  stroke: 'currentColor',
                  strokeLinecap: 'round',
                  strokeWidth: '2',
                  d: 'M15.789 6.978a2.517 2.517 0 0 0-2.518-2.517',
                }),
              ],
            }),
          speedNormal: () =>
            (0, o.jsx)('svg', {
              width: '16',
              height: '16',
              viewBox: '0 0 16 16',
              fill: 'none',
              xmlns: 'http://www.w3.org/2000/svg',
              children: (0, o.jsx)('path', {
                fillRule: 'evenodd',
                clipRule: 'evenodd',
                d: 'M15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8ZM9 4.5C9 3.94772 8.55228 3.5 8 3.5C7.44772 3.5 7 3.94772 7 4.5V8C7 8.26522 7.10536 8.51957 7.29289 8.70711L9.29289 10.7071C9.68342 11.0976 10.3166 11.0976 10.7071 10.7071C11.0976 10.3166 11.0976 9.68342 10.7071 9.29289L9 7.58579V4.5Z',
                fill: 'currentColor',
              }),
            }),
          speedFast: () =>
            (0, o.jsx)('svg', {
              width: '16',
              height: '16',
              viewBox: '0 0 16 16',
              fill: 'none',
              xmlns: 'http://www.w3.org/2000/svg',
              children: (0, o.jsx)('path', {
                fillRule: 'evenodd',
                clipRule: 'evenodd',
                d: 'M9.11483 1.11279C9.47164 1.21373 9.71428 1.51069 9.71428 1.84643V5.69255L13.1429 5.69255C13.4625 5.69255 13.7555 5.85213 13.9031 6.10654C14.0507 6.36095 14.0283 6.66792 13.8451 6.9029L7.84506 14.5951C7.63051 14.8702 7.24198 14.9886 6.88517 14.8877C6.52836 14.7867 6.28572 14.4898 6.28572 14.154L6.28572 10.3079H2.85714C2.53754 10.3079 2.24448 10.1483 2.09688 9.89391C1.94928 9.6395 1.97166 9.33253 2.15495 9.09755L8.15494 1.40531C8.36949 1.13026 8.75802 1.01185 9.11483 1.11279Z',
                fill: 'currentColor',
              }),
            }),
          speedUrgent: () =>
            (0, o.jsx)('svg', {
              width: '16',
              height: '16',
              viewBox: '0 0 16 16',
              fill: 'none',
              xmlns: 'http://www.w3.org/2000/svg',
              children: (0, o.jsx)('path', {
                fillRule: 'evenodd',
                clipRule: 'evenodd',
                d: 'M9.50579 1.02932C9.74341 1.09373 9.94249 1.25921 10.0524 1.48369C10.4669 2.32992 10.7763 2.84352 11.0875 3.25995C11.4025 3.68146 11.7357 4.02653 12.2426 4.54399C13.414 5.7398 14 7.30885 14 8.87502C14 10.4412 13.414 12.0102 12.2426 13.206C9.8995 15.598 6.1005 15.598 3.75736 13.206C2.58596 12.0102 2 10.4412 2 8.87502C2 7.30885 2.58595 5.7398 3.75736 4.54399C4.0025 4.29374 4.37117 4.21888 4.69147 4.35431C5.01176 4.48975 5.22059 4.8088 5.22059 5.16271C5.22059 6.14254 5.28053 6.88914 5.56127 7.48465C5.71564 7.8121 5.95644 8.13225 6.37147 8.41793C6.47059 7.48976 6.65216 6.35891 6.8975 5.28555C7.09066 4.44045 7.33091 3.59676 7.61685 2.8932C7.75988 2.5413 7.92162 2.20622 8.1053 1.91692C8.2841 1.63532 8.51382 1.34876 8.81033 1.14696C9.0149 1.00774 9.26817 0.964899 9.50579 1.02932ZM9.81827 12.4811C8.81407 13.5063 7.18593 13.5063 6.18173 12.4811C5.67962 11.9686 5.42857 11.2968 5.42857 10.625C5.42857 10.625 6.18173 11.0625 7.57147 11.0625C7.57147 10.1875 8.00004 7.56249 8.6429 7.12499C9.07147 7.99999 9.31617 8.25628 9.81827 8.76884C10.3204 9.2814 10.5714 9.9532 10.5714 10.625C10.5714 11.2968 10.3204 11.9686 9.81827 12.4811Z',
                fill: 'currentColor',
              }),
            }),
        },
        d = (r) => {
          let { name: e } = r,
            t = i[e];
          return (0, o.jsx)(t, {});
        };
    },
    95248: function (r, e, t) {
      'use strict';
      t.d(e, {
        BS: function () {
          return C;
        },
        FC: function () {
          return i;
        },
        R$: function () {
          return s;
        },
        Yf: function () {
          return n;
        },
        aU: function () {
          return h;
        },
        bM: function () {
          return d;
        },
        kr: function () {
          return l;
        },
        pp: function () {
          return a;
        },
        z2: function () {
          return u;
        },
      });
      var o = t(75040);
      let n = () =>
          (0, o.jsxs)('svg', {
            width: '16',
            height: '16',
            viewBox: '0 0 16 16',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
            children: [
              (0, o.jsx)('path', {
                d: 'M3.79432 7.60637L4.44378 7.98148L3.79432 7.60637ZM12.0998 7.60637L11.4503 7.98148L12.0998 7.60637ZM11.9232 14.8324L11.9104 14.0825L11.9232 14.8324ZM14.0737 11.1099L13.4177 11.4735L14.0737 11.1099ZM11.9104 14.0825C10.5731 14.1054 9.13263 14.1237 7.94522 14.1237V15.6237C9.14537 15.6237 10.5958 15.6052 11.936 15.5823L11.9104 14.0825ZM7.94522 14.1237C6.75871 14.1237 5.31947 14.1054 3.98308 14.0826L3.95743 15.5823C5.2968 15.6052 6.74598 15.6237 7.94522 15.6237V14.1237ZM2.47597 11.4722C3.13113 10.2914 3.84366 9.02049 4.44378 7.98148L3.14487 7.23125C2.53834 8.28138 1.82095 9.56102 1.16434 10.7444L2.47597 11.4722ZM4.44378 7.98148C5.03104 6.96472 5.75823 5.74137 6.43959 4.60651L5.15357 3.8344C4.47069 4.97181 3.73843 6.20359 3.14487 7.23125L4.44378 7.98148ZM9.45287 4.60566C10.135 5.7407 10.8629 6.96436 11.4503 7.98148L12.7493 7.23126C12.1553 6.20296 11.4223 4.97066 10.7386 3.83301L9.45287 4.60566ZM11.4503 7.98148C12.0506 9.02067 12.7629 10.2922 13.4177 11.4735L14.7296 10.7463C14.0734 9.56232 13.356 8.28183 12.7493 7.23126L11.4503 7.98148ZM3.98308 14.0826C2.65108 14.0598 1.82968 12.637 2.47597 11.4722L1.16434 10.7444C-0.0312341 12.8992 1.49365 15.5402 3.95743 15.5823L3.98308 14.0826ZM11.936 15.5823C14.3988 15.5401 15.9239 12.9009 14.7296 10.7463L13.4177 11.4735C14.0631 12.638 13.2419 14.0597 11.9104 14.0825L11.936 15.5823ZM6.43959 4.60651C7.12505 3.46481 8.76707 3.46447 9.45287 4.60566L10.7386 3.83301C9.46968 1.72156 6.42145 1.72264 5.15357 3.8344L6.43959 4.60651Z',
                fill: 'var(--danger)',
              }),
              (0, o.jsx)('path', {
                d: 'M8.64312 9.23955L8.85002 6.40621C8.88842 5.88038 8.47216 5.43262 7.94493 5.43262C7.4177 5.43262 7.00145 5.88038 7.03985 6.40621L7.24675 9.23955C7.27346 9.60541 7.57809 9.88861 7.94493 9.88861C8.31177 9.88861 8.6164 9.60541 8.64312 9.23955Z',
                fill: 'var(--danger)',
              }),
              (0, o.jsx)('circle', {
                cx: '7.94444',
                cy: '11.5475',
                r: '0.976181',
                fill: 'var(--danger)',
              }),
            ],
          }),
        s = () =>
          (0, o.jsxs)('svg', {
            width: '17',
            height: '17',
            viewBox: '0 0 17 17',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
            children: [
              (0, o.jsx)('circle', {
                cx: '8.47071',
                cy: '8.47266',
                r: '8',
                fill: 'var(--primary)',
              }),
              (0, o.jsx)('path', {
                d: 'M5.13672 8.88006L7.23345 10.9171L11.8034 6.47266',
                stroke: 'white',
                strokeWidth: '2',
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
              }),
            ],
          }),
        i = () =>
          (0, o.jsxs)('svg', {
            xmlns: 'http://www.w3.org/2000/svg',
            width: '16',
            height: '16',
            viewBox: '0 0 16 16',
            fill: 'none',
            children: [
              (0, o.jsxs)('g', {
                children: [
                  (0, o.jsx)('g', {
                    children: (0, o.jsx)('path', {
                      d: 'M5.99183 2.62135C6.97009 0.995582 9.31441 0.994864 10.2934 2.6202C11.1225 3.9967 12.0449 5.54327 12.7755 6.80827C13.5206 8.09824 14.4178 9.70402 15.209 11.1348C16.1272 12.7953 14.9545 14.8252 13.0574 14.8595C11.4367 14.8888 9.61687 14.9139 8.14167 14.9139C6.66738 14.9139 4.84889 14.8888 3.22897 14.8595C1.33111 14.8252 0.158429 12.794 1.07774 11.1333C1.86953 9.70296 2.76701 8.09796 3.51192 6.80827C4.24224 5.54383 5.16366 3.99768 5.99183 2.62135Z',
                      fill: 'var(--warning)',
                    }),
                  }),
                  (0, o.jsx)('path', {
                    d: 'M8.92001 8.63014L9.15078 5.46994C9.19361 4.88345 8.72934 4.38403 8.14129 4.38403C7.55323 4.38403 7.08896 4.88345 7.13179 5.46994L7.36256 8.63014C7.39236 9.03821 7.73212 9.35407 8.14129 9.35407C8.55045 9.35407 8.89021 9.03821 8.92001 8.63014Z',
                    fill: 'white',
                  }),
                  (0, o.jsx)('circle', {
                    cx: '8.14055',
                    cy: '12.3198',
                    r: '1.0888',
                    fill: 'white',
                  }),
                ],
              }),
              (0, o.jsx)('defs', {
                children: (0, o.jsxs)('filter', {
                  id: 'filter0_d_2909_2418',
                  x: '-1.37104',
                  y: '-1.07056',
                  width: '19.0282',
                  height: '17.7711',
                  filterUnits: 'userSpaceOnUse',
                  children: [
                    (0, o.jsx)('feFlood', { floodOpacity: '0', result: 'BackgroundImageFix' }),
                    (0, o.jsx)('feColorMatrix', {
                      in: 'SourceAlpha',
                      type: 'matrix',
                      values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0',
                      result: 'hardAlpha',
                    }),
                    (0, o.jsx)('feOffset', { dy: '-0.342711' }),
                    (0, o.jsx)('feGaussianBlur', { stdDeviation: '1.06473' }),
                    (0, o.jsx)('feComposite', { in2: 'hardAlpha', operator: 'out' }),
                    (0, o.jsx)('feColorMatrix', {
                      type: 'matrix',
                      values: '0 0 0 0 1 0 0 0 0 0.368627 0 0 0 0 0.368627 0 0 0 0.02 0',
                    }),
                    (0, o.jsx)('feBlend', {
                      mode: 'normal',
                      in2: 'BackgroundImageFix',
                      result: 'effect1_dropShadow_2909_2418',
                    }),
                    (0, o.jsx)('feBlend', {
                      mode: 'normal',
                      in: 'SourceGraphic',
                      in2: 'effect1_dropShadow_2909_2418',
                      result: 'shape',
                    }),
                  ],
                }),
              }),
            ],
          }),
        d = () =>
          (0, o.jsx)('svg', {
            width: '18',
            height: '18',
            viewBox: '0 0 18 18',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
            children: (0, o.jsx)('path', {
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              d: 'M13.6187 5.61872C13.9604 5.27701 13.9604 4.72299 13.6187 4.38128C13.277 4.03957 12.723 4.03957 12.3813 4.38128L9 7.76256L5.61872 4.38128C5.27701 4.03957 4.72299 4.03957 4.38128 4.38128C4.03957 4.72299 4.03957 5.27701 4.38128 5.61872L7.76256 9L4.38128 12.3813C4.03957 12.723 4.03957 13.277 4.38128 13.6187C4.72299 13.9604 5.27701 13.9604 5.61872 13.6187L9 10.2374L12.3813 13.6187C12.723 13.9604 13.277 13.9604 13.6187 13.6187C13.9604 13.277 13.9604 12.723 13.6187 12.3813L10.2374 9L13.6187 5.61872Z',
              fill: 'currentColor',
            }),
          }),
        h = () =>
          (0, o.jsxs)('svg', {
            width: '16',
            height: '16',
            viewBox: '0 0 16 16',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
            children: [
              (0, o.jsx)('circle', {
                cx: '8',
                cy: '8',
                r: '7',
                stroke: 'currentColor',
                strokeWidth: '1.5',
              }),
              (0, o.jsx)('path', {
                d: 'M8 8V10.625',
                stroke: 'currentColor',
                strokeWidth: '1.5',
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
              }),
              (0, o.jsx)('circle', { cx: '8', cy: '5.375', r: '0.875', fill: 'currentColor' }),
            ],
          }),
        C = () =>
          (0, o.jsxs)('svg', {
            width: '15',
            height: '14',
            viewBox: '0 0 15 14',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
            children: [
              (0, o.jsx)('path', {
                d: 'M7.5 12.7671C10.8137 12.7671 13.5 10.0808 13.5 6.76709C13.5 3.45338 10.8137 0.76709 7.5 0.76709C4.18629 0.76709 1.5 3.45338 1.5 6.76709C1.5 10.0808 4.18629 12.7671 7.5 12.7671Z',
                stroke: 'currentColor',
                strokeWidth: '1.25',
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
              }),
              (0, o.jsx)('path', {
                d: 'M5.75383 4.96611C5.89489 4.56511 6.17332 4.22698 6.5398 4.01159C6.90628 3.79621 7.33717 3.71748 7.75614 3.78934C8.1751 3.8612 8.55512 4.07903 8.82888 4.40423C9.10263 4.72943 9.25246 5.14103 9.25183 5.56611C9.25183 6.76611 7.45183 7.36611 7.45183 7.36611',
                stroke: 'currentColor',
                strokeWidth: '1.25',
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
              }),
              (0, o.jsx)('rect', {
                x: '6.62503',
                y: '8.896',
                width: '1.75',
                height: '1.75007',
                rx: '0.875',
                fill: 'currentColor',
              }),
            ],
          }),
        l = () =>
          (0, o.jsx)('svg', {
            xmlns: 'http://www.w3.org/2000/svg',
            width: '3',
            height: '3',
            viewBox: '0 0 3 3',
            fill: 'none',
            children: (0, o.jsx)('circle', {
              cx: '1.5',
              cy: '1.5',
              r: '1.5',
              fill: 'currentColor',
            }),
          }),
        a = () =>
          (0, o.jsx)('svg', {
            width: '18',
            height: '18',
            viewBox: '0 0 18 18',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
            children: (0, o.jsx)('path', {
              d: 'M3.5 9L7 12.5L14.5 5',
              stroke: 'currentColor',
              strokeWidth: '2',
              strokeLinecap: 'round',
              strokeLinejoin: 'round',
            }),
          }),
        u = () =>
          (0, o.jsx)('svg', {
            width: '18',
            height: '18',
            viewBox: '0 0 18 18',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
            children: (0, o.jsx)('path', {
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              d: 'M12.7929 14.2071C13.1834 14.5976 13.8166 14.5976 14.2071 14.2071C14.5976 13.8166 14.5976 13.1834 14.2071 12.7929L10.4142 9L14.2071 5.20711C14.5976 4.81658 14.5976 4.18342 14.2071 3.79289C13.8166 3.40237 13.1834 3.40237 12.7929 3.79289L9 7.58579L5.20711 3.79289C4.81658 3.40237 4.18342 3.40237 3.79289 3.79289C3.40237 4.18342 3.40237 4.81658 3.79289 5.20711L7.58579 9L3.79289 12.7929C3.40237 13.1834 3.40237 13.8166 3.79289 14.2071C4.18342 14.5976 4.81658 14.5976 5.20711 14.2071L9 10.4142L12.7929 14.2071Z',
              fill: 'currentColor',
            }),
          });
    },
    50413: function (r, e, t) {
      'use strict';
      t.d(e, {
        M6: function () {
          return h;
        },
        Uu: function () {
          return i;
        },
        X6: function () {
          return n;
        },
        nr: function () {
          return s;
        },
        z0: function () {
          return d;
        },
      });
      var o = t(75040);
      let n = () =>
          (0, o.jsxs)('svg', {
            width: '24',
            height: '24',
            viewBox: '0 0 24 24',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
            children: [
              (0, o.jsx)('rect', {
                x: '4.5',
                y: '3.5',
                width: '15',
                height: '17',
                rx: '3',
                stroke: 'currentColor',
                strokeWidth: '1.75',
              }),
              (0, o.jsx)('path', {
                d: 'M11.9239 13.3267C13.3948 13.3267 14.5872 12.1343 14.5872 10.6634C14.5872 9.19242 13.3948 8 11.9239 8C10.4529 8 9.2605 9.19242 9.2605 10.6634C9.2605 12.1343 10.4529 13.3267 11.9239 13.3267Z',
                stroke: 'currentColor',
                strokeWidth: '1.75',
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
              }),
              (0, o.jsx)('path', {
                d: 'M7.65039 15.95C8.05117 15.1606 8.6627 14.4976 9.41722 14.0344C10.1717 13.5713 11.0398 13.3262 11.9251 13.3262C12.8104 13.3262 13.6784 13.5713 14.4329 14.0344C15.1874 14.4976 15.799 15.1606 16.1998 15.95',
                stroke: 'currentColor',
                strokeWidth: '1.75',
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
              }),
            ],
          }),
        s = () =>
          (0, o.jsx)('svg', {
            width: '24',
            height: '24',
            viewBox: '0 0 24 24',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
            children: (0, o.jsx)('path', {
              d: 'M21.743 12.2498C21.743 10.7443 21.6821 8.82229 21.6184 7.22615C21.5716 6.05176 20.6271 5.11703 19.4453 5.08012C17.2174 5.01053 14.2059 4.93247 11.9168 4.93247C9.62771 4.93247 6.61621 5.01053 4.3884 5.08012C3.20663 5.11703 2.26215 6.05176 2.21528 7.22616C2.15156 8.82229 2.09067 10.7443 2.09067 12.2498C2.09067 13.7554 2.15156 15.6774 2.21528 17.2735C2.26215 18.4479 3.20662 19.3826 4.38839 19.4195C6.61621 19.4891 9.62771 19.5672 11.9168 19.5672C14.2059 19.5672 17.2174 19.4891 19.4453 19.4195C20.6271 19.3826 21.5716 18.4479 21.6184 17.2735C21.6821 15.6774 21.743 13.7554 21.743 12.2498ZM23.7074 7.14278C23.7714 8.7447 23.8337 10.7009 23.8337 12.2498C23.8337 13.7988 23.7714 15.755 23.7074 17.3568C23.6165 19.6344 21.7818 21.4382 19.5106 21.5092C17.2802 21.5788 14.2408 21.6578 11.9168 21.6578C9.59284 21.6578 6.55353 21.5788 4.32312 21.5092C2.0519 21.4382 0.21717 19.6344 0.126264 17.3568C0.062325 15.755 0 13.7988 0 12.2498C0 10.7009 0.0623254 8.7447 0.126265 7.14278C0.217171 4.86526 2.0519 3.06141 4.32312 2.99047C6.55353 2.9208 9.59284 2.8418 11.9168 2.8418C14.2408 2.8418 17.2802 2.9208 19.5106 2.99047C21.7818 3.06141 23.6165 4.86526 23.7074 7.14278ZM4.18134 16.4312C4.18134 15.8538 4.64936 15.3858 5.22668 15.3858H16.9344C17.5118 15.3858 17.9798 15.8538 17.9798 16.4312C17.9798 17.0085 17.5118 17.4765 16.9344 17.4765H5.22668C4.64936 17.4765 4.18134 17.0085 4.18134 16.4312ZM6.48108 11.4136C7.63573 11.4136 8.57176 10.4775 8.57176 9.32288C8.57176 8.16824 7.63573 7.23221 6.48108 7.23221C5.32644 7.23221 4.39041 8.16824 4.39041 9.32288C4.39041 10.4775 5.32644 11.4136 6.48108 11.4136Z',
              fill: 'currentColor',
            }),
          }),
        i = () =>
          (0, o.jsxs)('svg', {
            width: '24',
            height: '24',
            viewBox: '0 0 24 24',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
            children: [
              (0, o.jsx)('path', {
                d: 'M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z',
                stroke: 'currentColor',
                strokeWidth: '2',
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
              }),
              (0, o.jsx)('path', {
                d: 'M12.0003 14.6667C13.8413 14.6667 15.3337 13.1743 15.3337 11.3333C15.3337 9.49238 13.8413 8 12.0003 8C10.1594 8 8.66699 9.49238 8.66699 11.3333C8.66699 13.1743 10.1594 14.6667 12.0003 14.6667Z',
                stroke: 'currentColor',
                strokeWidth: '2',
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
              }),
              (0, o.jsx)('path', {
                d: 'M6.65039 17.9499C7.15198 16.9619 7.91736 16.1321 8.86168 15.5525C9.80599 14.9728 10.8924 14.666 12.0004 14.666C13.1084 14.666 14.1948 14.9728 15.1391 15.5525C16.0834 16.1321 16.8488 16.9619 17.3504 17.9499',
                stroke: 'currentColor',
                strokeWidth: '2',
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
              }),
            ],
          }),
        d = () =>
          (0, o.jsxs)('svg', {
            width: '24',
            height: '24',
            viewBox: '0 0 24 24',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
            children: [
              (0, o.jsx)('path', {
                fillRule: 'evenodd',
                clipRule: 'evenodd',
                d: 'M4.01563 7.98522C4.05868 7.07173 4.85031 6.42344 5.75453 6.28674C7.77355 5.98153 9.4592 5.14284 11.0259 3.90555C11.6413 3.41952 12.5187 3.41952 13.1341 3.90556C14.7008 5.14282 16.3864 5.9815 18.4054 6.28673C19.3096 6.42344 20.1013 7.0718 20.1444 7.98534C20.1547 8.20546 20.16 8.42698 20.16 8.64977C20.16 14.2879 17.317 18.4309 12.5921 20.3668C12.2641 20.5012 11.8959 20.5012 11.5679 20.3668C6.84303 18.4309 4 14.2879 4 8.64977C4 8.42694 4.00525 8.20538 4.01563 7.98522Z',
                stroke: 'currentColor',
                strokeWidth: '2',
              }),
              (0, o.jsx)('path', {
                d: 'M8.91797 12.3098L10.9068 14.242L15.2414 10.0264',
                stroke: 'currentColor',
                strokeWidth: '2',
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
              }),
            ],
          }),
        h = () =>
          (0, o.jsxs)('svg', {
            width: '24',
            height: '24',
            viewBox: '0 0 24 24',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
            children: [
              (0, o.jsx)('rect', {
                y: '0.0078125',
                width: '24',
                height: '23.9922',
                rx: '6',
                fill: 'white',
              }),
              (0, o.jsx)('path', {
                d: 'M12.001 20.127C16.4198 20.127 20.002 16.5448 20.002 12.126C20.002 7.70716 16.4198 4.125 12.001 4.125C7.58216 4.125 4 7.70716 4 12.126C4 16.5448 7.58216 20.127 12.001 20.127Z',
                stroke: 'currentColor',
                strokeWidth: '2',
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
              }),
              (0, o.jsx)('path', {
                d: 'M12.0008 15.3258C13.7681 15.3258 15.2008 13.8931 15.2008 12.1258C15.2008 10.3585 13.7681 8.92578 12.0008 8.92578C10.2335 8.92578 8.80078 10.3585 8.80078 12.1258C8.80078 13.8931 10.2335 15.3258 12.0008 15.3258Z',
                stroke: 'currentColor',
                strokeWidth: '2',
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
              }),
              (0, o.jsx)('path', {
                d: 'M6.34375 6.46973L9.73575 9.86173',
                stroke: 'currentColor',
                strokeWidth: '2',
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
              }),
              (0, o.jsx)('path', {
                d: 'M14.2656 14.3901L17.6576 17.7821',
                stroke: 'currentColor',
                strokeWidth: '2',
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
              }),
              (0, o.jsx)('path', {
                d: 'M14.2656 9.86173L17.6576 6.46973',
                stroke: 'currentColor',
                strokeWidth: '2',
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
              }),
              (0, o.jsx)('path', {
                d: 'M14.2656 9.86257L17.0896 7.03857',
                stroke: 'currentColor',
                strokeWidth: '2',
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
              }),
              (0, o.jsx)('path', {
                d: 'M6.34375 17.7821L9.73575 14.3901',
                stroke: 'currentColor',
                strokeWidth: '2',
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
              }),
            ],
          });
    },
    40028: function (r, e, t) {
      'use strict';
      t.d(e, {
        $: function () {
          return d;
        },
      });
      var o = t(75040),
        n = t(81289),
        s = t(47863),
        i = t.n(s);
      let d = (r) => {
        let { size: e = 16, weight: t, color: s = 'currentColor', state: d = 'pending' } = r,
          h = null != t ? t : 32 / e;
        return (0, o.jsx)('div', {
          className: i().spinner,
          style: { color: s, width: e, height: e },
          children: (0, o.jsxs)('svg', {
            style: { width: e, height: e },
            viewBox: '0 0 16 16',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
            children: [
              (0, o.jsx)('circle', {
                cx: '8',
                cy: '8',
                r: '7',
                stroke: 'currentColor',
                strokeOpacity: '0.25',
                strokeWidth: h,
              }),
              (0, o.jsxs)('g', {
                children: [
                  (0, o.jsx)(n.E.path, {
                    d: 'M5.96069 10.0786L10.0783 5.96094',
                    stroke: 'currentColor',
                    strokeWidth: h,
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                    strokeDasharray: 15,
                    initial: { strokeDashoffset: 15 },
                    animate: 'failure' === d ? { strokeDashoffset: 0 } : { strokeDashoffset: 15 },
                    transition: {
                      duration: 0.25,
                      ease: 'easeInOut',
                      delay: 'failure' === d ? 0.5 : 0,
                    },
                  }),
                  (0, o.jsx)(n.E.path, {
                    d: 'M3.13744 3.13672L10.0786 10.0779',
                    stroke: 'currentColor',
                    strokeWidth: h,
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                    strokeDasharray: 15,
                    initial:
                      'failure' === d
                        ? { strokeDashoffset: 28, strokeDasharray: 10 }
                        : { strokeDashoffset: 30, strokeDasharray: 10 },
                    animate:
                      'failure' === d
                        ? { strokeDashoffset: 16, strokeDasharray: 10 }
                        : { strokeDashoffset: 30, strokeDasharray: 10 },
                    transition: {
                      duration: 0.25,
                      ease: 'easeInOut',
                      delay: 'failure' === d ? 0.25 : 0,
                    },
                  }),
                ],
              }),
              (0, o.jsx)(n.E.path, {
                d: 'M1.72559 4.97461L6.90836 10.1576L10.9407 6.236',
                stroke: 'currentColor',
                strokeWidth: h,
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeDasharray: 15,
                initial: 'success' === d ? { strokeDashoffset: 25 } : { strokeDashoffset: 45 },
                animate: 'success' === d ? { strokeDashoffset: 25 } : { strokeDashoffset: 45 },
                transition: {
                  duration: 0.25,
                  ease: 'easeInOut',
                  delay: 'success' === d ? 0.25 : 0,
                },
              }),
              (0, o.jsx)(n.E.g, {
                animate:
                  'pending' !== d
                    ? { rotate: 0, transition: { duration: 0.25, ease: 'easeInOut' } }
                    : {
                        rotate: [0, 0],
                        transition: { duration: 1, repeat: 1 / 0, ease: 'linear' },
                      },
                children: (0, o.jsx)(n.E.g, {
                  animate: {
                    rotate: [0, 360],
                    transition: {
                      duration: 'pending' !== d ? 0.25 : 1,
                      repeat: 1 / 0,
                      ease: 'linear',
                    },
                  },
                  children: (0, o.jsx)(n.E.g, {
                    animate: {
                      rotate: 'pending' !== d ? 0 : [0, 360],
                      transition: {
                        duration: 'pending' !== d ? 0.25 : 1,
                        repeat: 1 / 0,
                        ease: 'easeInOut',
                      },
                    },
                    children: (0, o.jsx)(n.E.circle, {
                      cx: '8',
                      cy: '8',
                      r: '7',
                      strokeDasharray: 45,
                      strokeLinecap: 'round',
                      stroke: 'currentColor',
                      strokeWidth: h,
                      initial: { strokeDashoffset: 30 },
                      animate:
                        'pending' !== d
                          ? {
                              rotate: 180,
                              strokeDashoffset: 0,
                              transition: { duration: 0.25, ease: 'easeInOut' },
                            }
                          : {
                              rotate: 180,
                              strokeDashoffset: 30,
                              transition: { duration: 1, ease: 'easeInOut', delay: 0.25 },
                            },
                    }),
                  }),
                }),
              }),
            ],
          }),
        });
      };
    },
    76986: function (r, e, t) {
      'use strict';
      t.d(e, {
        Q: function () {
          return o;
        },
      });
      let o = (r) => ''.concat(r / 16, 'rem');
    },
    9486: function (r, e, t) {
      'use strict';
      t.r(e),
        t.d(e, {
          MotionProvider: function () {
            return a;
          },
          baseMotionVariants: function () {
            return l;
          },
          easeInOutQuad: function () {
            return h;
          },
          easeSnappyOut: function () {
            return d;
          },
          easeSwiftOut: function () {
            return C;
          },
          transitionSpringSnappy: function () {
            return i;
          },
          transitionSpringSwift: function () {
            return s;
          },
        });
      var o = t(75040),
        n = t(22346);
      let s = { type: 'spring', stiffness: 380, damping: 36 },
        i = { type: 'spring', mass: 0.02, stiffness: 10, damping: 0.5, velocity: 1 },
        d = [0.19, 1, 0.22, 1],
        h = [0.455, 0.03, 0.515, 0.955],
        C = [0.175, 0.885, 0.32, 1.1],
        l = {
          initial: 'initial',
          animate: 'animate',
          exit: 'exit',
          variants: { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 } },
        },
        a = (r) => {
          let { children: e, nonce: t } = r;
          return (0, o.jsx)(n.A, { transition: i, nonce: t, children: e });
        };
    },
    47863: function (r) {
      r.exports = { spinner: 'styles_spinner__YNoGV', spin: 'styles_spin__X6KW1' };
    },
  },
]);
