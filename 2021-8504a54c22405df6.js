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
      (e._sentryDebugIds[t] = '43688b53-c982-4195-8241-75fd7ccd0df2'),
      (e._sentryDebugIdIdentifier = 'sentry-dbid-43688b53-c982-4195-8241-75fd7ccd0df2'));
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
    [2021],
    {
      7895: (e, t, n) => {
        n.d(t, { IG: () => f, tX: () => u, xb: () => d, yw: () => g });
        var r = n(7491),
          a = n(42969),
          o = n(3990),
          s = n(69965),
          i = n(14379);
        function l(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              n.push.apply(n, r);
          }
          return n;
        }
        function c(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? l(Object(n), !0).forEach(function (t) {
                  (0, a.A)(e, t, n[t]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                : l(Object(n)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                  });
          }
          return e;
        }
        var d = (0, s.A)(function (e) {
            return {};
          }),
          u = (0, s.A)(function (e) {
            var t = function (t) {
              return t ? 'dark' === t : 'dark' === e.palette.mode;
            };
            return {
              chatButton: {
                position: 'absolute',
                right: 0,
                bottom: 0,
                pointerEvents: 'auto',
                cursor: 'pointer',
                padding: 0,
                boxShadow:
                  '0px 3px 5px -1px rgba(0, 0, 0, 0.20), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)',
              },
              chatCardTitle: { textOverflow: 'ellipsis', overflow: 'hidden' },
              iconAvatar: {
                borderRadius: '100px',
                border: '1px solid var(--grey-400, #BDBDBD)',
                background: 'var(--primary-contrast, #FFF)',
              },
              container: { background: 'transparent', position: 'absolute' },
              chatCard: {
                pointerEvents: 'auto',
                position: 'absolute',
                right: 0,
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                border: '1px solid rgba(0,0,0,0.5)',
                zIndex: '2147483647',
                transformOrigin: 'bottom right',
              },
              textField: { width: '100%' },
              cardActions: { padding: '8px 16px 0px 16px' },
              actionButtonRow: { height: '46px' },
              header: { padding: '16px' },
              chatContent: {
                flex: 1,
                gap: '15px',
                paddingTop: '15px',
                display: 'flex',
                flexDirection: 'column',
                overflowY: 'auto',
                '&::-webkit-scrollbar': { display: 'none' },
                '-ms-overflow-style': 'none',
                'scrollbar-width': 'none',
              },
              chatRow: {
                width: '100%',
                display: 'flex',
                gap: '8px',
                alignItems: 'end',
                padding: '0 36px 0 0',
              },
              chatRowRight: {
                justifyContent: 'end',
                flexDirection: 'row-reverse',
                padding: '0 0 0 36px',
              },
              chatRowCenter: { justifyContent: 'center', padding: '0 0 0 36px' },
              chatBubble: {
                padding: '9px 12px',
                width: 'fit-content',
                maxWidth: '90%',
                borderRadius: '8px',
                minHeight: '36px',
                overflowWrap: 'anywhere',
              },
              chatBubbleLeft: {
                background: function (e) {
                  return t(e.themeMode) ? '#1B232E' : 'rgba(0,0,0,0.06)';
                },
              },
              chatBubbleRight: {
                outline: function (e) {
                  return '2px solid ' + (t(e.themeMode) ? '#71717A' : 'rgba(0,0,0,0.06)');
                },
                marginRight: '2px',
              },
              logo: {
                paddingTop: '0px',
                gap: '4px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              },
              chatResolveButton: {
                textTransform: 'none',
                color: function (e) {
                  return t(e.themeMode) ? 'white' : 'rgba(0, 0, 0, 0.8)';
                },
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
              },
              chatActionButton: { textAlign: 'left', display: 'block' },
              chatJustCopied: {},
              chatBubbleLowlight: { opacity: 0.5 },
              chatQASuggestionButton: {
                color: function (e) {
                  return t(e.themeMode) ? 'white' : 'rgba(0, 0, 0, 0.8)';
                },
                wordBreak: 'break-all',
                textAlign: 'left',
              },
            };
          }),
          p = { background: 'var(--primary-contrast, #FFF)', color: 'black' },
          f = (0, i.A)(o.A)(c({}, p)),
          g = (0, i.A)(r.A)(c({ transform: 'scaleX(-1)' }, p));
      },
      39600: (e, t, n) => {
        n.d(t, { A: () => I });
        var r = n(42969),
          a = n(59983),
          o = n(43318),
          s = n(32868),
          i = n(70377),
          l = n(14232),
          c = n(99671),
          d = n(71093),
          u = n(99097),
          p = n(19810),
          f = n(21933),
          g = n(31509),
          m = n(45317),
          x = n(45794),
          h = n(63857),
          b = n(43081),
          v = n.n(b),
          w = n(7895),
          y = n(37876);
        function j(e) {
          return /^([a-zA-Z0-9_\.\-\+\%])+\@(([a-zA-Z0-9.\-])+\.)+([a-zA-Z0-9]{2,})+$/.test(e);
        }
        function _(e) {
          var t,
            n = e.onEnterEmail,
            r =
              void 0 === n
                ? (0, h.A)(
                    v().mark(function e() {
                      return v().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                            case 'end':
                              return e.stop();
                          }
                      }, e);
                    })
                  )
                : n,
            a = e.emailSent,
            o = (0, w.tX)({}),
            s = l.useRef(null),
            i = l.useState(!1),
            c = (0, x.A)(i, 2),
            b = c[0],
            _ = c[1],
            A = l.useState(!1),
            O = (0, x.A)(A, 2),
            k = O[0],
            N = O[1],
            S = l.useState(!1),
            E = (0, x.A)(S, 2),
            R = E[0],
            D = E[1],
            M =
              ((t = (0, h.A)(
                v().mark(function e() {
                  var t;
                  return v().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (!s.current) {
                            e.next = 11;
                            break;
                          }
                          if (j((t = s.current.value))) {
                            e.next = 5;
                            break;
                          }
                          return N(!0), e.abrupt('return');
                        case 5:
                          return N(!1), _(!0), D(!0), (e.next = 10), r(t);
                        case 10:
                          D(!1);
                        case 11:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                })
              )),
              function () {
                return t.apply(this, arguments);
              });
          return (0, y.jsx)(d.A, {
            autoFocus: !0,
            inputRef: s,
            autoComplete: 'off',
            multiline: !0,
            error: k,
            helperText: k ? 'Please enter a valid email address' : '',
            InputProps: {
              endAdornment: (0, y.jsx)(u.A, {
                position: 'end',
                children: R
                  ? (0, y.jsx)(m.A, { size: 20 })
                  : b || a
                    ? (0, y.jsx)(g.A, { color: 'success', sx: { marginRight: '0.75rem' } })
                    : (0, y.jsx)(p.A, {
                        onClick: M,
                        disabled: b || !!a || R,
                        size: 'large',
                        children: (0, y.jsx)(f.A, {}),
                      }),
              }),
              style: { minHeight: '40px', height: '40px', paddingRight: 12 * !!R },
            },
            className: o.textField,
            onChange: function (e) {
              N(e.target.value && !j(e.target.value));
            },
            onKeyDown: function (e) {
              13 !== e.keyCode || e.shiftKey || b || (e.preventDefault(), M());
            },
            placeholder: a || 'Your email',
            disabled: b || !!a || R,
            sx: {
              mt: 1,
              '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: 'primary.main' } },
            },
          });
        }
        var A = n(84514),
          O = n(26778);
        let k = function (e) {
          var t = e.onRate,
            n = e.selectedRating,
            r = e.isActive,
            a = ['\uD83D\uDE20', '\uD83D\uDE15', '\uD83D\uDE10', '\uD83D\uDE00', '\uD83E\uDD29'];
          return (0, y.jsxs)(A.A, {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            sx: { opacity: r ? 1 : 0.5 },
            children: [
              (0, y.jsx)(O.A, {
                variant: 'body1',
                color: 'white',
                gutterBottom: !0,
                align: 'center',
                sx: { marginBottom: 1 },
                children: 'How do you rate your experience with our support team?',
              }),
              (0, y.jsx)(A.A, {
                display: 'flex',
                border: '1px solid white',
                borderRadius: '6px',
                overflow: 'hidden',
                width: '250px',
                children: a.map(function (e, o) {
                  return (0, y.jsx)(
                    A.A,
                    {
                      sx: {
                        flex: 1,
                        borderRight: o < a.length - 1 ? '1px solid white' : 'none',
                        '&:last-child': { borderRight: 'none' },
                      },
                      children: (0, y.jsx)(A.A, {
                        component: 'button',
                        onClick: function () {
                          r && t(o + 1);
                        },
                        sx: {
                          width: '100%',
                          background: n === o + 1 ? 'rgba(128, 90, 213, 0.6)' : 'none',
                          border: 'none',
                          cursor: r ? 'pointer' : 'default',
                          fontSize: '16px',
                          padding: '8px 12px',
                          color: 'white',
                          '&:hover': { backgroundColor: r ? 'rgba(128, 90, 213, 0.4)' : 'none' },
                        },
                        disabled: !r,
                        children: e,
                      }),
                    },
                    o
                  );
                }),
              }),
            ],
          });
        };
        var N = {
            support_rating: function (e) {
              var t = e.onRate,
                n = e.selectedRating,
                r = e.isActive;
              return (0, y.jsx)(k, { onRate: t, selectedRating: n, isActive: r });
            },
          },
          S = n(56962),
          E = n(98682),
          R = n(82459);
        function D(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              n.push.apply(n, r);
          }
          return n;
        }
        var M = function (e) {
            var t,
              n = e.message,
              a = e.darkMode,
              o = (e.supportAgents, e.getSupportAgentName),
              s = e.onRate,
              l = e.selectedRating,
              c = e.isLastMessage,
              d = (e.onEnterEmail, e.emailSent, e.configData, e.onAttachmentLoad);
            e.debug;
            var u = n.component_type ? N[n.component_type] : null;
            if (u) {
              var p =
                {
                  support_rating: {
                    onRate: function (e) {
                      s && s(e);
                    },
                    selectedRating: l,
                    isActive: null === l && c,
                  },
                }[n.component_type] || {};
              return (0, y.jsx)(
                u,
                (function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2
                      ? D(Object(n), !0).forEach(function (t) {
                          (0, r.A)(e, t, n[t]);
                        })
                      : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                        : D(Object(n)).forEach(function (t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                          });
                  }
                  return e;
                })({}, p)
              );
            }
            switch (n.message_type) {
              case R.Jw.LAST_QUESTION_SUMMARY:
                return (0, y.jsxs)('p', {
                  className: 'text-sm italic text-muted-foreground',
                  children: ['Summary: ', n.content],
                });
              case R.Jw.STATUS_CHANGE:
                if ((0, i.W)(n.new_status))
                  return (0, y.jsx)('p', {
                    className: 'text-sm italic text-muted-foreground',
                    children: 'Ticket has been closed',
                  });
                return null;
              case R.Jw.AGENT_ASSIGNMENT:
                if (n.assigned_agent_id) {
                  var f = '';
                  return (
                    (f =
                      n.source === R.Wm.AGENT
                        ? n.source_id === n.assigned_agent_id
                          ? ''.concat(o(n.source_id), ' claimed this ticket')
                          : ''
                              .concat(o(n.source_id), ' assigned support agent ')
                              .concat(o(n.assigned_agent_id))
                        : ''.concat(o(n.assigned_agent_id), ' is assigned to this ticket')),
                    (0, y.jsx)('p', {
                      className: 'text-sm italic text-muted-foreground',
                      children: f,
                    })
                  );
                }
                return (0, y.jsxs)('p', {
                  className: 'text-sm italic text-muted-foreground',
                  children: [n.source_id, ' unclaimed the ticket'],
                });
              case R.Jw.NOTE:
                return (0, y.jsxs)('p', {
                  className: 'text-sm italic text-muted-foreground',
                  children: ['Note: ', n.content],
                });
              default:
                if (n.content || n.attachments)
                  return (0, y.jsx)(S.Ay, {
                    text:
                      n.message_type === R.Jw.TEAM
                        ? null != (t = n.translation)
                          ? t
                          : 'No translation'
                        : n.content,
                    attachments: n.attachments,
                    darkMode: a,
                    onAttachmentLoad: d,
                  });
                return null;
            }
          },
          T = function (e) {
            var t,
              n,
              r = e.message,
              a = e.children,
              o = e.className,
              s = e.onEnterEmail,
              i = e.emailSent,
              l = e.configData,
              c = e.debug,
              d =
                ((null == (t = r.attributes) ? void 0 : t.action_responded_to) ===
                  'contact-support' ||
                  (null == (n = r.attributes) ? void 0 : n.escalate_ticket) === !0) &&
                s &&
                (null == l ? void 0 : l['human-live-chat-support']);
            return (0, y.jsxs)('div', {
              className: o,
              children: [
                (0, y.jsx)('div', { className: 'webmarkdown break-words', children: a }),
                d && (0, y.jsx)(_, { onEnterEmail: s, emailSent: i }),
                c &&
                  r.attributes &&
                  (0, y.jsx)('div', {
                    className: 'opacity-50',
                    children: Object.keys(r.attributes).map(function (e) {
                      if (r.attributes && 'assistantResponse' !== e) {
                        var t = r.attributes;
                        return (0, y.jsxs)(
                          'div',
                          { children: ['>', ' ', e, ': ', JSON.stringify(t[e])] },
                          e
                        );
                      }
                      return null;
                    }),
                  }),
              ],
            });
          },
          C = function (e) {
            var t,
              n,
              r,
              a = e.message,
              s = e.configData,
              i = e.getSupportAgentImage,
              l = e.supportAgents;
            return a.message_type === R.Jw.ASSISTANT ||
              (a.message_type === R.Jw.QA_SUGGESTION && a.source !== R.Wm.END_USER)
              ? (0, y.jsx)(o.f, {
                  sx: { width: 32, height: 32 },
                  src: null != (t = null == s ? void 0 : s['assistant-icon-url']) ? t : '',
                  children: (0, y.jsx)(w.IG, { sx: { width: 16, height: 16 } }),
                })
              : a.message_type === R.Jw.TEAM
                ? (0, y.jsx)(o.f, {
                    sx: { width: 32, height: 32 },
                    src: i(a.source_id),
                    children:
                      null !=
                      (n =
                        null == l ||
                        null == (r = l.get(a.source_id)) ||
                        null == (r = r.name) ||
                        null == (r = r[0])
                          ? void 0
                          : r.toUpperCase())
                        ? n
                        : 'S',
                  })
                : null;
          },
          P = (0, l.forwardRef)(function (e, t) {
            var n,
              r,
              i,
              d = e.conversationMessages,
              u = e.configData,
              p = e.isChatInitalizing,
              f = e.isLoadingResponse,
              g = void 0 !== f && f,
              m = e.forceDarkMode,
              x = e.debug,
              h = void 0 !== x && x,
              b = e.onEnterEmail,
              v = e.emailSent,
              j = e.supportAgents,
              _ = e.showEditButtons,
              A = void 0 !== _ && _,
              O = e.onRate,
              k = e.selectedRating,
              N = e.disableAutoScroll,
              S = void 0 !== N && N,
              D = (0, l.useRef)(null),
              P = (null == u ? void 0 : u.theme) === 'dark' || (void 0 !== m && m),
              I = function (e) {
                var t, n;
                return null !=
                  (t = null == j || null == (n = j.get(null != e ? e : '')) ? void 0 : n.name)
                  ? t
                  : 'A Team Member';
              },
              G = function (e) {
                var t, n, r;
                return null !=
                  (t =
                    null !=
                    (n = null == j || null == (r = j.get(null != e ? e : '')) ? void 0 : r.image)
                      ? n
                      : null == u
                        ? void 0
                        : u['assistant-icon-url'])
                  ? t
                  : '';
              },
              L = function (e) {
                if (e.message_type === R.Jw.STATUS_CHANGE)
                  return 'w-full text-center bg-transparent shadow-none border-0 p-0 m-0';
                var t = 'px-4 py-2 rounded-2xl max-w-[85%] break-words';
                return e.message_type === R.Jw.ASSISTANT ||
                  e.message_type === R.Jw.TEAM ||
                  (e.message_type === R.Jw.QA_SUGGESTION && e.source !== R.Wm.END_USER)
                  ? (0, s.cn)(t, 'ml-3 bg-muted text-foreground rounded-tl-none')
                  : e.message_type === R.Jw.USER ||
                      (e.message_type === R.Jw.QA_SUGGESTION && e.source)
                    ? (0, s.cn)(t, 'bg-transparent text-white border border-white rounded-br-none')
                    : (0, s.cn)(t, 'bg-muted/50 text-foreground');
              },
              J = function () {
                if (!S) {
                  var e;
                  null == (e = D.current) || e.scrollIntoView({ behavior: 'smooth' });
                }
              };
            return (
              (0, l.useEffect)(
                function () {
                  J();
                },
                [d, g]
              ),
              (0, y.jsxs)('div', {
                className: 'flex flex-grow flex-col space-y-4 overflow-y-auto p-0',
                ref: t,
                children: [
                  ((n = !1),
                  (r = !1),
                  d.map(function (e, t, o) {
                    var s,
                      i = t === o.length - 1;
                    return (
                      !r &&
                        v &&
                        o.slice(t).every(function (e) {
                          return e.message_type !== R.Jw.ASSISTANT;
                        }) &&
                        ((n = !0), (r = !0)),
                      (0, y.jsxs)(
                        'div',
                        {
                          children: [
                            n && !r && (0, y.jsx)(a.w, { className: 'my-4' }),
                            (0, y.jsxs)('div', {
                              className: 'flex w-full flex-row',
                              ref: i ? D : void 0,
                              children: [
                                (0, y.jsxs)('div', {
                                  className:
                                    e.message_type === R.Jw.STATUS_CHANGE
                                      ? 'flex items-center mb-4 w-full justify-center'
                                      : e.message_type === R.Jw.ASSISTANT ||
                                          e.message_type === R.Jw.TEAM ||
                                          (e.message_type === R.Jw.QA_SUGGESTION &&
                                            e.source !== R.Wm.END_USER)
                                        ? 'flex items-start mb-4'
                                        : e.message_type === R.Jw.USER ||
                                            (e.message_type === R.Jw.QA_SUGGESTION && e.source)
                                          ? 'flex items-start mb-4 w-full justify-end'
                                          : 'flex items-start mb-4 justify-center',
                                  children: [
                                    (0, y.jsx)(C, {
                                      message: e,
                                      configData: u,
                                      getSupportAgentImage: G,
                                      supportAgents: j,
                                    }),
                                    (0, y.jsx)(T, {
                                      message: e,
                                      className: L(e),
                                      onEnterEmail: b,
                                      emailSent: v,
                                      configData: u,
                                      debug: h,
                                      children: (0, y.jsx)(M, {
                                        message: e,
                                        darkMode: P,
                                        supportAgents: j,
                                        getSupportAgentName: I,
                                        onRate: O,
                                        selectedRating: k,
                                        isLastMessage: i,
                                        onEnterEmail: b,
                                        emailSent: v,
                                        configData: u,
                                        onAttachmentLoad: J,
                                        debug: h,
                                      }),
                                    }),
                                  ],
                                }),
                                A &&
                                  e.message_type === R.Jw.USER &&
                                  (0, y.jsx)(c.A, { question: null != (s = e.content) ? s : '' }),
                              ],
                            }),
                          ],
                        },
                        'message-'.concat(t)
                      )
                    );
                  })),
                  (g || (void 0 !== p && p)) &&
                    (0, y.jsxs)('div', {
                      className: 'mb-4 flex items-start',
                      ref: D,
                      children: [
                        (0, y.jsx)(o.f, {
                          sx: { width: 32, height: 32 },
                          src: null != (i = null == u ? void 0 : u['assistant-icon-url']) ? i : '',
                          children: (0, y.jsx)(w.IG, { sx: { width: 16, height: 16 } }),
                        }),
                        (0, y.jsx)('div', {
                          className: (0, s.cn)(
                            'ml-3 flex items-center rounded-2xl rounded-tl-none bg-muted px-4 py-2 text-foreground'
                          ),
                          children: (0, y.jsx)(E.A, {}),
                        }),
                      ],
                    }),
                ],
              })
            );
          });
        P.displayName = 'ChatContent';
        let I = P;
      },
      42710: (e, t, n) => {
        n.d(t, { A: () => c });
        var r = n(42969),
          a = n(45794),
          o = n(55355);
        n(14232);
        var s = n(37876);
        function i(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              n.push.apply(n, r);
          }
          return n;
        }
        function l(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? i(Object(n), !0).forEach(function (t) {
                  (0, r.A)(e, t, n[t]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                : i(Object(n)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                  });
          }
          return e;
        }
        function c(e) {
          var t,
            n = e.text,
            r = e.darkMode,
            i = e.style,
            c = void 0 === i ? void 0 : i,
            d = e.overrideLinkColor,
            u = (null != n ? n : '')
              .replace(/\n/g, '  \n&nbsp;')
              .replace(/`/g, '')
              .replace(/\\\]\]/g, '&rsqrbracket;]')
              .replace(/\[\\\[/g, '[&lsqrbracket;')
              .replace(/\]\]/g, '&rsqrbracket;]')
              .replace(/\[FAQ\]/g, '&lsqrbracket;FAQ&rsqrbracket;'),
            p = u.includes('```'),
            f = l(
              {
                display: 'inline',
                overflowWrap: 'break-word',
                whiteSpace: 'pre-wrap',
                wordBreak: 'break-word',
              },
              null != n && n.includes('\uD83D\uDC4B')
                ? { letterSpacing: '0.02em', lineHeight: '1.4' }
                : {}
            ),
            g = { component: 'span', props: { style: null != c ? c : f } },
            m = {
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
          return (0, s.jsx)(o.Ay, {
            options: {
              disableParsingRawHTML: !0,
              namedCodesToUnicode: { lsqrbracket: '[', rsqrbracket: ']' },
              overrides: {
                code: {
                  component: function (e) {
                    var t = e.children;
                    return (0, s.jsx)('pre', {
                      style: {
                        backgroundColor: 'transparent',
                        padding: '1rem',
                        borderRadius: '4px',
                        overflowX: 'auto',
                      },
                      children: (0, s.jsx)('code', { children: t }),
                    });
                  },
                },
                h1: g,
                h2: g,
                h3: g,
                h4: g,
                h5: g,
                h6: g,
                p: g,
                span: g,
                a: m,
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
                    var t = e.src,
                      n = e.alt;
                    return (0, s.jsx)('img', {
                      src: t,
                      alt: n,
                      style: {
                        maxWidth: '200px',
                        height: 'auto',
                        display: 'block',
                        margin: '1rem 0',
                        borderRadius: '4px',
                      },
                      loading: 'lazy',
                    });
                  },
                },
              },
            },
            children: p
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
                        n = (0, a.A)(t, 2),
                        r = n[0],
                        o = n[1];
                      return o
                        ? ((o = o.replace(/\n/g, ' ')), '('.concat(r, ' "').concat(o, ')'))
                        : e;
                    }
                    return e;
                  })
                : '',
          });
        }
      },
      42904: (e, t, n) => {
        n.d(t, { BT: () => v, Wu: () => w, ZB: () => b, Zp: () => x, aR: () => h, wL: () => y });
        var r = n(42969),
          a = n(59860),
          o = n(14232),
          s = n(32868),
          i = n(37876),
          l = ['className'],
          c = ['className'],
          d = ['className'],
          u = ['className'],
          p = ['className'],
          f = ['className'];
        function g(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              n.push.apply(n, r);
          }
          return n;
        }
        function m(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? g(Object(n), !0).forEach(function (t) {
                  (0, r.A)(e, t, n[t]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                : g(Object(n)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                  });
          }
          return e;
        }
        var x = o.forwardRef(function (e, t) {
          var n = e.className,
            r = (0, a.A)(e, l);
          return (0, i.jsx)(
            'div',
            m(
              {
                ref: t,
                className: (0, s.cn)('rounded-xl border bg-card text-card-foreground shadow', n),
              },
              r
            )
          );
        });
        x.displayName = 'Card';
        var h = o.forwardRef(function (e, t) {
          var n = e.className,
            r = (0, a.A)(e, c);
          return (0, i.jsx)(
            'div',
            m({ ref: t, className: (0, s.cn)('flex flex-col space-y-1.5 p-6', n) }, r)
          );
        });
        h.displayName = 'CardHeader';
        var b = o.forwardRef(function (e, t) {
          var n = e.className,
            r = (0, a.A)(e, d);
          return (0, i.jsx)(
            'h3',
            m({ ref: t, className: (0, s.cn)('font-semibold leading-none tracking-tight', n) }, r)
          );
        });
        b.displayName = 'CardTitle';
        var v = o.forwardRef(function (e, t) {
          var n = e.className,
            r = (0, a.A)(e, u);
          return (0, i.jsx)(
            'p',
            m({ ref: t, className: (0, s.cn)('text-sm text-muted-foreground', n) }, r)
          );
        });
        v.displayName = 'CardDescription';
        var w = o.forwardRef(function (e, t) {
          var n = e.className,
            r = (0, a.A)(e, p);
          return (0, i.jsx)('div', m({ ref: t, className: (0, s.cn)('p-6 pt-0', n) }, r));
        });
        w.displayName = 'CardContent';
        var y = o.forwardRef(function (e, t) {
          var n = e.className,
            r = (0, a.A)(e, f);
          return (0, i.jsx)(
            'div',
            m({ ref: t, className: (0, s.cn)('flex items-center p-6 pt-0', n) }, r)
          );
        });
        y.displayName = 'CardFooter';
      },
      43318: (e, t, n) => {
        n.d(t, { f: () => s });
        var r = n(82159);
        n(14232);
        var a = n(7895),
          o = n(37876);
        function s(e) {
          var t = e.src,
            n = e.children,
            s = e.sx,
            i = (0, a.tX)({});
          return t
            ? (0, o.jsx)(r.A, {
                src: t,
                onError: function (e) {
                  e.currentTarget.classList.add(i.iconAvatar);
                },
                sx: s,
                children: n,
              })
            : (0, o.jsx)(r.A, { sx: s, className: i.iconAvatar, children: n });
        }
      },
      56962: (e, t, n) => {
        n.d(t, { AE: () => u, Ay: () => p, wu: () => d });
        var r = n(63857),
          a = n(43081),
          o = n.n(a),
          s = n(42710),
          i = n(37876),
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
              n = null == e || null == (t = e.split('.').pop()) ? void 0 : t.toLowerCase();
            return !!n && c.includes(n);
          },
          u = function (e, t) {
            var n,
              r = null == e || null == (n = e.split('.').pop()) ? void 0 : n.toLowerCase();
            return r && c.includes(r) ? t : l[null != r ? r : 'default'] || l.default;
          };
        let p = function (e) {
          var t,
            n = e.text,
            a = e.attachments,
            l = e.darkMode,
            c = e.onAttachmentLoad,
            p =
              ((t = (0, r.A)(
                o().mark(function e(t) {
                  var n, r, a, s;
                  return o().wrap(
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
                            if ((n = e.sent).ok) {
                              e.next = 8;
                              break;
                            }
                            throw Error('Network response was not ok');
                          case 8:
                            return (e.next = 10), n.blob();
                          case 10:
                            (r = e.sent),
                              (a = window.URL.createObjectURL(r)),
                              ((s = document.createElement('a')).href = a),
                              (s.download = t.file_name),
                              document.body.appendChild(s),
                              s.click(),
                              s.remove(),
                              window.URL.revokeObjectURL(a),
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
          if (!a) return n ? (0, i.jsx)(s.A, { text: n, darkMode: l }) : null;
          var f =
            0 === a.length ||
            a.some(function (e) {
              return !e.file_url;
            });
          return (0, i.jsxs)('div', {
            className: 'break-words',
            children: [
              n && (0, i.jsx)(s.A, { text: n, darkMode: l }),
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
                  : a.map(function (e) {
                      return e.file_url
                        ? (0, i.jsxs)(
                            'button',
                            {
                              onClick: function () {
                                return p(e);
                              },
                              className:
                                'flex cursor-pointer flex-col items-start border-none bg-transparent p-0 text-left',
                              children: [
                                (0, i.jsx)('img', {
                                  src: u(e.file_name, e.file_url),
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
      70377: (e, t, n) => {
        n.d(t, { W: () => a });
        var r = n(82459);
        function a(e) {
          return !!e && (e === r.Mf.RESOLVED || e === r.Mf.CLOSED);
        }
      },
      98682: (e, t, n) => {
        n.d(t, { A: () => s });
        var r = n(14232),
          a = n(37876);
        function o(e) {
          var t = e.text,
            n = e.interval,
            o = void 0 === n ? 100 : n,
            s = (0, r.useState)(''),
            i = s[0],
            l = s[1];
          return (
            (0, r.useEffect)(
              function () {
                var e = 0,
                  n = 0,
                  r = setInterval(function () {
                    if (e >= t.length - 2) {
                      if (++n > 3) n = 0;
                      else if (n > 0) return;
                    }
                    e > t.length && (e -= 3), l(t.substring(0, e)), e++;
                  }, o);
                return function () {
                  return clearInterval(r);
                };
              },
              [t, o]
            ),
            (0, a.jsx)('span', { children: i })
          );
        }
        function s() {
          var e = (0, r.useState)('Thinking...'),
            t = e[0],
            n = e[1];
          return (
            (0, r.useEffect)(function () {
              var e = [];
              return (
                e.push(
                  setTimeout(function () {
                    return n('Gathering sources...');
                  }, 6e3)
                ),
                e.push(
                  setTimeout(function () {
                    return n('Generating answer...');
                  }, 11e3)
                ),
                function () {
                  e.forEach(clearTimeout);
                }
              );
            }, []),
            (0, a.jsx)(o, { text: t })
          );
        }
      },
      99671: (e, t, n) => {
        n.d(t, { A: () => i }), n(14232);
        var r = n(31247),
          a = n(68670),
          o = n(48500),
          s = n(37876);
        function i(e) {
          var t = e.question,
            n = void 0 === t ? '' : t,
            i = e.answer,
            l = void 0 === i ? '' : i,
            c = e.processed_msg_id,
            d = void 0 === c ? '' : c,
            u = e.label;
          return (0, s.jsxs)(r.rI, {
            children: [
              (0, s.jsx)(r.ty, {
                asChild: !0,
                children: (0, s.jsx)(a.$, {
                  variant: 'ghost',
                  size: 'icon',
                  className: 'h-8 w-8 p-0 text-muted-foreground/70 hover:text-muted-foreground',
                  onClick: function (e) {
                    e.nativeEvent.stopImmediatePropagation(), e.stopPropagation();
                  },
                  children: (0, s.jsx)(o.A, { className: 'h-4 w-4' }),
                }),
              }),
              (0, s.jsx)(r.SQ, {
                align: 'end',
                children: (0, s.jsx)(r._2, {
                  id: 'add-to-faq-button',
                  onClick: function (e) {
                    e.nativeEvent.stopImmediatePropagation(),
                      e.stopPropagation(),
                      window.open(
                        '/add-question?question='
                          .concat(encodeURIComponent(null != n ? n : ''), '&answer=')
                          .concat(
                            encodeURIComponent(null != l ? l : ''),
                            '&should_update_original_message=false&processed_msg_id='
                          )
                          .concat(d)
                      );
                  },
                  children: void 0 === u ? 'Add to FAQ' : u,
                }),
              }),
            ],
          });
        }
      },
    },
  ]);
