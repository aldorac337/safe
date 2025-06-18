import { a3 as n } from './index-6823ac84.js';
import { a as o, f as h } from './if-defined-5ea4ccf2.js';
(function () {
  try {
    var t =
        typeof window < 'u'
          ? window
          : typeof global < 'u'
            ? global
            : typeof globalThis < 'u'
              ? globalThis
              : typeof self < 'u'
                ? self
                : {},
      s = new t.Error().stack;
    s &&
      ((t._sentryDebugIds = t._sentryDebugIds || {}),
      (t._sentryDebugIds[s] = '35b1f1b7-5c8b-478a-9b50-4965bbbc4b19'),
      (t._sentryDebugIdIdentifier = 'sentry-dbid-35b1f1b7-5c8b-478a-9b50-4965bbbc4b19'));
  } catch {}
})();
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const b = () => new d();
class d {}
const i = new WeakMap(),
  c = o(
    class extends h {
      render(t) {
        return n;
      }
      update(t, [s]) {
        const e = s !== this.G;
        return (
          e && this.G !== void 0 && this.rt(void 0),
          (e || this.lt !== this.ct) &&
            ((this.G = s), (this.ht = t.options?.host), this.rt((this.ct = t.element))),
          n
        );
      }
      rt(t) {
        if ((this.isConnected || (t = void 0), typeof this.G == 'function')) {
          const s = this.ht ?? globalThis;
          let e = i.get(s);
          e === void 0 && ((e = new WeakMap()), i.set(s, e)),
            e.get(this.G) !== void 0 && this.G.call(this.ht, void 0),
            e.set(this.G, t),
            t !== void 0 && this.G.call(this.ht, t);
        } else this.G.value = t;
      }
      get lt() {
        return typeof this.G == 'function'
          ? i.get(this.ht ?? globalThis)?.get(this.G)
          : this.G?.value;
      }
      disconnected() {
        this.lt === this.ct && this.rt(void 0);
      }
      reconnected() {
        this.rt(this.ct);
      }
    }
  );
export { b as e, c as n };
