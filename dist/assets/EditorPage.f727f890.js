import {
  q as _,
  s as j,
  u as G,
  v as C,
  o as x,
  f as D,
  g,
  x as h,
  y as Q,
  z as X,
  F as E,
  r as Y,
  t as Z,
} from './vendor.076dd484.js';
const P = typeof window != 'undefined',
  R = e => typeof e == 'function',
  ee = () => +Date.now();
function te(e, t) {
  function r(...n) {
    e(() => t.apply(this, n), { fn: t, thisArg: this, args: n });
  }
  return r;
}
const I = e => e();
function re(e = I) {
  const t = _(!0);
  function r() {
    t.value = !1;
  }
  function n() {
    t.value = !0;
  }
  return {
    isActive: t,
    pause: r,
    resume: n,
    eventFilter: (...c) => {
      t.value && e(...c);
    },
  };
}
var ne = Object.defineProperty,
  ae = Object.defineProperties,
  oe = Object.getOwnPropertyDescriptors,
  $ = Object.getOwnPropertySymbols,
  U = Object.prototype.hasOwnProperty,
  N = Object.prototype.propertyIsEnumerable,
  A = (e, t, r) =>
    t in e
      ? ne(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  se = (e, t) => {
    for (var r in t || (t = {})) U.call(t, r) && A(e, r, t[r]);
    if ($) for (var r of $(t)) N.call(t, r) && A(e, r, t[r]);
    return e;
  },
  le = (e, t) => ae(e, oe(t)),
  ie = (e, t) => {
    var r = {};
    for (var n in e) U.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && $)
      for (var n of $(e)) t.indexOf(n) < 0 && N.call(e, n) && (r[n] = e[n]);
    return r;
  };
function ue(e, t, r = {}) {
  const n = r,
    { eventFilter: d = I } = n,
    c = ie(n, ['eventFilter']),
    l = te(d, t);
  let a, o, s;
  if (c.flush === 'sync') {
    const i = _(!1);
    (o = () => {}),
      (a = u => {
        (i.value = !0), u(), (i.value = !1);
      }),
      (s = j(
        e,
        (...u) => {
          i.value || l(...u);
        },
        c,
      ));
  } else {
    const i = [],
      u = _(0),
      v = _(0);
    (o = () => {
      u.value = v.value;
    }),
      i.push(
        j(
          e,
          () => {
            v.value++;
          },
          le(se({}, c), { flush: 'sync' }),
        ),
      ),
      (a = f => {
        const m = v.value;
        f(), (u.value += v.value - m);
      }),
      i.push(
        j(
          e,
          (...f) => {
            const m = u.value > 0 && u.value === v.value;
            (u.value = 0), (v.value = 0), !m && l(...f);
          },
          c,
        ),
      ),
      (s = () => {
        i.forEach(f => f());
      });
  }
  return { stop: s, ignoreUpdates: a, ignorePrevAsyncUpdates: o };
}
P && window.document;
P && window.navigator;
P && window.location;
const T = '__vueuse_ssr_handlers__';
globalThis[T] = globalThis[T] || {};
const V = e => JSON.parse(JSON.stringify(e)),
  k = e => e,
  ce = (e, t) => (e.value = t);
