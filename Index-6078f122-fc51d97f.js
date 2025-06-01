import {
  F as R,
  G as N,
  H as M,
  J as O,
  a5 as be,
  N as _,
  Q as w,
  R as G,
  T,
  U as V,
  V as C,
  W as Y,
  X as _e,
  Y as we,
  Z as D,
  K as h,
  M as b,
  aj as Ce,
  a0 as F,
  L,
  aS as W,
  a1 as $,
  O as g,
  P as S,
  ah as me,
  a$ as ze,
  b0 as Te,
  b1 as je,
  am as Le,
  aD as xe,
  ap as Pe,
  aF as Se,
  a2 as H,
  ax as Z,
  aA as Ie,
  b2 as Ee,
  b3 as ye,
  aE as Re,
  ai as Ne,
  b4 as U,
  b5 as B,
  af as A,
  aq as he,
  a6 as Me,
  a7 as ge,
  b6 as Oe,
  $ as ke,
  b7 as J,
  b8 as Q,
  a4 as E,
  b9 as X,
  ad as I,
  al as K,
  ba as ee,
  bb as De,
  bc as te,
  bd as x,
  ac as Fe,
  aG as q,
  be as $e,
} from './index-fac91dca.js';
(function () {
  try {
    var n =
        typeof window < 'u'
          ? window
          : typeof global < 'u'
            ? global
            : typeof globalThis < 'u'
              ? globalThis
              : typeof self < 'u'
                ? self
                : {},
      e = new n.Error().stack;
    e &&
      ((n._sentryDebugIds = n._sentryDebugIds || {}),
      (n._sentryDebugIds[e] = 'a5d2b3e5-56b2-49ed-ae12-8bb26a762f07'),
      (n._sentryDebugIdIdentifier = 'sentry-dbid-a5d2b3e5-56b2-49ed-ae12-8bb26a762f07'));
  } catch {}
})();
function He(n, { from: e, to: t }, i = {}) {
  const o = getComputedStyle(n),
    a = o.transform === 'none' ? '' : o.transform,
    [d, l] = o.transformOrigin.split(' ').map(parseFloat),
    s = e.left + (e.width * d) / t.width - (t.left + d),
    r = e.top + (e.height * l) / t.height - (t.top + l),
    { delay: c = 0, duration: f = (u) => Math.sqrt(u) * 120, easing: v = ye } = i;
  return {
    delay: c,
    duration: Ne(f) ? f(Math.sqrt(s * s + r * r)) : f,
    easing: v,
    css: (u, y) => {
      const p = y * s,
        m = y * r,
        z = u + (y * e.width) / t.width,
        j = u + (y * e.height) / t.height;
      return `transform: ${a} translate(${p}px, ${m}px) scale(${z}, ${j});`;
    },
  };
}
function Ge(n) {
  O(
    n,
    'svelte-13cuwwo',
    'div.svelte-13cuwwo{box-sizing:content-box}.border.svelte-13cuwwo{border:2px solid;border-radius:120px;overflow:hidden}'
  );
}
function Ve(n) {
  let e, t;
  return {
    c() {
      (e = h('div')),
        b(e, 'class', 'border svelte-13cuwwo'),
        b(
          e,
          'style',
          (t = `
    width: ${n[2] - n[3] * 2}px; 
    height: ${n[2] - n[3] * 2}px; 
    border-color: var(${n[1]}); 
    padding: ${n[3]}px; 
    background-color: ${n[4]};
    border-radius: 50%;
    display: flex;
    justify-content: center;
  `)
        );
    },
    m(i, o) {
      _(i, e, o), (e.innerHTML = n[0]);
    },
    p(i, [o]) {
      o & 1 && (e.innerHTML = i[0]),
        o & 30 &&
          t !==
            (t = `
    width: ${i[2] - i[3] * 2}px; 
    height: ${i[2] - i[3] * 2}px; 
    border-color: var(${i[1]}); 
    padding: ${i[3]}px; 
    background-color: ${i[4]};
    border-radius: 50%;
    display: flex;
    justify-content: center;
  `) &&
          b(e, 'style', t);
    },
    i: E,
    o: E,
    d(i) {
      i && C(e);
    },
  };
}
function Ae(n, e, t) {
  let { icon: i } = e,
    { borderColorVar: o } = e,
    { size: a } = e,
    { padding: d = 0 } = e,
    { background: l = 'transparent' } = e;
  return (
    (n.$$set = (s) => {
      'icon' in s && t(0, (i = s.icon)),
        'borderColorVar' in s && t(1, (o = s.borderColorVar)),
        'size' in s && t(2, (a = s.size)),
        'padding' in s && t(3, (d = s.padding)),
        'background' in s && t(4, (l = s.background));
    }),
    [i, o, a, d, l]
  );
}
class We extends R {
  constructor(e) {
    super(),
      N(this, e, Ae, Ve, M, { icon: 0, borderColorVar: 1, size: 2, padding: 3, background: 4 }, Ge);
  }
}
function Be(n) {
  O(
    n,
    'svelte-jvic9v',
    "div.notification-icons-wrapper.svelte-jvic9v{height:32px;width:32px}.border.svelte-jvic9v{border-radius:8px}div.notification-icon.svelte-jvic9v{padding:6px}div.pending-icon.svelte-jvic9v{animation:svelte-jvic9v-blink 2s ease-in infinite;height:100%;width:100%;padding:7px}@keyframes svelte-jvic9v-blink{from,to{opacity:1}50%{opacity:0.2}}div.border-action.svelte-jvic9v{height:32px;min-width:32px;border-radius:8px;overflow:hidden;will-change:transform}div.border-action.svelte-jvic9v:before{content:'';background-image:conic-gradient(#b1b7f2 20deg, #6370e5 120deg);height:140%;width:140%;position:absolute;left:-25%;top:-25%;animation:svelte-jvic9v-rotate 2s infinite linear}div.chain-icon-container.svelte-jvic9v{left:18px;top:18px}@keyframes svelte-jvic9v-rotate{100%{transform:rotate(-360deg)}}"
  );
}
function ne(n) {
  let e,
    t,
    i,
    o,
    a = x[n[1].type].eventIcon + '',
    d,
    l,
    s,
    r = !n[1].id.includes('customNotification') && !n[1].id.includes('preflight'),
    c,
    f = n[1].type === 'pending' && ie(),
    v = r && oe(n);
  return {
    c() {
      (e = h('div')),
        f && f.c(),
        (t = L()),
        (i = h('div')),
        (o = h('div')),
        (s = L()),
        v && v.c(),
        b(
          o,
          'class',
          (d =
            W(
              `notification-icon flex items-center justify-center ${n[1].type === 'pending' ? 'pending-icon' : ''}`
            ) + ' svelte-jvic9v')
        ),
        b(
          i,
          'class',
          'flex items-center justify-center border relative notification-icons-wrapper svelte-jvic9v'
        ),
        b(
          i,
          'style',
          (l = `background:${x[n[1].type].backgroundColor}; color: ${x[n[1].type].iconColor || ''}; ${n[1].type === 'pending' ? 'height: 28px; width: 28px; margin: 2px;' : `border: 2px solid ${x[n[1].type].borderColor}`}; `)
        ),
        b(e, 'class', 'relative');
    },
    m(u, y) {
      _(u, e, y),
        f && f.m(e, null),
        g(e, t),
        g(e, i),
        g(i, o),
        (o.innerHTML = a),
        g(e, s),
        v && v.m(e, null),
        (c = !0);
    },
    p(u, y) {
      u[1].type === 'pending' ? f || ((f = ie()), f.c(), f.m(e, t)) : f && (f.d(1), (f = null)),
        (!c || y & 2) && a !== (a = x[u[1].type].eventIcon + '') && (o.innerHTML = a),
        (!c ||
          (y & 2 &&
            d !==
              (d =
                W(
                  `notification-icon flex items-center justify-center ${u[1].type === 'pending' ? 'pending-icon' : ''}`
                ) + ' svelte-jvic9v'))) &&
          b(o, 'class', d),
        (!c ||
          (y & 2 &&
            l !==
              (l = `background:${x[u[1].type].backgroundColor}; color: ${x[u[1].type].iconColor || ''}; ${u[1].type === 'pending' ? 'height: 28px; width: 28px; margin: 2px;' : `border: 2px solid ${x[u[1].type].borderColor}`}; `))) &&
          b(i, 'style', l),
        y & 2 && (r = !u[1].id.includes('customNotification') && !u[1].id.includes('preflight')),
        r
          ? v
            ? (v.p(u, y), y & 2 && w(v, 1))
            : ((v = oe(u)), v.c(), w(v, 1), v.m(e, null))
          : v &&
            (G(),
            T(v, 1, 1, () => {
              v = null;
            }),
            V());
    },
    i(u) {
      c || (w(v), (c = !0));
    },
    o(u) {
      T(v), (c = !1);
    },
    d(u) {
      u && C(e), f && f.d(), v && v.d();
    },
  };
}
function ie(n) {
  let e;
  return {
    c() {
      (e = h('div')), b(e, 'class', 'border-action absolute svelte-jvic9v');
    },
    m(t, i) {
      _(t, e, i);
    },
    d(t) {
      t && C(e);
    },
  };
}
function oe(n) {
  let e, t, i;
  return (
    (t = new We({
      props: {
        icon: n[0].icon,
        size: 16,
        background: n[0].color,
        borderColorVar: '--notify-onboard-background, var(--onboard-gray-600, var(--gray-600))',
        padding: 3,
      },
    })),
    {
      c() {
        (e = h('div')),
          F(t.$$.fragment),
          b(e, 'class', 'absolute chain-icon-container svelte-jvic9v');
      },
      m(o, a) {
        _(o, e, a), $(t, e, null), (i = !0);
      },
      p(o, a) {
        const d = {};
        a & 1 && (d.icon = o[0].icon), a & 1 && (d.background = o[0].color), t.$set(d);
      },
      i(o) {
        i || (w(t.$$.fragment, o), (i = !0));
      },
      o(o) {
        T(t.$$.fragment, o), (i = !1);
      },
      d(o) {
        o && C(e), H(t);
      },
    }
  );
}
function qe(n) {
  let e,
    t,
    i = n[1].type && ne(n);
  return {
    c() {
      i && i.c(), (e = be());
    },
    m(o, a) {
      i && i.m(o, a), _(o, e, a), (t = !0);
    },
    p(o, [a]) {
      o[1].type
        ? i
          ? (i.p(o, a), a & 2 && w(i, 1))
          : ((i = ne(o)), i.c(), w(i, 1), i.m(e.parentNode, e))
        : i &&
          (G(),
          T(i, 1, 1, () => {
            i = null;
          }),
          V());
    },
    i(o) {
      t || (w(i), (t = !0));
    },
    o(o) {
      T(i), (t = !1);
    },
    d(o) {
      i && i.d(o), o && C(e);
    },
  };
}
function Ke(n, e, t) {
  let { chainStyles: i = Fe } = e,
    { notification: o } = e;
  return (
    (n.$$set = (a) => {
      'chainStyles' in a && t(0, (i = a.chainStyles)),
        'notification' in a && t(1, (o = a.notification));
    }),
    [i, o]
  );
}
class Ye extends R {
  constructor(e) {
    super(), N(this, e, Ke, qe, M, { chainStyles: 0, notification: 1 }, Be);
  }
}
function Ze(n) {
  O(
    n,
    'svelte-pm7idu',
    `div.svelte-pm7idu{display:flex;justify-content:center;font-size:inherit;font-family:inherit;margin:0 1.5rem 0 0.75rem}span.svelte-pm7idu{font-family:inherit;display:flex;align-items:center;margin:0 2px}.time.svelte-pm7idu{color:var(
      --notify-onboard-timer-color,
      var(--onboard-gray-300, var(--gray-300))
    );margin-left:4px}`
  );
}
function ae(n) {
  let e,
    t,
    i = n[2](n[1] - n[0]) + '',
    o,
    a;
  return {
    c() {
      (e = I(`-
    `)),
        (t = h('span')),
        (o = I(i)),
        (a = I(`
    ago`)),
        b(t, 'class', 'svelte-pm7idu');
    },
    m(d, l) {
      _(d, e, l), _(d, t, l), g(t, o), _(d, a, l);
    },
    p(d, l) {
      l & 3 && i !== (i = d[2](d[1] - d[0]) + '') && K(o, i);
    },
    d(d) {
      d && C(e), d && C(t), d && C(a);
    },
  };
}
function Ue(n) {
  let e,
    t = n[0] && ae(n);
  return {
    c() {
      (e = h('div')), t && t.c(), b(e, 'class', 'time svelte-pm7idu');
    },
    m(i, o) {
      _(i, e, o), t && t.m(e, null);
    },
    p(i, [o]) {
      i[0] ? (t ? t.p(i, o) : ((t = ae(i)), t.c(), t.m(e, null))) : t && (t.d(1), (t = null));
    },
    i: E,
    o: E,
    d(i) {
      i && C(e), t && t.d();
    },
  };
}
function Je(n, e, t) {
  let i, o;
  D(n, ge, (r) => t(3, (i = r))), D(n, $e, (r) => t(4, (o = r)));
  let { startTime: a } = e;
  function d(r) {
    const c = Math.floor(r / 1e3),
      f = c < 0 ? 0 : c;
    return f >= 60
      ? `${Math.floor(f / 60).toLocaleString(o)} ${i('notify.time.minutes')}`
      : `${f.toLocaleString(o)} ${i('notify.time.seconds')}`;
  }
  let l = Date.now();
  const s = setInterval(() => {
    t(1, (l = Date.now()));
  }, 1e3);
  return (
    ke(() => {
      clearInterval(s);
    }),
    (n.$$set = (r) => {
      'startTime' in r && t(0, (a = r.startTime));
    }),
    [a, l, d]
  );
}
class Qe extends R {
  constructor(e) {
    super(), N(this, e, Je, Ue, M, { startTime: 0 }, Ze);
  }
}
function Xe(n) {
  O(
    n,
    'svelte-1otz6tt',
    `div.notify-transaction-data.svelte-1otz6tt{font-size:var(
      --notify-onboard-transaction-font-size,
      var(--onboard-font-size-6, var(--font-size-6))
    );font-family:inherit;margin:0px 20px 0px 8px;justify-content:center}.hash-time.svelte-1otz6tt{display:inline-flex;margin-top:4px;font-size:var(
      --notify-onboard-hash-time-font-size,
      var(--onboard-font-size-7, var(--font-size-7))
    );line-height:var(
      --notify-onboard-hash-time-font-line-height,
      var(--onboard-font-line-height-4, var(--font-line-height-4))
    )}.address-hash.svelte-1otz6tt{color:var(
      --notify-onboard-address-hash-color,
      var(--onboard-primary-200, var(--primary-200))
    )}a.address-hash.svelte-1otz6tt{color:var(
      --notify-onboard-anchor-color,
      var(--onboard-primary-400, var(--primary-400))
    )}a.svelte-1otz6tt{display:flex;text-decoration:none;color:inherit}.transaction-status.svelte-1otz6tt{color:var(--notify-onboard-transaction-status, inherit);line-height:var(
      --notify-onboard-font-size-5,
      var(--onboard-font-size-5, var(--font-size-5))
    );font-weight:400;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}`
  );
}
function re(n) {
  let e, t, i, o;
  function a(s, r) {
    return s[0].link ? tt : et;
  }
  let d = a(n),
    l = d(n);
  return (
    (i = new Qe({ props: { startTime: n[0].startTime } })),
    {
      c() {
        (e = h('span')),
          l.c(),
          (t = L()),
          F(i.$$.fragment),
          b(e, 'class', 'hash-time svelte-1otz6tt');
      },
      m(s, r) {
        _(s, e, r), l.m(e, null), g(e, t), $(i, e, null), (o = !0);
      },
      p(s, r) {
        d === (d = a(s)) && l ? l.p(s, r) : (l.d(1), (l = d(s)), l && (l.c(), l.m(e, t)));
        const c = {};
        r & 1 && (c.startTime = s[0].startTime), i.$set(c);
      },
      i(s) {
        o || (w(i.$$.fragment, s), (o = !0));
      },
      o(s) {
        T(i.$$.fragment, s), (o = !1);
      },
      d(s) {
        s && C(e), l.d(), H(i);
      },
    }
  );
}
function et(n) {
  let e,
    t = q(n[0].id) + '',
    i;
  return {
    c() {
      (e = h('div')), (i = I(t)), b(e, 'class', 'address-hash svelte-1otz6tt');
    },
    m(o, a) {
      _(o, e, a), g(e, i);
    },
    p(o, a) {
      a & 1 && t !== (t = q(o[0].id) + '') && K(i, t);
    },
    d(o) {
      o && C(e);
    },
  };
}
function tt(n) {
  let e,
    t = q(n[0].id) + '',
    i,
    o;
  return {
    c() {
      (e = h('a')),
        (i = I(t)),
        b(e, 'class', 'address-hash svelte-1otz6tt'),
        b(e, 'href', (o = n[0].link)),
        b(e, 'target', '_blank'),
        b(e, 'rel', 'noreferrer noopener');
    },
    m(a, d) {
      _(a, e, d), g(e, i);
    },
    p(a, d) {
      d & 1 && t !== (t = q(a[0].id) + '') && K(i, t),
        d & 1 && o !== (o = a[0].link) && b(e, 'href', o);
    },
    d(a) {
      a && C(e);
    },
  };
}
function nt(n) {
  let e,
    t,
    i = n[0].message + '',
    o,
    a,
    d = n[0].id && !n[0].id.includes('customNotification') && !n[0].id.includes('preflight'),
    l,
    s = d && re(n);
  return {
    c() {
      (e = h('div')),
        (t = h('span')),
        (o = I(i)),
        (a = L()),
        s && s.c(),
        b(t, 'class', 'transaction-status svelte-1otz6tt'),
        b(e, 'class', 'flex flex-column notify-transaction-data svelte-1otz6tt');
    },
    m(r, c) {
      _(r, e, c), g(e, t), g(t, o), g(e, a), s && s.m(e, null), (l = !0);
    },
    p(r, [c]) {
      (!l || c & 1) && i !== (i = r[0].message + '') && K(o, i),
        c & 1 &&
          (d =
            r[0].id && !r[0].id.includes('customNotification') && !r[0].id.includes('preflight')),
        d
          ? s
            ? (s.p(r, c), c & 1 && w(s, 1))
            : ((s = re(r)), s.c(), w(s, 1), s.m(e, null))
          : s &&
            (G(),
            T(s, 1, 1, () => {
              s = null;
            }),
            V());
    },
    i(r) {
      l || (w(s), (l = !0));
    },
    o(r) {
      T(s), (l = !1);
    },
    d(r) {
      r && C(e), s && s.d();
    },
  };
}
function it(n, e, t) {
  let { notification: i } = e;
  return (
    (n.$$set = (o) => {
      'notification' in o && t(0, (i = o.notification));
    }),
    [i]
  );
}
class ot extends R {
  constructor(e) {
    super(), N(this, e, it, nt, M, { notification: 0 }, Xe);
  }
}
var at = `
<svg width="100%" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M10 0C4.47 0 0 4.47 0 10C0 15.53 4.47 20 10 20C15.53 20 20 15.53 20 10C20 4.47 15.53 0 10 0ZM15 13.59L13.59 15L10 11.41L6.41 15L5 13.59L8.59 10L5 6.41L6.41 5L10 8.59L13.59 5L15 6.41L11.41 10L15 13.59Z" fill="currentColor"/>
</svg>
`;
const rt = ['txPool'],
  lt = ['main', 'matic-main'],
  st = ['Ledger', 'Trezor', 'Keystone', 'KeepKey', "D'CENT"],
  le = (n) => rt.includes(n),
  se = (n) => lt.includes(n),
  ce = (n) => n && st.includes(n.label);
