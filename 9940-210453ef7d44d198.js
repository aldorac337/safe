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
      (e._sentryDebugIds[t] = 'e8c1219a-ce0f-4609-a494-ea911fe0349c'),
      (e._sentryDebugIdIdentifier = 'sentry-dbid-e8c1219a-ce0f-4609-a494-ea911fe0349c'));
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
    [9940],
    {
      31247: (e, t, r) => {
        r.d(t, { SQ: () => _, _2: () => j, hO: () => O, mB: () => E, rI: () => v, ty: () => x });
        var a = r(42969),
          n = r(59860),
          s = r(97154),
          o = r(5259),
          c = r(14232),
          l = r(32868),
          i = r(75553),
          d = r(37876),
          u = ['className', 'inset', 'children'],
          f = ['className'],
          p = ['className', 'sideOffset'],
          m = ['className', 'inset'],
          b = ['className', 'children', 'checked'],
          y = ['className', 'children'],
          g = ['className', 'inset'],
          h = ['className'];
        function w(e, t) {
          var r = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var a = Object.getOwnPropertySymbols(e);
            t &&
              (a = a.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              r.push.apply(r, a);
          }
          return r;
        }
        function N(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? w(Object(r), !0).forEach(function (t) {
                  (0, a.A)(e, t, r[t]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
                : w(Object(r)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                  });
          }
          return e;
        }
        var v = s.bL,
          x = s.l9;
        s.YJ,
          s.ZL,
          s.Pb,
          s.z6,
          (c.forwardRef(function (e, t) {
            var r = e.className,
              a = e.inset,
              c = e.children,
              i = (0, n.A)(e, u);
            return (0, d.jsxs)(
              s.ZP,
              N(
                N(
                  {
                    ref: t,
                    className: (0, l.cn)(
                      'flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent',
                      a && 'pl-8',
                      r
                    ),
                  },
                  i
                ),
                {},
                { children: [c, (0, d.jsx)(o.vKP, { className: 'ml-auto h-4 w-4' })] }
              )
            );
          }).displayName = s.ZP.displayName),
          (c.forwardRef(function (e, t) {
            var r = e.className,
              a = (0, n.A)(e, f);
            return (0, d.jsx)(
              s.G5,
              N(
                {
                  ref: t,
                  className: (0, l.cn)(
                    'z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
                    r
                  ),
                },
                a
              )
            );
          }).displayName = s.G5.displayName);
        var _ = c.forwardRef(function (e, t) {
          var r = e.className,
            a = e.sideOffset,
            o = (0, n.A)(e, p);
          return (0, d.jsx)(s.ZL, {
            children: (0, d.jsx)(
              s.UC,
              N(
                {
                  ref: t,
                  sideOffset: void 0 === a ? 4 : a,
                  className: (0, l.cn)(
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
        _.displayName = s.UC.displayName;
        var j = c.forwardRef(function (e, t) {
          var r = e.className,
            a = e.inset,
            o = (0, n.A)(e, m);
          return (0, d.jsx)(
            s.q7,
            N(
              {
                ref: t,
                className: (0, l.cn)(
                  'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
                  a && 'pl-8',
                  r
                ),
              },
              o
            )
          );
        });
        j.displayName = s.q7.displayName;
        var O = c.forwardRef(function (e, t) {
          var r = e.className,
            a = e.children,
            o = e.checked,
            c = (0, n.A)(e, b);
          return (0, d.jsxs)(
            s.H_,
            N(
              N(
                {
                  ref: t,
                  className: (0, l.cn)(
                    o && 'bg-gray-700',
                    'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
                    r
                  ),
                  checked: o,
                },
                c
              ),
              {},
              {
                children: [
                  (0, d.jsx)('span', {
                    className: 'absolute left-2 flex h-3.5 w-3.5 items-center justify-center',
                    children: (0, d.jsx)(i.S, { checked: o, className: 'h-4 w-4' }),
                  }),
                  a,
                ],
              }
            )
          );
        });
        (O.displayName = s.H_.displayName),
          (c.forwardRef(function (e, t) {
            var r = e.className,
              a = e.children,
              c = (0, n.A)(e, y);
            return (0, d.jsxs)(
              s.hN,
              N(
                N(
                  {
                    ref: t,
                    className: (0, l.cn)(
                      'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
                      r
                    ),
                  },
                  c
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
                    a,
                  ],
                }
              )
            );
          }).displayName = s.hN.displayName),
          (c.forwardRef(function (e, t) {
            var r = e.className,
              a = e.inset,
              o = (0, n.A)(e, g);
            return (0, d.jsx)(
              s.JU,
              N(
                {
                  ref: t,
                  className: (0, l.cn)('px-2 py-1.5 text-sm font-semibold', a && 'pl-8', r),
                },
                o
              )
            );
          }).displayName = s.JU.displayName);
        var E = c.forwardRef(function (e, t) {
          var r = e.className,
            a = (0, n.A)(e, h);
          return (0, d.jsx)(
            s.wv,
            N({ ref: t, className: (0, l.cn)('-mx-1 my-1 h-px bg-muted', r) }, a)
          );
        });
        E.displayName = s.wv.displayName;
      },
      42710: (e, t, r) => {
        r.d(t, { A: () => i });
        var a = r(42969),
          n = r(45794),
          s = r(55355),
          o = r(37876);
        function c(e, t) {
          var r = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var a = Object.getOwnPropertySymbols(e);
            t &&
              (a = a.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              r.push.apply(r, a);
          }
          return r;
        }
        function l(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? c(Object(r), !0).forEach(function (t) {
                  (0, a.A)(e, t, r[t]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
                : c(Object(r)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                  });
          }
          return e;
        }
        function i(e) {
          var t,
            r = e.text,
            a = e.darkMode,
            c = e.style,
            i = void 0 === c ? void 0 : c,
            d = e.overrideLinkColor,
            u = (null != r ? r : '')
              .replace(/\n/g, '  \n&nbsp;')
              .replace(/`/g, '')
              .replace(/\\\]\]/g, '&rsqrbracket;]')
              .replace(/\[\\\[/g, '[&lsqrbracket;')
              .replace(/\]\]/g, '&rsqrbracket;]')
              .replace(/\[FAQ\]/g, '&lsqrbracket;FAQ&rsqrbracket;'),
            f = u.includes('```'),
            p = l(
              {
                display: 'inline',
                overflowWrap: 'break-word',
                whiteSpace: 'pre-wrap',
                wordBreak: 'break-word',
              },
              null != r && r.includes('\uD83D\uDC4B')
                ? { letterSpacing: '0.02em', lineHeight: '1.4' }
                : {}
            ),
            m = { component: 'span', props: { style: null != i ? i : p } },
            b = {
              component: 'a',
              props: {
                target: 'blank',
                style: l(
                  l({}, (void 0 === a || a) && (void 0 === d || d) ? { color: '#fff' } : {}),
                  {},
                  {
                    textDecoration: 'underline',
                    wordBreak: 'break-word',
                    overflowWrap: 'break-word',
                    whiteSpace: 'pre-wrap',
                  }
                ),
              },
            };
          return (0, o.jsx)(s.Ay, {
            options: {
              disableParsingRawHTML: !0,
              namedCodesToUnicode: { lsqrbracket: '[', rsqrbracket: ']' },
              overrides: {
                code: {
                  component: function (e) {
                    var t = e.children;
                    return (0, o.jsx)('pre', {
                      style: {
                        backgroundColor: 'transparent',
                        padding: '1rem',
                        borderRadius: '4px',
                        overflowX: 'auto',
                      },
                      children: (0, o.jsx)('code', { children: t }),
                    });
                  },
                },
                h1: m,
                h2: m,
                h3: m,
                h4: m,
                h5: m,
                h6: m,
                p: m,
                a: b,
                ul: {
                  component: 'ul',
                  props: {
                    style: { listStyleType: 'disc', paddingLeft: '20px', whiteSpace: 'pre-wrap' },
                  },
                },
                ol: {
                  component: 'ol',
                  props: {
                    style: {
                      listStyleType: 'decimal',
                      paddingLeft: '20px',
                      whiteSpace: 'pre-wrap',
                    },
                  },
                },
                img: {
                  component: function (e) {
                    return (0, o.jsx)(o.Fragment, {
                      children: '!['.concat(e.alt, '](').concat(e.src, ')'),
                    });
                  },
                },
              },
            },
            children: f
              ? u
              : (t = u)
                ? (t = (t = t.replace(
                    /[\uD800-\uDBFF][\uDC00-\uDFFF]|[\u2600-\u27FF]/g,
                    function (e) {
                      return '‍'.concat(e);
                    }
                  )).replace(/\[(.*?)\]\ /g, function (e) {
                    return '\\[' + e.slice(1, -2) + '\\] ';
                  })).replace(/\(([\s\S]*?)\)/g, function (e) {
                    if (e.includes('"')) {
                      var t = e.slice(1, -1).split(' "'),
                        r = (0, n.A)(t, 2),
                        a = r[0],
                        s = r[1];
                      return s
                        ? ((s = s.replace(/\n/g, ' ')), '('.concat(a, ' "').concat(s, ')'))
                        : e;
                    }
                    return e;
                  })
                : '',
          });
        }
      },
      56962: (e, t, r) => {
        r.d(t, { A: () => d });
        var a = r(63857),
          n = r(43081),
          s = r.n(n),
          o = r(42710),
          c = r(37876),
          l = {
            pdf: 'images/file_icons/pdf_icon.svg',
            txt: 'images/file_icons/txt_icon.svg',
            default: 'images/file_icons/file_default_icon.png',
          },
          i = ['jpg', 'jpeg', 'png'];
        let d = function (e) {
          var t,
            r = e.text,
            n = e.attachments,
            d = e.darkMode,
            u = e.onAttachmentLoad,
            f = function (e) {
              var t,
                r,
                a = null == (t = e.file_name.split('.').pop()) ? void 0 : t.toLowerCase();
              return a && i.includes(a)
                ? null != (r = e.file_url)
                  ? r
                  : ''
                : l[null != a ? a : 'default'] || l.default;
            },
            p = function (e) {
              var t,
                r = null == (t = e.file_name.split('.').pop()) ? void 0 : t.toLowerCase();
              return !!r && i.includes(r);
            },
            m =
              ((t = (0, a.A)(
                s().mark(function e(t) {
                  var r, a, n, o;
                  return s().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (t.file_url) {
                              e.next = 2;
                              break;
                            }
                            return e.abrupt('return');
                          case 2:
                            return (e.prev = 2), (e.next = 5), fetch(t.file_url, { method: 'GET' });
                          case 5:
                            if ((r = e.sent).ok) {
                              e.next = 8;
                              break;
                            }
                            throw Error('Network response was not ok');
                          case 8:
                            return (e.next = 10), r.blob();
                          case 10:
                            (a = e.sent),
                              (n = window.URL.createObjectURL(a)),
                              ((o = document.createElement('a')).href = n),
                              (o.download = t.file_name),
                              document.body.appendChild(o),
                              o.click(),
                              o.remove(),
                              window.URL.revokeObjectURL(n),
                              (e.next = 24);
                            break;
                          case 21:
                            (e.prev = 21),
                              (e.t0 = e.catch(2)),
                              console.error('Download failed:', e.t0);
                          case 24:
                          case 'end':
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[2, 21]]
                  );
                })
              )),
              function (e) {
                return t.apply(this, arguments);
              });
          if (!n) return r ? (0, c.jsx)(o.A, { text: r, darkMode: d }) : null;
          var b =
            0 === n.length ||
            n.some(function (e) {
              return !e.file_url;
            });
          return (0, c.jsxs)('div', {
            className: 'break-words',
            children: [
              r && (0, c.jsx)(o.A, { text: r, darkMode: d }),
              (0, c.jsx)('div', {
                className: 'mt-2 flex flex-col gap-2',
                children: b
                  ? (0, c.jsx)('div', {
                      className: 'flex justify-center',
                      children: (0, c.jsx)('div', {
                        className:
                          'h-6 w-6 animate-spin rounded-full border-2 border-primary border-t-transparent',
                      }),
                    })
                  : n.map(function (e) {
                      return e.file_url
                        ? (0, c.jsxs)(
                            'button',
                            {
                              onClick: function () {
                                return m(e);
                              },
                              className:
                                'flex cursor-pointer flex-col items-start border-none bg-transparent p-0 text-left',
                              children: [
                                (0, c.jsx)('img', {
                                  src: f(e),
                                  alt: e.file_name,
                                  onLoad: u,
                                  className: p(e) ? 'max-w-full' : 'h-[120px] w-[120px]',
                                }),
                                !p(e) &&
                                  (0, c.jsx)('div', {
                                    className: 'mt-1 text-sm',
                                    children: e.file_name,
                                  }),
                              ],
                            },
                            e.file_path
                          )
                        : (0, c.jsx)(
                            'div',
                            {
                              className: 'text-sm text-destructive',
                              children: 'File loading error',
                            },
                            e.file_path
                          );
                    }),
              }),
            ],
          });
        };
      },
      70377: (e, t, r) => {
        r.d(t, { W: () => n });
        var a = r(82459);
        function n(e) {
          return !!e && (e === a.Mf.RESOLVED || e === a.Mf.CLOSED);
        }
      },
      75553: (e, t, r) => {
        r.d(t, { S: () => p });
        var a = r(42969),
          n = r(59860),
          s = r(14232),
          o = r(29470),
          c = r(5259),
          l = r(32868),
          i = r(37876),
          d = ['className'];
        function u(e, t) {
          var r = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var a = Object.getOwnPropertySymbols(e);
            t &&
              (a = a.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              r.push.apply(r, a);
          }
          return r;
        }
        function f(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? u(Object(r), !0).forEach(function (t) {
                  (0, a.A)(e, t, r[t]);
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
            a = (0, n.A)(e, d);
          return (0, i.jsx)(
            o.bL,
            f(
              f(
                {
                  ref: t,
                  className: (0, l.cn)(
                    'peer h-4 w-4 shrink-0 rounded-[4px] border border-zinc-50 shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground',
                    r
                  ),
                },
                a
              ),
              {},
              {
                children: (0, i.jsx)(o.C1, {
                  className: (0, l.cn)('flex items-center justify-center text-current'),
                  children: (0, i.jsx)(c.Srz, { className: 'h-4 w-4' }),
                }),
              }
            )
          );
        });
        p.displayName = o.bL.displayName;
      },
      82459: (e, t, r) => {
        r.d(t, { D_: () => c, Jw: () => a, Mf: () => n, Wm: () => s, lm: () => o });
        var a = (function (e) {
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
          n = (function (e) {
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
          c = (function (e) {
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
