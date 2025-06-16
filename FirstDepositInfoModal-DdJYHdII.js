import { cJ as p, r as f, j as e } from './vendor-BCNtwJ5j.js';
import { f as m, L as c, br as y, aE as x, B as g } from './index-BInJAZZg.js';
(function () {
  try {
    var t =
        typeof window < 'u'
          ? window
          : typeof global < 'u'
            ? global
            : typeof globalThis < 'u'
              ? globalThis
              : typeof self < 'u'
                ? self
                : {},
      s = new t.Error().stack;
    s &&
      ((t._sentryDebugIds = t._sentryDebugIds || {}),
      (t._sentryDebugIds[s] = '1747862e-a47e-43dc-ac2c-42fae0371e37'),
      (t._sentryDebugIdIdentifier = 'sentry-dbid-1747862e-a47e-43dc-ac2c-42fae0371e37'));
  } catch (a) {}
})();
const M = p.toString(),
  v = ({ dontRemindAgainLocalStorageKey: t }) => {
    const [s, a] = f.useState(window.localStorage.getItem(t) === 'true'),
      [d, r] = f.useState(!1);
    return {
      isConfirm: s,
      isModalVisible: d,
      onConfirm: (n) => {
        window.localStorage.setItem(t, n.toString()), r(!1);
      },
      onConfirmChange: () => {
        a((n) => !n);
      },
      onModalVisibleChange: (n) => {
        r(n);
      },
    };
  },
  C = '_root_1ohn2_1',
  k = { root: C },
  o = ({ children: t }) =>
    e.jsx(m, {
      fs: 14,
      lh: 24,
      weight: 'regular',
      color: 'grey',
      className: k.root,
      'data-sentry-element': 'Text',
      'data-sentry-component': 'TextItem',
      'data-sentry-source-file': 'TextItem.tsx',
      children: t,
    }),
  I = () =>
    e.jsxs(e.Fragment, {
      children: [
        e.jsx(o, {
          'data-sentry-element': 'TextItem',
          'data-sentry-source-file': 'Content.tsx',
          children:
            'You acknowledge that the indicated APY is not a guaranteed yield. You should NOT expect to earn this number as return.',
        }),
        e.jsx(o, {
          'data-sentry-element': 'TextItem',
          'data-sentry-source-file': 'Content.tsx',
          children:
            'You are aware that the APY shown in the UI is based on past trading fees (and, if applicable, incentives). This APY number in no way guarantees future fees nor a future return.',
        }),
        e.jsx(o, {
          'data-sentry-element': 'TextItem',
          'data-sentry-source-file': 'Content.tsx',
          children:
            'You acknowledge that past performance is not indicative of future performance; the value of deposits can be extremely volatile.',
        }),
        e.jsxs(o, {
          'data-sentry-element': 'TextItem',
          'data-sentry-source-file': 'Content.tsx',
          children: [
            'You are aware of',
            ' ',
            e.jsx(c, {
              href: 'https://docs.kamino.finance/v/risk/protocol-mechanisms/automated-deleverage',
              target: '_blank',
              rel: 'noreferrer',
              'data-sentry-element': 'Link',
              'data-sentry-source-file': 'Content.tsx',
              children: 'risks',
            }),
            ' ',
            'associated with automated market making vaults, including exposure to',
            ' ',
            e.jsx(c, {
              href: 'https://docs.kamino.finance/v/automated-liquidity/security-and-risks/risks-and-technical/impermanent-loss',
              target: '_blank',
              rel: 'noreferrer',
              'data-sentry-element': 'Link',
              'data-sentry-source-file': 'Content.tsx',
              children: 'impermanent loss',
            }),
            '.',
          ],
        }),
        e.jsxs(o, {
          'data-sentry-element': 'TextItem',
          'data-sentry-source-file': 'Content.tsx',
          children: [
            'You have read the',
            ' ',
            e.jsx(c, {
              href: 'https://docs.kamino.finance/',
              target: '_blank',
              rel: 'noreferrer',
              'data-sentry-element': 'Link',
              'data-sentry-source-file': 'Content.tsx',
              children: 'protocol documentation',
            }),
            ', and have completed the Knowledge Quiz.',
          ],
        }),
      ],
    }),
  b = '_content_tfqzq_1',
  D = '_description_tfqzq_23',
  _ = '_confirmAllCheckbox_tfqzq_26',
  j = '_completeDepositButton_tfqzq_29',
  l = { content: b, description: D, confirmAllCheckbox: _, completeDepositButton: j },
  F = ({ isConfirm: t, onConfirmChange: s, isVisible: a, onHide: d, onConfirmDeposit: r }) => {
    const [i, h] = f.useState(!1),
      u = () => {
        h(!i);
      },
      n = () => {
        r(i);
      };
    return e.jsxs(y, {
      isOpen: a,
      onClose: d,
      'data-sentry-element': 'Modal',
      'data-sentry-component': 'FirstDepositInfoModal',
      'data-sentry-source-file': 'FirstDepositInfoModal.tsx',
      children: [
        e.jsx(m, {
          fs: 20,
          lh: 26,
          'data-sentry-element': 'Text',
          'data-sentry-source-file': 'FirstDepositInfoModal.tsx',
          children: 'One Last Thing...',
        }),
        e.jsx(m, {
          fs: 14,
          lh: 20,
          weight: 'bold',
          color: 'grey',
          className: l.description,
          'data-sentry-element': 'Text',
          'data-sentry-source-file': 'FirstDepositInfoModal.tsx',
          children: 'Before you deposit:',
        }),
        e.jsx('div', {
          className: l.content,
          children: e.jsx(I, {
            'data-sentry-element': 'Content',
            'data-sentry-source-file': 'FirstDepositInfoModal.tsx',
          }),
        }),
        e.jsx(x, {
          title: 'I confirm all of the above',
          checked: t,
          onClick: s,
          className: l.confirmAllCheckbox,
          'data-sentry-element': 'Checkbox',
          'data-sentry-source-file': 'FirstDepositInfoModal.tsx',
        }),
        e.jsx(x, {
          title: "I am aware of the risks. Don't remind me again.",
          checked: i,
          onClick: u,
          'data-sentry-element': 'Checkbox',
          'data-sentry-source-file': 'FirstDepositInfoModal.tsx',
        }),
        e.jsx(g, {
          isFullWidth: !0,
          onClick: n,
          disabled: !t,
          className: l.completeDepositButton,
          'data-sentry-element': 'Button',
          'data-sentry-source-file': 'FirstDepositInfoModal.tsx',
          children: 'Complete Deposit',
        }),
      ],
    });
  };
export { F, M as S, v as u };
//# sourceMappingURL=FirstDepositInfoModal-DdJYHdII.js.map
