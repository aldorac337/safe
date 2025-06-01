import { R as c, dh as O, aX as S, di as I, by as w } from './vendor-DpenelXu.js';
(function () {
  try {
    var s =
        typeof window < 'u'
          ? window
          : typeof global < 'u'
            ? global
            : typeof globalThis < 'u'
              ? globalThis
              : typeof self < 'u'
                ? self
                : {},
      a = new s.Error().stack;
    a &&
      ((s._sentryDebugIds = s._sentryDebugIds || {}),
      (s._sentryDebugIds[a] = 'ca405b05-9b40-497e-831a-1b502efbbb24'),
      (s._sentryDebugIdIdentifier = 'sentry-dbid-ca405b05-9b40-497e-831a-1b502efbbb24'));
  } catch (u) {}
})();
function P(s, a) {
  return s.classList
    ? !!a && s.classList.contains(a)
    : (' ' + (s.className.baseVal || s.className) + ' ').indexOf(' ' + a + ' ') !== -1;
}
function U(s, a) {
  s.classList
    ? s.classList.add(a)
    : P(s, a) ||
      (typeof s.className == 'string'
        ? (s.className = s.className + ' ' + a)
        : s.setAttribute('class', ((s.className && s.className.baseVal) || '') + ' ' + a));
}
function A(s, a) {
  return s
    .replace(new RegExp('(^|\\s)' + a + '(?:\\s|$)', 'g'), '$1')
    .replace(/\s+/g, ' ')
    .replace(/^\s*|\s*$/g, '');
}
function G(s, a) {
  s.classList
    ? s.classList.remove(a)
    : typeof s.className == 'string'
      ? (s.className = A(s.className, a))
      : s.setAttribute('class', A((s.className && s.className.baseVal) || '', a));
}
const y = { disabled: !1 },
  R = c.createContext(null);
var L = function (a) {
    return a.scrollTop;
  },
  C = 'unmounted',
  m = 'exited',
  d = 'entering',
  h = 'entered',
  b = 'exiting',
  E = (function (s) {
    O(a, s);
    function a(t, n) {
      var e;
      e = s.call(this, t, n) || this;
      var i = n,
        r = i && !i.isMounting ? t.enter : t.appear,
        o;
      return (
        (e.appearStatus = null),
        t.in
          ? r
            ? ((o = m), (e.appearStatus = d))
            : (o = h)
          : t.unmountOnExit || t.mountOnEnter
            ? (o = C)
            : (o = m),
        (e.state = { status: o }),
        (e.nextCallback = null),
        e
      );
    }
    a.getDerivedStateFromProps = function (n, e) {
      var i = n.in;
      return i && e.status === C ? { status: m } : null;
    };
    var u = a.prototype;
    return (
      (u.componentDidMount = function () {
        this.updateStatus(!0, this.appearStatus);
      }),
      (u.componentDidUpdate = function (n) {
        var e = null;
        if (n !== this.props) {
          var i = this.state.status;
          this.props.in ? i !== d && i !== h && (e = d) : (i === d || i === h) && (e = b);
        }
        this.updateStatus(!1, e);
      }),
      (u.componentWillUnmount = function () {
        this.cancelNextCallback();
      }),
      (u.getTimeouts = function () {
        var n = this.props.timeout,
          e,
          i,
          r;
        return (
          (e = i = r = n),
          n != null &&
            typeof n != 'number' &&
            ((e = n.exit), (i = n.enter), (r = n.appear !== void 0 ? n.appear : i)),
          { exit: e, enter: i, appear: r }
        );
      }),
      (u.updateStatus = function (n, e) {
        if ((n === void 0 && (n = !1), e !== null))
          if ((this.cancelNextCallback(), e === d)) {
            if (this.props.unmountOnExit || this.props.mountOnEnter) {
              var i = this.props.nodeRef ? this.props.nodeRef.current : S.findDOMNode(this);
              i && L(i);
            }
            this.performEnter(n);
          } else this.performExit();
        else this.props.unmountOnExit && this.state.status === m && this.setState({ status: C });
      }),
      (u.performEnter = function (n) {
        var e = this,
          i = this.props.enter,
          r = this.context ? this.context.isMounting : n,
          o = this.props.nodeRef ? [r] : [S.findDOMNode(this), r],
          l = o[0],
          p = o[1],
          f = this.getTimeouts(),
          v = r ? f.appear : f.enter;
        if ((!n && !i) || y.disabled) {
          this.safeSetState({ status: h }, function () {
            e.props.onEntered(l);
          });
          return;
        }
        this.props.onEnter(l, p),
          this.safeSetState({ status: d }, function () {
            e.props.onEntering(l, p),
              e.onTransitionEnd(v, function () {
                e.safeSetState({ status: h }, function () {
                  e.props.onEntered(l, p);
                });
              });
          });
      }),
      (u.performExit = function () {
        var n = this,
          e = this.props.exit,
          i = this.getTimeouts(),
          r = this.props.nodeRef ? void 0 : S.findDOMNode(this);
        if (!e || y.disabled) {
          this.safeSetState({ status: m }, function () {
            n.props.onExited(r);
          });
          return;
        }
        this.props.onExit(r),
          this.safeSetState({ status: b }, function () {
            n.props.onExiting(r),
              n.onTransitionEnd(i.exit, function () {
                n.safeSetState({ status: m }, function () {
                  n.props.onExited(r);
                });
              });
          });
      }),
      (u.cancelNextCallback = function () {
        this.nextCallback !== null && (this.nextCallback.cancel(), (this.nextCallback = null));
      }),
      (u.safeSetState = function (n, e) {
        (e = this.setNextCallback(e)), this.setState(n, e);
      }),
      (u.setNextCallback = function (n) {
        var e = this,
          i = !0;
        return (
          (this.nextCallback = function (r) {
            i && ((i = !1), (e.nextCallback = null), n(r));
          }),
          (this.nextCallback.cancel = function () {
            i = !1;
          }),
          this.nextCallback
        );
      }),
      (u.onTransitionEnd = function (n, e) {
        this.setNextCallback(e);
        var i = this.props.nodeRef ? this.props.nodeRef.current : S.findDOMNode(this),
          r = n == null && !this.props.addEndListener;
        if (!i || r) {
          setTimeout(this.nextCallback, 0);
          return;
        }
        if (this.props.addEndListener) {
          var o = this.props.nodeRef ? [this.nextCallback] : [i, this.nextCallback],
            l = o[0],
            p = o[1];
          this.props.addEndListener(l, p);
        }
        n != null && setTimeout(this.nextCallback, n);
      }),
      (u.render = function () {
        var n = this.state.status;
        if (n === C) return null;
        var e = this.props,
          i = e.children;
        e.in,
          e.mountOnEnter,
          e.unmountOnExit,
          e.appear,
          e.enter,
          e.exit,
          e.timeout,
          e.addEndListener,
          e.onEnter,
          e.onEntering,
          e.onEntered,
          e.onExit,
          e.onExiting,
          e.onExited,
          e.nodeRef;
        var r = I(e, [
          'children',
          'in',
          'mountOnEnter',
          'unmountOnExit',
          'appear',
          'enter',
          'exit',
          'timeout',
          'addEndListener',
          'onEnter',
          'onEntering',
          'onEntered',
          'onExit',
          'onExiting',
          'onExited',
          'nodeRef',
        ]);
        return c.createElement(
          R.Provider,
          { value: null },
          typeof i == 'function' ? i(n, r) : c.cloneElement(c.Children.only(i), r)
        );
      }),
      a
    );
  })(c.Component);
