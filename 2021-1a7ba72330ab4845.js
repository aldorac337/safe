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
      (e._sentryDebugIds[t] = '87ce7d64-fa74-4c6f-9c75-7cd420cb3ec4'),
      (e._sentryDebugIdIdentifier = 'sentry-dbid-87ce7d64-fa74-4c6f-9c75-7cd420cb3ec4'));
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
        function c(e, t) {
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
              ? c(Object(n), !0).forEach(function (t) {
                  (0, a.A)(e, t, n[t]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                : c(Object(n)).forEach(function (t) {
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
          f = (0, i.A)(o.A)(l({}, p)),
          g = (0, i.A)(r.A)(l({ transform: 'scaleX(-1)' }, p));
      },
      39600: (e, t, n) => {
        n.d(t, { A: () => P });
        var r = n(42969),
          a = n(59983),
          o = n(43318),
          s = n(32868),
          i = n(70377),
          c = n(14232),
          l = n(99671),
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
        function A(e) {
          return /^([a-zA-Z0-9_\.\-\+\%])+\@(([a-zA-Z0-9.\-])+\.)+([a-zA-Z0-9]{2,})+$/.test(e);
        }
        function j(e) {
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
            s = c.useRef(null),
            i = c.useState(!1),
            l = (0, x.A)(i, 2),
            b = l[0],
            j = l[1],
            _ = c.useState(!1),
            N = (0, x.A)(_, 2),
            S = N[0],
            O = N[1],
            E = c.useState(!1),
            R = (0, x.A)(E, 2),
            k = R[0],
            T = R[1],
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
                          if (A((t = s.current.value))) {
                            e.next = 5;
                            break;
                          }
                          return O(!0), e.abrupt('return');
                        case 5:
                          return O(!1), j(!0), T(!0), (e.next = 10), r(t);
                        case 10:
                          T(!1);
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
            error: S,
            helperText: S ? 'Please enter a valid email address' : '',
            InputProps: {
              endAdornment: (0, y.jsx)(u.A, {
                position: 'end',
                children: k
                  ? (0, y.jsx)(m.A, { size: 20 })
                  : b || a
                    ? (0, y.jsx)(g.A, { color: 'success', sx: { marginRight: '0.75rem' } })
                    : (0, y.jsx)(p.A, {
                        onClick: M,
                        disabled: b || !!a || k,
                        size: 'large',
                        children: (0, y.jsx)(f.A, {}),
                      }),
              }),
              style: { minHeight: '40px', height: '40px', paddingRight: 12 * !!k },
            },
            className: o.textField,
            onChange: function (e) {
              O(e.target.value && !A(e.target.value));
            },
            onKeyDown: function (e) {
              13 !== e.keyCode || e.shiftKey || b || (e.preventDefault(), M());
            },
            placeholder: a || 'Your email',
            disabled: b || !!a || k,
            sx: {
              mt: 1,
              '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: 'primary.main' } },
            },
          });
        }
        var _ = n(84514),
          N = n(26778);
        let S = function (e) {
          var t = e.onRate,
            n = e.selectedRating,
            r = e.isActive,
            a = ['\uD83D\uDE20', '\uD83D\uDE15', '\uD83D\uDE10', '\uD83D\uDE00', '\uD83E\uDD29'];
          return (0, y.jsxs)(_.A, {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            sx: { opacity: r ? 1 : 0.5 },
            children: [
              (0, y.jsx)(N.A, {
                variant: 'body1',
                color: 'white',
                gutterBottom: !0,
                align: 'center',
                sx: { marginBottom: 1 },
                children: 'How do you rate your experience with our support team?',
              }),
              (0, y.jsx)(_.A, {
                display: 'flex',
                border: '1px solid white',
                borderRadius: '6px',
                overflow: 'hidden',
                width: '250px',
                children: a.map(function (e, o) {
                  return (0, y.jsx)(
                    _.A,
                    {
                      sx: {
                        flex: 1,
                        borderRight: o < a.length - 1 ? '1px solid white' : 'none',
                        '&:last-child': { borderRight: 'none' },
                      },
                      children: (0, y.jsx)(_.A, {
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
        var O = {
            support_rating: function (e) {
              var t = e.onRate,
                n = e.selectedRating,
                r = e.isActive;
              return (0, y.jsx)(S, { onRate: t, selectedRating: n, isActive: r });
            },
          },
          E = n(56962),
          R = n(98682),
          k = n(82459);
        function T(e, t) {
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
              c = e.selectedRating,
              l = e.isLastMessage,
              d = (e.onEnterEmail, e.emailSent, e.configData, e.onAttachmentLoad);
            e.debug;
            var u = n.component_type ? O[n.component_type] : null;
            if (u) {
              var p =
                {
                  support_rating: {
                    onRate: function (e) {
                      s && s(e);
                    },
                    selectedRating: c,
                    isActive: null === c && l,
                  },
                }[n.component_type] || {};
              return (0, y.jsx)(
                u,
                (function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2
                      ? T(Object(n), !0).forEach(function (t) {
                          (0, r.A)(e, t, n[t]);
                        })
                      : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                        : T(Object(n)).forEach(function (t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                          });
                  }
                  return e;
                })({}, p)
              );
            }
            switch (n.message_type) {
              case k.Jw.LAST_QUESTION_SUMMARY:
                return (0, y.jsxs)('p', {
                  className: 'text-sm italic text-muted-foreground',
                  children: ['Summary: ', n.content],
                });
              case k.Jw.STATUS_CHANGE:
                if ((0, i.W)(n.new_status))
                  return (0, y.jsx)('p', {
                    className: 'text-sm italic text-muted-foreground',
                    children: 'Ticket has been closed',
                  });
                return null;
              case k.Jw.AGENT_ASSIGNMENT:
                if (n.assigned_agent_id) {
                  var f = '';
                  return (
                    (f =
                      n.source === k.Wm.AGENT
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
              case k.Jw.NOTE:
                return (0, y.jsxs)('p', {
                  className: 'text-sm italic text-muted-foreground',
                  children: ['Note: ', n.content],
                });
              default:
                if (n.content || n.attachments)
                  return (0, y.jsx)(E.A, {
                    text:
                      n.message_type === k.Jw.TEAM
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
          D = function (e) {
            var t,
              n,
              r = e.message,
              a = e.children,
              o = e.className,
              s = e.onEnterEmail,
              i = e.emailSent,
              c = e.configData,
              l = e.debug,
              d =
                ((null == (t = r.attributes) ? void 0 : t.action_responded_to) ===
                  'contact-support' ||
                  (null == (n = r.attributes) ? void 0 : n.escalate_ticket) === !0) &&
                s &&
                (null == c ? void 0 : c['human-live-chat-support']);
            return (0, y.jsxs)('div', {
              className: o,
              children: [
                (0, y.jsx)('div', { className: 'webmarkdown break-words', children: a }),
                d && (0, y.jsx)(j, { onEnterEmail: s, emailSent: i }),
                l &&
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
              c = e.supportAgents;
            return a.message_type === k.Jw.ASSISTANT ||
              (a.message_type === k.Jw.QA_SUGGESTION && a.source !== k.Wm.END_USER)
              ? (0, y.jsx)(o.f, {
                  sx: { width: 32, height: 32 },
                  src: null != (t = null == s ? void 0 : s['assistant-icon-url']) ? t : '',
                  children: (0, y.jsx)(w.IG, { sx: { width: 16, height: 16 } }),
                })
              : a.message_type === k.Jw.TEAM
                ? (0, y.jsx)(o.f, {
                    sx: { width: 32, height: 32 },
                    src: i(a.source_id),
                    children:
                      null !=
                      (n =
                        null == c ||
                        null == (r = c.get(a.source_id)) ||
                        null == (r = r.name) ||
                        null == (r = r[0])
                          ? void 0
                          : r.toUpperCase())
                        ? n
                        : 'S',
                  })
                : null;
          },
          I = (0, c.forwardRef)(function (e, t) {
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
              A = e.supportAgents,
              j = e.showEditButtons,
              _ = void 0 !== j && j,
              N = e.onRate,
              S = e.selectedRating,
              O = e.disableAutoScroll,
              E = void 0 !== O && O,
              T = (0, c.useRef)(null),
              I = (null == u ? void 0 : u.theme) === 'dark' || (void 0 !== m && m),
              P = function (e) {
                var t, n;
                return null !=
                  (t = null == A || null == (n = A.get(null != e ? e : '')) ? void 0 : n.name)
                  ? t
                  : 'A Team Member';
              },
              G = function (e) {
                var t, n, r;
                return null !=
                  (t =
                    null !=
                    (n = null == A || null == (r = A.get(null != e ? e : '')) ? void 0 : r.image)
                      ? n
                      : null == u
                        ? void 0
                        : u['assistant-icon-url'])
                  ? t
                  : '';
              },
              J = function (e) {
                if (e.message_type === k.Jw.STATUS_CHANGE)
                  return 'w-full text-center bg-transparent shadow-none border-0 p-0 m-0';
                var t = 'px-4 py-2 rounded-2xl max-w-[85%] break-words';
                return e.message_type === k.Jw.ASSISTANT ||
                  e.message_type === k.Jw.TEAM ||
                  (e.message_type === k.Jw.QA_SUGGESTION && e.source !== k.Wm.END_USER)
                  ? (0, s.cn)(t, 'ml-3 bg-muted text-foreground rounded-tl-none')
                  : e.message_type === k.Jw.USER ||
                      (e.message_type === k.Jw.QA_SUGGESTION && e.source)
                    ? (0, s.cn)(t, 'bg-transparent text-white border border-white rounded-br-none')
                    : (0, s.cn)(t, 'bg-muted/50 text-foreground');
              },
              B = function () {
                if (!E) {
                  var e;
                  null == (e = T.current) || e.scrollIntoView({ behavior: 'smooth' });
                }
              };
            return (
              (0, c.useEffect)(
                function () {
                  B();
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
                          return e.message_type !== k.Jw.ASSISTANT;
                        }) &&
                        ((n = !0), (r = !0)),
                      (0, y.jsxs)(
                        'div',
                        {
                          children: [
                            n && !r && (0, y.jsx)(a.w, { className: 'my-4' }),
                            (0, y.jsxs)('div', {
                              className: 'flex w-full flex-row',
                              ref: i ? T : void 0,
                              children: [
                                (0, y.jsxs)('div', {
                                  className:
                                    e.message_type === k.Jw.STATUS_CHANGE
                                      ? 'flex items-center mb-4 w-full justify-center'
                                      : e.message_type === k.Jw.ASSISTANT ||
                                          e.message_type === k.Jw.TEAM ||
                                          (e.message_type === k.Jw.QA_SUGGESTION &&
                                            e.source !== k.Wm.END_USER)
                                        ? 'flex items-start mb-4'
                                        : e.message_type === k.Jw.USER ||
                                            (e.message_type === k.Jw.QA_SUGGESTION && e.source)
                                          ? 'flex items-start mb-4 w-full justify-end'
                                          : 'flex items-start mb-4 justify-center',
                                  children: [
                                    (0, y.jsx)(C, {
                                      message: e,
                                      configData: u,
                                      getSupportAgentImage: G,
                                      supportAgents: A,
                                    }),
                                    (0, y.jsx)(D, {
                                      message: e,
                                      className: J(e),
                                      onEnterEmail: b,
                                      emailSent: v,
                                      configData: u,
                                      debug: h,
                                      children: (0, y.jsx)(M, {
                                        message: e,
                                        darkMode: I,
                                        supportAgents: A,
                                        getSupportAgentName: P,
                                        onRate: N,
                                        selectedRating: S,
                                        isLastMessage: i,
                                        onEnterEmail: b,
                                        emailSent: v,
                                        configData: u,
                                        onAttachmentLoad: B,
                                        debug: h,
                                      }),
                                    }),
                                  ],
                                }),
                                _ &&
                                  e.message_type === k.Jw.USER &&
                                  (0, y.jsx)(l.A, { question: null != (s = e.content) ? s : '' }),
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
                      ref: T,
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
                          children: (0, y.jsx)(R.A, {}),
                        }),
                      ],
                    }),
                ],
              })
            );
          });
        I.displayName = 'ChatContent';
        let P = I;
      },
      42904: (e, t, n) => {
        n.d(t, { BT: () => v, Wu: () => w, ZB: () => b, Zp: () => x, aR: () => h, wL: () => y });
        var r = n(42969),
          a = n(59860),
          o = n(14232),
          s = n(32868),
          i = n(37876),
          c = ['className'],
          l = ['className'],
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
            r = (0, a.A)(e, c);
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
            r = (0, a.A)(e, l);
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
            c = s[1];
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
                    e > t.length && (e -= 3), c(t.substring(0, e)), e++;
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
            c = void 0 === i ? '' : i,
            l = e.processed_msg_id,
            d = void 0 === l ? '' : l,
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
                            encodeURIComponent(null != c ? c : ''),
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
