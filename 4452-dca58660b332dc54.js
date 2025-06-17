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
      (e._sentryDebugIds[t] = '7309643f-c83c-4a30-9fda-fde4d739efb5'),
      (e._sentryDebugIdIdentifier = 'sentry-dbid-7309643f-c83c-4a30-9fda-fde4d739efb5'));
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
    [4452],
    {
      18959: (e, t, n) => {
        n.d(t, { A: () => c });
        var r = n(70236),
          o = n(92002),
          a = n(79459),
          s = n(68670),
          i = n(37876);
        function c(e) {
          var t = e.files,
            n = e.setFiles;
          return 0 === t.length
            ? null
            : (0, i.jsx)('div', {
                className: 'mt-2',
                children: (0, i.jsx)('div', {
                  className: 'flex flex-wrap gap-2',
                  children: t.map(function (e, c) {
                    return (0, i.jsxs)(
                      a.E,
                      {
                        variant: 'outline',
                        className: 'flex items-center gap-1 pl-2 pr-1',
                        children: [
                          (0, i.jsx)('span', {
                            className: 'max-w-[150px] truncate text-xs',
                            children: e.name,
                          }),
                          (0, i.jsx)(s.$, {
                            variant: 'ghost',
                            size: 'sm',
                            className: 'h-4 w-4 p-0',
                            onClick: function () {
                              var e = (0, r.A)(t);
                              e.splice(c, 1), n(e);
                            },
                            children: (0, i.jsx)(o.US, { className: 'h-3 w-3' }),
                          }),
                        ],
                      },
                      ''.concat(e.name, '-').concat(c)
                    );
                  }),
                }),
              });
        }
      },
      44452: (e, t, n) => {
        n.r(t), n.d(t, { __N_SSP: () => ei, default: () => ep });
        var r = n(70236),
          o = n(42969),
          a = n(63857),
          s = n(45794),
          i = n(43081),
          c = n.n(i),
          u = n(18071),
          l = n(42904),
          d = n(39600),
          p = n(48141),
          f = n(7685),
          m = n(7895),
          g = n(82459),
          v = n(84514),
          h = n(26778),
          w = n(14232),
          y = n(42710),
          b = n(37876);
        let x = function (e) {
          var t = e.conversationMessages,
            n = e.configData,
            r = e.ticketCreated,
            o = t.some(function (e) {
              return e.message_type === g.Jw.USER;
            })
              ? n.disclaimer
              : 'By chatting, you accept our [Terms](https://pluno.ai/terms), [Privacy](https://pluno.ai/privacy-policy) and cookies.';
          return o && !r
            ? (0, b.jsx)(v.A, {
                style: { display: 'flex', flexDirection: 'column', marginTop: 8 },
                children: (0, b.jsx)(h.A, {
                  variant: 'body2',
                  style: { opacity: 0.5 },
                  align: 'center',
                  children: (0, b.jsx)(y.A, { text: o, overrideLinkColor: !1 }),
                }),
              })
            : null;
        };
        var S = n(32868),
          _ = function (e) {
            if (window.clipboardData && window.clipboardData.setData)
              return window.clipboardData.setData('Text', e);
            if (document.queryCommandSupported && document.queryCommandSupported('copy')) {
              var t = document.createElement('textarea');
              (t.textContent = e),
                (t.style.position = 'fixed'),
                document.body.appendChild(t),
                t.select();
              try {
                document.execCommand('copy');
              } catch (t) {
                console.warn('Copy to clipboard failed.', t),
                  prompt('Copy to clipboard: Ctrl+C, Enter', e);
              } finally {
                document.body.removeChild(t);
              }
            }
          },
          C = n(71023),
          E = n(43751),
          A = n(18007),
          k = n(7395),
          T = n(57186),
          j = n(68670),
          O = n(92002),
          N = n(59983);
        function M(e, t) {
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
        function P(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? M(Object(n), !0).forEach(function (t) {
                  (0, o.A)(e, t, n[t]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                : M(Object(n)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                  });
          }
          return e;
        }
        var I = function (e) {
          var t = e.disabled,
            n = e.className,
            r = e.onClick,
            o = e.children;
          return (0, b.jsx)(j.$, {
            variant: 'outline',
            onClick: r,
            className: n,
            disabled: t,
            children: o,
          });
        };
        let D = function (e) {
          var t,
            n,
            r,
            o,
            a = e.showThatsHelpful,
            s = e.showContactSupport,
            i = e.showCopyChat,
            c = e.chatJustCopied,
            u = e.isResponding,
            l = e.isUploadingFiles,
            d = e.onThanksTap,
            p = e.onContactSupportTap,
            f = e.onCopyChatTap,
            m = e.configData,
            g = e.customClasses,
            v = e.showQuestionSuggestions;
          if (!a && !s && !i) return null;
          var h = (0, S.cn)(
              null == g ? void 0 : g.chatResolveButton,
              null == g ? void 0 : g.chatActionButton
            ),
            w = { disabled: u || l };
          return (0, b.jsxs)(b.Fragment, {
            children: [
              v ? (0, b.jsx)(N.w, { className: 'my-3' }) : (0, b.jsx)('div', { className: 'mt-3' }),
              (0, b.jsxs)('div', {
                className: 'flex items-center gap-1 pb-1',
                children: [
                  a &&
                    (0, b.jsx)(
                      I,
                      P(
                        P({}, w),
                        {},
                        {
                          onClick: d,
                          className: h,
                          children:
                            null !=
                            (t =
                              null == m || null == (n = m.actions) || null == (n = n.thanks)
                                ? void 0
                                : n.title)
                              ? t
                              : "Thanks, that's helpful! \uD83D\uDC4D",
                        }
                      )
                    ),
                  s &&
                    (0, b.jsx)(
                      I,
                      P(
                        P({}, w),
                        {},
                        {
                          onClick: p,
                          className: h,
                          children:
                            null !=
                            (r =
                              null == m ||
                              null == (o = m.actions) ||
                              null == (o = o['contact-support'])
                                ? void 0
                                : o.title)
                              ? r
                              : 'Contact Team',
                        }
                      )
                    ),
                  (0, b.jsx)('div', { className: 'flex-grow' }),
                  i &&
                    (0, b.jsxs)(I, {
                      disabled: !1,
                      onClick: f,
                      className: null == g ? void 0 : g.chatResolveButton,
                      children: [
                        (0, b.jsx)(O.Td, {}),
                        a && s
                          ? ''
                          : (0, b.jsxs)(b.Fragment, {
                              children: ['\xa0', c ? 'Copied!' : 'Copy chat'],
                            }),
                      ],
                    }),
                ],
              }),
            ],
          });
        };
        var R = n(79459),
          U = n(43318);
        let L = function (e) {
          var t = e.onClick,
            n = e.showNotificationBadge,
            r = e.isChatOpen,
            o = e.iconUrl,
            a = e.customClasses;
          return (0, b.jsx)(j.$, {
            variant: 'ghost',
            className: (0, S.cn)(
              null == a ? void 0 : a.chatButton,
              '!shadow-none hover:bg-inherit',
              r ? (null == a ? void 0 : a.chatOpen) : ''
            ),
            onClick: t,
            children: (0, b.jsxs)('div', {
              className: 'relative',
              children: [
                (0, b.jsx)(U.f, {
                  sx: { height: 50, width: 50 },
                  src: null != o ? o : '',
                  children: (0, b.jsx)(m.yw, { className: 'h-5 w-5' }),
                }),
                (0, b.jsx)(R.E, {
                  variant: 'destructive',
                  className: (0, S.cn)(
                    'absolute -right-0 -top-0 h-3 w-3 rounded-full bg-red-500 p-0',
                    n ? '' : 'hidden'
                  ),
                }),
              ],
            }),
          });
        };
        var J = n(20522);
        let F = function (e) {
            var t = e.themeMode,
              n = e.customClassName;
            return (0, b.jsx)('div', {
              className: 'mt-3',
              children: (0, b.jsxs)('a', {
                href: 'https://pluno.ai/',
                target: '_blank',
                rel: 'noreferrer',
                className: n,
                children: [
                  (0, b.jsx)('p', {
                    className: 'text-sm text-muted-foreground',
                    children: 'Powered by',
                  }),
                  (0, b.jsx)(J.g, { small: !0, white: 'dark' === t, forceIncludeText: !0 }),
                ],
              }),
            });
          },
          q = function (e) {
            var t = e.title,
              n = e.iconUrl,
              r = e.onClose,
              o = e.isMobile,
              a = e.customClasses;
            return (0, b.jsxs)(b.Fragment, {
              children: [
                (0, b.jsxs)(l.aR, {
                  className: (0, S.cn)('flex flex-row items-center justify-between p-0', {
                    'whitespace-nowrap': o,
                    'whitespace-normal': !o,
                  }),
                  children: [
                    (0, b.jsxs)('div', {
                      className: 'flex items-center gap-4',
                      children: [
                        (0, b.jsx)(U.f, {
                          src: null != n ? n : '',
                          children: (0, b.jsx)(m.IG, { className: 'h-6 w-6' }),
                        }),
                        (0, b.jsx)('h2', {
                          className: (0, S.cn)(
                            'text-lg font-semibold leading-none tracking-tight',
                            null == a ? void 0 : a.chatCardTitle
                          ),
                          children: null != t ? t : 'Support Chat',
                        }),
                      ],
                    }),
                    (0, b.jsx)('button', {
                      onClick: r,
                      className: 'rounded-full p-1 hover:bg-accent hover:text-accent-foreground',
                      'aria-label': 'close',
                      children: (0, b.jsx)(O.US, { className: 'h-6 w-6' }),
                    }),
                  ],
                }),
                (0, b.jsx)('hr', { className: 'my-3 border-t border-border px-2' }),
              ],
            });
          };
        var G = n(52108),
          B = n(50066),
          H = n(18959);
        let W = function (e) {
            var t = e.text,
              n = e.setText,
              r = e.files,
              o = e.setFiles,
              a = e.setFilesAfterValidation,
              s = e.handleMessage,
              i = e.ticketCreated,
              c = e.isResponding,
              u = e.isUploadingFiles,
              l = e.customClasses,
              d = e.textareaRef,
              p = (0, w.useRef)(null),
              f = d || p,
              m = (0, w.useState)(0),
              g = m[0],
              v = m[1],
              h = (0, w.useState)(!1),
              y = h[0];
            h[1];
            var x = (0, w.useCallback)(
              function () {
                var e = f.current;
                e &&
                  ((e.style.height = '40px'),
                  '' !== e.value.trim() &&
                    (e.style.height = ''.concat(Math.min(e.scrollHeight, 150), 'px')));
              },
              [f]
            );
            (0, w.useEffect)(
              function () {
                x();
              },
              [t, x]
            );
            var _ = (0, w.useCallback)(
                function (e) {
                  e.target.files && a(Array.from(e.target.files));
                },
                [a]
              ),
              C = (0, w.useCallback)(
                function (e) {
                  n(e.target.value), v(e.target.value.length);
                },
                [n]
              ),
              E = (0, w.useCallback)(
                function (e) {
                  'Enter' === e.key && !e.shiftKey && (e.preventDefault(), c || u || s(t, r));
                },
                [t, r, s, c, u]
              );
            return (0, b.jsxs)('div', {
              className: 'mt-3',
              children: [
                (0, b.jsx)('div', {
                  className: 'relative w-full',
                  children: (0, b.jsxs)('div', {
                    className: 'flex flex-row items-center gap-2',
                    children: [
                      (0, b.jsxs)('div', {
                        className: 'relative w-full',
                        children: [
                          (0, b.jsx)(G.T, {
                            ref: f,
                            placeholder: 'Message...',
                            autoComplete: 'off',
                            className: (0, S.cn)(
                              l,
                              'resize-none',
                              i ? 'pr-12' : '',
                              'max-h-[150px] min-h-[40px] text-base',
                              'placeholder:text-sm placeholder:text-muted-foreground',
                              'focus:border-input focus:outline-none focus:ring-0',
                              'rounded-lg',
                              y ? 'border-amber-500' : '',
                              g >= 2e3 ? 'border-red-500' : ''
                            ),
                            onChange: C,
                            onKeyDown: E,
                            maxLength: 2e3,
                            value: t,
                          }),
                          y &&
                            (0, b.jsxs)('div', {
                              className: (0, S.cn)(
                                'absolute bottom-0 right-0 mb-0 mr-2 text-xs',
                                g >= 2e3 ? 'text-red-500' : 'text-muted-foreground'
                              ),
                              children: [g, '/', 2e3],
                            }),
                          i &&
                            (0, b.jsx)(B.A, {
                              files: r,
                              inputDisabled: u,
                              handleFilesChange: _,
                              className:
                                'absolute right-3 top-1/2 flex -translate-y-1/2 items-center',
                              labelClassName: 'text-muted-foreground',
                              tooltipContentAlign: 'end',
                            }),
                        ],
                      }),
                      (0, b.jsx)(j.$, {
                        variant: 'ghost',
                        className: 'flex h-10 w-10 items-center justify-center rounded-full p-0',
                        onClick: function () {
                          var e, n;
                          return s(
                            null != (e = null == f || null == (n = f.current) ? void 0 : n.value)
                              ? e
                              : t,
                            r
                          );
                        },
                        disabled: c || u || !t.trim(),
                        children: (0, b.jsx)(O.qx, { className: 'h-5 w-5' }),
                      }),
                    ],
                  }),
                }),
                (0, b.jsx)(H.A, { files: r, setFiles: o }),
              ],
            });
          },
          K = function (e) {
            var t = e.suggestions,
              n = e.onSuggestionClick,
              r = e.isResponding,
              o = e.isUploadingFiles,
              s = e.showQuestionSuggestions,
              i = e.customClasses;
            return t && 0 !== t.length && s
              ? (0, b.jsx)('div', {
                  className: 'mt-3 flex flex-row flex-wrap items-end gap-2',
                  children: t.map(function (e, t) {
                    return (0, b.jsx)(
                      j.$,
                      {
                        variant: 'outline',
                        onClick: (0, a.A)(
                          c().mark(function t() {
                            return c().wrap(function (t) {
                              for (;;)
                                switch ((t.prev = t.next)) {
                                  case 0:
                                    return (t.next = 2), n(e.question);
                                  case 2:
                                  case 'end':
                                    return t.stop();
                                }
                            }, t);
                          })
                        ),
                        className: null == i ? void 0 : i.chatQASuggestionButton,
                        disabled: r || o,
                        children: e.question,
                      },
                      'qa_suggestions_'.concat(t)
                    );
                  }),
                })
              : null;
          };
        function Q(e, t) {
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
        var V = function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '',
              t = (0, w.useState)(e || (0, T.A)()),
              n = t[0],
              a = t[1],
              s = (0, w.useState)([]),
              i = s[0],
              c = s[1],
              u = (0, w.useState)('' === e),
              l = u[0],
              d = u[1],
              f = (0, w.useCallback)(
                function (e) {
                  var t = e.messageType,
                    r = e.componentType,
                    o = e.source,
                    a = e.sourceId,
                    s = e.content,
                    i = e.newStatus,
                    c = e.assignedAgentId,
                    u = e.translation,
                    l = e.isVisibleToAgent,
                    d = e.messageConversationId,
                    p = void 0 === d ? void 0 : d,
                    f = e.attachments,
                    m = void 0 === f ? [] : f;
                  if (
                    t !== g.Jw.ASSISTANT &&
                    t !== g.Jw.TEAM &&
                    t !== g.Jw.USER &&
                    t !== g.Jw.STATUS_CHANGE
                  )
                    throw Error('Message type '.concat(t, ' is not allowed'));
                  return t !== g.Jw.ASSISTANT || s || r || m.length
                    ? (t !== g.Jw.TEAM && t !== g.Jw.USER) || (o && (s || m.length))
                      ? {
                          id: (0, T.A)(),
                          message_type: t,
                          content: s,
                          component_type: r,
                          conversation_id: null != p ? p : n,
                          timestamp: new Date().toISOString(),
                          new_status: i,
                          assigned_agent_id: c,
                          source: o,
                          source_id: a || (g.Jw.USER, null),
                          translation: u,
                          is_visible_to_agent: void 0 === l || l,
                          attachments: m.length > 0 ? [] : null,
                        }
                      : void console.log(
                          'Message type team or user requires source and (content or attachments)'
                        )
                    : void console.log(
                        'Message type assistant requires content, componentType or attachments'
                      );
                },
                [n]
              ),
              m = (0, w.useCallback)(function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                t
                  ? c(function (t) {
                      return [].concat((0, r.A)(t.slice(0, -1)), [
                        (function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2
                              ? Q(Object(n), !0).forEach(function (t) {
                                  (0, o.A)(e, t, n[t]);
                                })
                              : Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                                : Q(Object(n)).forEach(function (t) {
                                    Object.defineProperty(
                                      e,
                                      t,
                                      Object.getOwnPropertyDescriptor(n, t)
                                    );
                                  });
                          }
                          return e;
                        })({}, e),
                      ]);
                    })
                  : c(function (t) {
                      return (0, p._A)(t, e);
                    });
              }, []),
              v = (0, w.useCallback)(function (e, t) {
                c(function (n) {
                  return (0, p.jU)(n, e, t);
                });
              }, []),
              h = (0, w.useCallback)(function (e, t) {
                c(function (n) {
                  return (0, p.md)(n, e, t);
                });
              }, []);
            return {
              conversationId: n,
              setConversationId: a,
              conversationMessages: i,
              setConversationMessages: c,
              isLocalConversation: l,
              setIsLocalConversation: d,
              createMessage: f,
              addMessageToCurrentChat: m,
              updateMessageId: v,
              updateMessageAttachments: h,
            };
          },
          Y = n(12692),
          $ = function (e) {
            var t = (0, w.useState)(null),
              n = t[0],
              r = t[1],
              o = (0, w.useState)(!1),
              a = o[0],
              s = o[1],
              i = function () {
                console.log('Creating new socket connection');
                var t = ''.concat(window.location.origin, '/enduser'),
                  n = (0, Y.io)(t, {
                    path: '/api/socket.io',
                    query: { conversation_id: encodeURIComponent(e) },
                    autoConnect: !0,
                    reconnectionDelay: 200,
                    secure: !0,
                    transports: ['websocket', 'polling'],
                  });
                return (
                  n.on('connect', function () {
                    console.log('Socket connected'), s(!0);
                  }),
                  n.on('disconnect', function () {
                    console.log('Socket disconnected'), s(!1);
                  }),
                  r(n),
                  n
                );
              };
            return (
              (0, w.useEffect)(
                function () {
                  e && (n && n.disconnect(), i());
                },
                [e]
              ),
              (0, w.useEffect)(
                function () {
                  return function () {
                    n && n.disconnect();
                  };
                },
                [n]
              ),
              {
                socket: n,
                isConnected: a,
                sendTransaction: function (e) {
                  console.log('sendTransaction', e);
                  var t,
                    r = n;
                  (null != (t = r) && t.connected) ||
                    (console.log('No active socket connection, creating new one'), (r = i())),
                    console.log('Sending transaction'),
                    r.emit('message', e);
                },
                setupMessageListener: function (e) {
                  if (!n) return function () {};
                  var t = function (t, r) {
                    if ((e(t, r), r)) {
                      var o,
                        a = {
                          type: g.D_.ACKNOWLEDGMENT,
                          community_id: t.community_id,
                          conversation_id: t.conversation_id,
                          data: { message_id: null == (o = t.data.message) ? void 0 : o.id },
                        };
                      n.emit('message', a);
                    }
                  };
                  return (
                    n.on('message', t),
                    function () {
                      n.off('message', t);
                    }
                  );
                },
              }
            );
          },
          z = n(54772),
          Z = n(99921),
          X = n(82851),
          ee = n(11415),
          et = function (e) {
            var t = e.children,
              n = e.themeMode,
              r = e.primaryColor,
              o = (0, z.A)(
                (0, X.merge)({}, 'dark' === n ? ee.uI : ee.Yy, {
                  palette: {
                    primary: {
                      main:
                        null != r
                          ? r
                          : 'dark' === n
                            ? 'rgba(255, 255, 255, 0.6)'
                            : 'rgba(0, 0, 0, 0.3)',
                    },
                  },
                })
              );
            return (0, b.jsx)(Z.A, { theme: o, children: t });
          },
          en = function (e) {
            var t = e.children,
              n = e.themeMode,
              r = e.primaryColor;
            return (
              (0, w.useEffect)(
                function () {
                  return (
                    document.documentElement.style.setProperty('color-scheme', 'normal'),
                    document.documentElement.style.setProperty('overflow', 'hidden'),
                    'dark' !== n
                      ? document.documentElement.classList.remove('dark')
                      : document.documentElement.classList.add('dark'),
                    document.body.style.setProperty('background-color', 'transparent'),
                    r && document.documentElement.style.setProperty('--primary', r),
                    function () {
                      document.documentElement.style.removeProperty('--primary');
                    }
                  );
                },
                [n, r]
              ),
              (0, b.jsx)(et, { themeMode: n, primaryColor: r, children: t })
            );
          },
          er = n(70377);
        function eo(e, t) {
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
        function ea(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? eo(Object(n), !0).forEach(function (t) {
                  (0, o.A)(e, t, n[t]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                : eo(Object(n)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                  });
          }
          return e;
        }
        var es = (function (e) {
            return (e.THANKS = 'thanks'), (e.CONTACT_SUPPORT = 'contact-support'), e;
          })(es || {}),
          ei = !0,
          ec = 'conversationId',
          eu = 'aqaWidgetOpenStatus',
          el = function (e) {
            sessionStorage.setItem(ec, e);
          },
          ed = function (e) {
            sessionStorage.setItem(eu, e);
          };
        function ep(e) {
          var t,
            n,
            o,
            i,
            v,
            h,
            y,
            j,
            O,
            N,
            M,
            P,
            I,
            R,
            U,
            J,
            G,
            B,
            H = e.pageProps,
            Q = e.autostart,
            Y = void 0 !== Q && Q,
            z = 'error' in H,
            Z = null != (j = H.communityId) ? j : '',
            X = H.configData,
            ee = H.encodedConversationTicketSourceUrl,
            et = null != (O = H.ticketConversationId) ? O : '',
            eo = Y ? '' : null != (N = sessionStorage.getItem(ec)) ? N : '',
            ei = null != (M = sessionStorage.getItem(eu)) ? M : '',
            ep = null == (P = null == X ? void 0 : X['allow-new-message-notification-badge']) || P,
            ef = (0, A.j)(),
            em = null != (I = null == X ? void 0 : X.theme) ? I : 'light';
          (0, w.useEffect)(
            function () {
              ef((0, k.Yl)({ theme: em }));
            },
            [em, ef]
          );
          var eg = (0, E.Yp0)(),
            ev = (0, s.A)(eg, 1)[0],
            eh = (0, E.F6$)(),
            ew = (0, s.A)(eh, 1)[0],
            ey = (0, E.apd)(),
            eb = (0, s.A)(ey, 1)[0],
            ex = (0, E.Cvu)(),
            eS = (0, s.A)(ex, 1)[0],
            e_ = (0, E.Crv)(),
            eC = (0, s.A)(e_, 2),
            eE = eC[0],
            eA = eC[1].isLoading,
            ek = (0, E.Y2S)(),
            eT = (0, s.A)(ek, 1)[0],
            ej = et || eo,
            eO = V(ej || ''),
            eN = eO.conversationId,
            eM = eO.conversationMessages,
            eP = eO.setConversationMessages,
            eI = eO.isLocalConversation,
            eD = eO.setIsLocalConversation,
            eR = $(eN),
            eU = eR.sendTransaction,
            eL = eR.setupMessageListener,
            eJ = eR.isConnected,
            eF = (0, w.useState)(!1),
            eq = eF[0],
            eG = eF[1],
            eB = (0, w.useState)(!1),
            eH = eB[0],
            eW = eB[1],
            eK = (0, w.useState)(!1),
            eQ = eK[0],
            eV = eK[1],
            eY = (0, w.useState)(!1),
            e$ = eY[0],
            ez = eY[1],
            eZ = (0, w.useState)(!1),
            eX = eZ[0],
            e0 = eZ[1],
            e1 = (0, w.useState)(!1),
            e2 = e1[0],
            e3 = e1[1],
            e5 = (0, w.useState)(!1),
            e4 = e5[0],
            e9 = e5[1],
            e8 = (0, w.useState)(Y),
            e6 = e8[0],
            e7 = e8[1],
            te = (0, w.useState)(!1),
            tt = te[0],
            tn = te[1],
            tr = (0, w.useState)(),
            to = tr[0],
            ta = tr[1],
            ts = (0, w.useState)(null),
            ti = ts[0],
            tc = ts[1],
            tu = (0, w.useState)(!1),
            tl = tu[0],
            td = tu[1],
            tp = !!to,
            tf = (0, E.ZeS)(
              { conversationId: eN },
              { skip: !eN || eI, refetchOnMountOrArgChange: !0 }
            ).data,
            tm = (0, E.twr)(
              { conversationId: ej },
              { refetchOnMountOrArgChange: !0, skip: tl || !ej }
            ).data,
            tg = (0, E.WHi)(
              { conversationId: eN },
              { refetchOnMountOrArgChange: !0, skip: !tp || !eN, pollingInterval: 354e4 }
            ).data;
          (0, w.useEffect)(
            function () {
              tg &&
                tg.forEach(function (e) {
                  return t$(e.conversation_message_id, e.attachments);
                });
            },
            [tg]
          );
          var tv = (0, w.useState)([]),
            th = tv[0],
            tw = tv[1];
          (0, w.useEffect)(
            function () {
              var e, t;
              tw(
                null !=
                  (e = null == X || null == (t = X['qa-suggestions']) ? void 0 : t.suggestions)
                  ? e
                  : []
              );
            },
            [X]
          );
          var ty = (0, w.useState)(!1),
            tb = ty[0],
            tx = ty[1];
          (0, w.useEffect)(
            function () {
              tx(!to && th.length > 0);
            },
            [th, to]
          );
          var tS = (0, w.useState)(new Map()),
            t_ = tS[0],
            tC = tS[1],
            tE = (0, E.mc$)(
              { communityId: Z },
              {
                refetchOnMountOrArgChange: !0,
                skip: !(null != X && X['human-live-chat-support']) || !Z || !to,
                pollingInterval: 1e4,
              }
            ).data;
          (0, w.useEffect)(
            function () {
              tE &&
                tC(
                  new Map(
                    tE
                      .slice()
                      .sort(function (e, t) {
                        return e.name.localeCompare(t.name);
                      })
                      .map(function (e) {
                        return [String(e.external_platform_account_id), e];
                      })
                  )
                );
            },
            [tE]
          );
          var tA = (0, w.useState)(!1),
            tk = tA[0],
            tT = tA[1],
            tj = (0, w.useRef)(null),
            tO = (0, w.useState)(''),
            tN = tO[0],
            tM = tO[1],
            tP = (0, w.useState)([]),
            tI = tP[0],
            tD = tP[1],
            tR = null != (R = null == X ? void 0 : X['is-mobile']) && R,
            tU = parseInt(
              (null != (U = null == X ? void 0 : X['widget-button-px-size']) ? U : '64').toString()
            ),
            tL = (0, m.tX)({ themeMode: em }),
            tJ = (0, m.xb)({}),
            tF = Y ? tJ : tL,
            tq =
              null != (J = null == X ? void 0 : X['primary-color'])
                ? J
                : 'dark' == em
                  ? 'rgba(255, 255, 255, 0.6)'
                  : 'rgba(0, 0, 0, 0.3)',
            tG = (0, w.useRef)(null);
          (0, w.useEffect)(function () {
            !z &&
              (ej ||
                (function () {
                  e.apply(this, arguments);
                })());
            function e() {
              return (e = (0, a.A)(
                c().mark(function e() {
                  var t;
                  return c().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          X &&
                            ((t = tK({
                              messageType: g.Jw.ASSISTANT,
                              content: X['first-message'],
                              messageConversationId: eN,
                            }))
                              ? tV(t)
                              : console.error('Failed to create first message')),
                            eD(!0),
                            eb({
                              conversationId: eN,
                              appPresentationRoutersConversationsRouterPostActivityRequest: {
                                activity: 'visit_page',
                                community_id: Z,
                              },
                            });
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                })
              )).apply(this, arguments);
            }
          }, []),
            (0, w.useEffect)(
              function () {
                e6 && tn(!1);
              },
              [e6]
            );
          var tB = function (e) {
              window.parent.postMessage(e ? 'pluno-widget-opened' : 'pluno-widget-closed', '*'),
                e7(e),
                eb({
                  conversationId: eN,
                  appPresentationRoutersConversationsRouterPostActivityRequest: {
                    activity: e ? 'open_widget' : 'close_widget',
                    community_id: Z,
                  },
                }),
                tk && !e && nn(),
                e &&
                  setTimeout(function () {
                    var e;
                    null == (e = tj.current) || e.focus();
                  }, 100);
            },
            tH = function () {
              var e = !e6;
              tB(e), null != to && to.is_escalated && ed(e ? 'open' : 'closed');
            };
          (0, w.useEffect)(
            function () {
              e6 || tn(!0);
            },
            [eq, eA, eM]
          );
          var tW = function (e) {
              tj.current && (tj.current.value = e), tM(e);
            },
            tK = function (e) {
              var t,
                n = e.messageType,
                r = e.componentType,
                o = e.source,
                a = e.sourceId,
                s = e.sourceName,
                i = e.content,
                c = e.newStatus,
                u = e.assignedAgentId,
                l = e.translation,
                d = e.isVisibleToAgent,
                p = e.messageConversationId,
                f = void 0 === p ? void 0 : p,
                m = e.attachments,
                v = void 0 === m ? [] : m;
              if (
                n !== g.Jw.ASSISTANT &&
                n !== g.Jw.TEAM &&
                n !== g.Jw.USER &&
                n !== g.Jw.STATUS_CHANGE
              )
                throw Error('Message type '.concat(n, ' is not allowed'));
              if (n === g.Jw.ASSISTANT && !i && !r && !v)
                return void console.log(
                  'Message type assisstant requires content, componentType or attachments'
                );
              if ((n === g.Jw.TEAM || n === g.Jw.USER) && !(o && (i || v)))
                return void console.log(
                  'Message type team or user requires source and (content or attachments)'
                );
              var h =
                s ||
                (n === g.Jw.USER || o === g.Wm.END_USER
                  ? null != (t = null == to ? void 0 : to.enduser_id)
                    ? t
                    : 'User'
                  : o
                    ? (null == o ? void 0 : o.charAt(0).toUpperCase()) +
                      (null == o ? void 0 : o.slice(1).toLowerCase())
                    : n
                      ? (null == n ? void 0 : n.charAt(0).toUpperCase()) +
                        (null == n ? void 0 : n.slice(1).toLowerCase())
                      : void 0);
              return {
                id: (0, T.A)(),
                message_type: n,
                content: i,
                component_type: r,
                conversation_id: null != f ? f : eN,
                timestamp: new Date().toISOString(),
                new_status: c,
                assigned_agent_id: u,
                source: o,
                source_id: a || (n === g.Jw.USER ? (null == to ? void 0 : to.enduser_id) : null),
                source_name: h,
                translation: l,
                is_visible_to_agent: void 0 === d || d,
                attachments: v.length > 0 ? [] : null,
              };
            },
            tQ = function (e) {
              if (e)
                if (e.type === g.D_.MESSAGE_BEFORE_ESCALATION) {
                  var t = e.data,
                    n = t.result;
                  t.event === g.lm.STREAM_STARTED
                    ? (eW(!1), t8({ data: n }, !1))
                    : t.event === g.lm.MESSAGE
                      ? t8({ data: n }, !0)
                      : t.event === g.lm.STREAM_ENDED && eG(!1);
                } else
                  e.type === g.D_.ESCALATE_TICKET
                    ? (td(!0), el(e.data.ticket.id), ed('open'), ta(ea({}, e.data.ticket)))
                    : e.type === g.D_.MESSAGE_AFTER_ESCALATION
                      ? e.data.message &&
                        (tV(e.data.message),
                        e.data.message.message_type === g.Jw.TEAM && t9([es.THANKS]))
                      : e.type === g.D_.STATUS_CHANGE
                        ? (ta(function (t) {
                            return ea(
                              ea({}, t),
                              {},
                              {
                                current_status: e.data.message.new_status,
                                updated_at: new Date().toISOString(),
                              }
                            );
                          }),
                          (0, er.W)(e.data.message.new_status) && tV(e.data.message))
                        : e.type === g.D_.AGENT_ASSIGNMENT
                          ? ta(function (t) {
                              return ea(
                                ea({}, t),
                                {},
                                {
                                  assigned_agent_id: e.data.message.assigned_agent_id,
                                  updated_at: new Date().toISOString(),
                                }
                              );
                            })
                          : console.error('Transaction type '.concat(e.type, ' is not supported.'));
            };
          (0, w.useEffect)(
            function () {
              return eL(tQ);
            },
            [eL]
          );
          var tV = function (e) {
              var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
              t
                ? eP(function (t) {
                    return [].concat((0, r.A)(t.slice(0, -1)), [ea({}, e)]);
                  })
                : eP(function (t) {
                    return (0, p._A)(t, e);
                  });
            },
            tY = function (e, t) {
              eP(function (n) {
                return (0, p.jU)(n, e, t);
              });
            },
            t$ = function (e, t) {
              eP(function (n) {
                return (0, p.md)(n, e, t);
              });
            },
            tz = function (e) {
              var t = (0, r.A)(th);
              if (0 !== t.length) {
                for (
                  var n,
                    o = function (n) {
                      var r = t[n];
                      if (r.question.toLowerCase() === e.trim().toLowerCase())
                        return (
                          tw(function (e) {
                            return e.filter(function (e, t) {
                              return t !== n;
                            });
                          }),
                          { v: r.answer }
                        );
                    },
                    a = 0;
                  a < t.length;
                  a++
                )
                  if ((n = o(a))) return n.v;
              }
            },
            tZ =
              ((t = (0, a.A)(
                c().mark(function e(t) {
                  return c().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if ((tx(!1), !to)) {
                            e.next = 5;
                            break;
                          }
                          eU({
                            type: g.D_.MESSAGE_AFTER_ESCALATION,
                            community_id: Z,
                            conversation_id: to.id || t.conversation_id,
                            destination_id: to.assigned_agent_id,
                            data: { message: t },
                          }),
                            (e.next = 13);
                          break;
                        case 5:
                          return eG(!0), eW(!0), (e.next = 9), t2(t.id);
                        case 9:
                          if (e.sent) {
                            e.next = 12;
                            break;
                          }
                          return e.abrupt('return');
                        case 12:
                          eU({
                            type: g.D_.MESSAGE_BEFORE_ESCALATION,
                            community_id: Z,
                            conversation_id: eN,
                            data: { content: t.content },
                          });
                        case 13:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                })
              )),
              function (e) {
                return t.apply(this, arguments);
              }),
            tX =
              ((n = (0, a.A)(
                c().mark(function e(t) {
                  var n,
                    r,
                    o,
                    s,
                    i,
                    u,
                    l,
                    d = arguments;
                  return c().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (
                            ((n = d.length > 1 && void 0 !== d[1] ? d[1] : []),
                            !((!t || '' === t.trim()) && 0 === n.length))
                          ) {
                            e.next = 3;
                            break;
                          }
                          return e.abrupt('return');
                        case 3:
                          if (
                            (tW(''),
                            tj.current && (tj.current.style.height = 'auto'),
                            (r = t.trim()),
                            (o = (0, f.Bn)(n)),
                            !(!eN || (!r && o.length <= 0)))
                          ) {
                            e.next = 9;
                            break;
                          }
                          return e.abrupt('return');
                        case 9:
                          if (
                            (tD([]),
                            tx(!1),
                            (s = tK({
                              messageType: g.Jw.USER,
                              source: g.Wm.END_USER,
                              content: r,
                              attachments: o,
                            })))
                          ) {
                            e.next = 15;
                            break;
                          }
                          return console.error('Failed to create new message'), e.abrupt('return');
                        case 15:
                          if ((tV(s), '!support' !== r)) {
                            e.next = 20;
                            break;
                          }
                          return (e.next = 19), t5('contact-support');
                        case 19:
                          return e.abrupt('return');
                        case 20:
                          if (!o) {
                            e.next = 25;
                            break;
                          }
                          return (e.next = 23), t0(o);
                        case 23:
                          (i = e.sent) &&
                            ((u = s.id),
                            (s.id = i.conversation_message_id),
                            (s.attachments = i.successful_files),
                            tY(u, i.conversation_message_id));
                        case 25:
                          if (to || !(l = tz(r))) {
                            e.next = 38;
                            break;
                          }
                          return eG(!0), eW(!0), (e.next = 32), t2(s.id);
                        case 32:
                          if (e.sent) {
                            e.next = 35;
                            break;
                          }
                          return e.abrupt('return');
                        case 35:
                          return (
                            eS({
                              conversationMessage: {
                                conversation_id: eN,
                                content: r,
                                message_type: g.Jw.QA_SUGGESTION,
                                source: g.Wm.END_USER,
                              },
                            }),
                            setTimeout(
                              (0, a.A)(
                                c().mark(function e() {
                                  var t, n, r;
                                  return c().wrap(function (e) {
                                    for (;;)
                                      switch ((e.prev = e.next)) {
                                        case 0:
                                          if (
                                            (t = tK({
                                              messageType: g.Jw.ASSISTANT,
                                              content: '',
                                              sourceName: 'Pluno',
                                            }))
                                          ) {
                                            e.next = 3;
                                            break;
                                          }
                                          return e.abrupt('return');
                                        case 3:
                                          eW(!1), (n = l.split(' ')), (r = 0);
                                        case 6:
                                          if (!(r < n.length)) {
                                            e.next = 14;
                                            break;
                                          }
                                          return (
                                            (t.content = t.content + ' ' + n[r]),
                                            tV(t, 0 !== r),
                                            (e.next = 11),
                                            new Promise(function (e) {
                                              return setTimeout(e, 50);
                                            })
                                          );
                                        case 11:
                                          r++, (e.next = 6);
                                          break;
                                        case 14:
                                          eS({
                                            conversationMessage: {
                                              conversation_id: eN,
                                              content: l,
                                              message_type: g.Jw.QA_SUGGESTION,
                                            },
                                          }),
                                            eG(!1);
                                        case 16:
                                        case 'end':
                                          return e.stop();
                                      }
                                  }, e);
                                })
                              ),
                              1e3
                            ),
                            e.abrupt('return')
                          );
                        case 38:
                          return (e.next = 40), tZ(s);
                        case 40:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                })
              )),
              function (e) {
                return n.apply(this, arguments);
              }),
            t0 =
              ((o = (0, a.A)(
                c().mark(function e(t) {
                  var n, r;
                  return c().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (0 != t.length) {
                            e.next = 2;
                            break;
                          }
                          return e.abrupt('return');
                        case 2:
                          return (
                            (n = (0, f.wl)(Z, eN, t)),
                            (e.next = 5),
                            eE({ bodyUploadConversationFilesApiConversationsFilesPost: n })
                          );
                        case 5:
                          if (!('error' in (r = e.sent))) {
                            e.next = 8;
                            break;
                          }
                          return e.abrupt('return', null);
                        case 8:
                          return e.abrupt('return', r.data);
                        case 9:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                })
              )),
              function (e) {
                return o.apply(this, arguments);
              }),
            t1 = function (e) {
              var t = (0, f.aP)(e),
                n = (0, f.Pe)(t);
              tD((0, f.jB)(n));
            },
            t2 =
              ((i = (0, a.A)(
                c().mark(function e(t) {
                  var n, r;
                  return c().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (!eI) {
                            e.next = 14;
                            break;
                          }
                          return (
                            (e.next = 3),
                            ev({
                              conversationTicket: {
                                id: eN,
                                community_id: Z,
                                external_platform_id: 'web',
                                messages: eM.filter(function (e) {
                                  return e.id !== t;
                                }),
                              },
                            })
                          );
                        case 3:
                          if (!('error' in (n = e.sent))) {
                            e.next = 8;
                            break;
                          }
                          return (
                            console.error('Error creating conversation ticket:', n),
                            t3(),
                            e.abrupt('return', !1)
                          );
                        case 8:
                          if ((r = n.data.conversation_ticket).id === eN) {
                            e.next = 13;
                            break;
                          }
                          return (
                            console.error(
                              'Conversation ID mismatch: '.concat(r.id, ' !== ').concat(eN)
                            ),
                            t3(),
                            e.abrupt('return', !1)
                          );
                        case 13:
                          eD(!1);
                        case 14:
                          return e.abrupt('return', !0);
                        case 15:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                })
              )),
              function (e) {
                return i.apply(this, arguments);
              }),
            t3 = function () {
              var e = tK({
                messageType: g.Jw.ASSISTANT,
                content: 'Sorry, something went wrong. Please try again later.',
              });
              e && tV(e), eV(!0);
            },
            t5 =
              ((v = (0, a.A)(
                c().mark(function e(t) {
                  var n, r, o;
                  return c().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (X) {
                            e.next = 2;
                            break;
                          }
                          return e.abrupt('return');
                        case 2:
                          if (!(tf && 'contact-support' == t)) {
                            e.next = 5;
                            break;
                          }
                          return tX(X.actions['contact-support'].title), e.abrupt('return');
                        case 5:
                          if (
                            (eG(!0),
                            eW(!0),
                            (r = X.actions[t].title),
                            (o = tK({
                              messageType: g.Jw.USER,
                              source: g.Wm.END_USER,
                              content: r,
                              sourceName:
                                null != (n = null == to ? void 0 : to.enduser_id) ? n : 'User',
                            })))
                          ) {
                            e.next = 12;
                            break;
                          }
                          return console.error('Failed to create new message'), e.abrupt('return');
                        case 12:
                          return tV(o), (e.next = 15), t2(o.id);
                        case 15:
                          if (e.sent) {
                            e.next = 18;
                            break;
                          }
                          return e.abrupt('return');
                        case 18:
                          if (
                            (t9([]),
                            'contact-support' != t || X['human-live-chat-support'] || e0(!0),
                            to)
                          ) {
                            e.next = 27;
                            break;
                          }
                          return (
                            (e.next = 23),
                            ew({
                              conversationId: eN,
                              postConversationActionRequest: {
                                message_content: r,
                                action: t,
                                action_response: X.actions[t].response,
                              },
                            })
                          );
                        case 23:
                          t8(e.sent), (e.next = 28);
                          break;
                        case 27:
                          eU({
                            type: g.D_.MESSAGE_AFTER_ESCALATION,
                            community_id: Z,
                            conversation_id:
                              to.id || o.conversation_id || 'missing conversation id',
                            destination_id: to.assigned_agent_id,
                            data: { message: o },
                          });
                        case 28:
                          eG(!1), eW(!1);
                        case 30:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                })
              )),
              function (e) {
                return v.apply(this, arguments);
              }),
            t4 =
              ((h = (0, a.A)(
                c().mark(function e(t) {
                  var n, r;
                  return c().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (null === ti) {
                              e.next = 2;
                              break;
                            }
                            return e.abrupt('return');
                          case 2:
                            return (
                              tc(t),
                              (e.prev = 3),
                              (e.next = 6),
                              eT({ conversationId: eN, rating: t })
                            );
                          case 6:
                            if (
                              ((n =
                                t >= 4
                                  ? 'Thank you so much for your answer! \uD83D\uDE0A'
                                  : "We're sorry to hear that your experience wasn't great \uD83D\uDE15"),
                              !(r = tK({
                                messageType: g.Jw.ASSISTANT,
                                content: n,
                                isVisibleToAgent: !1,
                              })))
                            ) {
                              e.next = 12;
                              break;
                            }
                            return (e.next = 11), eS({ conversationMessage: r });
                          case 11:
                            tV(r);
                          case 12:
                            e.next = 17;
                            break;
                          case 14:
                            (e.prev = 14),
                              (e.t0 = e.catch(3)),
                              console.error('Error saving conversation rating:', e.t0);
                          case 17:
                          case 'end':
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[3, 14]]
                  );
                })
              )),
              function (e) {
                return h.apply(this, arguments);
              }),
            t9 = function (e) {
              eV(e.includes(es.CONTACT_SUPPORT)), ez(e.includes(es.THANKS));
            },
            t8 = function (e) {
              var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
              if ('error' in e) return t3();
              tV(e.data.response_message, t), t9(e.data.allowed_actions);
            };
          (0, w.useEffect)(
            function () {
              if (
                eM.length &&
                eM[eM.length - 1].message_type === g.Jw.STATUS_CHANGE &&
                (0, er.W)(eM[eM.length - 1].new_status) &&
                null === ti &&
                eM.filter(function (e) {
                  return e.message_type == g.Jw.TEAM;
                }).length >= 1
              ) {
                var e = tK({
                  messageType: g.Jw.ASSISTANT,
                  componentType: 'support_rating',
                  isVisibleToAgent: !1,
                });
                e && (tV(e), eS({ conversationMessage: e }));
              }
            },
            [eM]
          );
          var t6 =
              ((y = (0, a.A)(
                c().mark(function e(t) {
                  var n;
                  return c().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if ((console.log('onEnterEmail', t), t)) {
                            e.next = 3;
                            break;
                          }
                          return e.abrupt('return');
                        case 3:
                          (n = { id: eN, community_id: Z, enduser_id: t, source_url: t7() }),
                            console.log('sending escalation transaction'),
                            eU({
                              type: g.D_.ESCALATE_TICKET,
                              community_id: Z,
                              conversation_id: n.id,
                              data: { ticket: n },
                            });
                        case 6:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                })
              )),
              function (e) {
                return y.apply(this, arguments);
              }),
            t7 = function () {
              var e = new URL(decodeURIComponent(ee));
              return e.searchParams.set('ticketConversationId', eN), e.toString();
            };
          (0, w.useEffect)(
            function () {
              eN &&
                eb({
                  conversationId: eN,
                  appPresentationRoutersConversationsRouterPostActivityRequest: {
                    activity: 'initialize_widget',
                    community_id: Z,
                  },
                });
            },
            [eN, eb, Z]
          );
          var ne = function () {
            eN &&
              eb({
                conversationId: eN,
                appPresentationRoutersConversationsRouterPostActivityRequest: {
                  activity: 'close_window',
                  community_id: Z,
                },
              });
          };
          (0, w.useEffect)(
            function () {
              document.documentElement.style.setProperty('color-scheme', 'normal'),
                document.documentElement.style.setProperty('overflow', 'hidden'),
                'dark' !== em && document.documentElement.classList.remove('dark'),
                document.body.style.setProperty('background-color', 'transparent'),
                e9(!0);
            },
            [em, z]
          ),
            (0, w.useEffect)(function () {
              return (
                window.addEventListener('beforeunload', ne),
                function () {
                  window.removeEventListener('beforeunload', ne);
                }
              );
            }, []),
            (0, w.useEffect)(
              function () {
                z && (console.log('Not showing Pluno web support because of ' + H.error), nn());
              },
              [z, H.error]
            );
          var nt = function () {
              window.parent.postMessage('pluno-widget-appear', '*');
            },
            nn = function () {
              window.parent.postMessage('pluno-widget-disappear', '*'), tT(!1);
            };
          (0, w.useEffect)(
            function () {
              !z &&
                e4 &&
                (null == X ? void 0 : X['hide-on-load']) !== !0 &&
                (nt(),
                setTimeout(function () {
                  nt();
                }, 500));
            },
            [z, e4, X]
          ),
            (0, w.useEffect)(function () {
              var e = function (e) {
                ('pluno-invoke-appear-closed' === e.data ||
                  'awesomeqa-invoke-appear-closed' === e.data) &&
                  (nt(), tB(!1)),
                  ('pluno-invoke-appear-opened' === e.data ||
                    'awesomeqa-invoke-appear-opened' === e.data) &&
                    (nt(), tB(!0)),
                  ('pluno-invoke-open' === e.data || 'awesomeqa-invoke-open' === e.data) && tB(!0),
                  ('pluno-invoke-close' === e.data || 'awesomeqa-invoke-close' === e.data) &&
                    tB(!1),
                  ('pluno-invoke-disappear' === e.data ||
                    'awesomeqa-invoke-disappear' === e.data) &&
                    nn(),
                  ('pluno-invoke-appear-opened-with-disappear-on-close' === e.data ||
                    'awesomeqa-invoke-appear-opened-with-disappear-on-close' === e.data) &&
                    (tT(!0), nt(), tB(!0));
              };
              return (
                window.addEventListener('message', e),
                function () {
                  window.removeEventListener('message', e);
                }
              );
            });
          var nr = (0, w.useState)(!1),
            no = nr[0],
            na = nr[1];
          (0, w.useEffect)(
            function () {
              function e() {
                return (e = (0, a.A)(
                  c().mark(function e() {
                    return c().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            e.next = 8;
                            break;
                          case 4:
                            return (e.next = 6), tX('support please');
                          case 6:
                            return (
                              (e.next = 8),
                              new Promise(function (e) {
                                return setTimeout(e, 4e3 + 2e3 * Math.random());
                              })
                            );
                          case 8:
                            return (
                              console.log('opening ticket'), (e.next = 11), t5('contact-support')
                            );
                          case 11:
                            return (
                              console.log('ticket opened'),
                              (e.next = 14),
                              new Promise(function (e) {
                                return setTimeout(e, 2e3 + 2e3 * Math.random());
                              })
                            );
                          case 14:
                            return (
                              console.log('entering email'),
                              (e.next = 17),
                              t6('stresstest'.concat(Math.random(), '@stresstest.com'))
                            );
                          case 17:
                            console.log('email entered');
                          case 18:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  })
                )).apply(this, arguments);
              }
              Y &&
                !no &&
                eN &&
                (na(!0),
                (function () {
                  e.apply(this, arguments);
                })());
            },
            [Y, no, tj, eN]
          );
          var ns = (0, w.useState)(!1),
            ni = ns[0],
            nc = ns[1];
          return ((0, w.useEffect)(
            function () {
              function e() {
                return (e = (0, a.A)(
                  c().mark(function e() {
                    var t, n;
                    return c().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (!to) {
                              e.next = 9;
                              break;
                            }
                            nc(!0),
                              (t = c().mark(function e() {
                                var t;
                                return c().wrap(function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (t = 2e3 + 2e3 * Math.random() + 5e3 * (0 == n)),
                                          (e.next = 3),
                                          new Promise(function (e) {
                                            return setTimeout(e, t);
                                          })
                                        );
                                      case 3:
                                        return (
                                          (e.next = 5), tX('My message has the number '.concat(n))
                                        );
                                      case 5:
                                      case 'end':
                                        return e.stop();
                                    }
                                }, e);
                              })),
                              (n = 0);
                          case 4:
                            if (!(n < 10)) {
                              e.next = 9;
                              break;
                            }
                            return e.delegateYield(t(), 't0', 6);
                          case 6:
                            n++, (e.next = 4);
                            break;
                          case 9:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  })
                )).apply(this, arguments);
              }
              Y &&
                !ni &&
                (function () {
                  e.apply(this, arguments);
                })();
            },
            [to, tj, ni]
          ),
          (0, w.useEffect)(function () {
            document.documentElement.style.setProperty('color-scheme', 'normal', 'important');
            var e = new MutationObserver(function () {
              'normal' !== document.documentElement.style.getPropertyValue('color-scheme') &&
                document.documentElement.style.setProperty('color-scheme', 'normal', 'important');
            });
            return (
              e.observe(document.documentElement, { attributes: !0, attributeFilter: ['style'] }),
              function () {
                e.disconnect();
              }
            );
          }, []),
          (0, w.useEffect)(function () {
            var e = function (e, t) {
                return null !== e && (e.contains(t) || e === t);
              },
              t = function (e, t) {
                if (!e) return !1;
                var n = 0 === e.scrollTop,
                  r = e.scrollHeight - e.scrollTop === e.clientHeight;
                return (n && t < 0) || (r && t > 0);
              },
              n = function (n) {
                var r,
                  o,
                  a = null != (r = null == (o = tG.current) ? void 0 : o.parentElement) ? r : null,
                  s = tj.current,
                  i = e(s, n.target),
                  c = e(a, n.target),
                  u = n instanceof WheelEvent ? n.deltaY : n.touches[0].clientY;
                (!c || t(a, u)) && (!i || t(s, u)) && (n.preventDefault(), n.stopPropagation());
              };
            return (
              window.addEventListener('wheel', n, { passive: !1 }),
              window.addEventListener('touchmove', n, { passive: !1 }),
              function () {
                window.removeEventListener('wheel', n), window.removeEventListener('touchmove', n);
              }
            );
          }, []),
          (0, w.useEffect)(
            function () {
              tm &&
                (eP(tm.messages || []),
                ta(tm),
                'open' === ei && tB(!0),
                'closed' !== ei && tm.id === et && tB(!0));
            },
            [tm, ei]
          ),
          (0, w.useEffect)(
            function () {
              to && ('closed' !== ei && tB(!0), ta(to), void 0 !== to.rating && tc(to.rating));
            },
            [to]
          ),
          !z && X && Z && eN && eJ)
            ? (0, b.jsx)(en, {
                themeMode: em,
                primaryColor: tq,
                children: (0, b.jsxs)('div', {
                  className: 'fixed '.concat(
                    tR && e6
                      ? 'bottom-0 right-0 h-screen w-screen'
                      : 'bottom-4 right-4 h-[calc(100vh-32px)] w-[calc(100vw-32px)]'
                  ),
                  children: [
                    (0, b.jsxs)(l.Zp, {
                      className: (0, S.cn)(
                        tF.chatCard,
                        'absolute bg-background-secondary p-4 transition-none',
                        e6 &&
                          'translate-y-0 scale-100 opacity-100 transition-transform duration-150 ease-out',
                        !e6 && 'translate-y-[50px] scale-[0.7] opacity-0',
                        tR ? 'bottom-0 rounded-none' : 'bottom-['.concat(tU + 16, 'px] rounded-lg'),
                        !e6 && 'h-0',
                        e6 && (tR ? 'h-full' : 'h-[calc(100%-80px)]')
                      ),
                      children: [
                        (0, b.jsx)(q, {
                          title:
                            null != (G = null == X ? void 0 : X['widget-title'])
                              ? G
                              : 'Support Chat',
                          iconUrl: (null == X ? void 0 : X['widget-icon-url']) || void 0,
                          onClose: tH,
                          isMobile: tR,
                          customClasses: { chatCardTitle: tF.chatCardTitle },
                        }),
                        (0, b.jsx)(u.A, {
                          enabled: tp,
                          padding: 1,
                          onDropFiles: t1,
                          children: (0, b.jsx)(d.A, {
                            conversationMessages: eM,
                            configData: X,
                            isChatInitalizing: 0 === eM.length,
                            isLoadingResponse: eH,
                            onEnterEmail: t6,
                            emailSent: null != (B = null == to ? void 0 : to.enduser_id) ? B : '',
                            supportAgents: t_,
                            onRate: t4,
                            selectedRating: ti,
                            ref: tG,
                          }),
                        }),
                        (0, b.jsx)(x, {
                          conversationMessages: eM,
                          configData: X,
                          ticketCreated: tp,
                        }),
                        (0, b.jsx)('hr', { className: 'mt-2 border-t border-border px-2' }),
                        (0, b.jsx)(K, {
                          suggestions: th,
                          onSuggestionClick: tX,
                          isResponding: eq,
                          isUploadingFiles: eA,
                          showQuestionSuggestions: tb,
                          customClasses: { chatQASuggestionButton: tF.chatQASuggestionButton },
                        }),
                        (0, b.jsx)(D, {
                          showThatsHelpful: e$,
                          showContactSupport: eQ,
                          showCopyChat: eX,
                          chatJustCopied: e2,
                          isResponding: eq,
                          isUploadingFiles: eA,
                          onThanksTap: function () {
                            return t5('thanks');
                          },
                          onContactSupportTap: function () {
                            return t5('contact-support');
                          },
                          onCopyChatTap: function () {
                            _(
                              eM.reduce(
                                function (e, t) {
                                  return e + '\n\n' + (0, C.Z)(t.message_type) + ': ' + t.content;
                                },
                                'Chat Export ('.concat(new Date().toLocaleString(), ')')
                              )
                            ),
                              e3(!0),
                              setTimeout(function () {
                                e3(!1);
                              }, 4e3);
                          },
                          configData: X,
                          showQuestionSuggestions: tb,
                          customClasses: {
                            chatResolveButton: tF.chatResolveButton,
                            chatActionButton: tF.chatActionButton,
                          },
                        }),
                        (0, b.jsx)(W, {
                          text: tN,
                          setText: tM,
                          files: tI,
                          setFiles: tD,
                          setFilesAfterValidation: t1,
                          handleMessage: tX,
                          ticketCreated: tp,
                          isResponding: eq,
                          isUploadingFiles: eA,
                          customClasses: tF.textField,
                          textareaRef: tj,
                        }),
                        (0, b.jsx)(F, { themeMode: em, customClassName: tF.logo }),
                      ],
                    }),
                    !(e6 && tR) &&
                      (0, b.jsx)(L, {
                        onClick: tH,
                        showNotificationBadge: ep && tt,
                        isChatOpen: e6,
                        iconUrl: (null == X ? void 0 : X['widget-icon-url']) || void 0,
                        customClasses: { chatButton: tF.chatButton, chatOpen: tF.chatOpen },
                      }),
                  ],
                }),
              })
            : (0, b.jsx)(b.Fragment, {});
        }
      },
      48141: (e, t, n) => {
        n.d(t, { _A: () => i, jU: () => c, md: () => u });
        var r = n(42969),
          o = n(70236);
        function a(e, t) {
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
        function s(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? a(Object(n), !0).forEach(function (t) {
                  (0, r.A)(e, t, n[t]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                : a(Object(n)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                  });
          }
          return e;
        }
        var i = function (e, t) {
            return t.id &&
              e
                .map(function (e) {
                  return e.id;
                })
                .includes(t.id)
              ? e.map(function (e) {
                  return e.id !== t.id ? e : t;
                })
              : [].concat((0, o.A)(e), [t]);
          },
          c = function (e, t, n) {
            return e
              .map(function (e) {
                return e.id;
              })
              .includes(t)
              ? e.map(function (e) {
                  return e.id != t ? e : s(s({}, e), {}, { id: n });
                })
              : e;
          },
          u = function (e, t, n) {
            return e
              .map(function (e) {
                return e.id;
              })
              .includes(t)
              ? e.map(function (e) {
                  return e.id != t ? e : s(s({}, e), {}, { attachments: n });
                })
              : [].concat((0, o.A)(e), [{ id: t, attachments: n }]);
          };
      },
      71023: (e, t, n) => {
        n.d(t, { Z: () => r });
        var r = function (e) {
          return e.toLowerCase().replace(/\w/, function (e) {
            return e.toUpperCase();
          });
        };
      },
      92002: (e, t, n) => {
        n.d(t, { Td: () => a, US: () => o, qx: () => s });
        var r = n(5259),
          o = r.MKb,
          a = r.TdU,
          s = r.maG;
      },
    },
  ]);
