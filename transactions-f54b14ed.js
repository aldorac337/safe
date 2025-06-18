import { i as f, d as a, x as d } from './index-6823ac84.js';
import { c as p } from './if-defined-5ea4ccf2.js';
import './index-0b65e1fc.js';
import './index-1a8d3892.js';
import './index-f6d75cf3.js';
import './index-66bb34ae.js';
import './index-ac2c30fa.js';
import './index-61a8f674.js';
(function () {
  try {
    var e =
        typeof window < 'u'
          ? window
          : typeof global < 'u'
            ? global
            : typeof globalThis < 'u'
              ? globalThis
              : typeof self < 'u'
                ? self
                : {},
      t = new e.Error().stack;
    t &&
      ((e._sentryDebugIds = e._sentryDebugIds || {}),
      (e._sentryDebugIds[t] = 'b3131321-72c0-47c4-994a-90c9287305dc'),
      (e._sentryDebugIdIdentifier = 'sentry-dbid-b3131321-72c0-47c4-994a-90c9287305dc'));
  } catch {}
})();
const m = f`
  :host > wui-flex:first-child {
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }
`;
var u =
  (globalThis && globalThis.__decorate) ||
  function (e, t, o, n) {
    var r = arguments.length,
      i = r < 3 ? t : n === null ? (n = Object.getOwnPropertyDescriptor(t, o)) : n,
      l;
    if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
      i = Reflect.decorate(e, t, o, n);
    else
      for (var s = e.length - 1; s >= 0; s--)
        (l = e[s]) && (i = (r < 3 ? l(i) : r > 3 ? l(t, o, i) : l(t, o)) || i);
    return r > 3 && i && Object.defineProperty(t, o, i), i;
  };
let c = class extends a {
  render() {
    return d`
      <wui-flex flexDirection="column" .padding=${['0', 'm', 'm', 'm']} gap="s">
        <w3m-activity-list page="activity"></w3m-activity-list>
      </wui-flex>
    `;
  }
};
c.styles = m;
c = u([p('w3m-transactions-view')], c);
export { c as W3mTransactionsView };