async function de({ type: n, wallet: e, transaction: t }) {
  const { from: i, input: o, value: a, to: d, nonce: l, gas: s, network: r } = t,
    c = B[r],
    { gasPriceProbability: f } = Y.get().notify.replacement,
    { gas: v } = Z;
  if (!v) return;
  const [u] = await v.get({ chains: [B[r]], endpoint: 'blockPrices' }),
    { maxFeePerGas: y, maxPriorityFeePerGas: p } =
      u.blockPrices[0].estimatedPrices.find(
        ({ confidence: k }) => k === (n === 'speedup' ? f?.speedup : f?.cancel)
      ) || {};
  if (!y || !p) return;
  const m = ee(y),
    z = ee(p),
    j = o === '0x' ? {} : { data: o };
  return e.provider.request({
    method: 'eth_sendTransaction',
    params: [
      Object.assign(
        {
          type: '0x2',
          from: i,
          to: n === 'cancel' ? i : d,
          chainId: parseInt(c),
          value: De(BigInt(a)),
          nonce: te(l),
          gasLimit: te(s),
          maxFeePerGas: m,
          maxPriorityFeePerGas: z,
        },
        j
      ),
    ],
  });
}
function ct(n) {
  O(
    n,
    'svelte-ftkynd',
    `.bn-notify-notification.svelte-ftkynd.svelte-ftkynd.svelte-ftkynd{--backround-color:var(--notify-onboard-background, var(--w3o-backround-color, var(--gray-700)));--foreground-color:var(--w3o-foreground-color, var(--gray-600));--text-color:var(--w3o-text-color, #FFF);--border-color:var(--w3o-border-color);font-family:inherit;transition:background 300ms ease-in-out, color 300ms ease-in-out;pointer-events:all;backdrop-filter:blur(5px);width:100%;min-height:56px;display:flex;flex-direction:column;position:relative;overflow:hidden;border:1px solid transparent;border-radius:var(
      --notify-onboard-border-radius,
      var(--onboard-border-radius-4, var(--border-radius-4))
    );background:var(--foreground-color);color:var(--text-color)}.bn-notify-notification-inner.svelte-ftkynd.svelte-ftkynd.svelte-ftkynd{padding:0.75rem}.bn-notify-notification.svelte-ftkynd:hover>div.bn-notify-notification-inner.svelte-ftkynd>div.notify-close-btn-desktop.svelte-ftkynd{visibility:visible;opacity:1}div.notify-close-btn.svelte-ftkynd.svelte-ftkynd.svelte-ftkynd{margin-left:auto;margin-bottom:auto;height:24px;width:24px;position:absolute;top:8px;right:8px;justify-content:center;align-items:center}div.notify-close-btn-desktop.svelte-ftkynd.svelte-ftkynd.svelte-ftkynd{visibility:hidden;transition:visibility 0.15s linear, opacity 0.15s linear;opacity:0}.notify-close-btn.svelte-ftkynd .close-icon.svelte-ftkynd.svelte-ftkynd{width:20px;margin:auto;color:var(--text-color)}.notify-close-btn.svelte-ftkynd>.close-icon.svelte-ftkynd.svelte-ftkynd{color:var(--notify-onboard-close-icon-color)}.notify-close-btn.svelte-ftkynd:hover>.close-icon.svelte-ftkynd.svelte-ftkynd{color:var(--notify-onboard-close-icon-hover)}.transaction-status.svelte-ftkynd.svelte-ftkynd.svelte-ftkynd{color:var(
      --notify-onboard-transaction-status-color,
      var(--onboard-primary-100, var(--primary-100))
    );line-height:14px}.dropdown.svelte-ftkynd.svelte-ftkynd.svelte-ftkynd{height:0px;overflow:hidden;transition:height 150ms ease-in-out}.dropdown-visible.svelte-ftkynd.svelte-ftkynd.svelte-ftkynd{height:48px}.dropdown-buttons.svelte-ftkynd.svelte-ftkynd.svelte-ftkynd{background-color:var(
      --notify-onboard-dropdown-background,
      var(--onboard-gray-700, var(--gray-700))
    );width:100%;padding:8px}.dropdown-button.svelte-ftkynd.svelte-ftkynd.svelte-ftkynd{padding:4px 12px;border-radius:var(
      --notify-onboard-dropdown-border-radius,
      var(--onboard-border-radius-5, var(--border-radius-5))
    );background-color:transparent;font-size:var(
      --notify-onboard-dropdown-font-size,
      var(--onboard-font-size-6, var(--font-size-6))
    );color:var(
      --notify-onboard-dropdown-text-color,
      var(--onboard-primary-400, var(--primary-400))
    );transition:all 150ms ease-in-out;cursor:pointer}.dropdown-button.svelte-ftkynd.svelte-ftkynd.svelte-ftkynd:hover{background:var(
      --notify-onboard-dropdown-btn-hover-background,
      rgba(146, 155, 237, 0.2)
    )}`
  );
}
function fe(n) {
  let e, t, i, o, a, d;
  return {
    c() {
      (e = h('div')),
        (t = h('button')),
        (t.textContent = 'Cancel'),
        (i = L()),
        (o = h('button')),
        (o.textContent = 'Speed-up'),
        b(t, 'class', 'dropdown-button svelte-ftkynd'),
        b(o, 'class', 'dropdown-button svelte-ftkynd'),
        b(e, 'class', 'dropdown-buttons flex items-center justify-end svelte-ftkynd');
    },
    m(l, s) {
      _(l, e, s),
        g(e, t),
        g(e, i),
        g(e, o),
        a || ((d = [S(t, 'click', n[10]), S(o, 'click', n[11])]), (a = !0));
    },
    p: E,
    d(l) {
      l && C(e), (a = !1), he(d);
    },
  };
}
function dt(n) {
  let e, t, i, o, a, d, l, s, r, c, f, v, u, y;
  (i = new Ye({ props: { notification: n[0], chainStyles: U[B[n[0].network]] } })),
    (a = new ot({ props: { notification: n[0] } }));
  let p = n[0].eventCode === 'txPool' && fe(n);
  return {
    c() {
      (e = h('div')),
        (t = h('div')),
        F(i.$$.fragment),
        (o = L()),
        F(a.$$.fragment),
        (d = L()),
        (l = h('div')),
        (s = h('div')),
        (r = L()),
        (c = h('div')),
        p && p.c(),
        b(s, 'class', 'flex items-center close-icon svelte-ftkynd'),
        b(
          l,
          'class',
          'notify-close-btn notify-close-btn-' + n[4].type + ' pointer flex svelte-ftkynd'
        ),
        b(t, 'class', 'flex bn-notify-notification-inner svelte-ftkynd'),
        b(c, 'class', 'dropdown svelte-ftkynd'),
        A(
          c,
          'dropdown-visible',
          n[2] && n[5] && le(n[0].eventCode) && se(n[0].network) && ce(n[7])
        ),
        b(
          e,
          'class',
          (f = 'bn-notify-notification bn-notify-notification-' + n[0].type + '} svelte-ftkynd')
        ),
        A(e, 'bn-notify-clickable', n[0].onClick);
    },
    m(m, z) {
      _(m, e, z),
        g(e, t),
        $(i, t, null),
        g(t, o),
        $(a, t, null),
        g(t, d),
        g(t, l),
        g(l, s),
        (s.innerHTML = at),
        g(e, r),
        g(e, c),
        p && p.m(c, null),
        (v = !0),
        u ||
          ((y = [
            S(l, 'click', me(n[9])),
            S(e, 'mouseenter', n[12]),
            S(e, 'mouseleave', n[13]),
            S(e, 'click', n[8]),
          ]),
          (u = !0));
    },
    p(m, [z]) {
      const j = {};
      z & 1 && (j.notification = m[0]), z & 1 && (j.chainStyles = U[B[m[0].network]]), i.$set(j);
      const k = {};
      z & 1 && (k.notification = m[0]),
        a.$set(k),
        m[0].eventCode === 'txPool'
          ? p
            ? p.p(m, z)
            : ((p = fe(m)), p.c(), p.m(c, null))
          : p && (p.d(1), (p = null)),
        (!v || z & 165) &&
          A(
            c,
            'dropdown-visible',
            m[2] && m[5] && le(m[0].eventCode) && se(m[0].network) && ce(m[7])
          ),
        (!v ||
          (z & 1 &&
            f !==
              (f =
                'bn-notify-notification bn-notify-notification-' +
                m[0].type +
                '} svelte-ftkynd'))) &&
          b(e, 'class', f),
        (!v || z & 1) && A(e, 'bn-notify-clickable', m[0].onClick);
    },
    i(m) {
      v || (w(i.$$.fragment, m), w(a.$$.fragment, m), (v = !0));
    },
    o(m) {
      T(i.$$.fragment, m), T(a.$$.fragment, m), (v = !1);
    },
    d(m) {
      m && C(e), H(i), H(a), p && p.d(), (u = !1), he(y);
    },
  };
}
function ft(n, e, t) {
  let i, o;
  D(n, Me, (k) => t(15, (i = k))), D(n, ge, (k) => t(3, (o = k)));
  const { device: a, gas: d } = Z;
  let { notification: l } = e,
    { updateParentOnRemove: s } = e,
    r,
    c = !1;
  const f = Oe.getValue().find(({ hash: k }) => k === l.id),
    v =
      f &&
      i.find(
        ({ accounts: k }) => !!k.find(({ address: P }) => P.toLowerCase() === f.from.toLowerCase())
      );
  function u(k) {
    l?.onClick && l.onClick(k);
  }
  ke(() => {
    clearTimeout(r);
  });
  const y = () => {
      J(l.id), Q(l.id), s();
    },
    p = async () => {
      try {
        await de({ type: 'cancel', wallet: v, transaction: f });
      } catch {
        const P = `${f.hash.slice(0, 9)}:txReplaceError${f.hash.slice(-5)}`;
        X({
          id: P,
          type: 'hint',
          eventCode: 'txError',
          message: o('notify.transaction.txReplaceError'),
          key: P,
          autoDismiss: 4e3,
        });
      }
    },
    m = async () => {
      try {
        await de({ type: 'speedup', wallet: v, transaction: f });
      } catch {
        const P = `${f.hash.slice(0, 9)}:txReplaceError${f.hash.slice(-5)}`;
        X({
          id: P,
          type: 'hint',
          eventCode: 'txError',
          message: o('notify.transaction.txReplaceError'),
          key: P,
          autoDismiss: 4e3,
        });
      }
    },
    z = () => t(2, (c = !0)),
    j = () => t(2, (c = !1));
  return (
    (n.$$set = (k) => {
      'notification' in k && t(0, (l = k.notification)),
        'updateParentOnRemove' in k && t(1, (s = k.updateParentOnRemove));
    }),
    (n.$$.update = () => {
      n.$$.dirty & 1 &&
        l.autoDismiss &&
        (r = setTimeout(() => {
          J(l.id), Q(l.id);
        }, l.autoDismiss));
    }),
    [l, s, c, o, a, d, f, v, u, y, p, m, z, j]
  );
}
class ut extends R {
  constructor(e) {
    super(), N(this, e, ft, dt, M, { notification: 0, updateParentOnRemove: 1 }, ct);
  }
}
function vt(n) {
  O(
    n,
    'svelte-1h8mmo3',
    `ul.svelte-1h8mmo3{padding-left:0;display:flex;flex-flow:column nowrap;font-size:var(
      --notify-onboard-font-size,
      var(--onboard-font-size-5, var(--font-size-5))
    );list-style-type:none;overflow:visible;scrollbar-width:none;box-sizing:border-box;z-index:var(--notify-onboard-z-index, 300);font-family:var(
      --notify-onboard-font-family,
      var(--onboard-font-family-normal, inherit)
    );margin:8px 0;pointer-events:all}.y-scroll.svelte-1h8mmo3{overflow-y:scroll}.y-visible.svelte-1h8mmo3{overflow-y:visible}li.notification-list-top.svelte-1h8mmo3:not(:first-child){margin-top:8px}li.notification-list-bottom.svelte-1h8mmo3:not(:first-child){margin-bottom:8px}ul.bn-notify-bottomLeft.svelte-1h8mmo3,ul.bn-notify-bottomRight.svelte-1h8mmo3{flex-direction:column-reverse}@media only screen and (max-width: 450px){ul.svelte-1h8mmo3{width:100%}}.bn-notify-clickable:hover{cursor:pointer}.svelte-1h8mmo3::-webkit-scrollbar{display:none}`
  );
}
function ue(n, e, t) {
  const i = n.slice();
  return (i[12] = e[t]), i;
}
function ve(n) {
  let e,
    t = [],
    i = new Map(),
    o,
    a,
    d,
    l = n[2];
  const s = (r) => r[12].key;
  for (let r = 0; r < l.length; r += 1) {
    let c = ue(n, l, r),
      f = s(c);
    i.set(f, (t[r] = pe(f, c)));
  }
  return {
    c() {
      e = h('ul');
      for (let r = 0; r < t.length; r += 1) t[r].c();
      b(e, 'class', (o = 'bn-notify-' + n[0] + ' ' + n[5] + ' svelte-1h8mmo3')),
        b(
          e,
          'style',
          (a = `${n[0].includes('top') ? 'justify-content:flex-start;' : ''}; max-height: calc(100vh - ${n[6].expanded ? '412px' : n[1] && n[7].type !== 'mobile' ? '82px' : !n[1] && n[7].type === 'mobile' ? '108px' : '24px'})`)
        );
    },
    m(r, c) {
      _(r, e, c);
      for (let f = 0; f < t.length; f += 1) t[f] && t[f].m(e, null);
      d = !0;
    },
    p(r, c) {
      if (c & 517) {
        (l = r[2]), G();
        for (let f = 0; f < t.length; f += 1) t[f].r();
        t = Ce(t, c, s, 1, r, l, i, e, Ee, pe, null, ue);
        for (let f = 0; f < t.length; f += 1) t[f].a();
        V();
      }
      (!d || (c & 33 && o !== (o = 'bn-notify-' + r[0] + ' ' + r[5] + ' svelte-1h8mmo3'))) &&
        b(e, 'class', o),
        (!d ||
          (c & 67 &&
            a !==
              (a = `${r[0].includes('top') ? 'justify-content:flex-start;' : ''}; max-height: calc(100vh - ${r[6].expanded ? '412px' : r[1] && r[7].type !== 'mobile' ? '82px' : !r[1] && r[7].type === 'mobile' ? '108px' : '24px'})`))) &&
          b(e, 'style', a);
    },
    i(r) {
      if (!d) {
        for (let c = 0; c < l.length; c += 1) w(t[c]);
        d = !0;
      }
    },
    o(r) {
      for (let c = 0; c < t.length; c += 1) T(t[c]);
      d = !1;
    },
    d(r) {
      r && C(e);
      for (let c = 0; c < t.length; c += 1) t[c].d();
    },
  };
}
function pe(n, e) {
  let t,
    i,
    o,
    a,
    d,
    l,
    s,
    r = E,
    c,
    f,
    v;
  return (
    (i = new ut({ props: { notification: e[12], updateParentOnRemove: e[9] } })),
    {
      key: n,
      first: null,
      c() {
        (t = h('li')),
          F(i.$$.fragment),
          (o = L()),
          b(
            t,
            'class',
            (a =
              W(
                `bn-notify-li-${e[0]} ${e[0].includes('top') ? 'notification-list-top' : 'notification-list-bottom'}`
              ) + ' svelte-1h8mmo3')
          ),
          (this.first = t);
      },
      m(u, y) {
        _(u, t, y),
          $(i, t, null),
          g(t, o),
          (c = !0),
          f || ((v = S(t, 'click', me(e[10]))), (f = !0));
      },
      p(u, y) {
        e = u;
        const p = {};
        y & 4 && (p.notification = e[12]),
          i.$set(p),
          (!c ||
            (y & 1 &&
              a !==
                (a =
                  W(
                    `bn-notify-li-${e[0]} ${e[0].includes('top') ? 'notification-list-top' : 'notification-list-bottom'}`
                  ) + ' svelte-1h8mmo3'))) &&
            b(t, 'class', a);
      },
      r() {
        s = t.getBoundingClientRect();
      },
      f() {
        ze(t), r(), Te(t, s);
      },
      a() {
        r(), (r = je(t, s, He, { duration: 500 }));
      },
      i(u) {
        c ||
          (w(i.$$.fragment, u),
          u &&
            Le(() => {
              c &&
                (l && l.end(1),
                (d = xe(t, Pe, { duration: 1200, delay: 300, x: e[3], y: e[4], easing: bt })),
                d.start());
            }),
          (c = !0));
      },
      o(u) {
        T(i.$$.fragment, u),
          d && d.invalidate(),
          (l = Se(t, Re, { duration: 300, easing: ye })),
          (c = !1);
      },
      d(u) {
        u && C(t), H(i), u && l && l.end(), (f = !1), v();
      },
    }
  );
}
function pt(n) {
  let e,
    t,
    i = n[2].length && ve(n);
  return {
    c() {
      i && i.c(), (e = be());
    },
    m(o, a) {
      i && i.m(o, a), _(o, e, a), (t = !0);
    },
    p(o, [a]) {
      o[2].length
        ? i
          ? (i.p(o, a), a & 4 && w(i, 1))
          : ((i = ve(o)), i.c(), w(i, 1), i.m(e.parentNode, e))
        : i &&
          (G(),
          T(i, 1, 1, () => {
            i = null;
          }),
          V());
    },
    i(o) {
      t || (w(i), (t = !0));
    },
    o(o) {
      T(i), (t = !1);
    },
    d(o) {
      i && i.d(o), o && C(e);
    },
  };
}
function bt(n) {
  return Math.sin((-13 * (n + 1) * Math.PI) / 2) * Math.pow(2, -35 * n) + 1;
}
function mt(n, e, t) {
  let i;
  const { device: o } = Z,
    a = Y.select('accountCenter').pipe(_e(Y.get().accountCenter), we(1));
  D(n, a, (p) => t(6, (i = p)));
  let { position: d } = e,
    { sharedContainer: l } = e,
    { notifications: s } = e,
    r,
    c;
  (r = 0), (c = 0);
  let f = 'y-scroll';
  const v = () => {
      f !== 'y-visible' && t(5, (f = 'y-visible')),
        u(function () {
          t(5, (f = 'y-scroll'));
        }, 1e3);
    },
    u = (function () {
      let p = null;
      return (m, z) => {
        clearTimeout(p), (p = setTimeout(m, z));
      };
    })();
  function y(p) {
    Ie.call(this, n, p);
  }
  return (
    (n.$$set = (p) => {
      'position' in p && t(0, (d = p.position)),
        'sharedContainer' in p && t(1, (l = p.sharedContainer)),
        'notifications' in p && t(2, (s = p.notifications));
    }),
    (n.$$.update = () => {
      n.$$.dirty & 1 && (d.includes('top') ? t(4, (c = -50)) : t(4, (c = 50)));
    }),
    [d, l, s, r, c, f, i, o, a, v, y]
  );
}
class ht extends R {
  constructor(e) {
    super(), N(this, e, mt, pt, M, { position: 0, sharedContainer: 1, notifications: 2 }, vt);
  }
}
export { ht as default };
