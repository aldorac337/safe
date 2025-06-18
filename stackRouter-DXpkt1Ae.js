var xl = Object.defineProperty;
var bl = (e, t, n) =>
  t in e ? xl(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (e[t] = n);
var Pe = (e, t, n) => bl(e, typeof t != 'symbol' ? t + '' : t, n);
import { j as G, a as Pl } from './phantomUi-BUKCyHFp.js';
import { r as x, b as Tl, c as wl, R as io } from './react-6iN9_IA6.js';
import { z as xr } from './phantomUiDeps-B7Pij32n.js';
/**
 * @remix-run/router v1.19.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function te() {
  return (
    (te = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
          }
          return e;
        }),
    te.apply(this, arguments)
  );
}
var ie;
(function (e) {
  (e.Pop = 'POP'), (e.Push = 'PUSH'), (e.Replace = 'REPLACE');
})(ie || (ie = {}));
function Sl(e) {
  e === void 0 && (e = {});
  let { initialEntries: t = ['/'], initialIndex: n, v5Compat: i = !1 } = e,
    r;
  r = t.map((p, v) => u(p, typeof p == 'string' ? null : p.state, v === 0 ? 'default' : void 0));
  let o = l(n ?? r.length - 1),
    s = ie.Pop,
    a = null;
  function l(p) {
    return Math.min(Math.max(p, 0), r.length - 1);
  }
  function c() {
    return r[o];
  }
  function u(p, v, b) {
    v === void 0 && (v = null);
    let P = ni(r ? c().pathname : '/', p, v, b);
    return (
      ut(
        P.pathname.charAt(0) === '/',
        'relative pathnames are not supported in memory history: ' + JSON.stringify(p)
      ),
      P
    );
  }
  function h(p) {
    return typeof p == 'string' ? p : Mn(p);
  }
  return {
    get index() {
      return o;
    },
    get action() {
      return s;
    },
    get location() {
      return c();
    },
    createHref: h,
    createURL(p) {
      return new URL(h(p), 'http://localhost');
    },
    encodeLocation(p) {
      let v = typeof p == 'string' ? Re(p) : p;
      return { pathname: v.pathname || '', search: v.search || '', hash: v.hash || '' };
    },
    push(p, v) {
      s = ie.Push;
      let b = u(p, v);
      (o += 1), r.splice(o, r.length, b), i && a && a({ action: s, location: b, delta: 1 });
    },
    replace(p, v) {
      s = ie.Replace;
      let b = u(p, v);
      (r[o] = b), i && a && a({ action: s, location: b, delta: 0 });
    },
    go(p) {
      s = ie.Pop;
      let v = l(o + p),
        b = r[v];
      (o = v), a && a({ action: s, location: b, delta: p });
    },
    listen(p) {
      return (
        (a = p),
        () => {
          a = null;
        }
      );
    },
  };
}
function _(e, t) {
  if (e === !1 || e === null || typeof e > 'u') throw new Error(t);
}
function ut(e, t) {
  if (!e) {
    typeof console < 'u' && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function Cl() {
  return Math.random().toString(36).substr(2, 8);
}
function ni(e, t, n, i) {
  return (
    n === void 0 && (n = null),
    te(
      { pathname: typeof e == 'string' ? e : e.pathname, search: '', hash: '' },
      typeof t == 'string' ? Re(t) : t,
      { state: n, key: (t && t.key) || i || Cl() }
    )
  );
}
function Mn(e) {
  let { pathname: t = '/', search: n = '', hash: i = '' } = e;
  return (
    n && n !== '?' && (t += n.charAt(0) === '?' ? n : '?' + n),
    i && i !== '#' && (t += i.charAt(0) === '#' ? i : '#' + i),
    t
  );
}
function Re(e) {
  let t = {};
  if (e) {
    let n = e.indexOf('#');
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let i = e.indexOf('?');
    i >= 0 && ((t.search = e.substr(i)), (e = e.substr(0, i))), e && (t.pathname = e);
  }
  return t;
}
var K;
(function (e) {
  (e.data = 'data'), (e.deferred = 'deferred'), (e.redirect = 'redirect'), (e.error = 'error');
})(K || (K = {}));
const Rl = new Set(['lazy', 'caseSensitive', 'path', 'id', 'index', 'children']);
function El(e) {
  return e.index === !0;
}
function Nt(e, t, n, i) {
  return (
    n === void 0 && (n = []),
    i === void 0 && (i = {}),
    e.map((r, o) => {
      let s = [...n, String(o)],
        a = typeof r.id == 'string' ? r.id : s.join('-');
      if (
        (_(r.index !== !0 || !r.children, 'Cannot specify children on an index route'),
        _(
          !i[a],
          'Found a route id collision on id "' +
            a +
            `".  Route id's must be globally unique within Data Router usages`
        ),
        El(r))
      ) {
        let l = te({}, r, t(r), { id: a });
        return (i[a] = l), l;
      } else {
        let l = te({}, r, t(r), { id: a, children: void 0 });
        return (i[a] = l), r.children && (l.children = Nt(r.children, t, s, i)), l;
      }
    })
  );
}
function st(e, t, n) {
  return n === void 0 && (n = '/'), gn(e, t, n, !1);
}
function gn(e, t, n, i) {
  let r = typeof t == 'string' ? Re(t) : t,
    o = Gt(r.pathname || '/', n);
  if (o == null) return null;
  let s = so(e);
  Ml(s);
  let a = null;
  for (let l = 0; a == null && l < s.length; ++l) {
    let c = Ul(o);
    a = Ol(s[l], c, i);
  }
  return a;
}
function ro(e, t) {
  let { route: n, pathname: i, params: r } = e;
  return { id: n.id, pathname: i, params: r, data: t[n.id], handle: n.handle };
}
function so(e, t, n, i) {
  t === void 0 && (t = []), n === void 0 && (n = []), i === void 0 && (i = '');
  let r = (o, s, a) => {
    let l = {
      relativePath: a === void 0 ? o.path || '' : a,
      caseSensitive: o.caseSensitive === !0,
      childrenIndex: s,
      route: o,
    };
    l.relativePath.startsWith('/') &&
      (_(
        l.relativePath.startsWith(i),
        'Absolute route path "' +
          l.relativePath +
          '" nested under path ' +
          ('"' + i + '" is not valid. An absolute child route path ') +
          'must start with the combined path of all its parent routes.'
      ),
      (l.relativePath = l.relativePath.slice(i.length)));
    let c = lt([i, l.relativePath]),
      u = n.concat(l);
    o.children &&
      o.children.length > 0 &&
      (_(
        o.index !== !0,
        'Index routes must not have child routes. Please remove ' +
          ('all child routes from route path "' + c + '".')
      ),
      so(o.children, t, u, c)),
      !(o.path == null && !o.index) && t.push({ path: c, score: jl(c, o.index), routesMeta: u });
  };
  return (
    e.forEach((o, s) => {
      var a;
      if (o.path === '' || !((a = o.path) != null && a.includes('?'))) r(o, s);
      else for (let l of oo(o.path)) r(o, s, l);
    }),
    t
  );
}
function oo(e) {
  let t = e.split('/');
  if (t.length === 0) return [];
  let [n, ...i] = t,
    r = n.endsWith('?'),
    o = n.replace(/\?$/, '');
  if (i.length === 0) return r ? [o, ''] : [o];
  let s = oo(i.join('/')),
    a = [];
  return (
    a.push(...s.map((l) => (l === '' ? o : [o, l].join('/')))),
    r && a.push(...s),
    a.map((l) => (e.startsWith('/') && l === '' ? '/' : l))
  );
}
function Ml(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : Il(
          t.routesMeta.map((i) => i.childrenIndex),
          n.routesMeta.map((i) => i.childrenIndex)
        )
  );
}
const Al = /^:[\w-]+$/,
  Dl = 3,
  Vl = 2,
  Ll = 1,
  Fl = 10,
  kl = -2,
  br = (e) => e === '*';
function jl(e, t) {
  let n = e.split('/'),
    i = n.length;
  return (
    n.some(br) && (i += kl),
    t && (i += Vl),
    n.filter((r) => !br(r)).reduce((r, o) => r + (Al.test(o) ? Dl : o === '' ? Ll : Fl), i)
  );
}
function Il(e, t) {
  return e.length === t.length && e.slice(0, -1).every((i, r) => i === t[r])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function Ol(e, t, n) {
  n === void 0 && (n = !1);
  let { routesMeta: i } = e,
    r = {},
    o = '/',
    s = [];
  for (let a = 0; a < i.length; ++a) {
    let l = i[a],
      c = a === i.length - 1,
      u = o === '/' ? t : t.slice(o.length) || '/',
      h = Pr({ path: l.relativePath, caseSensitive: l.caseSensitive, end: c }, u),
      d = l.route;
    if (
      (!h &&
        c &&
        n &&
        !i[i.length - 1].route.index &&
        (h = Pr({ path: l.relativePath, caseSensitive: l.caseSensitive, end: !1 }, u)),
      !h)
    )
      return null;
    Object.assign(r, h.params),
      s.push({
        params: r,
        pathname: lt([o, h.pathname]),
        pathnameBase: Wl(lt([o, h.pathnameBase])),
        route: d,
      }),
      h.pathnameBase !== '/' && (o = lt([o, h.pathnameBase]));
  }
  return s;
}
function Pr(e, t) {
  typeof e == 'string' && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, i] = Bl(e.path, e.caseSensitive, e.end),
    r = t.match(n);
  if (!r) return null;
  let o = r[0],
    s = o.replace(/(.)\/+$/, '$1'),
    a = r.slice(1);
  return {
    params: i.reduce((c, u, h) => {
      let { paramName: d, isOptional: p } = u;
      if (d === '*') {
        let b = a[h] || '';
        s = o.slice(0, o.length - b.length).replace(/(.)\/+$/, '$1');
      }
      const v = a[h];
      return p && !v ? (c[d] = void 0) : (c[d] = (v || '').replace(/%2F/g, '/')), c;
    }, {}),
    pathname: o,
    pathnameBase: s,
    pattern: e,
  };
}
function Bl(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    ut(
      e === '*' || !e.endsWith('*') || e.endsWith('/*'),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, '/*') + '" because the `*` character must ') +
        'always follow a `/` in the pattern. To get rid of this warning, ' +
        ('please change the route path to "' + e.replace(/\*$/, '/*') + '".')
    );
  let i = [],
    r =
      '^' +
      e
        .replace(/\/*\*?$/, '')
        .replace(/^\/*/, '/')
        .replace(/[\\.*+^${}|()[\]]/g, '\\$&')
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (s, a, l) => (
            i.push({ paramName: a, isOptional: l != null }), l ? '/?([^\\/]+)?' : '/([^\\/]+)'
          )
        );
  return (
    e.endsWith('*')
      ? (i.push({ paramName: '*' }), (r += e === '*' || e === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
      : n
        ? (r += '\\/*$')
        : e !== '' && e !== '/' && (r += '(?:(?=\\/|$))'),
    [new RegExp(r, t ? void 0 : 'i'), i]
  );
}
function Ul(e) {
  try {
    return e
      .split('/')
      .map((t) => decodeURIComponent(t).replace(/\//g, '%2F'))
      .join('/');
  } catch (t) {
    return (
      ut(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ('encoding (' + t + ').')
      ),
      e
    );
  }
}
function Gt(e, t) {
  if (t === '/') return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith('/') ? t.length - 1 : t.length,
    i = e.charAt(n);
  return i && i !== '/' ? null : e.slice(n) || '/';
}
function Nl(e, t) {
  t === void 0 && (t = '/');
  let { pathname: n, search: i = '', hash: r = '' } = typeof e == 'string' ? Re(e) : e;
  return { pathname: n ? (n.startsWith('/') ? n : _l(n, t)) : t, search: Kl(i), hash: Hl(r) };
}
function _l(e, t) {
  let n = t.replace(/\/+$/, '').split('/');
  return (
    e.split('/').forEach((r) => {
      r === '..' ? n.length > 1 && n.pop() : r !== '.' && n.push(r);
    }),
    n.length > 1 ? n.join('/') : '/'
  );
}
function Nn(e, t, n, i) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ('`to.' + t + '` field [' + JSON.stringify(i) + '].  Please separate it out to the ') +
    ('`to.' + n + '` field. Alternatively you may provide the full path as ') +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function ao(e) {
  return e.filter((t, n) => n === 0 || (t.route.path && t.route.path.length > 0));
}
function $l(e, t) {
  let n = ao(e);
  return t
    ? n.map((i, r) => (r === n.length - 1 ? i.pathname : i.pathnameBase))
    : n.map((i) => i.pathnameBase);
}
function zl(e, t, n, i) {
  i === void 0 && (i = !1);
  let r;
  typeof e == 'string'
    ? (r = Re(e))
    : ((r = te({}, e)),
      _(!r.pathname || !r.pathname.includes('?'), Nn('?', 'pathname', 'search', r)),
      _(!r.pathname || !r.pathname.includes('#'), Nn('#', 'pathname', 'hash', r)),
      _(!r.search || !r.search.includes('#'), Nn('#', 'search', 'hash', r)));
  let o = e === '' || r.pathname === '',
    s = o ? '/' : r.pathname,
    a;
  if (s == null) a = n;
  else {
    let h = t.length - 1;
    if (!i && s.startsWith('..')) {
      let d = s.split('/');
      for (; d[0] === '..'; ) d.shift(), (h -= 1);
      r.pathname = d.join('/');
    }
    a = h >= 0 ? t[h] : '/';
  }
  let l = Nl(r, a),
    c = s && s !== '/' && s.endsWith('/'),
    u = (o || s === '.') && n.endsWith('/');
  return !l.pathname.endsWith('/') && (c || u) && (l.pathname += '/'), l;
}
const lt = (e) => e.join('/').replace(/\/\/+/g, '/'),
  Wl = (e) => e.replace(/\/+$/, '').replace(/^\/*/, '/'),
  Kl = (e) => (!e || e === '?' ? '' : e.startsWith('?') ? e : '?' + e),
  Hl = (e) => (!e || e === '#' ? '' : e.startsWith('#') ? e : '#' + e);
class ii {
  constructor(t, n, i, r) {
    r === void 0 && (r = !1),
      (this.status = t),
      (this.statusText = n || ''),
      (this.internal = r),
      i instanceof Error ? ((this.data = i.toString()), (this.error = i)) : (this.data = i);
  }
}
function An(e) {
  return (
    e != null &&
    typeof e.status == 'number' &&
    typeof e.statusText == 'string' &&
    typeof e.internal == 'boolean' &&
    'data' in e
  );
}
const lo = ['post', 'put', 'patch', 'delete'],
  Gl = new Set(lo),
  Yl = ['get', ...lo],
  Xl = new Set(Yl),
  ql = new Set([301, 302, 303, 307, 308]),
  Zl = new Set([307, 308]),
  _n = {
    state: 'idle',
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  Jl = {
    state: 'idle',
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  Dt = { state: 'unblocked', proceed: void 0, reset: void 0, location: void 0 },
  wi = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Ql = (e) => ({ hasErrorBoundary: !!e.hasErrorBoundary }),
  co = 'remix-router-transitions';
function ec(e) {
  const t = e.window ? e.window : typeof window < 'u' ? window : void 0,
    n = typeof t < 'u' && typeof t.document < 'u' && typeof t.document.createElement < 'u',
    i = !n;
  _(e.routes.length > 0, 'You must provide a non-empty routes array to createRouter');
  let r;
  if (e.mapRouteProperties) r = e.mapRouteProperties;
  else if (e.detectErrorBoundary) {
    let f = e.detectErrorBoundary;
    r = (m) => ({ hasErrorBoundary: f(m) });
  } else r = Ql;
  let o = {},
    s = Nt(e.routes, r, void 0, o),
    a,
    l = e.basename || '/',
    c = e.unstable_dataStrategy || oc,
    u = e.unstable_patchRoutesOnNavigation,
    h = te(
      {
        v7_fetcherPersist: !1,
        v7_normalizeFormMethod: !1,
        v7_partialHydration: !1,
        v7_prependBasename: !1,
        v7_relativeSplatPath: !1,
        v7_skipActionErrorRevalidation: !1,
      },
      e.future
    ),
    d = null,
    p = new Set(),
    v = 1e3,
    b = new Set(),
    P = null,
    S = null,
    w = null,
    C = e.hydrationData != null,
    M = st(s, e.history.location, l),
    k = null;
  if (M == null && !u) {
    let f = pe(404, { pathname: e.history.location.pathname }),
      { matches: m, route: y } = Dr(s);
    (M = m), (k = { [y.id]: f });
  }
  M && !e.hydrationData && sn(M, s, e.history.location.pathname).active && (M = null);
  let N;
  if (M)
    if (M.some((f) => f.route.lazy)) N = !1;
    else if (!M.some((f) => f.route.loader)) N = !0;
    else if (h.v7_partialHydration) {
      let f = e.hydrationData ? e.hydrationData.loaderData : null,
        m = e.hydrationData ? e.hydrationData.errors : null,
        y = (T) =>
          T.route.loader
            ? typeof T.route.loader == 'function' && T.route.loader.hydrate === !0
              ? !1
              : (f && f[T.route.id] !== void 0) || (m && m[T.route.id] !== void 0)
            : !0;
      if (m) {
        let T = M.findIndex((E) => m[E.route.id] !== void 0);
        N = M.slice(0, T + 1).every(y);
      } else N = M.every(y);
    } else N = e.hydrationData != null;
  else if (((N = !1), (M = []), h.v7_partialHydration)) {
    let f = sn(null, s, e.history.location.pathname);
    f.active && f.matches && (M = f.matches);
  }
  let re,
    g = {
      historyAction: e.history.action,
      location: e.history.location,
      matches: M,
      initialized: N,
      navigation: _n,
      restoreScrollPosition: e.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: 'idle',
      loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
      actionData: (e.hydrationData && e.hydrationData.actionData) || null,
      errors: (e.hydrationData && e.hydrationData.errors) || k,
      fetchers: new Map(),
      blockers: new Map(),
    },
    j = ie.Pop,
    O = !1,
    U,
    X = !1,
    ce = new Map(),
    J = null,
    Ee = !1,
    Ue = !1,
    se = [],
    me = new Set(),
    q = new Map(),
    Ne = 0,
    Rt = -1,
    ht = new Map(),
    Me = new Set(),
    dt = new Map(),
    Et = new Map(),
    Ae = new Set(),
    Je = new Map(),
    Qe = new Map(),
    tl = new Map(),
    en;
  function nl() {
    if (
      ((d = e.history.listen((f) => {
        let { action: m, location: y, delta: T } = f;
        if (en) {
          en(), (en = void 0);
          return;
        }
        ut(
          Qe.size === 0 || T != null,
          'You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.'
        );
        let E = pr({ currentLocation: g.location, nextLocation: y, historyAction: m });
        if (E && T != null) {
          let V = new Promise((I) => {
            en = I;
          });
          e.history.go(T * -1),
            nn(E, {
              state: 'blocked',
              location: y,
              proceed() {
                nn(E, { state: 'proceeding', proceed: void 0, reset: void 0, location: y }),
                  V.then(() => e.history.go(T));
              },
              reset() {
                let I = new Map(g.blockers);
                I.set(E, Dt), fe({ blockers: I });
              },
            });
          return;
        }
        return et(m, y);
      })),
      n)
    ) {
      Pc(t, ce);
      let f = () => Tc(t, ce);
      t.addEventListener('pagehide', f), (J = () => t.removeEventListener('pagehide', f));
    }
    return g.initialized || et(ie.Pop, g.location, { initialHydration: !0 }), re;
  }
  function il() {
    d && d(),
      J && J(),
      p.clear(),
      U && U.abort(),
      g.fetchers.forEach((f, m) => tn(m)),
      g.blockers.forEach((f, m) => fr(m));
  }
  function rl(f) {
    return p.add(f), () => p.delete(f);
  }
  function fe(f, m) {
    m === void 0 && (m = {}), (g = te({}, g, f));
    let y = [],
      T = [];
    h.v7_fetcherPersist &&
      g.fetchers.forEach((E, V) => {
        E.state === 'idle' && (Ae.has(V) ? T.push(V) : y.push(V));
      }),
      [...p].forEach((E) =>
        E(g, {
          deletedFetchers: T,
          unstable_viewTransitionOpts: m.viewTransitionOpts,
          unstable_flushSync: m.flushSync === !0,
        })
      ),
      h.v7_fetcherPersist && (y.forEach((E) => g.fetchers.delete(E)), T.forEach((E) => tn(E)));
  }
  function ft(f, m, y) {
    var T, E;
    let { flushSync: V } = y === void 0 ? {} : y,
      I =
        g.actionData != null &&
        g.navigation.formMethod != null &&
        we(g.navigation.formMethod) &&
        g.navigation.state === 'loading' &&
        ((T = f.state) == null ? void 0 : T._isRedirect) !== !0,
      R;
    m.actionData
      ? Object.keys(m.actionData).length > 0
        ? (R = m.actionData)
        : (R = null)
      : I
        ? (R = g.actionData)
        : (R = null);
    let L = m.loaderData ? Mr(g.loaderData, m.loaderData, m.matches || [], m.errors) : g.loaderData,
      A = g.blockers;
    A.size > 0 && ((A = new Map(A)), A.forEach((W, Y) => A.set(Y, Dt)));
    let D =
      O === !0 ||
      (g.navigation.formMethod != null &&
        we(g.navigation.formMethod) &&
        ((E = f.state) == null ? void 0 : E._isRedirect) !== !0);
    a && ((s = a), (a = void 0)),
      Ee ||
        j === ie.Pop ||
        (j === ie.Push
          ? e.history.push(f, f.state)
          : j === ie.Replace && e.history.replace(f, f.state));
    let z;
    if (j === ie.Pop) {
      let W = ce.get(g.location.pathname);
      W && W.has(f.pathname)
        ? (z = { currentLocation: g.location, nextLocation: f })
        : ce.has(f.pathname) && (z = { currentLocation: f, nextLocation: g.location });
    } else if (X) {
      let W = ce.get(g.location.pathname);
      W ? W.add(f.pathname) : ((W = new Set([f.pathname])), ce.set(g.location.pathname, W)),
        (z = { currentLocation: g.location, nextLocation: f });
    }
    fe(
      te({}, m, {
        actionData: R,
        loaderData: L,
        historyAction: j,
        location: f,
        initialized: !0,
        navigation: _n,
        revalidation: 'idle',
        restoreScrollPosition: gr(f, m.matches || g.matches),
        preventScrollReset: D,
        blockers: A,
      }),
      { viewTransitionOpts: z, flushSync: V === !0 }
    ),
      (j = ie.Pop),
      (O = !1),
      (X = !1),
      (Ee = !1),
      (Ue = !1),
      (se = []);
  }
  async function or(f, m) {
    if (typeof f == 'number') {
      e.history.go(f);
      return;
    }
    let y = ri(
        g.location,
        g.matches,
        l,
        h.v7_prependBasename,
        f,
        h.v7_relativeSplatPath,
        m == null ? void 0 : m.fromRouteId,
        m == null ? void 0 : m.relative
      ),
      { path: T, submission: E, error: V } = Tr(h.v7_normalizeFormMethod, !1, y, m),
      I = g.location,
      R = ni(g.location, T, m && m.state);
    R = te({}, R, e.history.encodeLocation(R));
    let L = m && m.replace != null ? m.replace : void 0,
      A = ie.Push;
    L === !0
      ? (A = ie.Replace)
      : L === !1 ||
        (E != null &&
          we(E.formMethod) &&
          E.formAction === g.location.pathname + g.location.search &&
          (A = ie.Replace));
    let D = m && 'preventScrollReset' in m ? m.preventScrollReset === !0 : void 0,
      z = (m && m.unstable_flushSync) === !0,
      W = pr({ currentLocation: I, nextLocation: R, historyAction: A });
    if (W) {
      nn(W, {
        state: 'blocked',
        location: R,
        proceed() {
          nn(W, { state: 'proceeding', proceed: void 0, reset: void 0, location: R }), or(f, m);
        },
        reset() {
          let Y = new Map(g.blockers);
          Y.set(W, Dt), fe({ blockers: Y });
        },
      });
      return;
    }
    return await et(A, R, {
      submission: E,
      pendingError: V,
      preventScrollReset: D,
      replace: m && m.replace,
      enableViewTransition: m && m.unstable_viewTransition,
      flushSync: z,
    });
  }
  function sl() {
    if ((On(), fe({ revalidation: 'loading' }), g.navigation.state !== 'submitting')) {
      if (g.navigation.state === 'idle') {
        et(g.historyAction, g.location, { startUninterruptedRevalidation: !0 });
        return;
      }
      et(j || g.historyAction, g.navigation.location, {
        overrideNavigation: g.navigation,
        enableViewTransition: X === !0,
      });
    }
  }
  async function et(f, m, y) {
    U && U.abort(),
      (U = null),
      (j = f),
      (Ee = (y && y.startUninterruptedRevalidation) === !0),
      ml(g.location, g.matches),
      (O = (y && y.preventScrollReset) === !0),
      (X = (y && y.enableViewTransition) === !0);
    let T = a || s,
      E = y && y.overrideNavigation,
      V = st(T, m, l),
      I = (y && y.flushSync) === !0,
      R = sn(V, T, m.pathname);
    if ((R.active && R.matches && (V = R.matches), !V)) {
      let { error: $, notFoundMatches: ae, route: oe } = Bn(m.pathname);
      ft(m, { matches: ae, loaderData: {}, errors: { [oe.id]: $ } }, { flushSync: I });
      return;
    }
    if (
      g.initialized &&
      !Ue &&
      dc(g.location, m) &&
      !(y && y.submission && we(y.submission.formMethod))
    ) {
      ft(m, { matches: V }, { flushSync: I });
      return;
    }
    U = new AbortController();
    let L = mt(e.history, m, U.signal, y && y.submission),
      A;
    if (y && y.pendingError) A = [gt(V).route.id, { type: K.error, error: y.pendingError }];
    else if (y && y.submission && we(y.submission.formMethod)) {
      let $ = await ol(L, m, y.submission, V, R.active, { replace: y.replace, flushSync: I });
      if ($.shortCircuited) return;
      if ($.pendingActionResult) {
        let [ae, oe] = $.pendingActionResult;
        if (ve(oe) && An(oe.error) && oe.error.status === 404) {
          (U = null), ft(m, { matches: $.matches, loaderData: {}, errors: { [ae]: oe.error } });
          return;
        }
      }
      (V = $.matches || V),
        (A = $.pendingActionResult),
        (E = $n(m, y.submission)),
        (I = !1),
        (R.active = !1),
        (L = mt(e.history, L.url, L.signal));
    }
    let {
      shortCircuited: D,
      matches: z,
      loaderData: W,
      errors: Y,
    } = await al(
      L,
      m,
      V,
      R.active,
      E,
      y && y.submission,
      y && y.fetcherSubmission,
      y && y.replace,
      y && y.initialHydration === !0,
      I,
      A
    );
    D || ((U = null), ft(m, te({ matches: z || V }, Ar(A), { loaderData: W, errors: Y })));
  }
  async function ol(f, m, y, T, E, V) {
    V === void 0 && (V = {}), On();
    let I = xc(m, y);
    if ((fe({ navigation: I }, { flushSync: V.flushSync === !0 }), E)) {
      let A = await on(T, m.pathname, f.signal);
      if (A.type === 'aborted') return { shortCircuited: !0 };
      if (A.type === 'error') {
        let { boundaryId: D, error: z } = rn(m.pathname, A);
        return { matches: A.partialMatches, pendingActionResult: [D, { type: K.error, error: z }] };
      } else if (A.matches) T = A.matches;
      else {
        let { notFoundMatches: D, error: z, route: W } = Bn(m.pathname);
        return { matches: D, pendingActionResult: [W.id, { type: K.error, error: z }] };
      }
    }
    let R,
      L = kt(T, m);
    if (!L.route.action && !L.route.lazy)
      R = {
        type: K.error,
        error: pe(405, { method: f.method, pathname: m.pathname, routeId: L.route.id }),
      };
    else if (((R = (await Mt('action', g, f, [L], T, null))[L.route.id]), f.signal.aborted))
      return { shortCircuited: !0 };
    if (ot(R)) {
      let A;
      return (
        V && V.replace != null
          ? (A = V.replace)
          : (A =
              Cr(R.response.headers.get('Location'), new URL(f.url), l) ===
              g.location.pathname + g.location.search),
        await tt(f, R, !0, { submission: y, replace: A }),
        { shortCircuited: !0 }
      );
    }
    if (He(R)) throw pe(400, { type: 'defer-action' });
    if (ve(R)) {
      let A = gt(T, L.route.id);
      return (
        (V && V.replace) !== !0 && (j = ie.Push),
        { matches: T, pendingActionResult: [A.route.id, R] }
      );
    }
    return { matches: T, pendingActionResult: [L.route.id, R] };
  }
  async function al(f, m, y, T, E, V, I, R, L, A, D) {
    let z = E || $n(m, V),
      W = V || I || Lr(z),
      Y = !Ee && (!h.v7_partialHydration || !L);
    if (T) {
      if (Y) {
        let Q = ar(D);
        fe(te({ navigation: z }, Q !== void 0 ? { actionData: Q } : {}), { flushSync: A });
      }
      let B = await on(y, m.pathname, f.signal);
      if (B.type === 'aborted') return { shortCircuited: !0 };
      if (B.type === 'error') {
        let { boundaryId: Q, error: ge } = rn(m.pathname, B);
        return { matches: B.partialMatches, loaderData: {}, errors: { [Q]: ge } };
      } else if (B.matches) y = B.matches;
      else {
        let { error: Q, notFoundMatches: ge, route: ee } = Bn(m.pathname);
        return { matches: ge, loaderData: {}, errors: { [ee.id]: Q } };
      }
    }
    let $ = a || s,
      [ae, oe] = wr(
        e.history,
        g,
        y,
        W,
        m,
        h.v7_partialHydration && L === !0,
        h.v7_skipActionErrorRevalidation,
        Ue,
        se,
        me,
        Ae,
        dt,
        Me,
        $,
        l,
        D
      );
    if (
      (Un(
        (B) => !(y && y.some((Q) => Q.route.id === B)) || (ae && ae.some((Q) => Q.route.id === B))
      ),
      (Rt = ++Ne),
      ae.length === 0 && oe.length === 0)
    ) {
      let B = hr();
      return (
        ft(
          m,
          te(
            { matches: y, loaderData: {}, errors: D && ve(D[1]) ? { [D[0]]: D[1].error } : null },
            Ar(D),
            B ? { fetchers: new Map(g.fetchers) } : {}
          ),
          { flushSync: A }
        ),
        { shortCircuited: !0 }
      );
    }
    if (Y) {
      let B = {};
      if (!T) {
        B.navigation = z;
        let Q = ar(D);
        Q !== void 0 && (B.actionData = Q);
      }
      oe.length > 0 && (B.fetchers = ll(oe)), fe(B, { flushSync: A });
    }
    oe.forEach((B) => {
      q.has(B.key) && $e(B.key), B.controller && q.set(B.key, B.controller);
    });
    let At = () => oe.forEach((B) => $e(B.key));
    U && U.signal.addEventListener('abort', At);
    let { loaderResults: Ve, fetcherResults: pt } = await lr(g, y, ae, oe, f);
    if (f.signal.aborted) return { shortCircuited: !0 };
    U && U.signal.removeEventListener('abort', At), oe.forEach((B) => q.delete(B.key));
    let ze = hn(Ve);
    if (ze) return await tt(f, ze.result, !0, { replace: R }), { shortCircuited: !0 };
    if (((ze = hn(pt)), ze))
      return Me.add(ze.key), await tt(f, ze.result, !0, { replace: R }), { shortCircuited: !0 };
    let { loaderData: an, errors: Le } = Er(g, y, ae, Ve, D, oe, pt, Je);
    Je.forEach((B, Q) => {
      B.subscribe((ge) => {
        (ge || B.done) && Je.delete(Q);
      });
    }),
      h.v7_partialHydration &&
        L &&
        g.errors &&
        Object.entries(g.errors)
          .filter((B) => {
            let [Q] = B;
            return !ae.some((ge) => ge.route.id === Q);
          })
          .forEach((B) => {
            let [Q, ge] = B;
            Le = Object.assign(Le || {}, { [Q]: ge });
          });
    let ln = hr(),
      cn = dr(Rt),
      un = ln || cn || oe.length > 0;
    return te(
      { matches: y, loaderData: an, errors: Le },
      un ? { fetchers: new Map(g.fetchers) } : {}
    );
  }
  function ar(f) {
    if (f && !ve(f[1])) return { [f[0]]: f[1].data };
    if (g.actionData) return Object.keys(g.actionData).length === 0 ? null : g.actionData;
  }
  function ll(f) {
    return (
      f.forEach((m) => {
        let y = g.fetchers.get(m.key),
          T = Vt(void 0, y ? y.data : void 0);
        g.fetchers.set(m.key, T);
      }),
      new Map(g.fetchers)
    );
  }
  function cl(f, m, y, T) {
    if (i)
      throw new Error(
        "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback."
      );
    q.has(f) && $e(f);
    let E = (T && T.unstable_flushSync) === !0,
      V = a || s,
      I = ri(
        g.location,
        g.matches,
        l,
        h.v7_prependBasename,
        y,
        h.v7_relativeSplatPath,
        m,
        T == null ? void 0 : T.relative
      ),
      R = st(V, I, l),
      L = sn(R, V, I);
    if ((L.active && L.matches && (R = L.matches), !R)) {
      De(f, m, pe(404, { pathname: I }), { flushSync: E });
      return;
    }
    let { path: A, submission: D, error: z } = Tr(h.v7_normalizeFormMethod, !0, I, T);
    if (z) {
      De(f, m, z, { flushSync: E });
      return;
    }
    let W = kt(R, A);
    if (((O = (T && T.preventScrollReset) === !0), D && we(D.formMethod))) {
      ul(f, m, A, W, R, L.active, E, D);
      return;
    }
    dt.set(f, { routeId: m, path: A }), hl(f, m, A, W, R, L.active, E, D);
  }
  async function ul(f, m, y, T, E, V, I, R) {
    On(), dt.delete(f);
    function L(ee) {
      if (!ee.route.action && !ee.route.lazy) {
        let Fe = pe(405, { method: R.formMethod, pathname: y, routeId: m });
        return De(f, m, Fe, { flushSync: I }), !0;
      }
      return !1;
    }
    if (!V && L(T)) return;
    let A = g.fetchers.get(f);
    _e(f, bc(R, A), { flushSync: I });
    let D = new AbortController(),
      z = mt(e.history, y, D.signal, R);
    if (V) {
      let ee = await on(E, y, z.signal);
      if (ee.type === 'aborted') return;
      if (ee.type === 'error') {
        let { error: Fe } = rn(y, ee);
        De(f, m, Fe, { flushSync: I });
        return;
      } else if (ee.matches) {
        if (((E = ee.matches), (T = kt(E, y)), L(T))) return;
      } else {
        De(f, m, pe(404, { pathname: y }), { flushSync: I });
        return;
      }
    }
    q.set(f, D);
    let W = Ne,
      $ = (await Mt('action', g, z, [T], E, f))[T.route.id];
    if (z.signal.aborted) {
      q.get(f) === D && q.delete(f);
      return;
    }
    if (h.v7_fetcherPersist && Ae.has(f)) {
      if (ot($) || ve($)) {
        _e(f, We(void 0));
        return;
      }
    } else {
      if (ot($))
        if ((q.delete(f), Rt > W)) {
          _e(f, We(void 0));
          return;
        } else return Me.add(f), _e(f, Vt(R)), tt(z, $, !1, { fetcherSubmission: R });
      if (ve($)) {
        De(f, m, $.error);
        return;
      }
    }
    if (He($)) throw pe(400, { type: 'defer-action' });
    let ae = g.navigation.location || g.location,
      oe = mt(e.history, ae, D.signal),
      At = a || s,
      Ve = g.navigation.state !== 'idle' ? st(At, g.navigation.location, l) : g.matches;
    _(Ve, "Didn't find any matches after fetcher action");
    let pt = ++Ne;
    ht.set(f, pt);
    let ze = Vt(R, $.data);
    g.fetchers.set(f, ze);
    let [an, Le] = wr(
      e.history,
      g,
      Ve,
      R,
      ae,
      !1,
      h.v7_skipActionErrorRevalidation,
      Ue,
      se,
      me,
      Ae,
      dt,
      Me,
      At,
      l,
      [T.route.id, $]
    );
    Le.filter((ee) => ee.key !== f).forEach((ee) => {
      let Fe = ee.key,
        yr = g.fetchers.get(Fe),
        yl = Vt(void 0, yr ? yr.data : void 0);
      g.fetchers.set(Fe, yl), q.has(Fe) && $e(Fe), ee.controller && q.set(Fe, ee.controller);
    }),
      fe({ fetchers: new Map(g.fetchers) });
    let ln = () => Le.forEach((ee) => $e(ee.key));
    D.signal.addEventListener('abort', ln);
    let { loaderResults: cn, fetcherResults: un } = await lr(g, Ve, an, Le, oe);
    if (D.signal.aborted) return;
    D.signal.removeEventListener('abort', ln),
      ht.delete(f),
      q.delete(f),
      Le.forEach((ee) => q.delete(ee.key));
    let B = hn(cn);
    if (B) return tt(oe, B.result, !1);
    if (((B = hn(un)), B)) return Me.add(B.key), tt(oe, B.result, !1);
    let { loaderData: Q, errors: ge } = Er(g, Ve, an, cn, void 0, Le, un, Je);
    if (g.fetchers.has(f)) {
      let ee = We($.data);
      g.fetchers.set(f, ee);
    }
    dr(pt),
      g.navigation.state === 'loading' && pt > Rt
        ? (_(j, 'Expected pending action'),
          U && U.abort(),
          ft(g.navigation.location, {
            matches: Ve,
            loaderData: Q,
            errors: ge,
            fetchers: new Map(g.fetchers),
          }))
        : (fe({
            errors: ge,
            loaderData: Mr(g.loaderData, Q, Ve, ge),
            fetchers: new Map(g.fetchers),
          }),
          (Ue = !1));
  }
  async function hl(f, m, y, T, E, V, I, R) {
    let L = g.fetchers.get(f);
    _e(f, Vt(R, L ? L.data : void 0), { flushSync: I });
    let A = new AbortController(),
      D = mt(e.history, y, A.signal);
    if (V) {
      let $ = await on(E, y, D.signal);
      if ($.type === 'aborted') return;
      if ($.type === 'error') {
        let { error: ae } = rn(y, $);
        De(f, m, ae, { flushSync: I });
        return;
      } else if ($.matches) (E = $.matches), (T = kt(E, y));
      else {
        De(f, m, pe(404, { pathname: y }), { flushSync: I });
        return;
      }
    }
    q.set(f, A);
    let z = Ne,
      Y = (await Mt('loader', g, D, [T], E, f))[T.route.id];
    if (
      (He(Y) && (Y = (await Si(Y, D.signal, !0)) || Y),
      q.get(f) === A && q.delete(f),
      !D.signal.aborted)
    ) {
      if (Ae.has(f)) {
        _e(f, We(void 0));
        return;
      }
      if (ot(Y))
        if (Rt > z) {
          _e(f, We(void 0));
          return;
        } else {
          Me.add(f), await tt(D, Y, !1);
          return;
        }
      if (ve(Y)) {
        De(f, m, Y.error);
        return;
      }
      _(!He(Y), 'Unhandled fetcher deferred data'), _e(f, We(Y.data));
    }
  }
  async function tt(f, m, y, T) {
    let { submission: E, fetcherSubmission: V, replace: I } = T === void 0 ? {} : T;
    m.response.headers.has('X-Remix-Revalidate') && (Ue = !0);
    let R = m.response.headers.get('Location');
    _(R, 'Expected a Location header on the redirect Response'), (R = Cr(R, new URL(f.url), l));
    let L = ni(g.location, R, { _isRedirect: !0 });
    if (n) {
      let $ = !1;
      if (m.response.headers.has('X-Remix-Reload-Document')) $ = !0;
      else if (wi.test(R)) {
        const ae = e.history.createURL(R);
        $ = ae.origin !== t.location.origin || Gt(ae.pathname, l) == null;
      }
      if ($) {
        I ? t.location.replace(R) : t.location.assign(R);
        return;
      }
    }
    U = null;
    let A = I === !0 || m.response.headers.has('X-Remix-Replace') ? ie.Replace : ie.Push,
      { formMethod: D, formAction: z, formEncType: W } = g.navigation;
    !E && !V && D && z && W && (E = Lr(g.navigation));
    let Y = E || V;
    if (Zl.has(m.response.status) && Y && we(Y.formMethod))
      await et(A, L, {
        submission: te({}, Y, { formAction: R }),
        preventScrollReset: O,
        enableViewTransition: y ? X : void 0,
      });
    else {
      let $ = $n(L, E);
      await et(A, L, {
        overrideNavigation: $,
        fetcherSubmission: V,
        preventScrollReset: O,
        enableViewTransition: y ? X : void 0,
      });
    }
  }
  async function Mt(f, m, y, T, E, V) {
    let I,
      R = {};
    try {
      I = await ac(c, f, m, y, T, E, V, o, r);
    } catch (L) {
      return (
        T.forEach((A) => {
          R[A.route.id] = { type: K.error, error: L };
        }),
        R
      );
    }
    for (let [L, A] of Object.entries(I))
      if (pc(A)) {
        let D = A.result;
        R[L] = { type: K.redirect, response: uc(D, y, L, E, l, h.v7_relativeSplatPath) };
      } else R[L] = await cc(A);
    return R;
  }
  async function lr(f, m, y, T, E) {
    let V = f.matches,
      I = Mt('loader', f, E, y, m, null),
      R = Promise.all(
        T.map(async (D) => {
          if (D.matches && D.match && D.controller) {
            let W = (
              await Mt(
                'loader',
                f,
                mt(e.history, D.path, D.controller.signal),
                [D.match],
                D.matches,
                D.key
              )
            )[D.match.route.id];
            return { [D.key]: W };
          } else
            return Promise.resolve({
              [D.key]: { type: K.error, error: pe(404, { pathname: D.path }) },
            });
        })
      ),
      L = await I,
      A = (await R).reduce((D, z) => Object.assign(D, z), {});
    return (
      await Promise.all([vc(m, L, E.signal, V, f.loaderData), yc(m, A, T)]),
      { loaderResults: L, fetcherResults: A }
    );
  }
  function On() {
    (Ue = !0),
      se.push(...Un()),
      dt.forEach((f, m) => {
        q.has(m) && (me.add(m), $e(m));
      });
  }
  function _e(f, m, y) {
    y === void 0 && (y = {}),
      g.fetchers.set(f, m),
      fe({ fetchers: new Map(g.fetchers) }, { flushSync: (y && y.flushSync) === !0 });
  }
  function De(f, m, y, T) {
    T === void 0 && (T = {});
    let E = gt(g.matches, m);
    tn(f),
      fe(
        { errors: { [E.route.id]: y }, fetchers: new Map(g.fetchers) },
        { flushSync: (T && T.flushSync) === !0 }
      );
  }
  function cr(f) {
    return (
      h.v7_fetcherPersist && (Et.set(f, (Et.get(f) || 0) + 1), Ae.has(f) && Ae.delete(f)),
      g.fetchers.get(f) || Jl
    );
  }
  function tn(f) {
    let m = g.fetchers.get(f);
    q.has(f) && !(m && m.state === 'loading' && ht.has(f)) && $e(f),
      dt.delete(f),
      ht.delete(f),
      Me.delete(f),
      Ae.delete(f),
      me.delete(f),
      g.fetchers.delete(f);
  }
  function dl(f) {
    if (h.v7_fetcherPersist) {
      let m = (Et.get(f) || 0) - 1;
      m <= 0 ? (Et.delete(f), Ae.add(f)) : Et.set(f, m);
    } else tn(f);
    fe({ fetchers: new Map(g.fetchers) });
  }
  function $e(f) {
    let m = q.get(f);
    _(m, 'Expected fetch controller: ' + f), m.abort(), q.delete(f);
  }
  function ur(f) {
    for (let m of f) {
      let y = cr(m),
        T = We(y.data);
      g.fetchers.set(m, T);
    }
  }
  function hr() {
    let f = [],
      m = !1;
    for (let y of Me) {
      let T = g.fetchers.get(y);
      _(T, 'Expected fetcher: ' + y), T.state === 'loading' && (Me.delete(y), f.push(y), (m = !0));
    }
    return ur(f), m;
  }
  function dr(f) {
    let m = [];
    for (let [y, T] of ht)
      if (T < f) {
        let E = g.fetchers.get(y);
        _(E, 'Expected fetcher: ' + y), E.state === 'loading' && ($e(y), ht.delete(y), m.push(y));
      }
    return ur(m), m.length > 0;
  }
  function fl(f, m) {
    let y = g.blockers.get(f) || Dt;
    return Qe.get(f) !== m && Qe.set(f, m), y;
  }
  function fr(f) {
    g.blockers.delete(f), Qe.delete(f);
  }
  function nn(f, m) {
    let y = g.blockers.get(f) || Dt;
    _(
      (y.state === 'unblocked' && m.state === 'blocked') ||
        (y.state === 'blocked' && m.state === 'blocked') ||
        (y.state === 'blocked' && m.state === 'proceeding') ||
        (y.state === 'blocked' && m.state === 'unblocked') ||
        (y.state === 'proceeding' && m.state === 'unblocked'),
      'Invalid blocker state transition: ' + y.state + ' -> ' + m.state
    );
    let T = new Map(g.blockers);
    T.set(f, m), fe({ blockers: T });
  }
  function pr(f) {
    let { currentLocation: m, nextLocation: y, historyAction: T } = f;
    if (Qe.size === 0) return;
    Qe.size > 1 && ut(!1, 'A router only supports one blocker at a time');
    let E = Array.from(Qe.entries()),
      [V, I] = E[E.length - 1],
      R = g.blockers.get(V);
    if (
      !(R && R.state === 'proceeding') &&
      I({ currentLocation: m, nextLocation: y, historyAction: T })
    )
      return V;
  }
  function Bn(f) {
    let m = pe(404, { pathname: f }),
      y = a || s,
      { matches: T, route: E } = Dr(y);
    return Un(), { notFoundMatches: T, route: E, error: m };
  }
  function rn(f, m) {
    return {
      boundaryId: gt(m.partialMatches).route.id,
      error: pe(400, {
        type: 'route-discovery',
        pathname: f,
        message: m.error != null && 'message' in m.error ? m.error : String(m.error),
      }),
    };
  }
  function Un(f) {
    let m = [];
    return (
      Je.forEach((y, T) => {
        (!f || f(T)) && (y.cancel(), m.push(T), Je.delete(T));
      }),
      m
    );
  }
  function pl(f, m, y) {
    if (((P = f), (w = m), (S = y || null), !C && g.navigation === _n)) {
      C = !0;
      let T = gr(g.location, g.matches);
      T != null && fe({ restoreScrollPosition: T });
    }
    return () => {
      (P = null), (w = null), (S = null);
    };
  }
  function mr(f, m) {
    return (
      (S &&
        S(
          f,
          m.map((T) => ro(T, g.loaderData))
        )) ||
      f.key
    );
  }
  function ml(f, m) {
    if (P && w) {
      let y = mr(f, m);
      P[y] = w();
    }
  }
  function gr(f, m) {
    if (P) {
      let y = mr(f, m),
        T = P[y];
      if (typeof T == 'number') return T;
    }
    return null;
  }
  function sn(f, m, y) {
    if (u) {
      if (b.has(y)) return { active: !1, matches: f };
      if (f) {
        if (Object.keys(f[0].params).length > 0) return { active: !0, matches: gn(m, y, l, !0) };
      } else return { active: !0, matches: gn(m, y, l, !0) || [] };
    }
    return { active: !1, matches: null };
  }
  async function on(f, m, y) {
    let T = f;
    for (;;) {
      let E = a == null,
        V = a || s;
      try {
        await rc(u, m, T, V, o, r, tl, y);
      } catch (L) {
        return { type: 'error', error: L, partialMatches: T };
      } finally {
        E && (s = [...s]);
      }
      if (y.aborted) return { type: 'aborted' };
      let I = st(V, m, l);
      if (I) return vr(m, b), { type: 'success', matches: I };
      let R = gn(V, m, l, !0);
      if (!R || (T.length === R.length && T.every((L, A) => L.route.id === R[A].route.id)))
        return vr(m, b), { type: 'success', matches: null };
      T = R;
    }
  }
  function vr(f, m) {
    if (m.size >= v) {
      let y = m.values().next().value;
      m.delete(y);
    }
    m.add(f);
  }
  function gl(f) {
    (o = {}), (a = Nt(f, r, void 0, o));
  }
  function vl(f, m) {
    let y = a == null;
    ho(f, m, a || s, o, r), y && ((s = [...s]), fe({}));
  }
  return (
    (re = {
      get basename() {
        return l;
      },
      get future() {
        return h;
      },
      get state() {
        return g;
      },
      get routes() {
        return s;
      },
      get window() {
        return t;
      },
      initialize: nl,
      subscribe: rl,
      enableScrollRestoration: pl,
      navigate: or,
      fetch: cl,
      revalidate: sl,
      createHref: (f) => e.history.createHref(f),
      encodeLocation: (f) => e.history.encodeLocation(f),
      getFetcher: cr,
      deleteFetcher: dl,
      dispose: il,
      getBlocker: fl,
      deleteBlocker: fr,
      patchRoutes: vl,
      _internalFetchControllers: q,
      _internalActiveDeferreds: Je,
      _internalSetRoutes: gl,
    }),
    re
  );
}
function tc(e) {
  return (
    e != null && (('formData' in e && e.formData != null) || ('body' in e && e.body !== void 0))
  );
}
function ri(e, t, n, i, r, o, s, a) {
  let l, c;
  if (s) {
    l = [];
    for (let h of t)
      if ((l.push(h), h.route.id === s)) {
        c = h;
        break;
      }
  } else (l = t), (c = t[t.length - 1]);
  let u = zl(r || '.', $l(l, o), Gt(e.pathname, n) || e.pathname, a === 'path');
  return (
    r == null && ((u.search = e.search), (u.hash = e.hash)),
    (r == null || r === '' || r === '.') &&
      c &&
      c.route.index &&
      !Ci(u.search) &&
      (u.search = u.search ? u.search.replace(/^\?/, '?index&') : '?index'),
    i && n !== '/' && (u.pathname = u.pathname === '/' ? n : lt([n, u.pathname])),
    Mn(u)
  );
}
function Tr(e, t, n, i) {
  if (!i || !tc(i)) return { path: n };
  if (i.formMethod && !gc(i.formMethod))
    return { path: n, error: pe(405, { method: i.formMethod }) };
  let r = () => ({ path: n, error: pe(400, { type: 'invalid-body' }) }),
    o = i.formMethod || 'get',
    s = e ? o.toUpperCase() : o.toLowerCase(),
    a = fo(n);
  if (i.body !== void 0) {
    if (i.formEncType === 'text/plain') {
      if (!we(s)) return r();
      let d =
        typeof i.body == 'string'
          ? i.body
          : i.body instanceof FormData || i.body instanceof URLSearchParams
            ? Array.from(i.body.entries()).reduce((p, v) => {
                let [b, P] = v;
                return (
                  '' +
                  p +
                  b +
                  '=' +
                  P +
                  `
`
                );
              }, '')
            : String(i.body);
      return {
        path: n,
        submission: {
          formMethod: s,
          formAction: a,
          formEncType: i.formEncType,
          formData: void 0,
          json: void 0,
          text: d,
        },
      };
    } else if (i.formEncType === 'application/json') {
      if (!we(s)) return r();
      try {
        let d = typeof i.body == 'string' ? JSON.parse(i.body) : i.body;
        return {
          path: n,
          submission: {
            formMethod: s,
            formAction: a,
            formEncType: i.formEncType,
            formData: void 0,
            json: d,
            text: void 0,
          },
        };
      } catch {
        return r();
      }
    }
  }
  _(typeof FormData == 'function', 'FormData is not available in this environment');
  let l, c;
  if (i.formData) (l = si(i.formData)), (c = i.formData);
  else if (i.body instanceof FormData) (l = si(i.body)), (c = i.body);
  else if (i.body instanceof URLSearchParams) (l = i.body), (c = Rr(l));
  else if (i.body == null) (l = new URLSearchParams()), (c = new FormData());
  else
    try {
      (l = new URLSearchParams(i.body)), (c = Rr(l));
    } catch {
      return r();
    }
  let u = {
    formMethod: s,
    formAction: a,
    formEncType: (i && i.formEncType) || 'application/x-www-form-urlencoded',
    formData: c,
    json: void 0,
    text: void 0,
  };
  if (we(u.formMethod)) return { path: n, submission: u };
  let h = Re(n);
  return (
    t && h.search && Ci(h.search) && l.append('index', ''),
    (h.search = '?' + l),
    { path: Mn(h), submission: u }
  );
}
function nc(e, t) {
  let n = e;
  if (t) {
    let i = e.findIndex((r) => r.route.id === t);
    i >= 0 && (n = e.slice(0, i));
  }
  return n;
}
function wr(e, t, n, i, r, o, s, a, l, c, u, h, d, p, v, b) {
  let P = b ? (ve(b[1]) ? b[1].error : b[1].data) : void 0,
    S = e.createURL(t.location),
    w = e.createURL(r),
    C = b && ve(b[1]) ? b[0] : void 0,
    M = C ? nc(n, C) : n,
    k = b ? b[1].statusCode : void 0,
    N = s && k && k >= 400,
    re = M.filter((j, O) => {
      let { route: U } = j;
      if (U.lazy) return !0;
      if (U.loader == null) return !1;
      if (o)
        return typeof U.loader != 'function' || U.loader.hydrate
          ? !0
          : t.loaderData[U.id] === void 0 && (!t.errors || t.errors[U.id] === void 0);
      if (ic(t.loaderData, t.matches[O], j) || l.some((J) => J === j.route.id)) return !0;
      let X = t.matches[O],
        ce = j;
      return Sr(
        j,
        te({ currentUrl: S, currentParams: X.params, nextUrl: w, nextParams: ce.params }, i, {
          actionResult: P,
          actionStatus: k,
          defaultShouldRevalidate: N
            ? !1
            : a ||
              S.pathname + S.search === w.pathname + w.search ||
              S.search !== w.search ||
              uo(X, ce),
        })
      );
    }),
    g = [];
  return (
    h.forEach((j, O) => {
      if (o || !n.some((Ee) => Ee.route.id === j.routeId) || u.has(O)) return;
      let U = st(p, j.path, v);
      if (!U) {
        g.push({
          key: O,
          routeId: j.routeId,
          path: j.path,
          matches: null,
          match: null,
          controller: null,
        });
        return;
      }
      let X = t.fetchers.get(O),
        ce = kt(U, j.path),
        J = !1;
      d.has(O)
        ? (J = !1)
        : c.has(O)
          ? (c.delete(O), (J = !0))
          : X && X.state !== 'idle' && X.data === void 0
            ? (J = a)
            : (J = Sr(
                ce,
                te(
                  {
                    currentUrl: S,
                    currentParams: t.matches[t.matches.length - 1].params,
                    nextUrl: w,
                    nextParams: n[n.length - 1].params,
                  },
                  i,
                  { actionResult: P, actionStatus: k, defaultShouldRevalidate: N ? !1 : a }
                )
              )),
        J &&
          g.push({
            key: O,
            routeId: j.routeId,
            path: j.path,
            matches: U,
            match: ce,
            controller: new AbortController(),
          });
    }),
    [re, g]
  );
}
function ic(e, t, n) {
  let i = !t || n.route.id !== t.route.id,
    r = e[n.route.id] === void 0;
  return i || r;
}
function uo(e, t) {
  let n = e.route.path;
  return (
    e.pathname !== t.pathname || (n != null && n.endsWith('*') && e.params['*'] !== t.params['*'])
  );
}
function Sr(e, t) {
  if (e.route.shouldRevalidate) {
    let n = e.route.shouldRevalidate(t);
    if (typeof n == 'boolean') return n;
  }
  return t.defaultShouldRevalidate;
}
async function rc(e, t, n, i, r, o, s, a) {
  let l = [t, ...n.map((c) => c.route.id)].join('-');
  try {
    let c = s.get(l);
    c ||
      ((c = e({
        path: t,
        matches: n,
        patch: (u, h) => {
          a.aborted || ho(u, h, i, r, o);
        },
      })),
      s.set(l, c)),
      c && fc(c) && (await c);
  } finally {
    s.delete(l);
  }
}
function ho(e, t, n, i, r) {
  if (e) {
    var o;
    let s = i[e];
    _(s, 'No route found to patch children into: routeId = ' + e);
    let a = Nt(
      t,
      r,
      [e, 'patch', String(((o = s.children) == null ? void 0 : o.length) || '0')],
      i
    );
    s.children ? s.children.push(...a) : (s.children = a);
  } else {
    let s = Nt(t, r, ['patch', String(n.length || '0')], i);
    n.push(...s);
  }
}
async function sc(e, t, n) {
  if (!e.lazy) return;
  let i = await e.lazy();
  if (!e.lazy) return;
  let r = n[e.id];
  _(r, 'No route found in manifest');
  let o = {};
  for (let s in i) {
    let l = r[s] !== void 0 && s !== 'hasErrorBoundary';
    ut(
      !l,
      'Route "' +
        r.id +
        '" has a static property "' +
        s +
        '" defined but its lazy function is also returning a value for this property. ' +
        ('The lazy route property "' + s + '" will be ignored.')
    ),
      !l && !Rl.has(s) && (o[s] = i[s]);
  }
  Object.assign(r, o), Object.assign(r, te({}, t(r), { lazy: void 0 }));
}
async function oc(e) {
  let { matches: t } = e,
    n = t.filter((r) => r.shouldLoad);
  return (await Promise.all(n.map((r) => r.resolve()))).reduce(
    (r, o, s) => Object.assign(r, { [n[s].route.id]: o }),
    {}
  );
}
async function ac(e, t, n, i, r, o, s, a, l, c) {
  let u = o.map((p) => (p.route.lazy ? sc(p.route, l, a) : void 0)),
    h = o.map((p, v) => {
      let b = u[v],
        P = r.some((w) => w.route.id === p.route.id);
      return te({}, p, {
        shouldLoad: P,
        resolve: async (w) => (
          w && i.method === 'GET' && (p.route.lazy || p.route.loader) && (P = !0),
          P ? lc(t, i, p, b, w, c) : Promise.resolve({ type: K.data, result: void 0 })
        ),
      });
    }),
    d = await e({ matches: h, request: i, params: o[0].params, fetcherKey: s, context: c });
  try {
    await Promise.all(u);
  } catch {}
  return d;
}
async function lc(e, t, n, i, r, o) {
  let s,
    a,
    l = (c) => {
      let u,
        h = new Promise((v, b) => (u = b));
      (a = () => u()), t.signal.addEventListener('abort', a);
      let d = (v) =>
          typeof c != 'function'
            ? Promise.reject(
                new Error(
                  'You cannot call the handler for a route which defines a boolean ' +
                    ('"' + e + '" [routeId: ' + n.route.id + ']')
                )
              )
            : c({ request: t, params: n.params, context: o }, ...(v !== void 0 ? [v] : [])),
        p = (async () => {
          try {
            return { type: 'data', result: await (r ? r((b) => d(b)) : d()) };
          } catch (v) {
            return { type: 'error', result: v };
          }
        })();
      return Promise.race([p, h]);
    };
  try {
    let c = n.route[e];
    if (i)
      if (c) {
        let u,
          [h] = await Promise.all([
            l(c).catch((d) => {
              u = d;
            }),
            i,
          ]);
        if (u !== void 0) throw u;
        s = h;
      } else if ((await i, (c = n.route[e]), c)) s = await l(c);
      else if (e === 'action') {
        let u = new URL(t.url),
          h = u.pathname + u.search;
        throw pe(405, { method: t.method, pathname: h, routeId: n.route.id });
      } else return { type: K.data, result: void 0 };
    else if (c) s = await l(c);
    else {
      let u = new URL(t.url),
        h = u.pathname + u.search;
      throw pe(404, { pathname: h });
    }
    _(
      s.result !== void 0,
      'You defined ' +
        (e === 'action' ? 'an action' : 'a loader') +
        ' for route ' +
        ('"' + n.route.id + '" but didn\'t return anything from your `' + e + '` ') +
        'function. Please return a value or `null`.'
    );
  } catch (c) {
    return { type: K.error, result: c };
  } finally {
    a && t.signal.removeEventListener('abort', a);
  }
  return s;
}
async function cc(e) {
  let { result: t, type: n } = e;
  if (po(t)) {
    let c;
    try {
      let u = t.headers.get('Content-Type');
      u && /\bapplication\/json\b/.test(u)
        ? t.body == null
          ? (c = null)
          : (c = await t.json())
        : (c = await t.text());
    } catch (u) {
      return { type: K.error, error: u };
    }
    return n === K.error
      ? {
          type: K.error,
          error: new ii(t.status, t.statusText, c),
          statusCode: t.status,
          headers: t.headers,
        }
      : { type: K.data, data: c, statusCode: t.status, headers: t.headers };
  }
  if (n === K.error) {
    if (Vr(t)) {
      var i;
      if (t.data instanceof Error) {
        var r;
        return {
          type: K.error,
          error: t.data,
          statusCode: (r = t.init) == null ? void 0 : r.status,
        };
      }
      t = new ii(((i = t.init) == null ? void 0 : i.status) || 500, void 0, t.data);
    }
    return { type: K.error, error: t, statusCode: An(t) ? t.status : void 0 };
  }
  if (mc(t)) {
    var o, s;
    return {
      type: K.deferred,
      deferredData: t,
      statusCode: (o = t.init) == null ? void 0 : o.status,
      headers: ((s = t.init) == null ? void 0 : s.headers) && new Headers(t.init.headers),
    };
  }
  if (Vr(t)) {
    var a, l;
    return {
      type: K.data,
      data: t.data,
      statusCode: (a = t.init) == null ? void 0 : a.status,
      headers: (l = t.init) != null && l.headers ? new Headers(t.init.headers) : void 0,
    };
  }
  return { type: K.data, data: t };
}
function uc(e, t, n, i, r, o) {
  let s = e.headers.get('Location');
  if (
    (_(s, 'Redirects returned/thrown from loaders/actions must have a Location header'),
    !wi.test(s))
  ) {
    let a = i.slice(0, i.findIndex((l) => l.route.id === n) + 1);
    (s = ri(new URL(t.url), a, r, !0, s, o)), e.headers.set('Location', s);
  }
  return e;
}
function Cr(e, t, n) {
  if (wi.test(e)) {
    let i = e,
      r = i.startsWith('//') ? new URL(t.protocol + i) : new URL(i),
      o = Gt(r.pathname, n) != null;
    if (r.origin === t.origin && o) return r.pathname + r.search + r.hash;
  }
  return e;
}
function mt(e, t, n, i) {
  let r = e.createURL(fo(t)).toString(),
    o = { signal: n };
  if (i && we(i.formMethod)) {
    let { formMethod: s, formEncType: a } = i;
    (o.method = s.toUpperCase()),
      a === 'application/json'
        ? ((o.headers = new Headers({ 'Content-Type': a })), (o.body = JSON.stringify(i.json)))
        : a === 'text/plain'
          ? (o.body = i.text)
          : a === 'application/x-www-form-urlencoded' && i.formData
            ? (o.body = si(i.formData))
            : (o.body = i.formData);
  }
  return new Request(r, o);
}
function si(e) {
  let t = new URLSearchParams();
  for (let [n, i] of e.entries()) t.append(n, typeof i == 'string' ? i : i.name);
  return t;
}
function Rr(e) {
  let t = new FormData();
  for (let [n, i] of e.entries()) t.append(n, i);
  return t;
}
function hc(e, t, n, i, r) {
  let o = {},
    s = null,
    a,
    l = !1,
    c = {},
    u = n && ve(n[1]) ? n[1].error : void 0;
  return (
    e.forEach((h) => {
      if (!(h.route.id in t)) return;
      let d = h.route.id,
        p = t[d];
      if ((_(!ot(p), 'Cannot handle redirect results in processLoaderData'), ve(p))) {
        let v = p.error;
        if ((u !== void 0 && ((v = u), (u = void 0)), (s = s || {}), r)) s[d] = v;
        else {
          let b = gt(e, d);
          s[b.route.id] == null && (s[b.route.id] = v);
        }
        (o[d] = void 0),
          l || ((l = !0), (a = An(p.error) ? p.error.status : 500)),
          p.headers && (c[d] = p.headers);
      } else
        He(p)
          ? (i.set(d, p.deferredData),
            (o[d] = p.deferredData.data),
            p.statusCode != null && p.statusCode !== 200 && !l && (a = p.statusCode),
            p.headers && (c[d] = p.headers))
          : ((o[d] = p.data),
            p.statusCode && p.statusCode !== 200 && !l && (a = p.statusCode),
            p.headers && (c[d] = p.headers));
    }),
    u !== void 0 && n && ((s = { [n[0]]: u }), (o[n[0]] = void 0)),
    { loaderData: o, errors: s, statusCode: a || 200, loaderHeaders: c }
  );
}
function Er(e, t, n, i, r, o, s, a) {
  let { loaderData: l, errors: c } = hc(t, i, r, a, !1);
  return (
    o.forEach((u) => {
      let { key: h, match: d, controller: p } = u,
        v = s[h];
      if ((_(v, 'Did not find corresponding fetcher result'), !(p && p.signal.aborted)))
        if (ve(v)) {
          let b = gt(e.matches, d == null ? void 0 : d.route.id);
          (c && c[b.route.id]) || (c = te({}, c, { [b.route.id]: v.error })), e.fetchers.delete(h);
        } else if (ot(v)) _(!1, 'Unhandled fetcher revalidation redirect');
        else if (He(v)) _(!1, 'Unhandled fetcher deferred data');
        else {
          let b = We(v.data);
          e.fetchers.set(h, b);
        }
    }),
    { loaderData: l, errors: c }
  );
}
function Mr(e, t, n, i) {
  let r = te({}, t);
  for (let o of n) {
    let s = o.route.id;
    if (
      (t.hasOwnProperty(s)
        ? t[s] !== void 0 && (r[s] = t[s])
        : e[s] !== void 0 && o.route.loader && (r[s] = e[s]),
      i && i.hasOwnProperty(s))
    )
      break;
  }
  return r;
}
function Ar(e) {
  return e ? (ve(e[1]) ? { actionData: {} } : { actionData: { [e[0]]: e[1].data } }) : {};
}
function gt(e, t) {
  return (
    (t ? e.slice(0, e.findIndex((i) => i.route.id === t) + 1) : [...e])
      .reverse()
      .find((i) => i.route.hasErrorBoundary === !0) || e[0]
  );
}
function Dr(e) {
  let t =
    e.length === 1
      ? e[0]
      : e.find((n) => n.index || !n.path || n.path === '/') || { id: '__shim-error-route__' };
  return { matches: [{ params: {}, pathname: '', pathnameBase: '', route: t }], route: t };
}
function pe(e, t) {
  let { pathname: n, routeId: i, method: r, type: o, message: s } = t === void 0 ? {} : t,
    a = 'Unknown Server Error',
    l = 'Unknown @remix-run/router error';
  return (
    e === 400
      ? ((a = 'Bad Request'),
        o === 'route-discovery'
          ? (l =
              'Unable to match URL "' +
              n +
              '" - the `unstable_patchRoutesOnNavigation()` ' +
              (`function threw the following error:
` +
                s))
          : r && n && i
            ? (l =
                'You made a ' +
                r +
                ' request to "' +
                n +
                '" but ' +
                ('did not provide a `loader` for route "' + i + '", ') +
                'so there is no way to handle the request.')
            : o === 'defer-action'
              ? (l = 'defer() is not supported in actions')
              : o === 'invalid-body' && (l = 'Unable to encode submission body'))
      : e === 403
        ? ((a = 'Forbidden'), (l = 'Route "' + i + '" does not match URL "' + n + '"'))
        : e === 404
          ? ((a = 'Not Found'), (l = 'No route matches URL "' + n + '"'))
          : e === 405 &&
            ((a = 'Method Not Allowed'),
            r && n && i
              ? (l =
                  'You made a ' +
                  r.toUpperCase() +
                  ' request to "' +
                  n +
                  '" but ' +
                  ('did not provide an `action` for route "' + i + '", ') +
                  'so there is no way to handle the request.')
              : r && (l = 'Invalid request method "' + r.toUpperCase() + '"')),
    new ii(e || 500, a, new Error(l), !0)
  );
}
function hn(e) {
  let t = Object.entries(e);
  for (let n = t.length - 1; n >= 0; n--) {
    let [i, r] = t[n];
    if (ot(r)) return { key: i, result: r };
  }
}
function fo(e) {
  let t = typeof e == 'string' ? Re(e) : e;
  return Mn(te({}, t, { hash: '' }));
}
function dc(e, t) {
  return e.pathname !== t.pathname || e.search !== t.search
    ? !1
    : e.hash === ''
      ? t.hash !== ''
      : e.hash === t.hash
        ? !0
        : t.hash !== '';
}
function fc(e) {
  return typeof e == 'object' && e != null && 'then' in e;
}
function pc(e) {
  return po(e.result) && ql.has(e.result.status);
}
function He(e) {
  return e.type === K.deferred;
}
function ve(e) {
  return e.type === K.error;
}
function ot(e) {
  return (e && e.type) === K.redirect;
}
function Vr(e) {
  return (
    typeof e == 'object' &&
    e != null &&
    'type' in e &&
    'data' in e &&
    'init' in e &&
    e.type === 'DataWithResponseInit'
  );
}
function mc(e) {
  let t = e;
  return (
    t &&
    typeof t == 'object' &&
    typeof t.data == 'object' &&
    typeof t.subscribe == 'function' &&
    typeof t.cancel == 'function' &&
    typeof t.resolveData == 'function'
  );
}
function po(e) {
  return (
    e != null &&
    typeof e.status == 'number' &&
    typeof e.statusText == 'string' &&
    typeof e.headers == 'object' &&
    typeof e.body < 'u'
  );
}
function gc(e) {
  return Xl.has(e.toLowerCase());
}
function we(e) {
  return Gl.has(e.toLowerCase());
}
async function vc(e, t, n, i, r) {
  let o = Object.entries(t);
  for (let s = 0; s < o.length; s++) {
    let [a, l] = o[s],
      c = e.find((d) => (d == null ? void 0 : d.route.id) === a);
    if (!c) continue;
    let u = i.find((d) => d.route.id === c.route.id),
      h = u != null && !uo(u, c) && (r && r[c.route.id]) !== void 0;
    He(l) &&
      h &&
      (await Si(l, n, !1).then((d) => {
        d && (t[a] = d);
      }));
  }
}
async function yc(e, t, n) {
  for (let i = 0; i < n.length; i++) {
    let { key: r, routeId: o, controller: s } = n[i],
      a = t[r];
    e.find((c) => (c == null ? void 0 : c.route.id) === o) &&
      He(a) &&
      (_(s, 'Expected an AbortController for revalidating fetcher deferred result'),
      await Si(a, s.signal, !0).then((c) => {
        c && (t[r] = c);
      }));
  }
}
async function Si(e, t, n) {
  if ((n === void 0 && (n = !1), !(await e.deferredData.resolveData(t)))) {
    if (n)
      try {
        return { type: K.data, data: e.deferredData.unwrappedData };
      } catch (r) {
        return { type: K.error, error: r };
      }
    return { type: K.data, data: e.deferredData.data };
  }
}
function Ci(e) {
  return new URLSearchParams(e).getAll('index').some((t) => t === '');
}
function kt(e, t) {
  let n = typeof t == 'string' ? Re(t).search : t.search;
  if (e[e.length - 1].route.index && Ci(n || '')) return e[e.length - 1];
  let i = ao(e);
  return i[i.length - 1];
}
function Lr(e) {
  let { formMethod: t, formAction: n, formEncType: i, text: r, formData: o, json: s } = e;
  if (!(!t || !n || !i)) {
    if (r != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: i,
        formData: void 0,
        json: void 0,
        text: r,
      };
    if (o != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: i,
        formData: o,
        json: void 0,
        text: void 0,
      };
    if (s !== void 0)
      return {
        formMethod: t,
        formAction: n,
        formEncType: i,
        formData: void 0,
        json: s,
        text: void 0,
      };
  }
}
function $n(e, t) {
  return t
    ? {
        state: 'loading',
        location: e,
        formMethod: t.formMethod,
        formAction: t.formAction,
        formEncType: t.formEncType,
        formData: t.formData,
        json: t.json,
        text: t.text,
      }
    : {
        state: 'loading',
        location: e,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
      };
}
function xc(e, t) {
  return {
    state: 'submitting',
    location: e,
    formMethod: t.formMethod,
    formAction: t.formAction,
    formEncType: t.formEncType,
    formData: t.formData,
    json: t.json,
    text: t.text,
  };
}
function Vt(e, t) {
  return e
    ? {
        state: 'loading',
        formMethod: e.formMethod,
        formAction: e.formAction,
        formEncType: e.formEncType,
        formData: e.formData,
        json: e.json,
        text: e.text,
        data: t,
      }
    : {
        state: 'loading',
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: t,
      };
}
function bc(e, t) {
  return {
    state: 'submitting',
    formMethod: e.formMethod,
    formAction: e.formAction,
    formEncType: e.formEncType,
    formData: e.formData,
    json: e.json,
    text: e.text,
    data: t ? t.data : void 0,
  };
}
function We(e) {
  return {
    state: 'idle',
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: e,
  };
}
function Pc(e, t) {
  try {
    let n = e.sessionStorage.getItem(co);
    if (n) {
      let i = JSON.parse(n);
      for (let [r, o] of Object.entries(i || {}))
        o && Array.isArray(o) && t.set(r, new Set(o || []));
    }
  } catch {}
}
function Tc(e, t) {
  if (t.size > 0) {
    let n = {};
    for (let [i, r] of t) n[i] = [...r];
    try {
      e.sessionStorage.setItem(co, JSON.stringify(n));
    } catch (i) {
      ut(!1, 'Failed to save applied view transitions in sessionStorage (' + i + ').');
    }
  }
}
/**
 * React Router v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function _t() {
  return (
    (_t = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
          }
          return e;
        }),
    _t.apply(this, arguments)
  );
}
const mo = x.createContext(null),
  go = x.createContext(null),
  vo = x.createContext(null),
  Dn = x.createContext(null),
  Yt = x.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  yo = x.createContext(null);
function Ri() {
  return x.useContext(Dn) != null;
}
function wc() {
  return Ri() || _(!1), x.useContext(Dn).location;
}
const xo = x.createContext(null);
function Sc() {
  return x.useContext(xo);
}
function Cc(e) {
  let t = x.useContext(Yt).outlet;
  return t && x.createElement(xo.Provider, { value: e }, t);
}
function Rc(e, t, n, i) {
  Ri() || _(!1);
  let { navigator: r } = x.useContext(vo),
    { matches: o } = x.useContext(Yt),
    s = o[o.length - 1],
    a = s ? s.params : {};
  s && s.pathname;
  let l = s ? s.pathnameBase : '/';
  s && s.route;
  let c = wc(),
    u;
  if (t) {
    var h;
    let P = typeof t == 'string' ? Re(t) : t;
    l === '/' || ((h = P.pathname) != null && h.startsWith(l)) || _(!1), (u = P);
  } else u = c;
  let d = u.pathname || '/',
    p = d;
  if (l !== '/') {
    let P = l.replace(/^\//, '').split('/');
    p = '/' + d.replace(/^\//, '').split('/').slice(P.length).join('/');
  }
  let v = st(e, { pathname: p }),
    b = Vc(
      v &&
        v.map((P) =>
          Object.assign({}, P, {
            params: Object.assign({}, a, P.params),
            pathname: lt([
              l,
              r.encodeLocation ? r.encodeLocation(P.pathname).pathname : P.pathname,
            ]),
            pathnameBase:
              P.pathnameBase === '/'
                ? l
                : lt([
                    l,
                    r.encodeLocation ? r.encodeLocation(P.pathnameBase).pathname : P.pathnameBase,
                  ]),
          })
        ),
      o,
      n,
      i
    );
  return t && b
    ? x.createElement(
        Dn.Provider,
        {
          value: {
            location: _t({ pathname: '/', search: '', hash: '', state: null, key: 'default' }, u),
            navigationType: ie.Pop,
          },
        },
        b
      )
    : b;
}
function Ec() {
  let e = jc(),
    t = An(e) ? e.status + ' ' + e.statusText : e instanceof Error ? e.message : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    r = { padding: '0.5rem', backgroundColor: 'rgba(200,200,200, 0.5)' };
  return x.createElement(
    x.Fragment,
    null,
    x.createElement('h2', null, 'Unexpected Application Error!'),
    x.createElement('h3', { style: { fontStyle: 'italic' } }, t),
    n ? x.createElement('pre', { style: r }, n) : null,
    null
  );
}
const Mc = x.createElement(Ec, null);
class Ac extends x.Component {
  constructor(t) {
    super(t), (this.state = { location: t.location, revalidation: t.revalidation, error: t.error });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location || (n.revalidation !== 'idle' && t.revalidation === 'idle')
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error('React Router caught the following error during render', t, n);
  }
  render() {
    return this.state.error !== void 0
      ? x.createElement(
          Yt.Provider,
          { value: this.props.routeContext },
          x.createElement(yo.Provider, { value: this.state.error, children: this.props.component })
        )
      : this.props.children;
  }
}
function Dc(e) {
  let { routeContext: t, match: n, children: i } = e,
    r = x.useContext(mo);
  return (
    r &&
      r.static &&
      r.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (r.staticContext._deepestRenderedBoundaryId = n.route.id),
    x.createElement(Yt.Provider, { value: t }, i)
  );
}
function Vc(e, t, n, i) {
  var r;
  if (
    (t === void 0 && (t = []), n === void 0 && (n = null), i === void 0 && (i = null), e == null)
  ) {
    var o;
    if (!n) return null;
    if (n.errors) e = n.matches;
    else if (
      (o = i) != null &&
      o.v7_partialHydration &&
      t.length === 0 &&
      !n.initialized &&
      n.matches.length > 0
    )
      e = n.matches;
    else return null;
  }
  let s = e,
    a = (r = n) == null ? void 0 : r.errors;
  if (a != null) {
    let u = s.findIndex((h) => h.route.id && (a == null ? void 0 : a[h.route.id]) !== void 0);
    u >= 0 || _(!1), (s = s.slice(0, Math.min(s.length, u + 1)));
  }
  let l = !1,
    c = -1;
  if (n && i && i.v7_partialHydration)
    for (let u = 0; u < s.length; u++) {
      let h = s[u];
      if (((h.route.HydrateFallback || h.route.hydrateFallbackElement) && (c = u), h.route.id)) {
        let { loaderData: d, errors: p } = n,
          v = h.route.loader && d[h.route.id] === void 0 && (!p || p[h.route.id] === void 0);
        if (h.route.lazy || v) {
          (l = !0), c >= 0 ? (s = s.slice(0, c + 1)) : (s = [s[0]]);
          break;
        }
      }
    }
  return s.reduceRight((u, h, d) => {
    let p,
      v = !1,
      b = null,
      P = null;
    n &&
      ((p = a && h.route.id ? a[h.route.id] : void 0),
      (b = h.route.errorElement || Mc),
      l &&
        (c < 0 && d === 0
          ? (Ic('route-fallback', !1), (v = !0), (P = null))
          : c === d && ((v = !0), (P = h.route.hydrateFallbackElement || null))));
    let S = t.concat(s.slice(0, d + 1)),
      w = () => {
        let C;
        return (
          p
            ? (C = b)
            : v
              ? (C = P)
              : h.route.Component
                ? (C = x.createElement(h.route.Component, null))
                : h.route.element
                  ? (C = h.route.element)
                  : (C = u),
          x.createElement(Dc, {
            match: h,
            routeContext: { outlet: u, matches: S, isDataRoute: n != null },
            children: C,
          })
        );
      };
    return n && (h.route.ErrorBoundary || h.route.errorElement || d === 0)
      ? x.createElement(Ac, {
          location: n.location,
          revalidation: n.revalidation,
          component: b,
          error: p,
          children: w(),
          routeContext: { outlet: null, matches: S, isDataRoute: !0 },
        })
      : w();
  }, null);
}
var bn = (function (e) {
  return (
    (e.UseBlocker = 'useBlocker'),
    (e.UseLoaderData = 'useLoaderData'),
    (e.UseActionData = 'useActionData'),
    (e.UseRouteError = 'useRouteError'),
    (e.UseNavigation = 'useNavigation'),
    (e.UseRouteLoaderData = 'useRouteLoaderData'),
    (e.UseMatches = 'useMatches'),
    (e.UseRevalidator = 'useRevalidator'),
    (e.UseNavigateStable = 'useNavigate'),
    (e.UseRouteId = 'useRouteId'),
    e
  );
})(bn || {});
function bo(e) {
  let t = x.useContext(go);
  return t || _(!1), t;
}
function Lc(e) {
  let t = x.useContext(Yt);
  return t || _(!1), t;
}
function Fc(e) {
  let t = Lc(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || _(!1), n.route.id;
}
function kc() {
  let { matches: e, loaderData: t } = bo(bn.UseMatches);
  return x.useMemo(() => e.map((n) => ro(n, t)), [e, t]);
}
function jc() {
  var e;
  let t = x.useContext(yo),
    n = bo(bn.UseRouteError),
    i = Fc(bn.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[i];
}
const Fr = {};
function Ic(e, t, n) {
  !t && !Fr[e] && (Fr[e] = !0);
}
function Oc(e) {
  let {
    basename: t = '/',
    children: n = null,
    location: i,
    navigationType: r = ie.Pop,
    navigator: o,
    static: s = !1,
    future: a,
  } = e;
  Ri() && _(!1);
  let l = t.replace(/^\/*/, '/'),
    c = x.useMemo(
      () => ({ basename: l, navigator: o, static: s, future: _t({ v7_relativeSplatPath: !1 }, a) }),
      [l, a, o, s]
    );
  typeof i == 'string' && (i = Re(i));
  let { pathname: u = '/', search: h = '', hash: d = '', state: p = null, key: v = 'default' } = i,
    b = x.useMemo(() => {
      let P = Gt(u, l);
      return P == null
        ? null
        : { location: { pathname: P, search: h, hash: d, state: p, key: v }, navigationType: r };
    }, [l, u, h, d, p, v, r]);
  return b == null
    ? null
    : x.createElement(
        vo.Provider,
        { value: c },
        x.createElement(Dn.Provider, { children: n, value: b })
      );
}
new Promise(() => {});
function Bc(e) {
  let t = { hasErrorBoundary: e.ErrorBoundary != null || e.errorElement != null };
  return (
    e.Component && Object.assign(t, { element: x.createElement(e.Component), Component: void 0 }),
    e.HydrateFallback &&
      Object.assign(t, {
        hydrateFallbackElement: x.createElement(e.HydrateFallback),
        HydrateFallback: void 0,
      }),
    e.ErrorBoundary &&
      Object.assign(t, { errorElement: x.createElement(e.ErrorBoundary), ErrorBoundary: void 0 }),
    t
  );
}
function Uc(e, t) {
  return ec({
    basename: t == null ? void 0 : t.basename,
    future: _t({}, t == null ? void 0 : t.future, { v7_prependBasename: !0 }),
    history: Sl({
      initialEntries: t == null ? void 0 : t.initialEntries,
      initialIndex: t == null ? void 0 : t.initialIndex,
    }),
    hydrationData: t == null ? void 0 : t.hydrationData,
    routes: e,
    mapRouteProperties: Bc,
    unstable_dataStrategy: t == null ? void 0 : t.unstable_dataStrategy,
    unstable_patchRoutesOnNavigation: t == null ? void 0 : t.unstable_patchRoutesOnNavigation,
  }).initialize();
}
/**
 * React Router DOM v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ const Nc = '6';
try {
  window.__reactRouterVersion = Nc;
} catch {}
const _c = x.createContext({ isTransitioning: !1 }),
  $c = x.createContext(new Map()),
  zc = 'startTransition',
  kr = Tl[zc],
  Wc = 'flushSync',
  jr = wl[Wc];
function Kc(e) {
  kr ? kr(e) : e();
}
function Lt(e) {
  jr ? jr(e) : e();
}
class Hc {
  constructor() {
    (this.status = 'pending'),
      (this.promise = new Promise((t, n) => {
        (this.resolve = (i) => {
          this.status === 'pending' && ((this.status = 'resolved'), t(i));
        }),
          (this.reject = (i) => {
            this.status === 'pending' && ((this.status = 'rejected'), n(i));
          });
      }));
  }
}
function Gc(e) {
  let { fallbackElement: t, router: n, future: i } = e,
    [r, o] = x.useState(n.state),
    [s, a] = x.useState(),
    [l, c] = x.useState({ isTransitioning: !1 }),
    [u, h] = x.useState(),
    [d, p] = x.useState(),
    [v, b] = x.useState(),
    P = x.useRef(new Map()),
    { v7_startTransition: S } = i || {},
    w = x.useCallback(
      (g) => {
        S ? Kc(g) : g();
      },
      [S]
    ),
    C = x.useCallback(
      (g, j) => {
        let { deletedFetchers: O, unstable_flushSync: U, unstable_viewTransitionOpts: X } = j;
        O.forEach((J) => P.current.delete(J)),
          g.fetchers.forEach((J, Ee) => {
            J.data !== void 0 && P.current.set(Ee, J.data);
          });
        let ce =
          n.window == null ||
          n.window.document == null ||
          typeof n.window.document.startViewTransition != 'function';
        if (!X || ce) {
          U ? Lt(() => o(g)) : w(() => o(g));
          return;
        }
        if (U) {
          Lt(() => {
            d && (u && u.resolve(), d.skipTransition()),
              c({
                isTransitioning: !0,
                flushSync: !0,
                currentLocation: X.currentLocation,
                nextLocation: X.nextLocation,
              });
          });
          let J = n.window.document.startViewTransition(() => {
            Lt(() => o(g));
          });
          J.finished.finally(() => {
            Lt(() => {
              h(void 0), p(void 0), a(void 0), c({ isTransitioning: !1 });
            });
          }),
            Lt(() => p(J));
          return;
        }
        d
          ? (u && u.resolve(),
            d.skipTransition(),
            b({ state: g, currentLocation: X.currentLocation, nextLocation: X.nextLocation }))
          : (a(g),
            c({
              isTransitioning: !0,
              flushSync: !1,
              currentLocation: X.currentLocation,
              nextLocation: X.nextLocation,
            }));
      },
      [n.window, d, u, P, w]
    );
  x.useLayoutEffect(() => n.subscribe(C), [n, C]),
    x.useEffect(() => {
      l.isTransitioning && !l.flushSync && h(new Hc());
    }, [l]),
    x.useEffect(() => {
      if (u && s && n.window) {
        let g = s,
          j = u.promise,
          O = n.window.document.startViewTransition(async () => {
            w(() => o(g)), await j;
          });
        O.finished.finally(() => {
          h(void 0), p(void 0), a(void 0), c({ isTransitioning: !1 });
        }),
          p(O);
      }
    }, [w, s, u, n.window]),
    x.useEffect(() => {
      u && s && r.location.key === s.location.key && u.resolve();
    }, [u, d, r.location, s]),
    x.useEffect(() => {
      !l.isTransitioning &&
        v &&
        (a(v.state),
        c({
          isTransitioning: !0,
          flushSync: !1,
          currentLocation: v.currentLocation,
          nextLocation: v.nextLocation,
        }),
        b(void 0));
    }, [l.isTransitioning, v]),
    x.useEffect(() => {}, []);
  let M = x.useMemo(
      () => ({
        createHref: n.createHref,
        encodeLocation: n.encodeLocation,
        go: (g) => n.navigate(g),
        push: (g, j, O) =>
          n.navigate(g, {
            state: j,
            preventScrollReset: O == null ? void 0 : O.preventScrollReset,
          }),
        replace: (g, j, O) =>
          n.navigate(g, {
            replace: !0,
            state: j,
            preventScrollReset: O == null ? void 0 : O.preventScrollReset,
          }),
      }),
      [n]
    ),
    k = n.basename || '/',
    N = x.useMemo(() => ({ router: n, navigator: M, static: !1, basename: k }), [n, M, k]),
    re = x.useMemo(
      () => ({ v7_relativeSplatPath: n.future.v7_relativeSplatPath }),
      [n.future.v7_relativeSplatPath]
    );
  return x.createElement(
    x.Fragment,
    null,
    x.createElement(
      mo.Provider,
      { value: N },
      x.createElement(
        go.Provider,
        { value: r },
        x.createElement(
          $c.Provider,
          { value: P.current },
          x.createElement(
            _c.Provider,
            { value: l },
            x.createElement(
              Oc,
              {
                basename: k,
                location: r.location,
                navigationType: r.historyAction,
                navigator: M,
                future: re,
              },
              r.initialized || n.future.v7_partialHydration
                ? x.createElement(Yc, { routes: n.routes, future: n.future, state: r })
                : t
            )
          )
        )
      )
    ),
    null
  );
}
const Yc = x.memo(Xc);
function Xc(e) {
  let { routes: t, future: n, state: i } = e;
  return Rc(t, void 0, i, n);
}
var Ir;
(function (e) {
  (e.UseScrollRestoration = 'useScrollRestoration'),
    (e.UseSubmit = 'useSubmit'),
    (e.UseSubmitFetcher = 'useSubmitFetcher'),
    (e.UseFetcher = 'useFetcher'),
    (e.useViewTransitionState = 'useViewTransitionState');
})(Ir || (Ir = {}));
var Or;
(function (e) {
  (e.UseFetcher = 'useFetcher'),
    (e.UseFetchers = 'useFetchers'),
    (e.UseScrollRestoration = 'useScrollRestoration');
})(Or || (Or = {}));
function oi(e, t) {
  if (e == null) throw new Error(t);
  return e;
}
function Br(e, t) {
  if (!e) throw new Error(t);
}
const Po = io.createContext(null),
  Xt = () => oi(x.useContext(Po), 'useStackRouterState must be used within a StackRouterProvider'),
  Up = ({ router: e }) =>
    G.jsx(Po.Provider, { value: e, children: G.jsx(Gc, { router: e.router }) }),
  ai = (e) => ({
    to: (t, n) => e.pushView(t, n == null ? void 0 : n.action, n == null ? void 0 : n.params),
    pop: () => e.popView(),
    toStack: (t, n) =>
      e.pushStack(
        t,
        n == null ? void 0 : n.action,
        n == null ? void 0 : n.display,
        n == null ? void 0 : n.params
      ),
    popStack: () => e.popStack(),
    toTab: (t) => e.setCurrentTab(t),
  }),
  qc = () => {
    const e = Xt();
    return x.useMemo(() => ai(e), [e]);
  };
function Zc(e) {
  if (typeof Proxy > 'u') return e;
  const t = new Map(),
    n = (...i) => e(...i);
  return new Proxy(n, {
    get: (i, r) => (r === 'create' ? e : (t.has(r) || t.set(r, e(r)), t.get(r))),
  });
}
function $t(e) {
  return e !== null && typeof e == 'object' && typeof e.start == 'function';
}
const li = (e) => Array.isArray(e);
function To(e, t) {
  if (!Array.isArray(t)) return !1;
  const n = t.length;
  if (n !== e.length) return !1;
  for (let i = 0; i < n; i++) if (t[i] !== e[i]) return !1;
  return !0;
}
function zt(e) {
  return typeof e == 'string' || Array.isArray(e);
}
function Ur(e) {
  const t = [{}, {}];
  return (
    e == null ||
      e.values.forEach((n, i) => {
        (t[0][i] = n.get()), (t[1][i] = n.getVelocity());
      }),
    t
  );
}
function Ei(e, t, n, i) {
  if (typeof t == 'function') {
    const [r, o] = Ur(i);
    t = t(n !== void 0 ? n : e.custom, r, o);
  }
  if ((typeof t == 'string' && (t = e.variants && e.variants[t]), typeof t == 'function')) {
    const [r, o] = Ur(i);
    t = t(n !== void 0 ? n : e.custom, r, o);
  }
  return t;
}
function Vn(e, t, n) {
  const i = e.getProps();
  return Ei(i, t, n !== void 0 ? n : i.custom, e);
}
const Mi = ['animate', 'whileInView', 'whileFocus', 'whileHover', 'whileTap', 'whileDrag', 'exit'],
  Ai = ['initial', ...Mi],
  qt = [
    'transformPerspective',
    'x',
    'y',
    'z',
    'translateX',
    'translateY',
    'translateZ',
    'scale',
    'scaleX',
    'scaleY',
    'rotate',
    'rotateX',
    'rotateY',
    'rotateZ',
    'skew',
    'skewX',
    'skewY',
  ],
  qe = new Set(qt),
  je = (e) => e * 1e3,
  Ie = (e) => e / 1e3,
  Jc = { type: 'spring', stiffness: 500, damping: 25, restSpeed: 10 },
  Qc = (e) => ({
    type: 'spring',
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  eu = { type: 'keyframes', duration: 0.8 },
  tu = { type: 'keyframes', ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  nu = (e, { keyframes: t }) =>
    t.length > 2 ? eu : qe.has(e) ? (e.startsWith('scale') ? Qc(t[1]) : Jc) : tu;
function Di(e, t) {
  return e[t] || e.default || e;
}
const iu = { skipAnimations: !1, useManualTiming: !1 },
  ru = (e) => e !== null;
function Ln(e, { repeat: t, repeatType: n = 'loop' }, i) {
  const r = e.filter(ru),
    o = t && n !== 'loop' && t % 2 === 1 ? 0 : r.length - 1;
  return !o || i === void 0 ? r[o] : i;
}
const de = (e) => e;
function su(e) {
  let t = new Set(),
    n = new Set(),
    i = !1,
    r = !1;
  const o = new WeakSet();
  let s = { delta: 0, timestamp: 0, isProcessing: !1 };
  function a(c) {
    o.has(c) && (l.schedule(c), e()), c(s);
  }
  const l = {
    schedule: (c, u = !1, h = !1) => {
      const p = h && i ? t : n;
      return u && o.add(c), p.has(c) || p.add(c), c;
    },
    cancel: (c) => {
      n.delete(c), o.delete(c);
    },
    process: (c) => {
      if (((s = c), i)) {
        r = !0;
        return;
      }
      (i = !0), ([t, n] = [n, t]), n.clear(), t.forEach(a), (i = !1), r && ((r = !1), l.process(c));
    },
  };
  return l;
}
const dn = ['read', 'resolveKeyframes', 'update', 'preRender', 'render', 'postRender'],
  ou = 40;
function wo(e, t) {
  let n = !1,
    i = !0;
  const r = { delta: 0, timestamp: 0, isProcessing: !1 },
    o = () => (n = !0),
    s = dn.reduce((S, w) => ((S[w] = su(o)), S), {}),
    { read: a, resolveKeyframes: l, update: c, preRender: u, render: h, postRender: d } = s,
    p = () => {
      const S = performance.now();
      (n = !1),
        (r.delta = i ? 1e3 / 60 : Math.max(Math.min(S - r.timestamp, ou), 1)),
        (r.timestamp = S),
        (r.isProcessing = !0),
        a.process(r),
        l.process(r),
        c.process(r),
        u.process(r),
        h.process(r),
        d.process(r),
        (r.isProcessing = !1),
        n && t && ((i = !1), e(p));
    },
    v = () => {
      (n = !0), (i = !0), r.isProcessing || e(p);
    };
  return {
    schedule: dn.reduce((S, w) => {
      const C = s[w];
      return (S[w] = (M, k = !1, N = !1) => (n || v(), C.schedule(M, k, N))), S;
    }, {}),
    cancel: (S) => {
      for (let w = 0; w < dn.length; w++) s[dn[w]].cancel(S);
    },
    state: r,
    steps: s,
  };
}
const {
    schedule: H,
    cancel: Ge,
    state: le,
    steps: zn,
  } = wo(typeof requestAnimationFrame < 'u' ? requestAnimationFrame : de, !0),
  So = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
  au = 1e-7,
  lu = 12;
function cu(e, t, n, i, r) {
  let o,
    s,
    a = 0;
  do (s = t + (n - t) / 2), (o = So(s, i, r) - e), o > 0 ? (n = s) : (t = s);
  while (Math.abs(o) > au && ++a < lu);
  return s;
}
function Zt(e, t, n, i) {
  if (e === t && n === i) return de;
  const r = (o) => cu(o, 0, 1, e, n);
  return (o) => (o === 0 || o === 1 ? o : So(r(o), t, i));
}
const Co = (e) => (t) => (t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2),
  Ro = (e) => (t) => 1 - e(1 - t),
  Eo = Zt(0.33, 1.53, 0.69, 0.99),
  Vi = Ro(Eo),
  Mo = Co(Vi),
  Ao = (e) => ((e *= 2) < 1 ? 0.5 * Vi(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1)))),
  Li = (e) => 1 - Math.sin(Math.acos(e)),
  Do = Ro(Li),
  Vo = Co(Li),
  Lo = (e) => /^0[^.\s]+$/u.test(e);
function uu(e) {
  return typeof e == 'number' ? e === 0 : e !== null ? e === 'none' || e === '0' || Lo(e) : !0;
}
let Fo = de;
const ko = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),
  jo = (e) => (t) => typeof t == 'string' && t.startsWith(e),
  Io = jo('--'),
  hu = jo('var(--'),
  Fi = (e) => (hu(e) ? du.test(e.split('/*')[0].trim()) : !1),
  du = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
  fu = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function pu(e) {
  const t = fu.exec(e);
  if (!t) return [,];
  const [, n, i, r] = t;
  return [`--${n ?? i}`, r];
}
function Oo(e, t, n = 1) {
  const [i, r] = pu(e);
  if (!i) return;
  const o = window.getComputedStyle(t).getPropertyValue(i);
  if (o) {
    const s = o.trim();
    return ko(s) ? parseFloat(s) : s;
  }
  return Fi(r) ? Oo(r, t, n + 1) : r;
}
const Ye = (e, t, n) => (n > t ? t : n < e ? e : n),
  Ct = { test: (e) => typeof e == 'number', parse: parseFloat, transform: (e) => e },
  Wt = { ...Ct, transform: (e) => Ye(0, 1, e) },
  fn = { ...Ct, default: 1 },
  Jt = (e) => ({
    test: (t) => typeof t == 'string' && t.endsWith(e) && t.split(' ').length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  Ke = Jt('deg'),
  Se = Jt('%'),
  F = Jt('px'),
  mu = Jt('vh'),
  gu = Jt('vw'),
  Nr = { ...Se, parse: (e) => Se.parse(e) / 100, transform: (e) => Se.transform(e * 100) },
  vu = new Set([
    'width',
    'height',
    'top',
    'left',
    'right',
    'bottom',
    'x',
    'y',
    'translateX',
    'translateY',
  ]),
  _r = (e) => e === Ct || e === F,
  $r = (e, t) => parseFloat(e.split(', ')[t]),
  zr =
    (e, t) =>
    (n, { transform: i }) => {
      if (i === 'none' || !i) return 0;
      const r = i.match(/^matrix3d\((.+)\)$/u);
      if (r) return $r(r[1], t);
      {
        const o = i.match(/^matrix\((.+)\)$/u);
        return o ? $r(o[1], e) : 0;
      }
    },
  yu = new Set(['x', 'y', 'z']),
  xu = qt.filter((e) => !yu.has(e));
function bu(e) {
  const t = [];
  return (
    xu.forEach((n) => {
      const i = e.getValue(n);
      i !== void 0 && (t.push([n, i.get()]), i.set(n.startsWith('scale') ? 1 : 0));
    }),
    t
  );
}
const Tt = {
  width: ({ x: e }, { paddingLeft: t = '0', paddingRight: n = '0' }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = '0', paddingBottom: n = '0' }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  x: zr(4, 13),
  y: zr(5, 14),
};
Tt.translateX = Tt.x;
Tt.translateY = Tt.y;
const Bo = (e) => (t) => t.test(e),
  Pu = { test: (e) => e === 'auto', parse: (e) => e },
  Uo = [Ct, F, Se, Ke, gu, mu, Pu],
  Wr = (e) => Uo.find(Bo(e)),
  ct = new Set();
let ci = !1,
  ui = !1;
function No() {
  if (ui) {
    const e = Array.from(ct).filter((i) => i.needsMeasurement),
      t = new Set(e.map((i) => i.element)),
      n = new Map();
    t.forEach((i) => {
      const r = bu(i);
      r.length && (n.set(i, r), i.render());
    }),
      e.forEach((i) => i.measureInitialState()),
      t.forEach((i) => {
        i.render();
        const r = n.get(i);
        r &&
          r.forEach(([o, s]) => {
            var a;
            (a = i.getValue(o)) === null || a === void 0 || a.set(s);
          });
      }),
      e.forEach((i) => i.measureEndState()),
      e.forEach((i) => {
        i.suspendedScrollY !== void 0 && window.scrollTo(0, i.suspendedScrollY);
      });
  }
  (ui = !1), (ci = !1), ct.forEach((e) => e.complete()), ct.clear();
}
function _o() {
  ct.forEach((e) => {
    e.readKeyframes(), e.needsMeasurement && (ui = !0);
  });
}
function Tu() {
  _o(), No();
}
class ki {
  constructor(t, n, i, r, o, s = !1) {
    (this.isComplete = !1),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.isScheduled = !1),
      (this.unresolvedKeyframes = [...t]),
      (this.onComplete = n),
      (this.name = i),
      (this.motionValue = r),
      (this.element = o),
      (this.isAsync = s);
  }
  scheduleResolve() {
    (this.isScheduled = !0),
      this.isAsync
        ? (ct.add(this), ci || ((ci = !0), H.read(_o), H.resolveKeyframes(No)))
        : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, name: n, element: i, motionValue: r } = this;
    for (let o = 0; o < t.length; o++)
      if (t[o] === null)
        if (o === 0) {
          const s = r == null ? void 0 : r.get(),
            a = t[t.length - 1];
          if (s !== void 0) t[0] = s;
          else if (i && n) {
            const l = i.readValue(n, a);
            l != null && (t[0] = l);
          }
          t[0] === void 0 && (t[0] = a), r && s === void 0 && r.set(t[0]);
        } else t[o] = t[o - 1];
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete() {
    (this.isComplete = !0),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
      ct.delete(this);
  }
  cancel() {
    this.isComplete || ((this.isScheduled = !1), ct.delete(this));
  }
  resume() {
    this.isComplete || this.scheduleResolve();
  }
}
const Ot = (e) => Math.round(e * 1e5) / 1e5,
  ji = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function wu(e) {
  return e == null;
}
const Su =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  Ii = (e, t) => (n) =>
    !!(
      (typeof n == 'string' && Su.test(n) && n.startsWith(e)) ||
      (t && !wu(n) && Object.prototype.hasOwnProperty.call(n, t))
    ),
  $o = (e, t, n) => (i) => {
    if (typeof i != 'string') return i;
    const [r, o, s, a] = i.match(ji);
    return {
      [e]: parseFloat(r),
      [t]: parseFloat(o),
      [n]: parseFloat(s),
      alpha: a !== void 0 ? parseFloat(a) : 1,
    };
  },
  Cu = (e) => Ye(0, 255, e),
  Wn = { ...Ct, transform: (e) => Math.round(Cu(e)) },
  at = {
    test: Ii('rgb', 'red'),
    parse: $o('red', 'green', 'blue'),
    transform: ({ red: e, green: t, blue: n, alpha: i = 1 }) =>
      'rgba(' +
      Wn.transform(e) +
      ', ' +
      Wn.transform(t) +
      ', ' +
      Wn.transform(n) +
      ', ' +
      Ot(Wt.transform(i)) +
      ')',
  };
function Ru(e) {
  let t = '',
    n = '',
    i = '',
    r = '';
  return (
    e.length > 5
      ? ((t = e.substring(1, 3)),
        (n = e.substring(3, 5)),
        (i = e.substring(5, 7)),
        (r = e.substring(7, 9)))
      : ((t = e.substring(1, 2)),
        (n = e.substring(2, 3)),
        (i = e.substring(3, 4)),
        (r = e.substring(4, 5)),
        (t += t),
        (n += n),
        (i += i),
        (r += r)),
    {
      red: parseInt(t, 16),
      green: parseInt(n, 16),
      blue: parseInt(i, 16),
      alpha: r ? parseInt(r, 16) / 255 : 1,
    }
  );
}
const hi = { test: Ii('#'), parse: Ru, transform: at.transform },
  vt = {
    test: Ii('hsl', 'hue'),
    parse: $o('hue', 'saturation', 'lightness'),
    transform: ({ hue: e, saturation: t, lightness: n, alpha: i = 1 }) =>
      'hsla(' +
      Math.round(e) +
      ', ' +
      Se.transform(Ot(t)) +
      ', ' +
      Se.transform(Ot(n)) +
      ', ' +
      Ot(Wt.transform(i)) +
      ')',
  },
  ue = {
    test: (e) => at.test(e) || hi.test(e) || vt.test(e),
    parse: (e) => (at.test(e) ? at.parse(e) : vt.test(e) ? vt.parse(e) : hi.parse(e)),
    transform: (e) =>
      typeof e == 'string' ? e : e.hasOwnProperty('red') ? at.transform(e) : vt.transform(e),
  },
  Eu =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function Mu(e) {
  var t, n;
  return (
    isNaN(e) &&
    typeof e == 'string' &&
    (((t = e.match(ji)) === null || t === void 0 ? void 0 : t.length) || 0) +
      (((n = e.match(Eu)) === null || n === void 0 ? void 0 : n.length) || 0) >
      0
  );
}
const zo = 'number',
  Wo = 'color',
  Au = 'var',
  Du = 'var(',
  Kr = '${}',
  Vu =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Kt(e) {
  const t = e.toString(),
    n = [],
    i = { color: [], number: [], var: [] },
    r = [];
  let o = 0;
  const a = t
    .replace(
      Vu,
      (l) => (
        ue.test(l)
          ? (i.color.push(o), r.push(Wo), n.push(ue.parse(l)))
          : l.startsWith(Du)
            ? (i.var.push(o), r.push(Au), n.push(l))
            : (i.number.push(o), r.push(zo), n.push(parseFloat(l))),
        ++o,
        Kr
      )
    )
    .split(Kr);
  return { values: n, split: a, indexes: i, types: r };
}
function Ko(e) {
  return Kt(e).values;
}
function Ho(e) {
  const { split: t, types: n } = Kt(e),
    i = t.length;
  return (r) => {
    let o = '';
    for (let s = 0; s < i; s++)
      if (((o += t[s]), r[s] !== void 0)) {
        const a = n[s];
        a === zo ? (o += Ot(r[s])) : a === Wo ? (o += ue.transform(r[s])) : (o += r[s]);
      }
    return o;
  };
}
const Lu = (e) => (typeof e == 'number' ? 0 : e);
function Fu(e) {
  const t = Ko(e);
  return Ho(e)(t.map(Lu));
}
const Xe = { test: Mu, parse: Ko, createTransformer: Ho, getAnimatableNone: Fu },
  ku = new Set(['brightness', 'contrast', 'saturate', 'opacity']);
function ju(e) {
  const [t, n] = e.slice(0, -1).split('(');
  if (t === 'drop-shadow') return e;
  const [i] = n.match(ji) || [];
  if (!i) return e;
  const r = n.replace(i, '');
  let o = ku.has(t) ? 1 : 0;
  return i !== n && (o *= 100), t + '(' + o + r + ')';
}
const Iu = /\b([a-z-]*)\(.*?\)/gu,
  di = {
    ...Xe,
    getAnimatableNone: (e) => {
      const t = e.match(Iu);
      return t ? t.map(ju).join(' ') : e;
    },
  },
  Ou = {
    borderWidth: F,
    borderTopWidth: F,
    borderRightWidth: F,
    borderBottomWidth: F,
    borderLeftWidth: F,
    borderRadius: F,
    radius: F,
    borderTopLeftRadius: F,
    borderTopRightRadius: F,
    borderBottomRightRadius: F,
    borderBottomLeftRadius: F,
    width: F,
    maxWidth: F,
    height: F,
    maxHeight: F,
    top: F,
    right: F,
    bottom: F,
    left: F,
    padding: F,
    paddingTop: F,
    paddingRight: F,
    paddingBottom: F,
    paddingLeft: F,
    margin: F,
    marginTop: F,
    marginRight: F,
    marginBottom: F,
    marginLeft: F,
    backgroundPositionX: F,
    backgroundPositionY: F,
  },
  Bu = {
    rotate: Ke,
    rotateX: Ke,
    rotateY: Ke,
    rotateZ: Ke,
    scale: fn,
    scaleX: fn,
    scaleY: fn,
    scaleZ: fn,
    skew: Ke,
    skewX: Ke,
    skewY: Ke,
    distance: F,
    translateX: F,
    translateY: F,
    translateZ: F,
    x: F,
    y: F,
    z: F,
    perspective: F,
    transformPerspective: F,
    opacity: Wt,
    originX: Nr,
    originY: Nr,
    originZ: F,
  },
  Hr = { ...Ct, transform: Math.round },
  Oi = { ...Ou, ...Bu, zIndex: Hr, size: F, fillOpacity: Wt, strokeOpacity: Wt, numOctaves: Hr },
  Uu = {
    ...Oi,
    color: ue,
    backgroundColor: ue,
    outlineColor: ue,
    fill: ue,
    stroke: ue,
    borderColor: ue,
    borderTopColor: ue,
    borderRightColor: ue,
    borderBottomColor: ue,
    borderLeftColor: ue,
    filter: di,
    WebkitFilter: di,
  },
  Bi = (e) => Uu[e];
function Go(e, t) {
  let n = Bi(e);
  return n !== di && (n = Xe), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0;
}
const Nu = new Set(['auto', 'none', '0']);
function _u(e, t, n) {
  let i = 0,
    r;
  for (; i < e.length && !r; ) {
    const o = e[i];
    typeof o == 'string' && !Nu.has(o) && Kt(o).values.length && (r = e[i]), i++;
  }
  if (r && n) for (const o of t) e[o] = Go(n, r);
}
class Yo extends ki {
  constructor(t, n, i, r, o) {
    super(t, n, i, r, o, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, element: n, name: i } = this;
    if (!n || !n.current) return;
    super.readKeyframes();
    for (let l = 0; l < t.length; l++) {
      let c = t[l];
      if (typeof c == 'string' && ((c = c.trim()), Fi(c))) {
        const u = Oo(c, n.current);
        u !== void 0 && (t[l] = u), l === t.length - 1 && (this.finalKeyframe = c);
      }
    }
    if ((this.resolveNoneKeyframes(), !vu.has(i) || t.length !== 2)) return;
    const [r, o] = t,
      s = Wr(r),
      a = Wr(o);
    if (s !== a)
      if (_r(s) && _r(a))
        for (let l = 0; l < t.length; l++) {
          const c = t[l];
          typeof c == 'string' && (t[l] = parseFloat(c));
        }
      else this.needsMeasurement = !0;
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: t, name: n } = this,
      i = [];
    for (let r = 0; r < t.length; r++) uu(t[r]) && i.push(r);
    i.length && _u(t, i, n);
  }
  measureInitialState() {
    const { element: t, unresolvedKeyframes: n, name: i } = this;
    if (!t || !t.current) return;
    i === 'height' && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = Tt[i](t.measureViewportBox(), window.getComputedStyle(t.current))),
      (n[0] = this.measuredOrigin);
    const r = n[n.length - 1];
    r !== void 0 && t.getValue(i, r).jump(r, !1);
  }
  measureEndState() {
    var t;
    const { element: n, name: i, unresolvedKeyframes: r } = this;
    if (!n || !n.current) return;
    const o = n.getValue(i);
    o && o.jump(this.measuredOrigin, !1);
    const s = r.length - 1,
      a = r[s];
    (r[s] = Tt[i](n.measureViewportBox(), window.getComputedStyle(n.current))),
      a !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = a),
      !((t = this.removedTransforms) === null || t === void 0) &&
        t.length &&
        this.removedTransforms.forEach(([l, c]) => {
          n.getValue(l).set(c);
        }),
      this.resolveNoneKeyframes();
  }
}
function Ui(e) {
  return typeof e == 'function';
}
let vn;
function $u() {
  vn = void 0;
}
const Ce = {
    now: () => (
      vn === void 0 &&
        Ce.set(le.isProcessing || iu.useManualTiming ? le.timestamp : performance.now()),
      vn
    ),
    set: (e) => {
      (vn = e), queueMicrotask($u);
    },
  },
  Gr = (e, t) =>
    t === 'zIndex'
      ? !1
      : !!(
          typeof e == 'number' ||
          Array.isArray(e) ||
          (typeof e == 'string' && (Xe.test(e) || e === '0') && !e.startsWith('url('))
        );
function zu(e) {
  const t = e[0];
  if (e.length === 1) return !0;
  for (let n = 0; n < e.length; n++) if (e[n] !== t) return !0;
}
function Wu(e, t, n, i) {
  const r = e[0];
  if (r === null) return !1;
  if (t === 'display' || t === 'visibility') return !0;
  const o = e[e.length - 1],
    s = Gr(r, t),
    a = Gr(o, t);
  return !s || !a ? !1 : zu(e) || ((n === 'spring' || Ui(n)) && i);
}
const Ku = 40;
class Xo {
  constructor({
    autoplay: t = !0,
    delay: n = 0,
    type: i = 'keyframes',
    repeat: r = 0,
    repeatDelay: o = 0,
    repeatType: s = 'loop',
    ...a
  }) {
    (this.isStopped = !1),
      (this.hasAttemptedResolve = !1),
      (this.createdAt = Ce.now()),
      (this.options = {
        autoplay: t,
        delay: n,
        type: i,
        repeat: r,
        repeatDelay: o,
        repeatType: s,
        ...a,
      }),
      this.updateFinishedPromise();
  }
  calcStartTime() {
    return this.resolvedAt
      ? this.resolvedAt - this.createdAt > Ku
        ? this.resolvedAt
        : this.createdAt
      : this.createdAt;
  }
  get resolved() {
    return !this._resolved && !this.hasAttemptedResolve && Tu(), this._resolved;
  }
  onKeyframesResolved(t, n) {
    (this.resolvedAt = Ce.now()), (this.hasAttemptedResolve = !0);
    const {
      name: i,
      type: r,
      velocity: o,
      delay: s,
      onComplete: a,
      onUpdate: l,
      isGenerator: c,
    } = this.options;
    if (!c && !Wu(t, i, r, o))
      if (s) this.options.duration = 0;
      else {
        l == null || l(Ln(t, this.options, n)), a == null || a(), this.resolveFinishedPromise();
        return;
      }
    const u = this.initPlayback(t, n);
    u !== !1 &&
      ((this._resolved = { keyframes: t, finalKeyframe: n, ...u }), this.onPostResolved());
  }
  onPostResolved() {}
  then(t, n) {
    return this.currentFinishedPromise.then(t, n);
  }
  updateFinishedPromise() {
    this.currentFinishedPromise = new Promise((t) => {
      this.resolveFinishedPromise = t;
    });
  }
}
function qo(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const Hu = 5;
function Zo(e, t, n) {
  const i = Math.max(t - Hu, 0);
  return qo(n - e(i), t - i);
}
const Kn = 0.001,
  Gu = 0.01,
  Yu = 10,
  Xu = 0.05,
  qu = 1;
function Zu({ duration: e = 800, bounce: t = 0.25, velocity: n = 0, mass: i = 1 }) {
  let r,
    o,
    s = 1 - t;
  (s = Ye(Xu, qu, s)),
    (e = Ye(Gu, Yu, Ie(e))),
    s < 1
      ? ((r = (c) => {
          const u = c * s,
            h = u * e,
            d = u - n,
            p = fi(c, s),
            v = Math.exp(-h);
          return Kn - (d / p) * v;
        }),
        (o = (c) => {
          const h = c * s * e,
            d = h * n + n,
            p = Math.pow(s, 2) * Math.pow(c, 2) * e,
            v = Math.exp(-h),
            b = fi(Math.pow(c, 2), s);
          return ((-r(c) + Kn > 0 ? -1 : 1) * ((d - p) * v)) / b;
        }))
      : ((r = (c) => {
          const u = Math.exp(-c * e),
            h = (c - n) * e + 1;
          return -Kn + u * h;
        }),
        (o = (c) => {
          const u = Math.exp(-c * e),
            h = (n - c) * (e * e);
          return u * h;
        }));
  const a = 5 / e,
    l = Qu(r, o, a);
  if (((e = je(e)), isNaN(l))) return { stiffness: 100, damping: 10, duration: e };
  {
    const c = Math.pow(l, 2) * i;
    return { stiffness: c, damping: s * 2 * Math.sqrt(i * c), duration: e };
  }
}
const Ju = 12;
function Qu(e, t, n) {
  let i = n;
  for (let r = 1; r < Ju; r++) i = i - e(i) / t(i);
  return i;
}
function fi(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const eh = ['duration', 'bounce'],
  th = ['stiffness', 'damping', 'mass'];
function Yr(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function nh(e) {
  let t = { velocity: 0, stiffness: 100, damping: 10, mass: 1, isResolvedFromDuration: !1, ...e };
  if (!Yr(e, th) && Yr(e, eh)) {
    const n = Zu(e);
    (t = { ...t, ...n, mass: 1 }), (t.isResolvedFromDuration = !0);
  }
  return t;
}
function Jo({ keyframes: e, restDelta: t, restSpeed: n, ...i }) {
  const r = e[0],
    o = e[e.length - 1],
    s = { done: !1, value: r },
    {
      stiffness: a,
      damping: l,
      mass: c,
      duration: u,
      velocity: h,
      isResolvedFromDuration: d,
    } = nh({ ...i, velocity: -Ie(i.velocity || 0) }),
    p = h || 0,
    v = l / (2 * Math.sqrt(a * c)),
    b = o - r,
    P = Ie(Math.sqrt(a / c)),
    S = Math.abs(b) < 5;
  n || (n = S ? 0.01 : 2), t || (t = S ? 0.005 : 0.5);
  let w;
  if (v < 1) {
    const C = fi(P, v);
    w = (M) => {
      const k = Math.exp(-v * P * M);
      return o - k * (((p + v * P * b) / C) * Math.sin(C * M) + b * Math.cos(C * M));
    };
  } else if (v === 1) w = (C) => o - Math.exp(-P * C) * (b + (p + P * b) * C);
  else {
    const C = P * Math.sqrt(v * v - 1);
    w = (M) => {
      const k = Math.exp(-v * P * M),
        N = Math.min(C * M, 300);
      return o - (k * ((p + v * P * b) * Math.sinh(N) + C * b * Math.cosh(N))) / C;
    };
  }
  return {
    calculatedDuration: (d && u) || null,
    next: (C) => {
      const M = w(C);
      if (d) s.done = C >= u;
      else {
        let k = 0;
        v < 1 && (k = C === 0 ? je(p) : Zo(w, C, M));
        const N = Math.abs(k) <= n,
          re = Math.abs(o - M) <= t;
        s.done = N && re;
      }
      return (s.value = s.done ? o : M), s;
    },
  };
}
function Xr({
  keyframes: e,
  velocity: t = 0,
  power: n = 0.8,
  timeConstant: i = 325,
  bounceDamping: r = 10,
  bounceStiffness: o = 500,
  modifyTarget: s,
  min: a,
  max: l,
  restDelta: c = 0.5,
  restSpeed: u,
}) {
  const h = e[0],
    d = { done: !1, value: h },
    p = (g) => (a !== void 0 && g < a) || (l !== void 0 && g > l),
    v = (g) => (a === void 0 ? l : l === void 0 || Math.abs(a - g) < Math.abs(l - g) ? a : l);
  let b = n * t;
  const P = h + b,
    S = s === void 0 ? P : s(P);
  S !== P && (b = S - h);
  const w = (g) => -b * Math.exp(-g / i),
    C = (g) => S + w(g),
    M = (g) => {
      const j = w(g),
        O = C(g);
      (d.done = Math.abs(j) <= c), (d.value = d.done ? S : O);
    };
  let k, N;
  const re = (g) => {
    p(d.value) &&
      ((k = g),
      (N = Jo({
        keyframes: [d.value, v(d.value)],
        velocity: Zo(C, g, d.value),
        damping: r,
        stiffness: o,
        restDelta: c,
        restSpeed: u,
      })));
  };
  return (
    re(0),
    {
      calculatedDuration: null,
      next: (g) => {
        let j = !1;
        return (
          !N && k === void 0 && ((j = !0), M(g), re(g)),
          k !== void 0 && g >= k ? N.next(g - k) : (!j && M(g), d)
        );
      },
    }
  );
}
const ih = Zt(0.42, 0, 1, 1),
  rh = Zt(0, 0, 0.58, 1),
  Qo = Zt(0.42, 0, 0.58, 1),
  sh = (e) => Array.isArray(e) && typeof e[0] != 'number',
  oh = {
    linear: de,
    easeIn: ih,
    easeInOut: Qo,
    easeOut: rh,
    circIn: Li,
    circInOut: Vo,
    circOut: Do,
    backIn: Vi,
    backInOut: Mo,
    backOut: Eo,
    anticipate: Ao,
  },
  qr = (e) => {
    if (Array.isArray(e)) {
      Fo(e.length === 4);
      const [t, n, i, r] = e;
      return Zt(t, n, i, r);
    } else if (typeof e == 'string') return oh[e];
    return e;
  },
  ah = (e, t) => (n) => t(e(n)),
  Oe = (...e) => e.reduce(ah),
  wt = (e, t, n) => {
    const i = t - e;
    return i === 0 ? 1 : (n - e) / i;
  },
  Z = (e, t, n) => e + (t - e) * n;
function Hn(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
  );
}
function lh({ hue: e, saturation: t, lightness: n, alpha: i }) {
  (e /= 360), (t /= 100), (n /= 100);
  let r = 0,
    o = 0,
    s = 0;
  if (!t) r = o = s = n;
  else {
    const a = n < 0.5 ? n * (1 + t) : n + t - n * t,
      l = 2 * n - a;
    (r = Hn(l, a, e + 1 / 3)), (o = Hn(l, a, e)), (s = Hn(l, a, e - 1 / 3));
  }
  return {
    red: Math.round(r * 255),
    green: Math.round(o * 255),
    blue: Math.round(s * 255),
    alpha: i,
  };
}
function Pn(e, t) {
  return (n) => (n > 0 ? t : e);
}
const Gn = (e, t, n) => {
    const i = e * e,
      r = n * (t * t - i) + i;
    return r < 0 ? 0 : Math.sqrt(r);
  },
  ch = [hi, at, vt],
  uh = (e) => ch.find((t) => t.test(e));
function Zr(e) {
  const t = uh(e);
  if (!t) return !1;
  let n = t.parse(e);
  return t === vt && (n = lh(n)), n;
}
const Jr = (e, t) => {
    const n = Zr(e),
      i = Zr(t);
    if (!n || !i) return Pn(e, t);
    const r = { ...n };
    return (o) => (
      (r.red = Gn(n.red, i.red, o)),
      (r.green = Gn(n.green, i.green, o)),
      (r.blue = Gn(n.blue, i.blue, o)),
      (r.alpha = Z(n.alpha, i.alpha, o)),
      at.transform(r)
    );
  },
  pi = new Set(['none', 'hidden']);
function hh(e, t) {
  return pi.has(e) ? (n) => (n <= 0 ? e : t) : (n) => (n >= 1 ? t : e);
}
function dh(e, t) {
  return (n) => Z(e, t, n);
}
function Ni(e) {
  return typeof e == 'number'
    ? dh
    : typeof e == 'string'
      ? Fi(e)
        ? Pn
        : ue.test(e)
          ? Jr
          : mh
      : Array.isArray(e)
        ? ea
        : typeof e == 'object'
          ? ue.test(e)
            ? Jr
            : fh
          : Pn;
}
function ea(e, t) {
  const n = [...e],
    i = n.length,
    r = e.map((o, s) => Ni(o)(o, t[s]));
  return (o) => {
    for (let s = 0; s < i; s++) n[s] = r[s](o);
    return n;
  };
}
function fh(e, t) {
  const n = { ...e, ...t },
    i = {};
  for (const r in n) e[r] !== void 0 && t[r] !== void 0 && (i[r] = Ni(e[r])(e[r], t[r]));
  return (r) => {
    for (const o in i) n[o] = i[o](r);
    return n;
  };
}
function ph(e, t) {
  var n;
  const i = [],
    r = { color: 0, var: 0, number: 0 };
  for (let o = 0; o < t.values.length; o++) {
    const s = t.types[o],
      a = e.indexes[s][r[s]],
      l = (n = e.values[a]) !== null && n !== void 0 ? n : 0;
    (i[o] = l), r[s]++;
  }
  return i;
}
const mh = (e, t) => {
  const n = Xe.createTransformer(t),
    i = Kt(e),
    r = Kt(t);
  return i.indexes.var.length === r.indexes.var.length &&
    i.indexes.color.length === r.indexes.color.length &&
    i.indexes.number.length >= r.indexes.number.length
    ? (pi.has(e) && !r.values.length) || (pi.has(t) && !i.values.length)
      ? hh(e, t)
      : Oe(ea(ph(i, r), r.values), n)
    : Pn(e, t);
};
function ta(e, t, n) {
  return typeof e == 'number' && typeof t == 'number' && typeof n == 'number'
    ? Z(e, t, n)
    : Ni(e)(e, t);
}
function gh(e, t, n) {
  const i = [],
    r = n || ta,
    o = e.length - 1;
  for (let s = 0; s < o; s++) {
    let a = r(e[s], e[s + 1]);
    if (t) {
      const l = Array.isArray(t) ? t[s] || de : t;
      a = Oe(l, a);
    }
    i.push(a);
  }
  return i;
}
function vh(e, t, { clamp: n = !0, ease: i, mixer: r } = {}) {
  const o = e.length;
  if ((Fo(o === t.length), o === 1)) return () => t[0];
  if (o === 2 && e[0] === e[1]) return () => t[1];
  e[0] > e[o - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  const s = gh(t, i, r),
    a = s.length,
    l = (c) => {
      let u = 0;
      if (a > 1) for (; u < e.length - 2 && !(c < e[u + 1]); u++);
      const h = wt(e[u], e[u + 1], c);
      return s[u](h);
    };
  return n ? (c) => l(Ye(e[0], e[o - 1], c)) : l;
}
function yh(e, t) {
  const n = e[e.length - 1];
  for (let i = 1; i <= t; i++) {
    const r = wt(0, t, i);
    e.push(Z(n, 1, r));
  }
}
function xh(e) {
  const t = [0];
  return yh(t, e.length - 1), t;
}
function bh(e, t) {
  return e.map((n) => n * t);
}
function Ph(e, t) {
  return e.map(() => t || Qo).splice(0, e.length - 1);
}
function Tn({ duration: e = 300, keyframes: t, times: n, ease: i = 'easeInOut' }) {
  const r = sh(i) ? i.map(qr) : qr(i),
    o = { done: !1, value: t[0] },
    s = bh(n && n.length === t.length ? n : xh(t), e),
    a = vh(s, t, { ease: Array.isArray(r) ? r : Ph(t, r) });
  return { calculatedDuration: e, next: (l) => ((o.value = a(l)), (o.done = l >= e), o) };
}
const Qr = 2e4;
function Th(e) {
  let t = 0;
  const n = 50;
  let i = e.next(t);
  for (; !i.done && t < Qr; ) (t += n), (i = e.next(t));
  return t >= Qr ? 1 / 0 : t;
}
const wh = (e) => {
    const t = ({ timestamp: n }) => e(n);
    return {
      start: () => H.update(t, !0),
      stop: () => Ge(t),
      now: () => (le.isProcessing ? le.timestamp : Ce.now()),
    };
  },
  Sh = { decay: Xr, inertia: Xr, tween: Tn, keyframes: Tn, spring: Jo },
  Ch = (e) => e / 100;
class _i extends Xo {
  constructor(t) {
    super(t),
      (this.holdTime = null),
      (this.cancelTime = null),
      (this.currentTime = 0),
      (this.playbackSpeed = 1),
      (this.pendingPlayState = 'running'),
      (this.startTime = null),
      (this.state = 'idle'),
      (this.stop = () => {
        if ((this.resolver.cancel(), (this.isStopped = !0), this.state === 'idle')) return;
        this.teardown();
        const { onStop: l } = this.options;
        l && l();
      });
    const { name: n, motionValue: i, element: r, keyframes: o } = this.options,
      s = (r == null ? void 0 : r.KeyframeResolver) || ki,
      a = (l, c) => this.onKeyframesResolved(l, c);
    (this.resolver = new s(o, a, n, i, r)), this.resolver.scheduleResolve();
  }
  initPlayback(t) {
    const {
        type: n = 'keyframes',
        repeat: i = 0,
        repeatDelay: r = 0,
        repeatType: o,
        velocity: s = 0,
      } = this.options,
      a = Ui(n) ? n : Sh[n] || Tn;
    let l, c;
    a !== Tn && typeof t[0] != 'number' && ((l = Oe(Ch, ta(t[0], t[1]))), (t = [0, 100]));
    const u = a({ ...this.options, keyframes: t });
    o === 'mirror' && (c = a({ ...this.options, keyframes: [...t].reverse(), velocity: -s })),
      u.calculatedDuration === null && (u.calculatedDuration = Th(u));
    const { calculatedDuration: h } = u,
      d = h + r,
      p = d * (i + 1) - r;
    return {
      generator: u,
      mirroredGenerator: c,
      mapPercentToKeyframes: l,
      calculatedDuration: h,
      resolvedDuration: d,
      totalDuration: p,
    };
  }
  onPostResolved() {
    const { autoplay: t = !0 } = this.options;
    this.play(),
      this.pendingPlayState === 'paused' || !t
        ? this.pause()
        : (this.state = this.pendingPlayState);
  }
  tick(t, n = !1) {
    const { resolved: i } = this;
    if (!i) {
      const { keyframes: g } = this.options;
      return { done: !0, value: g[g.length - 1] };
    }
    const {
      finalKeyframe: r,
      generator: o,
      mirroredGenerator: s,
      mapPercentToKeyframes: a,
      keyframes: l,
      calculatedDuration: c,
      totalDuration: u,
      resolvedDuration: h,
    } = i;
    if (this.startTime === null) return o.next(0);
    const { delay: d, repeat: p, repeatType: v, repeatDelay: b, onUpdate: P } = this.options;
    this.speed > 0
      ? (this.startTime = Math.min(this.startTime, t))
      : this.speed < 0 && (this.startTime = Math.min(t - u / this.speed, this.startTime)),
      n
        ? (this.currentTime = t)
        : this.holdTime !== null
          ? (this.currentTime = this.holdTime)
          : (this.currentTime = Math.round(t - this.startTime) * this.speed);
    const S = this.currentTime - d * (this.speed >= 0 ? 1 : -1),
      w = this.speed >= 0 ? S < 0 : S > u;
    (this.currentTime = Math.max(S, 0)),
      this.state === 'finished' && this.holdTime === null && (this.currentTime = u);
    let C = this.currentTime,
      M = o;
    if (p) {
      const g = Math.min(this.currentTime, u) / h;
      let j = Math.floor(g),
        O = g % 1;
      !O && g >= 1 && (O = 1),
        O === 1 && j--,
        (j = Math.min(j, p + 1)),
        !!(j % 2) &&
          (v === 'reverse' ? ((O = 1 - O), b && (O -= b / h)) : v === 'mirror' && (M = s)),
        (C = Ye(0, 1, O) * h);
    }
    const k = w ? { done: !1, value: l[0] } : M.next(C);
    a && (k.value = a(k.value));
    let { done: N } = k;
    !w && c !== null && (N = this.speed >= 0 ? this.currentTime >= u : this.currentTime <= 0);
    const re =
      this.holdTime === null && (this.state === 'finished' || (this.state === 'running' && N));
    return (
      re && r !== void 0 && (k.value = Ln(l, this.options, r)),
      P && P(k.value),
      re && this.finish(),
      k
    );
  }
  get duration() {
    const { resolved: t } = this;
    return t ? Ie(t.calculatedDuration) : 0;
  }
  get time() {
    return Ie(this.currentTime);
  }
  set time(t) {
    (t = je(t)),
      (this.currentTime = t),
      this.holdTime !== null || this.speed === 0
        ? (this.holdTime = t)
        : this.driver && (this.startTime = this.driver.now() - t / this.speed);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(t) {
    const n = this.playbackSpeed !== t;
    (this.playbackSpeed = t), n && (this.time = Ie(this.currentTime));
  }
  play() {
    if ((this.resolver.isScheduled || this.resolver.resume(), !this._resolved)) {
      this.pendingPlayState = 'running';
      return;
    }
    if (this.isStopped) return;
    const { driver: t = wh, onPlay: n, startTime: i } = this.options;
    this.driver || (this.driver = t((o) => this.tick(o))), n && n();
    const r = this.driver.now();
    this.holdTime !== null
      ? (this.startTime = r - this.holdTime)
      : this.startTime
        ? this.state === 'finished' && (this.startTime = r)
        : (this.startTime = i ?? this.calcStartTime()),
      this.state === 'finished' && this.updateFinishedPromise(),
      (this.cancelTime = this.startTime),
      (this.holdTime = null),
      (this.state = 'running'),
      this.driver.start();
  }
  pause() {
    var t;
    if (!this._resolved) {
      this.pendingPlayState = 'paused';
      return;
    }
    (this.state = 'paused'),
      (this.holdTime = (t = this.currentTime) !== null && t !== void 0 ? t : 0);
  }
  complete() {
    this.state !== 'running' && this.play(),
      (this.pendingPlayState = this.state = 'finished'),
      (this.holdTime = null);
  }
  finish() {
    this.teardown(), (this.state = 'finished');
    const { onComplete: t } = this.options;
    t && t();
  }
  cancel() {
    this.cancelTime !== null && this.tick(this.cancelTime),
      this.teardown(),
      this.updateFinishedPromise();
  }
  teardown() {
    (this.state = 'idle'),
      this.stopDriver(),
      this.resolveFinishedPromise(),
      this.updateFinishedPromise(),
      (this.startTime = this.cancelTime = null),
      this.resolver.cancel();
  }
  stopDriver() {
    this.driver && (this.driver.stop(), (this.driver = void 0));
  }
  sample(t) {
    return (this.startTime = 0), this.tick(t, !0);
  }
}
const na = new Set(['opacity', 'clipPath', 'filter', 'transform']),
  ia = (e) => Array.isArray(e) && typeof e[0] == 'number',
  Rh = 10,
  Eh = (e, t) => {
    let n = '';
    const i = Math.max(Math.round(t / Rh), 2);
    for (let r = 0; r < i; r++) n += e(wt(0, i - 1, r)) + ', ';
    return `linear(${n.substring(0, n.length - 2)})`;
  };
function $i(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const Mh = { linearEasing: void 0 };
function Ah(e, t) {
  const n = $i(e);
  return () => {
    var i;
    return (i = Mh[t]) !== null && i !== void 0 ? i : n();
  };
}
const wn = Ah(() => {
  try {
    document.createElement('div').animate({ opacity: 0 }, { easing: 'linear(0, 1)' });
  } catch {
    return !1;
  }
  return !0;
}, 'linearEasing');
function ra(e) {
  return !!(
    (typeof e == 'function' && wn()) ||
    !e ||
    (typeof e == 'string' && (e in mi || wn())) ||
    ia(e) ||
    (Array.isArray(e) && e.every(ra))
  );
}
const jt = ([e, t, n, i]) => `cubic-bezier(${e}, ${t}, ${n}, ${i})`,
  mi = {
    linear: 'linear',
    ease: 'ease',
    easeIn: 'ease-in',
    easeOut: 'ease-out',
    easeInOut: 'ease-in-out',
    circIn: jt([0, 0.65, 0.55, 1]),
    circOut: jt([0.55, 0, 1, 0.45]),
    backIn: jt([0.31, 0.01, 0.66, -0.59]),
    backOut: jt([0.33, 1.53, 0.69, 0.99]),
  };
function sa(e, t) {
  if (e)
    return typeof e == 'function' && wn()
      ? Eh(e, t)
      : ia(e)
        ? jt(e)
        : Array.isArray(e)
          ? e.map((n) => sa(n, t) || mi.easeOut)
          : mi[e];
}
function Dh(
  e,
  t,
  n,
  { delay: i = 0, duration: r = 300, repeat: o = 0, repeatType: s = 'loop', ease: a, times: l } = {}
) {
  const c = { [t]: n };
  l && (c.offset = l);
  const u = sa(a, r);
  return (
    Array.isArray(u) && (c.easing = u),
    e.animate(c, {
      delay: i,
      duration: r,
      easing: Array.isArray(u) ? 'linear' : u,
      fill: 'both',
      iterations: o + 1,
      direction: s === 'reverse' ? 'alternate' : 'normal',
    })
  );
}
function es(e, t) {
  (e.timeline = t), (e.onfinish = null);
}
const Vh = $i(() => Object.hasOwnProperty.call(Element.prototype, 'animate')),
  Sn = 10,
  Lh = 2e4;
function Fh(e) {
  return Ui(e.type) || e.type === 'spring' || !ra(e.ease);
}
function kh(e, t) {
  const n = new _i({ ...t, keyframes: e, repeat: 0, delay: 0, isGenerator: !0 });
  let i = { done: !1, value: e[0] };
  const r = [];
  let o = 0;
  for (; !i.done && o < Lh; ) (i = n.sample(o)), r.push(i.value), (o += Sn);
  return { times: void 0, keyframes: r, duration: o - Sn, ease: 'linear' };
}
const oa = { anticipate: Ao, backInOut: Mo, circInOut: Vo };
function jh(e) {
  return e in oa;
}
class ts extends Xo {
  constructor(t) {
    super(t);
    const { name: n, motionValue: i, element: r, keyframes: o } = this.options;
    (this.resolver = new Yo(o, (s, a) => this.onKeyframesResolved(s, a), n, i, r)),
      this.resolver.scheduleResolve();
  }
  initPlayback(t, n) {
    var i;
    let {
      duration: r = 300,
      times: o,
      ease: s,
      type: a,
      motionValue: l,
      name: c,
      startTime: u,
    } = this.options;
    if (!(!((i = l.owner) === null || i === void 0) && i.current)) return !1;
    if ((typeof s == 'string' && wn() && jh(s) && (s = oa[s]), Fh(this.options))) {
      const { onComplete: d, onUpdate: p, motionValue: v, element: b, ...P } = this.options,
        S = kh(t, P);
      (t = S.keyframes),
        t.length === 1 && (t[1] = t[0]),
        (r = S.duration),
        (o = S.times),
        (s = S.ease),
        (a = 'keyframes');
    }
    const h = Dh(l.owner.current, c, t, { ...this.options, duration: r, times: o, ease: s });
    return (
      (h.startTime = u ?? this.calcStartTime()),
      this.pendingTimeline
        ? (es(h, this.pendingTimeline), (this.pendingTimeline = void 0))
        : (h.onfinish = () => {
            const { onComplete: d } = this.options;
            l.set(Ln(t, this.options, n)), d && d(), this.cancel(), this.resolveFinishedPromise();
          }),
      { animation: h, duration: r, times: o, type: a, ease: s, keyframes: t }
    );
  }
  get duration() {
    const { resolved: t } = this;
    if (!t) return 0;
    const { duration: n } = t;
    return Ie(n);
  }
  get time() {
    const { resolved: t } = this;
    if (!t) return 0;
    const { animation: n } = t;
    return Ie(n.currentTime || 0);
  }
  set time(t) {
    const { resolved: n } = this;
    if (!n) return;
    const { animation: i } = n;
    i.currentTime = je(t);
  }
  get speed() {
    const { resolved: t } = this;
    if (!t) return 1;
    const { animation: n } = t;
    return n.playbackRate;
  }
  set speed(t) {
    const { resolved: n } = this;
    if (!n) return;
    const { animation: i } = n;
    i.playbackRate = t;
  }
  get state() {
    const { resolved: t } = this;
    if (!t) return 'idle';
    const { animation: n } = t;
    return n.playState;
  }
  get startTime() {
    const { resolved: t } = this;
    if (!t) return null;
    const { animation: n } = t;
    return n.startTime;
  }
  attachTimeline(t) {
    if (!this._resolved) this.pendingTimeline = t;
    else {
      const { resolved: n } = this;
      if (!n) return de;
      const { animation: i } = n;
      es(i, t);
    }
    return de;
  }
  play() {
    if (this.isStopped) return;
    const { resolved: t } = this;
    if (!t) return;
    const { animation: n } = t;
    n.playState === 'finished' && this.updateFinishedPromise(), n.play();
  }
  pause() {
    const { resolved: t } = this;
    if (!t) return;
    const { animation: n } = t;
    n.pause();
  }
  stop() {
    if ((this.resolver.cancel(), (this.isStopped = !0), this.state === 'idle')) return;
    this.resolveFinishedPromise(), this.updateFinishedPromise();
    const { resolved: t } = this;
    if (!t) return;
    const { animation: n, keyframes: i, duration: r, type: o, ease: s, times: a } = t;
    if (n.playState === 'idle' || n.playState === 'finished') return;
    if (this.time) {
      const { motionValue: c, onUpdate: u, onComplete: h, element: d, ...p } = this.options,
        v = new _i({
          ...p,
          keyframes: i,
          duration: r,
          type: o,
          ease: s,
          times: a,
          isGenerator: !0,
        }),
        b = je(this.time);
      c.setWithVelocity(v.sample(b - Sn).value, v.sample(b).value, Sn);
    }
    const { onStop: l } = this.options;
    l && l(), this.cancel();
  }
  complete() {
    const { resolved: t } = this;
    t && t.animation.finish();
  }
  cancel() {
    const { resolved: t } = this;
    t && t.animation.cancel();
  }
  static supports(t) {
    const { motionValue: n, name: i, repeatDelay: r, repeatType: o, damping: s, type: a } = t;
    return (
      Vh() &&
      i &&
      na.has(i) &&
      n &&
      n.owner &&
      n.owner.current instanceof HTMLElement &&
      !n.owner.getProps().onUpdate &&
      !r &&
      o !== 'mirror' &&
      s !== 0 &&
      a !== 'inertia'
    );
  }
}
const Ih = $i(() => window.ScrollTimeline !== void 0);
class Oh {
  constructor(t) {
    (this.stop = () => this.runAll('stop')), (this.animations = t.filter(Boolean));
  }
  then(t, n) {
    return Promise.all(this.animations).then(t).catch(n);
  }
  getAll(t) {
    return this.animations[0][t];
  }
  setAll(t, n) {
    for (let i = 0; i < this.animations.length; i++) this.animations[i][t] = n;
  }
  attachTimeline(t, n) {
    const i = this.animations.map((r) => (Ih() && r.attachTimeline ? r.attachTimeline(t) : n(r)));
    return () => {
      i.forEach((r, o) => {
        r && r(), this.animations[o].stop();
      });
    };
  }
  get time() {
    return this.getAll('time');
  }
  set time(t) {
    this.setAll('time', t);
  }
  get speed() {
    return this.getAll('speed');
  }
  set speed(t) {
    this.setAll('speed', t);
  }
  get startTime() {
    return this.getAll('startTime');
  }
  get duration() {
    let t = 0;
    for (let n = 0; n < this.animations.length; n++) t = Math.max(t, this.animations[n].duration);
    return t;
  }
  runAll(t) {
    this.animations.forEach((n) => n[t]());
  }
  play() {
    this.runAll('play');
  }
  pause() {
    this.runAll('pause');
  }
  cancel() {
    this.runAll('cancel');
  }
  complete() {
    this.runAll('complete');
  }
}
function Bh({
  when: e,
  delay: t,
  delayChildren: n,
  staggerChildren: i,
  staggerDirection: r,
  repeat: o,
  repeatType: s,
  repeatDelay: a,
  from: l,
  elapsed: c,
  ...u
}) {
  return !!Object.keys(u).length;
}
const zi =
    (e, t, n, i = {}, r, o) =>
    (s) => {
      const a = Di(i, e) || {},
        l = a.delay || i.delay || 0;
      let { elapsed: c = 0 } = i;
      c = c - je(l);
      let u = {
        keyframes: Array.isArray(n) ? n : [null, n],
        ease: 'easeOut',
        velocity: t.getVelocity(),
        ...a,
        delay: -c,
        onUpdate: (d) => {
          t.set(d), a.onUpdate && a.onUpdate(d);
        },
        onComplete: () => {
          s(), a.onComplete && a.onComplete();
        },
        name: e,
        motionValue: t,
        element: o ? void 0 : r,
      };
      Bh(a) || (u = { ...u, ...nu(e, u) }),
        u.duration && (u.duration = je(u.duration)),
        u.repeatDelay && (u.repeatDelay = je(u.repeatDelay)),
        u.from !== void 0 && (u.keyframes[0] = u.from);
      let h = !1;
      if (
        ((u.type === !1 || (u.duration === 0 && !u.repeatDelay)) &&
          ((u.duration = 0), u.delay === 0 && (h = !0)),
        h && !o && t.get() !== void 0)
      ) {
        const d = Ln(u.keyframes, a);
        if (d !== void 0)
          return (
            H.update(() => {
              u.onUpdate(d), u.onComplete();
            }),
            new Oh([])
          );
      }
      return !o && ts.supports(u) ? new ts(u) : new _i(u);
    },
  Uh = (e) => !!(e && typeof e == 'object' && e.mix && e.toValue),
  Nh = (e) => (li(e) ? e[e.length - 1] || 0 : e);
function Wi(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function Ki(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
class Hi {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return Wi(this.subscriptions, t), () => Ki(this.subscriptions, t);
  }
  notify(t, n, i) {
    const r = this.subscriptions.length;
    if (r)
      if (r === 1) this.subscriptions[0](t, n, i);
      else
        for (let o = 0; o < r; o++) {
          const s = this.subscriptions[o];
          s && s(t, n, i);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const ns = 30,
  _h = (e) => !isNaN(parseFloat(e));
class $h {
  constructor(t, n = {}) {
    (this.version = '11.11.0'),
      (this.canTrackVelocity = null),
      (this.events = {}),
      (this.updateAndNotify = (i, r = !0) => {
        const o = Ce.now();
        this.updatedAt !== o && this.setPrevFrameValue(),
          (this.prev = this.current),
          this.setCurrent(i),
          this.current !== this.prev &&
            this.events.change &&
            this.events.change.notify(this.current),
          r && this.events.renderRequest && this.events.renderRequest.notify(this.current);
      }),
      (this.hasAnimated = !1),
      this.setCurrent(t),
      (this.owner = n.owner);
  }
  setCurrent(t) {
    (this.current = t),
      (this.updatedAt = Ce.now()),
      this.canTrackVelocity === null && t !== void 0 && (this.canTrackVelocity = _h(this.current));
  }
  setPrevFrameValue(t = this.current) {
    (this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt);
  }
  onChange(t) {
    return this.on('change', t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new Hi());
    const i = this.events[t].add(n);
    return t === 'change'
      ? () => {
          i(),
            H.read(() => {
              this.events.change.getSize() || this.stop();
            });
        }
      : i;
  }
  clearListeners() {
    for (const t in this.events) this.events[t].clear();
  }
  attach(t, n) {
    (this.passiveEffect = t), (this.stopPassiveEffect = n);
  }
  set(t, n = !0) {
    !n || !this.passiveEffect
      ? this.updateAndNotify(t, n)
      : this.passiveEffect(t, this.updateAndNotify);
  }
  setWithVelocity(t, n, i) {
    this.set(n),
      (this.prev = void 0),
      (this.prevFrameValue = t),
      (this.prevUpdatedAt = this.updatedAt - i);
  }
  jump(t, n = !0) {
    this.updateAndNotify(t),
      (this.prev = t),
      (this.prevUpdatedAt = this.prevFrameValue = void 0),
      n && this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const t = Ce.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || t - this.updatedAt > ns)
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, ns);
    return qo(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
  }
  start(t) {
    return (
      this.stop(),
      new Promise((n) => {
        (this.hasAnimated = !0),
          (this.animation = t(n)),
          this.events.animationStart && this.events.animationStart.notify();
      }).then(() => {
        this.events.animationComplete && this.events.animationComplete.notify(),
          this.clearAnimation();
      })
    );
  }
  stop() {
    this.animation &&
      (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation();
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function Ht(e, t) {
  return new $h(e, t);
}
function zh(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Ht(n));
}
function Wh(e, t) {
  const n = Vn(e, t);
  let { transitionEnd: i = {}, transition: r = {}, ...o } = n || {};
  o = { ...o, ...i };
  for (const s in o) {
    const a = Nh(o[s]);
    zh(e, s, a);
  }
}
const Fn = (e) => e.replace(/([a-z])([A-Z])/gu, '$1-$2').toLowerCase(),
  Kh = 'framerAppearId',
  aa = 'data-' + Fn(Kh);
function la(e) {
  return e.props[aa];
}
const he = (e) => !!(e && e.getVelocity);
function Hh(e) {
  return !!(he(e) && e.add);
}
function ca(e) {
  if (qe.has(e)) return 'transform';
  if (na.has(e)) return Fn(e);
}
function gi(e, t) {
  var n;
  if (!e.applyWillChange) return;
  const i = e.getValue('willChange');
  if (Hh(i)) return i.add(t);
  !(!((n = e.props.style) === null || n === void 0) && n.willChange) &&
    ca(t) &&
    e.setStaticValue('willChange', 'transform');
}
function Gh({ protectedKeys: e, needsAnimating: t }, n) {
  const i = e.hasOwnProperty(n) && t[n] !== !0;
  return (t[n] = !1), i;
}
function ua(e, t, { delay: n = 0, transitionOverride: i, type: r } = {}) {
  var o;
  let { transition: s = e.getDefaultTransition(), transitionEnd: a, ...l } = t;
  i && (s = i);
  const c = [],
    u = r && e.animationState && e.animationState.getState()[r];
  for (const h in l) {
    const d = e.getValue(h, (o = e.latestValues[h]) !== null && o !== void 0 ? o : null),
      p = l[h];
    if (p === void 0 || (u && Gh(u, h))) continue;
    const v = { delay: n, ...Di(s || {}, h) };
    let b = !1;
    if (window.MotionHandoffAnimation) {
      const S = la(e);
      if (S) {
        const w = window.MotionHandoffAnimation(S, h, H);
        w !== null && ((v.startTime = w), (b = !0));
      }
    }
    gi(e, h), d.start(zi(h, d, p, e.shouldReduceMotion && qe.has(h) ? { type: !1 } : v, e, b));
    const P = d.animation;
    P && c.push(P);
  }
  return (
    a &&
      Promise.all(c).then(() => {
        H.update(() => {
          a && Wh(e, a);
        });
      }),
    c
  );
}
function vi(e, t, n = {}) {
  var i;
  const r = Vn(
    e,
    t,
    n.type === 'exit'
      ? (i = e.presenceContext) === null || i === void 0
        ? void 0
        : i.custom
      : void 0
  );
  let { transition: o = e.getDefaultTransition() || {} } = r || {};
  n.transitionOverride && (o = n.transitionOverride);
  const s = r ? () => Promise.all(ua(e, r, n)) : () => Promise.resolve(),
    a =
      e.variantChildren && e.variantChildren.size
        ? (c = 0) => {
            const { delayChildren: u = 0, staggerChildren: h, staggerDirection: d } = o;
            return Yh(e, t, u + c, h, d, n);
          }
        : () => Promise.resolve(),
    { when: l } = o;
  if (l) {
    const [c, u] = l === 'beforeChildren' ? [s, a] : [a, s];
    return c().then(() => u());
  } else return Promise.all([s(), a(n.delay)]);
}
function Yh(e, t, n = 0, i = 0, r = 1, o) {
  const s = [],
    a = (e.variantChildren.size - 1) * i,
    l = r === 1 ? (c = 0) => c * i : (c = 0) => a - c * i;
  return (
    Array.from(e.variantChildren)
      .sort(Xh)
      .forEach((c, u) => {
        c.notify('AnimationStart', t),
          s.push(vi(c, t, { ...o, delay: n + l(u) }).then(() => c.notify('AnimationComplete', t)));
      }),
    Promise.all(s)
  );
}
function Xh(e, t) {
  return e.sortNodePosition(t);
}
function qh(e, t, n = {}) {
  e.notify('AnimationStart', t);
  let i;
  if (Array.isArray(t)) {
    const r = t.map((o) => vi(e, o, n));
    i = Promise.all(r);
  } else if (typeof t == 'string') i = vi(e, t, n);
  else {
    const r = typeof t == 'function' ? Vn(e, t, n.custom) : t;
    i = Promise.all(ua(e, r, n));
  }
  return i.then(() => {
    e.notify('AnimationComplete', t);
  });
}
const Zh = Ai.length;
function ha(e) {
  if (!e) return;
  if (!e.isControllingVariants) {
    const n = e.parent ? ha(e.parent) || {} : {};
    return e.props.initial !== void 0 && (n.initial = e.props.initial), n;
  }
  const t = {};
  for (let n = 0; n < Zh; n++) {
    const i = Ai[n],
      r = e.props[i];
    (zt(r) || r === !1) && (t[i] = r);
  }
  return t;
}
const Jh = [...Mi].reverse(),
  Qh = Mi.length;
function ed(e) {
  return (t) => Promise.all(t.map(({ animation: n, options: i }) => qh(e, n, i)));
}
function td(e) {
  let t = ed(e),
    n = is(),
    i = !0;
  const r = (l) => (c, u) => {
    var h;
    const d = Vn(
      e,
      u,
      l === 'exit' ? ((h = e.presenceContext) === null || h === void 0 ? void 0 : h.custom) : void 0
    );
    if (d) {
      const { transition: p, transitionEnd: v, ...b } = d;
      c = { ...c, ...b, ...v };
    }
    return c;
  };
  function o(l) {
    t = l(e);
  }
  function s(l) {
    const { props: c } = e,
      u = ha(e.parent) || {},
      h = [],
      d = new Set();
    let p = {},
      v = 1 / 0;
    for (let P = 0; P < Qh; P++) {
      const S = Jh[P],
        w = n[S],
        C = c[S] !== void 0 ? c[S] : u[S],
        M = zt(C),
        k = S === l ? w.isActive : null;
      k === !1 && (v = P);
      let N = C === u[S] && C !== c[S] && M;
      if (
        (N && i && e.manuallyAnimateOnMount && (N = !1),
        (w.protectedKeys = { ...p }),
        (!w.isActive && k === null) || (!C && !w.prevProp) || $t(C) || typeof C == 'boolean')
      )
        continue;
      const re = nd(w.prevProp, C);
      let g = re || (S === l && w.isActive && !N && M) || (P > v && M),
        j = !1;
      const O = Array.isArray(C) ? C : [C];
      let U = O.reduce(r(S), {});
      k === !1 && (U = {});
      const { prevResolvedValues: X = {} } = w,
        ce = { ...X, ...U },
        J = (se) => {
          (g = !0), d.has(se) && ((j = !0), d.delete(se)), (w.needsAnimating[se] = !0);
          const me = e.getValue(se);
          me && (me.liveStyle = !1);
        };
      for (const se in ce) {
        const me = U[se],
          q = X[se];
        if (p.hasOwnProperty(se)) continue;
        let Ne = !1;
        li(me) && li(q) ? (Ne = !To(me, q)) : (Ne = me !== q),
          Ne
            ? me != null
              ? J(se)
              : d.add(se)
            : me !== void 0 && d.has(se)
              ? J(se)
              : (w.protectedKeys[se] = !0);
      }
      (w.prevProp = C),
        (w.prevResolvedValues = U),
        w.isActive && (p = { ...p, ...U }),
        i && e.blockInitialAnimation && (g = !1),
        g &&
          (!(N && re) || j) &&
          h.push(...O.map((se) => ({ animation: se, options: { type: S } })));
    }
    if (d.size) {
      const P = {};
      d.forEach((S) => {
        const w = e.getBaseTarget(S),
          C = e.getValue(S);
        C && (C.liveStyle = !0), (P[S] = w ?? null);
      }),
        h.push({ animation: P });
    }
    let b = !!h.length;
    return (
      i && (c.initial === !1 || c.initial === c.animate) && !e.manuallyAnimateOnMount && (b = !1),
      (i = !1),
      b ? t(h) : Promise.resolve()
    );
  }
  function a(l, c) {
    var u;
    if (n[l].isActive === c) return Promise.resolve();
    (u = e.variantChildren) === null ||
      u === void 0 ||
      u.forEach((d) => {
        var p;
        return (p = d.animationState) === null || p === void 0 ? void 0 : p.setActive(l, c);
      }),
      (n[l].isActive = c);
    const h = s(l);
    for (const d in n) n[d].protectedKeys = {};
    return h;
  }
  return {
    animateChanges: s,
    setActive: a,
    setAnimateFunction: o,
    getState: () => n,
    reset: () => {
      (n = is()), (i = !0);
    },
  };
}
function nd(e, t) {
  return typeof t == 'string' ? t !== e : Array.isArray(t) ? !To(t, e) : !1;
}
function nt(e = !1) {
  return { isActive: e, protectedKeys: {}, needsAnimating: {}, prevResolvedValues: {} };
}
function is() {
  return {
    animate: nt(!0),
    whileInView: nt(),
    whileHover: nt(),
    whileTap: nt(),
    whileDrag: nt(),
    whileFocus: nt(),
    exit: nt(),
  };
}
class Ze {
  constructor(t) {
    (this.isMounted = !1), (this.node = t);
  }
  update() {}
}
class id extends Ze {
  constructor(t) {
    super(t), t.animationState || (t.animationState = td(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    $t(t) && (this.unmountControls = t.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(),
      { animate: n } = this.node.prevProps || {};
    t !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var t;
    this.node.animationState.reset(),
      (t = this.unmountControls) === null || t === void 0 || t.call(this);
  }
}
let rd = 0;
class sd extends Ze {
  constructor() {
    super(...arguments), (this.id = rd++);
  }
  update() {
    if (!this.node.presenceContext) return;
    const { isPresent: t, onExitComplete: n } = this.node.presenceContext,
      { isPresent: i } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === i) return;
    const r = this.node.animationState.setActive('exit', !t);
    n && !t && r.then(() => n(this.id));
  }
  mount() {
    const { register: t } = this.node.presenceContext || {};
    t && (this.unmount = t(this.id));
  }
  unmount() {}
}
const od = { animation: { Feature: id }, exit: { Feature: sd } },
  da = (e) =>
    e.pointerType === 'mouse' ? typeof e.button != 'number' || e.button <= 0 : e.isPrimary !== !1;
function kn(e, t = 'page') {
  return { point: { x: e[`${t}X`], y: e[`${t}Y`] } };
}
const ad = (e) => (t) => da(t) && e(t, kn(t));
function ke(e, t, n, i = { passive: !0 }) {
  return e.addEventListener(t, n, i), () => e.removeEventListener(t, n);
}
function Be(e, t, n, i) {
  return ke(e, t, ad(n), i);
}
const rs = (e, t) => Math.abs(e - t);
function ld(e, t) {
  const n = rs(e.x, t.x),
    i = rs(e.y, t.y);
  return Math.sqrt(n ** 2 + i ** 2);
}
class fa {
  constructor(t, n, { transformPagePoint: i, contextWindow: r, dragSnapToOrigin: o = !1 } = {}) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const h = Xn(this.lastMoveEventInfo, this.history),
          d = this.startEvent !== null,
          p = ld(h.offset, { x: 0, y: 0 }) >= 3;
        if (!d && !p) return;
        const { point: v } = h,
          { timestamp: b } = le;
        this.history.push({ ...v, timestamp: b });
        const { onStart: P, onMove: S } = this.handlers;
        d || (P && P(this.lastMoveEvent, h), (this.startEvent = this.lastMoveEvent)),
          S && S(this.lastMoveEvent, h);
      }),
      (this.handlePointerMove = (h, d) => {
        (this.lastMoveEvent = h),
          (this.lastMoveEventInfo = Yn(d, this.transformPagePoint)),
          H.update(this.updatePoint, !0);
      }),
      (this.handlePointerUp = (h, d) => {
        this.end();
        const { onEnd: p, onSessionEnd: v, resumeAnimation: b } = this.handlers;
        if ((this.dragSnapToOrigin && b && b(), !(this.lastMoveEvent && this.lastMoveEventInfo)))
          return;
        const P = Xn(
          h.type === 'pointercancel' ? this.lastMoveEventInfo : Yn(d, this.transformPagePoint),
          this.history
        );
        this.startEvent && p && p(h, P), v && v(h, P);
      }),
      !da(t))
    )
      return;
    (this.dragSnapToOrigin = o),
      (this.handlers = n),
      (this.transformPagePoint = i),
      (this.contextWindow = r || window);
    const s = kn(t),
      a = Yn(s, this.transformPagePoint),
      { point: l } = a,
      { timestamp: c } = le;
    this.history = [{ ...l, timestamp: c }];
    const { onSessionStart: u } = n;
    u && u(t, Xn(a, this.history)),
      (this.removeListeners = Oe(
        Be(this.contextWindow, 'pointermove', this.handlePointerMove),
        Be(this.contextWindow, 'pointerup', this.handlePointerUp),
        Be(this.contextWindow, 'pointercancel', this.handlePointerUp)
      ));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), Ge(this.updatePoint);
  }
}
function Yn(e, t) {
  return t ? { point: t(e.point) } : e;
}
function ss(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function Xn({ point: e }, t) {
  return { point: e, delta: ss(e, pa(t)), offset: ss(e, cd(t)), velocity: ud(t, 0.1) };
}
function cd(e) {
  return e[0];
}
function pa(e) {
  return e[e.length - 1];
}
function ud(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let n = e.length - 1,
    i = null;
  const r = pa(e);
  for (; n >= 0 && ((i = e[n]), !(r.timestamp - i.timestamp > je(t))); ) n--;
  if (!i) return { x: 0, y: 0 };
  const o = Ie(r.timestamp - i.timestamp);
  if (o === 0) return { x: 0, y: 0 };
  const s = { x: (r.x - i.x) / o, y: (r.y - i.y) / o };
  return s.x === 1 / 0 && (s.x = 0), s.y === 1 / 0 && (s.y = 0), s;
}
function ma(e) {
  let t = null;
  return () => {
    const n = () => {
      t = null;
    };
    return t === null ? ((t = e), n) : !1;
  };
}
const os = ma('dragHorizontal'),
  as = ma('dragVertical');
function ga(e) {
  let t = !1;
  if (e === 'y') t = as();
  else if (e === 'x') t = os();
  else {
    const n = os(),
      i = as();
    n && i
      ? (t = () => {
          n(), i();
        })
      : (n && n(), i && i());
  }
  return t;
}
function va() {
  const e = ga(!0);
  return e ? (e(), !1) : !0;
}
function yt(e) {
  return e && typeof e == 'object' && Object.prototype.hasOwnProperty.call(e, 'current');
}
const ya = 1e-4,
  hd = 1 - ya,
  dd = 1 + ya,
  xa = 0.01,
  fd = 0 - xa,
  pd = 0 + xa;
function ye(e) {
  return e.max - e.min;
}
function md(e, t, n) {
  return Math.abs(e - t) <= n;
}
function ls(e, t, n, i = 0.5) {
  (e.origin = i),
    (e.originPoint = Z(t.min, t.max, e.origin)),
    (e.scale = ye(n) / ye(t)),
    (e.translate = Z(n.min, n.max, e.origin) - e.originPoint),
    ((e.scale >= hd && e.scale <= dd) || isNaN(e.scale)) && (e.scale = 1),
    ((e.translate >= fd && e.translate <= pd) || isNaN(e.translate)) && (e.translate = 0);
}
function Bt(e, t, n, i) {
  ls(e.x, t.x, n.x, i ? i.originX : void 0), ls(e.y, t.y, n.y, i ? i.originY : void 0);
}
function cs(e, t, n) {
  (e.min = n.min + t.min), (e.max = e.min + ye(t));
}
function gd(e, t, n) {
  cs(e.x, t.x, n.x), cs(e.y, t.y, n.y);
}
function us(e, t, n) {
  (e.min = t.min - n.min), (e.max = e.min + ye(t));
}
function Ut(e, t, n) {
  us(e.x, t.x, n.x), us(e.y, t.y, n.y);
}
function vd(e, { min: t, max: n }, i) {
  return (
    t !== void 0 && e < t
      ? (e = i ? Z(t, e, i.min) : Math.max(e, t))
      : n !== void 0 && e > n && (e = i ? Z(n, e, i.max) : Math.min(e, n)),
    e
  );
}
function hs(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0,
  };
}
function yd(e, { top: t, left: n, bottom: i, right: r }) {
  return { x: hs(e.x, n, r), y: hs(e.y, t, i) };
}
function ds(e, t) {
  let n = t.min - e.min,
    i = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, i] = [i, n]), { min: n, max: i };
}
function xd(e, t) {
  return { x: ds(e.x, t.x), y: ds(e.y, t.y) };
}
function bd(e, t) {
  let n = 0.5;
  const i = ye(e),
    r = ye(t);
  return (
    r > i ? (n = wt(t.min, t.max - i, e.min)) : i > r && (n = wt(e.min, e.max - r, t.min)),
    Ye(0, 1, n)
  );
}
function Pd(e, t) {
  const n = {};
  return (
    t.min !== void 0 && (n.min = t.min - e.min), t.max !== void 0 && (n.max = t.max - e.min), n
  );
}
const yi = 0.35;
function Td(e = yi) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = yi),
    { x: fs(e, 'left', 'right'), y: fs(e, 'top', 'bottom') }
  );
}
function fs(e, t, n) {
  return { min: ps(e, t), max: ps(e, n) };
}
function ps(e, t) {
  return typeof e == 'number' ? e : e[t] || 0;
}
const ms = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  xt = () => ({ x: ms(), y: ms() }),
  gs = () => ({ min: 0, max: 0 }),
  ne = () => ({ x: gs(), y: gs() });
function be(e) {
  return [e('x'), e('y')];
}
function ba({ top: e, left: t, right: n, bottom: i }) {
  return { x: { min: t, max: n }, y: { min: e, max: i } };
}
function wd({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function Sd(e, t) {
  if (!t) return e;
  const n = t({ x: e.left, y: e.top }),
    i = t({ x: e.right, y: e.bottom });
  return { top: n.y, left: n.x, bottom: i.y, right: i.x };
}
function qn(e) {
  return e === void 0 || e === 1;
}
function xi({ scale: e, scaleX: t, scaleY: n }) {
  return !qn(e) || !qn(t) || !qn(n);
}
function it(e) {
  return xi(e) || Pa(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY;
}
function Pa(e) {
  return vs(e.x) || vs(e.y);
}
function vs(e) {
  return e && e !== '0%';
}
function Cn(e, t, n) {
  const i = e - n,
    r = t * i;
  return n + r;
}
function ys(e, t, n, i, r) {
  return r !== void 0 && (e = Cn(e, r, i)), Cn(e, n, i) + t;
}
function bi(e, t = 0, n = 1, i, r) {
  (e.min = ys(e.min, t, n, i, r)), (e.max = ys(e.max, t, n, i, r));
}
function Ta(e, { x: t, y: n }) {
  bi(e.x, t.translate, t.scale, t.originPoint), bi(e.y, n.translate, n.scale, n.originPoint);
}
const xs = 0.999999999999,
  bs = 1.0000000000001;
function Cd(e, t, n, i = !1) {
  const r = n.length;
  if (!r) return;
  t.x = t.y = 1;
  let o, s;
  for (let a = 0; a < r; a++) {
    (o = n[a]), (s = o.projectionDelta);
    const { visualElement: l } = o.options;
    (l && l.props.style && l.props.style.display === 'contents') ||
      (i &&
        o.options.layoutScroll &&
        o.scroll &&
        o !== o.root &&
        Pt(e, { x: -o.scroll.offset.x, y: -o.scroll.offset.y }),
      s && ((t.x *= s.x.scale), (t.y *= s.y.scale), Ta(e, s)),
      i && it(o.latestValues) && Pt(e, o.latestValues));
  }
  t.x < bs && t.x > xs && (t.x = 1), t.y < bs && t.y > xs && (t.y = 1);
}
function bt(e, t) {
  (e.min = e.min + t), (e.max = e.max + t);
}
function Ps(e, t, n, i, r = 0.5) {
  const o = Z(e.min, e.max, r);
  bi(e, t, n, o, i);
}
function Pt(e, t) {
  Ps(e.x, t.x, t.scaleX, t.scale, t.originX), Ps(e.y, t.y, t.scaleY, t.scale, t.originY);
}
function wa(e, t) {
  return ba(Sd(e.getBoundingClientRect(), t));
}
function Rd(e, t, n) {
  const i = wa(e, n),
    { scroll: r } = t;
  return r && (bt(i.x, r.offset.x), bt(i.y, r.offset.y)), i;
}
const Sa = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
  Ed = new WeakMap();
class Md {
  constructor(t) {
    (this.openGlobalLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = ne()),
      (this.visualElement = t);
  }
  start(t, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: i } = this.visualElement;
    if (i && i.isPresent === !1) return;
    const r = (u) => {
        const { dragSnapToOrigin: h } = this.getProps();
        h ? this.pauseAnimation() : this.stopAnimation(),
          n && this.snapToCursor(kn(u, 'page').point);
      },
      o = (u, h) => {
        const { drag: d, dragPropagation: p, onDragStart: v } = this.getProps();
        if (
          d &&
          !p &&
          (this.openGlobalLock && this.openGlobalLock(),
          (this.openGlobalLock = ga(d)),
          !this.openGlobalLock)
        )
          return;
        (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          be((P) => {
            let S = this.getAxisMotionValue(P).get() || 0;
            if (Se.test(S)) {
              const { projection: w } = this.visualElement;
              if (w && w.layout) {
                const C = w.layout.layoutBox[P];
                C && (S = ye(C) * (parseFloat(S) / 100));
              }
            }
            this.originPoint[P] = S;
          }),
          v && H.postRender(() => v(u, h)),
          gi(this.visualElement, 'transform');
        const { animationState: b } = this.visualElement;
        b && b.setActive('whileDrag', !0);
      },
      s = (u, h) => {
        const {
          dragPropagation: d,
          dragDirectionLock: p,
          onDirectionLock: v,
          onDrag: b,
        } = this.getProps();
        if (!d && !this.openGlobalLock) return;
        const { offset: P } = h;
        if (p && this.currentDirection === null) {
          (this.currentDirection = Ad(P)),
            this.currentDirection !== null && v && v(this.currentDirection);
          return;
        }
        this.updateAxis('x', h.point, P),
          this.updateAxis('y', h.point, P),
          this.visualElement.render(),
          b && b(u, h);
      },
      a = (u, h) => this.stop(u, h),
      l = () =>
        be((u) => {
          var h;
          return (
            this.getAnimationState(u) === 'paused' &&
            ((h = this.getAxisMotionValue(u).animation) === null || h === void 0
              ? void 0
              : h.play())
          );
        }),
      { dragSnapToOrigin: c } = this.getProps();
    this.panSession = new fa(
      t,
      { onSessionStart: r, onStart: o, onMove: s, onSessionEnd: a, resumeAnimation: l },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: c,
        contextWindow: Sa(this.visualElement),
      }
    );
  }
  stop(t, n) {
    const i = this.isDragging;
    if ((this.cancel(), !i)) return;
    const { velocity: r } = n;
    this.startAnimation(r);
    const { onDragEnd: o } = this.getProps();
    o && H.postRender(() => o(t, n));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: n } = this.visualElement;
    t && (t.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0);
    const { dragPropagation: i } = this.getProps();
    !i && this.openGlobalLock && (this.openGlobalLock(), (this.openGlobalLock = null)),
      n && n.setActive('whileDrag', !1);
  }
  updateAxis(t, n, i) {
    const { drag: r } = this.getProps();
    if (!i || !pn(t, r, this.currentDirection)) return;
    const o = this.getAxisMotionValue(t);
    let s = this.originPoint[t] + i[t];
    this.constraints && this.constraints[t] && (s = vd(s, this.constraints[t], this.elastic[t])),
      o.set(s);
  }
  resolveConstraints() {
    var t;
    const { dragConstraints: n, dragElastic: i } = this.getProps(),
      r =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : (t = this.visualElement.projection) === null || t === void 0
            ? void 0
            : t.layout,
      o = this.constraints;
    n && yt(n)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : n && r
        ? (this.constraints = yd(r.layoutBox, n))
        : (this.constraints = !1),
      (this.elastic = Td(i)),
      o !== this.constraints &&
        r &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        be((s) => {
          this.constraints !== !1 &&
            this.getAxisMotionValue(s) &&
            (this.constraints[s] = Pd(r.layoutBox[s], this.constraints[s]));
        });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !yt(t)) return !1;
    const i = t.current,
      { projection: r } = this.visualElement;
    if (!r || !r.layout) return !1;
    const o = Rd(i, r.root, this.visualElement.getTransformPagePoint());
    let s = xd(r.layout.layoutBox, o);
    if (n) {
      const a = n(wd(s));
      (this.hasMutatedConstraints = !!a), a && (s = ba(a));
    }
    return s;
  }
  startAnimation(t) {
    const {
        drag: n,
        dragMomentum: i,
        dragElastic: r,
        dragTransition: o,
        dragSnapToOrigin: s,
        onDragTransitionEnd: a,
      } = this.getProps(),
      l = this.constraints || {},
      c = be((u) => {
        if (!pn(u, n, this.currentDirection)) return;
        let h = (l && l[u]) || {};
        s && (h = { min: 0, max: 0 });
        const d = r ? 200 : 1e6,
          p = r ? 40 : 1e7,
          v = {
            type: 'inertia',
            velocity: i ? t[u] : 0,
            bounceStiffness: d,
            bounceDamping: p,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...o,
            ...h,
          };
        return this.startAxisValueAnimation(u, v);
      });
    return Promise.all(c).then(a);
  }
  startAxisValueAnimation(t, n) {
    const i = this.getAxisMotionValue(t);
    return gi(this.visualElement, t), i.start(zi(t, i, 0, n, this.visualElement, !1));
  }
  stopAnimation() {
    be((t) => this.getAxisMotionValue(t).stop());
  }
  pauseAnimation() {
    be((t) => {
      var n;
      return (n = this.getAxisMotionValue(t).animation) === null || n === void 0
        ? void 0
        : n.pause();
    });
  }
  getAnimationState(t) {
    var n;
    return (n = this.getAxisMotionValue(t).animation) === null || n === void 0 ? void 0 : n.state;
  }
  getAxisMotionValue(t) {
    const n = `_drag${t.toUpperCase()}`,
      i = this.visualElement.getProps(),
      r = i[n];
    return r || this.visualElement.getValue(t, (i.initial ? i.initial[t] : void 0) || 0);
  }
  snapToCursor(t) {
    be((n) => {
      const { drag: i } = this.getProps();
      if (!pn(n, i, this.currentDirection)) return;
      const { projection: r } = this.visualElement,
        o = this.getAxisMotionValue(n);
      if (r && r.layout) {
        const { min: s, max: a } = r.layout.layoutBox[n];
        o.set(t[n] - Z(s, a, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: t, dragConstraints: n } = this.getProps(),
      { projection: i } = this.visualElement;
    if (!yt(n) || !i || !this.constraints) return;
    this.stopAnimation();
    const r = { x: 0, y: 0 };
    be((s) => {
      const a = this.getAxisMotionValue(s);
      if (a && this.constraints !== !1) {
        const l = a.get();
        r[s] = bd({ min: l, max: l }, this.constraints[s]);
      }
    });
    const { transformTemplate: o } = this.visualElement.getProps();
    (this.visualElement.current.style.transform = o ? o({}, '') : 'none'),
      i.root && i.root.updateScroll(),
      i.updateLayout(),
      this.resolveConstraints(),
      be((s) => {
        if (!pn(s, t, null)) return;
        const a = this.getAxisMotionValue(s),
          { min: l, max: c } = this.constraints[s];
        a.set(Z(l, c, r[s]));
      });
  }
  addListeners() {
    if (!this.visualElement.current) return;
    Ed.set(this.visualElement, this);
    const t = this.visualElement.current,
      n = Be(t, 'pointerdown', (l) => {
        const { drag: c, dragListener: u = !0 } = this.getProps();
        c && u && this.start(l);
      }),
      i = () => {
        const { dragConstraints: l } = this.getProps();
        yt(l) && l.current && (this.constraints = this.resolveRefConstraints());
      },
      { projection: r } = this.visualElement,
      o = r.addEventListener('measure', i);
    r && !r.layout && (r.root && r.root.updateScroll(), r.updateLayout()), H.read(i);
    const s = ke(window, 'resize', () => this.scalePositionWithinConstraints()),
      a = r.addEventListener('didUpdate', ({ delta: l, hasLayoutChanged: c }) => {
        this.isDragging &&
          c &&
          (be((u) => {
            const h = this.getAxisMotionValue(u);
            h && ((this.originPoint[u] += l[u].translate), h.set(h.get() + l[u].translate));
          }),
          this.visualElement.render());
      });
    return () => {
      s(), n(), o(), a && a();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(),
      {
        drag: n = !1,
        dragDirectionLock: i = !1,
        dragPropagation: r = !1,
        dragConstraints: o = !1,
        dragElastic: s = yi,
        dragMomentum: a = !0,
      } = t;
    return {
      ...t,
      drag: n,
      dragDirectionLock: i,
      dragPropagation: r,
      dragConstraints: o,
      dragElastic: s,
      dragMomentum: a,
    };
  }
}
function pn(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function Ad(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? (n = 'y') : Math.abs(e.x) > t && (n = 'x'), n;
}
class Dd extends Ze {
  constructor(t) {
    super(t),
      (this.removeGroupControls = de),
      (this.removeListeners = de),
      (this.controls = new Md(t));
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || de);
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const Ts = (e) => (t, n) => {
  e && H.postRender(() => e(t, n));
};
class Vd extends Ze {
  constructor() {
    super(...arguments), (this.removePointerDownListener = de);
  }
  onPointerDown(t) {
    this.session = new fa(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: Sa(this.node),
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: t, onPanStart: n, onPan: i, onPanEnd: r } = this.node.getProps();
    return {
      onSessionStart: Ts(t),
      onStart: Ts(n),
      onMove: i,
      onEnd: (o, s) => {
        delete this.session, r && H.postRender(() => r(o, s));
      },
    };
  }
  mount() {
    this.removePointerDownListener = Be(this.node.current, 'pointerdown', (t) =>
      this.onPointerDown(t)
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
const Qt = x.createContext(null);
function Ld() {
  const e = x.useContext(Qt);
  if (e === null) return [!0, null];
  const { isPresent: t, onExitComplete: n, register: i } = e,
    r = x.useId();
  x.useEffect(() => i(r), []);
  const o = x.useCallback(() => n && n(r), [r, n]);
  return !t && n ? [!1, o] : [!0];
}
function Fd() {
  return kd(x.useContext(Qt));
}
function kd(e) {
  return e === null ? !0 : e.isPresent;
}
const Gi = x.createContext({}),
  Ca = x.createContext({}),
  yn = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function ws(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
const Ft = {
    correct: (e, t) => {
      if (!t.target) return e;
      if (typeof e == 'string')
        if (F.test(e)) e = parseFloat(e);
        else return e;
      const n = ws(e, t.target.x),
        i = ws(e, t.target.y);
      return `${n}% ${i}%`;
    },
  },
  jd = {
    correct: (e, { treeScale: t, projectionDelta: n }) => {
      const i = e,
        r = Xe.parse(e);
      if (r.length > 5) return i;
      const o = Xe.createTransformer(e),
        s = typeof r[0] != 'number' ? 1 : 0,
        a = n.x.scale * t.x,
        l = n.y.scale * t.y;
      (r[0 + s] /= a), (r[1 + s] /= l);
      const c = Z(a, l, 0.5);
      return (
        typeof r[2 + s] == 'number' && (r[2 + s] /= c),
        typeof r[3 + s] == 'number' && (r[3 + s] /= c),
        o(r)
      );
    },
  },
  Rn = {};
function Id(e) {
  Object.assign(Rn, e);
}
const { schedule: Yi, cancel: Np } = wo(queueMicrotask, !1);
class Od extends x.Component {
  componentDidMount() {
    const { visualElement: t, layoutGroup: n, switchLayoutGroup: i, layoutId: r } = this.props,
      { projection: o } = t;
    Id(Bd),
      o &&
        (n.group && n.group.add(o),
        i && i.register && r && i.register(o),
        o.root.didUpdate(),
        o.addEventListener('animationComplete', () => {
          this.safeToRemove();
        }),
        o.setOptions({ ...o.options, onExitComplete: () => this.safeToRemove() })),
      (yn.hasEverUpdated = !0);
  }
  getSnapshotBeforeUpdate(t) {
    const { layoutDependency: n, visualElement: i, drag: r, isPresent: o } = this.props,
      s = i.projection;
    return (
      s &&
        ((s.isPresent = o),
        r || t.layoutDependency !== n || n === void 0 ? s.willUpdate() : this.safeToRemove(),
        t.isPresent !== o &&
          (o
            ? s.promote()
            : s.relegate() ||
              H.postRender(() => {
                const a = s.getStack();
                (!a || !a.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t &&
      (t.root.didUpdate(),
      Yi.postRender(() => {
        !t.currentAnimation && t.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const { visualElement: t, layoutGroup: n, switchLayoutGroup: i } = this.props,
      { projection: r } = t;
    r &&
      (r.scheduleCheckAfterUnmount(),
      n && n.group && n.group.remove(r),
      i && i.deregister && i.deregister(r));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function Ra(e) {
  const [t, n] = Ld(),
    i = x.useContext(Gi);
  return G.jsx(Od, {
    ...e,
    layoutGroup: i,
    switchLayoutGroup: x.useContext(Ca),
    isPresent: t,
    safeToRemove: n,
  });
}
const Bd = {
    borderRadius: {
      ...Ft,
      applyTo: [
        'borderTopLeftRadius',
        'borderTopRightRadius',
        'borderBottomLeftRadius',
        'borderBottomRightRadius',
      ],
    },
    borderTopLeftRadius: Ft,
    borderTopRightRadius: Ft,
    borderBottomLeftRadius: Ft,
    borderBottomRightRadius: Ft,
    boxShadow: jd,
  },
  Ea = ['TopLeft', 'TopRight', 'BottomLeft', 'BottomRight'],
  Ud = Ea.length,
  Ss = (e) => (typeof e == 'string' ? parseFloat(e) : e),
  Cs = (e) => typeof e == 'number' || F.test(e);
function Nd(e, t, n, i, r, o) {
  r
    ? ((e.opacity = Z(0, n.opacity !== void 0 ? n.opacity : 1, _d(i))),
      (e.opacityExit = Z(t.opacity !== void 0 ? t.opacity : 1, 0, $d(i))))
    : o &&
      (e.opacity = Z(
        t.opacity !== void 0 ? t.opacity : 1,
        n.opacity !== void 0 ? n.opacity : 1,
        i
      ));
  for (let s = 0; s < Ud; s++) {
    const a = `border${Ea[s]}Radius`;
    let l = Rs(t, a),
      c = Rs(n, a);
    if (l === void 0 && c === void 0) continue;
    l || (l = 0),
      c || (c = 0),
      l === 0 || c === 0 || Cs(l) === Cs(c)
        ? ((e[a] = Math.max(Z(Ss(l), Ss(c), i), 0)), (Se.test(c) || Se.test(l)) && (e[a] += '%'))
        : (e[a] = c);
  }
  (t.rotate || n.rotate) && (e.rotate = Z(t.rotate || 0, n.rotate || 0, i));
}
function Rs(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const _d = Ma(0, 0.5, Do),
  $d = Ma(0.5, 0.95, de);
function Ma(e, t, n) {
  return (i) => (i < e ? 0 : i > t ? 1 : n(wt(e, t, i)));
}
function Es(e, t) {
  (e.min = t.min), (e.max = t.max);
}
function xe(e, t) {
  Es(e.x, t.x), Es(e.y, t.y);
}
function Ms(e, t) {
  (e.translate = t.translate),
    (e.scale = t.scale),
    (e.originPoint = t.originPoint),
    (e.origin = t.origin);
}
function As(e, t, n, i, r) {
  return (e -= t), (e = Cn(e, 1 / n, i)), r !== void 0 && (e = Cn(e, 1 / r, i)), e;
}
function zd(e, t = 0, n = 1, i = 0.5, r, o = e, s = e) {
  if (
    (Se.test(t) && ((t = parseFloat(t)), (t = Z(s.min, s.max, t / 100) - s.min)),
    typeof t != 'number')
  )
    return;
  let a = Z(o.min, o.max, i);
  e === o && (a -= t), (e.min = As(e.min, t, n, a, r)), (e.max = As(e.max, t, n, a, r));
}
function Ds(e, t, [n, i, r], o, s) {
  zd(e, t[n], t[i], t[r], t.scale, o, s);
}
const Wd = ['x', 'scaleX', 'originX'],
  Kd = ['y', 'scaleY', 'originY'];
function Vs(e, t, n, i) {
  Ds(e.x, t, Wd, n ? n.x : void 0, i ? i.x : void 0),
    Ds(e.y, t, Kd, n ? n.y : void 0, i ? i.y : void 0);
}
function Ls(e) {
  return e.translate === 0 && e.scale === 1;
}
function Aa(e) {
  return Ls(e.x) && Ls(e.y);
}
function Fs(e, t) {
  return e.min === t.min && e.max === t.max;
}
function Hd(e, t) {
  return Fs(e.x, t.x) && Fs(e.y, t.y);
}
function ks(e, t) {
  return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max);
}
function Da(e, t) {
  return ks(e.x, t.x) && ks(e.y, t.y);
}
function js(e) {
  return ye(e.x) / ye(e.y);
}
function Is(e, t) {
  return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint;
}
class Gd {
  constructor() {
    this.members = [];
  }
  add(t) {
    Wi(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if ((Ki(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead)) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(t) {
    const n = this.members.findIndex((r) => t === r);
    if (n === 0) return !1;
    let i;
    for (let r = n; r >= 0; r--) {
      const o = this.members[r];
      if (o.isPresent !== !1) {
        i = o;
        break;
      }
    }
    return i ? (this.promote(i), !0) : !1;
  }
  promote(t, n) {
    const i = this.lead;
    if (t !== i && ((this.prevLead = i), (this.lead = t), t.show(), i)) {
      i.instance && i.scheduleRender(),
        t.scheduleRender(),
        (t.resumeFrom = i),
        n && (t.resumeFrom.preserveOpacity = !0),
        i.snapshot &&
          ((t.snapshot = i.snapshot),
          (t.snapshot.latestValues = i.animationValues || i.latestValues)),
        t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
      const { crossfade: r } = t.options;
      r === !1 && i.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      const { options: n, resumingFrom: i } = t;
      n.onExitComplete && n.onExitComplete(),
        i && i.options.onExitComplete && i.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((t) => {
      t.instance && t.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function Yd(e, t, n) {
  let i = '';
  const r = e.x.translate / t.x,
    o = e.y.translate / t.y,
    s = (n == null ? void 0 : n.z) || 0;
  if (
    ((r || o || s) && (i = `translate3d(${r}px, ${o}px, ${s}px) `),
    (t.x !== 1 || t.y !== 1) && (i += `scale(${1 / t.x}, ${1 / t.y}) `),
    n)
  ) {
    const { transformPerspective: c, rotate: u, rotateX: h, rotateY: d, skewX: p, skewY: v } = n;
    c && (i = `perspective(${c}px) ${i}`),
      u && (i += `rotate(${u}deg) `),
      h && (i += `rotateX(${h}deg) `),
      d && (i += `rotateY(${d}deg) `),
      p && (i += `skewX(${p}deg) `),
      v && (i += `skewY(${v}deg) `);
  }
  const a = e.x.scale * t.x,
    l = e.y.scale * t.y;
  return (a !== 1 || l !== 1) && (i += `scale(${a}, ${l})`), i || 'none';
}
const Xd = (e, t) => e.depth - t.depth;
class qd {
  constructor() {
    (this.children = []), (this.isDirty = !1);
  }
  add(t) {
    Wi(this.children, t), (this.isDirty = !0);
  }
  remove(t) {
    Ki(this.children, t), (this.isDirty = !0);
  }
  forEach(t) {
    this.isDirty && this.children.sort(Xd), (this.isDirty = !1), this.children.forEach(t);
  }
}
function xn(e) {
  const t = he(e) ? e.get() : e;
  return Uh(t) ? t.toValue() : t;
}
function Zd(e, t) {
  const n = Ce.now(),
    i = ({ timestamp: r }) => {
      const o = r - n;
      o >= t && (Ge(i), e(o - t));
    };
  return H.read(i, !0), () => Ge(i);
}
function Jd(e) {
  return e instanceof SVGElement && e.tagName !== 'svg';
}
function Qd(e, t, n) {
  const i = he(e) ? e : Ht(e);
  return i.start(zi('', i, t, n)), i.animation;
}
const rt = {
    type: 'projectionFrame',
    totalNodes: 0,
    resolvedTargetDeltas: 0,
    recalculatedProjection: 0,
  },
  It = typeof window < 'u' && window.MotionDebug !== void 0,
  Zn = ['', 'X', 'Y', 'Z'],
  ef = { visibility: 'hidden' },
  Os = 1e3;
let tf = 0;
function Jn(e, t, n, i) {
  const { latestValues: r } = t;
  r[e] && ((n[e] = r[e]), t.setStaticValue(e, 0), i && (i[e] = 0));
}
function Va(e) {
  if (((e.hasCheckedOptimisedAppear = !0), e.root === e)) return;
  const { visualElement: t } = e.options;
  if (!t) return;
  const n = la(t);
  if (window.MotionHasOptimisedAnimation(n, 'transform')) {
    const { layout: r, layoutId: o } = e.options;
    window.MotionCancelOptimisedAnimation(n, 'transform', H, !(r || o));
  }
  const { parent: i } = e;
  i && !i.hasCheckedOptimisedAppear && Va(i);
}
function La({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: n,
  checkIsScrollRoot: i,
  resetTransform: r,
}) {
  return class {
    constructor(s = {}, a = t == null ? void 0 : t()) {
      (this.id = tf++),
        (this.animationId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.hasCheckedOptimisedAppear = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.updateScheduled = !1),
        (this.scheduleUpdate = () => this.update()),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          (this.projectionUpdateScheduled = !1),
            It && (rt.totalNodes = rt.resolvedTargetDeltas = rt.recalculatedProjection = 0),
            this.nodes.forEach(sf),
            this.nodes.forEach(uf),
            this.nodes.forEach(hf),
            this.nodes.forEach(of),
            It && window.MotionDebug.record(rt);
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = s),
        (this.root = a ? a.root || a : this),
        (this.path = a ? [...a.path, a] : []),
        (this.parent = a),
        (this.depth = a ? a.depth + 1 : 0);
      for (let l = 0; l < this.path.length; l++) this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new qd());
    }
    addEventListener(s, a) {
      return (
        this.eventHandlers.has(s) || this.eventHandlers.set(s, new Hi()),
        this.eventHandlers.get(s).add(a)
      );
    }
    notifyListeners(s, ...a) {
      const l = this.eventHandlers.get(s);
      l && l.notify(...a);
    }
    hasListeners(s) {
      return this.eventHandlers.has(s);
    }
    mount(s, a = this.root.hasTreeAnimated) {
      if (this.instance) return;
      (this.isSVG = Jd(s)), (this.instance = s);
      const { layoutId: l, layout: c, visualElement: u } = this.options;
      if (
        (u && !u.current && u.mount(s),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        a && (c || l) && (this.isLayoutDirty = !0),
        e)
      ) {
        let h;
        const d = () => (this.root.updateBlockedByResize = !1);
        e(s, () => {
          (this.root.updateBlockedByResize = !0),
            h && h(),
            (h = Zd(d, 250)),
            yn.hasAnimatedSinceResize && ((yn.hasAnimatedSinceResize = !1), this.nodes.forEach(Us));
        });
      }
      l && this.root.registerSharedNode(l, this),
        this.options.animate !== !1 &&
          u &&
          (l || c) &&
          this.addEventListener(
            'didUpdate',
            ({ delta: h, hasLayoutChanged: d, hasRelativeTargetChanged: p, layout: v }) => {
              if (this.isTreeAnimationBlocked()) {
                (this.target = void 0), (this.relativeTarget = void 0);
                return;
              }
              const b = this.options.transition || u.getDefaultTransition() || gf,
                { onLayoutAnimationStart: P, onLayoutAnimationComplete: S } = u.getProps(),
                w = !this.targetLayout || !Da(this.targetLayout, v) || p,
                C = !d && p;
              if (
                this.options.layoutRoot ||
                (this.resumeFrom && this.resumeFrom.instance) ||
                C ||
                (d && (w || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(h, C);
                const M = { ...Di(b, 'layout'), onPlay: P, onComplete: S };
                (u.shouldReduceMotion || this.options.layoutRoot) && ((M.delay = 0), (M.type = !1)),
                  this.startAnimation(M);
              } else
                d || Us(this),
                  this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
              this.targetLayout = v;
            }
          );
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const s = this.getStack();
      s && s.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        Ge(this.updateProjection);
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return this.isAnimationBlocked || (this.parent && this.parent.isTreeAnimationBlocked()) || !1;
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0), this.nodes && this.nodes.forEach(df), this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: s } = this.options;
      return s && s.getProps().transformTemplate;
    }
    willUpdate(s = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && Va(this),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let u = 0; u < this.path.length; u++) {
        const h = this.path[u];
        (h.shouldResetTransform = !0),
          h.updateScroll('snapshot'),
          h.options.layoutRoot && h.willUpdate(!1);
      }
      const { layoutId: a, layout: l } = this.options;
      if (a === void 0 && !l) return;
      const c = this.getTransformTemplate();
      (this.prevTransformTemplateValue = c ? c(this.latestValues, '') : void 0),
        this.updateSnapshot(),
        s && this.notifyListeners('willUpdate');
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Bs);
        return;
      }
      this.isUpdating || this.nodes.forEach(lf),
        (this.isUpdating = !1),
        this.nodes.forEach(cf),
        this.nodes.forEach(nf),
        this.nodes.forEach(rf),
        this.clearAllSnapshots();
      const a = Ce.now();
      (le.delta = Ye(0, 1e3 / 60, a - le.timestamp)),
        (le.timestamp = a),
        (le.isProcessing = !0),
        zn.update.process(le),
        zn.preRender.process(le),
        zn.render.process(le),
        (le.isProcessing = !1);
    }
    didUpdate() {
      this.updateScheduled || ((this.updateScheduled = !0), Yi.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(af), this.sharedNodes.forEach(ff);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0), H.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      H.postRender(() => {
        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure());
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let l = 0; l < this.path.length; l++) this.path[l].updateScroll();
      const s = this.layout;
      (this.layout = this.measure(!1)),
        (this.layoutCorrected = ne()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners('measure', this.layout.layoutBox);
      const { visualElement: a } = this.options;
      a && a.notify('LayoutMeasure', this.layout.layoutBox, s ? s.layoutBox : void 0);
    }
    updateScroll(s = 'measure') {
      let a = !!(this.options.layoutScroll && this.instance);
      if (
        (this.scroll &&
          this.scroll.animationId === this.root.animationId &&
          this.scroll.phase === s &&
          (a = !1),
        a)
      ) {
        const l = i(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: s,
          isRoot: l,
          offset: n(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : l,
        };
      }
    }
    resetTransform() {
      if (!r) return;
      const s = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout,
        a = this.projectionDelta && !Aa(this.projectionDelta),
        l = this.getTransformTemplate(),
        c = l ? l(this.latestValues, '') : void 0,
        u = c !== this.prevTransformTemplateValue;
      s &&
        (a || it(this.latestValues) || u) &&
        (r(this.instance, c), (this.shouldResetTransform = !1), this.scheduleRender());
    }
    measure(s = !0) {
      const a = this.measurePageBox();
      let l = this.removeElementScroll(a);
      return (
        s && (l = this.removeTransform(l)),
        vf(l),
        {
          animationId: this.root.animationId,
          measuredBox: a,
          layoutBox: l,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      var s;
      const { visualElement: a } = this.options;
      if (!a) return ne();
      const l = a.measureViewportBox();
      if (
        !(((s = this.scroll) === null || s === void 0 ? void 0 : s.wasRoot) || this.path.some(yf))
      ) {
        const { scroll: u } = this.root;
        u && (bt(l.x, u.offset.x), bt(l.y, u.offset.y));
      }
      return l;
    }
    removeElementScroll(s) {
      var a;
      const l = ne();
      if ((xe(l, s), !((a = this.scroll) === null || a === void 0) && a.wasRoot)) return l;
      for (let c = 0; c < this.path.length; c++) {
        const u = this.path[c],
          { scroll: h, options: d } = u;
        u !== this.root &&
          h &&
          d.layoutScroll &&
          (h.wasRoot && xe(l, s), bt(l.x, h.offset.x), bt(l.y, h.offset.y));
      }
      return l;
    }
    applyTransform(s, a = !1) {
      const l = ne();
      xe(l, s);
      for (let c = 0; c < this.path.length; c++) {
        const u = this.path[c];
        !a &&
          u.options.layoutScroll &&
          u.scroll &&
          u !== u.root &&
          Pt(l, { x: -u.scroll.offset.x, y: -u.scroll.offset.y }),
          it(u.latestValues) && Pt(l, u.latestValues);
      }
      return it(this.latestValues) && Pt(l, this.latestValues), l;
    }
    removeTransform(s) {
      const a = ne();
      xe(a, s);
      for (let l = 0; l < this.path.length; l++) {
        const c = this.path[l];
        if (!c.instance || !it(c.latestValues)) continue;
        xi(c.latestValues) && c.updateSnapshot();
        const u = ne(),
          h = c.measurePageBox();
        xe(u, h), Vs(a, c.latestValues, c.snapshot ? c.snapshot.layoutBox : void 0, u);
      }
      return it(this.latestValues) && Vs(a, this.latestValues), a;
    }
    setTargetDelta(s) {
      (this.targetDelta = s), this.root.scheduleUpdateProjection(), (this.isProjectionDirty = !0);
    }
    setOptions(s) {
      this.options = {
        ...this.options,
        ...s,
        crossfade: s.crossfade !== void 0 ? s.crossfade : !0,
      };
    }
    clearMeasurements() {
      (this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1);
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== le.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(s = !1) {
      var a;
      const l = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty),
        this.isSharedProjectionDirty || (this.isSharedProjectionDirty = l.isSharedProjectionDirty);
      const c = !!this.resumingFrom || this !== l;
      if (
        !(
          s ||
          (c && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          (!((a = this.parent) === null || a === void 0) && a.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget ||
          this.root.updateBlockedByResize
        )
      )
        return;
      const { layout: h, layoutId: d } = this.options;
      if (!(!this.layout || !(h || d))) {
        if (
          ((this.resolvedRelativeTargetAt = le.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          const p = this.getClosestProjectingParent();
          p && p.layout && this.animationProgress !== 1
            ? ((this.relativeParent = p),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = ne()),
              (this.relativeTargetOrigin = ne()),
              Ut(this.relativeTargetOrigin, this.layout.layoutBox, p.layout.layoutBox),
              xe(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (
            (this.target || ((this.target = ne()), (this.targetWithTransforms = ne())),
            this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.relativeParent &&
            this.relativeParent.target
              ? (this.forceRelativeParentToResolveTarget(),
                gd(this.target, this.relativeTarget, this.relativeParent.target))
              : this.targetDelta
                ? (this.resumingFrom
                    ? (this.target = this.applyTransform(this.layout.layoutBox))
                    : xe(this.target, this.layout.layoutBox),
                  Ta(this.target, this.targetDelta))
                : xe(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget)
          ) {
            this.attemptToResolveRelativeTarget = !1;
            const p = this.getClosestProjectingParent();
            p &&
            !!p.resumingFrom == !!this.resumingFrom &&
            !p.options.layoutScroll &&
            p.target &&
            this.animationProgress !== 1
              ? ((this.relativeParent = p),
                this.forceRelativeParentToResolveTarget(),
                (this.relativeTarget = ne()),
                (this.relativeTargetOrigin = ne()),
                Ut(this.relativeTargetOrigin, this.target, p.target),
                xe(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0);
          }
          It && rt.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || xi(this.parent.latestValues) || Pa(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    calcProjection() {
      var s;
      const a = this.getLead(),
        l = !!this.resumingFrom || this !== a;
      let c = !0;
      if (
        ((this.isProjectionDirty ||
          (!((s = this.parent) === null || s === void 0) && s.isProjectionDirty)) &&
          (c = !1),
        l && (this.isSharedProjectionDirty || this.isTransformDirty) && (c = !1),
        this.resolvedRelativeTargetAt === le.timestamp && (c = !1),
        c)
      )
        return;
      const { layout: u, layoutId: h } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(u || h))
      )
        return;
      xe(this.layoutCorrected, this.layout.layoutBox);
      const d = this.treeScale.x,
        p = this.treeScale.y;
      Cd(this.layoutCorrected, this.treeScale, this.path, l),
        a.layout &&
          !a.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((a.target = a.layout.layoutBox), (a.targetWithTransforms = ne()));
      const { target: v } = a;
      if (!v) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (Ms(this.prevProjectionDelta.x, this.projectionDelta.x),
          Ms(this.prevProjectionDelta.y, this.projectionDelta.y)),
        Bt(this.projectionDelta, this.layoutCorrected, v, this.latestValues),
        (this.treeScale.x !== d ||
          this.treeScale.y !== p ||
          !Is(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !Is(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners('projectionUpdate', v)),
        It && rt.recalculatedProjection++;
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(s = !0) {
      var a;
      if (((a = this.options.visualElement) === null || a === void 0 || a.scheduleRender(), s)) {
        const l = this.getStack();
        l && l.scheduleRender();
      }
      this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      (this.prevProjectionDelta = xt()),
        (this.projectionDelta = xt()),
        (this.projectionDeltaWithTransform = xt());
    }
    setAnimationOrigin(s, a = !1) {
      const l = this.snapshot,
        c = l ? l.latestValues : {},
        u = { ...this.latestValues },
        h = xt();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !a);
      const d = ne(),
        p = l ? l.source : void 0,
        v = this.layout ? this.layout.source : void 0,
        b = p !== v,
        P = this.getStack(),
        S = !P || P.members.length <= 1,
        w = !!(b && !S && this.options.crossfade === !0 && !this.path.some(mf));
      this.animationProgress = 0;
      let C;
      (this.mixTargetDelta = (M) => {
        const k = M / 1e3;
        Ns(h.x, s.x, k),
          Ns(h.y, s.y, k),
          this.setTargetDelta(h),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (Ut(d, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            pf(this.relativeTarget, this.relativeTargetOrigin, d, k),
            C && Hd(this.relativeTarget, C) && (this.isProjectionDirty = !1),
            C || (C = ne()),
            xe(C, this.relativeTarget)),
          b && ((this.animationValues = u), Nd(u, c, this.latestValues, k, w, S)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = k);
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(s) {
      this.notifyListeners('animationStart'),
        this.currentAnimation && this.currentAnimation.stop(),
        this.resumingFrom &&
          this.resumingFrom.currentAnimation &&
          this.resumingFrom.currentAnimation.stop(),
        this.pendingAnimation && (Ge(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = H.update(() => {
          (yn.hasAnimatedSinceResize = !0),
            (this.currentAnimation = Qd(0, Os, {
              ...s,
              onUpdate: (a) => {
                this.mixTargetDelta(a), s.onUpdate && s.onUpdate(a);
              },
              onComplete: () => {
                s.onComplete && s.onComplete(), this.completeAnimation();
              },
            })),
            this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0);
        }));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const s = this.getStack();
      s && s.exitAnimationComplete(),
        (this.resumingFrom = this.currentAnimation = this.animationValues = void 0),
        this.notifyListeners('animationComplete');
    }
    finishAnimation() {
      this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(Os), this.currentAnimation.stop()),
        this.completeAnimation();
    }
    applyTransformsToTarget() {
      const s = this.getLead();
      let { targetWithTransforms: a, target: l, layout: c, latestValues: u } = s;
      if (!(!a || !l || !c)) {
        if (
          this !== s &&
          this.layout &&
          c &&
          Fa(this.options.animationType, this.layout.layoutBox, c.layoutBox)
        ) {
          l = this.target || ne();
          const h = ye(this.layout.layoutBox.x);
          (l.x.min = s.target.x.min), (l.x.max = l.x.min + h);
          const d = ye(this.layout.layoutBox.y);
          (l.y.min = s.target.y.min), (l.y.max = l.y.min + d);
        }
        xe(a, l), Pt(a, u), Bt(this.projectionDeltaWithTransform, this.layoutCorrected, a, u);
      }
    }
    registerSharedNode(s, a) {
      this.sharedNodes.has(s) || this.sharedNodes.set(s, new Gd()), this.sharedNodes.get(s).add(a);
      const c = a.options.initialPromotionConfig;
      a.promote({
        transition: c ? c.transition : void 0,
        preserveFollowOpacity:
          c && c.shouldPreserveFollowOpacity ? c.shouldPreserveFollowOpacity(a) : void 0,
      });
    }
    isLead() {
      const s = this.getStack();
      return s ? s.lead === this : !0;
    }
    getLead() {
      var s;
      const { layoutId: a } = this.options;
      return a ? ((s = this.getStack()) === null || s === void 0 ? void 0 : s.lead) || this : this;
    }
    getPrevLead() {
      var s;
      const { layoutId: a } = this.options;
      return a ? ((s = this.getStack()) === null || s === void 0 ? void 0 : s.prevLead) : void 0;
    }
    getStack() {
      const { layoutId: s } = this.options;
      if (s) return this.root.sharedNodes.get(s);
    }
    promote({ needsReset: s, transition: a, preserveFollowOpacity: l } = {}) {
      const c = this.getStack();
      c && c.promote(this, l),
        s && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        a && this.setOptions({ transition: a });
    }
    relegate() {
      const s = this.getStack();
      return s ? s.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: s } = this.options;
      if (!s) return;
      let a = !1;
      const { latestValues: l } = s;
      if (
        ((l.z || l.rotate || l.rotateX || l.rotateY || l.rotateZ || l.skewX || l.skewY) && (a = !0),
        !a)
      )
        return;
      const c = {};
      l.z && Jn('z', s, c, this.animationValues);
      for (let u = 0; u < Zn.length; u++)
        Jn(`rotate${Zn[u]}`, s, c, this.animationValues),
          Jn(`skew${Zn[u]}`, s, c, this.animationValues);
      s.render();
      for (const u in c)
        s.setStaticValue(u, c[u]), this.animationValues && (this.animationValues[u] = c[u]);
      s.scheduleRender();
    }
    getProjectionStyles(s) {
      var a, l;
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) return ef;
      const c = { visibility: '' },
        u = this.getTransformTemplate();
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (c.opacity = ''),
          (c.pointerEvents = xn(s == null ? void 0 : s.pointerEvents) || ''),
          (c.transform = u ? u(this.latestValues, '') : 'none'),
          c
        );
      const h = this.getLead();
      if (!this.projectionDelta || !this.layout || !h.target) {
        const b = {};
        return (
          this.options.layoutId &&
            ((b.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1),
            (b.pointerEvents = xn(s == null ? void 0 : s.pointerEvents) || '')),
          this.hasProjected &&
            !it(this.latestValues) &&
            ((b.transform = u ? u({}, '') : 'none'), (this.hasProjected = !1)),
          b
        );
      }
      const d = h.animationValues || h.latestValues;
      this.applyTransformsToTarget(),
        (c.transform = Yd(this.projectionDeltaWithTransform, this.treeScale, d)),
        u && (c.transform = u(d, c.transform));
      const { x: p, y: v } = this.projectionDelta;
      (c.transformOrigin = `${p.origin * 100}% ${v.origin * 100}% 0`),
        h.animationValues
          ? (c.opacity =
              h === this
                ? (l = (a = d.opacity) !== null && a !== void 0 ? a : this.latestValues.opacity) !==
                    null && l !== void 0
                  ? l
                  : 1
                : this.preserveOpacity
                  ? this.latestValues.opacity
                  : d.opacityExit)
          : (c.opacity =
              h === this
                ? d.opacity !== void 0
                  ? d.opacity
                  : ''
                : d.opacityExit !== void 0
                  ? d.opacityExit
                  : 0);
      for (const b in Rn) {
        if (d[b] === void 0) continue;
        const { correct: P, applyTo: S } = Rn[b],
          w = c.transform === 'none' ? d[b] : P(d[b], h);
        if (S) {
          const C = S.length;
          for (let M = 0; M < C; M++) c[S[M]] = w;
        } else c[b] = w;
      }
      return (
        this.options.layoutId &&
          (c.pointerEvents = h === this ? xn(s == null ? void 0 : s.pointerEvents) || '' : 'none'),
        c
      );
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach((s) => {
        var a;
        return (a = s.currentAnimation) === null || a === void 0 ? void 0 : a.stop();
      }),
        this.root.nodes.forEach(Bs),
        this.root.sharedNodes.clear();
    }
  };
}
function nf(e) {
  e.updateLayout();
}
function rf(e) {
  var t;
  const n = ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) || e.snapshot;
  if (e.isLead() && e.layout && n && e.hasListeners('didUpdate')) {
    const { layoutBox: i, measuredBox: r } = e.layout,
      { animationType: o } = e.options,
      s = n.source !== e.layout.source;
    o === 'size'
      ? be((h) => {
          const d = s ? n.measuredBox[h] : n.layoutBox[h],
            p = ye(d);
          (d.min = i[h].min), (d.max = d.min + p);
        })
      : Fa(o, n.layoutBox, i) &&
        be((h) => {
          const d = s ? n.measuredBox[h] : n.layoutBox[h],
            p = ye(i[h]);
          (d.max = d.min + p),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0), (e.relativeTarget[h].max = e.relativeTarget[h].min + p));
        });
    const a = xt();
    Bt(a, i, n.layoutBox);
    const l = xt();
    s ? Bt(l, e.applyTransform(r, !0), n.measuredBox) : Bt(l, i, n.layoutBox);
    const c = !Aa(a);
    let u = !1;
    if (!e.resumeFrom) {
      const h = e.getClosestProjectingParent();
      if (h && !h.resumeFrom) {
        const { snapshot: d, layout: p } = h;
        if (d && p) {
          const v = ne();
          Ut(v, n.layoutBox, d.layoutBox);
          const b = ne();
          Ut(b, i, p.layoutBox),
            Da(v, b) || (u = !0),
            h.options.layoutRoot &&
              ((e.relativeTarget = b), (e.relativeTargetOrigin = v), (e.relativeParent = h));
        }
      }
    }
    e.notifyListeners('didUpdate', {
      layout: i,
      snapshot: n,
      delta: l,
      layoutDelta: a,
      hasLayoutChanged: c,
      hasRelativeTargetChanged: u,
    });
  } else if (e.isLead()) {
    const { onExitComplete: i } = e.options;
    i && i();
  }
  e.options.transition = void 0;
}
function sf(e) {
  It && rt.totalNodes++,
    e.parent &&
      (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
      e.isSharedProjectionDirty ||
        (e.isSharedProjectionDirty = !!(
          e.isProjectionDirty ||
          e.parent.isProjectionDirty ||
          e.parent.isSharedProjectionDirty
        )),
      e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function of(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function af(e) {
  e.clearSnapshot();
}
function Bs(e) {
  e.clearMeasurements();
}
function lf(e) {
  e.isLayoutDirty = !1;
}
function cf(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify('BeforeLayoutMeasure'), e.resetTransform();
}
function Us(e) {
  e.finishAnimation(),
    (e.targetDelta = e.relativeTarget = e.target = void 0),
    (e.isProjectionDirty = !0);
}
function uf(e) {
  e.resolveTargetDelta();
}
function hf(e) {
  e.calcProjection();
}
function df(e) {
  e.resetSkewAndRotation();
}
function ff(e) {
  e.removeLeadSnapshot();
}
function Ns(e, t, n) {
  (e.translate = Z(t.translate, 0, n)),
    (e.scale = Z(t.scale, 1, n)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint);
}
function _s(e, t, n, i) {
  (e.min = Z(t.min, n.min, i)), (e.max = Z(t.max, n.max, i));
}
function pf(e, t, n, i) {
  _s(e.x, t.x, n.x, i), _s(e.y, t.y, n.y, i);
}
function mf(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const gf = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  $s = (e) =>
    typeof navigator < 'u' && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e),
  zs = $s('applewebkit/') && !$s('chrome/') ? Math.round : de;
function Ws(e) {
  (e.min = zs(e.min)), (e.max = zs(e.max));
}
function vf(e) {
  Ws(e.x), Ws(e.y);
}
function Fa(e, t, n) {
  return e === 'position' || (e === 'preserve-aspect' && !md(js(t), js(n), 0.2));
}
function yf(e) {
  var t;
  return e !== e.root && ((t = e.scroll) === null || t === void 0 ? void 0 : t.wasRoot);
}
const xf = La({
    attachResizeListener: (e, t) => ke(e, 'resize', t),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  Qn = { current: void 0 },
  ka = La({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!Qn.current) {
        const e = new xf({});
        e.mount(window), e.setOptions({ layoutScroll: !0 }), (Qn.current = e);
      }
      return Qn.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : 'none';
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === 'fixed',
  }),
  bf = { pan: { Feature: Vd }, drag: { Feature: Dd, ProjectionNode: ka, MeasureLayout: Ra } };
function Ks(e, t) {
  const n = t ? 'pointerenter' : 'pointerleave',
    i = t ? 'onHoverStart' : 'onHoverEnd',
    r = (o, s) => {
      if (o.pointerType === 'touch' || va()) return;
      const a = e.getProps();
      e.animationState && a.whileHover && e.animationState.setActive('whileHover', t);
      const l = a[i];
      l && H.postRender(() => l(o, s));
    };
  return Be(e.current, n, r, { passive: !e.getProps()[i] });
}
class Pf extends Ze {
  mount() {
    this.unmount = Oe(Ks(this.node, !0), Ks(this.node, !1));
  }
  unmount() {}
}
class Tf extends Ze {
  constructor() {
    super(...arguments), (this.isActive = !1);
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(':focus-visible');
    } catch {
      t = !0;
    }
    !t ||
      !this.node.animationState ||
      (this.node.animationState.setActive('whileFocus', !0), (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive('whileFocus', !1), (this.isActive = !1));
  }
  mount() {
    this.unmount = Oe(
      ke(this.node.current, 'focus', () => this.onFocus()),
      ke(this.node.current, 'blur', () => this.onBlur())
    );
  }
  unmount() {}
}
const ja = (e, t) => (t ? (e === t ? !0 : ja(e, t.parentElement)) : !1);
function ei(e, t) {
  if (!t) return;
  const n = new PointerEvent('pointer' + e);
  t(n, kn(n));
}
class wf extends Ze {
  constructor() {
    super(...arguments),
      (this.removeStartListeners = de),
      (this.removeEndListeners = de),
      (this.removeAccessibleListeners = de),
      (this.startPointerPress = (t, n) => {
        if (this.isPressing) return;
        this.removeEndListeners();
        const i = this.node.getProps(),
          o = Be(
            window,
            'pointerup',
            (a, l) => {
              if (!this.checkPressEnd()) return;
              const { onTap: c, onTapCancel: u, globalTapTarget: h } = this.node.getProps(),
                d = !h && !ja(this.node.current, a.target) ? u : c;
              d && H.update(() => d(a, l));
            },
            { passive: !(i.onTap || i.onPointerUp) }
          ),
          s = Be(window, 'pointercancel', (a, l) => this.cancelPress(a, l), {
            passive: !(i.onTapCancel || i.onPointerCancel),
          });
        (this.removeEndListeners = Oe(o, s)), this.startPress(t, n);
      }),
      (this.startAccessiblePress = () => {
        const t = (o) => {
            if (o.key !== 'Enter' || this.isPressing) return;
            const s = (a) => {
              a.key !== 'Enter' ||
                !this.checkPressEnd() ||
                ei('up', (l, c) => {
                  const { onTap: u } = this.node.getProps();
                  u && H.postRender(() => u(l, c));
                });
            };
            this.removeEndListeners(),
              (this.removeEndListeners = ke(this.node.current, 'keyup', s)),
              ei('down', (a, l) => {
                this.startPress(a, l);
              });
          },
          n = ke(this.node.current, 'keydown', t),
          i = () => {
            this.isPressing && ei('cancel', (o, s) => this.cancelPress(o, s));
          },
          r = ke(this.node.current, 'blur', i);
        this.removeAccessibleListeners = Oe(n, r);
      });
  }
  startPress(t, n) {
    this.isPressing = !0;
    const { onTapStart: i, whileTap: r } = this.node.getProps();
    r && this.node.animationState && this.node.animationState.setActive('whileTap', !0),
      i && H.postRender(() => i(t, n));
  }
  checkPressEnd() {
    return (
      this.removeEndListeners(),
      (this.isPressing = !1),
      this.node.getProps().whileTap &&
        this.node.animationState &&
        this.node.animationState.setActive('whileTap', !1),
      !va()
    );
  }
  cancelPress(t, n) {
    if (!this.checkPressEnd()) return;
    const { onTapCancel: i } = this.node.getProps();
    i && H.postRender(() => i(t, n));
  }
  mount() {
    const t = this.node.getProps(),
      n = Be(
        t.globalTapTarget ? window : this.node.current,
        'pointerdown',
        this.startPointerPress,
        { passive: !(t.onTapStart || t.onPointerStart) }
      ),
      i = ke(this.node.current, 'focus', this.startAccessiblePress);
    this.removeStartListeners = Oe(n, i);
  }
  unmount() {
    this.removeStartListeners(), this.removeEndListeners(), this.removeAccessibleListeners();
  }
}
const Pi = new WeakMap(),
  ti = new WeakMap(),
  Sf = (e) => {
    const t = Pi.get(e.target);
    t && t(e);
  },
  Cf = (e) => {
    e.forEach(Sf);
  };
function Rf({ root: e, ...t }) {
  const n = e || document;
  ti.has(n) || ti.set(n, {});
  const i = ti.get(n),
    r = JSON.stringify(t);
  return i[r] || (i[r] = new IntersectionObserver(Cf, { root: e, ...t })), i[r];
}
function Ef(e, t, n) {
  const i = Rf(t);
  return (
    Pi.set(e, n),
    i.observe(e),
    () => {
      Pi.delete(e), i.unobserve(e);
    }
  );
}
const Mf = { some: 0, all: 1 };
class Af extends Ze {
  constructor() {
    super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(),
      { root: n, margin: i, amount: r = 'some', once: o } = t,
      s = {
        root: n ? n.current : void 0,
        rootMargin: i,
        threshold: typeof r == 'number' ? r : Mf[r],
      },
      a = (l) => {
        const { isIntersecting: c } = l;
        if (this.isInView === c || ((this.isInView = c), o && !c && this.hasEnteredView)) return;
        c && (this.hasEnteredView = !0),
          this.node.animationState && this.node.animationState.setActive('whileInView', c);
        const { onViewportEnter: u, onViewportLeave: h } = this.node.getProps(),
          d = c ? u : h;
        d && d(l);
      };
    return Ef(this.node.current, s, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > 'u') return;
    const { props: t, prevProps: n } = this.node;
    ['amount', 'margin', 'root'].some(Df(t, n)) && this.startObserver();
  }
  unmount() {}
}
function Df({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const Vf = {
    inView: { Feature: Af },
    tap: { Feature: wf },
    focus: { Feature: Tf },
    hover: { Feature: Pf },
  },
  Lf = { layout: { ProjectionNode: ka, MeasureLayout: Ra } },
  Xi = x.createContext({ transformPagePoint: (e) => e, isStatic: !1, reducedMotion: 'never' }),
  jn = x.createContext({}),
  qi = typeof window < 'u',
  Ia = qi ? x.useLayoutEffect : x.useEffect,
  Oa = x.createContext({ strict: !1 });
let Hs = !1;
function Ff(e, t, n, i, r) {
  var o;
  const { visualElement: s } = x.useContext(jn),
    a = x.useContext(Oa),
    l = x.useContext(Qt),
    c = x.useContext(Xi).reducedMotion,
    u = x.useRef();
  (i = i || a.renderer),
    !u.current &&
      i &&
      (u.current = i(e, {
        visualState: t,
        parent: s,
        props: n,
        presenceContext: l,
        blockInitialAnimation: l ? l.initial === !1 : !1,
        reducedMotionConfig: c,
      }));
  const h = u.current,
    d = x.useContext(Ca);
  h && !h.projection && r && (h.type === 'html' || h.type === 'svg') && jf(u.current, n, r, d),
    x.useInsertionEffect(() => {
      h && h.update(n, l);
    });
  const p = n[aa],
    v = x.useRef(
      !!p &&
        !window.MotionHandoffIsComplete &&
        ((o = window.MotionHasOptimisedAnimation) === null || o === void 0
          ? void 0
          : o.call(window, p))
    );
  return (
    Ia(() => {
      h &&
        (h.updateFeatures(),
        Yi.render(h.render),
        v.current && h.animationState && h.animationState.animateChanges());
    }),
    x.useEffect(() => {
      h &&
        (!v.current && h.animationState && h.animationState.animateChanges(),
        (v.current = !1),
        Hs || ((Hs = !0), queueMicrotask(kf)));
    }),
    h
  );
}
function kf() {
  window.MotionHandoffIsComplete = !0;
}
function jf(e, t, n, i) {
  const { layoutId: r, layout: o, drag: s, dragConstraints: a, layoutScroll: l, layoutRoot: c } = t;
  (e.projection = new n(e.latestValues, t['data-framer-portal-id'] ? void 0 : Ba(e.parent))),
    e.projection.setOptions({
      layoutId: r,
      layout: o,
      alwaysMeasureLayout: !!s || (a && yt(a)),
      visualElement: e,
      animationType: typeof o == 'string' ? o : 'both',
      initialPromotionConfig: i,
      layoutScroll: l,
      layoutRoot: c,
    });
}
function Ba(e) {
  if (e) return e.options.allowProjection !== !1 ? e.projection : Ba(e.parent);
}
function If(e, t, n) {
  return x.useCallback(
    (i) => {
      i && e.mount && e.mount(i),
        t && (i ? t.mount(i) : t.unmount()),
        n && (typeof n == 'function' ? n(i) : yt(n) && (n.current = i));
    },
    [t]
  );
}
function In(e) {
  return $t(e.animate) || Ai.some((t) => zt(e[t]));
}
function Ua(e) {
  return !!(In(e) || e.variants);
}
function Of(e, t) {
  if (In(e)) {
    const { initial: n, animate: i } = e;
    return { initial: n === !1 || zt(n) ? n : void 0, animate: zt(i) ? i : void 0 };
  }
  return e.inherit !== !1 ? t : {};
}
function Bf(e) {
  const { initial: t, animate: n } = Of(e, x.useContext(jn));
  return x.useMemo(() => ({ initial: t, animate: n }), [Gs(t), Gs(n)]);
}
function Gs(e) {
  return Array.isArray(e) ? e.join(' ') : e;
}
const Ys = {
    animation: [
      'animate',
      'variants',
      'whileHover',
      'whileTap',
      'exit',
      'whileInView',
      'whileFocus',
      'whileDrag',
    ],
    exit: ['exit'],
    drag: ['drag', 'dragControls'],
    focus: ['whileFocus'],
    hover: ['whileHover', 'onHoverStart', 'onHoverEnd'],
    tap: ['whileTap', 'onTap', 'onTapStart', 'onTapCancel'],
    pan: ['onPan', 'onPanStart', 'onPanSessionStart', 'onPanEnd'],
    inView: ['whileInView', 'onViewportEnter', 'onViewportLeave'],
    layout: ['layout', 'layoutId'],
  },
  St = {};
for (const e in Ys) St[e] = { isEnabled: (t) => Ys[e].some((n) => !!t[n]) };
function Uf(e) {
  for (const t in e) St[t] = { ...St[t], ...e[t] };
}
const Nf = Symbol.for('motionComponentSymbol');
function _f({
  preloadedFeatures: e,
  createVisualElement: t,
  useRender: n,
  useVisualState: i,
  Component: r,
}) {
  e && Uf(e);
  function o(a, l) {
    let c;
    const u = { ...x.useContext(Xi), ...a, layoutId: $f(a) },
      { isStatic: h } = u,
      d = Bf(a),
      p = i(a, h);
    if (!h && qi) {
      zf();
      const v = Wf(u);
      (c = v.MeasureLayout), (d.visualElement = Ff(r, p, u, t, v.ProjectionNode));
    }
    return G.jsxs(jn.Provider, {
      value: d,
      children: [
        c && d.visualElement ? G.jsx(c, { visualElement: d.visualElement, ...u }) : null,
        n(r, a, If(p, d.visualElement, l), p, h, d.visualElement),
      ],
    });
  }
  const s = x.forwardRef(o);
  return (s[Nf] = r), s;
}
function $f({ layoutId: e }) {
  const t = x.useContext(Gi).id;
  return t && e !== void 0 ? t + '-' + e : e;
}
function zf(e, t) {
  x.useContext(Oa).strict;
}
function Wf(e) {
  const { drag: t, layout: n } = St;
  if (!t && !n) return {};
  const i = { ...t, ...n };
  return {
    MeasureLayout:
      (t != null && t.isEnabled(e)) || (n != null && n.isEnabled(e)) ? i.MeasureLayout : void 0,
    ProjectionNode: i.ProjectionNode,
  };
}
const Kf = [
  'animate',
  'circle',
  'defs',
  'desc',
  'ellipse',
  'g',
  'image',
  'line',
  'filter',
  'marker',
  'mask',
  'metadata',
  'path',
  'pattern',
  'polygon',
  'polyline',
  'rect',
  'stop',
  'switch',
  'symbol',
  'svg',
  'text',
  'tspan',
  'use',
  'view',
];
function Zi(e) {
  return typeof e != 'string' || e.includes('-') ? !1 : !!(Kf.indexOf(e) > -1 || /[A-Z]/u.test(e));
}
function Na(e, { style: t, vars: n }, i, r) {
  Object.assign(e.style, t, r && r.getProjectionStyles(i));
  for (const o in n) e.style.setProperty(o, n[o]);
}
const _a = new Set([
  'baseFrequency',
  'diffuseConstant',
  'kernelMatrix',
  'kernelUnitLength',
  'keySplines',
  'keyTimes',
  'limitingConeAngle',
  'markerHeight',
  'markerWidth',
  'numOctaves',
  'targetX',
  'targetY',
  'surfaceScale',
  'specularConstant',
  'specularExponent',
  'stdDeviation',
  'tableValues',
  'viewBox',
  'gradientTransform',
  'pathLength',
  'startOffset',
  'textLength',
  'lengthAdjust',
]);
function $a(e, t, n, i) {
  Na(e, t, void 0, i);
  for (const r in t.attrs) e.setAttribute(_a.has(r) ? r : Fn(r), t.attrs[r]);
}
function za(e, { layout: t, layoutId: n }) {
  return (
    qe.has(e) || e.startsWith('origin') || ((t || n !== void 0) && (!!Rn[e] || e === 'opacity'))
  );
}
function Ji(e, t, n) {
  var i;
  const { style: r } = e,
    o = {};
  for (const s in r)
    (he(r[s]) ||
      (t.style && he(t.style[s])) ||
      za(s, e) ||
      ((i = n == null ? void 0 : n.getValue(s)) === null || i === void 0 ? void 0 : i.liveStyle) !==
        void 0) &&
      (o[s] = r[s]);
  return n && r && typeof r.willChange == 'string' && (n.applyWillChange = !1), o;
}
function Wa(e, t, n) {
  const i = Ji(e, t, n);
  for (const r in e)
    if (he(e[r]) || he(t[r])) {
      const o = qt.indexOf(r) !== -1 ? 'attr' + r.charAt(0).toUpperCase() + r.substring(1) : r;
      i[o] = e[r];
    }
  return i;
}
function Qi(e) {
  const t = x.useRef(null);
  return t.current === null && (t.current = e()), t.current;
}
function Hf(
  { applyWillChange: e = !1, scrapeMotionValuesFromProps: t, createRenderState: n, onMount: i },
  r,
  o,
  s,
  a
) {
  const l = { latestValues: Gf(r, o, s, a ? !1 : e, t), renderState: n() };
  return i && (l.mount = (c) => i(r, c, l)), l;
}
const Ka = (e) => (t, n) => {
  const i = x.useContext(jn),
    r = x.useContext(Qt),
    o = () => Hf(e, t, i, r, n);
  return n ? o() : Qi(o);
};
function Xs(e, t, n) {
  const i = Array.isArray(t) ? t : [t];
  for (let r = 0; r < i.length; r++) {
    const o = Ei(e, i[r]);
    if (o) {
      const { transitionEnd: s, transition: a, ...l } = o;
      n(l, s);
    }
  }
}
function Gf(e, t, n, i, r) {
  var o;
  const s = {};
  let a = i && ((o = e.style) === null || o === void 0 ? void 0 : o.willChange) === void 0;
  const l = r(e, {});
  for (const b in l) s[b] = xn(l[b]);
  let { initial: c, animate: u } = e;
  const h = In(e),
    d = Ua(e);
  t &&
    d &&
    !h &&
    e.inherit !== !1 &&
    (c === void 0 && (c = t.initial), u === void 0 && (u = t.animate));
  let p = n ? n.initial === !1 : !1;
  p = p || c === !1;
  const v = p ? u : c;
  return (
    v &&
      typeof v != 'boolean' &&
      !$t(v) &&
      Xs(e, v, (b, P) => {
        for (const S in b) {
          let w = b[S];
          if (Array.isArray(w)) {
            const C = p ? w.length - 1 : 0;
            w = w[C];
          }
          w !== null && (s[S] = w);
        }
        for (const S in P) s[S] = P[S];
      }),
    a &&
      u &&
      c !== !1 &&
      !$t(u) &&
      Xs(e, u, (b) => {
        for (const P in b)
          if (ca(P)) {
            s.willChange = 'transform';
            return;
          }
      }),
    s
  );
}
const er = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} }),
  Ha = () => ({ ...er(), attrs: {} }),
  Ga = (e, t) => (t && typeof e == 'number' ? t.transform(e) : e),
  Yf = { x: 'translateX', y: 'translateY', z: 'translateZ', transformPerspective: 'perspective' },
  Xf = qt.length;
function qf(e, t, n) {
  let i = '',
    r = !0;
  for (let o = 0; o < Xf; o++) {
    const s = qt[o],
      a = e[s];
    if (a === void 0) continue;
    let l = !0;
    if (
      (typeof a == 'number'
        ? (l = a === (s.startsWith('scale') ? 1 : 0))
        : (l = parseFloat(a) === 0),
      !l || n)
    ) {
      const c = Ga(a, Oi[s]);
      if (!l) {
        r = !1;
        const u = Yf[s] || s;
        i += `${u}(${c}) `;
      }
      n && (t[s] = c);
    }
  }
  return (i = i.trim()), n ? (i = n(t, r ? '' : i)) : r && (i = 'none'), i;
}
function tr(e, t, n) {
  const { style: i, vars: r, transformOrigin: o } = e;
  let s = !1,
    a = !1;
  for (const l in t) {
    const c = t[l];
    if (qe.has(l)) {
      s = !0;
      continue;
    } else if (Io(l)) {
      r[l] = c;
      continue;
    } else {
      const u = Ga(c, Oi[l]);
      l.startsWith('origin') ? ((a = !0), (o[l] = u)) : (i[l] = u);
    }
  }
  if (
    (t.transform ||
      (s || n ? (i.transform = qf(t, e.transform, n)) : i.transform && (i.transform = 'none')),
    a)
  ) {
    const { originX: l = '50%', originY: c = '50%', originZ: u = 0 } = o;
    i.transformOrigin = `${l} ${c} ${u}`;
  }
}
function qs(e, t, n) {
  return typeof e == 'string' ? e : F.transform(t + n * e);
}
function Zf(e, t, n) {
  const i = qs(t, e.x, e.width),
    r = qs(n, e.y, e.height);
  return `${i} ${r}`;
}
const Jf = { offset: 'stroke-dashoffset', array: 'stroke-dasharray' },
  Qf = { offset: 'strokeDashoffset', array: 'strokeDasharray' };
function ep(e, t, n = 1, i = 0, r = !0) {
  e.pathLength = 1;
  const o = r ? Jf : Qf;
  e[o.offset] = F.transform(-i);
  const s = F.transform(t),
    a = F.transform(n);
  e[o.array] = `${s} ${a}`;
}
function nr(
  e,
  {
    attrX: t,
    attrY: n,
    attrScale: i,
    originX: r,
    originY: o,
    pathLength: s,
    pathSpacing: a = 1,
    pathOffset: l = 0,
    ...c
  },
  u,
  h
) {
  if ((tr(e, c, h), u)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  (e.attrs = e.style), (e.style = {});
  const { attrs: d, style: p, dimensions: v } = e;
  d.transform && (v && (p.transform = d.transform), delete d.transform),
    v &&
      (r !== void 0 || o !== void 0 || p.transform) &&
      (p.transformOrigin = Zf(v, r !== void 0 ? r : 0.5, o !== void 0 ? o : 0.5)),
    t !== void 0 && (d.x = t),
    n !== void 0 && (d.y = n),
    i !== void 0 && (d.scale = i),
    s !== void 0 && ep(d, s, a, l, !1);
}
const ir = (e) => typeof e == 'string' && e.toLowerCase() === 'svg',
  tp = {
    useVisualState: Ka({
      scrapeMotionValuesFromProps: Wa,
      createRenderState: Ha,
      onMount: (e, t, { renderState: n, latestValues: i }) => {
        H.read(() => {
          try {
            n.dimensions = typeof t.getBBox == 'function' ? t.getBBox() : t.getBoundingClientRect();
          } catch {
            n.dimensions = { x: 0, y: 0, width: 0, height: 0 };
          }
        }),
          H.render(() => {
            nr(n, i, ir(t.tagName), e.transformTemplate), $a(t, n);
          });
      },
    }),
  },
  np = {
    useVisualState: Ka({
      applyWillChange: !0,
      scrapeMotionValuesFromProps: Ji,
      createRenderState: er,
    }),
  };
function Ya(e, t, n) {
  for (const i in t) !he(t[i]) && !za(i, n) && (e[i] = t[i]);
}
function ip({ transformTemplate: e }, t) {
  return x.useMemo(() => {
    const n = er();
    return tr(n, t, e), Object.assign({}, n.vars, n.style);
  }, [t]);
}
function rp(e, t) {
  const n = e.style || {},
    i = {};
  return Ya(i, n, e), Object.assign(i, ip(e, t)), i;
}
function sp(e, t) {
  const n = {},
    i = rp(e, t);
  return (
    e.drag &&
      e.dragListener !== !1 &&
      ((n.draggable = !1),
      (i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = 'none'),
      (i.touchAction = e.drag === !0 ? 'none' : `pan-${e.drag === 'x' ? 'y' : 'x'}`)),
    e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0),
    (n.style = i),
    n
  );
}
const op = new Set([
  'animate',
  'exit',
  'variants',
  'initial',
  'style',
  'values',
  'variants',
  'transition',
  'transformTemplate',
  'custom',
  'inherit',
  'onBeforeLayoutMeasure',
  'onAnimationStart',
  'onAnimationComplete',
  'onUpdate',
  'onDragStart',
  'onDrag',
  'onDragEnd',
  'onMeasureDragConstraints',
  'onDirectionLock',
  'onDragTransitionEnd',
  '_dragX',
  '_dragY',
  'onHoverStart',
  'onHoverEnd',
  'onViewportEnter',
  'onViewportLeave',
  'globalTapTarget',
  'ignoreStrict',
  'viewport',
]);
function En(e) {
  return (
    e.startsWith('while') ||
    (e.startsWith('drag') && e !== 'draggable') ||
    e.startsWith('layout') ||
    e.startsWith('onTap') ||
    e.startsWith('onPan') ||
    e.startsWith('onLayout') ||
    op.has(e)
  );
}
let Xa = (e) => !En(e);
function ap(e) {
  e && (Xa = (t) => (t.startsWith('on') ? !En(t) : e(t)));
}
try {
  ap(require('@emotion/is-prop-valid').default);
} catch {}
function lp(e, t, n) {
  const i = {};
  for (const r in e)
    (r === 'values' && typeof e.values == 'object') ||
      ((Xa(r) ||
        (n === !0 && En(r)) ||
        (!t && !En(r)) ||
        (e.draggable && r.startsWith('onDrag'))) &&
        (i[r] = e[r]));
  return i;
}
function cp(e, t, n, i) {
  const r = x.useMemo(() => {
    const o = Ha();
    return nr(o, t, ir(i), e.transformTemplate), { ...o.attrs, style: { ...o.style } };
  }, [t]);
  if (e.style) {
    const o = {};
    Ya(o, e.style, e), (r.style = { ...o, ...r.style });
  }
  return r;
}
function up(e = !1) {
  return (n, i, r, { latestValues: o }, s) => {
    const l = (Zi(n) ? cp : sp)(i, o, s, n),
      c = lp(i, typeof n == 'string', e),
      u = n !== x.Fragment ? { ...c, ...l, ref: r } : {},
      { children: h } = i,
      d = x.useMemo(() => (he(h) ? h.get() : h), [h]);
    return x.createElement(n, { ...u, children: d });
  };
}
function hp(e, t) {
  return function (i, { forwardMotionProps: r } = { forwardMotionProps: !1 }) {
    const s = {
      ...(Zi(i) ? tp : np),
      preloadedFeatures: e,
      useRender: up(r),
      createVisualElement: t,
      Component: i,
    };
    return _f(s);
  };
}
const Ti = { current: null },
  qa = { current: !1 };
function dp() {
  if (((qa.current = !0), !!qi))
    if (window.matchMedia) {
      const e = window.matchMedia('(prefers-reduced-motion)'),
        t = () => (Ti.current = e.matches);
      e.addListener(t), t();
    } else Ti.current = !1;
}
function fp(e, t, n) {
  for (const i in t) {
    const r = t[i],
      o = n[i];
    if (he(r)) e.addValue(i, r);
    else if (he(o)) e.addValue(i, Ht(r, { owner: e }));
    else if (o !== r)
      if (e.hasValue(i)) {
        const s = e.getValue(i);
        s.liveStyle === !0 ? s.jump(r) : s.hasAnimated || s.set(r);
      } else {
        const s = e.getStaticValue(i);
        e.addValue(i, Ht(s !== void 0 ? s : r, { owner: e }));
      }
  }
  for (const i in n) t[i] === void 0 && e.removeValue(i);
  return t;
}
const Zs = new WeakMap(),
  pp = [...Uo, ue, Xe],
  mp = (e) => pp.find(Bo(e)),
  Js = [
    'AnimationStart',
    'AnimationComplete',
    'Update',
    'BeforeLayoutMeasure',
    'LayoutMeasure',
    'LayoutAnimationStart',
    'LayoutAnimationComplete',
  ];
class gp {
  scrapeMotionValuesFromProps(t, n, i) {
    return {};
  }
  constructor(
    {
      parent: t,
      props: n,
      presenceContext: i,
      reducedMotionConfig: r,
      blockInitialAnimation: o,
      visualState: s,
    },
    a = {}
  ) {
    (this.applyWillChange = !1),
      (this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.KeyframeResolver = ki),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify('Update', this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
      }),
      (this.renderScheduledAt = 0),
      (this.scheduleRender = () => {
        const d = Ce.now();
        this.renderScheduledAt < d && ((this.renderScheduledAt = d), H.render(this.render, !1, !0));
      });
    const { latestValues: l, renderState: c } = s;
    (this.latestValues = l),
      (this.baseTarget = { ...l }),
      (this.initialValues = n.initial ? { ...l } : {}),
      (this.renderState = c),
      (this.parent = t),
      (this.props = n),
      (this.presenceContext = i),
      (this.depth = t ? t.depth + 1 : 0),
      (this.reducedMotionConfig = r),
      (this.options = a),
      (this.blockInitialAnimation = !!o),
      (this.isControllingVariants = In(n)),
      (this.isVariantNode = Ua(n)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(t && t.current));
    const { willChange: u, ...h } = this.scrapeMotionValuesFromProps(n, {}, this);
    for (const d in h) {
      const p = h[d];
      l[d] !== void 0 && he(p) && p.set(l[d], !1);
    }
  }
  mount(t) {
    (this.current = t),
      Zs.set(t, this),
      this.projection && !this.projection.instance && this.projection.mount(t),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((n, i) => this.bindToMotionValue(i, n)),
      qa.current || dp(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === 'never'
          ? !1
          : this.reducedMotionConfig === 'always'
            ? !0
            : Ti.current),
      this.parent && this.parent.children.add(this),
      this.update(this.props, this.presenceContext);
  }
  unmount() {
    Zs.delete(this.current),
      this.projection && this.projection.unmount(),
      Ge(this.notifyUpdate),
      Ge(this.render),
      this.valueSubscriptions.forEach((t) => t()),
      this.valueSubscriptions.clear(),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent && this.parent.children.delete(this);
    for (const t in this.events) this.events[t].clear();
    for (const t in this.features) {
      const n = this.features[t];
      n && (n.unmount(), (n.isMounted = !1));
    }
    this.current = null;
  }
  bindToMotionValue(t, n) {
    this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
    const i = qe.has(t),
      r = n.on('change', (a) => {
        (this.latestValues[t] = a),
          this.props.onUpdate && H.preRender(this.notifyUpdate),
          i && this.projection && (this.projection.isTransformDirty = !0);
      }),
      o = n.on('renderRequest', this.scheduleRender);
    let s;
    window.MotionCheckAppearSync && (s = window.MotionCheckAppearSync(this, t, n)),
      this.valueSubscriptions.set(t, () => {
        r(), o(), s && s(), n.owner && n.stop();
      });
  }
  sortNodePosition(t) {
    return !this.current || !this.sortInstanceNodePosition || this.type !== t.type
      ? 0
      : this.sortInstanceNodePosition(this.current, t.current);
  }
  updateFeatures() {
    let t = 'animation';
    for (t in St) {
      const n = St[t];
      if (!n) continue;
      const { isEnabled: i, Feature: r } = n;
      if (
        (!this.features[t] && r && i(this.props) && (this.features[t] = new r(this)),
        this.features[t])
      ) {
        const o = this.features[t];
        o.isMounted ? o.update() : (o.mount(), (o.isMounted = !0));
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  measureViewportBox() {
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : ne();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, n) {
    this.latestValues[t] = n;
  }
  update(t, n) {
    (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = t),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = n);
    for (let i = 0; i < Js.length; i++) {
      const r = Js[i];
      this.propEventSubscriptions[r] &&
        (this.propEventSubscriptions[r](), delete this.propEventSubscriptions[r]);
      const o = 'on' + r,
        s = t[o];
      s && (this.propEventSubscriptions[r] = this.on(r, s));
    }
    (this.prevMotionValues = fp(
      this,
      this.scrapeMotionValuesFromProps(t, this.prevProps, this),
      this.prevMotionValues
    )),
      this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
  }
  addVariantChild(t) {
    const n = this.getClosestVariantNode();
    if (n) return n.variantChildren && n.variantChildren.add(t), () => n.variantChildren.delete(t);
  }
  addValue(t, n) {
    const i = this.values.get(t);
    n !== i &&
      (i && this.removeValue(t),
      this.bindToMotionValue(t, n),
      this.values.set(t, n),
      (this.latestValues[t] = n.get()));
  }
  removeValue(t) {
    this.values.delete(t);
    const n = this.valueSubscriptions.get(t);
    n && (n(), this.valueSubscriptions.delete(t)),
      delete this.latestValues[t],
      this.removeValueFromRenderState(t, this.renderState);
  }
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, n) {
    if (this.props.values && this.props.values[t]) return this.props.values[t];
    let i = this.values.get(t);
    return (
      i === void 0 &&
        n !== void 0 &&
        ((i = Ht(n === null ? void 0 : n, { owner: this })), this.addValue(t, i)),
      i
    );
  }
  readValue(t, n) {
    var i;
    let r =
      this.latestValues[t] !== void 0 || !this.current
        ? this.latestValues[t]
        : (i = this.getBaseTargetFromProps(this.props, t)) !== null && i !== void 0
          ? i
          : this.readValueFromInstance(this.current, t, this.options);
    return (
      r != null &&
        (typeof r == 'string' && (ko(r) || Lo(r))
          ? (r = parseFloat(r))
          : !mp(r) && Xe.test(n) && (r = Go(t, n)),
        this.setBaseTarget(t, he(r) ? r.get() : r)),
      he(r) ? r.get() : r
    );
  }
  setBaseTarget(t, n) {
    this.baseTarget[t] = n;
  }
  getBaseTarget(t) {
    var n;
    const { initial: i } = this.props;
    let r;
    if (typeof i == 'string' || typeof i == 'object') {
      const s = Ei(
        this.props,
        i,
        (n = this.presenceContext) === null || n === void 0 ? void 0 : n.custom
      );
      s && (r = s[t]);
    }
    if (i && r !== void 0) return r;
    const o = this.getBaseTargetFromProps(this.props, t);
    return o !== void 0 && !he(o)
      ? o
      : this.initialValues[t] !== void 0 && r === void 0
        ? void 0
        : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new Hi()), this.events[t].add(n);
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
}
class Za extends gp {
  constructor() {
    super(...arguments), (this.KeyframeResolver = Yo);
  }
  sortInstanceNodePosition(t, n) {
    return t.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, n) {
    return t.style ? t.style[n] : void 0;
  }
  removeValueFromRenderState(t, { vars: n, style: i }) {
    delete n[t], delete i[t];
  }
}
function vp(e) {
  return window.getComputedStyle(e);
}
class yp extends Za {
  constructor() {
    super(...arguments),
      (this.type = 'html'),
      (this.applyWillChange = !0),
      (this.renderInstance = Na);
  }
  readValueFromInstance(t, n) {
    if (qe.has(n)) {
      const i = Bi(n);
      return (i && i.default) || 0;
    } else {
      const i = vp(t),
        r = (Io(n) ? i.getPropertyValue(n) : i[n]) || 0;
      return typeof r == 'string' ? r.trim() : r;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return wa(t, n);
  }
  build(t, n, i) {
    tr(t, n, i.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n, i) {
    return Ji(t, n, i);
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    he(t) &&
      (this.childSubscription = t.on('change', (n) => {
        this.current && (this.current.textContent = `${n}`);
      }));
  }
}
class xp extends Za {
  constructor() {
    super(...arguments),
      (this.type = 'svg'),
      (this.isSVGTag = !1),
      (this.measureInstanceViewportBox = ne);
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (qe.has(n)) {
      const i = Bi(n);
      return (i && i.default) || 0;
    }
    return (n = _a.has(n) ? n : Fn(n)), t.getAttribute(n);
  }
  scrapeMotionValuesFromProps(t, n, i) {
    return Wa(t, n, i);
  }
  build(t, n, i) {
    nr(t, n, this.isSVGTag, i.transformTemplate);
  }
  renderInstance(t, n, i, r) {
    $a(t, n, i, r);
  }
  mount(t) {
    (this.isSVGTag = ir(t.tagName)), super.mount(t);
  }
}
const bp = (e, t) => (Zi(e) ? new xp(t) : new yp(t, { allowProjection: e !== x.Fragment })),
  Pp = hp({ ...od, ...Vf, ...bf, ...Lf }, bp),
  rr = Zc(Pp);
class Tp extends x.Component {
  getSnapshotBeforeUpdate(t) {
    const n = this.props.childRef.current;
    if (n && t.isPresent && !this.props.isPresent) {
      const i = this.props.sizeRef.current;
      (i.height = n.offsetHeight || 0),
        (i.width = n.offsetWidth || 0),
        (i.top = n.offsetTop),
        (i.left = n.offsetLeft);
    }
    return null;
  }
  componentDidUpdate() {}
  render() {
    return this.props.children;
  }
}
function wp({ children: e, isPresent: t }) {
  const n = x.useId(),
    i = x.useRef(null),
    r = x.useRef({ width: 0, height: 0, top: 0, left: 0 }),
    { nonce: o } = x.useContext(Xi);
  return (
    x.useInsertionEffect(() => {
      const { width: s, height: a, top: l, left: c } = r.current;
      if (t || !i.current || !s || !a) return;
      i.current.dataset.motionPopId = n;
      const u = document.createElement('style');
      return (
        o && (u.nonce = o),
        document.head.appendChild(u),
        u.sheet &&
          u.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${s}px !important;
            height: ${a}px !important;
            top: ${l}px !important;
            left: ${c}px !important;
          }
        `),
        () => {
          document.head.removeChild(u);
        }
      );
    }, [t]),
    G.jsx(Tp, { isPresent: t, childRef: i, sizeRef: r, children: x.cloneElement(e, { ref: i }) })
  );
}
const Sp = ({
  children: e,
  initial: t,
  isPresent: n,
  onExitComplete: i,
  custom: r,
  presenceAffectsLayout: o,
  mode: s,
}) => {
  const a = Qi(Cp),
    l = x.useId(),
    c = x.useMemo(
      () => ({
        id: l,
        initial: t,
        isPresent: n,
        custom: r,
        onExitComplete: (u) => {
          a.set(u, !0);
          for (const h of a.values()) if (!h) return;
          i && i();
        },
        register: (u) => (a.set(u, !1), () => a.delete(u)),
      }),
      o ? [Math.random()] : [n]
    );
  return (
    x.useMemo(() => {
      a.forEach((u, h) => a.set(h, !1));
    }, [n]),
    x.useEffect(() => {
      !n && !a.size && i && i();
    }, [n]),
    s === 'popLayout' && (e = G.jsx(wp, { isPresent: n, children: e })),
    G.jsx(Qt.Provider, { value: c, children: e })
  );
};
function Cp() {
  return new Map();
}
const mn = (e) => e.key || '';
function Qs(e) {
  const t = [];
  return (
    x.Children.forEach(e, (n) => {
      x.isValidElement(n) && t.push(n);
    }),
    t
  );
}
const Ja = ({
    children: e,
    exitBeforeEnter: t,
    custom: n,
    initial: i = !0,
    onExitComplete: r,
    presenceAffectsLayout: o = !0,
    mode: s = 'sync',
  }) => {
    const a = x.useMemo(() => Qs(e), [e]),
      l = a.map(mn),
      c = x.useRef(!0),
      u = x.useRef(a),
      h = Qi(() => new Map()),
      [d, p] = x.useState(a),
      [v, b] = x.useState(a);
    Ia(() => {
      (c.current = !1), (u.current = a);
      for (let w = 0; w < v.length; w++) {
        const C = mn(v[w]);
        l.includes(C) ? h.delete(C) : h.get(C) !== !0 && h.set(C, !1);
      }
    }, [v, l.length, l.join('-')]);
    const P = [];
    if (a !== d) {
      let w = [...a];
      for (let C = 0; C < v.length; C++) {
        const M = v[C],
          k = mn(M);
        l.includes(k) || (w.splice(C, 0, M), P.push(M));
      }
      s === 'wait' && P.length && (w = P), b(Qs(w)), p(a);
      return;
    }
    const { forceRender: S } = x.useContext(Gi);
    return G.jsx(G.Fragment, {
      children: v.map((w) => {
        const C = mn(w),
          M = a === v || l.includes(C),
          k = () => {
            if (h.has(C)) h.set(C, !0);
            else return;
            let N = !0;
            h.forEach((re) => {
              re || (N = !1);
            }),
              N && (S == null || S(), b(u.current), r && r());
          };
        return G.jsx(
          Sp,
          {
            isPresent: M,
            initial: !c.current || i ? void 0 : !1,
            custom: M ? void 0 : n,
            presenceAffectsLayout: o,
            mode: s,
            onExitComplete: M ? void 0 : k,
            children: w,
          },
          C
        );
      }),
    });
  },
  sr = (e) => () => {
    const t = Xt();
    return x.useSyncExternalStore(
      (n) => t.subscribe(e, n),
      () => t[e]
    );
  },
  Rp = sr('hasModal'),
  Ep = sr('currentAnimation'),
  $p = sr('currentParams'),
  eo = ['hasModal', 'canPop', 'canPopStack', 'currentPath', 'currentAnimation', 'currentParams'];
var Te = ((e) => (
  (e[(e.TabLeft = 0)] = 'TabLeft'),
  (e[(e.TabRight = 1)] = 'TabRight'),
  (e[(e.StackPush = 2)] = 'StackPush'),
  (e[(e.StackPop = 3)] = 'StackPop'),
  e
))(Te || {});
const to = (e) => (e === Te.TabRight || e === Te.StackPop ? -1 : 1),
  Mp = {
    hidden: (e) => ({ opacity: 0, x: to(e) * 20, y: 0 }),
    enter: { opacity: 1, x: 0, y: 0 },
    exit: (e) => ({ opacity: 0, x: to(e) * -20, y: 0 }),
  },
  Ap = Pl({ height: '100%' }),
  Qa = ({ mode: e = 'wait' }) => {
    var c, u;
    const t = Sc() ?? 0,
      n = Cc(t + 1),
      i = kc(),
      r = Fd(),
      o = (c = i[t + 1]) == null ? void 0 : c.pathname,
      s = n && io.cloneElement(n, { key: o }),
      a = x.useRef(s);
    r && (a.current = s);
    const l = Ep();
    return G.jsx(Ja, {
      mode: e,
      initial: !1,
      custom: l,
      children: G.jsx(
        rr.div,
        {
          initial: 'hidden',
          animate: 'enter',
          exit: 'exit',
          custom: l,
          variants: Mp,
          transition: { duration: 0.2, type: 'easeInOut' },
          className: `animation_container ${Ap}`,
          children: a.current,
        },
        (u = a.current) == null ? void 0 : u.key
      ),
    });
  },
  Dp = ({ toTab: e, className: t, children: n, onTabClick: i }) => {
    var a;
    const { config: r } = Xt(),
      o = qc(),
      s = () => {
        o.toTab(e), i(e);
      };
    return G.jsx('a', {
      onClick: s,
      className: t ?? ((a = r.css) == null ? void 0 : a.link),
      href: '#',
      children: n,
    });
  },
  Vp = () => {
    var t;
    const e = Xt().config;
    return G.jsx(rr.div, {
      initial: 'hidden',
      animate: 'enter',
      exit: 'exit',
      variants: { hidden: { x: 0, y: '100vh' }, enter: { x: 0, y: 0 }, exit: { x: 0, y: '100vh' } },
      transition: { duration: 0.2, type: 'easeInOut' },
      className: (t = e.css) == null ? void 0 : t.modal,
      children: G.jsx(Qa, {}),
    });
  },
  Lp = () => {
    var r, o, s, a;
    const e = Xt().config,
      t =
        e.type === 'tabbed'
          ? e.tabs
          : [{ id: 'main', stack: e.stack, renderTabButton: () => null }],
      [n, i] = x.useState(t[0].id);
    return G.jsxs(rr.div, {
      initial: 'hidden',
      animate: 'enter',
      exit: 'exit',
      variants: {
        hidden: { opacity: 0.8, x: 0, y: 0 },
        enter: { opacity: 1, x: 0, y: 0 },
        exit: { opacity: 0.8, x: 0, y: 0 },
      },
      transition: { duration: 0.2, type: 'easeInOut' },
      className: (r = e.css) == null ? void 0 : r.root,
      children: [
        e.menuBarElement &&
          G.jsx('div', {
            className: (o = e.css) == null ? void 0 : o.menuBar,
            children: e.menuBarElement,
          }),
        G.jsx('div', {
          className: (s = e.css) == null ? void 0 : s.mainContent,
          children: G.jsx(Qa, {}),
        }),
        e.type === 'tabbed' &&
          G.jsx('div', {
            className: (a = e.css) == null ? void 0 : a.tabBar,
            children: t.map((l) => {
              var c;
              return G.jsx(
                Dp,
                {
                  className: (c = e.css) == null ? void 0 : c.tabLink,
                  toTab: l.id,
                  onTabClick: i,
                  children: l.renderTabButton(n === l.id),
                },
                l.id
              );
            }),
          }),
      ],
    });
  };
function Fp() {
  const e = Rp();
  return G.jsx(Ja, { initial: !1, children: e ? G.jsx(Vp, {}, 'modal') : G.jsx(Lp, {}, 'tabs') });
}
const el = (e, t = '') =>
    e.flatMap((n) => {
      const i = `${t}/${n.id}`;
      return [
        ...n.views.map((r) => ({ ...r, id: `${i}/${r.id}`, path: `${i}/${r.id}` })),
        ...(n.stacks ? el(n.stacks, i) : []),
      ];
    }),
  no = (e, t) => {
    const i = (e.params ? xr.object(e.params) : xr.undefined()).safeParse(t);
    if (i.success) return i.data;
    throw new Error(`Invalid parameters for view '${e.id}': ${i.error.message}`);
  };
class kp {
  constructor(t) {
    Pe(this, 'router');
    Pe(this, 'currentTabName');
    Pe(this, 'tabs');
    Pe(this, 'subscribers', {
      hasModal: [],
      canPop: [],
      canPopStack: [],
      currentPath: [],
      currentAnimation: [],
      currentParams: [],
    });
    Pe(this, 'currentAnimation', Te.TabRight);
    Pe(
      this,
      'pushView',
      this.withTransaction((t, n = 'popToOrPush', i) => {
        const r = this.currentStack,
          o = r.definition.views.find((s) => s.id === t);
        if (!o)
          throw new Error(`Could not find view with id '${String(t)}' within the '${r.id}' stack. You can only navigate to views that are defined in the current stack. If you are trying to navigate to a view in a different stack, use navigate.toStack instead. If you are trying to navigate to a view that you want to share across multiple stacks, extract the view definition to a shared location and import it into each stack.

          Valid view ids:
            ${r.definition.views.map((s) => `    - ${s.id}`).join(`
`)}
          `);
        this.push(n, r.views, { id: o.id, params: no(o, i) });
      })
    );
    Pe(
      this,
      'popView',
      this.withTransaction(() => {
        this.pop(this.currentStack.views);
      })
    );
    Pe(
      this,
      'pushStack',
      this.withTransaction((t, n = 'popToOrPush', i, r) => {
        var l, c, u;
        const { currentStack: o } = this,
          s = oi(
            (l = o.definition.stacks) == null ? void 0 : l.find((h) => h.id === t),
            `Could not find stack with id '${String(t)}'`
          );
        if (!s)
          throw new Error(`Could not find stack with id '${String(t)}' within the '${o.id}' stack. You can only navigate to stacks that are defined in the current stack. If you are trying to navigate to a sub-stack that you want to share across multiple stacks, extract the stack definition to a shared location and import it into each stack.

          Valid stack ids:
            ${
              (c = o.definition.stacks) == null
                ? void 0
                : c.map((h) => `    - ${h.id}`).join(`
`)
            }
          `);
        const a = oi(
          s.views.find((h) => h.id === s.initialViewId),
          `Could not find initial view with id '${String(s.initialViewId)}' in stack '${String(t)}'`
        );
        this.push(n, this.currentTab, {
          id: s.id,
          definition: s,
          display: i ?? s.display ?? 'tab',
          views: [{ id: a.id, params: no(a, r) }],
        }),
          (u = s.onEnter) == null || u.call(s, ai(this));
      })
    );
    Pe(
      this,
      'popStack',
      this.withTransaction(() => {
        this.pop(this.currentTab);
      })
    );
    Pe(
      this,
      'setCurrentTab',
      this.withTransaction((t) => {
        Br(!!this.tabs[t], `Tab '${t}' does not exist`),
          Br(!this.hasModal, 'cannot change tabs while a modal is open');
        const n =
            this.config.type === 'tabbed'
              ? this.config.tabs
              : [{ id: 'main', stack: this.config.stack, renderTabButton: () => null }],
          i = n.findIndex((o) => o.id === this.currentTabName),
          r = n.findIndex((o) => o.id === t);
        i < r ? (this.currentAnimation = Te.TabLeft) : (this.currentAnimation = Te.TabRight),
          (this.currentTabName = t);
      })
    );
    this.config = t;
    const n =
        t.type === 'tabbed'
          ? t.tabs
          : [{ id: 'main', stack: t.stack, renderTabButton: () => null }],
      i = el(n.map((r) => r.stack));
    (this.tabs = Object.fromEntries(
      n.map((r) => [
        r.id,
        [
          {
            definition: r.stack,
            id: r.stack.id,
            display: r.stack.display ?? 'tab',
            views: [{ id: r.stack.initialViewId }],
          },
        ],
      ])
    )),
      (this.currentTabName = n[0].id),
      (this.router = Uc(
        [{ path: '/', element: G.jsx(Fp, {}), errorElement: t.errorElement, children: i }],
        { initialEntries: [this.currentPath] }
      )),
      this.currentStack.definition.onEnter && this.currentStack.definition.onEnter(ai(this));
  }
  get currentTab() {
    return this.tabs[this.currentTabName];
  }
  get hasModal() {
    return this.currentStack.display === 'modal';
  }
  get canPop() {
    return this.currentStack.views.length > 1;
  }
  get canPopStack() {
    return this.currentTab.length > 1;
  }
  get currentStack() {
    const { currentTab: t } = this;
    return t[t.length - 1];
  }
  get currentView() {
    const { currentStack: t } = this;
    return t.views[t.views.length - 1];
  }
  get currentPath() {
    const t = this.currentTab.map((i) => i.id).join('/'),
      n = this.currentView.id;
    return `/${t}/${n}`;
  }
  get currentParams() {
    return this.currentView.params;
  }
  withTransaction(t) {
    return (...n) => {
      const i = eo.map((r) => this[r]);
      return (
        t(...n),
        eo.forEach((r, o) => {
          this[r] !== i[o] && this.notify(r);
        }),
        this.router.navigate(this.currentPath)
      );
    };
  }
  push(t, n, i) {
    if (t === 'push') n.push(i), (this.currentAnimation = Te.StackPush);
    else if (t === 'replace') n.pop(), n.push(i), (this.currentAnimation = Te.StackPush);
    else if (t === 'popToOrPush') {
      const r = n.findIndex((o) => o.id === i.id);
      r === -1
        ? (n.push(i), (this.currentAnimation = Te.StackPush))
        : (n.splice(r + 1), (this.currentAnimation = Te.StackPop));
    }
  }
  pop(t) {
    t.length > 1 && (t.pop(), (this.currentAnimation = Te.StackPop));
  }
  subscribe(t, n) {
    return (
      this.subscribers[t].push(n),
      () => {
        this.subscribers[t] = this.subscribers[t].filter((i) => i !== n);
      }
    );
  }
  notify(t) {
    (Array.isArray(t) ? t : [t]).forEach((i) => {
      this.subscribers[i].forEach((r) => r());
    });
  }
}
const zp = (e) => new kp(e),
  Wp = (e) => e;
export { Up as S, $p as a, zp as b, Wp as c, ai as d, qc as u };
