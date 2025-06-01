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
      (e._sentryDebugIds[t] = '8a7050e7-6ea3-45db-9249-d99ade4327d1'),
      (e._sentryDebugIdIdentifier = 'sentry-dbid-8a7050e7-6ea3-45db-9249-d99ade4327d1'));
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
      31247: (e, t, a) => {
        a.d(t, { SQ: () => _, _2: () => j, hO: () => O, mB: () => E, rI: () => w, ty: () => N });
        var r = a(42969),
          n = a(59860),
          s = a(97154),
          o = a(5259),
          i = a(14232),
          l = a(32868),
          c = a(75553),
          d = a(37876),
          p = ['className', 'inset', 'children'],
          u = ['className'],
          f = ['className', 'sideOffset'],
          m = ['className', 'inset'],
          b = ['className', 'children', 'checked'],
          g = ['className', 'children'],
          y = ['className', 'inset'],
          h = ['className'];
        function x(e, t) {
          var a = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              a.push.apply(a, r);
          }
          return a;
        }
        function v(e) {
          for (var t = 1; t < arguments.length; t++) {
            var a = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? x(Object(a), !0).forEach(function (t) {
                  (0, r.A)(e, t, a[t]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
                : x(Object(a)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t));
                  });
          }
          return e;
        }
        var w = s.bL,
          N = s.l9;
        s.YJ,
          s.ZL,
          s.Pb,
          s.z6,
          (i.forwardRef(function (e, t) {
            var a = e.className,
              r = e.inset,
              i = e.children,
              c = (0, n.A)(e, p);
            return (0, d.jsxs)(
              s.ZP,
              v(
                v(
                  {
                    ref: t,
                    className: (0, l.cn)(
                      'flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent',
                      r && 'pl-8',
                      a
                    ),
                  },
                  c
                ),
                {},
                { children: [i, (0, d.jsx)(o.vKP, { className: 'ml-auto h-4 w-4' })] }
              )
            );
          }).displayName = s.ZP.displayName),
          (i.forwardRef(function (e, t) {
            var a = e.className,
              r = (0, n.A)(e, u);
            return (0, d.jsx)(
              s.G5,
              v(
                {
                  ref: t,
                  className: (0, l.cn)(
                    'z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
                    a
                  ),
                },
                r
              )
            );
          }).displayName = s.G5.displayName);
        var _ = i.forwardRef(function (e, t) {
          var a = e.className,
            r = e.sideOffset,
            o = (0, n.A)(e, f);
          return (0, d.jsx)(s.ZL, {
            children: (0, d.jsx)(
              s.UC,
              v(
                {
                  ref: t,
                  sideOffset: void 0 === r ? 4 : r,
                  className: (0, l.cn)(
                    'z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md',
                    'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
                    a
                  ),
                },
                o
              )
            ),
          });
        });
        _.displayName = s.UC.displayName;
        var j = i.forwardRef(function (e, t) {
          var a = e.className,
            r = e.inset,
            o = (0, n.A)(e, m);
          return (0, d.jsx)(
            s.q7,
            v(
              {
                ref: t,
                className: (0, l.cn)(
                  'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
                  r && 'pl-8',
                  a
                ),
              },
              o
            )
          );
        });
        j.displayName = s.q7.displayName;
        var O = i.forwardRef(function (e, t) {
          var a = e.className,
            r = e.children,
            o = e.checked,
            i = (0, n.A)(e, b);
          return (0, d.jsxs)(
            s.H_,
            v(
              v(
                {
                  ref: t,
                  className: (0, l.cn)(
                    o && 'bg-gray-700',
                    'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
                    a
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
                    children: (0, d.jsx)(c.S, { checked: o, className: 'h-4 w-4' }),
                  }),
                  r,
                ],
              }
            )
          );
        });
        (O.displayName = s.H_.displayName),
          (i.forwardRef(function (e, t) {
            var a = e.className,
              r = e.children,
              i = (0, n.A)(e, g);
            return (0, d.jsxs)(
              s.hN,
              v(
                v(
                  {
                    ref: t,
                    className: (0, l.cn)(
                      'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
                      a
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
                    r,
                  ],
                }
              )
            );
          }).displayName = s.hN.displayName),
          (i.forwardRef(function (e, t) {
            var a = e.className,
              r = e.inset,
              o = (0, n.A)(e, y);
            return (0, d.jsx)(
              s.JU,
              v(
                {
                  ref: t,
                  className: (0, l.cn)('px-2 py-1.5 text-sm font-semibold', r && 'pl-8', a),
                },
                o
              )
            );
          }).displayName = s.JU.displayName);
        var E = i.forwardRef(function (e, t) {
          var a = e.className,
            r = (0, n.A)(e, h);
          return (0, d.jsx)(
            s.wv,
            v({ ref: t, className: (0, l.cn)('-mx-1 my-1 h-px bg-muted', a) }, r)
          );
        });
        E.displayName = s.wv.displayName;
      },
      42710: (e, t, a) => {
        a.d(t, { A: () => c });
        var r = a(42969),
          n = a(45794),
          s = a(55355),
          o = a(37876);
        function i(e, t) {
          var a = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              a.push.apply(a, r);
          }
          return a;
        }
        function l(e) {
          for (var t = 1; t < arguments.length; t++) {
            var a = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? i(Object(a), !0).forEach(function (t) {
                  (0, r.A)(e, t, a[t]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
                : i(Object(a)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t));
                  });
          }
          return e;
        }
        function c(e) {
          var t,
            a = e.text,
            r = e.darkMode,
            i = e.style,
            c = void 0 === i ? void 0 : i,
            d = e.overrideLinkColor,
            p = (null != a ? a : '')
              .replace(/\n/g, '  \n&nbsp;')
              .replace(/`/g, '')
              .replace(/\\\]\]/g, '&rsqrbracket;]')
              .replace(/\[\\\[/g, '[&lsqrbracket;')
              .replace(/\]\]/g, '&rsqrbracket;]')
              .replace(/\[FAQ\]/g, '&lsqrbracket;FAQ&rsqrbracket;'),
            u = p.includes('```'),
            f = l(
              {
                display: 'inline',
                overflowWrap: 'break-word',
                whiteSpace: 'pre-wrap',
                wordBreak: 'break-word',
              },
              null != a && a.includes('\uD83D\uDC4B')
                ? { letterSpacing: '0.02em', lineHeight: '1.4' }
                : {}
            ),
            m = { component: 'span', props: { style: null != c ? c : f } },
            b = {
              component: 'a',
              props: {
                target: 'blank',
                style: l(
                  l({}, (void 0 === r || r) && (void 0 === d || d) ? { color: '#fff' } : {}),
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
                span: m,
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
            children: u
              ? p
              : (t = p)
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
                        a = (0, n.A)(t, 2),
                        r = a[0],
                        s = a[1];
                      return s
                        ? ((s = s.replace(/\n/g, ' ')), '('.concat(r, ' "').concat(s, ')'))
                        : e;
                    }
                    return e;
                  })
                : '',
          });
        }
      },
      56962: (e, t, a) => {
        a.d(t, { AE: () => p, Ay: () => u, wu: () => d });
        var r = a(63857),
          n = a(43081),
          s = a.n(n),
          o = a(42710),
          i = a(37876),
          l = {
            pdf: 'https://app.pluno.ai/images/file_icons/pdf_icon.svg',
            txt: 'https://app.pluno.ai/images/file_icons/txt_icon.svg',
            doc: 'https://app.pluno.ai/images/file_icons/txt_icon.svg',
            docx: 'https://app.pluno.ai/images/file_icons/txt_icon.svg',
            xls: 'https://app.pluno.ai/images/file_icons/txt_icon.svg',
            xlsx: 'https://app.pluno.ai/images/file_icons/txt_icon.svg',
            ppt: 'https://app.pluno.ai/images/file_icons/txt_icon.svg',
            pptx: 'https://app.pluno.ai/images/file_icons/txt_icon.svg',
            json: 'https://app.pluno.ai/images/file_icons/txt_icon.svg',
            default: 'https://app.pluno.ai/images/file_icons/file_default_icon.png',
          },
          c = ['jpg', 'jpeg', 'png', 'gif'],
          d = function (e) {
            var t,
              a = null == e || null == (t = e.split('.').pop()) ? void 0 : t.toLowerCase();
            return !!a && c.includes(a);
          },
          p = function (e, t) {
            var a,
              r = null == e || null == (a = e.split('.').pop()) ? void 0 : a.toLowerCase();
            return r && c.includes(r) ? t : l[null != r ? r : 'default'] || l.default;
          };
        let u = function (e) {
          var t,
            a = e.text,
            n = e.attachments,
            l = e.darkMode,
            c = e.onAttachmentLoad,
            u =
              ((t = (0, r.A)(
                s().mark(function e(t) {
                  var a, r, n, o;
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
                            if ((a = e.sent).ok) {
                              e.next = 8;
                              break;
                            }
                            throw Error('Network response was not ok');
                          case 8:
                            return (e.next = 10), a.blob();
                          case 10:
                            (r = e.sent),
                              (n = window.URL.createObjectURL(r)),
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
          if (!n) return a ? (0, i.jsx)(o.A, { text: a, darkMode: l }) : null;
          var f =
            0 === n.length ||
            n.some(function (e) {
              return !e.file_url;
            });
          return (0, i.jsxs)('div', {
            className: 'break-words',
            children: [
              a && (0, i.jsx)(o.A, { text: a, darkMode: l }),
              (0, i.jsx)('div', {
                className: 'mt-2 flex flex-col gap-2',
                children: f
                  ? (0, i.jsx)('div', {
                      className: 'flex justify-center',
                      children: (0, i.jsx)('div', {
                        className:
                          'h-6 w-6 animate-spin rounded-full border-2 border-primary border-t-transparent',
                      }),
                    })
                  : n.map(function (e) {
                      return e.file_url
                        ? (0, i.jsxs)(
                            'button',
                            {
                              onClick: function () {
                                return u(e);
                              },
                              className:
                                'flex cursor-pointer flex-col items-start border-none bg-transparent p-0 text-left',
                              children: [
                                (0, i.jsx)('img', {
                                  src: p(e.file_name, e.file_url),
                                  alt: e.file_name,
                                  onLoad: c,
                                  className: d(e.file_name) ? 'max-w-full' : 'h-[120px] w-[120px]',
                                }),
                                !d(e.file_name) &&
                                  (0, i.jsx)('div', {
                                    className: 'mt-1 text-sm',
                                    children: e.file_name,
                                  }),
                              ],
                            },
                            e.file_path
                          )
                        : (0, i.jsx)(
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
      70377: (e, t, a) => {
        a.d(t, { W: () => n });
        var r = a(82459);
        function n(e) {
          return !!e && (e === r.Mf.RESOLVED || e === r.Mf.CLOSED);
        }
      },
      75553: (e, t, a) => {
        a.d(t, { S: () => f });
        var r = a(42969),
          n = a(59860),
          s = a(14232),
          o = a(29470),
          i = a(5259),
          l = a(32868),
          c = a(37876),
          d = ['className'];
        function p(e, t) {
          var a = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              a.push.apply(a, r);
          }
          return a;
        }
        function u(e) {
          for (var t = 1; t < arguments.length; t++) {
            var a = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? p(Object(a), !0).forEach(function (t) {
                  (0, r.A)(e, t, a[t]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
                : p(Object(a)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t));
                  });
          }
          return e;
        }
        var f = s.forwardRef(function (e, t) {
          var a = e.className,
            r = (0, n.A)(e, d);
          return (0, c.jsx)(
            o.bL,
            u(
              u(
                {
                  ref: t,
                  className: (0, l.cn)(
                    'peer h-4 w-4 shrink-0 rounded-[4px] border border-zinc-50 shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground',
                    a
                  ),
                },
                r
              ),
              {},
              {
                children: (0, c.jsx)(o.C1, {
                  className: (0, l.cn)('flex items-center justify-center text-current'),
                  children: (0, c.jsx)(i.Srz, { className: 'h-4 w-4' }),
                }),
              }
            )
          );
        });
        f.displayName = o.bL.displayName;
      },
      82459: (e, t, a) => {
        a.d(t, { D_: () => i, Jw: () => r, Mf: () => n, Wm: () => s, lm: () => o });
        var r = (function (e) {
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