function ve(e) {
  return e ? (R(e) ? e : V) : k;
}
function fe(e) {
  return e ? (R(e) ? e : V) : k;
}
function pe(e, t = {}) {
  const {
    clone: r = !1,
    dump: n = ve(r),
    parse: d = fe(r),
    setSource: c = ce,
  } = t;
  function l() {
    return G({ snapshot: n(e.value), timestamp: ee() });
  }
  const a = _(l()),
    o = _([]),
    s = _([]),
    i = p => {
      c(e, d(p.snapshot)), (a.value = p);
    },
    u = () => {
      o.value.unshift(a.value),
        (a.value = l()),
        t.capacity &&
          o.value.length > t.capacity &&
          o.value.splice(t.capacity, 1 / 0),
        s.value.length && s.value.splice(0, s.value.length);
    },
    v = () => {
      o.value.splice(0, o.value.length), s.value.splice(0, s.value.length);
    },
    f = () => {
      const p = o.value.shift();
      p && (s.value.unshift(a.value), i(p));
    },
    m = () => {
      const p = s.value.shift();
      p && (o.value.unshift(a.value), i(p));
    },
    b = () => {
      i(a.value);
    },
    w = C(() => [a.value, ...o.value]),
    S = C(() => o.value.length > 0),
    F = C(() => s.value.length > 0);
  return {
    source: e,
    undoStack: o,
    redoStack: s,
    last: a,
    history: w,
    canUndo: S,
    canRedo: F,
    clear: v,
    commit: u,
    reset: b,
    undo: f,
    redo: m,
  };
}
var de = Object.defineProperty,
  _e = Object.defineProperties,
  me = Object.getOwnPropertyDescriptors,
  B = Object.getOwnPropertySymbols,
  we = Object.prototype.hasOwnProperty,
  ye = Object.prototype.propertyIsEnumerable,
  H = (e, t, r) =>
    t in e
      ? de(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  J = (e, t) => {
    for (var r in t || (t = {})) we.call(t, r) && H(e, r, t[r]);
    if (B) for (var r of B(t)) ye.call(t, r) && H(e, r, t[r]);
    return e;
  },
  M = (e, t) => _e(e, me(t));
function ge(e, t = {}) {
  const { deep: r = !1, flush: n = 'pre', eventFilter: d } = t,
    { eventFilter: c, pause: l, resume: a, isActive: o } = re(d),
    {
      ignoreUpdates: s,
      ignorePrevAsyncUpdates: i,
      stop: u,
    } = ue(e, w, { deep: r, flush: n, eventFilter: c });
  function v(y, O) {
    i(),
      s(() => {
        y.value = O;
      });
  }
  const f = pe(e, M(J({}, t), { clone: t.clone || r, setSource: v })),
    { clear: m, commit: b } = f;
  function w() {
    i(), b();
  }
  function S(y) {
    a(), y && w();
  }
  function F(y) {
    let O = !1;
    const L = () => (O = !0);
    s(() => {
      y(L);
    }),
      O || w();
  }
  function p() {
    u(), m();
  }
  return M(J({}, f), {
    isTracking: o,
    pause: l,
    resume: S,
    commit: w,
    batch: F,
    dispose: p,
  });
}
var W, q;
P &&
  (window == null ? void 0 : window.navigator) &&
  ((W = window == null ? void 0 : window.navigator) == null
    ? void 0
    : W.platform) &&
  /iP(ad|hone|od)/.test(
    (q = window == null ? void 0 : window.navigator) == null
      ? void 0
      : q.platform,
  );
var he = Object.defineProperty,
  z = Object.getOwnPropertySymbols,
  Oe = Object.prototype.hasOwnProperty,
  Pe = Object.prototype.propertyIsEnumerable,
  K = (e, t, r) =>
    t in e
      ? he(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  $e = (e, t) => {
    for (var r in t || (t = {})) Oe.call(t, r) && K(e, r, t[r]);
    if (z) for (var r of z(t)) Pe.call(t, r) && K(e, r, t[r]);
    return e;
  };
const be = { top: 0, left: 0, bottom: 0, right: 0, height: 0, width: 0 };
$e({ text: '' }, be);
const Fe = {
  setup(e) {
    const t = _(''),
      { history: r, undo: n, redo: d } = ge(t, { deep: !0, capacity: 5 });
    return (c, l) => (
      x(),
      D(
        E,
        null,
        [
          g('p', null, [
            g(
              'button',
              { onClick: l[0] || (l[0] = (...a) => h(n) && h(n)(...a)) },
              'Undo',
            ),
            g(
              'button',
              { onClick: l[1] || (l[1] = (...a) => h(d) && h(d)(...a)) },
              'Redo',
            ),
          ]),
          Q(
            g(
              'textarea',
              { 'onUpdate:modelValue': l[2] || (l[2] = a => (t.value = a)) },
              null,
              512,
            ),
            [[X, t.value]],
          ),
          g('ul', null, [
            (x(!0),
            D(
              E,
              null,
              Y(h(r), a => (x(), D('li', { key: a.timestamp }, Z(a), 1))),
              128,
            )),
          ]),
        ],
        64,
      )
    );
  },
};
export { Fe as default };
