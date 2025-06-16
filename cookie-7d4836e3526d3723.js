(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9602],
  {
    28817: (e, s, a) => {
      'use strict';
      var t = a(29143);
      a(72552);
      var o = a(55729),
        i = (function (e) {
          return e && 'object' == typeof e && 'default' in e ? e : { default: e };
        })(o),
        r = void 0 !== t && t.env && !0,
        c = function (e) {
          return '[object String]' === Object.prototype.toString.call(e);
        },
        n = (function () {
          function e(e) {
            var s = void 0 === e ? {} : e,
              a = s.name,
              t = void 0 === a ? 'stylesheet' : a,
              o = s.optimizeForSpeed,
              i = void 0 === o ? r : o;
            l(c(t), '`name` must be a string'),
              (this._name = t),
              (this._deletedRulePlaceholder = '#' + t + '-deleted-rule____{}'),
              l('boolean' == typeof i, '`optimizeForSpeed` must be a boolean'),
              (this._optimizeForSpeed = i),
              (this._serverSheet = void 0),
              (this._tags = []),
              (this._injected = !1),
              (this._rulesCount = 0);
            var n = document.querySelector('meta[property="csp-nonce"]');
            this._nonce = n ? n.getAttribute('content') : null;
          }
          var s = e.prototype;
          return (
            (s.setOptimizeForSpeed = function (e) {
              l('boolean' == typeof e, '`setOptimizeForSpeed` accepts a boolean'),
                l(
                  0 === this._rulesCount,
                  'optimizeForSpeed cannot be when rules have already been inserted'
                ),
                this.flush(),
                (this._optimizeForSpeed = e),
                this.inject();
            }),
            (s.isOptimizeForSpeed = function () {
              return this._optimizeForSpeed;
            }),
            (s.inject = function () {
              var e = this;
              if (
                (l(!this._injected, 'sheet already injected'),
                (this._injected = !0),
                this._optimizeForSpeed)
              ) {
                (this._tags[0] = this.makeStyleTag(this._name)),
                  (this._optimizeForSpeed = 'insertRule' in this.getSheet()),
                  this._optimizeForSpeed ||
                    (r ||
                      console.warn(
                        'StyleSheet: optimizeForSpeed mode not supported falling back to standard mode.'
                      ),
                    this.flush(),
                    (this._injected = !0));
                return;
              }
              this._serverSheet = {
                cssRules: [],
                insertRule: function (s, a) {
                  return (
                    'number' == typeof a
                      ? (e._serverSheet.cssRules[a] = { cssText: s })
                      : e._serverSheet.cssRules.push({ cssText: s }),
                    a
                  );
                },
                deleteRule: function (s) {
                  e._serverSheet.cssRules[s] = null;
                },
              };
            }),
            (s.getSheetForTag = function (e) {
              if (e.sheet) return e.sheet;
              for (var s = 0; s < document.styleSheets.length; s++)
                if (document.styleSheets[s].ownerNode === e) return document.styleSheets[s];
            }),
            (s.getSheet = function () {
              return this.getSheetForTag(this._tags[this._tags.length - 1]);
            }),
            (s.insertRule = function (e, s) {
              if ((l(c(e), '`insertRule` accepts only strings'), this._optimizeForSpeed)) {
                var a = this.getSheet();
                'number' != typeof s && (s = a.cssRules.length);
                try {
                  a.insertRule(e, s);
                } catch (s) {
                  return (
                    r ||
                      console.warn(
                        'StyleSheet: illegal rule: \n\n' +
                          e +
                          '\n\nSee https://stackoverflow.com/q/20007992 for more info'
                      ),
                    -1
                  );
                }
              } else {
                var t = this._tags[s];
                this._tags.push(this.makeStyleTag(this._name, e, t));
              }
              return this._rulesCount++;
            }),
            (s.replaceRule = function (e, s) {
              if (this._optimizeForSpeed) {
                var a = this.getSheet();
                if ((s.trim() || (s = this._deletedRulePlaceholder), !a.cssRules[e])) return e;
                a.deleteRule(e);
                try {
                  a.insertRule(s, e);
                } catch (t) {
                  r ||
                    console.warn(
                      'StyleSheet: illegal rule: \n\n' +
                        s +
                        '\n\nSee https://stackoverflow.com/q/20007992 for more info'
                    ),
                    a.insertRule(this._deletedRulePlaceholder, e);
                }
              } else {
                var t = this._tags[e];
                l(t, 'old rule at index `' + e + '` not found'), (t.textContent = s);
              }
              return e;
            }),
            (s.deleteRule = function (e) {
              if (this._optimizeForSpeed) this.replaceRule(e, '');
              else {
                var s = this._tags[e];
                l(s, 'rule at index `' + e + '` not found'),
                  s.parentNode.removeChild(s),
                  (this._tags[e] = null);
              }
            }),
            (s.flush = function () {
              (this._injected = !1),
                (this._rulesCount = 0),
                this._tags.forEach(function (e) {
                  return e && e.parentNode.removeChild(e);
                }),
                (this._tags = []);
            }),
            (s.cssRules = function () {
              var e = this;
              return this._tags.reduce(function (s, a) {
                return (
                  a
                    ? (s = s.concat(
                        Array.prototype.map.call(e.getSheetForTag(a).cssRules, function (s) {
                          return s.cssText === e._deletedRulePlaceholder ? null : s;
                        })
                      ))
                    : s.push(null),
                  s
                );
              }, []);
            }),
            (s.makeStyleTag = function (e, s, a) {
              s && l(c(s), 'makeStyleTag accepts only strings as second parameter');
              var t = document.createElement('style');
              this._nonce && t.setAttribute('nonce', this._nonce),
                (t.type = 'text/css'),
                t.setAttribute('data-' + e, ''),
                s && t.appendChild(document.createTextNode(s));
              var o = document.head || document.getElementsByTagName('head')[0];
              return a ? o.insertBefore(t, a) : o.appendChild(t), t;
            }),
            (function (e, s) {
              for (var a = 0; a < s.length; a++) {
                var t = s[a];
                (t.enumerable = t.enumerable || !1),
                  (t.configurable = !0),
                  'value' in t && (t.writable = !0),
                  Object.defineProperty(e, t.key, t);
              }
            })(e.prototype, [
              {
                key: 'length',
                get: function () {
                  return this._rulesCount;
                },
              },
            ]),
            e
          );
        })();
      function l(e, s) {
        if (!e) throw Error('StyleSheet: ' + s + '.');
      }
      var d = function (e) {
          for (var s = 5381, a = e.length; a; ) s = (33 * s) ^ e.charCodeAt(--a);
          return s >>> 0;
        },
        f = {};
      function h(e, s) {
        if (!s) return 'jsx-' + e;
        var a = String(s),
          t = e + a;
        return f[t] || (f[t] = 'jsx-' + d(e + '-' + a)), f[t];
      }
      function b(e, s) {
        var a = e + s;
        return f[a] || (f[a] = s.replace(/__jsx-style-dynamic-selector/g, e)), f[a];
      }
      var p = (function () {
          function e(e) {
            var s = void 0 === e ? {} : e,
              a = s.styleSheet,
              t = void 0 === a ? null : a,
              o = s.optimizeForSpeed,
              i = void 0 !== o && o;
            (this._sheet = t || new n({ name: 'styled-jsx', optimizeForSpeed: i })),
              this._sheet.inject(),
              t &&
                'boolean' == typeof i &&
                (this._sheet.setOptimizeForSpeed(i),
                (this._optimizeForSpeed = this._sheet.isOptimizeForSpeed())),
              (this._fromServer = void 0),
              (this._indices = {}),
              (this._instancesCounts = {});
          }
          var s = e.prototype;
          return (
            (s.add = function (e) {
              var s = this;
              void 0 === this._optimizeForSpeed &&
                ((this._optimizeForSpeed = Array.isArray(e.children)),
                this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),
                (this._optimizeForSpeed = this._sheet.isOptimizeForSpeed())),
                this._fromServer ||
                  ((this._fromServer = this.selectFromServer()),
                  (this._instancesCounts = Object.keys(this._fromServer).reduce(function (e, s) {
                    return (e[s] = 0), e;
                  }, {})));
              var a = this.getIdAndRules(e),
                t = a.styleId,
                o = a.rules;
              if (t in this._instancesCounts) {
                this._instancesCounts[t] += 1;
                return;
              }
              var i = o
                .map(function (e) {
                  return s._sheet.insertRule(e);
                })
                .filter(function (e) {
                  return -1 !== e;
                });
              (this._indices[t] = i), (this._instancesCounts[t] = 1);
            }),
            (s.remove = function (e) {
              var s = this,
                a = this.getIdAndRules(e).styleId;
              if (
                ((function (e, s) {
                  if (!e) throw Error('StyleSheetRegistry: ' + s + '.');
                })(a in this._instancesCounts, 'styleId: `' + a + '` not found'),
                (this._instancesCounts[a] -= 1),
                this._instancesCounts[a] < 1)
              ) {
                var t = this._fromServer && this._fromServer[a];
                t
                  ? (t.parentNode.removeChild(t), delete this._fromServer[a])
                  : (this._indices[a].forEach(function (e) {
                      return s._sheet.deleteRule(e);
                    }),
                    delete this._indices[a]),
                  delete this._instancesCounts[a];
              }
            }),
            (s.update = function (e, s) {
              this.add(s), this.remove(e);
            }),
            (s.flush = function () {
              this._sheet.flush(),
                this._sheet.inject(),
                (this._fromServer = void 0),
                (this._indices = {}),
                (this._instancesCounts = {});
            }),
            (s.cssRules = function () {
              var e = this,
                s = this._fromServer
                  ? Object.keys(this._fromServer).map(function (s) {
                      return [s, e._fromServer[s]];
                    })
                  : [],
                a = this._sheet.cssRules();
              return s.concat(
                Object.keys(this._indices)
                  .map(function (s) {
                    return [
                      s,
                      e._indices[s]
                        .map(function (e) {
                          return a[e].cssText;
                        })
                        .join(e._optimizeForSpeed ? '' : '\n'),
                    ];
                  })
                  .filter(function (e) {
                    return !!e[1];
                  })
              );
            }),
            (s.styles = function (e) {
              var s, a;
              return (
                (s = this.cssRules()),
                void 0 === (a = e) && (a = {}),
                s.map(function (e) {
                  var s = e[0],
                    t = e[1];
                  return i.default.createElement('style', {
                    id: '__' + s,
                    key: '__' + s,
                    nonce: a.nonce ? a.nonce : void 0,
                    dangerouslySetInnerHTML: { __html: t },
                  });
                })
              );
            }),
            (s.getIdAndRules = function (e) {
              var s = e.children,
                a = e.dynamic,
                t = e.id;
              if (a) {
                var o = h(t, a);
                return {
                  styleId: o,
                  rules: Array.isArray(s)
                    ? s.map(function (e) {
                        return b(o, e);
                      })
                    : [b(o, s)],
                };
              }
              return { styleId: h(t), rules: Array.isArray(s) ? s : [s] };
            }),
            (s.selectFromServer = function () {
              return Array.prototype.slice
                .call(document.querySelectorAll('[id^="__jsx-"]'))
                .reduce(function (e, s) {
                  return (e[s.id.slice(2)] = s), e;
                }, {});
            }),
            e
          );
        })(),
        u = o.createContext(null);
      u.displayName = 'StyleSheetContext';
      var x = i.default.useInsertionEffect || i.default.useLayoutEffect,
        j = new p();
      function m(e) {
        var s = j || o.useContext(u);
        return (
          s &&
            x(
              function () {
                return (
                  s.add(e),
                  function () {
                    s.remove(e);
                  }
                );
              },
              [e.id, String(e.dynamic)]
            ),
          null
        );
      }
      (m.dynamic = function (e) {
        return e
          .map(function (e) {
            return h(e[0], e[1]);
          })
          .join(' ');
      }),
        (s.style = m);
    },
    49588: (e, s, a) => {
      'use strict';
      a.r(s), a.d(s, { default: () => u });
      var t = a(6029),
        o = a(94250),
        i = a.n(o),
        r = a(77328),
        c = a.n(r),
        n = a(48230),
        l = a.n(n),
        d = a(94760),
        f = a(72830),
        h = a(28696),
        b = a(94937);
      let p = () =>
          (0, t.jsxs)('div', {
            className: 'jsx-837bfc1eb08f7108',
            children: [
              (0, t.jsx)(i(), {
                id: '837bfc1eb08f7108',
                children:
                  'table.jsx-837bfc1eb08f7108{width:100%;border-spacing:0;border:0;border-collapse:collapse}table.jsx-837bfc1eb08f7108 td.jsx-837bfc1eb08f7108{border:1px solid;padding:0 8px}table.jsx-837bfc1eb08f7108 tr.jsx-837bfc1eb08f7108:first-child td.jsx-837bfc1eb08f7108{font-weight:bold}',
              }),
              (0, t.jsx)('h1', { className: 'jsx-837bfc1eb08f7108', children: 'Cookie Policy' }),
              (0, t.jsx)('p', {
                className: 'jsx-837bfc1eb08f7108',
                children: 'Last updated: January 2024.',
              }),
              (0, t.jsxs)('p', {
                className: 'jsx-837bfc1eb08f7108',
                children: [
                  'As described in our',
                  ' ',
                  (0, t.jsx)(l(), {
                    href: f.S.privacy,
                    passHref: !0,
                    legacyBehavior: !0,
                    children: (0, t.jsx)(d.A, { children: 'Privacy Policy' }),
                  }),
                  ', for general web-browsing of this website, your personal data is not revealed to us, although certain statistical information is available to us via our internet service provider as well as through the use of special tracking technologies. Such information tells us about the pages you are clicking on or the hardware you are using, but not your name, age, address or anything we can use to identify you personally. We exclusively process your personal data in pseudonymised form.',
                ],
              }),
              (0, t.jsxs)('p', {
                className: 'jsx-837bfc1eb08f7108',
                children: [
                  'This Cookie Policy applies to our website at',
                  ' ',
                  (0, t.jsx)(l(), {
                    href: 'https://app.safe.global',
                    passHref: !0,
                    legacyBehavior: !0,
                    children: (0, t.jsx)(d.A, { children: 'https://app.safe.global' }),
                  }),
                  '\xa0and sets out some further detail on how and why we use these technologies on our website.',
                  ' ',
                ],
              }),
              (0, t.jsxs)('p', {
                className: 'jsx-837bfc1eb08f7108',
                children: [
                  'In this policy, "we", "us" and "our" refers to Core Contributors GmbH a company incorporated in Germany with its registered address at c/o WeWork, Dircksenstr. 3, 10179 Berlin, Germany. The terms “you” and “your” includes our clients, business partners and users of this website.',
                  ' ',
                ],
              }),
              (0, t.jsx)('p', {
                className: 'jsx-837bfc1eb08f7108',
                children:
                  'By using our website, you consent to storage and access to cookies and other technologies on your device, in accordance with this Cookie Policy.',
              }),
              (0, t.jsx)('h2', {
                className: 'jsx-837bfc1eb08f7108',
                children: 'What are cookies?',
              }),
              (0, t.jsx)('p', {
                className: 'jsx-837bfc1eb08f7108',
                children:
                  "Cookies are a feature of web browser software that allows web servers to recognize the computer or device used to access a website. A cookie is a small text file that a website saves on your computer or mobile device when you visit the site. It enables the website to remember your actions and preferences (such as login, language, font size and other display preferences) over a period of time, so you don't have to keep re-entering them whenever you come back to the site or browse from one page to another.",
              }),
              (0, t.jsx)('h2', {
                className: 'jsx-837bfc1eb08f7108',
                children: 'What are the different types of cookies?',
              }),
              (0, t.jsx)('p', {
                className: 'jsx-837bfc1eb08f7108',
                children:
                  'A cookie can be classified by its lifespan and the domain to which it belongs.',
              }),
              (0, t.jsx)('p', {
                className: 'jsx-837bfc1eb08f7108',
                children: 'By lifespan, a cookie is either a:',
              }),
              (0, t.jsxs)('ol', {
                start: 1,
                className: 'jsx-837bfc1eb08f7108',
                children: [
                  (0, t.jsx)('li', {
                    className: 'jsx-837bfc1eb08f7108',
                    children: 'session cookie which is erased when the user closes the browser; or',
                  }),
                  (0, t.jsx)('li', {
                    className: 'jsx-837bfc1eb08f7108',
                    children:
                      "persistent cookie which is saved to the hard drive and remains on the user's computer/device for a pre-defined period of time. As for the domain to which it belongs, cookies are either:",
                  }),
                ],
              }),
              (0, t.jsxs)('ol', {
                start: 1,
                className: 'jsx-837bfc1eb08f7108',
                children: [
                  (0, t.jsx)('li', {
                    className: 'jsx-837bfc1eb08f7108',
                    children:
                      'first-party cookies which are set by the web server of the visited page and share the same domain (i.e. set by us); or',
                  }),
                  (0, t.jsx)('li', {
                    className: 'jsx-837bfc1eb08f7108',
                    children:
                      "third-party cookies stored by a different domain to the visited page's domain.",
                  }),
                ],
              }),
              (0, t.jsx)('h2', {
                className: 'jsx-837bfc1eb08f7108',
                children: 'What cookies do we use and why?',
              }),
              (0, t.jsx)('p', {
                className: 'jsx-837bfc1eb08f7108',
                children: 'We list all the cookies we use on this website in the APPENDIX below.',
              }),
              (0, t.jsx)('p', {
                className: 'jsx-837bfc1eb08f7108',
                children:
                  'We do not use cookies set by ourselves via our web developers (first-party cookies). We only have those set by others (third-party cookies).',
              }),
              (0, t.jsx)('p', {
                className: 'jsx-837bfc1eb08f7108',
                children:
                  'Cookies are also sometimes classified by reference to their purpose. We use the following cookies for the following purposes:',
              }),
              (0, t.jsxs)('ol', {
                start: 1,
                className: 'jsx-837bfc1eb08f7108',
                children: [
                  (0, t.jsx)('li', {
                    className: 'jsx-837bfc1eb08f7108',
                    children:
                      'Analytical/performance cookies: They allow us to recognize and count the number of visitors and to see how visitors move around our website when they are using it, as well as dates and times they visit. This helps us to improve the way our website works, for example, by ensuring that users are finding what they are looking for easily.',
                  }),
                  (0, t.jsx)('li', {
                    className: 'jsx-837bfc1eb08f7108',
                    children:
                      'Targeting cookies: These cookies record your visit to our website, the pages you have visited and the links you have followed, as well as time spent on our website, and the websites visited just before and just after our website. We will use this information to make our website and the advertising displayed on it more relevant to your interests. We may also share this information with third parties for this purpose.',
                  }),
                ],
              }),
              (0, t.jsxs)('p', {
                className: 'jsx-837bfc1eb08f7108',
                children: [
                  'In general, we use cookies and other technologies (such as web server logs) on our website to enhance your experience and to collect information about how our website is used.',
                  ' ',
                ],
              }),
              (0, t.jsx)('p', {
                className: 'jsx-837bfc1eb08f7108',
                children:
                  'We will retain and evaluate information on your recent visits to our website and how you move around different sections of our website for analytics purposes to understand how people use our website so that we can make it more intuitive. The information also helps us to understand which parts of this website are most popular and generally to assess user behavior and characteristics to measure interest in and use of the various areas of our website. This then allows us to improve our website and the way we market our business.',
              }),
              (0, t.jsx)('p', {
                className: 'jsx-837bfc1eb08f7108',
                children:
                  "This information may also be used to help us to improve, administer and diagnose problems with our server and website. The information also helps us monitor traffic on our website so that we can manage our website's capacity and efficiency.",
              }),
              (0, t.jsx)('h2', {
                className: 'jsx-837bfc1eb08f7108',
                children: 'Other Technologies',
              }),
              (0, t.jsx)('p', {
                className: 'jsx-837bfc1eb08f7108',
                children:
                  'We may allow others to provide analytics services and serve advertisements on our behalf. In addition to the uses of cookies described above, these entities may use other methods, such as the technologies described below, to collect information about your use of our website and other websites and online services.',
              }),
              (0, t.jsx)('p', {
                className: 'jsx-837bfc1eb08f7108',
                children:
                  'Pixels tags. Pixel tags (which are also called clear GIFs, web beacons, or pixels), are small pieces of code that can be embedded on websites and emails. Pixels tags may be used to learn how you interact with our website pages and emails, and this information helps us, and our partners provide you with a more tailored experience.',
              }),
              (0, t.jsx)('p', {
                className: 'jsx-837bfc1eb08f7108',
                children:
                  'Device Identifiers. A device identifier is a unique label that can be used to identify a mobile device. Device identifiers may be used to track, analyze and improve the performance of the website and ads delivered.',
              }),
              (0, t.jsx)('h2', {
                className: 'jsx-837bfc1eb08f7108',
                children:
                  'What data is collected by cookies and other technologies on our website?',
              }),
              (0, t.jsx)('h3', {
                className: 'jsx-837bfc1eb08f7108',
                children: 'This information may include:',
              }),
              (0, t.jsxs)('ol', {
                start: 1,
                className: 'jsx-837bfc1eb08f7108',
                children: [
                  (0, t.jsx)('li', {
                    className: 'jsx-837bfc1eb08f7108',
                    children:
                      'the IP and logical address of the server you are using (but the last digits are anonymized so we cannot identify you).',
                  }),
                  (0, t.jsx)('li', {
                    className: 'jsx-837bfc1eb08f7108',
                    children:
                      'the top level domain name from which you access the internet (for example .ie, .com, etc)',
                  }),
                  (0, t.jsx)('li', {
                    className: 'jsx-837bfc1eb08f7108',
                    children: 'the type of browser you are using,',
                  }),
                  (0, t.jsx)('li', {
                    className: 'jsx-837bfc1eb08f7108',
                    children: 'the date and time you access our website',
                  }),
                  (0, t.jsx)('li', {
                    className: 'jsx-837bfc1eb08f7108',
                    children: 'the internet address linking to our website.',
                  }),
                ],
              }),
              (0, t.jsx)('h3', {
                className: 'jsx-837bfc1eb08f7108',
                children: 'This website also uses cookies to:',
              }),
              (0, t.jsxs)('ol', {
                start: 1,
                className: 'jsx-837bfc1eb08f7108',
                children: [
                  (0, t.jsx)('li', {
                    className: 'jsx-837bfc1eb08f7108',
                    children: 'remember you and your actions while navigating between pages;',
                  }),
                  (0, t.jsx)('li', {
                    className: 'jsx-837bfc1eb08f7108',
                    children:
                      'remember if you have agreed (or not) to our use of cookies on our website;',
                  }),
                  (0, t.jsx)('li', {
                    className: 'jsx-837bfc1eb08f7108',
                    children: 'ensure the security of the website;',
                  }),
                  (0, t.jsx)('li', {
                    className: 'jsx-837bfc1eb08f7108',
                    children: 'monitor and improve the performance of servers hosting the site;',
                  }),
                  (0, t.jsx)('li', {
                    className: 'jsx-837bfc1eb08f7108',
                    children: 'distinguish users and sessions;',
                  }),
                  (0, t.jsx)('li', {
                    className: 'jsx-837bfc1eb08f7108',
                    children: 'Improving the speed of the site when you access content repeatedly;',
                  }),
                  (0, t.jsx)('li', {
                    className: 'jsx-837bfc1eb08f7108',
                    children: 'determine new sessions and visits;',
                  }),
                  (0, t.jsx)('li', {
                    className: 'jsx-837bfc1eb08f7108',
                    children:
                      'show the traffic source or campaign that explains how you may have reached our website; and',
                  }),
                  (0, t.jsx)('li', {
                    className: 'jsx-837bfc1eb08f7108',
                    children:
                      'allow us to store any customization preferences where our website allows this',
                  }),
                ],
              }),
              (0, t.jsxs)('p', {
                className: 'jsx-837bfc1eb08f7108',
                children: [
                  'We may also use other services, such as',
                  ' ',
                  (0, t.jsx)(l(), {
                    href: 'https://www.google.com/intl/en/analytics/#?modal_active=none',
                    passHref: !0,
                    legacyBehavior: !0,
                    children: (0, t.jsx)(d.A, {
                      target: '_blank',
                      rel: 'noreferrer',
                      children: 'Google Analytics',
                    }),
                  }),
                  '\xa0(described below) or other third-party cookies, to assist with analyzing performance on our website. As part of providing these services, these service providers may use cookies and the technologies described below to collect and store information about your device, such as time of visit, pages visited, time spent on each page of our website, links clicked and conversion information, IP address, browser, mobile network information, and type of operating system used.',
                ],
              }),
              (0, t.jsx)('h2', {
                className: 'jsx-837bfc1eb08f7108',
                children: 'Google Analytics Cookies',
              }),
              (0, t.jsxs)('p', {
                className: 'jsx-837bfc1eb08f7108',
                children: [
                  'This website uses',
                  ' ',
                  (0, t.jsx)(l(), {
                    href: 'https://www.google.com/analytics/',
                    passHref: !0,
                    legacyBehavior: !0,
                    children: (0, t.jsx)(d.A, {
                      target: '_blank',
                      rel: 'noreferrer',
                      children: 'Google Analytics',
                    }),
                  }),
                  ', a web analytics service provided by Google, Inc. ("Google").',
                ],
              }),
              (0, t.jsx)('p', {
                className: 'jsx-837bfc1eb08f7108',
                children:
                  'We use Google Analytics to track your preferences and also to identify popular sections of our website. Use of Google Analytics in this way, enables us to adapt the content of our website more specifically to your needs and thereby improve what we can offer to you.',
              }),
              (0, t.jsx)('p', {
                className: 'jsx-837bfc1eb08f7108',
                children:
                  "Google will use this information for the purpose of evaluating your use of our website, compiling reports on website activity for website operators and providing other services relating to website activity and internet usage. Google may also transfer this information to third parties where required to do so by law, or where such third parties process the information on Google's behalf. Google will not associate your IP address with any other data held by Google.",
              }),
              (0, t.jsx)('p', {
                className: 'jsx-837bfc1eb08f7108',
                children: 'In particular Google Analytics tells us',
              }),
              (0, t.jsxs)('ol', {
                start: 1,
                className: 'jsx-837bfc1eb08f7108',
                children: [
                  (0, t.jsx)('li', {
                    className: 'jsx-837bfc1eb08f7108',
                    children: 'your IP address (last 3 digits are masked);',
                  }),
                  (0, t.jsx)('li', {
                    className: 'jsx-837bfc1eb08f7108',
                    children: 'the number of pages visited;',
                  }),
                  (0, t.jsx)('li', {
                    className: 'jsx-837bfc1eb08f7108',
                    children: 'the time and duration of the visit;',
                  }),
                  (0, t.jsx)('li', {
                    className: 'jsx-837bfc1eb08f7108',
                    children: 'your location;',
                  }),
                  (0, t.jsx)('li', {
                    className: 'jsx-837bfc1eb08f7108',
                    children: 'the website you came from (if any);',
                  }),
                  (0, t.jsx)('li', {
                    className: 'jsx-837bfc1eb08f7108',
                    children:
                      'the type of hardware you use (i.e. whether you are browsing from a desktop or a mobile device);',
                  }),
                  (0, t.jsx)('li', {
                    className: 'jsx-837bfc1eb08f7108',
                    children: 'the software used (type of browser); and',
                  }),
                  (0, t.jsx)('li', {
                    className: 'jsx-837bfc1eb08f7108',
                    children: 'your general interaction with our website.',
                  }),
                ],
              }),
              (0, t.jsx)('p', {
                className: 'jsx-837bfc1eb08f7108',
                children:
                  'As stated above, cookie-related information is not used to identify you personally, and what is compiled is only aggregate data that tells us, for example, what countries we are most popular in, but not that you live in a particular country or your precise location when you visited our website (this is because we have only half the information- we know the country the person is browsing from, but not the name of person who is browsing). In such an example Google will analyze the number of users for us, but the relevant cookies do not reveal their identities.',
              }),
              (0, t.jsxs)('p', {
                className: 'jsx-837bfc1eb08f7108',
                children: [
                  'By using this website, you consent to the processing of data about you by Google in the manner and for the purposes set out above. Google Analytics, its purpose and function is further explained on the',
                  ' ',
                  (0, t.jsx)(l(), {
                    href: 'https://www.google.com/analytics/',
                    passHref: !0,
                    legacyBehavior: !0,
                    children: (0, t.jsx)(d.A, {
                      target: '_blank',
                      rel: 'noreferrer',
                      children: 'Google Analytics website',
                    }),
                  }),
                  '.',
                ],
              }),
              (0, t.jsxs)('p', {
                className: 'jsx-837bfc1eb08f7108',
                children: [
                  "For more information about Google Analytics cookies, please see Google's help pages and privacy policy:",
                  ' ',
                  (0, t.jsx)(l(), {
                    href: 'https://www.google.com/intl/en/policies/privacy/',
                    passHref: !0,
                    legacyBehavior: !0,
                    children: (0, t.jsx)(d.A, {
                      target: '_blank',
                      rel: 'noreferrer',
                      children: "Google's Privacy Policy",
                    }),
                  }),
                  '\xa0and',
                  ' ',
                  (0, t.jsx)(l(), {
                    href: 'https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage',
                    passHref: !0,
                    legacyBehavior: !0,
                    children: (0, t.jsx)(d.A, {
                      target: '_blank',
                      rel: 'noreferrer',
                      children: 'Google Analytics Help pages',
                    }),
                  }),
                  '. For further information about the use of these cookies by Google',
                  ' ',
                  (0, t.jsx)(l(), {
                    href: 'https://support.google.com/analytics/answer/6004245',
                    passHref: !0,
                    legacyBehavior: !0,
                    children: (0, t.jsx)(d.A, {
                      target: '_blank',
                      rel: 'noreferrer',
                      children: 'click here',
                    }),
                  }),
                  '.',
                ],
              }),
              (0, t.jsx)('h2', {
                className: 'jsx-837bfc1eb08f7108',
                children:
                  "What if you don’t agree with us monitoring your use of our website (even if we don't collect your personal data)?",
              }),
              (0, t.jsx)('p', {
                className: 'jsx-837bfc1eb08f7108',
                children:
                  'Enabling these cookies is not strictly necessary for our website to work but it will provide you with a better browsing experience. You can delete or block the cookies we set, but if you do that, some features of this website may not work as intended.',
              }),
              (0, t.jsxs)('p', {
                className: 'jsx-837bfc1eb08f7108',
                children: [
                  'Most browsers are initially set to accept cookies. If you prefer, you can set your browser to refuse cookies and control and/or delete cookies as you wish – for details, see',
                  ' ',
                  (0, t.jsx)(l(), {
                    href: 'https://www.aboutcookies.org/',
                    passHref: !0,
                    legacyBehavior: !0,
                    children: (0, t.jsx)(d.A, {
                      target: '_blank',
                      rel: 'noreferrer',
                      children: 'https://aboutcookies.org',
                    }),
                  }),
                  '. You can delete all cookies that are already on your device and you can set most browsers to prevent them from being placed. You should be aware that if you do this, you may have to manually adjust some preferences every time you visit an Internet site and some services and functionalities may not work if you do not accept the cookies they send.',
                ],
              }),
              (0, t.jsx)('p', {
                className: 'jsx-837bfc1eb08f7108',
                children:
                  'Advertisers and business partners that you access on or through our website may also send you cookies. We do not control any cookies outside of our website.',
              }),
              (0, t.jsx)('p', {
                className: 'jsx-837bfc1eb08f7108',
                children:
                  'If you have any further questions regarding disabling cookies you should consult with your preferred browser’s provider or manufacturer.',
              }),
              (0, t.jsx)('p', {
                className: 'jsx-837bfc1eb08f7108',
                children:
                  'In order to implement your objection it may be necessary to install an opt-out cookie on your browser. This cookie will only indicate that you have opted out. It is important to note, that for technical reasons, the opt-out cookie will only affect the browser from which you actively object from. If you delete the cookies in your browser or use a different end device or browser, you will need to opt out again.',
              }),
              (0, t.jsxs)('p', {
                className: 'jsx-837bfc1eb08f7108',
                children: [
                  'To opt out of being tracked by Google Analytics across all websites, Google has developed Google Analytics opt-out browser add-on. If you would like to opt out of Google Analytics, you have the option of downloading and installing this browser add-on which can be found under the link:',
                  ' ',
                  (0, t.jsx)(l(), {
                    href: 'https://tools.google.com/dlpage/gaoptout',
                    passHref: !0,
                    legacyBehavior: !0,
                    children: (0, t.jsx)(d.A, {
                      target: '_blank',
                      rel: 'noreferrer',
                      children: 'https://tools.google.com/dlpage/gaoptout',
                    }),
                  }),
                  '.',
                ],
              }),
              (0, t.jsx)('h2', {
                className: 'jsx-837bfc1eb08f7108',
                children: 'Revisions to this Cookie Policy',
              }),
              (0, t.jsx)('p', {
                className: 'jsx-837bfc1eb08f7108',
                children:
                  'On this website, you can always view the latest version of our Privacy Policy and our Cookie Policy. We may modify this Cookie Policy from time to time. If we make changes to this Cookie Policy, we will provide notice of such changes, such as by sending an email notification, providing notice through our website or updating the ‘Last Updated’ date at the beginning of this Cookie Policy. The amended Cookie Policy will be effective immediately after the date it is posted. By continuing to access or use our website after the effective date, you confirm your acceptance of the revised Cookie Policy and all of the terms incorporated therein by reference. We encourage you to review our Privacy Policy and our Cookie Policy whenever you access or use our website to stay informed about our information practices and the choices available to you.',
              }),
              (0, t.jsx)('p', {
                className: 'jsx-837bfc1eb08f7108',
                children:
                  'If you do not accept changes which are made to this Cookie Policy, or take any measures described above to opt-out by removing or rejecting cookies, you may continue to use this website but accept that it may not display and/or function as intended by us. Any social media channels connected to us and third party applications will be subject to the privacy and cookie policies and practices of the relevant platform providers which, unless otherwise indicated, are not affiliated or associated with us Your exercise of any rights to opt-out may also impact how our information and content is displayed and/or accessible to you on this website and on other websites.',
              }),
              (0, t.jsx)('h2', { className: 'jsx-837bfc1eb08f7108', children: 'APPENDIX' }),
              (0, t.jsx)('p', {
                className: 'jsx-837bfc1eb08f7108',
                children:
                  'Overview of cookies placed and the consequences if the cookies are not placed.',
              }),
              (0, t.jsx)('h3', {
                className: 'jsx-837bfc1eb08f7108',
                children: 'First-party cookies',
              }),
              (0, t.jsx)('table', {
                className: 'jsx-837bfc1eb08f7108',
                children: (0, t.jsxs)('tbody', {
                  className: 'jsx-837bfc1eb08f7108',
                  children: [
                    (0, t.jsxs)('tr', {
                      className: 'jsx-837bfc1eb08f7108',
                      children: [
                        (0, t.jsx)('td', {
                          colSpan: 1,
                          rowSpan: 1,
                          className: 'jsx-837bfc1eb08f7108',
                          children: (0, t.jsx)('p', {
                            className: 'jsx-837bfc1eb08f7108',
                            children: '#',
                          }),
                        }),
                        (0, t.jsx)('td', {
                          colSpan: 1,
                          rowSpan: 1,
                          className: 'jsx-837bfc1eb08f7108',
                          children: (0, t.jsx)('p', {
                            className: 'jsx-837bfc1eb08f7108',
                            children: 'Name of cookie',
                          }),
                        }),
                        (0, t.jsx)('td', {
                          colSpan: 1,
                          rowSpan: 1,
                          className: 'jsx-837bfc1eb08f7108',
                          children: (0, t.jsx)('p', {
                            className: 'jsx-837bfc1eb08f7108',
                            children: 'Domain',
                          }),
                        }),
                        (0, t.jsx)('td', {
                          colSpan: 1,
                          rowSpan: 1,
                          className: 'jsx-837bfc1eb08f7108',
                          children: (0, t.jsx)('p', {
                            className: 'jsx-837bfc1eb08f7108',
                            children: 'Purpose(s) of cookie',
                          }),
                        }),
                        (0, t.jsx)('td', {
                          colSpan: 1,
                          rowSpan: 1,
                          className: 'jsx-837bfc1eb08f7108',
                          children: (0, t.jsx)('p', {
                            className: 'jsx-837bfc1eb08f7108',
                            children: 'Storage period of cookie',
                          }),
                        }),
                        (0, t.jsx)('td', {
                          colSpan: 1,
                          rowSpan: 1,
                          className: 'jsx-837bfc1eb08f7108',
                          children: (0, t.jsx)('p', {
                            className: 'jsx-837bfc1eb08f7108',
                            children: 'Consequences is cookie is not accepted',
                          }),
                        }),
                      ],
                    }),
                    (0, t.jsxs)('tr', {
                      className: 'jsx-837bfc1eb08f7108',
                      children: [
                        (0, t.jsx)('td', {
                          colSpan: 1,
                          rowSpan: 1,
                          className: 'jsx-837bfc1eb08f7108',
                          children: (0, t.jsx)('p', {
                            className: 'jsx-837bfc1eb08f7108',
                            children: '1',
                          }),
                        }),
                        (0, t.jsx)('td', {
                          colSpan: 1,
                          rowSpan: 1,
                          className: 'jsx-837bfc1eb08f7108',
                          children: (0, t.jsxs)('p', {
                            className: 'jsx-837bfc1eb08f7108',
                            children: ['_BEAMER_FILTER_BY_URL_', '{productID}'],
                          }),
                        }),
                        (0, t.jsx)('td', {
                          colSpan: 1,
                          rowSpan: 1,
                          className: 'jsx-837bfc1eb08f7108',
                          children: (0, t.jsx)('p', {
                            className: 'jsx-837bfc1eb08f7108',
                            children: 'app.safe.global',
                          }),
                        }),
                        (0, t.jsx)('td', {
                          colSpan: 1,
                          rowSpan: 1,
                          className: 'jsx-837bfc1eb08f7108',
                          children: (0, t.jsx)('p', {
                            className: 'jsx-837bfc1eb08f7108',
                            children: 'Stores whether to apply URL filtering on the feed.',
                          }),
                        }),
                        (0, t.jsx)('td', {
                          colSpan: 1,
                          rowSpan: 1,
                          className: 'jsx-837bfc1eb08f7108',
                          children: (0, t.jsx)('p', {
                            className: 'jsx-837bfc1eb08f7108',
                            children: '20 minutes',
                          }),
                        }),
                        (0, t.jsx)('td', {
                          colSpan: 1,
                          rowSpan: 1,
                          className: 'jsx-837bfc1eb08f7108',
                          children: (0, t.jsx)('p', {
                            className: 'jsx-837bfc1eb08f7108',
                            children: "User activity won't be tracked",
                          }),
                        }),
                      ],
                    }),
                    (0, t.jsxs)('tr', {
                      className: 'jsx-837bfc1eb08f7108',
                      children: [
                        (0, t.jsx)('td', {
                          colSpan: 1,
                          rowSpan: 1,
                          className: 'jsx-837bfc1eb08f7108',
                          children: (0, t.jsx)('p', {
                            className: 'jsx-837bfc1eb08f7108',
                            children: '2',
                          }),
                        }),
                        (0, t.jsx)('td', {
                          colSpan: 1,
                          rowSpan: 1,
                          className: 'jsx-837bfc1eb08f7108',
                          children: (0, t.jsxs)('p', {
                            className: 'jsx-837bfc1eb08f7108',
                            children: ['_BEAMER_DATE_', '{productID}'],
                          }),
                        }),
                        (0, t.jsx)('td', {
                          colSpan: 1,
                          rowSpan: 1,
                          className: 'jsx-837bfc1eb08f7108',
                          children: (0, t.jsx)('p', {
                            className: 'jsx-837bfc1eb08f7108',
                            children: 'app.safe.global',
                          }),
                        }),
                        (0, t.jsx)('td', {
                          colSpan: 1,
                          rowSpan: 1,
                          className: 'jsx-837bfc1eb08f7108',
                          children: (0, t.jsx)('p', {
                            className: 'jsx-837bfc1eb08f7108',
                            children: 'Stores the latest date in which the feed was opened.',
                          }),
                        }),
                        (0, t.jsx)('td', {
                          colSpan: 1,
                          rowSpan: 1,
                          className: 'jsx-837bfc1eb08f7108',
                          children: (0, t.jsx)('p', {
                            className: 'jsx-837bfc1eb08f7108',
                            children: '300 days',
                          }),
                        }),
                        (0, t.jsx)('td', {
                          colSpan: 1,
                          rowSpan: 1,
                          className: 'jsx-837bfc1eb08f7108',
                          children: (0, t.jsx)('p', {
                            className: 'jsx-837bfc1eb08f7108',
                            children: "User activity won't be tracked",
                          }),
                        }),
                      ],
                    }),
                    (0, t.jsxs)('tr', {
                      className: 'jsx-837bfc1eb08f7108',
                      children: [
                        (0, t.jsx)('td', {
                          colSpan: 1,
                          rowSpan: 1,
                          className: 'jsx-837bfc1eb08f7108',
                          children: (0, t.jsx)('p', {
                            className: 'jsx-837bfc1eb08f7108',
                            children: '3',
                          }),
                        }),
                        (0, t.jsx)('td', {
                          colSpan: 1,
                          rowSpan: 1,
                          className: 'jsx-837bfc1eb08f7108',
                          children: (0, t.jsxs)('p', {
                            className: 'jsx-837bfc1eb08f7108',
                            children: ['_BEAMER_LAST_POST_SHOWN_', '{productID}'],
                          }),
                        }),
                        (0, t.jsx)('td', {
                          colSpan: 1,
                          rowSpan: 1,
                          className: 'jsx-837bfc1eb08f7108',
                          children: (0, t.jsx)('p', {
                            className: 'jsx-837bfc1eb08f7108',
                            children: 'app.safe.global',
                          }),
                        }),
                        (0, t.jsx)('td', {
                          colSpan: 1,
                          rowSpan: 1,
                          className: 'jsx-837bfc1eb08f7108',
                          children: (0, t.jsx)('p', {
                            className: 'jsx-837bfc1eb08f7108',
                            children: 'Stores the ID of the last post shown as a teaser.',
                          }),
                        }),
                        (0, t.jsx)('td', {
                          colSpan: 1,
                          rowSpan: 1,
                          className: 'jsx-837bfc1eb08f7108',
                          children: (0, t.jsx)('p', {
                            className: 'jsx-837bfc1eb08f7108',
                            children: 'Session',
                          }),
                        }),
                        (0, t.jsx)('td', {
                          colSpan: 1,
                          rowSpan: 1,
                          className: 'jsx-837bfc1eb08f7108',
                          children: (0, t.jsx)('p', {
                            className: 'jsx-837bfc1eb08f7108',
                            children: "User activity won't be tracked",
                          }),
                        }),
                      ],
                    }),
                    (0, t.jsxs)('tr', {
                      className: 'jsx-837bfc1eb08f7108',
                      children: [
                        (0, t.jsx)('td', {
                          colSpan: 1,
                          rowSpan: 1,
                          className: 'jsx-837bfc1eb08f7108',
                          children: (0, t.jsx)('p', {
                            className: 'jsx-837bfc1eb08f7108',
                            children: '4',
                          }),
                        }),
                        (0, t.jsx)('td', {
                          colSpan: 1,
                          rowSpan: 1,
                          className: 'jsx-837bfc1eb08f7108',
                          children: (0, t.jsxs)('p', {
                            className: 'jsx-837bfc1eb08f7108',
                            children: ['_BEAMER_BOOSTED_ANNOUNCEMENT_DATE_', '{productID}'],
                          }),
                        }),
                        (0, t.jsx)('td', {
                          colSpan: 1,
                          rowSpan: 1,
                          className: 'jsx-837bfc1eb08f7108',
                          children: (0, t.jsx)('p', {
                            className: 'jsx-837bfc1eb08f7108',
                            children: 'app.safe.global',
                          }),
                        }),
                        (0, t.jsx)('td', {
                          colSpan: 1,
                          rowSpan: 1,
                          className: 'jsx-837bfc1eb08f7108',
                          children: (0, t.jsx)('p', {
                            className: 'jsx-837bfc1eb08f7108',
                            children:
                              'Stores the latest date in which a boosted announcement was displayed.',
                          }),
                        }),
                        (0, t.jsx)('td', {
                          colSpan: 1,
                          rowSpan: 1,
                          className: 'jsx-837bfc1eb08f7108',
                          children: (0, t.jsx)('p', {
                            className: 'jsx-837bfc1eb08f7108',
                            children: '300 days',
                          }),
                        }),
                        (0, t.jsx)('td', {
                          colSpan: 1,
                          rowSpan: 1,
                          className: 'jsx-837bfc1eb08f7108',
                          children: (0, t.jsx)('p', {
                            className: 'jsx-837bfc1eb08f7108',
                            children: "User activity won't be tracked",
                          }),
                        }),
                      ],
                    }),
                    (0, t.jsxs)('tr', {
                      className: 'jsx-837bfc1eb08f7108',
                      children: [
                        (0, t.jsx)('td', {
                          colSpan: 1,
                          rowSpan: 1,
                          className: 'jsx-837bfc1eb08f7108',
                          children: (0, t.jsx)('p', {
                            className: 'jsx-837bfc1eb08f7108',
                            children: '5',
                          }),
                        }),
                        (0, t.jsx)('td', {
                          colSpan: 1,
                          rowSpan: 1,
                          className: 'jsx-837bfc1eb08f7108',
                          children: (0, t.jsxs)('p', {
                            className: 'jsx-837bfc1eb08f7108',
                            children: ['_BEAMER_FIRST_VISIT_', '{productID}'],
                          }),
                        }),
                        (0, t.jsx)('td', {
                          colSpan: 1,
                          rowSpan: 1,
                          className: 'jsx-837bfc1eb08f7108',
                          children: (0, t.jsx)('p', {
                            className: 'jsx-837bfc1eb08f7108',
                            children: 'app.safe.global',
                          }),
                        }),
                        (0, t.jsx)('td', {
                          colSpan: 1,
                          rowSpan: 1,
                          className: 'jsx-837bfc1eb08f7108',
                          children: (0, t.jsx)('p', {
                            className: 'jsx-837bfc1eb08f7108',
                            children: 'Stores the date of this user’s first visit to the site.',
                          }),
                        }),
                        (0, t.jsx)('td', {
                          colSpan: 1,
                          rowSpan: 1,
                          className: 'jsx-837bfc1eb08f7108',
                          children: (0, t.jsx)('p', {
                            className: 'jsx-837bfc1eb08f7108',
                            children: '300 days',
                          }),
                        }),
                        (0, t.jsx)('td', {
                          colSpan: 1,
                          rowSpan: 1,
                          className: 'jsx-837bfc1eb08f7108',
                          children: (0, t.jsx)('p', {
                            className: 'jsx-837bfc1eb08f7108',
                            children: "User activity won't be tracked",
                          }),
                        }),
                      ],
                    }),
                    (0, t.jsxs)('tr', {
                      className: 'jsx-837bfc1eb08f7108',
                      children: [
                        (0, t.jsx)('td', {
                          colSpan: 1,
                          rowSpan: 1,
                          className: 'jsx-837bfc1eb08f7108',
                          children: (0, t.jsx)('p', {
                            className: 'jsx-837bfc1eb08f7108',
                            children: '6',
                          }),
                        }),
                        (0, t.jsx)('td', {
                          colSpan: 1,
                          rowSpan: 1,
                          className: 'jsx-837bfc1eb08f7108',
                          children: (0, t.jsxs)('p', {
                            className: 'jsx-837bfc1eb08f7108',
                            children: ['_BEAMER_USER_ID_', '{productID}'],
                          }),
                        }),
                        (0, t.jsx)('td', {
                          colSpan: 1,
                          rowSpan: 1,
                          className: 'jsx-837bfc1eb08f7108',
                          children: (0, t.jsx)('p', {
                            className: 'jsx-837bfc1eb08f7108',
                            children: 'app.safe.global',
                          }),
                        }),
                        (0, t.jsx)('td', {
                          colSpan: 1,
                          rowSpan: 1,
                          className: 'jsx-837bfc1eb08f7108',
                          children: (0, t.jsx)('p', {
                            className: 'jsx-837bfc1eb08f7108',
                            children: 'Stores an internal ID for this user.',
                          }),
                        }),
                        (0, t.jsx)('td', {
                          colSpan: 1,
                          rowSpan: 1,
                          className: 'jsx-837bfc1eb08f7108',
                          children: (0, t.jsx)('p', {
                            className: 'jsx-837bfc1eb08f7108',
                            children: '300 days',
                          }),
                        }),
                        (0, t.jsx)('td', {
                          colSpan: 1,
                          rowSpan: 1,
                          className: 'jsx-837bfc1eb08f7108',
                          children: (0, t.jsx)('p', {
                            className: 'jsx-837bfc1eb08f7108',
                            children: "User activity won't be tracked",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, t.jsx)('h3', {
                className: 'jsx-837bfc1eb08f7108',
                children: 'Third-party cookies',
              }),
              (0, t.jsx)('p', {
                className: 'jsx-837bfc1eb08f7108',
                children: 'The cookies from this table can be set by third-party wallets.',
              }),
              (0, t.jsx)('table', {
                className: 'jsx-837bfc1eb08f7108',
                children: (0, t.jsxs)('tbody', {
                  className: 'jsx-837bfc1eb08f7108',
                  children: [
                    (0, t.jsxs)('tr', {
                      className: 'jsx-837bfc1eb08f7108',
                      children: [
                        (0, t.jsx)('td', {
                          colSpan: 1,
                          rowSpan: 1,
                          className: 'jsx-837bfc1eb08f7108',
                          children: (0, t.jsx)('p', {
                            className: 'jsx-837bfc1eb08f7108',
                            children: '#',
                          }),
                        }),
                        (0, t.jsx)('td', {
                          colSpan: 1,
                          rowSpan: 1,
                          className: 'jsx-837bfc1eb08f7108',
                          children: (0, t.jsx)('p', {
                            className: 'jsx-837bfc1eb08f7108',
                            children: 'Name of cookie',
                          }),
                        }),
                        (0, t.jsx)('td', {
                          colSpan: 1,
                          rowSpan: 1,
                          className: 'jsx-837bfc1eb08f7108',
                          children: (0, t.jsx)('p', {
                            className: 'jsx-837bfc1eb08f7108',
                            children: 'Domain',
                          }),
                        }),
                        (0, t.jsx)('td', {
                          colSpan: 1,
                          rowSpan: 1,
                          className: 'jsx-837bfc1eb08f7108',
                          children: (0, t.jsx)('p', {
                            className: 'jsx-837bfc1eb08f7108',
                            children: 'Purpose(s) of cookie',
                          }),
                        }),
                        (0, t.jsx)('td', {
                          colSpan: 1,
                          rowSpan: 1,
                          className: 'jsx-837bfc1eb08f7108',
                          children: (0, t.jsx)('p', {
                            className: 'jsx-837bfc1eb08f7108',
                            children: 'Storage period of cookie',
                          }),
                        }),
                        (0, t.jsx)('td', {
                          colSpan: 1,
                          rowSpan: 1,
                          className: 'jsx-837bfc1eb08f7108',
                          children: (0, t.jsx)('p', {
                            className: 'jsx-837bfc1eb08f7108',
                            children: 'Consequences is cookie is not accepted',
                          }),
                        }),
                      ],
                    }),
                    (0, t.jsxs)('tr', {
                      className: 'jsx-837bfc1eb08f7108',
                      children: [
                        (0, t.jsx)('td', {
                          colSpan: 1,
                          rowSpan: 1,
                          className: 'jsx-837bfc1eb08f7108',
                          children: (0, t.jsx)('p', {
                            className: 'jsx-837bfc1eb08f7108',
                            children: '1',
                          }),
                        }),
                        (0, t.jsx)('td', {
                          colSpan: 1,
                          rowSpan: 1,
                          className: 'jsx-837bfc1eb08f7108',
                          children: (0, t.jsx)('p', {
                            className: 'jsx-837bfc1eb08f7108',
                            children: '_ga',
                          }),
                        }),
                        (0, t.jsx)('td', {
                          colSpan: 1,
                          rowSpan: 1,
                          className: 'jsx-837bfc1eb08f7108',
                          children: (0, t.jsx)('p', {
                            className: 'jsx-837bfc1eb08f7108',
                            children: 'safe.global',
                          }),
                        }),
                        (0, t.jsx)('td', {
                          colSpan: 1,
                          rowSpan: 1,
                          className: 'jsx-837bfc1eb08f7108',
                          children: (0, t.jsx)('p', {
                            className: 'jsx-837bfc1eb08f7108',
                            children: 'Used to distinguish users',
                          }),
                        }),
                        (0, t.jsx)('td', {
                          colSpan: 1,
                          rowSpan: 1,
                          className: 'jsx-837bfc1eb08f7108',
                          children: (0, t.jsx)('p', {
                            className: 'jsx-837bfc1eb08f7108',
                            children: '2 years from set/update',
                          }),
                        }),
                        (0, t.jsx)('td', {
                          colSpan: 1,
                          rowSpan: 1,
                          className: 'jsx-837bfc1eb08f7108',
                          children: (0, t.jsx)('p', {
                            className: 'jsx-837bfc1eb08f7108',
                            children: "User activity won't be tracked",
                          }),
                        }),
                      ],
                    }),
                    (0, t.jsxs)('tr', {
                      className: 'jsx-837bfc1eb08f7108',
                      children: [
                        (0, t.jsx)('td', {
                          colSpan: 1,
                          rowSpan: 1,
                          className: 'jsx-837bfc1eb08f7108',
                          children: (0, t.jsx)('p', {
                            className: 'jsx-837bfc1eb08f7108',
                            children: '2',
                          }),
                        }),
                        (0, t.jsx)('td', {
                          colSpan: 1,
                          rowSpan: 1,
                          className: 'jsx-837bfc1eb08f7108',
                          children: (0, t.jsx)('p', {
                            className: 'jsx-837bfc1eb08f7108',
                            children: '_ga',
                          }),
                        }),
                        (0, t.jsx)('td', {
                          colSpan: 1,
                          rowSpan: 1,
                          className: 'jsx-837bfc1eb08f7108',
                          children: (0, t.jsx)('p', {
                            className: 'jsx-837bfc1eb08f7108',
                            children: 'getbeamer.com',
                          }),
                        }),
                        (0, t.jsx)('td', {
                          colSpan: 1,
                          rowSpan: 1,
                          className: 'jsx-837bfc1eb08f7108',
                          children: (0, t.jsx)('p', {
                            className: 'jsx-837bfc1eb08f7108',
                            children: 'Used to distinguish users',
                          }),
                        }),
                        (0, t.jsx)('td', {
                          colSpan: 1,
                          rowSpan: 1,
                          className: 'jsx-837bfc1eb08f7108',
                          children: (0, t.jsx)('p', {
                            className: 'jsx-837bfc1eb08f7108',
                            children: '2 years from set/update',
                          }),
                        }),
                        (0, t.jsx)('td', {
                          colSpan: 1,
                          rowSpan: 1,
                          className: 'jsx-837bfc1eb08f7108',
                          children: (0, t.jsx)('p', {
                            className: 'jsx-837bfc1eb08f7108',
                            children: "User activity won't be tracked",
                          }),
                        }),
                      ],
                    }),
                    (0, t.jsxs)('tr', {
                      className: 'jsx-837bfc1eb08f7108',
                      children: [
                        (0, t.jsx)('td', {
                          colSpan: 1,
                          rowSpan: 1,
                          className: 'jsx-837bfc1eb08f7108',
                          children: (0, t.jsx)('p', {
                            className: 'jsx-837bfc1eb08f7108',
                            children: '3',
                          }),
                        }),
                        (0, t.jsx)('td', {
                          colSpan: 1,
                          rowSpan: 1,
                          className: 'jsx-837bfc1eb08f7108',
                          children: (0, t.jsx)('p', {
                            className: 'jsx-837bfc1eb08f7108',
                            children: '_gid',
                          }),
                        }),
                        (0, t.jsx)('td', {
                          colSpan: 1,
                          rowSpan: 1,
                          className: 'jsx-837bfc1eb08f7108',
                          children: (0, t.jsx)('p', {
                            className: 'jsx-837bfc1eb08f7108',
                            children: 'getbeamer.com',
                          }),
                        }),
                        (0, t.jsx)('td', {
                          colSpan: 1,
                          rowSpan: 1,
                          className: 'jsx-837bfc1eb08f7108',
                          children: (0, t.jsx)('p', {
                            className: 'jsx-837bfc1eb08f7108',
                            children: 'Used to distinguish users',
                          }),
                        }),
                        (0, t.jsx)('td', {
                          colSpan: 1,
                          rowSpan: 1,
                          className: 'jsx-837bfc1eb08f7108',
                          children: (0, t.jsx)('p', {
                            className: 'jsx-837bfc1eb08f7108',
                            children: '24 hours',
                          }),
                        }),
                        (0, t.jsx)('td', {
                          colSpan: 1,
                          rowSpan: 1,
                          className: 'jsx-837bfc1eb08f7108',
                          children: (0, t.jsx)('p', {
                            className: 'jsx-837bfc1eb08f7108',
                            children: "User activity won't be tracked",
                          }),
                        }),
                      ],
                    }),
                    (0, t.jsxs)('tr', {
                      className: 'jsx-837bfc1eb08f7108',
                      children: [
                        (0, t.jsx)('td', {
                          colSpan: 1,
                          rowSpan: 1,
                          className: 'jsx-837bfc1eb08f7108',
                          children: (0, t.jsx)('p', {
                            className: 'jsx-837bfc1eb08f7108',
                            children: '4',
                          }),
                        }),
                        (0, t.jsx)('td', {
                          colSpan: 1,
                          rowSpan: 1,
                          className: 'jsx-837bfc1eb08f7108',
                          children: (0, t.jsxs)('p', {
                            className: 'jsx-837bfc1eb08f7108',
                            children: ['_BEAMER_USER_ID_', '{productID}'],
                          }),
                        }),
                        (0, t.jsx)('td', {
                          colSpan: 1,
                          rowSpan: 1,
                          className: 'jsx-837bfc1eb08f7108',
                          children: (0, t.jsx)('p', {
                            className: 'jsx-837bfc1eb08f7108',
                            children: 'getbeamer.com',
                          }),
                        }),
                        (0, t.jsx)('td', {
                          colSpan: 1,
                          rowSpan: 1,
                          className: 'jsx-837bfc1eb08f7108',
                          children: (0, t.jsx)('p', {
                            className: 'jsx-837bfc1eb08f7108',
                            children: 'Stores an internal ID for this user.',
                          }),
                        }),
                        (0, t.jsx)('td', {
                          colSpan: 1,
                          rowSpan: 1,
                          className: 'jsx-837bfc1eb08f7108',
                          children: (0, t.jsx)('p', {
                            className: 'jsx-837bfc1eb08f7108',
                            children: '300 days',
                          }),
                        }),
                        (0, t.jsx)('td', {
                          colSpan: 1,
                          rowSpan: 1,
                          className: 'jsx-837bfc1eb08f7108',
                          children: (0, t.jsx)('p', {
                            className: 'jsx-837bfc1eb08f7108',
                            children: "User activity won't be tracked",
                          }),
                        }),
                      ],
                    }),
                    (0, t.jsxs)('tr', {
                      className: 'jsx-837bfc1eb08f7108',
                      children: [
                        (0, t.jsx)('td', {
                          colSpan: 1,
                          rowSpan: 1,
                          className: 'jsx-837bfc1eb08f7108',
                          children: (0, t.jsx)('p', {
                            className: 'jsx-837bfc1eb08f7108',
                            children: '5',
                          }),
                        }),
                        (0, t.jsx)('td', {
                          colSpan: 1,
                          rowSpan: 1,
                          className: 'jsx-837bfc1eb08f7108',
                          children: (0, t.jsx)('p', {
                            className: 'jsx-837bfc1eb08f7108',
                            children: 'JSESSIONID',
                          }),
                        }),
                        (0, t.jsx)('td', {
                          colSpan: 1,
                          rowSpan: 1,
                          className: 'jsx-837bfc1eb08f7108',
                          children: (0, t.jsx)('p', {
                            className: 'jsx-837bfc1eb08f7108',
                            children: 'app.getbeamer.com',
                          }),
                        }),
                        (0, t.jsx)('td', {
                          colSpan: 1,
                          rowSpan: 1,
                          className: 'jsx-837bfc1eb08f7108',
                          children: (0, t.jsx)('p', {
                            className: 'jsx-837bfc1eb08f7108',
                            children: 'Stores an internal ID for this user.',
                          }),
                        }),
                        (0, t.jsx)('td', {
                          colSpan: 1,
                          rowSpan: 1,
                          className: 'jsx-837bfc1eb08f7108',
                          children: (0, t.jsx)('p', {
                            className: 'jsx-837bfc1eb08f7108',
                            children: 'Session',
                          }),
                        }),
                        (0, t.jsx)('td', {
                          colSpan: 1,
                          rowSpan: 1,
                          className: 'jsx-837bfc1eb08f7108',
                          children: (0, t.jsx)('p', {
                            className: 'jsx-837bfc1eb08f7108',
                            children: "User activity won't be tracked",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          }),
        u = () => {
          let e = (0, h.H)();
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)(c(), {
                children: (0, t.jsx)('title', { children: ''.concat(b.Az, ' – Cookie policy') }),
              }),
              (0, t.jsx)('main', { children: e && (0, t.jsx)(p, {}) }),
            ],
          });
        };
    },
    52604: (e, s, a) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/cookie',
        function () {
          return a(49588);
        },
      ]);
    },
    72552: () => {},
    94250: (e, s, a) => {
      'use strict';
      e.exports = a(28817).style;
    },
  },
  (e) => {
    var s = (s) => e((e.s = s));
    e.O(0, [636, 6593, 8792], () => s(52604)), (_N_E = e.O());
  },
]);
//# sourceMappingURL=cookie-7d4836e3526d3723.js.map
