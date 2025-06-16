!(function () {
  try {
    var e =
        'undefined' != typeof window
          ? window
          : 'undefined' != typeof global
            ? global
            : 'undefined' != typeof self
              ? self
              : {},
      t = new e.Error().stack;
    t &&
      ((e._sentryDebugIds = e._sentryDebugIds || {}),
      (e._sentryDebugIds[t] = '51684103-0cf9-4730-a77c-091005644b33'),
      (e._sentryDebugIdIdentifier = 'sentry-dbid-51684103-0cf9-4730-a77c-091005644b33'));
  } catch (e) {}
})();
var _sentryModuleMetadataGlobal =
  'undefined' != typeof window
    ? window
    : 'undefined' != typeof global
      ? global
      : 'undefined' != typeof self
        ? self
        : {};
('use strict');
(_sentryModuleMetadataGlobal._sentryModuleMetadata =
  _sentryModuleMetadataGlobal._sentryModuleMetadata || {}),
  (_sentryModuleMetadataGlobal._sentryModuleMetadata[
    new _sentryModuleMetadataGlobal.Error().stack
  ] = Object.assign(
    {},
    _sentryModuleMetadataGlobal._sentryModuleMetadata[
      new _sentryModuleMetadataGlobal.Error().stack
    ],
    { '_sentryBundlerPluginAppKey:pluno-sentry-frontend-application-key': !0 }
  )),
  (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2281],
    {
      7685: (e, t, r) => {
        r.d(t, {
          Bn: () => u,
          I5: () => c,
          Om: () => h,
          Pe: () => m,
          Ut: () => i,
          aP: () => b,
          jB: () => p,
          vH: () => l,
          wl: () => f,
        });
        var n = r(63857),
          a = r(43081),
          s = r.n(a),
          o = r(278),
          i = 10,
          c = 10,
          l = [
            '.txt',
            '.pdf',
            '.jpeg',
            '.jpg',
            '.png',
            '.gif',
            '.mp4',
            '.doc',
            '.docx',
            '.xls',
            '.xlsx',
            '.ppt',
            '.pptx',
          ],
          d = [
            'text/plain',
            'image/png',
            'image/jpeg',
            'application/pdf',
            'image/gif',
            'video/mp4',
            'application/msword',
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
            'application/vnd.ms-excel',
            'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
            'application/vnd.ms-powerpoint',
            'application/vnd.openxmlformats-officedocument.presentationml.presentation',
          ],
          u = function (e) {
            return e.map(function (e) {
              return new File([e], e.name, { type: e.type, lastModified: e.lastModified });
            });
          },
          f = function (e, t, r) {
            var n = new FormData();
            return (
              n.append('community_id', e),
              n.append('conversation_id', t),
              r.forEach(function (e) {
                return n.append('files', e);
              }),
              n
            );
          },
          p = function (e, t) {
            return void 0 === t && (t = c), e.slice(0, t);
          },
          m = function (e, t) {
            void 0 === t && (t = i);
            var r = 1024 * t * 1024;
            return e.filter(function (e) {
              return e.size <= r;
            });
          },
          b = function (e) {
            return e.filter(function (e) {
              return d.includes(e.type);
            });
          },
          y = function (e) {
            for (var t = '', r = 0; r < e.length; r += 32768)
              t += String.fromCharCode.apply(null, Array.from(e.subarray(r, r + 32768)));
            return btoa(t);
          },
          g = (function () {
            var e = (0, n.A)(
              s().mark(function e(t) {
                var r, n;
                return s().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), t.arrayBuffer();
                      case 2:
                        return (
                          (r = e.sent), (n = y(o.Ay.gzip(new Uint8Array(r)))), e.abrupt('return', n)
                        );
                      case 6:
                      case 'end':
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
          h = (function () {
            var e = (0, n.A)(
              s().mark(function e(t) {
                return s().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return e.abrupt(
                          'return',
                          Promise.all(
                            t.map(
                              (function () {
                                var e = (0, n.A)(
                                  s().mark(function e(t) {
                                    return s().wrap(function (e) {
                                      for (;;)
                                        switch ((e.prev = e.next)) {
                                          case 0:
                                            return (e.next = 2), g(t);
                                          case 2:
                                            return (
                                              (e.t0 = e.sent),
                                              (e.t1 = t.name),
                                              (e.t2 = t.size),
                                              (e.t3 = t.type),
                                              e.abrupt('return', {
                                                content: e.t0,
                                                name: e.t1,
                                                size: e.t2,
                                                type: e.t3,
                                              })
                                            );
                                          case 7:
                                          case 'end':
                                            return e.stop();
                                        }
                                    }, e);
                                  })
                                );
                                return function (t) {
                                  return e.apply(this, arguments);
                                };
                              })()
                            )
                          )
                        );
                      case 1:
                      case 'end':
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })();
      },
      18071: (e, t, r) => {
        r.d(t, { A: () => c });
        var n = r(71477),
          a = r(26778),
          s = r(84514),
          o = r(14232),
          i = r(37876);
        let c = function (e) {
          var t = e.onDropFiles,
            r = e.padding,
            c = void 0 === r ? 0 : r,
            l = e.enabled,
            d = void 0 === l || l,
            u = e.children,
            f = (0, o.useState)(!1),
            p = f[0],
            m = f[1];
          return (0, i.jsxs)('div', {
            onDragEnter: function (e) {
              d && (e.preventDefault(), e.stopPropagation(), m(!0));
            },
            onDragLeave: function (e) {
              d &&
                (e.preventDefault(),
                e.stopPropagation(),
                (e.relatedTarget && e.currentTarget.contains(e.relatedTarget)) || m(!1));
            },
            onDragOver: function (e) {
              d && (e.preventDefault(), e.stopPropagation());
            },
            onDrop: function (e) {
              if (d) {
                e.preventDefault(), e.stopPropagation(), m(!1);
                var r = e.dataTransfer.files;
                r && t(Array.from(r));
              }
            },
            style: { position: 'relative', flex: 1, overflowY: p ? 'hidden' : 'auto' },
            children: [
              (0, i.jsx)(s.A, {
                sx: { maxHeight: '100%', overflowY: p ? 'hidden' : 'auto' },
                children: u,
              }),
              (0, i.jsx)(n.A, {
                sx: function (e) {
                  return {
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    width: '100%',
                    height: '100%',
                    zIndex: e.zIndex.drawer + 10,
                    backgroundColor: 'inherit',
                    backdropFilter: 'blur(0.2rem)',
                    transition: 'border 0.2s;',
                  };
                },
                open: d && p,
                children: (0, i.jsx)(a.A, {
                  sx: {
                    position: 'absolute',
                    top: ''.concat(c, 'rem'),
                    left: ''.concat(c, 'rem'),
                    width: 'calc(100% - '.concat(2 * c, 'rem)'),
                    height: 'calc(100% - '.concat(2 * c, 'rem)'),
                    border: p ? '0.2rem dashed white' : '',
                    borderRadius: p ? '1rem' : '',
                    backgroundColor: 'rgba(128, 128, 128, 0.3)',
                    fontSize: '1.1rem',
                    display: 'flex',
                    flexWrap: 'wrap',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignContent: 'center',
                  },
                  children: 'Drop files to add as attachments',
                }),
              }),
            ],
          });
        };
      },
      31247: (e, t, r) => {
        r.d(t, { SQ: () => j, _2: () => O, hO: () => A, mB: () => E, rI: () => N, ty: () => w });
        var n = r(42969),
          a = r(59860),
          s = r(97154),
          o = r(5259),
          i = r(14232),
          c = r(32868),
          l = r(75553),
          d = r(37876),
          u = ['className', 'inset', 'children'],
          f = ['className'],
          p = ['className', 'sideOffset'],
          m = ['className', 'inset'],
          b = ['className', 'children', 'checked'],
          y = ['className', 'children'],
          g = ['className', 'inset'],
          h = ['className'];
        function v(e, t) {
          var r = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t &&
              (n = n.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              r.push.apply(r, n);
          }
          return r;
        }
        function x(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? v(Object(r), !0).forEach(function (t) {
                  (0, n.A)(e, t, r[t]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
                : v(Object(r)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                  });
          }
          return e;
        }
        var N = s.bL,
          w = s.l9;
        s.YJ,
          s.ZL,
          s.Pb,
          s.z6,
          (i.forwardRef(function (e, t) {
            var r = e.className,
              n = e.inset,
              i = e.children,
              l = (0, a.A)(e, u);
            return (0, d.jsxs)(
              s.ZP,
              x(
                x(
                  {
                    ref: t,
                    className: (0, c.cn)(
                      'flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent',
                      n && 'pl-8',
                      r
                    ),
                  },
                  l
                ),
                {},
                { children: [i, (0, d.jsx)(o.vKP, { className: 'ml-auto h-4 w-4' })] }
              )
            );
          }).displayName = s.ZP.displayName),
          (i.forwardRef(function (e, t) {
            var r = e.className,
              n = (0, a.A)(e, f);
            return (0, d.jsx)(
              s.G5,
              x(
                {
                  ref: t,
                  className: (0, c.cn)(
                    'z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
                    r
                  ),
                },
                n
              )
            );
          }).displayName = s.G5.displayName);
        var j = i.forwardRef(function (e, t) {
          var r = e.className,
            n = e.sideOffset,
            o = (0, a.A)(e, p);
          return (0, d.jsx)(s.ZL, {
            children: (0, d.jsx)(
              s.UC,
              x(
                {
                  ref: t,
                  sideOffset: void 0 === n ? 4 : n,
                  className: (0, c.cn)(
                    'z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md',
                    'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
                    r
                  ),
                },
                o
              )
            ),
          });
        });
        j.displayName = s.UC.displayName;
        var O = i.forwardRef(function (e, t) {
          var r = e.className,
            n = e.inset,
            o = (0, a.A)(e, m);
          return (0, d.jsx)(
            s.q7,
            x(
              {
                ref: t,
                className: (0, c.cn)(
                  'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
                  n && 'pl-8',
                  r
                ),
              },
              o
            )
          );
        });
        O.displayName = s.q7.displayName;
        var A = i.forwardRef(function (e, t) {
          var r = e.className,
            n = e.children,
            o = e.checked,
            i = (0, a.A)(e, b);
          return (0, d.jsxs)(
            s.H_,
            x(
              x(
                {
                  ref: t,
                  className: (0, c.cn)(
                    o && 'bg-gray-700',
                    'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
                    r
                  ),
                  checked: o,
                },
                i
              ),
              {},
              {
                children: [
                  (0, d.jsx)('span', {
                    className: 'absolute left-2 flex h-3.5 w-3.5 items-center justify-center',
                    children: (0, d.jsx)(l.S, { checked: o, className: 'h-4 w-4' }),
                  }),
                  n,
                ],
              }
            )
          );
        });
        (A.displayName = s.H_.displayName),
          (i.forwardRef(function (e, t) {
            var r = e.className,
              n = e.children,
              i = (0, a.A)(e, y);
            return (0, d.jsxs)(
              s.hN,
              x(
                x(
                  {
                    ref: t,
                    className: (0, c.cn)(
                      'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
                      r
                    ),
                  },
                  i
                ),
                {},
                {
                  children: [
                    (0, d.jsx)('span', {
                      className: 'absolute left-2 flex h-3.5 w-3.5 items-center justify-center',
                      children: (0, d.jsx)(s.VF, {
                        children: (0, d.jsx)(o.RiX, { className: 'h-4 w-4 fill-current' }),
                      }),
                    }),
                    n,
                  ],
                }
              )
            );
          }).displayName = s.hN.displayName),
          (i.forwardRef(function (e, t) {
            var r = e.className,
              n = e.inset,
              o = (0, a.A)(e, g);
            return (0, d.jsx)(
              s.JU,
              x(
                {
                  ref: t,
                  className: (0, c.cn)('px-2 py-1.5 text-sm font-semibold', n && 'pl-8', r),
                },
                o
              )
            );
          }).displayName = s.JU.displayName);
        var E = i.forwardRef(function (e, t) {
          var r = e.className,
            n = (0, a.A)(e, h);
          return (0, d.jsx)(
            s.wv,
            x({ ref: t, className: (0, c.cn)('-mx-1 my-1 h-px bg-muted', r) }, n)
          );
        });
        E.displayName = s.wv.displayName;
      },
      50066: (e, t, r) => {
        r.d(t, { A: () => u });
        var n = r(78750),
          a = r(79459),
          s = r(68670),
          o = r(22304),
          i = r(97965),
          c = r(32868),
          l = r(7685),
          d = r(37876);
        function u(e) {
          var t = e.files,
            r = e.inputDisabled,
            u = e.handleFilesChange,
            f = e.tooltipText,
            p =
              void 0 === f
                ? 'Upload up to '.concat(l.I5, ' files, at most ').concat(l.Ut, ' MB per file')
                : f,
            m = e.className,
            b = e.labelClassName,
            y = e.iconClassName,
            g = void 0 === y ? 'h-4 w-4' : y,
            h = e.tooltipContentAlign;
          return (0, d.jsx)('div', {
            className: m,
            children: (0, d.jsxs)(i.m_, {
              children: [
                (0, d.jsx)(i.k$, {
                  asChild: !0,
                  children: (0, d.jsx)(o.J, {
                    htmlFor: 'file-upload',
                    className: (0, c.cn)(
                      'inline-flex cursor-pointer items-center justify-center',
                      b,
                      r ? 'cursor-default' : 'hover:text-foreground'
                    ),
                    children: (0, d.jsx)(s.$, {
                      variant: 'ghost',
                      size: 'icon',
                      disabled: r,
                      onClick: function () {
                        var e = document.createElement('input');
                        (e.id = 'file-upload'),
                          (e.type = 'file'),
                          (e.className = 'sr-only'),
                          (e.accept = l.vH.join(',')),
                          (e.multiple = !0),
                          (e.onchange = function (e) {
                            var t = e.target;
                            t.files && u({ target: t });
                          }),
                          e.click();
                      },
                      children:
                        t.length > 0
                          ? (0, d.jsxs)('div', {
                              className: 'relative',
                              children: [
                                (0, d.jsx)(n.A, { className: g }),
                                (0, d.jsx)(a.E, {
                                  variant: 'destructive',
                                  className:
                                    'absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center p-0 text-[10px]',
                                  children: t.length,
                                }),
                              ],
                            })
                          : (0, d.jsx)(n.A, { className: g }),
                    }),
                  }),
                }),
                (0, d.jsx)(i.ZI, {
                  side: 'top',
                  align: void 0 === h ? 'center' : h,
                  className: 'whitespace-nowrap',
                  children:
                    t.length > 0
                      ? ''.concat(t.length, ' file').concat(t.length > 1 ? 's' : '', ' selected')
                      : p,
                }),
              ],
            }),
          });
        }
      },
      52108: (e, t, r) => {
        r.d(t, { T: () => d });
        var n = r(42969),
          a = r(59860),
          s = r(14232),
          o = r(32868),
          i = r(37876),
          c = ['className'];
        function l(e, t) {
          var r = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t &&
              (n = n.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              r.push.apply(r, n);
          }
          return r;
        }
        var d = s.forwardRef(function (e, t) {
          var r = e.className,
            s = (0, a.A)(e, c);
          return (0, i.jsx)(
            'textarea',
            (function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2
                  ? l(Object(r), !0).forEach(function (t) {
                      (0, n.A)(e, t, r[t]);
                    })
                  : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
                    : l(Object(r)).forEach(function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                      });
              }
              return e;
            })(
              {
                className: (0, o.cn)(
                  'flex w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
                  r
                ),
                ref: t,
              },
              s
            )
          );
        });
        d.displayName = 'Textarea';
      },
      75553: (e, t, r) => {
        r.d(t, { S: () => p });
        var n = r(42969),
          a = r(59860),
          s = r(14232),
          o = r(29470),
          i = r(5259),
          c = r(32868),
          l = r(37876),
          d = ['className'];
        function u(e, t) {
          var r = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t &&
              (n = n.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              r.push.apply(r, n);
          }
          return r;
        }
        function f(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? u(Object(r), !0).forEach(function (t) {
                  (0, n.A)(e, t, r[t]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
                : u(Object(r)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                  });
          }
          return e;
        }
        var p = s.forwardRef(function (e, t) {
          var r = e.className,
            n = (0, a.A)(e, d);
          return (0, l.jsx)(
            o.bL,
            f(
              f(
                {
                  ref: t,
                  className: (0, c.cn)(
                    'peer h-4 w-4 shrink-0 rounded-[4px] border border-zinc-50 shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground',
                    r
                  ),
                },
                n
              ),
              {},
              {
                children: (0, l.jsx)(o.C1, {
                  className: (0, c.cn)('flex items-center justify-center text-current'),
                  children: (0, l.jsx)(i.Srz, { className: 'h-4 w-4' }),
                }),
              }
            )
          );
        });
        p.displayName = o.bL.displayName;
      },
      82459: (e, t, r) => {
        r.d(t, { D_: () => i, Jw: () => n, Mf: () => a, Wm: () => s, lm: () => o });
        var n = (function (e) {
            return (
              (e.USER = 'user'),
              (e.ASSISTANT = 'assistant'),
              (e.LAST_QUESTION_SUMMARY = 'last_question_summary'),
              (e.TEAM = 'team'),
              (e.STATUS_CHANGE = 'status_change'),
              (e.AGENT_ASSIGNMENT = 'agent_assignment'),
              (e.NOTE = 'note'),
              (e.QA_SUGGESTION = 'qa_suggestion'),
              e
            );
          })({}),
          a = (function (e) {
            return (
              (e.NEW = 'new'),
              (e.OPEN = 'open'),
              (e.PENDING = 'pending'),
              (e.RESOLVED = 'resolved'),
              (e.CLOSED = 'closed'),
              e
            );
          })({}),
          s = (function (e) {
            return (e.END_USER = 'end_user'), (e.AGENT = 'agent'), (e.AI = 'ai'), e;
          })({}),
          o = (function (e) {
            return (
              (e.STREAM_STARTED = 'stream-started'),
              (e.MESSAGE = 'message'),
              (e.STREAM_ENDED = 'stream-ended'),
              e
            );
          })({}),
          i = (function (e) {
            return (
              (e.MESSAGE_BEFORE_ESCALATION = 'message_before_escalation'),
              (e.ESCALATE_TICKET = 'escalate_ticket'),
              (e.MESSAGE_AFTER_ESCALATION = 'message_after_escalation'),
              (e.STATUS_CHANGE = 'status_change'),
              (e.AGENT_ASSIGNMENT = 'agent_assignment'),
              (e.ACKNOWLEDGMENT = 'acknowledgment'),
              (e.CONVERSATION_ATTRIBUTES_UPDATE = 'conversation_attributes_update'),
              e
            );
          })({});
      },
    },
  ]);
