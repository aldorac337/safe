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
      (e._sentryDebugIds[t] = '4eeee02d-1e99-49be-85ef-103981db77f5'),
      (e._sentryDebugIdIdentifier = 'sentry-dbid-4eeee02d-1e99-49be-85ef-103981db77f5'));
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
    [4328],
    {
      7685: (e, t, r) => {
        r.d(t, {
          Bn: () => p,
          I5: () => c,
          Om: () => h,
          Pe: () => m,
          Ut: () => i,
          aP: () => b,
          jB: () => f,
          vH: () => l,
          wl: () => u,
        });
        var n = r(63857),
          a = r(43081),
          o = r.n(a),
          s = r(278),
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
          p = function (e) {
            return e.map(function (e) {
              return new File([e], e.name, { type: e.type, lastModified: e.lastModified });
            });
          },
          u = function (e, t, r) {
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
          f = function (e, t) {
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
          g = function (e) {
            for (var t = '', r = 0; r < e.length; r += 32768)
              t += String.fromCharCode.apply(null, Array.from(e.subarray(r, r + 32768)));
            return btoa(t);
          },
          y = (function () {
            var e = (0, n.A)(
              o().mark(function e(t) {
                var r, n;
                return o().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), t.arrayBuffer();
                      case 2:
                        return (
                          (r = e.sent), (n = g(s.Ay.gzip(new Uint8Array(r)))), e.abrupt('return', n)
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
              o().mark(function e(t) {
                return o().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return e.abrupt(
                          'return',
                          Promise.all(
                            t.map(
                              (function () {
                                var e = (0, n.A)(
                                  o().mark(function e(t) {
                                    return o().wrap(function (e) {
                                      for (;;)
                                        switch ((e.prev = e.next)) {
                                          case 0:
                                            return (e.next = 2), y(t);
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
          o = r(84514),
          s = r(14232),
          i = r(37876);
        let c = function (e) {
          var t = e.onDropFiles,
            r = e.padding,
            c = void 0 === r ? 0 : r,
            l = e.enabled,
            d = void 0 === l || l,
            p = e.children,
            u = (0, s.useState)(!1),
            f = u[0],
            m = u[1];
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
            style: { position: 'relative', flex: 1, overflowY: f ? 'hidden' : 'auto' },
            children: [
              (0, i.jsx)(o.A, {
                sx: { maxHeight: '100%', overflowY: f ? 'hidden' : 'auto' },
                children: p,
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
                open: d && f,
                children: (0, i.jsx)(a.A, {
                  sx: {
                    position: 'absolute',
                    top: ''.concat(c, 'rem'),
                    left: ''.concat(c, 'rem'),
                    width: 'calc(100% - '.concat(2 * c, 'rem)'),
                    height: 'calc(100% - '.concat(2 * c, 'rem)'),
                    border: f ? '0.2rem dashed white' : '',
                    borderRadius: f ? '1rem' : '',
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
        r.d(t, { SQ: () => j, _2: () => O, hO: () => A, mB: () => E, rI: () => x, ty: () => N });
        var n = r(42969),
          a = r(59860),
          o = r(97154),
          s = r(5259),
          i = r(14232),
          c = r(32868),
          l = r(75553),
          d = r(37876),
          p = ['className', 'inset', 'children'],
          u = ['className'],
          f = ['className', 'sideOffset'],
          m = ['className', 'inset'],
          b = ['className', 'children', 'checked'],
          g = ['className', 'children'],
          y = ['className', 'inset'],
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
        function w(e) {
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
        var x = o.bL,
          N = o.l9;
        o.YJ,
          o.ZL,
          o.Pb,
          o.z6,
          (i.forwardRef(function (e, t) {
            var r = e.className,
              n = e.inset,
              i = e.children,
              l = (0, a.A)(e, p);
            return (0, d.jsxs)(
              o.ZP,
              w(
                w(
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
                { children: [i, (0, d.jsx)(s.vKP, { className: 'ml-auto h-4 w-4' })] }
              )
            );
          }).displayName = o.ZP.displayName),
          (i.forwardRef(function (e, t) {
            var r = e.className,
              n = (0, a.A)(e, u);
            return (0, d.jsx)(
              o.G5,
              w(
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
          }).displayName = o.G5.displayName);
        var j = i.forwardRef(function (e, t) {
          var r = e.className,
            n = e.sideOffset,
            s = (0, a.A)(e, f);
          return (0, d.jsx)(o.ZL, {
            children: (0, d.jsx)(
              o.UC,
              w(
                {
                  ref: t,
                  sideOffset: void 0 === n ? 4 : n,
                  className: (0, c.cn)(
                    'z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md',
                    'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
                    r
                  ),
                },
                s
              )
            ),
          });
        });
        j.displayName = o.UC.displayName;
        var O = i.forwardRef(function (e, t) {
          var r = e.className,
            n = e.inset,
            s = (0, a.A)(e, m);
          return (0, d.jsx)(
            o.q7,
            w(
              {
                ref: t,
                className: (0, c.cn)(
                  'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
                  n && 'pl-8',
                  r
                ),
              },
              s
            )
          );
        });
        O.displayName = o.q7.displayName;
        var A = i.forwardRef(function (e, t) {
          var r = e.className,
            n = e.children,
            s = e.checked,
            i = (0, a.A)(e, b);
          return (0, d.jsxs)(
            o.H_,
            w(
              w(
                {
                  ref: t,
                  className: (0, c.cn)(
                    s && 'bg-gray-700',
                    'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
                    r
                  ),
                  checked: s,
                },
                i
              ),
              {},
              {
                children: [
                  (0, d.jsx)('span', {
                    className: 'absolute left-2 flex h-3.5 w-3.5 items-center justify-center',
                    children: (0, d.jsx)(l.S, { checked: s, className: 'h-4 w-4' }),
                  }),
                  n,
                ],
              }
            )
          );
        });
        (A.displayName = o.H_.displayName),
          (i.forwardRef(function (e, t) {
            var r = e.className,
              n = e.children,
              i = (0, a.A)(e, g);
            return (0, d.jsxs)(
              o.hN,
              w(
                w(
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
                      children: (0, d.jsx)(o.VF, {
                        children: (0, d.jsx)(s.RiX, { className: 'h-4 w-4 fill-current' }),
                      }),
                    }),
                    n,
                  ],
                }
              )
            );
          }).displayName = o.hN.displayName),
          (i.forwardRef(function (e, t) {
            var r = e.className,
              n = e.inset,
              s = (0, a.A)(e, y);
            return (0, d.jsx)(
              o.JU,
              w(
                {
                  ref: t,
                  className: (0, c.cn)('px-2 py-1.5 text-sm font-semibold', n && 'pl-8', r),
                },
                s
              )
            );
          }).displayName = o.JU.displayName);
        var E = i.forwardRef(function (e, t) {
          var r = e.className,
            n = (0, a.A)(e, h);
          return (0, d.jsx)(
            o.wv,
            w({ ref: t, className: (0, c.cn)('-mx-1 my-1 h-px bg-muted', r) }, n)
          );
        });
        E.displayName = o.wv.displayName;
      },
      42710: (e, t, r) => {
        r.d(t, { A: () => l });
        var n = r(42969),
          a = r(45794),
          o = r(55355);
        r(14232);
        var s = r(37876);
        function i(e, t) {
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
        function c(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? i(Object(r), !0).forEach(function (t) {
                  (0, n.A)(e, t, r[t]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
                : i(Object(r)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                  });
          }
          return e;
        }
        function l(e) {
          var t,
            r = e.text,
            n = e.darkMode,
            i = e.style,
            l = void 0 === i ? void 0 : i,
            d = e.overrideLinkColor,
            p = (null != r ? r : '')
              .replace(/\n/g, '  \n&nbsp;')
              .replace(/`/g, '')
              .replace(/\\\]\]/g, '&rsqrbracket;]')
              .replace(/\[\\\[/g, '[&lsqrbracket;')
              .replace(/\]\]/g, '&rsqrbracket;]')
              .replace(/\[FAQ\]/g, '&lsqrbracket;FAQ&rsqrbracket;'),
            u = p.includes('```'),
            f = c(
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
            m = { component: 'span', props: { style: null != l ? l : f } },
            b = {
              component: 'a',
              props: {
                target: 'blank',
                style: c(
                  c({}, (void 0 === n || n) && (void 0 === d || d) ? { color: '#fff' } : {}),
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
                    var t = e.src,
                      r = e.alt;
                    return (0, s.jsx)('img', {
                      src: t,
                      alt: r,
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
                        r = (0, a.A)(t, 2),
                        n = r[0],
                        o = r[1];
                      return o
                        ? ((o = o.replace(/\n/g, ' ')), '('.concat(n, ' "').concat(o, ')'))
                        : e;
                    }
                    return e;
                  })
                : '',
          });
        }
      },
      50066: (e, t, r) => {
        r.d(t, { A: () => p });
        var n = r(78750),
          a = r(79459),
          o = r(68670),
          s = r(22304),
          i = r(97965),
          c = r(32868),
          l = r(7685),
          d = r(37876);
        function p(e) {
          var t = e.files,
            r = e.inputDisabled,
            p = e.handleFilesChange,
            u = e.tooltipText,
            f =
              void 0 === u
                ? 'Upload up to '.concat(l.I5, ' files, at most ').concat(l.Ut, ' MB per file')
                : u,
            m = e.className,
            b = e.labelClassName,
            g = e.iconClassName,
            y = void 0 === g ? 'h-4 w-4' : g,
            h = e.tooltipContentAlign;
          return (0, d.jsx)('div', {
            className: m,
            children: (0, d.jsxs)(i.m_, {
              children: [
                (0, d.jsx)(i.k$, {
                  asChild: !0,
                  children: (0, d.jsx)(s.J, {
                    htmlFor: 'file-upload',
                    className: (0, c.cn)(
                      'inline-flex cursor-pointer items-center justify-center',
                      b,
                      r ? 'cursor-default' : 'hover:text-foreground'
                    ),
                    children: (0, d.jsx)(o.$, {
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
                            t.files && p({ target: t });
                          }),
                          e.click();
                      },
                      children:
                        t.length > 0
                          ? (0, d.jsxs)('div', {
                              className: 'relative',
                              children: [
                                (0, d.jsx)(n.A, { className: y }),
                                (0, d.jsx)(a.E, {
                                  variant: 'destructive',
                                  className:
                                    'absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center p-0 text-[10px]',
                                  children: t.length,
                                }),
                              ],
                            })
                          : (0, d.jsx)(n.A, { className: y }),
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
                      : f,
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
          o = r(14232),
          s = r(32868),
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
        var d = o.forwardRef(function (e, t) {
          var r = e.className,
            o = (0, a.A)(e, c);
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
                className: (0, s.cn)(
                  'flex w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
                  r
                ),
                ref: t,
              },
              o
            )
          );
        });
        d.displayName = 'Textarea';
      },
      75553: (e, t, r) => {
        r.d(t, { S: () => f });
        var n = r(42969),
          a = r(59860),
          o = r(14232),
          s = r(29470),
          i = r(5259),
          c = r(32868),
          l = r(37876),
          d = ['className'];
        function p(e, t) {
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
        function u(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? p(Object(r), !0).forEach(function (t) {
                  (0, n.A)(e, t, r[t]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
                : p(Object(r)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                  });
          }
          return e;
        }
        var f = o.forwardRef(function (e, t) {
          var r = e.className,
            n = (0, a.A)(e, d);
          return (0, l.jsx)(
            s.bL,
            u(
              u(
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
                children: (0, l.jsx)(s.C1, {
                  className: (0, c.cn)('flex items-center justify-center text-current'),
                  children: (0, l.jsx)(i.Srz, { className: 'h-4 w-4' }),
                }),
              }
            )
          );
        });
        f.displayName = s.bL.displayName;
      },
      82459: (e, t, r) => {
        r.d(t, { D_: () => i, Jw: () => n, Mf: () => a, Wm: () => o, lm: () => s });
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
          o = (function (e) {
            return (e.END_USER = 'end_user'), (e.AGENT = 'agent'), (e.AI = 'ai'), e;
          })({}),
          s = (function (e) {
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