E.contextType = R;
E.propTypes = {};
function x() {}
E.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: x,
  onEntering: x,
  onEntered: x,
  onExit: x,
  onExiting: x,
  onExited: x,
};
E.UNMOUNTED = C;
E.EXITED = m;
E.ENTERING = d;
E.ENTERED = h;
E.EXITING = b;
var V = function (a, u) {
    return (
      a &&
      u &&
      u.split(' ').forEach(function (t) {
        return U(a, t);
      })
    );
  },
  k = function (a, u) {
    return (
      a &&
      u &&
      u.split(' ').forEach(function (t) {
        return G(a, t);
      })
    );
  },
  M = (function (s) {
    O(a, s);
    function a() {
      for (var t, n = arguments.length, e = new Array(n), i = 0; i < n; i++) e[i] = arguments[i];
      return (
        (t = s.call.apply(s, [this].concat(e)) || this),
        (t.appliedClasses = { appear: {}, enter: {}, exit: {} }),
        (t.onEnter = function (r, o) {
          var l = t.resolveArguments(r, o),
            p = l[0],
            f = l[1];
          t.removeClasses(p, 'exit'),
            t.addClass(p, f ? 'appear' : 'enter', 'base'),
            t.props.onEnter && t.props.onEnter(r, o);
        }),
        (t.onEntering = function (r, o) {
          var l = t.resolveArguments(r, o),
            p = l[0],
            f = l[1],
            v = f ? 'appear' : 'enter';
          t.addClass(p, v, 'active'), t.props.onEntering && t.props.onEntering(r, o);
        }),
        (t.onEntered = function (r, o) {
          var l = t.resolveArguments(r, o),
            p = l[0],
            f = l[1],
            v = f ? 'appear' : 'enter';
          t.removeClasses(p, v),
            t.addClass(p, v, 'done'),
            t.props.onEntered && t.props.onEntered(r, o);
        }),
        (t.onExit = function (r) {
          var o = t.resolveArguments(r),
            l = o[0];
          t.removeClasses(l, 'appear'),
            t.removeClasses(l, 'enter'),
            t.addClass(l, 'exit', 'base'),
            t.props.onExit && t.props.onExit(r);
        }),
        (t.onExiting = function (r) {
          var o = t.resolveArguments(r),
            l = o[0];
          t.addClass(l, 'exit', 'active'), t.props.onExiting && t.props.onExiting(r);
        }),
        (t.onExited = function (r) {
          var o = t.resolveArguments(r),
            l = o[0];
          t.removeClasses(l, 'exit'),
            t.addClass(l, 'exit', 'done'),
            t.props.onExited && t.props.onExited(r);
        }),
        (t.resolveArguments = function (r, o) {
          return t.props.nodeRef ? [t.props.nodeRef.current, r] : [r, o];
        }),
        (t.getClassNames = function (r) {
          var o = t.props.classNames,
            l = typeof o == 'string',
            p = l && o ? o + '-' : '',
            f = l ? '' + p + r : o[r],
            v = l ? f + '-active' : o[r + 'Active'],
            _ = l ? f + '-done' : o[r + 'Done'];
          return { baseClassName: f, activeClassName: v, doneClassName: _ };
        }),
        t
      );
    }
    var u = a.prototype;
    return (
      (u.addClass = function (n, e, i) {
        var r = this.getClassNames(e)[i + 'ClassName'],
          o = this.getClassNames('enter'),
          l = o.doneClassName;
        e === 'appear' && i === 'done' && l && (r += ' ' + l),
          i === 'active' && n && L(n),
          r && ((this.appliedClasses[e][i] = r), V(n, r));
      }),
      (u.removeClasses = function (n, e) {
        var i = this.appliedClasses[e],
          r = i.base,
          o = i.active,
          l = i.done;
        (this.appliedClasses[e] = {}), r && k(n, r), o && k(n, o), l && k(n, l);
      }),
      (u.render = function () {
        var n = this.props;
        n.classNames;
        var e = I(n, ['classNames']);
        return c.createElement(
          E,
          w({}, e, {
            onEnter: this.onEnter,
            onEntered: this.onEntered,
            onEntering: this.onEntering,
            onExit: this.onExit,
            onExiting: this.onExiting,
            onExited: this.onExited,
          })
        );
      }),
      a
    );
  })(c.Component);
