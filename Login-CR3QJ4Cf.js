import {
  j as e,
  F as l,
  z as y,
  a as o,
  w as f,
  T as r,
  an as S,
  ao as j,
  ap as C,
  aq as L,
} from './phantomUi-BnOIPQCj.js';
import {
  w as b,
  h as P,
  L as R,
  x as I,
  y as w,
  z as A,
  C as N,
  G as T,
  W as k,
  H as v,
} from './main-Bqs19KG0.js';
import './metaplex-DKWSQMdM.js';
import './chainEthereum-DCLFWD03.js';
import './phantomRpc-roQOrxiJ.js';
import { u as E } from './phantomUiDeps-DRT5vvX7.js';
import { r as c } from './react-6iN9_IA6.js';
import { u as _ } from './stackRouter-nhyjVX3l.js';
import './lodash-aFjP5OGs.js';
import './channel-CAyBJUId.js';
import './chainSolana-C0WbUUwF.js';
import './metaplexMplTokenMetadata-B1auuVGR.js';
import './chainBitcoin-8-XOceRu.js';
import './analytics-CTNVS3Vq.js';
import './chainSui-C-6FVPxt.js';
import './metaplexUmi-B-YFAY88.js';
import './metaplexMplCore-DwiB1C7D.js';
const Z = () => {
  const { t: a } = E(),
    g = b(),
    d = _(),
    m = P(),
    [n, s] = c.useState(!1),
    [B, p] = c.useState(''),
    u = c.useCallback(async () => {
      s(!0);
      try {
        await g.logIn({ type: 'email', prompt: 'login', provider: R.Google }),
          await d.popStack(),
          await I(w);
      } catch (t) {
        s(!1),
          t instanceof Error && t.cause === 'already_connected'
            ? p('Wallet already exists')
            : p('Error logging in');
        return;
      }
      s(!1);
    }, [g, d]),
    h = A((t) => t.setWalletState),
    { dappURL: i } = N();
  return e.jsxs(l, {
    direction: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    gap: 'screen',
    padding: 'screen',
    children: [
      T.renderMode !== 'full-mode' &&
        e.jsx(y, {
          icon: 'X',
          label: a('commandClose'),
          backgroundColor: [null, 'bgButton'],
          color: ['textSecondary', 'textPrimary'],
          onClick: () => void h(k.Closed),
          className: o({ position: 'absolute', top: 16, right: 16 }),
        }),
      e.jsx(f, { icon: 'LogoFill', shape: 'circle', color: 'textPrimary', size: 72 }),
      e.jsxs(l, {
        direction: 'column',
        alignItems: 'center',
        gap: 'list',
        children: [
          e.jsx(r, { font: 'heading3', children: a('seedlessSignUpOrLogin') }),
          e.jsx(r, {
            font: 'caption',
            color: 'textSecondary',
            children: a('seedlessContinueByEnteringYourEmail'),
          }),
        ],
      }),
      e.jsx(S, {
        disabled: n,
        onClick: async ({ start: t, stop: x }) => {
          t(), m.capture('onboardingSeedlessLogin'), await u().finally(x);
        },
        children: e.jsxs(l, {
          direction: 'row',
          gap: 4,
          alignItems: 'center',
          children: [
            !n && e.jsx(j, { size: 16 }),
            a(n ? 'seedlessLoggingIn' : 'seedlessContinueWithGoogleButtonText'),
          ],
        }),
      }),
      v() &&
        i &&
        e.jsxs(r, {
          font: 'label',
          color: 'textSecondary',
          className: o({
            textAlign: 'center',
            color: 'textTertiary',
            alignSelf: 'center',
            paddingLeft: 16,
            paddingRight: 16,
          }),
          children: [
            'Already have Phantom? ',
            e.jsx('a', {
              href: `https://phantom.com/ul/browse/${encodeURIComponent(i)}?ref=${encodeURIComponent(new URL(i).origin)}`,
              className: o({ color: 'accentPrimary' }),
              target: '_blank',
              rel: 'noopener noreferrer',
              children: 'Open in Phantom',
            }),
          ],
        }),
      e.jsxs(r, {
        font: 'label',
        color: 'textSecondary',
        className: o({
          textAlign: 'center',
          color: 'textTertiary',
          alignSelf: 'center',
          paddingLeft: 16,
          paddingRight: 16,
        }),
        children: [
          "By creating a wallet, you agree to Phantom's ",
          e.jsx('a', {
            href: C,
            className: o({ color: 'accentPrimary' }),
            target: '_blank',
            rel: 'noopener noreferrer',
            children: 'Terms',
          }),
          ' and ',
          e.jsx('a', {
            href: L,
            className: o({ color: 'accentPrimary' }),
            target: '_blank',
            rel: 'noopener noreferrer',
            children: 'Privacy Policy',
          }),
        ],
      }),
    ],
  });
};
export { Z as Login };