M.defaultProps = { classNames: '' };
M.propTypes = {};
var N, T;
function X(s, a) {
  return !(
    s === a ||
    (c.isValidElement(s) && c.isValidElement(a) && s.key != null && s.key === a.key)
  );
}
var g = { out: 'out-in', in: 'in-out' },
  D = function (a, u, t) {
    return function () {
      var n;
      a.props[u] && (n = a.props)[u].apply(n, arguments), t();
    };
  },
  F =
    ((N = {}),
    (N[g.out] = function (s) {
      var a = s.current,
        u = s.changeState;
      return c.cloneElement(a, {
        in: !1,
        onExited: D(a, 'onExited', function () {
          u(d, null);
        }),
      });
    }),
    (N[g.in] = function (s) {
      var a = s.current,
        u = s.changeState,
        t = s.children;
      return [
        a,
        c.cloneElement(t, {
          in: !0,
          onEntered: D(t, 'onEntered', function () {
            u(d);
          }),
        }),
      ];
    }),
    N),
  H =
    ((T = {}),
    (T[g.out] = function (s) {
      var a = s.children,
        u = s.changeState;
      return c.cloneElement(a, {
        in: !0,
        onEntered: D(a, 'onEntered', function () {
          u(h, c.cloneElement(a, { in: !0 }));
        }),
      });
    }),
    (T[g.in] = function (s) {
      var a = s.current,
        u = s.children,
        t = s.changeState;
      return [
        c.cloneElement(a, {
          in: !1,
          onExited: D(a, 'onExited', function () {
            t(h, c.cloneElement(u, { in: !0 }));
          }),
        }),
        c.cloneElement(u, { in: !0 }),
      ];
    }),
    T),
  $ = (function (s) {
    O(a, s);
    function a() {
      for (var t, n = arguments.length, e = new Array(n), i = 0; i < n; i++) e[i] = arguments[i];
      return (
        (t = s.call.apply(s, [this].concat(e)) || this),
        (t.state = { status: h, current: null }),
        (t.appeared = !1),
        (t.changeState = function (r, o) {
          o === void 0 && (o = t.state.current), t.setState({ status: r, current: o });
        }),
        t
      );
    }
    var u = a.prototype;
    return (
      (u.componentDidMount = function () {
        this.appeared = !0;
      }),
      (a.getDerivedStateFromProps = function (n, e) {
        return n.children == null
          ? { current: null }
          : e.status === d && n.mode === g.in
            ? { status: d }
            : e.current && X(e.current, n.children)
              ? { status: b }
              : { current: c.cloneElement(n.children, { in: !0 }) };
      }),
      (u.render = function () {
        var n = this.props,
          e = n.children,
          i = n.mode,
          r = this.state,
          o = r.status,
          l = r.current,
          p = { children: e, current: l, changeState: this.changeState, status: o },
          f;
        switch (o) {
          case d:
            f = H[i](p);
            break;
          case b:
            f = F[i](p);
            break;
          case h:
            f = l;
        }
        return c.createElement(R.Provider, { value: { isMounting: !this.appeared } }, f);
      }),
      a
    );
  })(c.Component);
$.propTypes = {};
$.defaultProps = { mode: g.out };
export { M as C, $ as S };
//# sourceMappingURL=SwitchTransition-DWQFVxN-.js.map
