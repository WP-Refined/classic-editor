var Pf = Object.defineProperty,
  Af = Object.defineProperties;
var If = Object.getOwnPropertyDescriptors;
var $r = Object.getOwnPropertySymbols;
var Vo = Object.prototype.hasOwnProperty,
  jo = Object.prototype.propertyIsEnumerable;
var Bo = (e, t, n) =>
    t in e
      ? Pf(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  U = (e, t) => {
    for (var n in t || (t = {})) Vo.call(t, n) && Bo(e, n, t[n]);
    if ($r) for (var n of $r(t)) jo.call(t, n) && Bo(e, n, t[n]);
    return e;
  },
  Et = (e, t) => Af(e, If(t));
var Zs = (e, t) => {
  var n = {};
  for (var r in e) Vo.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && $r)
    for (var r of $r(e)) t.indexOf(r) < 0 && jo.call(e, r) && (n[r] = e[r]);
  return n;
};
function Ys(e, t) {
  const n = Object.create(null),
    r = e.split(',');
  for (let s = 0; s < r.length; s++) n[r[s]] = !0;
  return t ? s => !!n[s.toLowerCase()] : s => !!n[s];
}
const Nf =
    'itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly',
  kf = Ys(Nf);
function qo(e) {
  return !!e || e === '';
}
function Js(e) {
  if (V(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n],
        s = Ie(r) ? $f(r) : Js(r);
      if (s) for (const i in s) t[i] = s[i];
    }
    return t;
  } else {
    if (Ie(e)) return e;
    if (Pe(e)) return e;
  }
}
const Mf = /;(?![^(]*\))/g,
  Rf = /:(.+)/;
function $f(e) {
  const t = {};
  return (
    e.split(Mf).forEach(n => {
      if (n) {
        const r = n.split(Rf);
        r.length > 1 && (t[r[0].trim()] = r[1].trim());
      }
    }),
    t
  );
}
function Pn(e) {
  let t = '';
  if (Ie(e)) t = e;
  else if (V(e))
    for (let n = 0; n < e.length; n++) {
      const r = Pn(e[n]);
      r && (t += r + ' ');
    }
  else if (Pe(e)) for (const n in e) e[n] && (t += n + ' ');
  return t.trim();
}
const De = e =>
    e == null
      ? ''
      : V(e) || (Pe(e) && (e.toString === Yo || !W(e.toString)))
      ? JSON.stringify(e, Wo, 2)
      : String(e),
  Wo = (e, t) =>
    t && t.__v_isRef
      ? Wo(e, t.value)
      : In(t)
      ? {
          [`Map(${t.size})`]: [...t.entries()].reduce(
            (n, [r, s]) => ((n[`${r} =>`] = s), n),
            {},
          ),
        }
      : zo(t)
      ? { [`Set(${t.size})`]: [...t.values()] }
      : Pe(t) && !V(t) && !Jo(t)
      ? String(t)
      : t,
  fe = {},
  An = [],
  ft = () => {},
  Df = () => !1,
  Ff = /^on[^a-z]/,
  Dr = e => Ff.test(e),
  Ks = e => e.startsWith('onUpdate:'),
  Ue = Object.assign,
  Gs = (e, t) => {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1);
  },
  Lf = Object.prototype.hasOwnProperty,
  ne = (e, t) => Lf.call(e, t),
  V = Array.isArray,
  In = e => Fr(e) === '[object Map]',
  zo = e => Fr(e) === '[object Set]',
  W = e => typeof e == 'function',
  Ie = e => typeof e == 'string',
  Qs = e => typeof e == 'symbol',
  Pe = e => e !== null && typeof e == 'object',
  Zo = e => Pe(e) && W(e.then) && W(e.catch),
  Yo = Object.prototype.toString,
  Fr = e => Yo.call(e),
  Uf = e => Fr(e).slice(8, -1),
  Jo = e => Fr(e) === '[object Object]',
  Xs = e => Ie(e) && e !== 'NaN' && e[0] !== '-' && '' + parseInt(e, 10) === e,
  Lr = Ys(
    ',key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted',
  ),
  Ur = e => {
    const t = Object.create(null);
    return n => t[n] || (t[n] = e(n));
  },
  Hf = /-(\w)/g,
  Tt = Ur(e => e.replace(Hf, (t, n) => (n ? n.toUpperCase() : ''))),
  Vf = /\B([A-Z])/g,
  Nn = Ur(e => e.replace(Vf, '-$1').toLowerCase()),
  Hr = Ur(e => e.charAt(0).toUpperCase() + e.slice(1)),
  Vr = Ur(e => (e ? `on${Hr(e)}` : '')),
  ir = (e, t) => !Object.is(e, t),
  jr = (e, t) => {
    for (let n = 0; n < e.length; n++) e[n](t);
  },
  Br = (e, t, n) => {
    Object.defineProperty(e, t, { configurable: !0, enumerable: !1, value: n });
  },
  ei = e => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t;
  };
let Ko;
const jf = () =>
  Ko ||
  (Ko =
    typeof globalThis != 'undefined'
      ? globalThis
      : typeof self != 'undefined'
      ? self
      : typeof window != 'undefined'
      ? window
      : typeof global != 'undefined'
      ? global
      : {});
let Xt;
const qr = [];
class Bf {
  constructor(t = !1) {
    (this.active = !0),
      (this.effects = []),
      (this.cleanups = []),
      !t &&
        Xt &&
        ((this.parent = Xt),
        (this.index = (Xt.scopes || (Xt.scopes = [])).push(this) - 1));
  }
  run(t) {
    if (this.active)
      try {
        return this.on(), t();
      } finally {
        this.off();
      }
  }
  on() {
    this.active && (qr.push(this), (Xt = this));
  }
  off() {
    this.active && (qr.pop(), (Xt = qr[qr.length - 1]));
  }
  stop(t) {
    if (this.active) {
      if (
        (this.effects.forEach(n => n.stop()),
        this.cleanups.forEach(n => n()),
        this.scopes && this.scopes.forEach(n => n.stop(!0)),
        this.parent && !t)
      ) {
        const n = this.parent.scopes.pop();
        n &&
          n !== this &&
          ((this.parent.scopes[this.index] = n), (n.index = this.index));
      }
      this.active = !1;
    }
  }
}
function qf(e, t) {
  (t = t || Xt), t && t.active && t.effects.push(e);
}
const ti = e => {
    const t = new Set(e);
    return (t.w = 0), (t.n = 0), t;
  },
  Go = e => (e.w & $t) > 0,
  Qo = e => (e.n & $t) > 0,
  Wf = ({ deps: e }) => {
    if (e.length) for (let t = 0; t < e.length; t++) e[t].w |= $t;
  },
  zf = e => {
    const { deps: t } = e;
    if (t.length) {
      let n = 0;
      for (let r = 0; r < t.length; r++) {
        const s = t[r];
        Go(s) && !Qo(s) ? s.delete(e) : (t[n++] = s),
          (s.w &= ~$t),
          (s.n &= ~$t);
      }
      t.length = n;
    }
  },
  ni = new WeakMap();
let or = 0,
  $t = 1;
const ri = 30,
  ar = [];
let en;
const tn = Symbol(''),
  si = Symbol('');
class ii {
  constructor(t, n = null, r) {
    (this.fn = t),
      (this.scheduler = n),
      (this.active = !0),
      (this.deps = []),
      qf(this, r);
  }
  run() {
    if (!this.active) return this.fn();
    if (!ar.includes(this))
      try {
        return (
          ar.push((en = this)),
          Zf(),
          ($t = 1 << ++or),
          or <= ri ? Wf(this) : Xo(this),
          this.fn()
        );
      } finally {
        or <= ri && zf(this), ($t = 1 << --or), nn(), ar.pop();
        const t = ar.length;
        en = t > 0 ? ar[t - 1] : void 0;
      }
  }
  stop() {
    this.active && (Xo(this), this.onStop && this.onStop(), (this.active = !1));
  }
}
function Xo(e) {
  const { deps: t } = e;
  if (t.length) {
    for (let n = 0; n < t.length; n++) t[n].delete(e);
    t.length = 0;
  }
}
let kn = !0;
const oi = [];
function Mn() {
  oi.push(kn), (kn = !1);
}
function Zf() {
  oi.push(kn), (kn = !0);
}
function nn() {
  const e = oi.pop();
  kn = e === void 0 ? !0 : e;
}
function Ge(e, t, n) {
  if (!ea()) return;
  let r = ni.get(e);
  r || ni.set(e, (r = new Map()));
  let s = r.get(n);
  s || r.set(n, (s = ti())), ta(s);
}
function ea() {
  return kn && en !== void 0;
}
function ta(e, t) {
  let n = !1;
  or <= ri ? Qo(e) || ((e.n |= $t), (n = !Go(e))) : (n = !e.has(en)),
    n && (e.add(en), en.deps.push(e));
}
function At(e, t, n, r, s, i) {
  const o = ni.get(e);
  if (!o) return;
  let a = [];
  if (t === 'clear') a = [...o.values()];
  else if (n === 'length' && V(e))
    o.forEach((l, u) => {
      (u === 'length' || u >= r) && a.push(l);
    });
  else
    switch ((n !== void 0 && a.push(o.get(n)), t)) {
      case 'add':
        V(e)
          ? Xs(n) && a.push(o.get('length'))
          : (a.push(o.get(tn)), In(e) && a.push(o.get(si)));
        break;
      case 'delete':
        V(e) || (a.push(o.get(tn)), In(e) && a.push(o.get(si)));
        break;
      case 'set':
        In(e) && a.push(o.get(tn));
        break;
    }
  if (a.length === 1) a[0] && ai(a[0]);
  else {
    const l = [];
    for (const u of a) u && l.push(...u);
    ai(ti(l));
  }
}
function ai(e, t) {
  for (const n of V(e) ? e : [...e])
    (n !== en || n.allowRecurse) && (n.scheduler ? n.scheduler() : n.run());
}
const Yf = Ys('__proto__,__v_isRef,__isVue'),
  na = new Set(
    Object.getOwnPropertyNames(Symbol)
      .map(e => Symbol[e])
      .filter(Qs),
  ),
  Jf = li(),
  Kf = li(!1, !0),
  Gf = li(!0),
  ra = Qf();
function Qf() {
  const e = {};
  return (
    ['includes', 'indexOf', 'lastIndexOf'].forEach(t => {
      e[t] = function (...n) {
        const r = se(this);
        for (let i = 0, o = this.length; i < o; i++) Ge(r, 'get', i + '');
        const s = r[t](...n);
        return s === -1 || s === !1 ? r[t](...n.map(se)) : s;
      };
    }),
    ['push', 'pop', 'shift', 'unshift', 'splice'].forEach(t => {
      e[t] = function (...n) {
        Mn();
        const r = se(this)[t].apply(this, n);
        return nn(), r;
      };
    }),
    e
  );
}
function li(e = !1, t = !1) {
  return function (r, s, i) {
    if (s === '__v_isReactive') return !e;
    if (s === '__v_isReadonly') return e;
    if (s === '__v_raw' && i === (e ? (t ? md : da) : t ? fa : ca).get(r))
      return r;
    const o = V(r);
    if (!e && o && ne(ra, s)) return Reflect.get(ra, s, i);
    const a = Reflect.get(r, s, i);
    return (Qs(s) ? na.has(s) : Yf(s)) || (e || Ge(r, 'get', s), t)
      ? a
      : He(a)
      ? !o || !Xs(s)
        ? a.value
        : a
      : Pe(a)
      ? e
        ? ha(a)
        : Rn(a)
      : a;
  };
}
const Xf = sa(),
  ed = sa(!0);
function sa(e = !1) {
  return function (n, r, s, i) {
    let o = n[r];
    if (!e && !di(s) && ((s = se(s)), (o = se(o)), !V(n) && He(o) && !He(s)))
      return (o.value = s), !0;
    const a = V(n) && Xs(r) ? Number(r) < n.length : ne(n, r),
      l = Reflect.set(n, r, s, i);
    return (
      n === se(i) && (a ? ir(s, o) && At(n, 'set', r, s) : At(n, 'add', r, s)),
      l
    );
  };
}
function td(e, t) {
  const n = ne(e, t);
  e[t];
  const r = Reflect.deleteProperty(e, t);
  return r && n && At(e, 'delete', t, void 0), r;
}
function nd(e, t) {
  const n = Reflect.has(e, t);
  return (!Qs(t) || !na.has(t)) && Ge(e, 'has', t), n;
}
function rd(e) {
  return Ge(e, 'iterate', V(e) ? 'length' : tn), Reflect.ownKeys(e);
}
const ia = { get: Jf, set: Xf, deleteProperty: td, has: nd, ownKeys: rd },
  sd = {
    get: Gf,
    set(e, t) {
      return !0;
    },
    deleteProperty(e, t) {
      return !0;
    },
  },
  id = Ue({}, ia, { get: Kf, set: ed }),
  ui = e => e,
  Wr = e => Reflect.getPrototypeOf(e);
function zr(e, t, n = !1, r = !1) {
  e = e.__v_raw;
  const s = se(e),
    i = se(t);
  t !== i && !n && Ge(s, 'get', t), !n && Ge(s, 'get', i);
  const { has: o } = Wr(s),
    a = r ? ui : n ? mi : lr;
  if (o.call(s, t)) return a(e.get(t));
  if (o.call(s, i)) return a(e.get(i));
  e !== s && e.get(t);
}
function Zr(e, t = !1) {
  const n = this.__v_raw,
    r = se(n),
    s = se(e);
  return (
    e !== s && !t && Ge(r, 'has', e),
    !t && Ge(r, 'has', s),
    e === s ? n.has(e) : n.has(e) || n.has(s)
  );
}
function Yr(e, t = !1) {
  return (
    (e = e.__v_raw), !t && Ge(se(e), 'iterate', tn), Reflect.get(e, 'size', e)
  );
}
function oa(e) {
  e = se(e);
  const t = se(this);
  return Wr(t).has.call(t, e) || (t.add(e), At(t, 'add', e, e)), this;
}
function aa(e, t) {
  t = se(t);
  const n = se(this),
    { has: r, get: s } = Wr(n);
  let i = r.call(n, e);
  i || ((e = se(e)), (i = r.call(n, e)));
  const o = s.call(n, e);
  return (
    n.set(e, t), i ? ir(t, o) && At(n, 'set', e, t) : At(n, 'add', e, t), this
  );
}
function la(e) {
  const t = se(this),
    { has: n, get: r } = Wr(t);
  let s = n.call(t, e);
  s || ((e = se(e)), (s = n.call(t, e))), r && r.call(t, e);
  const i = t.delete(e);
  return s && At(t, 'delete', e, void 0), i;
}
function ua() {
  const e = se(this),
    t = e.size !== 0,
    n = e.clear();
  return t && At(e, 'clear', void 0, void 0), n;
}
function Jr(e, t) {
  return function (r, s) {
    const i = this,
      o = i.__v_raw,
      a = se(o),
      l = t ? ui : e ? mi : lr;
    return (
      !e && Ge(a, 'iterate', tn), o.forEach((u, c) => r.call(s, l(u), l(c), i))
    );
  };
}
function Kr(e, t, n) {
  return function (...r) {
    const s = this.__v_raw,
      i = se(s),
      o = In(i),
      a = e === 'entries' || (e === Symbol.iterator && o),
      l = e === 'keys' && o,
      u = s[e](...r),
      c = n ? ui : t ? mi : lr;
    return (
      !t && Ge(i, 'iterate', l ? si : tn),
      {
        next() {
          const { value: f, done: h } = u.next();
          return h
            ? { value: f, done: h }
            : { value: a ? [c(f[0]), c(f[1])] : c(f), done: h };
        },
        [Symbol.iterator]() {
          return this;
        },
      }
    );
  };
}
function Dt(e) {
  return function (...t) {
    return e === 'delete' ? !1 : this;
  };
}
function od() {
  const e = {
      get(i) {
        return zr(this, i);
      },
      get size() {
        return Yr(this);
      },
      has: Zr,
      add: oa,
      set: aa,
      delete: la,
      clear: ua,
      forEach: Jr(!1, !1),
    },
    t = {
      get(i) {
        return zr(this, i, !1, !0);
      },
      get size() {
        return Yr(this);
      },
      has: Zr,
      add: oa,
      set: aa,
      delete: la,
      clear: ua,
      forEach: Jr(!1, !0),
    },
    n = {
      get(i) {
        return zr(this, i, !0);
      },
      get size() {
        return Yr(this, !0);
      },
      has(i) {
        return Zr.call(this, i, !0);
      },
      add: Dt('add'),
      set: Dt('set'),
      delete: Dt('delete'),
      clear: Dt('clear'),
      forEach: Jr(!0, !1),
    },
    r = {
      get(i) {
        return zr(this, i, !0, !0);
      },
      get size() {
        return Yr(this, !0);
      },
      has(i) {
        return Zr.call(this, i, !0);
      },
      add: Dt('add'),
      set: Dt('set'),
      delete: Dt('delete'),
      clear: Dt('clear'),
      forEach: Jr(!0, !0),
    };
  return (
    ['keys', 'values', 'entries', Symbol.iterator].forEach(i => {
      (e[i] = Kr(i, !1, !1)),
        (n[i] = Kr(i, !0, !1)),
        (t[i] = Kr(i, !1, !0)),
        (r[i] = Kr(i, !0, !0));
    }),
    [e, n, t, r]
  );
}
const [ad, ld, ud, cd] = od();
function ci(e, t) {
  const n = t ? (e ? cd : ud) : e ? ld : ad;
  return (r, s, i) =>
    s === '__v_isReactive'
      ? !e
      : s === '__v_isReadonly'
      ? e
      : s === '__v_raw'
      ? r
      : Reflect.get(ne(n, s) && s in r ? n : r, s, i);
}
const fd = { get: ci(!1, !1) },
  dd = { get: ci(!1, !0) },
  hd = { get: ci(!0, !1) },
  ca = new WeakMap(),
  fa = new WeakMap(),
  da = new WeakMap(),
  md = new WeakMap();
function pd(e) {
  switch (e) {
    case 'Object':
    case 'Array':
      return 1;
    case 'Map':
    case 'Set':
    case 'WeakMap':
    case 'WeakSet':
      return 2;
    default:
      return 0;
  }
}
function gd(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : pd(Uf(e));
}
function Rn(e) {
  return e && e.__v_isReadonly ? e : fi(e, !1, ia, fd, ca);
}
function vd(e) {
  return fi(e, !1, id, dd, fa);
}
function ha(e) {
  return fi(e, !0, sd, hd, da);
}
function fi(e, t, n, r, s) {
  if (!Pe(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e;
  const i = s.get(e);
  if (i) return i;
  const o = gd(e);
  if (o === 0) return e;
  const a = new Proxy(e, o === 2 ? r : n);
  return s.set(e, a), a;
}
function $n(e) {
  return di(e) ? $n(e.__v_raw) : !!(e && e.__v_isReactive);
}
function di(e) {
  return !!(e && e.__v_isReadonly);
}
function ma(e) {
  return $n(e) || di(e);
}
function se(e) {
  const t = e && e.__v_raw;
  return t ? se(t) : e;
}
function hi(e) {
  return Br(e, '__v_skip', !0), e;
}
const lr = e => (Pe(e) ? Rn(e) : e),
  mi = e => (Pe(e) ? ha(e) : e);
function pa(e) {
  ea() && ((e = se(e)), e.dep || (e.dep = ti()), ta(e.dep));
}
function ga(e, t) {
  (e = se(e)), e.dep && ai(e.dep);
}
function He(e) {
  return Boolean(e && e.__v_isRef === !0);
}
function oe(e) {
  return va(e, !1);
}
function yd(e) {
  return va(e, !0);
}
function va(e, t) {
  return He(e) ? e : new wd(e, t);
}
class wd {
  constructor(t, n) {
    (this._shallow = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this._rawValue = n ? t : se(t)),
      (this._value = n ? t : lr(t));
  }
  get value() {
    return pa(this), this._value;
  }
  set value(t) {
    (t = this._shallow ? t : se(t)),
      ir(t, this._rawValue) &&
        ((this._rawValue = t),
        (this._value = this._shallow ? t : lr(t)),
        ga(this));
  }
}
function ur(e) {
  return He(e) ? e.value : e;
}
const bd = {
  get: (e, t, n) => ur(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const s = e[t];
    return He(s) && !He(n) ? ((s.value = n), !0) : Reflect.set(e, t, n, r);
  },
};
function ya(e) {
  return $n(e) ? e : new Proxy(e, bd);
}
class Ed {
  constructor(t, n, r) {
    (this._setter = n),
      (this.dep = void 0),
      (this._dirty = !0),
      (this.__v_isRef = !0),
      (this.effect = new ii(t, () => {
        this._dirty || ((this._dirty = !0), ga(this));
      })),
      (this.__v_isReadonly = r);
  }
  get value() {
    const t = se(this);
    return (
      pa(t),
      t._dirty && ((t._dirty = !1), (t._value = t.effect.run())),
      t._value
    );
  }
  set value(t) {
    this._setter(t);
  }
}
function Z(e, t) {
  let n, r;
  const s = W(e);
  return (
    s ? ((n = e), (r = ft)) : ((n = e.get), (r = e.set)), new Ed(n, r, s || !r)
  );
}
Promise.resolve();
function Td(e, t, ...n) {
  const r = e.vnode.props || fe;
  let s = n;
  const i = t.startsWith('update:'),
    o = i && t.slice(7);
  if (o && o in r) {
    const c = `${o === 'modelValue' ? 'model' : o}Modifiers`,
      { number: f, trim: h } = r[c] || fe;
    h ? (s = n.map(p => p.trim())) : f && (s = n.map(ei));
  }
  let a,
    l = r[(a = Vr(t))] || r[(a = Vr(Tt(t)))];
  !l && i && (l = r[(a = Vr(Nn(t)))]), l && dt(l, e, 6, s);
  const u = r[a + 'Once'];
  if (u) {
    if (!e.emitted) e.emitted = {};
    else if (e.emitted[a]) return;
    (e.emitted[a] = !0), dt(u, e, 6, s);
  }
}
function wa(e, t, n = !1) {
  const r = t.emitsCache,
    s = r.get(e);
  if (s !== void 0) return s;
  const i = e.emits;
  let o = {},
    a = !1;
  if (!W(e)) {
    const l = u => {
      const c = wa(u, t, !0);
      c && ((a = !0), Ue(o, c));
    };
    !n && t.mixins.length && t.mixins.forEach(l),
      e.extends && l(e.extends),
      e.mixins && e.mixins.forEach(l);
  }
  return !i && !a
    ? (r.set(e, null), null)
    : (V(i) ? i.forEach(l => (o[l] = null)) : Ue(o, i), r.set(e, o), o);
}
function pi(e, t) {
  return !e || !Dr(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, '')),
      ne(e, t[0].toLowerCase() + t.slice(1)) || ne(e, Nn(t)) || ne(e, t));
}
let ot = null,
  Gr = null;
function Qr(e) {
  const t = ot;
  return (ot = e), (Gr = (e && e.type.__scopeId) || null), t;
}
function Od(e) {
  Gr = e;
}
function Sd() {
  Gr = null;
}
function Se(e, t = ot, n) {
  if (!t || e._n) return e;
  const r = (...s) => {
    r._d && Ha(-1);
    const i = Qr(t),
      o = e(...s);
    return Qr(i), r._d && Ha(1), o;
  };
  return (r._n = !0), (r._c = !0), (r._d = !0), r;
}
function gi(e) {
  const {
    type: t,
    vnode: n,
    proxy: r,
    withProxy: s,
    props: i,
    propsOptions: [o],
    slots: a,
    attrs: l,
    emit: u,
    render: c,
    renderCache: f,
    data: h,
    setupState: p,
    ctx: v,
    inheritAttrs: N,
  } = e;
  let T, E;
  const A = Qr(e);
  try {
    if (n.shapeFlag & 4) {
      const $ = s || r;
      (T = Ot(c.call($, $, f, i, p, h, v))), (E = l);
    } else {
      const $ = t;
      (T = Ot(
        $.length > 1 ? $(i, { attrs: l, slots: a, emit: u }) : $(i, null),
      )),
        (E = t.props ? l : xd(l));
    }
  } catch ($) {
    (fr.length = 0), ls($, e, 1), (T = X(Ft));
  }
  let C = T;
  if (E && N !== !1) {
    const $ = Object.keys(E),
      { shapeFlag: K } = C;
    $.length &&
      K & (1 | 6) &&
      (o && $.some(Ks) && (E = _d(E, o)), (C = Dn(C, E)));
  }
  return (
    n.dirs && (C.dirs = C.dirs ? C.dirs.concat(n.dirs) : n.dirs),
    n.transition && (C.transition = n.transition),
    (T = C),
    Qr(A),
    T
  );
}
const xd = e => {
    let t;
    for (const n in e)
      (n === 'class' || n === 'style' || Dr(n)) && ((t || (t = {}))[n] = e[n]);
    return t;
  },
  _d = (e, t) => {
    const n = {};
    for (const r in e) (!Ks(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
    return n;
  };
function Cd(e, t, n) {
  const { props: r, children: s, component: i } = e,
    { props: o, children: a, patchFlag: l } = t,
    u = i.emitsOptions;
  if (t.dirs || t.transition) return !0;
  if (n && l >= 0) {
    if (l & 1024) return !0;
    if (l & 16) return r ? ba(r, o, u) : !!o;
    if (l & 8) {
      const c = t.dynamicProps;
      for (let f = 0; f < c.length; f++) {
        const h = c[f];
        if (o[h] !== r[h] && !pi(u, h)) return !0;
      }
    }
  } else
    return (s || a) && (!a || !a.$stable)
      ? !0
      : r === o
      ? !1
      : r
      ? o
        ? ba(r, o, u)
        : !0
      : !!o;
  return !1;
}
function ba(e, t, n) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length) return !0;
  for (let s = 0; s < r.length; s++) {
    const i = r[s];
    if (t[i] !== e[i] && !pi(n, i)) return !0;
  }
  return !1;
}
function Pd({ vnode: e, parent: t }, n) {
  for (; t && t.subTree === e; ) ((e = t.vnode).el = n), (t = t.parent);
}
const Ad = e => e.__isSuspense;
function Id(e, t) {
  t && t.pendingBranch
    ? V(e)
      ? t.effects.push(...e)
      : t.effects.push(e)
    : _h(e);
}
function Qe(e, t) {
  if (Re) {
    let n = Re.provides;
    const r = Re.parent && Re.parent.provides;
    r === n && (n = Re.provides = Object.create(r)), (n[e] = t);
  }
}
function Fe(e, t, n = !1) {
  const r = Re || ot;
  if (r) {
    const s =
      r.parent == null
        ? r.vnode.appContext && r.vnode.appContext.provides
        : r.parent.provides;
    if (s && e in s) return s[e];
    if (arguments.length > 1) return n && W(t) ? t.call(r.proxy) : t;
  }
}
function ae(e) {
  return W(e) ? { setup: e, name: e.name } : e;
}
const vi = e => !!e.type.__asyncLoader,
  Ea = e => e.type.__isKeepAlive;
function Nd(e, t) {
  Ta(e, 'a', t);
}
function kd(e, t) {
  Ta(e, 'da', t);
}
function Ta(e, t, n = Re) {
  const r =
    e.__wdc ||
    (e.__wdc = () => {
      let s = n;
      for (; s; ) {
        if (s.isDeactivated) return;
        s = s.parent;
      }
      return e();
    });
  if ((Xr(t, r, n), n)) {
    let s = n.parent;
    for (; s && s.parent; )
      Ea(s.parent.vnode) && Md(r, t, n, s), (s = s.parent);
  }
}
function Md(e, t, n, r) {
  const s = Xr(t, e, r, !0);
  sn(() => {
    Gs(r[t], s);
  }, n);
}
function Xr(e, t, n = Re, r = !1) {
  if (n) {
    const s = n[e] || (n[e] = []),
      i =
        t.__weh ||
        (t.__weh = (...o) => {
          if (n.isUnmounted) return;
          Mn(), Fn(n);
          const a = dt(t, n, e, o);
          return cn(), nn(), a;
        });
    return r ? s.unshift(i) : s.push(i), i;
  }
}
const It =
    e =>
    (t, n = Re) =>
      (!as || e === 'sp') && Xr(e, t, n),
  Rd = It('bm'),
  rn = It('m'),
  $d = It('bu'),
  yi = It('u'),
  Dd = It('bum'),
  sn = It('um'),
  Fd = It('sp'),
  Ld = It('rtg'),
  Ud = It('rtc');
function Hd(e, t = Re) {
  Xr('ec', e, t);
}
let wi = !0;
function Vd(e) {
  const t = xa(e),
    n = e.proxy,
    r = e.ctx;
  (wi = !1), t.beforeCreate && Oa(t.beforeCreate, e, 'bc');
  const {
    data: s,
    computed: i,
    methods: o,
    watch: a,
    provide: l,
    inject: u,
    created: c,
    beforeMount: f,
    mounted: h,
    beforeUpdate: p,
    updated: v,
    activated: N,
    deactivated: T,
    beforeDestroy: E,
    beforeUnmount: A,
    destroyed: C,
    unmounted: $,
    render: K,
    renderTracked: te,
    renderTriggered: ie,
    errorCaptured: be,
    serverPrefetch: Y,
    expose: Me,
    inheritAttrs: Oe,
    components: Je,
    directives: On,
    filters: Sn,
  } = t;
  if ((u && jd(u, r, null, e.appContext.config.unwrapInjectedRef), o))
    for (const he in o) {
      const le = o[he];
      W(le) && (r[he] = le.bind(n));
    }
  if (s) {
    const he = s.call(n, n);
    Pe(he) && (e.data = Rn(he));
  }
  if (((wi = !0), i))
    for (const he in i) {
      const le = i[he],
        st = W(le) ? le.bind(n, n) : W(le.get) ? le.get.bind(n, n) : ft,
        _n = !W(le) && W(le.set) ? le.set.bind(n) : ft,
        Pt = Z({ get: st, set: _n });
      Object.defineProperty(r, he, {
        enumerable: !0,
        configurable: !0,
        get: () => Pt.value,
        set: wt => (Pt.value = wt),
      });
    }
  if (a) for (const he in a) Sa(a[he], r, n, he);
  if (l) {
    const he = W(l) ? l.call(n) : l;
    Reflect.ownKeys(he).forEach(le => {
      Qe(le, he[le]);
    });
  }
  c && Oa(c, e, 'c');
  function Ce(he, le) {
    V(le) ? le.forEach(st => he(st.bind(n))) : le && he(le.bind(n));
  }
  if (
    (Ce(Rd, f),
    Ce(rn, h),
    Ce($d, p),
    Ce(yi, v),
    Ce(Nd, N),
    Ce(kd, T),
    Ce(Hd, be),
    Ce(Ud, te),
    Ce(Ld, ie),
    Ce(Dd, A),
    Ce(sn, $),
    Ce(Fd, Y),
    V(Me))
  )
    if (Me.length) {
      const he = e.exposed || (e.exposed = {});
      Me.forEach(le => {
        Object.defineProperty(he, le, {
          get: () => n[le],
          set: st => (n[le] = st),
        });
      });
    } else e.exposed || (e.exposed = {});
  K && e.render === ft && (e.render = K),
    Oe != null && (e.inheritAttrs = Oe),
    Je && (e.components = Je),
    On && (e.directives = On);
}
function jd(e, t, n = ft, r = !1) {
  V(e) && (e = bi(e));
  for (const s in e) {
    const i = e[s];
    let o;
    Pe(i)
      ? 'default' in i
        ? (o = Fe(i.from || s, i.default, !0))
        : (o = Fe(i.from || s))
      : (o = Fe(i)),
      He(o) && r
        ? Object.defineProperty(t, s, {
            enumerable: !0,
            configurable: !0,
            get: () => o.value,
            set: a => (o.value = a),
          })
        : (t[s] = o);
  }
}
function Oa(e, t, n) {
  dt(V(e) ? e.map(r => r.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function Sa(e, t, n, r) {
  const s = r.includes('.') ? tl(n, r) : () => n[r];
  if (Ie(e)) {
    const i = t[e];
    W(i) && kt(s, i);
  } else if (W(e)) kt(s, e.bind(n));
  else if (Pe(e))
    if (V(e)) e.forEach(i => Sa(i, t, n, r));
    else {
      const i = W(e.handler) ? e.handler.bind(n) : t[e.handler];
      W(i) && kt(s, i, e);
    }
}
function xa(e) {
  const t = e.type,
    { mixins: n, extends: r } = t,
    {
      mixins: s,
      optionsCache: i,
      config: { optionMergeStrategies: o },
    } = e.appContext,
    a = i.get(t);
  let l;
  return (
    a
      ? (l = a)
      : !s.length && !n && !r
      ? (l = t)
      : ((l = {}), s.length && s.forEach(u => es(l, u, o, !0)), es(l, t, o)),
    i.set(t, l),
    l
  );
}
function es(e, t, n, r = !1) {
  const { mixins: s, extends: i } = t;
  i && es(e, i, n, !0), s && s.forEach(o => es(e, o, n, !0));
  for (const o in t)
    if (!(r && o === 'expose')) {
      const a = Bd[o] || (n && n[o]);
      e[o] = a ? a(e[o], t[o]) : t[o];
    }
  return e;
}
const Bd = {
  data: _a,
  props: on,
  emits: on,
  methods: on,
  computed: on,
  beforeCreate: Ve,
  created: Ve,
  beforeMount: Ve,
  mounted: Ve,
  beforeUpdate: Ve,
  updated: Ve,
  beforeDestroy: Ve,
  beforeUnmount: Ve,
  destroyed: Ve,
  unmounted: Ve,
  activated: Ve,
  deactivated: Ve,
  errorCaptured: Ve,
  serverPrefetch: Ve,
  components: on,
  directives: on,
  watch: Wd,
  provide: _a,
  inject: qd,
};
function _a(e, t) {
  return t
    ? e
      ? function () {
          return Ue(
            W(e) ? e.call(this, this) : e,
            W(t) ? t.call(this, this) : t,
          );
        }
      : t
    : e;
}
function qd(e, t) {
  return on(bi(e), bi(t));
}
function bi(e) {
  if (V(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
    return t;
  }
  return e;
}
function Ve(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function on(e, t) {
  return e ? Ue(Ue(Object.create(null), e), t) : t;
}
function Wd(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = Ue(Object.create(null), e);
  for (const r in t) n[r] = Ve(e[r], t[r]);
  return n;
}
function zd(e, t, n, r = !1) {
  const s = {},
    i = {};
  Br(i, ss, 1), (e.propsDefaults = Object.create(null)), Ca(e, t, s, i);
  for (const o in e.propsOptions[0]) o in s || (s[o] = void 0);
  n ? (e.props = r ? s : vd(s)) : e.type.props ? (e.props = s) : (e.props = i),
    (e.attrs = i);
}
function Zd(e, t, n, r) {
  const {
      props: s,
      attrs: i,
      vnode: { patchFlag: o },
    } = e,
    a = se(s),
    [l] = e.propsOptions;
  let u = !1;
  if ((r || o > 0) && !(o & 16)) {
    if (o & 8) {
      const c = e.vnode.dynamicProps;
      for (let f = 0; f < c.length; f++) {
        let h = c[f];
        const p = t[h];
        if (l)
          if (ne(i, h)) p !== i[h] && ((i[h] = p), (u = !0));
          else {
            const v = Tt(h);
            s[v] = Ei(l, a, v, p, e, !1);
          }
        else p !== i[h] && ((i[h] = p), (u = !0));
      }
    }
  } else {
    Ca(e, t, s, i) && (u = !0);
    let c;
    for (const f in a)
      (!t || (!ne(t, f) && ((c = Nn(f)) === f || !ne(t, c)))) &&
        (l
          ? n &&
            (n[f] !== void 0 || n[c] !== void 0) &&
            (s[f] = Ei(l, a, f, void 0, e, !0))
          : delete s[f]);
    if (i !== a)
      for (const f in i) (!t || !ne(t, f)) && (delete i[f], (u = !0));
  }
  u && At(e, 'set', '$attrs');
}
function Ca(e, t, n, r) {
  const [s, i] = e.propsOptions;
  let o = !1,
    a;
  if (t)
    for (let l in t) {
      if (Lr(l)) continue;
      const u = t[l];
      let c;
      s && ne(s, (c = Tt(l)))
        ? !i || !i.includes(c)
          ? (n[c] = u)
          : ((a || (a = {}))[c] = u)
        : pi(e.emitsOptions, l) ||
          ((!(l in r) || u !== r[l]) && ((r[l] = u), (o = !0)));
    }
  if (i) {
    const l = se(n),
      u = a || fe;
    for (let c = 0; c < i.length; c++) {
      const f = i[c];
      n[f] = Ei(s, l, f, u[f], e, !ne(u, f));
    }
  }
  return o;
}
function Ei(e, t, n, r, s, i) {
  const o = e[n];
  if (o != null) {
    const a = ne(o, 'default');
    if (a && r === void 0) {
      const l = o.default;
      if (o.type !== Function && W(l)) {
        const { propsDefaults: u } = s;
        n in u ? (r = u[n]) : (Fn(s), (r = u[n] = l.call(null, t)), cn());
      } else r = l;
    }
    o[0] &&
      (i && !a ? (r = !1) : o[1] && (r === '' || r === Nn(n)) && (r = !0));
  }
  return r;
}
function Pa(e, t, n = !1) {
  const r = t.propsCache,
    s = r.get(e);
  if (s) return s;
  const i = e.props,
    o = {},
    a = [];
  let l = !1;
  if (!W(e)) {
    const c = f => {
      l = !0;
      const [h, p] = Pa(f, t, !0);
      Ue(o, h), p && a.push(...p);
    };
    !n && t.mixins.length && t.mixins.forEach(c),
      e.extends && c(e.extends),
      e.mixins && e.mixins.forEach(c);
  }
  if (!i && !l) return r.set(e, An), An;
  if (V(i))
    for (let c = 0; c < i.length; c++) {
      const f = Tt(i[c]);
      Aa(f) && (o[f] = fe);
    }
  else if (i)
    for (const c in i) {
      const f = Tt(c);
      if (Aa(f)) {
        const h = i[c],
          p = (o[f] = V(h) || W(h) ? { type: h } : h);
        if (p) {
          const v = ka(Boolean, p.type),
            N = ka(String, p.type);
          (p[0] = v > -1),
            (p[1] = N < 0 || v < N),
            (v > -1 || ne(p, 'default')) && a.push(f);
        }
      }
    }
  const u = [o, a];
  return r.set(e, u), u;
}
function Aa(e) {
  return e[0] !== '$';
}
function Ia(e) {
  const t = e && e.toString().match(/^\s*function (\w+)/);
  return t ? t[1] : e === null ? 'null' : '';
}
function Na(e, t) {
  return Ia(e) === Ia(t);
}
function ka(e, t) {
  return V(t) ? t.findIndex(n => Na(n, e)) : W(t) && Na(t, e) ? 0 : -1;
}
const Ma = e => e[0] === '_' || e === '$stable',
  Ti = e => (V(e) ? e.map(Ot) : [Ot(e)]),
  Yd = (e, t, n) => {
    const r = Se((...s) => Ti(t(...s)), n);
    return (r._c = !1), r;
  },
  Ra = (e, t, n) => {
    const r = e._ctx;
    for (const s in e) {
      if (Ma(s)) continue;
      const i = e[s];
      if (W(i)) t[s] = Yd(s, i, r);
      else if (i != null) {
        const o = Ti(i);
        t[s] = () => o;
      }
    }
  },
  $a = (e, t) => {
    const n = Ti(t);
    e.slots.default = () => n;
  },
  Jd = (e, t) => {
    if (e.vnode.shapeFlag & 32) {
      const n = t._;
      n ? ((e.slots = se(t)), Br(t, '_', n)) : Ra(t, (e.slots = {}));
    } else (e.slots = {}), t && $a(e, t);
    Br(e.slots, ss, 1);
  },
  Kd = (e, t, n) => {
    const { vnode: r, slots: s } = e;
    let i = !0,
      o = fe;
    if (r.shapeFlag & 32) {
      const a = t._;
      a
        ? n && a === 1
          ? (i = !1)
          : (Ue(s, t), !n && a === 1 && delete s._)
        : ((i = !t.$stable), Ra(t, s)),
        (o = t);
    } else t && ($a(e, t), (o = { default: 1 }));
    if (i) for (const a in s) !Ma(a) && !(a in o) && delete s[a];
  };
function bw(e, t) {
  const n = ot;
  if (n === null) return e;
  const r = n.proxy,
    s = e.dirs || (e.dirs = []);
  for (let i = 0; i < t.length; i++) {
    let [o, a, l, u = fe] = t[i];
    W(o) && (o = { mounted: o, updated: o }),
      o.deep && fn(a),
      s.push({
        dir: o,
        instance: r,
        value: a,
        oldValue: void 0,
        arg: l,
        modifiers: u,
      });
  }
  return e;
}
function an(e, t, n, r) {
  const s = e.dirs,
    i = t && t.dirs;
  for (let o = 0; o < s.length; o++) {
    const a = s[o];
    i && (a.oldValue = i[o].value);
    let l = a.dir[r];
    l && (Mn(), dt(l, n, 8, [e.el, a, e, t]), nn());
  }
}
function Da() {
  return {
    app: null,
    config: {
      isNativeTag: Df,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {},
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap(),
  };
}
let Gd = 0;
function Qd(e, t) {
  return function (r, s = null) {
    s != null && !Pe(s) && (s = null);
    const i = Da(),
      o = new Set();
    let a = !1;
    const l = (i.app = {
      _uid: Gd++,
      _component: r,
      _props: s,
      _container: null,
      _context: i,
      _instance: null,
      version: Ph,
      get config() {
        return i.config;
      },
      set config(u) {},
      use(u, ...c) {
        return (
          o.has(u) ||
            (u && W(u.install)
              ? (o.add(u), u.install(l, ...c))
              : W(u) && (o.add(u), u(l, ...c))),
          l
        );
      },
      mixin(u) {
        return i.mixins.includes(u) || i.mixins.push(u), l;
      },
      component(u, c) {
        return c ? ((i.components[u] = c), l) : i.components[u];
      },
      directive(u, c) {
        return c ? ((i.directives[u] = c), l) : i.directives[u];
      },
      mount(u, c, f) {
        if (!a) {
          const h = X(r, s);
          return (
            (h.appContext = i),
            c && t ? t(h, u) : e(h, u, f),
            (a = !0),
            (l._container = u),
            (u.__vue_app__ = l),
            Ni(h.component) || h.component.proxy
          );
        }
      },
      unmount() {
        a && (e(null, l._container), delete l._container.__vue_app__);
      },
      provide(u, c) {
        return (i.provides[u] = c), l;
      },
    });
    return l;
  };
}
function Oi(e, t, n, r, s = !1) {
  if (V(e)) {
    e.forEach((h, p) => Oi(h, t && (V(t) ? t[p] : t), n, r, s));
    return;
  }
  if (vi(r) && !s) return;
  const i = r.shapeFlag & 4 ? Ni(r.component) || r.component.proxy : r.el,
    o = s ? null : i,
    { i: a, r: l } = e,
    u = t && t.r,
    c = a.refs === fe ? (a.refs = {}) : a.refs,
    f = a.setupState;
  if (
    (u != null &&
      u !== l &&
      (Ie(u)
        ? ((c[u] = null), ne(f, u) && (f[u] = null))
        : He(u) && (u.value = null)),
    W(l))
  )
    Ut(l, a, 12, [o, c]);
  else {
    const h = Ie(l),
      p = He(l);
    if (h || p) {
      const v = () => {
        if (e.f) {
          const N = h ? c[l] : l.value;
          s
            ? V(N) && Gs(N, i)
            : V(N)
            ? N.includes(i) || N.push(i)
            : h
            ? (c[l] = [i])
            : ((l.value = [i]), e.k && (c[e.k] = l.value));
        } else
          h
            ? ((c[l] = o), ne(f, l) && (f[l] = o))
            : He(l) && ((l.value = o), e.k && (c[e.k] = o));
      };
      o ? ((v.id = -1), We(v, n)) : v();
    }
  }
}
const We = Id;
function Xd(e) {
  return eh(e);
}
function eh(e, t) {
  const n = jf();
  n.__VUE__ = !0;
  const {
      insert: r,
      remove: s,
      patchProp: i,
      createElement: o,
      createText: a,
      createComment: l,
      setText: u,
      setElementText: c,
      parentNode: f,
      nextSibling: h,
      setScopeId: p = ft,
      cloneNode: v,
      insertStaticContent: N,
    } = e,
    T = (
      d,
      m,
      g,
      b = null,
      w = null,
      x = null,
      k = !1,
      S = null,
      _ = !!m.dynamicChildren,
    ) => {
      if (d === m) return;
      d && !dr(d, m) && ((b = D(d)), it(d, w, x, !0), (d = null)),
        m.patchFlag === -2 && ((_ = !1), (m.dynamicChildren = null));
      const { type: O, ref: F, shapeFlag: M } = m;
      switch (O) {
        case _i:
          E(d, m, g, b);
          break;
        case Ft:
          A(d, m, g, b);
          break;
        case Ci:
          d == null && C(m, g, b, k);
          break;
        case ke:
          On(d, m, g, b, w, x, k, S, _);
          break;
        default:
          M & 1
            ? te(d, m, g, b, w, x, k, S, _)
            : M & 6
            ? Sn(d, m, g, b, w, x, k, S, _)
            : (M & 64 || M & 128) && O.process(d, m, g, b, w, x, k, S, _, me);
      }
      F != null && w && Oi(F, d && d.ref, x, m || d, !m);
    },
    E = (d, m, g, b) => {
      if (d == null) r((m.el = a(m.children)), g, b);
      else {
        const w = (m.el = d.el);
        m.children !== d.children && u(w, m.children);
      }
    },
    A = (d, m, g, b) => {
      d == null ? r((m.el = l(m.children || '')), g, b) : (m.el = d.el);
    },
    C = (d, m, g, b) => {
      [d.el, d.anchor] = N(d.children, m, g, b);
    },
    $ = ({ el: d, anchor: m }, g, b) => {
      let w;
      for (; d && d !== m; ) (w = h(d)), r(d, g, b), (d = w);
      r(m, g, b);
    },
    K = ({ el: d, anchor: m }) => {
      let g;
      for (; d && d !== m; ) (g = h(d)), s(d), (d = g);
      s(m);
    },
    te = (d, m, g, b, w, x, k, S, _) => {
      (k = k || m.type === 'svg'),
        d == null ? ie(m, g, b, w, x, k, S, _) : Me(d, m, w, x, k, S, _);
    },
    ie = (d, m, g, b, w, x, k, S) => {
      let _, O;
      const {
        type: F,
        props: M,
        shapeFlag: L,
        transition: H,
        patchFlag: G,
        dirs: ve,
      } = d;
      if (d.el && v !== void 0 && G === -1) _ = d.el = v(d.el);
      else {
        if (
          ((_ = d.el = o(d.type, x, M && M.is, M)),
          L & 8
            ? c(_, d.children)
            : L & 16 &&
              Y(d.children, _, null, b, w, x && F !== 'foreignObject', k, S),
          ve && an(d, null, b, 'created'),
          M)
        ) {
          for (const ge in M)
            ge !== 'value' &&
              !Lr(ge) &&
              i(_, ge, null, M[ge], x, d.children, b, w, P);
          'value' in M && i(_, 'value', null, M.value),
            (O = M.onVnodeBeforeMount) && St(O, b, d);
        }
        be(_, d, d.scopeId, k, b);
      }
      ve && an(d, null, b, 'beforeMount');
      const ce = (!w || (w && !w.pendingBranch)) && H && !H.persisted;
      ce && H.beforeEnter(_),
        r(_, m, g),
        ((O = M && M.onVnodeMounted) || ce || ve) &&
          We(() => {
            O && St(O, b, d), ce && H.enter(_), ve && an(d, null, b, 'mounted');
          }, w);
    },
    be = (d, m, g, b, w) => {
      if ((g && p(d, g), b)) for (let x = 0; x < b.length; x++) p(d, b[x]);
      if (w) {
        let x = w.subTree;
        if (m === x) {
          const k = w.vnode;
          be(d, k, k.scopeId, k.slotScopeIds, w.parent);
        }
      }
    },
    Y = (d, m, g, b, w, x, k, S, _ = 0) => {
      for (let O = _; O < d.length; O++) {
        const F = (d[O] = S ? Lt(d[O]) : Ot(d[O]));
        T(null, F, m, g, b, w, x, k, S);
      }
    },
    Me = (d, m, g, b, w, x, k) => {
      const S = (m.el = d.el);
      let { patchFlag: _, dynamicChildren: O, dirs: F } = m;
      _ |= d.patchFlag & 16;
      const M = d.props || fe,
        L = m.props || fe;
      let H;
      g && ln(g, !1),
        (H = L.onVnodeBeforeUpdate) && St(H, g, m, d),
        F && an(m, d, g, 'beforeUpdate'),
        g && ln(g, !0);
      const G = w && m.type !== 'foreignObject';
      if (
        (O
          ? Oe(d.dynamicChildren, O, S, g, b, G, x)
          : k || st(d, m, S, null, g, b, G, x, !1),
        _ > 0)
      ) {
        if (_ & 16) Je(S, m, M, L, g, b, w);
        else if (
          (_ & 2 && M.class !== L.class && i(S, 'class', null, L.class, w),
          _ & 4 && i(S, 'style', M.style, L.style, w),
          _ & 8)
        ) {
          const ve = m.dynamicProps;
          for (let ce = 0; ce < ve.length; ce++) {
            const ge = ve[ce],
              ct = M[ge],
              Cn = L[ge];
            (Cn !== ct || ge === 'value') &&
              i(S, ge, ct, Cn, w, d.children, g, b, P);
          }
        }
        _ & 1 && d.children !== m.children && c(S, m.children);
      } else !k && O == null && Je(S, m, M, L, g, b, w);
      ((H = L.onVnodeUpdated) || F) &&
        We(() => {
          H && St(H, g, m, d), F && an(m, d, g, 'updated');
        }, b);
    },
    Oe = (d, m, g, b, w, x, k) => {
      for (let S = 0; S < m.length; S++) {
        const _ = d[S],
          O = m[S],
          F =
            _.el && (_.type === ke || !dr(_, O) || _.shapeFlag & (6 | 64))
              ? f(_.el)
              : g;
        T(_, O, F, null, b, w, x, k, !0);
      }
    },
    Je = (d, m, g, b, w, x, k) => {
      if (g !== b) {
        for (const S in b) {
          if (Lr(S)) continue;
          const _ = b[S],
            O = g[S];
          _ !== O && S !== 'value' && i(d, S, O, _, k, m.children, w, x, P);
        }
        if (g !== fe)
          for (const S in g)
            !Lr(S) && !(S in b) && i(d, S, g[S], null, k, m.children, w, x, P);
        'value' in b && i(d, 'value', g.value, b.value);
      }
    },
    On = (d, m, g, b, w, x, k, S, _) => {
      const O = (m.el = d ? d.el : a('')),
        F = (m.anchor = d ? d.anchor : a(''));
      let { patchFlag: M, dynamicChildren: L, slotScopeIds: H } = m;
      H && (S = S ? S.concat(H) : H),
        d == null
          ? (r(O, g, b), r(F, g, b), Y(m.children, g, F, w, x, k, S, _))
          : M > 0 && M & 64 && L && d.dynamicChildren
          ? (Oe(d.dynamicChildren, L, g, w, x, k, S),
            (m.key != null || (w && m === w.subTree)) && Si(d, m, !0))
          : st(d, m, g, F, w, x, k, S, _);
    },
    Sn = (d, m, g, b, w, x, k, S, _) => {
      (m.slotScopeIds = S),
        d == null
          ? m.shapeFlag & 512
            ? w.ctx.activate(m, g, b, k, _)
            : xn(m, g, b, w, x, k, _)
          : Ce(d, m, _);
    },
    xn = (d, m, g, b, w, x, k) => {
      const S = (d.component = ph(d, b, w));
      if ((Ea(d) && (S.ctx.renderer = me), gh(S), S.asyncDep)) {
        if ((w && w.registerDep(S, he), !d.el)) {
          const _ = (S.subTree = X(Ft));
          A(null, _, m, g);
        }
        return;
      }
      he(S, d, m, g, w, x, k);
    },
    Ce = (d, m, g) => {
      const b = (m.component = d.component);
      if (Cd(d, m, g))
        if (b.asyncDep && !b.asyncResolved) {
          le(b, m, g);
          return;
        } else (b.next = m), Sh(b.update), b.update();
      else (m.component = d.component), (m.el = d.el), (b.vnode = m);
    },
    he = (d, m, g, b, w, x, k) => {
      const S = () => {
          if (d.isMounted) {
            let { next: F, bu: M, u: L, parent: H, vnode: G } = d,
              ve = F,
              ce;
            ln(d, !1),
              F ? ((F.el = G.el), le(d, F, k)) : (F = G),
              M && jr(M),
              (ce = F.props && F.props.onVnodeBeforeUpdate) && St(ce, H, F, G),
              ln(d, !0);
            const ge = gi(d),
              ct = d.subTree;
            (d.subTree = ge),
              T(ct, ge, f(ct.el), D(ct), d, w, x),
              (F.el = ge.el),
              ve === null && Pd(d, ge.el),
              L && We(L, w),
              (ce = F.props && F.props.onVnodeUpdated) &&
                We(() => St(ce, H, F, G), w);
          } else {
            let F;
            const { el: M, props: L } = m,
              { bm: H, m: G, parent: ve } = d,
              ce = vi(m);
            if (
              (ln(d, !1),
              H && jr(H),
              !ce && (F = L && L.onVnodeBeforeMount) && St(F, ve, m),
              ln(d, !0),
              M && q)
            ) {
              const ge = () => {
                (d.subTree = gi(d)), q(M, d.subTree, d, w, null);
              };
              ce
                ? m.type.__asyncLoader().then(() => !d.isUnmounted && ge())
                : ge();
            } else {
              const ge = (d.subTree = gi(d));
              T(null, ge, g, b, d, w, x), (m.el = ge.el);
            }
            if ((G && We(G, w), !ce && (F = L && L.onVnodeMounted))) {
              const ge = m;
              We(() => St(F, ve, ge), w);
            }
            m.shapeFlag & 256 && d.a && We(d.a, w),
              (d.isMounted = !0),
              (m = g = b = null);
          }
        },
        _ = (d.effect = new ii(S, () => Ja(d.update), d.scope)),
        O = (d.update = _.run.bind(_));
      (O.id = d.uid), ln(d, !0), O();
    },
    le = (d, m, g) => {
      m.component = d;
      const b = d.vnode.props;
      (d.vnode = m),
        (d.next = null),
        Zd(d, m.props, b, g),
        Kd(d, m.children, g),
        Mn(),
        Di(void 0, d.update),
        nn();
    },
    st = (d, m, g, b, w, x, k, S, _ = !1) => {
      const O = d && d.children,
        F = d ? d.shapeFlag : 0,
        M = m.children,
        { patchFlag: L, shapeFlag: H } = m;
      if (L > 0) {
        if (L & 128) {
          Pt(O, M, g, b, w, x, k, S, _);
          return;
        } else if (L & 256) {
          _n(O, M, g, b, w, x, k, S, _);
          return;
        }
      }
      H & 8
        ? (F & 16 && P(O, w, x), M !== O && c(g, M))
        : F & 16
        ? H & 16
          ? Pt(O, M, g, b, w, x, k, S, _)
          : P(O, w, x, !0)
        : (F & 8 && c(g, ''), H & 16 && Y(M, g, b, w, x, k, S, _));
    },
    _n = (d, m, g, b, w, x, k, S, _) => {
      (d = d || An), (m = m || An);
      const O = d.length,
        F = m.length,
        M = Math.min(O, F);
      let L;
      for (L = 0; L < M; L++) {
        const H = (m[L] = _ ? Lt(m[L]) : Ot(m[L]));
        T(d[L], H, g, null, w, x, k, S, _);
      }
      O > F ? P(d, w, x, !0, !1, M) : Y(m, g, b, w, x, k, S, _, M);
    },
    Pt = (d, m, g, b, w, x, k, S, _) => {
      let O = 0;
      const F = m.length;
      let M = d.length - 1,
        L = F - 1;
      for (; O <= M && O <= L; ) {
        const H = d[O],
          G = (m[O] = _ ? Lt(m[O]) : Ot(m[O]));
        if (dr(H, G)) T(H, G, g, null, w, x, k, S, _);
        else break;
        O++;
      }
      for (; O <= M && O <= L; ) {
        const H = d[M],
          G = (m[L] = _ ? Lt(m[L]) : Ot(m[L]));
        if (dr(H, G)) T(H, G, g, null, w, x, k, S, _);
        else break;
        M--, L--;
      }
      if (O > M) {
        if (O <= L) {
          const H = L + 1,
            G = H < F ? m[H].el : b;
          for (; O <= L; )
            T(null, (m[O] = _ ? Lt(m[O]) : Ot(m[O])), g, G, w, x, k, S, _), O++;
        }
      } else if (O > L) for (; O <= M; ) it(d[O], w, x, !0), O++;
      else {
        const H = O,
          G = O,
          ve = new Map();
        for (O = G; O <= L; O++) {
          const Ke = (m[O] = _ ? Lt(m[O]) : Ot(m[O]));
          Ke.key != null && ve.set(Ke.key, O);
        }
        let ce,
          ge = 0;
        const ct = L - G + 1;
        let Cn = !1,
          Lo = 0;
        const sr = new Array(ct);
        for (O = 0; O < ct; O++) sr[O] = 0;
        for (O = H; O <= M; O++) {
          const Ke = d[O];
          if (ge >= ct) {
            it(Ke, w, x, !0);
            continue;
          }
          let bt;
          if (Ke.key != null) bt = ve.get(Ke.key);
          else
            for (ce = G; ce <= L; ce++)
              if (sr[ce - G] === 0 && dr(Ke, m[ce])) {
                bt = ce;
                break;
              }
          bt === void 0
            ? it(Ke, w, x, !0)
            : ((sr[bt - G] = O + 1),
              bt >= Lo ? (Lo = bt) : (Cn = !0),
              T(Ke, m[bt], g, null, w, x, k, S, _),
              ge++);
        }
        const Uo = Cn ? th(sr) : An;
        for (ce = Uo.length - 1, O = ct - 1; O >= 0; O--) {
          const Ke = G + O,
            bt = m[Ke],
            Ho = Ke + 1 < F ? m[Ke + 1].el : b;
          sr[O] === 0
            ? T(null, bt, g, Ho, w, x, k, S, _)
            : Cn && (ce < 0 || O !== Uo[ce] ? wt(bt, g, Ho, 2) : ce--);
        }
      }
    },
    wt = (d, m, g, b, w = null) => {
      const { el: x, type: k, transition: S, children: _, shapeFlag: O } = d;
      if (O & 6) {
        wt(d.component.subTree, m, g, b);
        return;
      }
      if (O & 128) {
        d.suspense.move(m, g, b);
        return;
      }
      if (O & 64) {
        k.move(d, m, g, me);
        return;
      }
      if (k === ke) {
        r(x, m, g);
        for (let M = 0; M < _.length; M++) wt(_[M], m, g, b);
        r(d.anchor, m, g);
        return;
      }
      if (k === Ci) {
        $(d, m, g);
        return;
      }
      if (b !== 2 && O & 1 && S)
        if (b === 0) S.beforeEnter(x), r(x, m, g), We(() => S.enter(x), w);
        else {
          const { leave: M, delayLeave: L, afterLeave: H } = S,
            G = () => r(x, m, g),
            ve = () => {
              M(x, () => {
                G(), H && H();
              });
            };
          L ? L(x, G, ve) : ve();
        }
      else r(x, m, g);
    },
    it = (d, m, g, b = !1, w = !1) => {
      const {
        type: x,
        props: k,
        ref: S,
        children: _,
        dynamicChildren: O,
        shapeFlag: F,
        patchFlag: M,
        dirs: L,
      } = d;
      if ((S != null && Oi(S, null, g, d, !0), F & 256)) {
        m.ctx.deactivate(d);
        return;
      }
      const H = F & 1 && L,
        G = !vi(d);
      let ve;
      if ((G && (ve = k && k.onVnodeBeforeUnmount) && St(ve, m, d), F & 6))
        R(d.component, g, b);
      else {
        if (F & 128) {
          d.suspense.unmount(g, b);
          return;
        }
        H && an(d, null, m, 'beforeUnmount'),
          F & 64
            ? d.type.remove(d, m, g, w, me, b)
            : O && (x !== ke || (M > 0 && M & 64))
            ? P(O, m, g, !1, !0)
            : ((x === ke && M & (128 | 256)) || (!w && F & 16)) && P(_, m, g),
          b && zs(d);
      }
      ((G && (ve = k && k.onVnodeUnmounted)) || H) &&
        We(() => {
          ve && St(ve, m, d), H && an(d, null, m, 'unmounted');
        }, g);
    },
    zs = d => {
      const { type: m, el: g, anchor: b, transition: w } = d;
      if (m === ke) {
        y(g, b);
        return;
      }
      if (m === Ci) {
        K(d);
        return;
      }
      const x = () => {
        s(g), w && !w.persisted && w.afterLeave && w.afterLeave();
      };
      if (d.shapeFlag & 1 && w && !w.persisted) {
        const { leave: k, delayLeave: S } = w,
          _ = () => k(g, x);
        S ? S(d.el, x, _) : _();
      } else x();
    },
    y = (d, m) => {
      let g;
      for (; d !== m; ) (g = h(d)), s(d), (d = g);
      s(m);
    },
    R = (d, m, g) => {
      const { bum: b, scope: w, update: x, subTree: k, um: S } = d;
      b && jr(b),
        w.stop(),
        x && ((x.active = !1), it(k, d, m, g)),
        S && We(S, m),
        We(() => {
          d.isUnmounted = !0;
        }, m),
        m &&
          m.pendingBranch &&
          !m.isUnmounted &&
          d.asyncDep &&
          !d.asyncResolved &&
          d.suspenseId === m.pendingId &&
          (m.deps--, m.deps === 0 && m.resolve());
    },
    P = (d, m, g, b = !1, w = !1, x = 0) => {
      for (let k = x; k < d.length; k++) it(d[k], m, g, b, w);
    },
    D = d =>
      d.shapeFlag & 6
        ? D(d.component.subTree)
        : d.shapeFlag & 128
        ? d.suspense.next()
        : h(d.anchor || d.el),
    ue = (d, m, g) => {
      d == null
        ? m._vnode && it(m._vnode, null, null, !0)
        : T(m._vnode || null, d, m, null, null, null, g),
        Qa(),
        (m._vnode = d);
    },
    me = {
      p: T,
      um: it,
      m: wt,
      r: zs,
      mt: xn,
      mc: Y,
      pc: st,
      pbc: Oe,
      n: D,
      o: e,
    };
  let z, q;
  return (
    t && ([z, q] = t(me)), { render: ue, hydrate: z, createApp: Qd(ue, z) }
  );
}
function ln({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function Si(e, t, n = !1) {
  const r = e.children,
    s = t.children;
  if (V(r) && V(s))
    for (let i = 0; i < r.length; i++) {
      const o = r[i];
      let a = s[i];
      a.shapeFlag & 1 &&
        !a.dynamicChildren &&
        ((a.patchFlag <= 0 || a.patchFlag === 32) &&
          ((a = s[i] = Lt(s[i])), (a.el = o.el)),
        n || Si(o, a));
    }
}
function th(e) {
  const t = e.slice(),
    n = [0];
  let r, s, i, o, a;
  const l = e.length;
  for (r = 0; r < l; r++) {
    const u = e[r];
    if (u !== 0) {
      if (((s = n[n.length - 1]), e[s] < u)) {
        (t[r] = s), n.push(r);
        continue;
      }
      for (i = 0, o = n.length - 1; i < o; )
        (a = (i + o) >> 1), e[n[a]] < u ? (i = a + 1) : (o = a);
      u < e[n[i]] && (i > 0 && (t[r] = n[i - 1]), (n[i] = r));
    }
  }
  for (i = n.length, o = n[i - 1]; i-- > 0; ) (n[i] = o), (o = t[o]);
  return n;
}
const nh = e => e.__isTeleport,
  cr = e => e && (e.disabled || e.disabled === ''),
  Fa = e => typeof SVGElement != 'undefined' && e instanceof SVGElement,
  xi = (e, t) => {
    const n = e && e.to;
    return Ie(n) ? (t ? t(n) : null) : n;
  },
  rh = {
    __isTeleport: !0,
    process(e, t, n, r, s, i, o, a, l, u) {
      const {
          mc: c,
          pc: f,
          pbc: h,
          o: { insert: p, querySelector: v, createText: N, createComment: T },
        } = u,
        E = cr(t.props);
      let { shapeFlag: A, children: C, dynamicChildren: $ } = t;
      if (e == null) {
        const K = (t.el = N('')),
          te = (t.anchor = N(''));
        p(K, n, r), p(te, n, r);
        const ie = (t.target = xi(t.props, v)),
          be = (t.targetAnchor = N(''));
        ie && (p(be, ie), (o = o || Fa(ie)));
        const Y = (Me, Oe) => {
          A & 16 && c(C, Me, Oe, s, i, o, a, l);
        };
        E ? Y(n, te) : ie && Y(ie, be);
      } else {
        t.el = e.el;
        const K = (t.anchor = e.anchor),
          te = (t.target = e.target),
          ie = (t.targetAnchor = e.targetAnchor),
          be = cr(e.props),
          Y = be ? n : te,
          Me = be ? K : ie;
        if (
          ((o = o || Fa(te)),
          $
            ? (h(e.dynamicChildren, $, Y, s, i, o, a), Si(e, t, !0))
            : l || f(e, t, Y, Me, s, i, o, a, !1),
          E)
        )
          be || ts(t, n, K, u, 1);
        else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
          const Oe = (t.target = xi(t.props, v));
          Oe && ts(t, Oe, null, u, 0);
        } else be && ts(t, te, ie, u, 1);
      }
    },
    remove(e, t, n, r, { um: s, o: { remove: i } }, o) {
      const {
        shapeFlag: a,
        children: l,
        anchor: u,
        targetAnchor: c,
        target: f,
        props: h,
      } = e;
      if ((f && i(c), (o || !cr(h)) && (i(u), a & 16)))
        for (let p = 0; p < l.length; p++) {
          const v = l[p];
          s(v, t, n, !0, !!v.dynamicChildren);
        }
    },
    move: ts,
    hydrate: sh,
  };
function ts(e, t, n, { o: { insert: r }, m: s }, i = 2) {
  i === 0 && r(e.targetAnchor, t, n);
  const { el: o, anchor: a, shapeFlag: l, children: u, props: c } = e,
    f = i === 2;
  if ((f && r(o, t, n), (!f || cr(c)) && l & 16))
    for (let h = 0; h < u.length; h++) s(u[h], t, n, 2);
  f && r(a, t, n);
}
function sh(
  e,
  t,
  n,
  r,
  s,
  i,
  { o: { nextSibling: o, parentNode: a, querySelector: l } },
  u,
) {
  const c = (t.target = xi(t.props, l));
  if (c) {
    const f = c._lpa || c.firstChild;
    t.shapeFlag & 16 &&
      (cr(t.props)
        ? ((t.anchor = u(o(e), t, a(e), n, r, s, i)), (t.targetAnchor = f))
        : ((t.anchor = o(e)), (t.targetAnchor = u(f, t, c, n, r, s, i))),
      (c._lpa = t.targetAnchor && o(t.targetAnchor)));
  }
  return t.anchor && o(t.anchor);
}
const ih = rh,
  La = 'components';
function Ne(e, t) {
  return ah(La, e, !0, t) || e;
}
const oh = Symbol();
function ah(e, t, n = !0, r = !1) {
  const s = ot || Re;
  if (s) {
    const i = s.type;
    if (e === La) {
      const a = bh(i);
      if (a && (a === t || a === Tt(t) || a === Hr(Tt(t)))) return i;
    }
    const o = Ua(s[e] || i[e], t) || Ua(s.appContext[e], t);
    return !o && r ? i : o;
  }
}
function Ua(e, t) {
  return e && (e[t] || e[Tt(t)] || e[Hr(Tt(t))]);
}
const ke = Symbol(void 0),
  _i = Symbol(void 0),
  Ft = Symbol(void 0),
  Ci = Symbol(void 0),
  fr = [];
let un = null;
function j(e = !1) {
  fr.push((un = e ? null : []));
}
function lh() {
  fr.pop(), (un = fr[fr.length - 1] || null);
}
let ns = 1;
function Ha(e) {
  ns += e;
}
function Va(e) {
  return (
    (e.dynamicChildren = ns > 0 ? un || An : null),
    lh(),
    ns > 0 && un && un.push(e),
    e
  );
}
function pe(e, t, n, r, s, i) {
  return Va(Q(e, t, n, r, s, i, !0));
}
function je(e, t, n, r, s) {
  return Va(X(e, t, n, r, s, !0));
}
function rs(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function dr(e, t) {
  return e.type === t.type && e.key === t.key;
}
const ss = '__vInternal',
  ja = ({ key: e }) => (e != null ? e : null),
  is = ({ ref: e, ref_key: t, ref_for: n }) =>
    e != null
      ? Ie(e) || He(e) || W(e)
        ? { i: ot, r: e, k: t, f: !!n }
        : e
      : null;
function Q(
  e,
  t = null,
  n = null,
  r = 0,
  s = null,
  i = e === ke ? 0 : 1,
  o = !1,
  a = !1,
) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && ja(t),
    ref: t && is(t),
    scopeId: Gr,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: i,
    patchFlag: r,
    dynamicProps: s,
    dynamicChildren: null,
    appContext: null,
  };
  return (
    a
      ? (Pi(l, n), i & 128 && e.normalize(l))
      : n && (l.shapeFlag |= Ie(n) ? 8 : 16),
    ns > 0 &&
      !o &&
      un &&
      (l.patchFlag > 0 || i & 6) &&
      l.patchFlag !== 32 &&
      un.push(l),
    l
  );
}
const X = uh;
function uh(e, t = null, n = null, r = 0, s = null, i = !1) {
  if (((!e || e === oh) && (e = Ft), rs(e))) {
    const a = Dn(e, t, !0);
    return n && Pi(a, n), a;
  }
  if ((Eh(e) && (e = e.__vccOpts), t)) {
    t = ch(t);
    let { class: a, style: l } = t;
    a && !Ie(a) && (t.class = Pn(a)),
      Pe(l) && (ma(l) && !V(l) && (l = Ue({}, l)), (t.style = Js(l)));
  }
  const o = Ie(e) ? 1 : Ad(e) ? 128 : nh(e) ? 64 : Pe(e) ? 4 : W(e) ? 2 : 0;
  return Q(e, t, n, r, s, o, i, !0);
}
function ch(e) {
  return e ? (ma(e) || ss in e ? Ue({}, e) : e) : null;
}
function Dn(e, t, n = !1) {
  const { props: r, ref: s, patchFlag: i, children: o } = e,
    a = t ? Ai(r || {}, t) : r;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: a,
    key: a && ja(a),
    ref:
      t && t.ref ? (n && s ? (V(s) ? s.concat(is(t)) : [s, is(t)]) : is(t)) : s,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: o,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    patchFlag: t && e.type !== ke ? (i === -1 ? 16 : i | 16) : i,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Dn(e.ssContent),
    ssFallback: e.ssFallback && Dn(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
  };
}
function Ee(e = ' ', t = 0) {
  return X(_i, null, e, t);
}
function ze(e = '', t = !1) {
  return t ? (j(), je(Ft, null, e)) : X(Ft, null, e);
}
function Ot(e) {
  return e == null || typeof e == 'boolean'
    ? X(Ft)
    : V(e)
    ? X(ke, null, e.slice())
    : typeof e == 'object'
    ? Lt(e)
    : X(_i, null, String(e));
}
function Lt(e) {
  return e.el === null || e.memo ? e : Dn(e);
}
function Pi(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null) t = null;
  else if (V(t)) n = 16;
  else if (typeof t == 'object')
    if (r & (1 | 64)) {
      const s = t.default;
      s && (s._c && (s._d = !1), Pi(e, s()), s._c && (s._d = !0));
      return;
    } else {
      n = 32;
      const s = t._;
      !s && !(ss in t)
        ? (t._ctx = ot)
        : s === 3 &&
          ot &&
          (ot.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)));
    }
  else
    W(t)
      ? ((t = { default: t, _ctx: ot }), (n = 32))
      : ((t = String(t)), r & 64 ? ((n = 16), (t = [Ee(t)])) : (n = 8));
  (e.children = t), (e.shapeFlag |= n);
}
function Ai(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const s in r)
      if (s === 'class')
        t.class !== r.class && (t.class = Pn([t.class, r.class]));
      else if (s === 'style') t.style = Js([t.style, r.style]);
      else if (Dr(s)) {
        const i = t[s],
          o = r[s];
        i !== o && !(V(i) && i.includes(o)) && (t[s] = i ? [].concat(i, o) : o);
      } else s !== '' && (t[s] = r[s]);
  }
  return t;
}
function St(e, t, n, r = null) {
  dt(e, t, 7, [n, r]);
}
function hr(e, t, n, r) {
  let s;
  const i = n && n[r];
  if (V(e) || Ie(e)) {
    s = new Array(e.length);
    for (let o = 0, a = e.length; o < a; o++)
      s[o] = t(e[o], o, void 0, i && i[o]);
  } else if (typeof e == 'number') {
    s = new Array(e);
    for (let o = 0; o < e; o++) s[o] = t(o + 1, o, void 0, i && i[o]);
  } else if (Pe(e))
    if (e[Symbol.iterator])
      s = Array.from(e, (o, a) => t(o, a, void 0, i && i[a]));
    else {
      const o = Object.keys(e);
      s = new Array(o.length);
      for (let a = 0, l = o.length; a < l; a++) {
        const u = o[a];
        s[a] = t(e[u], u, a, i && i[a]);
      }
    }
  else s = [];
  return n && (n[r] = s), s;
}
function xe(e, t, n = {}, r, s) {
  if (ot.isCE) return X('slot', t === 'default' ? null : { name: t }, r && r());
  let i = e[t];
  i && i._c && (i._d = !1), j();
  const o = i && Ba(i(n)),
    a = je(
      ke,
      { key: n.key || `_${t}` },
      o || (r ? r() : []),
      o && e._ === 1 ? 64 : -2,
    );
  return (
    !s && a.scopeId && (a.slotScopeIds = [a.scopeId + '-s']),
    i && i._c && (i._d = !0),
    a
  );
}
function Ba(e) {
  return e.some(t =>
    rs(t) ? !(t.type === Ft || (t.type === ke && !Ba(t.children))) : !0,
  )
    ? e
    : null;
}
function fh(e) {
  const t = {};
  for (const n in e) t[Vr(n)] = e[n];
  return t;
}
const Ii = e => (e ? (qa(e) ? Ni(e) || e.proxy : Ii(e.parent)) : null),
  os = Ue(Object.create(null), {
    $: e => e,
    $el: e => e.vnode.el,
    $data: e => e.data,
    $props: e => e.props,
    $attrs: e => e.attrs,
    $slots: e => e.slots,
    $refs: e => e.refs,
    $parent: e => Ii(e.parent),
    $root: e => Ii(e.root),
    $emit: e => e.emit,
    $options: e => xa(e),
    $forceUpdate: e => () => Ja(e.update),
    $nextTick: e => $i.bind(e.proxy),
    $watch: e => Ch.bind(e),
  }),
  dh = {
    get({ _: e }, t) {
      const {
        ctx: n,
        setupState: r,
        data: s,
        props: i,
        accessCache: o,
        type: a,
        appContext: l,
      } = e;
      let u;
      if (t[0] !== '$') {
        const p = o[t];
        if (p !== void 0)
          switch (p) {
            case 1:
              return r[t];
            case 2:
              return s[t];
            case 4:
              return n[t];
            case 3:
              return i[t];
          }
        else {
          if (r !== fe && ne(r, t)) return (o[t] = 1), r[t];
          if (s !== fe && ne(s, t)) return (o[t] = 2), s[t];
          if ((u = e.propsOptions[0]) && ne(u, t)) return (o[t] = 3), i[t];
          if (n !== fe && ne(n, t)) return (o[t] = 4), n[t];
          wi && (o[t] = 0);
        }
      }
      const c = os[t];
      let f, h;
      if (c) return t === '$attrs' && Ge(e, 'get', t), c(e);
      if ((f = a.__cssModules) && (f = f[t])) return f;
      if (n !== fe && ne(n, t)) return (o[t] = 4), n[t];
      if (((h = l.config.globalProperties), ne(h, t))) return h[t];
    },
    set({ _: e }, t, n) {
      const { data: r, setupState: s, ctx: i } = e;
      if (s !== fe && ne(s, t)) s[t] = n;
      else if (r !== fe && ne(r, t)) r[t] = n;
      else if (ne(e.props, t)) return !1;
      return t[0] === '$' && t.slice(1) in e ? !1 : ((i[t] = n), !0);
    },
    has(
      {
        _: {
          data: e,
          setupState: t,
          accessCache: n,
          ctx: r,
          appContext: s,
          propsOptions: i,
        },
      },
      o,
    ) {
      let a;
      return (
        !!n[o] ||
        (e !== fe && ne(e, o)) ||
        (t !== fe && ne(t, o)) ||
        ((a = i[0]) && ne(a, o)) ||
        ne(r, o) ||
        ne(os, o) ||
        ne(s.config.globalProperties, o)
      );
    },
  },
  hh = Da();
let mh = 0;
function ph(e, t, n) {
  const r = e.type,
    s = (t ? t.appContext : e.appContext) || hh,
    i = {
      uid: mh++,
      vnode: e,
      type: r,
      parent: t,
      appContext: s,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      scope: new Bf(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(s.provides),
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: Pa(r, s),
      emitsOptions: wa(r, s),
      emit: null,
      emitted: null,
      propsDefaults: fe,
      inheritAttrs: r.inheritAttrs,
      ctx: fe,
      data: fe,
      props: fe,
      attrs: fe,
      slots: fe,
      refs: fe,
      setupState: fe,
      setupContext: null,
      suspense: n,
      suspenseId: n ? n.pendingId : 0,
      asyncDep: null,
      asyncResolved: !1,
      isMounted: !1,
      isUnmounted: !1,
      isDeactivated: !1,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null,
    };
  return (
    (i.ctx = { _: i }),
    (i.root = t ? t.root : i),
    (i.emit = Td.bind(null, i)),
    e.ce && e.ce(i),
    i
  );
}
let Re = null;
const Fn = e => {
    (Re = e), e.scope.on();
  },
  cn = () => {
    Re && Re.scope.off(), (Re = null);
  };
function qa(e) {
  return e.vnode.shapeFlag & 4;
}
let as = !1;
function gh(e, t = !1) {
  as = t;
  const { props: n, children: r } = e.vnode,
    s = qa(e);
  zd(e, n, s, t), Jd(e, r);
  const i = s ? vh(e, t) : void 0;
  return (as = !1), i;
}
function vh(e, t) {
  const n = e.type;
  (e.accessCache = Object.create(null)), (e.proxy = hi(new Proxy(e.ctx, dh)));
  const { setup: r } = n;
  if (r) {
    const s = (e.setupContext = r.length > 1 ? wh(e) : null);
    Fn(e), Mn();
    const i = Ut(r, e, 0, [e.props, s]);
    if ((nn(), cn(), Zo(i))) {
      if ((i.then(cn, cn), t))
        return i
          .then(o => {
            Wa(e, o, t);
          })
          .catch(o => {
            ls(o, e, 0);
          });
      e.asyncDep = i;
    } else Wa(e, i, t);
  } else Za(e, t);
}
function Wa(e, t, n) {
  W(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : Pe(t) && (e.setupState = ya(t)),
    Za(e, n);
}
let za;
function Za(e, t, n) {
  const r = e.type;
  if (!e.render) {
    if (!t && za && !r.render) {
      const s = r.template;
      if (s) {
        const { isCustomElement: i, compilerOptions: o } = e.appContext.config,
          { delimiters: a, compilerOptions: l } = r,
          u = Ue(Ue({ isCustomElement: i, delimiters: a }, o), l);
        r.render = za(s, u);
      }
    }
    e.render = r.render || ft;
  }
  Fn(e), Mn(), Vd(e), nn(), cn();
}
function yh(e) {
  return new Proxy(e.attrs, {
    get(t, n) {
      return Ge(e, 'get', '$attrs'), t[n];
    },
  });
}
function wh(e) {
  const t = r => {
    e.exposed = r || {};
  };
  let n;
  return {
    get attrs() {
      return n || (n = yh(e));
    },
    slots: e.slots,
    emit: e.emit,
    expose: t,
  };
}
function Ni(e) {
  if (e.exposed)
    return (
      e.exposeProxy ||
      (e.exposeProxy = new Proxy(ya(hi(e.exposed)), {
        get(t, n) {
          if (n in t) return t[n];
          if (n in os) return os[n](e);
        },
      }))
    );
}
function bh(e) {
  return (W(e) && e.displayName) || e.name;
}
function Eh(e) {
  return W(e) && '__vccOpts' in e;
}
function Ut(e, t, n, r) {
  let s;
  try {
    s = r ? e(...r) : e();
  } catch (i) {
    ls(i, t, n);
  }
  return s;
}
function dt(e, t, n, r) {
  if (W(e)) {
    const i = Ut(e, t, n, r);
    return (
      i &&
        Zo(i) &&
        i.catch(o => {
          ls(o, t, n);
        }),
      i
    );
  }
  const s = [];
  for (let i = 0; i < e.length; i++) s.push(dt(e[i], t, n, r));
  return s;
}
function ls(e, t, n, r = !0) {
  const s = t ? t.vnode : null;
  if (t) {
    let i = t.parent;
    const o = t.proxy,
      a = n;
    for (; i; ) {
      const u = i.ec;
      if (u) {
        for (let c = 0; c < u.length; c++) if (u[c](e, o, a) === !1) return;
      }
      i = i.parent;
    }
    const l = t.appContext.config.errorHandler;
    if (l) {
      Ut(l, null, 10, [e, o, a]);
      return;
    }
  }
  Th(e, n, s, r);
}
function Th(e, t, n, r = !0) {
  console.error(e);
}
let us = !1,
  ki = !1;
const Xe = [];
let Nt = 0;
const mr = [];
let pr = null,
  Ln = 0;
const gr = [];
let Ht = null,
  Un = 0;
const Ya = Promise.resolve();
let Mi = null,
  Ri = null;
function $i(e) {
  const t = Mi || Ya;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Oh(e) {
  let t = Nt + 1,
    n = Xe.length;
  for (; t < n; ) {
    const r = (t + n) >>> 1;
    vr(Xe[r]) < e ? (t = r + 1) : (n = r);
  }
  return t;
}
function Ja(e) {
  (!Xe.length || !Xe.includes(e, us && e.allowRecurse ? Nt + 1 : Nt)) &&
    e !== Ri &&
    (e.id == null ? Xe.push(e) : Xe.splice(Oh(e.id), 0, e), Ka());
}
function Ka() {
  !us && !ki && ((ki = !0), (Mi = Ya.then(Xa)));
}
function Sh(e) {
  const t = Xe.indexOf(e);
  t > Nt && Xe.splice(t, 1);
}
function Ga(e, t, n, r) {
  V(e)
    ? n.push(...e)
    : (!t || !t.includes(e, e.allowRecurse ? r + 1 : r)) && n.push(e),
    Ka();
}
function xh(e) {
  Ga(e, pr, mr, Ln);
}
function _h(e) {
  Ga(e, Ht, gr, Un);
}
function Di(e, t = null) {
  if (mr.length) {
    for (
      Ri = t, pr = [...new Set(mr)], mr.length = 0, Ln = 0;
      Ln < pr.length;
      Ln++
    )
      pr[Ln]();
    (pr = null), (Ln = 0), (Ri = null), Di(e, t);
  }
}
function Qa(e) {
  if (gr.length) {
    const t = [...new Set(gr)];
    if (((gr.length = 0), Ht)) {
      Ht.push(...t);
      return;
    }
    for (Ht = t, Ht.sort((n, r) => vr(n) - vr(r)), Un = 0; Un < Ht.length; Un++)
      Ht[Un]();
    (Ht = null), (Un = 0);
  }
}
const vr = e => (e.id == null ? 1 / 0 : e.id);
function Xa(e) {
  (ki = !1), (us = !0), Di(e), Xe.sort((n, r) => vr(n) - vr(r));
  const t = ft;
  try {
    for (Nt = 0; Nt < Xe.length; Nt++) {
      const n = Xe[Nt];
      n && n.active !== !1 && Ut(n, null, 14);
    }
  } finally {
    (Nt = 0),
      (Xe.length = 0),
      Qa(),
      (us = !1),
      (Mi = null),
      (Xe.length || mr.length || gr.length) && Xa(e);
  }
}
function ht(e, t) {
  return Fi(e, null, t);
}
const el = {};
function kt(e, t, n) {
  return Fi(e, t, n);
}
function Fi(
  e,
  t,
  { immediate: n, deep: r, flush: s, onTrack: i, onTrigger: o } = fe,
) {
  const a = Re;
  let l,
    u = !1,
    c = !1;
  if (
    (He(e)
      ? ((l = () => e.value), (u = !!e._shallow))
      : $n(e)
      ? ((l = () => e), (r = !0))
      : V(e)
      ? ((c = !0),
        (u = e.some($n)),
        (l = () =>
          e.map(E => {
            if (He(E)) return E.value;
            if ($n(E)) return fn(E);
            if (W(E)) return Ut(E, a, 2);
          })))
      : W(e)
      ? t
        ? (l = () => Ut(e, a, 2))
        : (l = () => {
            if (!(a && a.isUnmounted)) return f && f(), dt(e, a, 3, [h]);
          })
      : (l = ft),
    t && r)
  ) {
    const E = l;
    l = () => fn(E());
  }
  let f,
    h = E => {
      f = T.onStop = () => {
        Ut(E, a, 4);
      };
    };
  if (as)
    return (h = ft), t ? n && dt(t, a, 3, [l(), c ? [] : void 0, h]) : l(), ft;
  let p = c ? [] : el;
  const v = () => {
    if (!!T.active)
      if (t) {
        const E = T.run();
        (r || u || (c ? E.some((A, C) => ir(A, p[C])) : ir(E, p))) &&
          (f && f(), dt(t, a, 3, [E, p === el ? void 0 : p, h]), (p = E));
      } else T.run();
  };
  v.allowRecurse = !!t;
  let N;
  s === 'sync'
    ? (N = v)
    : s === 'post'
    ? (N = () => We(v, a && a.suspense))
    : (N = () => {
        !a || a.isMounted ? xh(v) : v();
      });
  const T = new ii(l, N);
  return (
    t
      ? n
        ? v()
        : (p = T.run())
      : s === 'post'
      ? We(T.run.bind(T), a && a.suspense)
      : T.run(),
    () => {
      T.stop(), a && a.scope && Gs(a.scope.effects, T);
    }
  );
}
function Ch(e, t, n) {
  const r = this.proxy,
    s = Ie(e) ? (e.includes('.') ? tl(r, e) : () => r[e]) : e.bind(r, r);
  let i;
  W(t) ? (i = t) : ((i = t.handler), (n = t));
  const o = Re;
  Fn(this);
  const a = Fi(s, i.bind(r), n);
  return o ? Fn(o) : cn(), a;
}
function tl(e, t) {
  const n = t.split('.');
  return () => {
    let r = e;
    for (let s = 0; s < n.length && r; s++) r = r[n[s]];
    return r;
  };
}
function fn(e, t) {
  if (!Pe(e) || e.__v_skip || ((t = t || new Set()), t.has(e))) return e;
  if ((t.add(e), He(e))) fn(e.value, t);
  else if (V(e)) for (let n = 0; n < e.length; n++) fn(e[n], t);
  else if (zo(e) || In(e))
    e.forEach(n => {
      fn(n, t);
    });
  else if (Jo(e)) for (const n in e) fn(e[n], t);
  return e;
}
function xt(e, t, n) {
  const r = arguments.length;
  return r === 2
    ? Pe(t) && !V(t)
      ? rs(t)
        ? X(e, null, [t])
        : X(e, t)
      : X(e, null, t)
    : (r > 3
        ? (n = Array.prototype.slice.call(arguments, 2))
        : r === 3 && rs(n) && (n = [n]),
      X(e, t, n));
}
const Ph = '3.2.26',
  Ah = 'http://www.w3.org/2000/svg',
  Hn = typeof document != 'undefined' ? document : null,
  nl = new Map(),
  Ih = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null);
    },
    remove: e => {
      const t = e.parentNode;
      t && t.removeChild(e);
    },
    createElement: (e, t, n, r) => {
      const s = t
        ? Hn.createElementNS(Ah, e)
        : Hn.createElement(e, n ? { is: n } : void 0);
      return (
        e === 'select' &&
          r &&
          r.multiple != null &&
          s.setAttribute('multiple', r.multiple),
        s
      );
    },
    createText: e => Hn.createTextNode(e),
    createComment: e => Hn.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t;
    },
    setElementText: (e, t) => {
      e.textContent = t;
    },
    parentNode: e => e.parentNode,
    nextSibling: e => e.nextSibling,
    querySelector: e => Hn.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, '');
    },
    cloneNode(e) {
      const t = e.cloneNode(!0);
      return '_value' in e && (t._value = e._value), t;
    },
    insertStaticContent(e, t, n, r) {
      const s = n ? n.previousSibling : t.lastChild;
      let i = nl.get(e);
      if (!i) {
        const o = Hn.createElement('template');
        if (((o.innerHTML = r ? `<svg>${e}</svg>` : e), (i = o.content), r)) {
          const a = i.firstChild;
          for (; a.firstChild; ) i.appendChild(a.firstChild);
          i.removeChild(a);
        }
        nl.set(e, i);
      }
      return (
        t.insertBefore(i.cloneNode(!0), n),
        [s ? s.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild]
      );
    },
  };
function Nh(e, t, n) {
  const r = e._vtc;
  r && (t = (t ? [t, ...r] : [...r]).join(' ')),
    t == null
      ? e.removeAttribute('class')
      : n
      ? e.setAttribute('class', t)
      : (e.className = t);
}
function kh(e, t, n) {
  const r = e.style,
    s = Ie(n);
  if (n && !s) {
    for (const i in n) Li(r, i, n[i]);
    if (t && !Ie(t)) for (const i in t) n[i] == null && Li(r, i, '');
  } else {
    const i = r.display;
    s ? t !== n && (r.cssText = n) : t && e.removeAttribute('style'),
      '_vod' in e && (r.display = i);
  }
}
const rl = /\s*!important$/;
function Li(e, t, n) {
  if (V(n)) n.forEach(r => Li(e, t, r));
  else if (t.startsWith('--')) e.setProperty(t, n);
  else {
    const r = Mh(e, t);
    rl.test(n)
      ? e.setProperty(Nn(r), n.replace(rl, ''), 'important')
      : (e[r] = n);
  }
}
const sl = ['Webkit', 'Moz', 'ms'],
  Ui = {};
function Mh(e, t) {
  const n = Ui[t];
  if (n) return n;
  let r = Tt(t);
  if (r !== 'filter' && r in e) return (Ui[t] = r);
  r = Hr(r);
  for (let s = 0; s < sl.length; s++) {
    const i = sl[s] + r;
    if (i in e) return (Ui[t] = i);
  }
  return t;
}
const il = 'http://www.w3.org/1999/xlink';
function Rh(e, t, n, r, s) {
  if (r && t.startsWith('xlink:'))
    n == null
      ? e.removeAttributeNS(il, t.slice(6, t.length))
      : e.setAttributeNS(il, t, n);
  else {
    const i = kf(t);
    n == null || (i && !qo(n))
      ? e.removeAttribute(t)
      : e.setAttribute(t, i ? '' : n);
  }
}
function $h(e, t, n, r, s, i, o) {
  if (t === 'innerHTML' || t === 'textContent') {
    r && o(r, s, i), (e[t] = n == null ? '' : n);
    return;
  }
  if (t === 'value' && e.tagName !== 'PROGRESS' && !e.tagName.includes('-')) {
    e._value = n;
    const a = n == null ? '' : n;
    (e.value !== a || e.tagName === 'OPTION') && (e.value = a),
      n == null && e.removeAttribute(t);
    return;
  }
  if (n === '' || n == null) {
    const a = typeof e[t];
    if (a === 'boolean') {
      e[t] = qo(n);
      return;
    } else if (n == null && a === 'string') {
      (e[t] = ''), e.removeAttribute(t);
      return;
    } else if (a === 'number') {
      try {
        e[t] = 0;
      } catch {}
      e.removeAttribute(t);
      return;
    }
  }
  try {
    e[t] = n;
  } catch {}
}
let cs = Date.now,
  ol = !1;
if (typeof window != 'undefined') {
  cs() > document.createEvent('Event').timeStamp &&
    (cs = () => performance.now());
  const e = navigator.userAgent.match(/firefox\/(\d+)/i);
  ol = !!(e && Number(e[1]) <= 53);
}
let Hi = 0;
const Dh = Promise.resolve(),
  Fh = () => {
    Hi = 0;
  },
  Lh = () => Hi || (Dh.then(Fh), (Hi = cs()));
function Vn(e, t, n, r) {
  e.addEventListener(t, n, r);
}
function Uh(e, t, n, r) {
  e.removeEventListener(t, n, r);
}
function Hh(e, t, n, r, s = null) {
  const i = e._vei || (e._vei = {}),
    o = i[t];
  if (r && o) o.value = r;
  else {
    const [a, l] = Vh(t);
    if (r) {
      const u = (i[t] = jh(r, s));
      Vn(e, a, u, l);
    } else o && (Uh(e, a, o, l), (i[t] = void 0));
  }
}
const al = /(?:Once|Passive|Capture)$/;
function Vh(e) {
  let t;
  if (al.test(e)) {
    t = {};
    let n;
    for (; (n = e.match(al)); )
      (e = e.slice(0, e.length - n[0].length)), (t[n[0].toLowerCase()] = !0);
  }
  return [Nn(e.slice(2)), t];
}
function jh(e, t) {
  const n = r => {
    const s = r.timeStamp || cs();
    (ol || s >= n.attached - 1) && dt(Bh(r, n.value), t, 5, [r]);
  };
  return (n.value = e), (n.attached = Lh()), n;
}
function Bh(e, t) {
  if (V(t)) {
    const n = e.stopImmediatePropagation;
    return (
      (e.stopImmediatePropagation = () => {
        n.call(e), (e._stopped = !0);
      }),
      t.map(r => s => !s._stopped && r(s))
    );
  } else return t;
}
const ll = /^on[a-z]/,
  qh = (e, t, n, r, s = !1, i, o, a, l) => {
    t === 'class'
      ? Nh(e, r, s)
      : t === 'style'
      ? kh(e, n, r)
      : Dr(t)
      ? Ks(t) || Hh(e, t, n, r, o)
      : (
          t[0] === '.'
            ? ((t = t.slice(1)), !0)
            : t[0] === '^'
            ? ((t = t.slice(1)), !1)
            : Wh(e, t, r, s)
        )
      ? $h(e, t, r, i, o, a, l)
      : (t === 'true-value'
          ? (e._trueValue = r)
          : t === 'false-value' && (e._falseValue = r),
        Rh(e, t, r, s));
  };
function Wh(e, t, n, r) {
  return r
    ? !!(
        t === 'innerHTML' ||
        t === 'textContent' ||
        (t in e && ll.test(t) && W(n))
      )
    : t === 'spellcheck' ||
      t === 'draggable' ||
      t === 'form' ||
      (t === 'list' && e.tagName === 'INPUT') ||
      (t === 'type' && e.tagName === 'TEXTAREA') ||
      (ll.test(t) && Ie(n))
    ? !1
    : t in e;
}
const ul = e => {
  const t = e.props['onUpdate:modelValue'];
  return V(t) ? n => jr(t, n) : t;
};
function zh(e) {
  e.target.composing = !0;
}
function cl(e) {
  const t = e.target;
  t.composing && ((t.composing = !1), Zh(t, 'input'));
}
function Zh(e, t) {
  const n = document.createEvent('HTMLEvents');
  n.initEvent(t, !0, !0), e.dispatchEvent(n);
}
const Ew = {
    created(e, { modifiers: { lazy: t, trim: n, number: r } }, s) {
      e._assign = ul(s);
      const i = r || (s.props && s.props.type === 'number');
      Vn(e, t ? 'change' : 'input', o => {
        if (o.target.composing) return;
        let a = e.value;
        n ? (a = a.trim()) : i && (a = ei(a)), e._assign(a);
      }),
        n &&
          Vn(e, 'change', () => {
            e.value = e.value.trim();
          }),
        t ||
          (Vn(e, 'compositionstart', zh),
          Vn(e, 'compositionend', cl),
          Vn(e, 'change', cl));
    },
    mounted(e, { value: t }) {
      e.value = t == null ? '' : t;
    },
    beforeUpdate(
      e,
      { value: t, modifiers: { lazy: n, trim: r, number: s } },
      i,
    ) {
      if (
        ((e._assign = ul(i)),
        e.composing ||
          (document.activeElement === e &&
            (n ||
              (r && e.value.trim() === t) ||
              ((s || e.type === 'number') && ei(e.value) === t))))
      )
        return;
      const o = t == null ? '' : t;
      e.value !== o && (e.value = o);
    },
  },
  Yh = ['ctrl', 'shift', 'alt', 'meta'],
  Jh = {
    stop: e => e.stopPropagation(),
    prevent: e => e.preventDefault(),
    self: e => e.target !== e.currentTarget,
    ctrl: e => !e.ctrlKey,
    shift: e => !e.shiftKey,
    alt: e => !e.altKey,
    meta: e => !e.metaKey,
    left: e => 'button' in e && e.button !== 0,
    middle: e => 'button' in e && e.button !== 1,
    right: e => 'button' in e && e.button !== 2,
    exact: (e, t) => Yh.some(n => e[`${n}Key`] && !t.includes(n)),
  },
  Vt =
    (e, t) =>
    (n, ...r) => {
      for (let s = 0; s < t.length; s++) {
        const i = Jh[t[s]];
        if (i && i(n, t)) return;
      }
      return e(n, ...r);
    },
  Kh = Ue({ patchProp: qh }, Ih);
let fl;
function Gh() {
  return fl || (fl = Xd(Kh));
}
const Tw = (...e) => {
  const t = Gh().createApp(...e),
    { mount: n } = t;
  return (
    (t.mount = r => {
      const s = Qh(r);
      if (!s) return;
      const i = t._component;
      !W(i) && !i.render && !i.template && (i.template = s.innerHTML),
        (s.innerHTML = '');
      const o = n(s, !1, s instanceof SVGElement);
      return (
        s instanceof Element &&
          (s.removeAttribute('v-cloak'), s.setAttribute('data-v-app', '')),
        o
      );
    }),
    t
  );
};
function Qh(e) {
  return Ie(e) ? document.querySelector(e) : e;
}
/*!
 * vue-router v4.0.12
 * (c) 2021 Eduardo San Martin Morote
 * @license MIT
 */ const dl =
    typeof Symbol == 'function' && typeof Symbol.toStringTag == 'symbol',
  jn = e => (dl ? Symbol(e) : '_vr_' + e),
  Xh = jn('rvlm'),
  hl = jn('rvd'),
  Vi = jn('r'),
  ml = jn('rl'),
  ji = jn('rvl'),
  Bn = typeof window != 'undefined';
function em(e) {
  return e.__esModule || (dl && e[Symbol.toStringTag] === 'Module');
}
const de = Object.assign;
function Bi(e, t) {
  const n = {};
  for (const r in t) {
    const s = t[r];
    n[r] = Array.isArray(s) ? s.map(e) : e(s);
  }
  return n;
}
const yr = () => {},
  tm = /\/$/,
  nm = e => e.replace(tm, '');
function qi(e, t, n = '/') {
  let r,
    s = {},
    i = '',
    o = '';
  const a = t.indexOf('?'),
    l = t.indexOf('#', a > -1 ? a : 0);
  return (
    a > -1 &&
      ((r = t.slice(0, a)),
      (i = t.slice(a + 1, l > -1 ? l : t.length)),
      (s = e(i))),
    l > -1 && ((r = r || t.slice(0, l)), (o = t.slice(l, t.length))),
    (r = om(r != null ? r : t, n)),
    { fullPath: r + (i && '?') + i + o, path: r, query: s, hash: o }
  );
}
function rm(e, t) {
  const n = t.query ? e(t.query) : '';
  return t.path + (n && '?') + n + (t.hash || '');
}
function pl(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase())
    ? e
    : e.slice(t.length) || '/';
}
function sm(e, t, n) {
  const r = t.matched.length - 1,
    s = n.matched.length - 1;
  return (
    r > -1 &&
    r === s &&
    qn(t.matched[r], n.matched[s]) &&
    gl(t.params, n.params) &&
    e(t.query) === e(n.query) &&
    t.hash === n.hash
  );
}
function qn(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function gl(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1;
  for (const n in e) if (!im(e[n], t[n])) return !1;
  return !0;
}
function im(e, t) {
  return Array.isArray(e) ? vl(e, t) : Array.isArray(t) ? vl(t, e) : e === t;
}
function vl(e, t) {
  return Array.isArray(t)
    ? e.length === t.length && e.every((n, r) => n === t[r])
    : e.length === 1 && e[0] === t;
}
function om(e, t) {
  if (e.startsWith('/')) return e;
  if (!e) return t;
  const n = t.split('/'),
    r = e.split('/');
  let s = n.length - 1,
    i,
    o;
  for (i = 0; i < r.length; i++)
    if (((o = r[i]), !(s === 1 || o === '.')))
      if (o === '..') s--;
      else break;
  return (
    n.slice(0, s).join('/') +
    '/' +
    r.slice(i - (i === r.length ? 1 : 0)).join('/')
  );
}
var wr;
(function (e) {
  (e.pop = 'pop'), (e.push = 'push');
})(wr || (wr = {}));
var br;
(function (e) {
  (e.back = 'back'), (e.forward = 'forward'), (e.unknown = '');
})(br || (br = {}));
function am(e) {
  if (!e)
    if (Bn) {
      const t = document.querySelector('base');
      (e = (t && t.getAttribute('href')) || '/'),
        (e = e.replace(/^\w+:\/\/[^\/]+/, ''));
    } else e = '/';
  return e[0] !== '/' && e[0] !== '#' && (e = '/' + e), nm(e);
}
const lm = /^[^#]+#/;
function um(e, t) {
  return e.replace(lm, '#') + t;
}
function cm(e, t) {
  const n = document.documentElement.getBoundingClientRect(),
    r = e.getBoundingClientRect();
  return {
    behavior: t.behavior,
    left: r.left - n.left - (t.left || 0),
    top: r.top - n.top - (t.top || 0),
  };
}
const fs = () => ({ left: window.pageXOffset, top: window.pageYOffset });
function fm(e) {
  let t;
  if ('el' in e) {
    const n = e.el,
      r = typeof n == 'string' && n.startsWith('#'),
      s =
        typeof n == 'string'
          ? r
            ? document.getElementById(n.slice(1))
            : document.querySelector(n)
          : n;
    if (!s) return;
    t = cm(s, e);
  } else t = e;
  'scrollBehavior' in document.documentElement.style
    ? window.scrollTo(t)
    : window.scrollTo(
        t.left != null ? t.left : window.pageXOffset,
        t.top != null ? t.top : window.pageYOffset,
      );
}
function yl(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const Wi = new Map();
function dm(e, t) {
  Wi.set(e, t);
}
function hm(e) {
  const t = Wi.get(e);
  return Wi.delete(e), t;
}
let mm = () => location.protocol + '//' + location.host;
function wl(e, t) {
  const { pathname: n, search: r, hash: s } = t,
    i = e.indexOf('#');
  if (i > -1) {
    let a = s.includes(e.slice(i)) ? e.slice(i).length : 1,
      l = s.slice(a);
    return l[0] !== '/' && (l = '/' + l), pl(l, '');
  }
  return pl(n, e) + r + s;
}
function pm(e, t, n, r) {
  let s = [],
    i = [],
    o = null;
  const a = ({ state: h }) => {
    const p = wl(e, location),
      v = n.value,
      N = t.value;
    let T = 0;
    if (h) {
      if (((n.value = p), (t.value = h), o && o === v)) {
        o = null;
        return;
      }
      T = N ? h.position - N.position : 0;
    } else r(p);
    s.forEach(E => {
      E(n.value, v, {
        delta: T,
        type: wr.pop,
        direction: T ? (T > 0 ? br.forward : br.back) : br.unknown,
      });
    });
  };
  function l() {
    o = n.value;
  }
  function u(h) {
    s.push(h);
    const p = () => {
      const v = s.indexOf(h);
      v > -1 && s.splice(v, 1);
    };
    return i.push(p), p;
  }
  function c() {
    const { history: h } = window;
    !h.state || h.replaceState(de({}, h.state, { scroll: fs() }), '');
  }
  function f() {
    for (const h of i) h();
    (i = []),
      window.removeEventListener('popstate', a),
      window.removeEventListener('beforeunload', c);
  }
  return (
    window.addEventListener('popstate', a),
    window.addEventListener('beforeunload', c),
    { pauseListeners: l, listen: u, destroy: f }
  );
}
function bl(e, t, n, r = !1, s = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: r,
    position: window.history.length,
    scroll: s ? fs() : null,
  };
}
function gm(e) {
  const { history: t, location: n } = window,
    r = { value: wl(e, n) },
    s = { value: t.state };
  s.value ||
    i(
      r.value,
      {
        back: null,
        current: r.value,
        forward: null,
        position: t.length - 1,
        replaced: !0,
        scroll: null,
      },
      !0,
    );
  function i(l, u, c) {
    const f = e.indexOf('#'),
      h =
        f > -1
          ? (n.host && document.querySelector('base') ? e : e.slice(f)) + l
          : mm() + e + l;
    try {
      t[c ? 'replaceState' : 'pushState'](u, '', h), (s.value = u);
    } catch (p) {
      console.error(p), n[c ? 'replace' : 'assign'](h);
    }
  }
  function o(l, u) {
    const c = de({}, t.state, bl(s.value.back, l, s.value.forward, !0), u, {
      position: s.value.position,
    });
    i(l, c, !0), (r.value = l);
  }
  function a(l, u) {
    const c = de({}, s.value, t.state, { forward: l, scroll: fs() });
    i(c.current, c, !0);
    const f = de({}, bl(r.value, l, null), { position: c.position + 1 }, u);
    i(l, f, !1), (r.value = l);
  }
  return { location: r, state: s, push: a, replace: o };
}
function vm(e) {
  e = am(e);
  const t = gm(e),
    n = pm(e, t.state, t.location, t.replace);
  function r(i, o = !0) {
    o || n.pauseListeners(), history.go(i);
  }
  const s = de(
    { location: '', base: e, go: r, createHref: um.bind(null, e) },
    t,
    n,
  );
  return (
    Object.defineProperty(s, 'location', {
      enumerable: !0,
      get: () => t.location.value,
    }),
    Object.defineProperty(s, 'state', {
      enumerable: !0,
      get: () => t.state.value,
    }),
    s
  );
}
function Ow(e) {
  return (
    (e = location.host ? e || location.pathname + location.search : ''),
    e.includes('#') || (e += '#'),
    vm(e)
  );
}
function ym(e) {
  return typeof e == 'string' || (e && typeof e == 'object');
}
function El(e) {
  return typeof e == 'string' || typeof e == 'symbol';
}
const jt = {
    path: '/',
    name: void 0,
    params: {},
    query: {},
    hash: '',
    fullPath: '/',
    matched: [],
    meta: {},
    redirectedFrom: void 0,
  },
  Tl = jn('nf');
var Ol;
(function (e) {
  (e[(e.aborted = 4)] = 'aborted'),
    (e[(e.cancelled = 8)] = 'cancelled'),
    (e[(e.duplicated = 16)] = 'duplicated');
})(Ol || (Ol = {}));
function Wn(e, t) {
  return de(new Error(), { type: e, [Tl]: !0 }, t);
}
function dn(e, t) {
  return e instanceof Error && Tl in e && (t == null || !!(e.type & t));
}
const Sl = '[^/]+?',
  wm = { sensitive: !1, strict: !1, start: !0, end: !0 },
  bm = /[.+*?^${}()[\]/\\]/g;
function Em(e, t) {
  const n = de({}, wm, t),
    r = [];
  let s = n.start ? '^' : '';
  const i = [];
  for (const u of e) {
    const c = u.length ? [] : [90];
    n.strict && !u.length && (s += '/');
    for (let f = 0; f < u.length; f++) {
      const h = u[f];
      let p = 40 + (n.sensitive ? 0.25 : 0);
      if (h.type === 0)
        f || (s += '/'), (s += h.value.replace(bm, '\\$&')), (p += 40);
      else if (h.type === 1) {
        const { value: v, repeatable: N, optional: T, regexp: E } = h;
        i.push({ name: v, repeatable: N, optional: T });
        const A = E || Sl;
        if (A !== Sl) {
          p += 10;
          try {
            new RegExp(`(${A})`);
          } catch ($) {
            throw new Error(
              `Invalid custom RegExp for param "${v}" (${A}): ` + $.message,
            );
          }
        }
        let C = N ? `((?:${A})(?:/(?:${A}))*)` : `(${A})`;
        f || (C = T && u.length < 2 ? `(?:/${C})` : '/' + C),
          T && (C += '?'),
          (s += C),
          (p += 20),
          T && (p += -8),
          N && (p += -20),
          A === '.*' && (p += -50);
      }
      c.push(p);
    }
    r.push(c);
  }
  if (n.strict && n.end) {
    const u = r.length - 1;
    r[u][r[u].length - 1] += 0.7000000000000001;
  }
  n.strict || (s += '/?'), n.end ? (s += '$') : n.strict && (s += '(?:/|$)');
  const o = new RegExp(s, n.sensitive ? '' : 'i');
  function a(u) {
    const c = u.match(o),
      f = {};
    if (!c) return null;
    for (let h = 1; h < c.length; h++) {
      const p = c[h] || '',
        v = i[h - 1];
      f[v.name] = p && v.repeatable ? p.split('/') : p;
    }
    return f;
  }
  function l(u) {
    let c = '',
      f = !1;
    for (const h of e) {
      (!f || !c.endsWith('/')) && (c += '/'), (f = !1);
      for (const p of h)
        if (p.type === 0) c += p.value;
        else if (p.type === 1) {
          const { value: v, repeatable: N, optional: T } = p,
            E = v in u ? u[v] : '';
          if (Array.isArray(E) && !N)
            throw new Error(
              `Provided param "${v}" is an array but it is not repeatable (* or + modifiers)`,
            );
          const A = Array.isArray(E) ? E.join('/') : E;
          if (!A)
            if (T)
              h.length < 2 &&
                (c.endsWith('/') ? (c = c.slice(0, -1)) : (f = !0));
            else throw new Error(`Missing required param "${v}"`);
          c += A;
        }
    }
    return c;
  }
  return { re: o, score: r, keys: i, parse: a, stringify: l };
}
function Tm(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length; ) {
    const r = t[n] - e[n];
    if (r) return r;
    n++;
  }
  return e.length < t.length
    ? e.length === 1 && e[0] === 40 + 40
      ? -1
      : 1
    : e.length > t.length
    ? t.length === 1 && t[0] === 40 + 40
      ? 1
      : -1
    : 0;
}
function Om(e, t) {
  let n = 0;
  const r = e.score,
    s = t.score;
  for (; n < r.length && n < s.length; ) {
    const i = Tm(r[n], s[n]);
    if (i) return i;
    n++;
  }
  return s.length - r.length;
}
const Sm = { type: 0, value: '' },
  xm = /[a-zA-Z0-9_]/;
function _m(e) {
  if (!e) return [[]];
  if (e === '/') return [[Sm]];
  if (!e.startsWith('/')) throw new Error(`Invalid path "${e}"`);
  function t(p) {
    throw new Error(`ERR (${n})/"${u}": ${p}`);
  }
  let n = 0,
    r = n;
  const s = [];
  let i;
  function o() {
    i && s.push(i), (i = []);
  }
  let a = 0,
    l,
    u = '',
    c = '';
  function f() {
    !u ||
      (n === 0
        ? i.push({ type: 0, value: u })
        : n === 1 || n === 2 || n === 3
        ? (i.length > 1 &&
            (l === '*' || l === '+') &&
            t(
              `A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`,
            ),
          i.push({
            type: 1,
            value: u,
            regexp: c,
            repeatable: l === '*' || l === '+',
            optional: l === '*' || l === '?',
          }))
        : t('Invalid state to consume buffer'),
      (u = ''));
  }
  function h() {
    u += l;
  }
  for (; a < e.length; ) {
    if (((l = e[a++]), l === '\\' && n !== 2)) {
      (r = n), (n = 4);
      continue;
    }
    switch (n) {
      case 0:
        l === '/' ? (u && f(), o()) : l === ':' ? (f(), (n = 1)) : h();
        break;
      case 4:
        h(), (n = r);
        break;
      case 1:
        l === '('
          ? (n = 2)
          : xm.test(l)
          ? h()
          : (f(), (n = 0), l !== '*' && l !== '?' && l !== '+' && a--);
        break;
      case 2:
        l === ')'
          ? c[c.length - 1] == '\\'
            ? (c = c.slice(0, -1) + l)
            : (n = 3)
          : (c += l);
        break;
      case 3:
        f(), (n = 0), l !== '*' && l !== '?' && l !== '+' && a--, (c = '');
        break;
      default:
        t('Unknown state');
        break;
    }
  }
  return n === 2 && t(`Unfinished custom RegExp for param "${u}"`), f(), o(), s;
}
function Cm(e, t, n) {
  const r = Em(_m(e.path), n),
    s = de(r, { record: e, parent: t, children: [], alias: [] });
  return t && !s.record.aliasOf == !t.record.aliasOf && t.children.push(s), s;
}
function Pm(e, t) {
  const n = [],
    r = new Map();
  t = _l({ strict: !1, end: !0, sensitive: !1 }, t);
  function s(c) {
    return r.get(c);
  }
  function i(c, f, h) {
    const p = !h,
      v = Im(c);
    v.aliasOf = h && h.record;
    const N = _l(t, c),
      T = [v];
    if ('alias' in c) {
      const C = typeof c.alias == 'string' ? [c.alias] : c.alias;
      for (const $ of C)
        T.push(
          de({}, v, {
            components: h ? h.record.components : v.components,
            path: $,
            aliasOf: h ? h.record : v,
          }),
        );
    }
    let E, A;
    for (const C of T) {
      const { path: $ } = C;
      if (f && $[0] !== '/') {
        const K = f.record.path,
          te = K[K.length - 1] === '/' ? '' : '/';
        C.path = f.record.path + ($ && te + $);
      }
      if (
        ((E = Cm(C, f, N)),
        h
          ? h.alias.push(E)
          : ((A = A || E),
            A !== E && A.alias.push(E),
            p && c.name && !xl(E) && o(c.name)),
        'children' in v)
      ) {
        const K = v.children;
        for (let te = 0; te < K.length; te++) i(K[te], E, h && h.children[te]);
      }
      (h = h || E), l(E);
    }
    return A
      ? () => {
          o(A);
        }
      : yr;
  }
  function o(c) {
    if (El(c)) {
      const f = r.get(c);
      f &&
        (r.delete(c),
        n.splice(n.indexOf(f), 1),
        f.children.forEach(o),
        f.alias.forEach(o));
    } else {
      const f = n.indexOf(c);
      f > -1 &&
        (n.splice(f, 1),
        c.record.name && r.delete(c.record.name),
        c.children.forEach(o),
        c.alias.forEach(o));
    }
  }
  function a() {
    return n;
  }
  function l(c) {
    let f = 0;
    for (; f < n.length && Om(c, n[f]) >= 0; ) f++;
    n.splice(f, 0, c), c.record.name && !xl(c) && r.set(c.record.name, c);
  }
  function u(c, f) {
    let h,
      p = {},
      v,
      N;
    if ('name' in c && c.name) {
      if (((h = r.get(c.name)), !h)) throw Wn(1, { location: c });
      (N = h.record.name),
        (p = de(
          Am(
            f.params,
            h.keys.filter(A => !A.optional).map(A => A.name),
          ),
          c.params,
        )),
        (v = h.stringify(p));
    } else if ('path' in c)
      (v = c.path),
        (h = n.find(A => A.re.test(v))),
        h && ((p = h.parse(v)), (N = h.record.name));
    else {
      if (((h = f.name ? r.get(f.name) : n.find(A => A.re.test(f.path))), !h))
        throw Wn(1, { location: c, currentLocation: f });
      (N = h.record.name),
        (p = de({}, f.params, c.params)),
        (v = h.stringify(p));
    }
    const T = [];
    let E = h;
    for (; E; ) T.unshift(E.record), (E = E.parent);
    return { name: N, path: v, params: p, matched: T, meta: km(T) };
  }
  return (
    e.forEach(c => i(c)),
    {
      addRoute: i,
      resolve: u,
      removeRoute: o,
      getRoutes: a,
      getRecordMatcher: s,
    }
  );
}
function Am(e, t) {
  const n = {};
  for (const r of t) r in e && (n[r] = e[r]);
  return n;
}
function Im(e) {
  return {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: void 0,
    beforeEnter: e.beforeEnter,
    props: Nm(e),
    children: e.children || [],
    instances: {},
    leaveGuards: new Set(),
    updateGuards: new Set(),
    enterCallbacks: {},
    components:
      'components' in e ? e.components || {} : { default: e.component },
  };
}
function Nm(e) {
  const t = {},
    n = e.props || !1;
  if ('component' in e) t.default = n;
  else for (const r in e.components) t[r] = typeof n == 'boolean' ? n : n[r];
  return t;
}
function xl(e) {
  for (; e; ) {
    if (e.record.aliasOf) return !0;
    e = e.parent;
  }
  return !1;
}
function km(e) {
  return e.reduce((t, n) => de(t, n.meta), {});
}
function _l(e, t) {
  const n = {};
  for (const r in e) n[r] = r in t ? t[r] : e[r];
  return n;
}
const Cl = /#/g,
  Mm = /&/g,
  Rm = /\//g,
  $m = /=/g,
  Dm = /\?/g,
  Pl = /\+/g,
  Fm = /%5B/g,
  Lm = /%5D/g,
  Al = /%5E/g,
  Um = /%60/g,
  Il = /%7B/g,
  Hm = /%7C/g,
  Nl = /%7D/g,
  Vm = /%20/g;
function zi(e) {
  return encodeURI('' + e)
    .replace(Hm, '|')
    .replace(Fm, '[')
    .replace(Lm, ']');
}
function jm(e) {
  return zi(e).replace(Il, '{').replace(Nl, '}').replace(Al, '^');
}
function Zi(e) {
  return zi(e)
    .replace(Pl, '%2B')
    .replace(Vm, '+')
    .replace(Cl, '%23')
    .replace(Mm, '%26')
    .replace(Um, '`')
    .replace(Il, '{')
    .replace(Nl, '}')
    .replace(Al, '^');
}
function Bm(e) {
  return Zi(e).replace($m, '%3D');
}
function qm(e) {
  return zi(e).replace(Cl, '%23').replace(Dm, '%3F');
}
function Wm(e) {
  return e == null ? '' : qm(e).replace(Rm, '%2F');
}
function ds(e) {
  try {
    return decodeURIComponent('' + e);
  } catch {}
  return '' + e;
}
function zm(e) {
  const t = {};
  if (e === '' || e === '?') return t;
  const r = (e[0] === '?' ? e.slice(1) : e).split('&');
  for (let s = 0; s < r.length; ++s) {
    const i = r[s].replace(Pl, ' '),
      o = i.indexOf('='),
      a = ds(o < 0 ? i : i.slice(0, o)),
      l = o < 0 ? null : ds(i.slice(o + 1));
    if (a in t) {
      let u = t[a];
      Array.isArray(u) || (u = t[a] = [u]), u.push(l);
    } else t[a] = l;
  }
  return t;
}
function kl(e) {
  let t = '';
  for (let n in e) {
    const r = e[n];
    if (((n = Bm(n)), r == null)) {
      r !== void 0 && (t += (t.length ? '&' : '') + n);
      continue;
    }
    (Array.isArray(r) ? r.map(i => i && Zi(i)) : [r && Zi(r)]).forEach(i => {
      i !== void 0 &&
        ((t += (t.length ? '&' : '') + n), i != null && (t += '=' + i));
    });
  }
  return t;
}
function Zm(e) {
  const t = {};
  for (const n in e) {
    const r = e[n];
    r !== void 0 &&
      (t[n] = Array.isArray(r)
        ? r.map(s => (s == null ? null : '' + s))
        : r == null
        ? r
        : '' + r);
  }
  return t;
}
function Er() {
  let e = [];
  function t(r) {
    return (
      e.push(r),
      () => {
        const s = e.indexOf(r);
        s > -1 && e.splice(s, 1);
      }
    );
  }
  function n() {
    e = [];
  }
  return { add: t, list: () => e, reset: n };
}
function Bt(e, t, n, r, s) {
  const i = r && (r.enterCallbacks[s] = r.enterCallbacks[s] || []);
  return () =>
    new Promise((o, a) => {
      const l = f => {
          f === !1
            ? a(Wn(4, { from: n, to: t }))
            : f instanceof Error
            ? a(f)
            : ym(f)
            ? a(Wn(2, { from: t, to: f }))
            : (i &&
                r.enterCallbacks[s] === i &&
                typeof f == 'function' &&
                i.push(f),
              o());
        },
        u = e.call(r && r.instances[s], t, n, l);
      let c = Promise.resolve(u);
      e.length < 3 && (c = c.then(l)), c.catch(f => a(f));
    });
}
function Yi(e, t, n, r) {
  const s = [];
  for (const i of e)
    for (const o in i.components) {
      let a = i.components[o];
      if (!(t !== 'beforeRouteEnter' && !i.instances[o]))
        if (Ym(a)) {
          const u = (a.__vccOpts || a)[t];
          u && s.push(Bt(u, n, r, i, o));
        } else {
          let l = a();
          s.push(() =>
            l.then(u => {
              if (!u)
                return Promise.reject(
                  new Error(`Couldn't resolve component "${o}" at "${i.path}"`),
                );
              const c = em(u) ? u.default : u;
              i.components[o] = c;
              const h = (c.__vccOpts || c)[t];
              return h && Bt(h, n, r, i, o)();
            }),
          );
        }
    }
  return s;
}
function Ym(e) {
  return (
    typeof e == 'object' ||
    'displayName' in e ||
    'props' in e ||
    '__vccOpts' in e
  );
}
function Ml(e) {
  const t = Fe(Vi),
    n = Fe(ml),
    r = Z(() => t.resolve(ur(e.to))),
    s = Z(() => {
      const { matched: l } = r.value,
        { length: u } = l,
        c = l[u - 1],
        f = n.matched;
      if (!c || !f.length) return -1;
      const h = f.findIndex(qn.bind(null, c));
      if (h > -1) return h;
      const p = Rl(l[u - 2]);
      return u > 1 && Rl(c) === p && f[f.length - 1].path !== p
        ? f.findIndex(qn.bind(null, l[u - 2]))
        : h;
    }),
    i = Z(() => s.value > -1 && Qm(n.params, r.value.params)),
    o = Z(
      () =>
        s.value > -1 &&
        s.value === n.matched.length - 1 &&
        gl(n.params, r.value.params),
    );
  function a(l = {}) {
    return Gm(l)
      ? t[ur(e.replace) ? 'replace' : 'push'](ur(e.to)).catch(yr)
      : Promise.resolve();
  }
  return {
    route: r,
    href: Z(() => r.value.href),
    isActive: i,
    isExactActive: o,
    navigate: a,
  };
}
const Jm = ae({
    name: 'RouterLink',
    props: {
      to: { type: [String, Object], required: !0 },
      replace: Boolean,
      activeClass: String,
      exactActiveClass: String,
      custom: Boolean,
      ariaCurrentValue: { type: String, default: 'page' },
    },
    useLink: Ml,
    setup(e, { slots: t }) {
      const n = Rn(Ml(e)),
        { options: r } = Fe(Vi),
        s = Z(() => ({
          [$l(e.activeClass, r.linkActiveClass, 'router-link-active')]:
            n.isActive,
          [$l(
            e.exactActiveClass,
            r.linkExactActiveClass,
            'router-link-exact-active',
          )]: n.isExactActive,
        }));
      return () => {
        const i = t.default && t.default(n);
        return e.custom
          ? i
          : xt(
              'a',
              {
                'aria-current': n.isExactActive ? e.ariaCurrentValue : null,
                href: n.href,
                onClick: n.navigate,
                class: s.value,
              },
              i,
            );
      };
    },
  }),
  Km = Jm;
function Gm(e) {
  if (
    !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) &&
    !e.defaultPrevented &&
    !(e.button !== void 0 && e.button !== 0)
  ) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute('target');
      if (/\b_blank\b/i.test(t)) return;
    }
    return e.preventDefault && e.preventDefault(), !0;
  }
}
function Qm(e, t) {
  for (const n in t) {
    const r = t[n],
      s = e[n];
    if (typeof r == 'string') {
      if (r !== s) return !1;
    } else if (
      !Array.isArray(s) ||
      s.length !== r.length ||
      r.some((i, o) => i !== s[o])
    )
      return !1;
  }
  return !0;
}
function Rl(e) {
  return e ? (e.aliasOf ? e.aliasOf.path : e.path) : '';
}
const $l = (e, t, n) => (e != null ? e : t != null ? t : n),
  Xm = ae({
    name: 'RouterView',
    inheritAttrs: !1,
    props: { name: { type: String, default: 'default' }, route: Object },
    setup(e, { attrs: t, slots: n }) {
      const r = Fe(ji),
        s = Z(() => e.route || r.value),
        i = Fe(hl, 0),
        o = Z(() => s.value.matched[i]);
      Qe(hl, i + 1), Qe(Xh, o), Qe(ji, s);
      const a = oe();
      return (
        kt(
          () => [a.value, o.value, e.name],
          ([l, u, c], [f, h, p]) => {
            u &&
              ((u.instances[c] = l),
              h &&
                h !== u &&
                l &&
                l === f &&
                (u.leaveGuards.size || (u.leaveGuards = h.leaveGuards),
                u.updateGuards.size || (u.updateGuards = h.updateGuards))),
              l &&
                u &&
                (!h || !qn(u, h) || !f) &&
                (u.enterCallbacks[c] || []).forEach(v => v(l));
          },
          { flush: 'post' },
        ),
        () => {
          const l = s.value,
            u = o.value,
            c = u && u.components[e.name],
            f = e.name;
          if (!c) return Dl(n.default, { Component: c, route: l });
          const h = u.props[e.name],
            p = h
              ? h === !0
                ? l.params
                : typeof h == 'function'
                ? h(l)
                : h
              : null,
            N = xt(
              c,
              de({}, p, t, {
                onVnodeUnmounted: T => {
                  T.component.isUnmounted && (u.instances[f] = null);
                },
                ref: a,
              }),
            );
          return Dl(n.default, { Component: N, route: l }) || N;
        }
      );
    },
  });
function Dl(e, t) {
  if (!e) return null;
  const n = e(t);
  return n.length === 1 ? n[0] : n;
}
const ep = Xm;
function Sw(e) {
  const t = Pm(e.routes, e),
    n = e.parseQuery || zm,
    r = e.stringifyQuery || kl,
    s = e.history,
    i = Er(),
    o = Er(),
    a = Er(),
    l = yd(jt);
  let u = jt;
  Bn &&
    e.scrollBehavior &&
    'scrollRestoration' in history &&
    (history.scrollRestoration = 'manual');
  const c = Bi.bind(null, y => '' + y),
    f = Bi.bind(null, Wm),
    h = Bi.bind(null, ds);
  function p(y, R) {
    let P, D;
    return (
      El(y) ? ((P = t.getRecordMatcher(y)), (D = R)) : (D = y), t.addRoute(D, P)
    );
  }
  function v(y) {
    const R = t.getRecordMatcher(y);
    R && t.removeRoute(R);
  }
  function N() {
    return t.getRoutes().map(y => y.record);
  }
  function T(y) {
    return !!t.getRecordMatcher(y);
  }
  function E(y, R) {
    if (((R = de({}, R || l.value)), typeof y == 'string')) {
      const q = qi(n, y, R.path),
        d = t.resolve({ path: q.path }, R),
        m = s.createHref(q.fullPath);
      return de(q, d, {
        params: h(d.params),
        hash: ds(q.hash),
        redirectedFrom: void 0,
        href: m,
      });
    }
    let P;
    if ('path' in y) P = de({}, y, { path: qi(n, y.path, R.path).path });
    else {
      const q = de({}, y.params);
      for (const d in q) q[d] == null && delete q[d];
      (P = de({}, y, { params: f(y.params) })), (R.params = f(R.params));
    }
    const D = t.resolve(P, R),
      ue = y.hash || '';
    D.params = c(h(D.params));
    const me = rm(r, de({}, y, { hash: jm(ue), path: D.path })),
      z = s.createHref(me);
    return de(
      { fullPath: me, hash: ue, query: r === kl ? Zm(y.query) : y.query || {} },
      D,
      { redirectedFrom: void 0, href: z },
    );
  }
  function A(y) {
    return typeof y == 'string' ? qi(n, y, l.value.path) : de({}, y);
  }
  function C(y, R) {
    if (u !== y) return Wn(8, { from: R, to: y });
  }
  function $(y) {
    return ie(y);
  }
  function K(y) {
    return $(de(A(y), { replace: !0 }));
  }
  function te(y) {
    const R = y.matched[y.matched.length - 1];
    if (R && R.redirect) {
      const { redirect: P } = R;
      let D = typeof P == 'function' ? P(y) : P;
      return (
        typeof D == 'string' &&
          ((D = D.includes('?') || D.includes('#') ? (D = A(D)) : { path: D }),
          (D.params = {})),
        de({ query: y.query, hash: y.hash, params: y.params }, D)
      );
    }
  }
  function ie(y, R) {
    const P = (u = E(y)),
      D = l.value,
      ue = y.state,
      me = y.force,
      z = y.replace === !0,
      q = te(P);
    if (q) return ie(de(A(q), { state: ue, force: me, replace: z }), R || P);
    const d = P;
    d.redirectedFrom = R;
    let m;
    return (
      !me &&
        sm(r, D, P) &&
        ((m = Wn(16, { to: d, from: D })), _n(D, D, !0, !1)),
      (m ? Promise.resolve(m) : Y(d, D))
        .catch(g => (dn(g) ? g : he(g, d, D)))
        .then(g => {
          if (g) {
            if (dn(g, 2))
              return ie(
                de(A(g.to), { state: ue, force: me, replace: z }),
                R || d,
              );
          } else g = Oe(d, D, !0, z, ue);
          return Me(d, D, g), g;
        })
    );
  }
  function be(y, R) {
    const P = C(y, R);
    return P ? Promise.reject(P) : Promise.resolve();
  }
  function Y(y, R) {
    let P;
    const [D, ue, me] = tp(y, R);
    P = Yi(D.reverse(), 'beforeRouteLeave', y, R);
    for (const q of D)
      q.leaveGuards.forEach(d => {
        P.push(Bt(d, y, R));
      });
    const z = be.bind(null, y, R);
    return (
      P.push(z),
      zn(P)
        .then(() => {
          P = [];
          for (const q of i.list()) P.push(Bt(q, y, R));
          return P.push(z), zn(P);
        })
        .then(() => {
          P = Yi(ue, 'beforeRouteUpdate', y, R);
          for (const q of ue)
            q.updateGuards.forEach(d => {
              P.push(Bt(d, y, R));
            });
          return P.push(z), zn(P);
        })
        .then(() => {
          P = [];
          for (const q of y.matched)
            if (q.beforeEnter && !R.matched.includes(q))
              if (Array.isArray(q.beforeEnter))
                for (const d of q.beforeEnter) P.push(Bt(d, y, R));
              else P.push(Bt(q.beforeEnter, y, R));
          return P.push(z), zn(P);
        })
        .then(
          () => (
            y.matched.forEach(q => (q.enterCallbacks = {})),
            (P = Yi(me, 'beforeRouteEnter', y, R)),
            P.push(z),
            zn(P)
          ),
        )
        .then(() => {
          P = [];
          for (const q of o.list()) P.push(Bt(q, y, R));
          return P.push(z), zn(P);
        })
        .catch(q => (dn(q, 8) ? q : Promise.reject(q)))
    );
  }
  function Me(y, R, P) {
    for (const D of a.list()) D(y, R, P);
  }
  function Oe(y, R, P, D, ue) {
    const me = C(y, R);
    if (me) return me;
    const z = R === jt,
      q = Bn ? history.state : {};
    P &&
      (D || z
        ? s.replace(y.fullPath, de({ scroll: z && q && q.scroll }, ue))
        : s.push(y.fullPath, ue)),
      (l.value = y),
      _n(y, R, P, z),
      st();
  }
  let Je;
  function On() {
    Je = s.listen((y, R, P) => {
      const D = E(y),
        ue = te(D);
      if (ue) {
        ie(de(ue, { replace: !0 }), D).catch(yr);
        return;
      }
      u = D;
      const me = l.value;
      Bn && dm(yl(me.fullPath, P.delta), fs()),
        Y(D, me)
          .catch(z =>
            dn(z, 4 | 8)
              ? z
              : dn(z, 2)
              ? (ie(z.to, D)
                  .then(q => {
                    dn(q, 4 | 16) &&
                      !P.delta &&
                      P.type === wr.pop &&
                      s.go(-1, !1);
                  })
                  .catch(yr),
                Promise.reject())
              : (P.delta && s.go(-P.delta, !1), he(z, D, me)),
          )
          .then(z => {
            (z = z || Oe(D, me, !1)),
              z &&
                (P.delta
                  ? s.go(-P.delta, !1)
                  : P.type === wr.pop && dn(z, 4 | 16) && s.go(-1, !1)),
              Me(D, me, z);
          })
          .catch(yr);
    });
  }
  let Sn = Er(),
    xn = Er(),
    Ce;
  function he(y, R, P) {
    st(y);
    const D = xn.list();
    return (
      D.length ? D.forEach(ue => ue(y, R, P)) : console.error(y),
      Promise.reject(y)
    );
  }
  function le() {
    return Ce && l.value !== jt
      ? Promise.resolve()
      : new Promise((y, R) => {
          Sn.add([y, R]);
        });
  }
  function st(y) {
    Ce ||
      ((Ce = !0),
      On(),
      Sn.list().forEach(([R, P]) => (y ? P(y) : R())),
      Sn.reset());
  }
  function _n(y, R, P, D) {
    const { scrollBehavior: ue } = e;
    if (!Bn || !ue) return Promise.resolve();
    const me =
      (!P && hm(yl(y.fullPath, 0))) ||
      ((D || !P) && history.state && history.state.scroll) ||
      null;
    return $i()
      .then(() => ue(y, R, me))
      .then(z => z && fm(z))
      .catch(z => he(z, y, R));
  }
  const Pt = y => s.go(y);
  let wt;
  const it = new Set();
  return {
    currentRoute: l,
    addRoute: p,
    removeRoute: v,
    hasRoute: T,
    getRoutes: N,
    resolve: E,
    options: e,
    push: $,
    replace: K,
    go: Pt,
    back: () => Pt(-1),
    forward: () => Pt(1),
    beforeEach: i.add,
    beforeResolve: o.add,
    afterEach: a.add,
    onError: xn.add,
    isReady: le,
    install(y) {
      const R = this;
      y.component('RouterLink', Km),
        y.component('RouterView', ep),
        (y.config.globalProperties.$router = R),
        Object.defineProperty(y.config.globalProperties, '$route', {
          enumerable: !0,
          get: () => ur(l),
        }),
        Bn &&
          !wt &&
          l.value === jt &&
          ((wt = !0), $(s.location).catch(ue => {}));
      const P = {};
      for (const ue in jt) P[ue] = Z(() => l.value[ue]);
      y.provide(Vi, R), y.provide(ml, Rn(P)), y.provide(ji, l);
      const D = y.unmount;
      it.add(y),
        (y.unmount = function () {
          it.delete(y),
            it.size < 1 &&
              ((u = jt), Je && Je(), (l.value = jt), (wt = !1), (Ce = !1)),
            D();
        });
    },
  };
}
function zn(e) {
  return e.reduce((t, n) => t.then(() => n()), Promise.resolve());
}
function tp(e, t) {
  const n = [],
    r = [],
    s = [],
    i = Math.max(t.matched.length, e.matched.length);
  for (let o = 0; o < i; o++) {
    const a = t.matched[o];
    a && (e.matched.find(u => qn(u, a)) ? r.push(a) : n.push(a));
    const l = e.matched[o];
    l && (t.matched.find(u => qn(u, l)) || s.push(l));
  }
  return [n, r, s];
}
var Ji = { exports: {} },
  Fl = function (t, n) {
    return function () {
      for (var s = new Array(arguments.length), i = 0; i < s.length; i++)
        s[i] = arguments[i];
      return t.apply(n, s);
    };
  },
  np = Fl,
  hn = Object.prototype.toString;
function Ki(e) {
  return hn.call(e) === '[object Array]';
}
function Gi(e) {
  return typeof e == 'undefined';
}
function rp(e) {
  return (
    e !== null &&
    !Gi(e) &&
    e.constructor !== null &&
    !Gi(e.constructor) &&
    typeof e.constructor.isBuffer == 'function' &&
    e.constructor.isBuffer(e)
  );
}
function sp(e) {
  return hn.call(e) === '[object ArrayBuffer]';
}
function ip(e) {
  return typeof FormData != 'undefined' && e instanceof FormData;
}
function op(e) {
  var t;
  return (
    typeof ArrayBuffer != 'undefined' && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && e.buffer instanceof ArrayBuffer),
    t
  );
}
function ap(e) {
  return typeof e == 'string';
}
function lp(e) {
  return typeof e == 'number';
}
function Ll(e) {
  return e !== null && typeof e == 'object';
}
function hs(e) {
  if (hn.call(e) !== '[object Object]') return !1;
  var t = Object.getPrototypeOf(e);
  return t === null || t === Object.prototype;
}
function up(e) {
  return hn.call(e) === '[object Date]';
}
function cp(e) {
  return hn.call(e) === '[object File]';
}
function fp(e) {
  return hn.call(e) === '[object Blob]';
}
function Ul(e) {
  return hn.call(e) === '[object Function]';
}
function dp(e) {
  return Ll(e) && Ul(e.pipe);
}
function hp(e) {
  return typeof URLSearchParams != 'undefined' && e instanceof URLSearchParams;
}
function mp(e) {
  return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, '');
}
function pp() {
  return typeof navigator != 'undefined' &&
    (navigator.product === 'ReactNative' ||
      navigator.product === 'NativeScript' ||
      navigator.product === 'NS')
    ? !1
    : typeof window != 'undefined' && typeof document != 'undefined';
}
function Qi(e, t) {
  if (!(e === null || typeof e == 'undefined'))
    if ((typeof e != 'object' && (e = [e]), Ki(e)))
      for (var n = 0, r = e.length; n < r; n++) t.call(null, e[n], n, e);
    else
      for (var s in e)
        Object.prototype.hasOwnProperty.call(e, s) && t.call(null, e[s], s, e);
}
function Xi() {
  var e = {};
  function t(s, i) {
    hs(e[i]) && hs(s)
      ? (e[i] = Xi(e[i], s))
      : hs(s)
      ? (e[i] = Xi({}, s))
      : Ki(s)
      ? (e[i] = s.slice())
      : (e[i] = s);
  }
  for (var n = 0, r = arguments.length; n < r; n++) Qi(arguments[n], t);
  return e;
}
function gp(e, t, n) {
  return (
    Qi(t, function (s, i) {
      n && typeof s == 'function' ? (e[i] = np(s, n)) : (e[i] = s);
    }),
    e
  );
}
function vp(e) {
  return e.charCodeAt(0) === 65279 && (e = e.slice(1)), e;
}
var et = {
    isArray: Ki,
    isArrayBuffer: sp,
    isBuffer: rp,
    isFormData: ip,
    isArrayBufferView: op,
    isString: ap,
    isNumber: lp,
    isObject: Ll,
    isPlainObject: hs,
    isUndefined: Gi,
    isDate: up,
    isFile: cp,
    isBlob: fp,
    isFunction: Ul,
    isStream: dp,
    isURLSearchParams: hp,
    isStandardBrowserEnv: pp,
    forEach: Qi,
    merge: Xi,
    extend: gp,
    trim: mp,
    stripBOM: vp,
  },
  Zn = et;
function Hl(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ':')
    .replace(/%24/g, '$')
    .replace(/%2C/gi, ',')
    .replace(/%20/g, '+')
    .replace(/%5B/gi, '[')
    .replace(/%5D/gi, ']');
}
var Vl = function (t, n, r) {
    if (!n) return t;
    var s;
    if (r) s = r(n);
    else if (Zn.isURLSearchParams(n)) s = n.toString();
    else {
      var i = [];
      Zn.forEach(n, function (l, u) {
        l === null ||
          typeof l == 'undefined' ||
          (Zn.isArray(l) ? (u = u + '[]') : (l = [l]),
          Zn.forEach(l, function (f) {
            Zn.isDate(f)
              ? (f = f.toISOString())
              : Zn.isObject(f) && (f = JSON.stringify(f)),
              i.push(Hl(u) + '=' + Hl(f));
          }));
      }),
        (s = i.join('&'));
    }
    if (s) {
      var o = t.indexOf('#');
      o !== -1 && (t = t.slice(0, o)),
        (t += (t.indexOf('?') === -1 ? '?' : '&') + s);
    }
    return t;
  },
  yp = et;
function ms() {
  this.handlers = [];
}
ms.prototype.use = function (t, n, r) {
  return (
    this.handlers.push({
      fulfilled: t,
      rejected: n,
      synchronous: r ? r.synchronous : !1,
      runWhen: r ? r.runWhen : null,
    }),
    this.handlers.length - 1
  );
};
ms.prototype.eject = function (t) {
  this.handlers[t] && (this.handlers[t] = null);
};
ms.prototype.forEach = function (t) {
  yp.forEach(this.handlers, function (r) {
    r !== null && t(r);
  });
};
var wp = ms,
  bp = et,
  Ep = function (t, n) {
    bp.forEach(t, function (s, i) {
      i !== n &&
        i.toUpperCase() === n.toUpperCase() &&
        ((t[n] = s), delete t[i]);
    });
  },
  jl = function (t, n, r, s, i) {
    return (
      (t.config = n),
      r && (t.code = r),
      (t.request = s),
      (t.response = i),
      (t.isAxiosError = !0),
      (t.toJSON = function () {
        return {
          message: this.message,
          name: this.name,
          description: this.description,
          number: this.number,
          fileName: this.fileName,
          lineNumber: this.lineNumber,
          columnNumber: this.columnNumber,
          stack: this.stack,
          config: this.config,
          code: this.code,
          status:
            this.response && this.response.status ? this.response.status : null,
        };
      }),
      t
    );
  },
  Tp = jl,
  Bl = function (t, n, r, s, i) {
    var o = new Error(t);
    return Tp(o, n, r, s, i);
  },
  Op = Bl,
  Sp = function (t, n, r) {
    var s = r.config.validateStatus;
    !r.status || !s || s(r.status)
      ? t(r)
      : n(
          Op(
            'Request failed with status code ' + r.status,
            r.config,
            null,
            r.request,
            r,
          ),
        );
  },
  ps = et,
  xp = ps.isStandardBrowserEnv()
    ? (function () {
        return {
          write: function (n, r, s, i, o, a) {
            var l = [];
            l.push(n + '=' + encodeURIComponent(r)),
              ps.isNumber(s) && l.push('expires=' + new Date(s).toGMTString()),
              ps.isString(i) && l.push('path=' + i),
              ps.isString(o) && l.push('domain=' + o),
              a === !0 && l.push('secure'),
              (document.cookie = l.join('; '));
          },
          read: function (n) {
            var r = document.cookie.match(
              new RegExp('(^|;\\s*)(' + n + ')=([^;]*)'),
            );
            return r ? decodeURIComponent(r[3]) : null;
          },
          remove: function (n) {
            this.write(n, '', Date.now() - 864e5);
          },
        };
      })()
    : (function () {
        return {
          write: function () {},
          read: function () {
            return null;
          },
          remove: function () {},
        };
      })(),
  _p = function (t) {
    return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t);
  },
  Cp = function (t, n) {
    return n ? t.replace(/\/+$/, '') + '/' + n.replace(/^\/+/, '') : t;
  },
  Pp = _p,
  Ap = Cp,
  Ip = function (t, n) {
    return t && !Pp(n) ? Ap(t, n) : n;
  },
  eo = et,
  Np = [
    'age',
    'authorization',
    'content-length',
    'content-type',
    'etag',
    'expires',
    'from',
    'host',
    'if-modified-since',
    'if-unmodified-since',
    'last-modified',
    'location',
    'max-forwards',
    'proxy-authorization',
    'referer',
    'retry-after',
    'user-agent',
  ],
  kp = function (t) {
    var n = {},
      r,
      s,
      i;
    return (
      t &&
        eo.forEach(
          t.split(`
`),
          function (a) {
            if (
              ((i = a.indexOf(':')),
              (r = eo.trim(a.substr(0, i)).toLowerCase()),
              (s = eo.trim(a.substr(i + 1))),
              r)
            ) {
              if (n[r] && Np.indexOf(r) >= 0) return;
              r === 'set-cookie'
                ? (n[r] = (n[r] ? n[r] : []).concat([s]))
                : (n[r] = n[r] ? n[r] + ', ' + s : s);
            }
          },
        ),
      n
    );
  },
  ql = et,
  Mp = ql.isStandardBrowserEnv()
    ? (function () {
        var t = /(msie|trident)/i.test(navigator.userAgent),
          n = document.createElement('a'),
          r;
        function s(i) {
          var o = i;
          return (
            t && (n.setAttribute('href', o), (o = n.href)),
            n.setAttribute('href', o),
            {
              href: n.href,
              protocol: n.protocol ? n.protocol.replace(/:$/, '') : '',
              host: n.host,
              search: n.search ? n.search.replace(/^\?/, '') : '',
              hash: n.hash ? n.hash.replace(/^#/, '') : '',
              hostname: n.hostname,
              port: n.port,
              pathname:
                n.pathname.charAt(0) === '/' ? n.pathname : '/' + n.pathname,
            }
          );
        }
        return (
          (r = s(window.location.href)),
          function (o) {
            var a = ql.isString(o) ? s(o) : o;
            return a.protocol === r.protocol && a.host === r.host;
          }
        );
      })()
    : (function () {
        return function () {
          return !0;
        };
      })();
function to(e) {
  this.message = e;
}
to.prototype.toString = function () {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};
to.prototype.__CANCEL__ = !0;
var gs = to,
  vs = et,
  Rp = Sp,
  $p = xp,
  Dp = Vl,
  Fp = Ip,
  Lp = kp,
  Up = Mp,
  no = Bl,
  Hp = ws,
  Vp = gs,
  Wl = function (t) {
    return new Promise(function (r, s) {
      var i = t.data,
        o = t.headers,
        a = t.responseType,
        l;
      function u() {
        t.cancelToken && t.cancelToken.unsubscribe(l),
          t.signal && t.signal.removeEventListener('abort', l);
      }
      vs.isFormData(i) && delete o['Content-Type'];
      var c = new XMLHttpRequest();
      if (t.auth) {
        var f = t.auth.username || '',
          h = t.auth.password
            ? unescape(encodeURIComponent(t.auth.password))
            : '';
        o.Authorization = 'Basic ' + btoa(f + ':' + h);
      }
      var p = Fp(t.baseURL, t.url);
      c.open(t.method.toUpperCase(), Dp(p, t.params, t.paramsSerializer), !0),
        (c.timeout = t.timeout);
      function v() {
        if (!!c) {
          var T =
              'getAllResponseHeaders' in c
                ? Lp(c.getAllResponseHeaders())
                : null,
            E =
              !a || a === 'text' || a === 'json' ? c.responseText : c.response,
            A = {
              data: E,
              status: c.status,
              statusText: c.statusText,
              headers: T,
              config: t,
              request: c,
            };
          Rp(
            function ($) {
              r($), u();
            },
            function ($) {
              s($), u();
            },
            A,
          ),
            (c = null);
        }
      }
      if (
        ('onloadend' in c
          ? (c.onloadend = v)
          : (c.onreadystatechange = function () {
              !c ||
                c.readyState !== 4 ||
                (c.status === 0 &&
                  !(c.responseURL && c.responseURL.indexOf('file:') === 0)) ||
                setTimeout(v);
            }),
        (c.onabort = function () {
          !c || (s(no('Request aborted', t, 'ECONNABORTED', c)), (c = null));
        }),
        (c.onerror = function () {
          s(no('Network Error', t, null, c)), (c = null);
        }),
        (c.ontimeout = function () {
          var E = t.timeout
              ? 'timeout of ' + t.timeout + 'ms exceeded'
              : 'timeout exceeded',
            A = t.transitional || Hp.transitional;
          t.timeoutErrorMessage && (E = t.timeoutErrorMessage),
            s(
              no(E, t, A.clarifyTimeoutError ? 'ETIMEDOUT' : 'ECONNABORTED', c),
            ),
            (c = null);
        }),
        vs.isStandardBrowserEnv())
      ) {
        var N =
          (t.withCredentials || Up(p)) && t.xsrfCookieName
            ? $p.read(t.xsrfCookieName)
            : void 0;
        N && (o[t.xsrfHeaderName] = N);
      }
      'setRequestHeader' in c &&
        vs.forEach(o, function (E, A) {
          typeof i == 'undefined' && A.toLowerCase() === 'content-type'
            ? delete o[A]
            : c.setRequestHeader(A, E);
        }),
        vs.isUndefined(t.withCredentials) ||
          (c.withCredentials = !!t.withCredentials),
        a && a !== 'json' && (c.responseType = t.responseType),
        typeof t.onDownloadProgress == 'function' &&
          c.addEventListener('progress', t.onDownloadProgress),
        typeof t.onUploadProgress == 'function' &&
          c.upload &&
          c.upload.addEventListener('progress', t.onUploadProgress),
        (t.cancelToken || t.signal) &&
          ((l = function (T) {
            !c ||
              (s(!T || (T && T.type) ? new Vp('canceled') : T),
              c.abort(),
              (c = null));
          }),
          t.cancelToken && t.cancelToken.subscribe(l),
          t.signal &&
            (t.signal.aborted ? l() : t.signal.addEventListener('abort', l))),
        i || (i = null),
        c.send(i);
    });
  },
  $e = et,
  zl = Ep,
  jp = jl,
  Bp = { 'Content-Type': 'application/x-www-form-urlencoded' };
function Zl(e, t) {
  !$e.isUndefined(e) &&
    $e.isUndefined(e['Content-Type']) &&
    (e['Content-Type'] = t);
}
function qp() {
  var e;
  return (
    (typeof XMLHttpRequest != 'undefined' ||
      (typeof process != 'undefined' &&
        Object.prototype.toString.call(process) === '[object process]')) &&
      (e = Wl),
    e
  );
}
function Wp(e, t, n) {
  if ($e.isString(e))
    try {
      return (t || JSON.parse)(e), $e.trim(e);
    } catch (r) {
      if (r.name !== 'SyntaxError') throw r;
    }
  return (n || JSON.stringify)(e);
}
var ys = {
  transitional: {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  adapter: qp(),
  transformRequest: [
    function (t, n) {
      return (
        zl(n, 'Accept'),
        zl(n, 'Content-Type'),
        $e.isFormData(t) ||
        $e.isArrayBuffer(t) ||
        $e.isBuffer(t) ||
        $e.isStream(t) ||
        $e.isFile(t) ||
        $e.isBlob(t)
          ? t
          : $e.isArrayBufferView(t)
          ? t.buffer
          : $e.isURLSearchParams(t)
          ? (Zl(n, 'application/x-www-form-urlencoded;charset=utf-8'),
            t.toString())
          : $e.isObject(t) || (n && n['Content-Type'] === 'application/json')
          ? (Zl(n, 'application/json'), Wp(t))
          : t
      );
    },
  ],
  transformResponse: [
    function (t) {
      var n = this.transitional || ys.transitional,
        r = n && n.silentJSONParsing,
        s = n && n.forcedJSONParsing,
        i = !r && this.responseType === 'json';
      if (i || (s && $e.isString(t) && t.length))
        try {
          return JSON.parse(t);
        } catch (o) {
          if (i)
            throw o.name === 'SyntaxError' ? jp(o, this, 'E_JSON_PARSE') : o;
        }
      return t;
    },
  ],
  timeout: 0,
  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',
  maxContentLength: -1,
  maxBodyLength: -1,
  validateStatus: function (t) {
    return t >= 200 && t < 300;
  },
  headers: { common: { Accept: 'application/json, text/plain, */*' } },
};
$e.forEach(['delete', 'get', 'head'], function (t) {
  ys.headers[t] = {};
});
$e.forEach(['post', 'put', 'patch'], function (t) {
  ys.headers[t] = $e.merge(Bp);
});
var ws = ys,
  zp = et,
  Zp = ws,
  Yp = function (t, n, r) {
    var s = this || Zp;
    return (
      zp.forEach(r, function (o) {
        t = o.call(s, t, n);
      }),
      t
    );
  },
  Yl = function (t) {
    return !!(t && t.__CANCEL__);
  },
  Jl = et,
  ro = Yp,
  Jp = Yl,
  Kp = ws,
  Gp = gs;
function so(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new Gp('canceled');
}
var Qp = function (t) {
    so(t),
      (t.headers = t.headers || {}),
      (t.data = ro.call(t, t.data, t.headers, t.transformRequest)),
      (t.headers = Jl.merge(
        t.headers.common || {},
        t.headers[t.method] || {},
        t.headers,
      )),
      Jl.forEach(
        ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
        function (s) {
          delete t.headers[s];
        },
      );
    var n = t.adapter || Kp.adapter;
    return n(t).then(
      function (s) {
        return (
          so(t),
          (s.data = ro.call(t, s.data, s.headers, t.transformResponse)),
          s
        );
      },
      function (s) {
        return (
          Jp(s) ||
            (so(t),
            s &&
              s.response &&
              (s.response.data = ro.call(
                t,
                s.response.data,
                s.response.headers,
                t.transformResponse,
              ))),
          Promise.reject(s)
        );
      },
    );
  },
  tt = et,
  Kl = function (t, n) {
    n = n || {};
    var r = {};
    function s(c, f) {
      return tt.isPlainObject(c) && tt.isPlainObject(f)
        ? tt.merge(c, f)
        : tt.isPlainObject(f)
        ? tt.merge({}, f)
        : tt.isArray(f)
        ? f.slice()
        : f;
    }
    function i(c) {
      if (tt.isUndefined(n[c])) {
        if (!tt.isUndefined(t[c])) return s(void 0, t[c]);
      } else return s(t[c], n[c]);
    }
    function o(c) {
      if (!tt.isUndefined(n[c])) return s(void 0, n[c]);
    }
    function a(c) {
      if (tt.isUndefined(n[c])) {
        if (!tt.isUndefined(t[c])) return s(void 0, t[c]);
      } else return s(void 0, n[c]);
    }
    function l(c) {
      if (c in n) return s(t[c], n[c]);
      if (c in t) return s(void 0, t[c]);
    }
    var u = {
      url: o,
      method: o,
      data: o,
      baseURL: a,
      transformRequest: a,
      transformResponse: a,
      paramsSerializer: a,
      timeout: a,
      timeoutMessage: a,
      withCredentials: a,
      adapter: a,
      responseType: a,
      xsrfCookieName: a,
      xsrfHeaderName: a,
      onUploadProgress: a,
      onDownloadProgress: a,
      decompress: a,
      maxContentLength: a,
      maxBodyLength: a,
      transport: a,
      httpAgent: a,
      httpsAgent: a,
      cancelToken: a,
      socketPath: a,
      responseEncoding: a,
      validateStatus: l,
    };
    return (
      tt.forEach(Object.keys(t).concat(Object.keys(n)), function (f) {
        var h = u[f] || i,
          p = h(f);
        (tt.isUndefined(p) && h !== l) || (r[f] = p);
      }),
      r
    );
  },
  Gl = { version: '0.24.0' },
  Xp = Gl.version,
  io = {};
['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(
  function (e, t) {
    io[e] = function (r) {
      return typeof r === e || 'a' + (t < 1 ? 'n ' : ' ') + e;
    };
  },
);
var Ql = {};
io.transitional = function (t, n, r) {
  function s(i, o) {
    return (
      '[Axios v' +
      Xp +
      "] Transitional option '" +
      i +
      "'" +
      o +
      (r ? '. ' + r : '')
    );
  }
  return function (i, o, a) {
    if (t === !1)
      throw new Error(s(o, ' has been removed' + (n ? ' in ' + n : '')));
    return (
      n &&
        !Ql[o] &&
        ((Ql[o] = !0),
        console.warn(
          s(
            o,
            ' has been deprecated since v' +
              n +
              ' and will be removed in the near future',
          ),
        )),
      t ? t(i, o, a) : !0
    );
  };
};
function eg(e, t, n) {
  if (typeof e != 'object') throw new TypeError('options must be an object');
  for (var r = Object.keys(e), s = r.length; s-- > 0; ) {
    var i = r[s],
      o = t[i];
    if (o) {
      var a = e[i],
        l = a === void 0 || o(a, i, e);
      if (l !== !0) throw new TypeError('option ' + i + ' must be ' + l);
      continue;
    }
    if (n !== !0) throw Error('Unknown option ' + i);
  }
}
var tg = { assertOptions: eg, validators: io },
  Xl = et,
  ng = Vl,
  eu = wp,
  tu = Qp,
  bs = Kl,
  nu = tg,
  Yn = nu.validators;
function Tr(e) {
  (this.defaults = e),
    (this.interceptors = { request: new eu(), response: new eu() });
}
Tr.prototype.request = function (t) {
  typeof t == 'string'
    ? ((t = arguments[1] || {}), (t.url = arguments[0]))
    : (t = t || {}),
    (t = bs(this.defaults, t)),
    t.method
      ? (t.method = t.method.toLowerCase())
      : this.defaults.method
      ? (t.method = this.defaults.method.toLowerCase())
      : (t.method = 'get');
  var n = t.transitional;
  n !== void 0 &&
    nu.assertOptions(
      n,
      {
        silentJSONParsing: Yn.transitional(Yn.boolean),
        forcedJSONParsing: Yn.transitional(Yn.boolean),
        clarifyTimeoutError: Yn.transitional(Yn.boolean),
      },
      !1,
    );
  var r = [],
    s = !0;
  this.interceptors.request.forEach(function (h) {
    (typeof h.runWhen == 'function' && h.runWhen(t) === !1) ||
      ((s = s && h.synchronous), r.unshift(h.fulfilled, h.rejected));
  });
  var i = [];
  this.interceptors.response.forEach(function (h) {
    i.push(h.fulfilled, h.rejected);
  });
  var o;
  if (!s) {
    var a = [tu, void 0];
    for (
      Array.prototype.unshift.apply(a, r),
        a = a.concat(i),
        o = Promise.resolve(t);
      a.length;

    )
      o = o.then(a.shift(), a.shift());
    return o;
  }
  for (var l = t; r.length; ) {
    var u = r.shift(),
      c = r.shift();
    try {
      l = u(l);
    } catch (f) {
      c(f);
      break;
    }
  }
  try {
    o = tu(l);
  } catch (f) {
    return Promise.reject(f);
  }
  for (; i.length; ) o = o.then(i.shift(), i.shift());
  return o;
};
Tr.prototype.getUri = function (t) {
  return (
    (t = bs(this.defaults, t)),
    ng(t.url, t.params, t.paramsSerializer).replace(/^\?/, '')
  );
};
Xl.forEach(['delete', 'get', 'head', 'options'], function (t) {
  Tr.prototype[t] = function (n, r) {
    return this.request(
      bs(r || {}, { method: t, url: n, data: (r || {}).data }),
    );
  };
});
Xl.forEach(['post', 'put', 'patch'], function (t) {
  Tr.prototype[t] = function (n, r, s) {
    return this.request(bs(s || {}, { method: t, url: n, data: r }));
  };
});
var rg = Tr,
  sg = gs;
function Jn(e) {
  if (typeof e != 'function')
    throw new TypeError('executor must be a function.');
  var t;
  this.promise = new Promise(function (s) {
    t = s;
  });
  var n = this;
  this.promise.then(function (r) {
    if (!!n._listeners) {
      var s,
        i = n._listeners.length;
      for (s = 0; s < i; s++) n._listeners[s](r);
      n._listeners = null;
    }
  }),
    (this.promise.then = function (r) {
      var s,
        i = new Promise(function (o) {
          n.subscribe(o), (s = o);
        }).then(r);
      return (
        (i.cancel = function () {
          n.unsubscribe(s);
        }),
        i
      );
    }),
    e(function (s) {
      n.reason || ((n.reason = new sg(s)), t(n.reason));
    });
}
Jn.prototype.throwIfRequested = function () {
  if (this.reason) throw this.reason;
};
Jn.prototype.subscribe = function (t) {
  if (this.reason) {
    t(this.reason);
    return;
  }
  this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
};
Jn.prototype.unsubscribe = function (t) {
  if (!!this._listeners) {
    var n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
};
Jn.source = function () {
  var t,
    n = new Jn(function (s) {
      t = s;
    });
  return { token: n, cancel: t };
};
var ig = Jn,
  og = function (t) {
    return function (r) {
      return t.apply(null, r);
    };
  },
  ag = function (t) {
    return typeof t == 'object' && t.isAxiosError === !0;
  },
  ru = et,
  lg = Fl,
  Es = rg,
  ug = Kl,
  cg = ws;
function su(e) {
  var t = new Es(e),
    n = lg(Es.prototype.request, t);
  return (
    ru.extend(n, Es.prototype, t),
    ru.extend(n, t),
    (n.create = function (s) {
      return su(ug(e, s));
    }),
    n
  );
}
var _t = su(cg);
_t.Axios = Es;
_t.Cancel = gs;
_t.CancelToken = ig;
_t.isCancel = Yl;
_t.VERSION = Gl.version;
_t.all = function (t) {
  return Promise.all(t);
};
_t.spread = og;
_t.isAxiosError = ag;
Ji.exports = _t;
Ji.exports.default = _t;
var xw = Ji.exports;
class mn extends Error {}
class fg extends mn {
  constructor(t) {
    super(`Invalid DateTime: ${t.toMessage()}`);
  }
}
class dg extends mn {
  constructor(t) {
    super(`Invalid Interval: ${t.toMessage()}`);
  }
}
class hg extends mn {
  constructor(t) {
    super(`Invalid Duration: ${t.toMessage()}`);
  }
}
class Or extends mn {}
class iu extends mn {
  constructor(t) {
    super(`Invalid unit ${t}`);
  }
}
class at extends mn {}
class qt extends mn {
  constructor() {
    super('Zone is an abstract class');
  }
}
const I = 'numeric',
  mt = 'short',
  nt = 'long',
  oo = { year: I, month: I, day: I },
  ou = { year: I, month: mt, day: I },
  mg = { year: I, month: mt, day: I, weekday: mt },
  au = { year: I, month: nt, day: I },
  lu = { year: I, month: nt, day: I, weekday: nt },
  uu = { hour: I, minute: I },
  cu = { hour: I, minute: I, second: I },
  fu = { hour: I, minute: I, second: I, timeZoneName: mt },
  du = { hour: I, minute: I, second: I, timeZoneName: nt },
  hu = { hour: I, minute: I, hourCycle: 'h23' },
  mu = { hour: I, minute: I, second: I, hourCycle: 'h23' },
  pu = { hour: I, minute: I, second: I, hourCycle: 'h23', timeZoneName: mt },
  gu = { hour: I, minute: I, second: I, hourCycle: 'h23', timeZoneName: nt },
  vu = { year: I, month: I, day: I, hour: I, minute: I },
  yu = { year: I, month: I, day: I, hour: I, minute: I, second: I },
  wu = { year: I, month: mt, day: I, hour: I, minute: I },
  bu = { year: I, month: mt, day: I, hour: I, minute: I, second: I },
  pg = { year: I, month: mt, day: I, weekday: mt, hour: I, minute: I },
  Eu = { year: I, month: nt, day: I, hour: I, minute: I, timeZoneName: mt },
  Tu = {
    year: I,
    month: nt,
    day: I,
    hour: I,
    minute: I,
    second: I,
    timeZoneName: mt,
  },
  Ou = {
    year: I,
    month: nt,
    day: I,
    weekday: nt,
    hour: I,
    minute: I,
    timeZoneName: nt,
  },
  Su = {
    year: I,
    month: nt,
    day: I,
    weekday: nt,
    hour: I,
    minute: I,
    second: I,
    timeZoneName: nt,
  };
function J(e) {
  return typeof e == 'undefined';
}
function pn(e) {
  return typeof e == 'number';
}
function Ts(e) {
  return typeof e == 'number' && e % 1 == 0;
}
function gg(e) {
  return typeof e == 'string';
}
function vg(e) {
  return Object.prototype.toString.call(e) === '[object Date]';
}
function xu() {
  try {
    return typeof Intl != 'undefined' && !!Intl.RelativeTimeFormat;
  } catch {
    return !1;
  }
}
function yg(e) {
  return Array.isArray(e) ? e : [e];
}
function _u(e, t, n) {
  if (e.length !== 0)
    return e.reduce((r, s) => {
      const i = [t(s), s];
      return r && n(r[0], i[0]) === r[0] ? r : i;
    }, null)[1];
}
function wg(e, t) {
  return t.reduce((n, r) => ((n[r] = e[r]), n), {});
}
function Kn(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function Mt(e, t, n) {
  return Ts(e) && e >= t && e <= n;
}
function bg(e, t) {
  return e - t * Math.floor(e / t);
}
function _e(e, t = 2) {
  const n = e < 0;
  let r;
  return (
    n
      ? (r = '-' + ('' + -e).padStart(t, '0'))
      : (r = ('' + e).padStart(t, '0')),
    r
  );
}
function Wt(e) {
  if (!(J(e) || e === null || e === '')) return parseInt(e, 10);
}
function gn(e) {
  if (!(J(e) || e === null || e === '')) return parseFloat(e);
}
function ao(e) {
  if (!(J(e) || e === null || e === '')) {
    const t = parseFloat('0.' + e) * 1e3;
    return Math.floor(t);
  }
}
function lo(e, t, n = !1) {
  const r = 10 ** t;
  return (n ? Math.trunc : Math.round)(e * r) / r;
}
function Sr(e) {
  return e % 4 == 0 && (e % 100 != 0 || e % 400 == 0);
}
function xr(e) {
  return Sr(e) ? 366 : 365;
}
function Os(e, t) {
  const n = bg(t - 1, 12) + 1,
    r = e + (t - n) / 12;
  return n === 2
    ? Sr(r)
      ? 29
      : 28
    : [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][n - 1];
}
function uo(e) {
  let t = Date.UTC(
    e.year,
    e.month - 1,
    e.day,
    e.hour,
    e.minute,
    e.second,
    e.millisecond,
  );
  return (
    e.year < 100 &&
      e.year >= 0 &&
      ((t = new Date(t)), t.setUTCFullYear(t.getUTCFullYear() - 1900)),
    +t
  );
}
function Ss(e) {
  const t =
      (e + Math.floor(e / 4) - Math.floor(e / 100) + Math.floor(e / 400)) % 7,
    n = e - 1,
    r = (n + Math.floor(n / 4) - Math.floor(n / 100) + Math.floor(n / 400)) % 7;
  return t === 4 || r === 3 ? 53 : 52;
}
function co(e) {
  return e > 99 ? e : e > 60 ? 1900 + e : 2e3 + e;
}
function Cu(e, t, n, r = null) {
  const s = new Date(e),
    i = {
      hourCycle: 'h23',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    };
  r && (i.timeZone = r);
  const o = U({ timeZoneName: t }, i),
    a = new Intl.DateTimeFormat(n, o)
      .formatToParts(s)
      .find(l => l.type.toLowerCase() === 'timezonename');
  return a ? a.value : null;
}
function xs(e, t) {
  let n = parseInt(e, 10);
  Number.isNaN(n) && (n = 0);
  const r = parseInt(t, 10) || 0,
    s = n < 0 || Object.is(n, -0) ? -r : r;
  return n * 60 + s;
}
function Pu(e) {
  const t = Number(e);
  if (typeof e == 'boolean' || e === '' || Number.isNaN(t))
    throw new at(`Invalid unit value ${e}`);
  return t;
}
function _s(e, t) {
  const n = {};
  for (const r in e)
    if (Kn(e, r)) {
      const s = e[r];
      if (s == null) continue;
      n[t(r)] = Pu(s);
    }
  return n;
}
function Cs(e, t) {
  const n = Math.trunc(Math.abs(e / 60)),
    r = Math.trunc(Math.abs(e % 60)),
    s = e >= 0 ? '+' : '-';
  switch (t) {
    case 'short':
      return `${s}${_e(n, 2)}:${_e(r, 2)}`;
    case 'narrow':
      return `${s}${n}${r > 0 ? `:${r}` : ''}`;
    case 'techie':
      return `${s}${_e(n, 2)}${_e(r, 2)}`;
    default:
      throw new RangeError(
        `Value format ${t} is out of range for property format`,
      );
  }
}
function Ps(e) {
  return wg(e, ['hour', 'minute', 'second', 'millisecond']);
}
const Au =
    /[A-Za-z_+-]{1,256}(:?\/[A-Za-z0-9_+-]{1,256}(\/[A-Za-z0-9_+-]{1,256})?)?/,
  Eg = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],
  Iu = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ],
  Tg = ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'];
function Nu(e) {
  switch (e) {
    case 'narrow':
      return [...Tg];
    case 'short':
      return [...Iu];
    case 'long':
      return [...Eg];
    case 'numeric':
      return ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
    case '2-digit':
      return [
        '01',
        '02',
        '03',
        '04',
        '05',
        '06',
        '07',
        '08',
        '09',
        '10',
        '11',
        '12',
      ];
    default:
      return null;
  }
}
const ku = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ],
  Mu = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  Og = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
function Ru(e) {
  switch (e) {
    case 'narrow':
      return [...Og];
    case 'short':
      return [...Mu];
    case 'long':
      return [...ku];
    case 'numeric':
      return ['1', '2', '3', '4', '5', '6', '7'];
    default:
      return null;
  }
}
const $u = ['AM', 'PM'],
  Sg = ['Before Christ', 'Anno Domini'],
  xg = ['BC', 'AD'],
  _g = ['B', 'A'];
function Du(e) {
  switch (e) {
    case 'narrow':
      return [..._g];
    case 'short':
      return [...xg];
    case 'long':
      return [...Sg];
    default:
      return null;
  }
}
function Cg(e) {
  return $u[e.hour < 12 ? 0 : 1];
}
function Pg(e, t) {
  return Ru(t)[e.weekday - 1];
}
function Ag(e, t) {
  return Nu(t)[e.month - 1];
}
function Ig(e, t) {
  return Du(t)[e.year < 0 ? 0 : 1];
}
function Ng(e, t, n = 'always', r = !1) {
  const s = {
      years: ['year', 'yr.'],
      quarters: ['quarter', 'qtr.'],
      months: ['month', 'mo.'],
      weeks: ['week', 'wk.'],
      days: ['day', 'day', 'days'],
      hours: ['hour', 'hr.'],
      minutes: ['minute', 'min.'],
      seconds: ['second', 'sec.'],
    },
    i = ['hours', 'minutes', 'seconds'].indexOf(e) === -1;
  if (n === 'auto' && i) {
    const f = e === 'days';
    switch (t) {
      case 1:
        return f ? 'tomorrow' : `next ${s[e][0]}`;
      case -1:
        return f ? 'yesterday' : `last ${s[e][0]}`;
      case 0:
        return f ? 'today' : `this ${s[e][0]}`;
    }
  }
  const o = Object.is(t, -0) || t < 0,
    a = Math.abs(t),
    l = a === 1,
    u = s[e],
    c = r ? (l ? u[1] : u[2] || u[1]) : l ? s[e][0] : e;
  return o ? `${a} ${c} ago` : `in ${a} ${c}`;
}
function Fu(e, t) {
  let n = '';
  for (const r of e) r.literal ? (n += r.val) : (n += t(r.val));
  return n;
}
const kg = {
  D: oo,
  DD: ou,
  DDD: au,
  DDDD: lu,
  t: uu,
  tt: cu,
  ttt: fu,
  tttt: du,
  T: hu,
  TT: mu,
  TTT: pu,
  TTTT: gu,
  f: vu,
  ff: wu,
  fff: Eu,
  ffff: Ou,
  F: yu,
  FF: bu,
  FFF: Tu,
  FFFF: Su,
};
class Ze {
  static create(t, n = {}) {
    return new Ze(t, n);
  }
  static parseFormat(t) {
    let n = null,
      r = '',
      s = !1;
    const i = [];
    for (let o = 0; o < t.length; o++) {
      const a = t.charAt(o);
      a === "'"
        ? (r.length > 0 && i.push({ literal: s, val: r }),
          (n = null),
          (r = ''),
          (s = !s))
        : s || a === n
        ? (r += a)
        : (r.length > 0 && i.push({ literal: !1, val: r }), (r = a), (n = a));
    }
    return r.length > 0 && i.push({ literal: s, val: r }), i;
  }
  static macroTokenToFormatOpts(t) {
    return kg[t];
  }
  constructor(t, n) {
    (this.opts = n), (this.loc = t), (this.systemLoc = null);
  }
  formatWithSystemDefault(t, n) {
    return (
      this.systemLoc === null &&
        (this.systemLoc = this.loc.redefaultToSystem()),
      this.systemLoc.dtFormatter(t, U(U({}, this.opts), n)).format()
    );
  }
  formatDateTime(t, n = {}) {
    return this.loc.dtFormatter(t, U(U({}, this.opts), n)).format();
  }
  formatDateTimeParts(t, n = {}) {
    return this.loc.dtFormatter(t, U(U({}, this.opts), n)).formatToParts();
  }
  resolvedOptions(t, n = {}) {
    return this.loc.dtFormatter(t, U(U({}, this.opts), n)).resolvedOptions();
  }
  num(t, n = 0) {
    if (this.opts.forceSimple) return _e(t, n);
    const r = U({}, this.opts);
    return n > 0 && (r.padTo = n), this.loc.numberFormatter(r).format(t);
  }
  formatDateTimeFromString(t, n) {
    const r = this.loc.listingMode() === 'en',
      s = this.loc.outputCalendar && this.loc.outputCalendar !== 'gregory',
      i = (p, v) => this.loc.extract(t, p, v),
      o = p =>
        t.isOffsetFixed && t.offset === 0 && p.allowZ
          ? 'Z'
          : t.isValid
          ? t.zone.formatOffset(t.ts, p.format)
          : '',
      a = () =>
        r ? Cg(t) : i({ hour: 'numeric', hourCycle: 'h12' }, 'dayperiod'),
      l = (p, v) =>
        r
          ? Ag(t, p)
          : i(v ? { month: p } : { month: p, day: 'numeric' }, 'month'),
      u = (p, v) =>
        r
          ? Pg(t, p)
          : i(
              v
                ? { weekday: p }
                : { weekday: p, month: 'long', day: 'numeric' },
              'weekday',
            ),
      c = p => {
        const v = Ze.macroTokenToFormatOpts(p);
        return v ? this.formatWithSystemDefault(t, v) : p;
      },
      f = p => (r ? Ig(t, p) : i({ era: p }, 'era')),
      h = p => {
        switch (p) {
          case 'S':
            return this.num(t.millisecond);
          case 'u':
          case 'SSS':
            return this.num(t.millisecond, 3);
          case 's':
            return this.num(t.second);
          case 'ss':
            return this.num(t.second, 2);
          case 'uu':
            return this.num(Math.floor(t.millisecond / 10), 2);
          case 'uuu':
            return this.num(Math.floor(t.millisecond / 100));
          case 'm':
            return this.num(t.minute);
          case 'mm':
            return this.num(t.minute, 2);
          case 'h':
            return this.num(t.hour % 12 == 0 ? 12 : t.hour % 12);
          case 'hh':
            return this.num(t.hour % 12 == 0 ? 12 : t.hour % 12, 2);
          case 'H':
            return this.num(t.hour);
          case 'HH':
            return this.num(t.hour, 2);
          case 'Z':
            return o({ format: 'narrow', allowZ: this.opts.allowZ });
          case 'ZZ':
            return o({ format: 'short', allowZ: this.opts.allowZ });
          case 'ZZZ':
            return o({ format: 'techie', allowZ: this.opts.allowZ });
          case 'ZZZZ':
            return t.zone.offsetName(t.ts, {
              format: 'short',
              locale: this.loc.locale,
            });
          case 'ZZZZZ':
            return t.zone.offsetName(t.ts, {
              format: 'long',
              locale: this.loc.locale,
            });
          case 'z':
            return t.zoneName;
          case 'a':
            return a();
          case 'd':
            return s ? i({ day: 'numeric' }, 'day') : this.num(t.day);
          case 'dd':
            return s ? i({ day: '2-digit' }, 'day') : this.num(t.day, 2);
          case 'c':
            return this.num(t.weekday);
          case 'ccc':
            return u('short', !0);
          case 'cccc':
            return u('long', !0);
          case 'ccccc':
            return u('narrow', !0);
          case 'E':
            return this.num(t.weekday);
          case 'EEE':
            return u('short', !1);
          case 'EEEE':
            return u('long', !1);
          case 'EEEEE':
            return u('narrow', !1);
          case 'L':
            return s
              ? i({ month: 'numeric', day: 'numeric' }, 'month')
              : this.num(t.month);
          case 'LL':
            return s
              ? i({ month: '2-digit', day: 'numeric' }, 'month')
              : this.num(t.month, 2);
          case 'LLL':
            return l('short', !0);
          case 'LLLL':
            return l('long', !0);
          case 'LLLLL':
            return l('narrow', !0);
          case 'M':
            return s ? i({ month: 'numeric' }, 'month') : this.num(t.month);
          case 'MM':
            return s ? i({ month: '2-digit' }, 'month') : this.num(t.month, 2);
          case 'MMM':
            return l('short', !1);
          case 'MMMM':
            return l('long', !1);
          case 'MMMMM':
            return l('narrow', !1);
          case 'y':
            return s ? i({ year: 'numeric' }, 'year') : this.num(t.year);
          case 'yy':
            return s
              ? i({ year: '2-digit' }, 'year')
              : this.num(t.year.toString().slice(-2), 2);
          case 'yyyy':
            return s ? i({ year: 'numeric' }, 'year') : this.num(t.year, 4);
          case 'yyyyyy':
            return s ? i({ year: 'numeric' }, 'year') : this.num(t.year, 6);
          case 'G':
            return f('short');
          case 'GG':
            return f('long');
          case 'GGGGG':
            return f('narrow');
          case 'kk':
            return this.num(t.weekYear.toString().slice(-2), 2);
          case 'kkkk':
            return this.num(t.weekYear, 4);
          case 'W':
            return this.num(t.weekNumber);
          case 'WW':
            return this.num(t.weekNumber, 2);
          case 'o':
            return this.num(t.ordinal);
          case 'ooo':
            return this.num(t.ordinal, 3);
          case 'q':
            return this.num(t.quarter);
          case 'qq':
            return this.num(t.quarter, 2);
          case 'X':
            return this.num(Math.floor(t.ts / 1e3));
          case 'x':
            return this.num(t.ts);
          default:
            return c(p);
        }
      };
    return Fu(Ze.parseFormat(n), h);
  }
  formatDurationFromString(t, n) {
    const r = l => {
        switch (l[0]) {
          case 'S':
            return 'millisecond';
          case 's':
            return 'second';
          case 'm':
            return 'minute';
          case 'h':
            return 'hour';
          case 'd':
            return 'day';
          case 'M':
            return 'month';
          case 'y':
            return 'year';
          default:
            return null;
        }
      },
      s = l => u => {
        const c = r(u);
        return c ? this.num(l.get(c), u.length) : u;
      },
      i = Ze.parseFormat(n),
      o = i.reduce((l, { literal: u, val: c }) => (u ? l : l.concat(c)), []),
      a = t.shiftTo(...o.map(r).filter(l => l));
    return Fu(i, s(a));
  }
}
class pt {
  constructor(t, n) {
    (this.reason = t), (this.explanation = n);
  }
  toMessage() {
    return this.explanation
      ? `${this.reason}: ${this.explanation}`
      : this.reason;
  }
}
class _r {
  get type() {
    throw new qt();
  }
  get name() {
    throw new qt();
  }
  get isUniversal() {
    throw new qt();
  }
  offsetName(t, n) {
    throw new qt();
  }
  formatOffset(t, n) {
    throw new qt();
  }
  offset(t) {
    throw new qt();
  }
  equals(t) {
    throw new qt();
  }
  get isValid() {
    throw new qt();
  }
}
let fo = null;
class ho extends _r {
  static get instance() {
    return fo === null && (fo = new ho()), fo;
  }
  get type() {
    return 'system';
  }
  get name() {
    return new Intl.DateTimeFormat().resolvedOptions().timeZone;
  }
  get isUniversal() {
    return !1;
  }
  offsetName(t, { format: n, locale: r }) {
    return Cu(t, n, r);
  }
  formatOffset(t, n) {
    return Cs(this.offset(t), n);
  }
  offset(t) {
    return -new Date(t).getTimezoneOffset();
  }
  equals(t) {
    return t.type === 'system';
  }
  get isValid() {
    return !0;
  }
}
const Mg = RegExp(`^${Au.source}$`);
let As = {};
function Rg(e) {
  return (
    As[e] ||
      (As[e] = new Intl.DateTimeFormat('en-US', {
        hour12: !1,
        timeZone: e,
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      })),
    As[e]
  );
}
const $g = { year: 0, month: 1, day: 2, hour: 3, minute: 4, second: 5 };
function Dg(e, t) {
  const n = e.format(t).replace(/\u200E/g, ''),
    r = /(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(n),
    [, s, i, o, a, l, u] = r;
  return [o, s, i, a, l, u];
}
function Fg(e, t) {
  const n = e.formatToParts(t),
    r = [];
  for (let s = 0; s < n.length; s++) {
    const { type: i, value: o } = n[s],
      a = $g[i];
    J(a) || (r[a] = parseInt(o, 10));
  }
  return r;
}
let Is = {};
class gt extends _r {
  static create(t) {
    return Is[t] || (Is[t] = new gt(t)), Is[t];
  }
  static resetCache() {
    (Is = {}), (As = {});
  }
  static isValidSpecifier(t) {
    return !!(t && t.match(Mg));
  }
  static isValidZone(t) {
    if (!t) return !1;
    try {
      return new Intl.DateTimeFormat('en-US', { timeZone: t }).format(), !0;
    } catch {
      return !1;
    }
  }
  constructor(t) {
    super();
    (this.zoneName = t), (this.valid = gt.isValidZone(t));
  }
  get type() {
    return 'iana';
  }
  get name() {
    return this.zoneName;
  }
  get isUniversal() {
    return !1;
  }
  offsetName(t, { format: n, locale: r }) {
    return Cu(t, n, r, this.name);
  }
  formatOffset(t, n) {
    return Cs(this.offset(t), n);
  }
  offset(t) {
    const n = new Date(t);
    if (isNaN(n)) return NaN;
    const r = Rg(this.name),
      [s, i, o, a, l, u] = r.formatToParts ? Fg(r, n) : Dg(r, n),
      f = uo({
        year: s,
        month: i,
        day: o,
        hour: a === 24 ? 0 : a,
        minute: l,
        second: u,
        millisecond: 0,
      });
    let h = +n;
    const p = h % 1e3;
    return (h -= p >= 0 ? p : 1e3 + p), (f - h) / (60 * 1e3);
  }
  equals(t) {
    return t.type === 'iana' && t.name === this.name;
  }
  get isValid() {
    return this.valid;
  }
}
let mo = null;
class Be extends _r {
  static get utcInstance() {
    return mo === null && (mo = new Be(0)), mo;
  }
  static instance(t) {
    return t === 0 ? Be.utcInstance : new Be(t);
  }
  static parseSpecifier(t) {
    if (t) {
      const n = t.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);
      if (n) return new Be(xs(n[1], n[2]));
    }
    return null;
  }
  constructor(t) {
    super();
    this.fixed = t;
  }
  get type() {
    return 'fixed';
  }
  get name() {
    return this.fixed === 0 ? 'UTC' : `UTC${Cs(this.fixed, 'narrow')}`;
  }
  offsetName() {
    return this.name;
  }
  formatOffset(t, n) {
    return Cs(this.fixed, n);
  }
  get isUniversal() {
    return !0;
  }
  offset() {
    return this.fixed;
  }
  equals(t) {
    return t.type === 'fixed' && t.fixed === this.fixed;
  }
  get isValid() {
    return !0;
  }
}
class Lu extends _r {
  constructor(t) {
    super();
    this.zoneName = t;
  }
  get type() {
    return 'invalid';
  }
  get name() {
    return this.zoneName;
  }
  get isUniversal() {
    return !1;
  }
  offsetName() {
    return null;
  }
  formatOffset() {
    return '';
  }
  offset() {
    return NaN;
  }
  equals() {
    return !1;
  }
  get isValid() {
    return !1;
  }
}
function zt(e, t) {
  if (J(e) || e === null) return t;
  if (e instanceof _r) return e;
  if (gg(e)) {
    const n = e.toLowerCase();
    return n === 'local' || n === 'system'
      ? t
      : n === 'utc' || n === 'gmt'
      ? Be.utcInstance
      : gt.isValidSpecifier(n)
      ? gt.create(e)
      : Be.parseSpecifier(n) || new Lu(e);
  } else
    return pn(e)
      ? Be.instance(e)
      : typeof e == 'object' && e.offset && typeof e.offset == 'number'
      ? e
      : new Lu(e);
}
let Uu = () => Date.now(),
  Hu = 'system',
  Vu = null,
  ju = null,
  Bu = null,
  qu;
class Ae {
  static get now() {
    return Uu;
  }
  static set now(t) {
    Uu = t;
  }
  static set defaultZone(t) {
    Hu = t;
  }
  static get defaultZone() {
    return zt(Hu, ho.instance);
  }
  static get defaultLocale() {
    return Vu;
  }
  static set defaultLocale(t) {
    Vu = t;
  }
  static get defaultNumberingSystem() {
    return ju;
  }
  static set defaultNumberingSystem(t) {
    ju = t;
  }
  static get defaultOutputCalendar() {
    return Bu;
  }
  static set defaultOutputCalendar(t) {
    Bu = t;
  }
  static get throwOnInvalid() {
    return qu;
  }
  static set throwOnInvalid(t) {
    qu = t;
  }
  static resetCaches() {
    we.resetCache(), gt.resetCache();
  }
}
let Wu = {};
function Lg(e, t = {}) {
  const n = JSON.stringify([e, t]);
  let r = Wu[n];
  return r || ((r = new Intl.ListFormat(e, t)), (Wu[n] = r)), r;
}
let po = {};
function go(e, t = {}) {
  const n = JSON.stringify([e, t]);
  let r = po[n];
  return r || ((r = new Intl.DateTimeFormat(e, t)), (po[n] = r)), r;
}
let vo = {};
function Ug(e, t = {}) {
  const n = JSON.stringify([e, t]);
  let r = vo[n];
  return r || ((r = new Intl.NumberFormat(e, t)), (vo[n] = r)), r;
}
let yo = {};
function Hg(e, t = {}) {
  const o = t,
    { base: n } = o,
    r = Zs(o, ['base']),
    s = JSON.stringify([e, r]);
  let i = yo[s];
  return i || ((i = new Intl.RelativeTimeFormat(e, t)), (yo[s] = i)), i;
}
let Cr = null;
function Vg() {
  return Cr || ((Cr = new Intl.DateTimeFormat().resolvedOptions().locale), Cr);
}
function jg(e) {
  const t = e.indexOf('-u-');
  if (t === -1) return [e];
  {
    let n;
    const r = e.substring(0, t);
    try {
      n = go(e).resolvedOptions();
    } catch {
      n = go(r).resolvedOptions();
    }
    const { numberingSystem: s, calendar: i } = n;
    return [r, s, i];
  }
}
function Bg(e, t, n) {
  return (
    (n || t) && ((e += '-u'), n && (e += `-ca-${n}`), t && (e += `-nu-${t}`)), e
  );
}
function qg(e) {
  const t = [];
  for (let n = 1; n <= 12; n++) {
    const r = B.utc(2016, n, 1);
    t.push(e(r));
  }
  return t;
}
function Wg(e) {
  const t = [];
  for (let n = 1; n <= 7; n++) {
    const r = B.utc(2016, 11, 13 + n);
    t.push(e(r));
  }
  return t;
}
function Ns(e, t, n, r, s) {
  const i = e.listingMode(n);
  return i === 'error' ? null : i === 'en' ? r(t) : s(t);
}
function zg(e) {
  return e.numberingSystem && e.numberingSystem !== 'latn'
    ? !1
    : e.numberingSystem === 'latn' ||
        !e.locale ||
        e.locale.startsWith('en') ||
        new Intl.DateTimeFormat(e.intl).resolvedOptions().numberingSystem ===
          'latn';
}
class Zg {
  constructor(t, n, r) {
    (this.padTo = r.padTo || 0), (this.floor = r.floor || !1);
    const a = r,
      { padTo: s, floor: i } = a,
      o = Zs(a, ['padTo', 'floor']);
    if (!n || Object.keys(o).length > 0) {
      const l = U({ useGrouping: !1 }, r);
      r.padTo > 0 && (l.minimumIntegerDigits = r.padTo), (this.inf = Ug(t, l));
    }
  }
  format(t) {
    if (this.inf) {
      const n = this.floor ? Math.floor(t) : t;
      return this.inf.format(n);
    } else {
      const n = this.floor ? Math.floor(t) : lo(t, 3);
      return _e(n, this.padTo);
    }
  }
}
class Yg {
  constructor(t, n, r) {
    this.opts = r;
    let s;
    if (t.zone.isUniversal) {
      const o = -1 * (t.offset / 60),
        a = o >= 0 ? `Etc/GMT+${o}` : `Etc/GMT${o}`;
      t.offset !== 0 && gt.create(a).valid
        ? ((s = a), (this.dt = t))
        : ((s = 'UTC'),
          r.timeZoneName
            ? (this.dt = t)
            : (this.dt =
                t.offset === 0 ? t : B.fromMillis(t.ts + t.offset * 60 * 1e3)));
    } else
      t.zone.type === 'system'
        ? (this.dt = t)
        : ((this.dt = t), (s = t.zone.name));
    const i = U({}, this.opts);
    s && (i.timeZone = s), (this.dtf = go(n, i));
  }
  format() {
    return this.dtf.format(this.dt.toJSDate());
  }
  formatToParts() {
    return this.dtf.formatToParts(this.dt.toJSDate());
  }
  resolvedOptions() {
    return this.dtf.resolvedOptions();
  }
}
class Jg {
  constructor(t, n, r) {
    (this.opts = U({ style: 'long' }, r)), !n && xu() && (this.rtf = Hg(t, r));
  }
  format(t, n) {
    return this.rtf
      ? this.rtf.format(t, n)
      : Ng(n, t, this.opts.numeric, this.opts.style !== 'long');
  }
  formatToParts(t, n) {
    return this.rtf ? this.rtf.formatToParts(t, n) : [];
  }
}
class we {
  static fromOpts(t) {
    return we.create(
      t.locale,
      t.numberingSystem,
      t.outputCalendar,
      t.defaultToEN,
    );
  }
  static create(t, n, r, s = !1) {
    const i = t || Ae.defaultLocale,
      o = i || (s ? 'en-US' : Vg()),
      a = n || Ae.defaultNumberingSystem,
      l = r || Ae.defaultOutputCalendar;
    return new we(o, a, l, i);
  }
  static resetCache() {
    (Cr = null), (po = {}), (vo = {}), (yo = {});
  }
  static fromObject({ locale: t, numberingSystem: n, outputCalendar: r } = {}) {
    return we.create(t, n, r);
  }
  constructor(t, n, r, s) {
    const [i, o, a] = jg(t);
    (this.locale = i),
      (this.numberingSystem = n || o || null),
      (this.outputCalendar = r || a || null),
      (this.intl = Bg(this.locale, this.numberingSystem, this.outputCalendar)),
      (this.weekdaysCache = { format: {}, standalone: {} }),
      (this.monthsCache = { format: {}, standalone: {} }),
      (this.meridiemCache = null),
      (this.eraCache = {}),
      (this.specifiedLocale = s),
      (this.fastNumbersCached = null);
  }
  get fastNumbers() {
    return (
      this.fastNumbersCached == null && (this.fastNumbersCached = zg(this)),
      this.fastNumbersCached
    );
  }
  listingMode() {
    const t = this.isEnglish(),
      n =
        (this.numberingSystem === null || this.numberingSystem === 'latn') &&
        (this.outputCalendar === null || this.outputCalendar === 'gregory');
    return t && n ? 'en' : 'intl';
  }
  clone(t) {
    return !t || Object.getOwnPropertyNames(t).length === 0
      ? this
      : we.create(
          t.locale || this.specifiedLocale,
          t.numberingSystem || this.numberingSystem,
          t.outputCalendar || this.outputCalendar,
          t.defaultToEN || !1,
        );
  }
  redefaultToEN(t = {}) {
    return this.clone(Et(U({}, t), { defaultToEN: !0 }));
  }
  redefaultToSystem(t = {}) {
    return this.clone(Et(U({}, t), { defaultToEN: !1 }));
  }
  months(t, n = !1, r = !0) {
    return Ns(this, t, r, Nu, () => {
      const s = n ? { month: t, day: 'numeric' } : { month: t },
        i = n ? 'format' : 'standalone';
      return (
        this.monthsCache[i][t] ||
          (this.monthsCache[i][t] = qg(o => this.extract(o, s, 'month'))),
        this.monthsCache[i][t]
      );
    });
  }
  weekdays(t, n = !1, r = !0) {
    return Ns(this, t, r, Ru, () => {
      const s = n
          ? { weekday: t, year: 'numeric', month: 'long', day: 'numeric' }
          : { weekday: t },
        i = n ? 'format' : 'standalone';
      return (
        this.weekdaysCache[i][t] ||
          (this.weekdaysCache[i][t] = Wg(o => this.extract(o, s, 'weekday'))),
        this.weekdaysCache[i][t]
      );
    });
  }
  meridiems(t = !0) {
    return Ns(
      this,
      void 0,
      t,
      () => $u,
      () => {
        if (!this.meridiemCache) {
          const n = { hour: 'numeric', hourCycle: 'h12' };
          this.meridiemCache = [
            B.utc(2016, 11, 13, 9),
            B.utc(2016, 11, 13, 19),
          ].map(r => this.extract(r, n, 'dayperiod'));
        }
        return this.meridiemCache;
      },
    );
  }
  eras(t, n = !0) {
    return Ns(this, t, n, Du, () => {
      const r = { era: t };
      return (
        this.eraCache[t] ||
          (this.eraCache[t] = [B.utc(-40, 1, 1), B.utc(2017, 1, 1)].map(s =>
            this.extract(s, r, 'era'),
          )),
        this.eraCache[t]
      );
    });
  }
  extract(t, n, r) {
    const s = this.dtFormatter(t, n),
      i = s.formatToParts(),
      o = i.find(a => a.type.toLowerCase() === r);
    return o ? o.value : null;
  }
  numberFormatter(t = {}) {
    return new Zg(this.intl, t.forceSimple || this.fastNumbers, t);
  }
  dtFormatter(t, n = {}) {
    return new Yg(t, this.intl, n);
  }
  relFormatter(t = {}) {
    return new Jg(this.intl, this.isEnglish(), t);
  }
  listFormatter(t = {}) {
    return Lg(this.intl, t);
  }
  isEnglish() {
    return (
      this.locale === 'en' ||
      this.locale.toLowerCase() === 'en-us' ||
      new Intl.DateTimeFormat(this.intl)
        .resolvedOptions()
        .locale.startsWith('en-us')
    );
  }
  equals(t) {
    return (
      this.locale === t.locale &&
      this.numberingSystem === t.numberingSystem &&
      this.outputCalendar === t.outputCalendar
    );
  }
}
function Gn(...e) {
  const t = e.reduce((n, r) => n + r.source, '');
  return RegExp(`^${t}$`);
}
function vn(...e) {
  return t =>
    e
      .reduce(
        ([n, r, s], i) => {
          const [o, a, l] = i(t, s);
          return [U(U({}, n), o), r || a, l];
        },
        [{}, null, 1],
      )
      .slice(0, 2);
}
function Qn(e, ...t) {
  if (e == null) return [null, null];
  for (const [n, r] of t) {
    const s = n.exec(e);
    if (s) return r(s);
  }
  return [null, null];
}
function zu(...e) {
  return (t, n) => {
    const r = {};
    let s;
    for (s = 0; s < e.length; s++) r[e[s]] = Wt(t[n + s]);
    return [r, null, n + s];
  };
}
const Zu = /(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/,
  wo = /(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/,
  Yu = RegExp(`${wo.source}${Zu.source}?`),
  bo = RegExp(`(?:T${Yu.source})?`),
  Kg = /([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/,
  Gg = /(\d{4})-?W(\d\d)(?:-?(\d))?/,
  Qg = /(\d{4})-?(\d{3})/,
  Xg = zu('weekYear', 'weekNumber', 'weekDay'),
  ev = zu('year', 'ordinal'),
  tv = /(\d{4})-(\d\d)-(\d\d)/,
  Ju = RegExp(`${wo.source} ?(?:${Zu.source}|(${Au.source}))?`),
  nv = RegExp(`(?: ${Ju.source})?`);
function Xn(e, t, n) {
  const r = e[t];
  return J(r) ? n : Wt(r);
}
function Ku(e, t) {
  return [
    { year: Xn(e, t), month: Xn(e, t + 1, 1), day: Xn(e, t + 2, 1) },
    null,
    t + 3,
  ];
}
function yn(e, t) {
  return [
    {
      hours: Xn(e, t, 0),
      minutes: Xn(e, t + 1, 0),
      seconds: Xn(e, t + 2, 0),
      milliseconds: ao(e[t + 3]),
    },
    null,
    t + 4,
  ];
}
function er(e, t) {
  const n = !e[t] && !e[t + 1],
    r = xs(e[t + 1], e[t + 2]),
    s = n ? null : Be.instance(r);
  return [{}, s, t + 3];
}
function Gu(e, t) {
  const n = e[t] ? gt.create(e[t]) : null;
  return [{}, n, t + 1];
}
const rv = RegExp(`^T?${wo.source}$`),
  sv =
    /^-?P(?:(?:(-?\d{1,9}(?:\.\d{1,9})?)Y)?(?:(-?\d{1,9}(?:\.\d{1,9})?)M)?(?:(-?\d{1,9}(?:\.\d{1,9})?)W)?(?:(-?\d{1,9}(?:\.\d{1,9})?)D)?(?:T(?:(-?\d{1,9}(?:\.\d{1,9})?)H)?(?:(-?\d{1,9}(?:\.\d{1,9})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,9}))?S)?)?)$/;
function iv(e) {
  const [t, n, r, s, i, o, a, l, u] = e,
    c = t[0] === '-',
    f = l && l[0] === '-',
    h = (p, v = !1) => (p !== void 0 && (v || (p && c)) ? -p : p);
  return [
    {
      years: h(gn(n)),
      months: h(gn(r)),
      weeks: h(gn(s)),
      days: h(gn(i)),
      hours: h(gn(o)),
      minutes: h(gn(a)),
      seconds: h(gn(l), l === '-0'),
      milliseconds: h(ao(u), f),
    },
  ];
}
const ov = {
  GMT: 0,
  EDT: -4 * 60,
  EST: -5 * 60,
  CDT: -5 * 60,
  CST: -6 * 60,
  MDT: -6 * 60,
  MST: -7 * 60,
  PDT: -7 * 60,
  PST: -8 * 60,
};
function Eo(e, t, n, r, s, i, o) {
  const a = {
    year: t.length === 2 ? co(Wt(t)) : Wt(t),
    month: Iu.indexOf(n) + 1,
    day: Wt(r),
    hour: Wt(s),
    minute: Wt(i),
  };
  return (
    o && (a.second = Wt(o)),
    e && (a.weekday = e.length > 3 ? ku.indexOf(e) + 1 : Mu.indexOf(e) + 1),
    a
  );
}
const av =
  /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;
function lv(e) {
  const [, t, n, r, s, i, o, a, l, u, c, f] = e,
    h = Eo(t, s, r, n, i, o, a);
  let p;
  return l ? (p = ov[l]) : u ? (p = 0) : (p = xs(c, f)), [h, new Be(p)];
}
function uv(e) {
  return e
    .replace(/\([^)]*\)|[\n\t]/g, ' ')
    .replace(/(\s\s+)/g, ' ')
    .trim();
}
const cv =
    /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,
  fv =
    /^(Monday|Tuesday|Wedsday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,
  dv =
    /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;
function Qu(e) {
  const [, t, n, r, s, i, o, a] = e;
  return [Eo(t, s, r, n, i, o, a), Be.utcInstance];
}
function hv(e) {
  const [, t, n, r, s, i, o, a] = e;
  return [Eo(t, a, n, r, s, i, o), Be.utcInstance];
}
const mv = Gn(Kg, bo),
  pv = Gn(Gg, bo),
  gv = Gn(Qg, bo),
  vv = Gn(Yu),
  yv = vn(Ku, yn, er),
  wv = vn(Xg, yn, er),
  bv = vn(ev, yn, er),
  Ev = vn(yn, er);
function Tv(e) {
  return Qn(e, [mv, yv], [pv, wv], [gv, bv], [vv, Ev]);
}
function Ov(e) {
  return Qn(uv(e), [av, lv]);
}
function Sv(e) {
  return Qn(e, [cv, Qu], [fv, Qu], [dv, hv]);
}
function xv(e) {
  return Qn(e, [sv, iv]);
}
const _v = vn(yn);
function Cv(e) {
  return Qn(e, [rv, _v]);
}
const Pv = Gn(tv, nv),
  Av = Gn(Ju),
  Iv = vn(Ku, yn, er, Gu),
  Nv = vn(yn, er, Gu);
function kv(e) {
  return Qn(e, [Pv, Iv], [Av, Nv]);
}
const Mv = 'Invalid Duration',
  Xu = {
    weeks: {
      days: 7,
      hours: 7 * 24,
      minutes: 7 * 24 * 60,
      seconds: 7 * 24 * 60 * 60,
      milliseconds: 7 * 24 * 60 * 60 * 1e3,
    },
    days: {
      hours: 24,
      minutes: 24 * 60,
      seconds: 24 * 60 * 60,
      milliseconds: 24 * 60 * 60 * 1e3,
    },
    hours: { minutes: 60, seconds: 60 * 60, milliseconds: 60 * 60 * 1e3 },
    minutes: { seconds: 60, milliseconds: 60 * 1e3 },
    seconds: { milliseconds: 1e3 },
  },
  Rv = U(
    {
      years: {
        quarters: 4,
        months: 12,
        weeks: 52,
        days: 365,
        hours: 365 * 24,
        minutes: 365 * 24 * 60,
        seconds: 365 * 24 * 60 * 60,
        milliseconds: 365 * 24 * 60 * 60 * 1e3,
      },
      quarters: {
        months: 3,
        weeks: 13,
        days: 91,
        hours: 91 * 24,
        minutes: 91 * 24 * 60,
        seconds: 91 * 24 * 60 * 60,
        milliseconds: 91 * 24 * 60 * 60 * 1e3,
      },
      months: {
        weeks: 4,
        days: 30,
        hours: 30 * 24,
        minutes: 30 * 24 * 60,
        seconds: 30 * 24 * 60 * 60,
        milliseconds: 30 * 24 * 60 * 60 * 1e3,
      },
    },
    Xu,
  ),
  lt = 146097 / 400,
  tr = 146097 / 4800,
  $v = U(
    {
      years: {
        quarters: 4,
        months: 12,
        weeks: lt / 7,
        days: lt,
        hours: lt * 24,
        minutes: lt * 24 * 60,
        seconds: lt * 24 * 60 * 60,
        milliseconds: lt * 24 * 60 * 60 * 1e3,
      },
      quarters: {
        months: 3,
        weeks: lt / 28,
        days: lt / 4,
        hours: (lt * 24) / 4,
        minutes: (lt * 24 * 60) / 4,
        seconds: (lt * 24 * 60 * 60) / 4,
        milliseconds: (lt * 24 * 60 * 60 * 1e3) / 4,
      },
      months: {
        weeks: tr / 7,
        days: tr,
        hours: tr * 24,
        minutes: tr * 24 * 60,
        seconds: tr * 24 * 60 * 60,
        milliseconds: tr * 24 * 60 * 60 * 1e3,
      },
    },
    Xu,
  ),
  wn = [
    'years',
    'quarters',
    'months',
    'weeks',
    'days',
    'hours',
    'minutes',
    'seconds',
    'milliseconds',
  ],
  Dv = wn.slice(0).reverse();
function bn(e, t, n = !1) {
  const r = {
    values: n ? t.values : U(U({}, e.values), t.values || {}),
    loc: e.loc.clone(t.loc),
    conversionAccuracy: t.conversionAccuracy || e.conversionAccuracy,
  };
  return new ee(r);
}
function Fv(e) {
  return e < 0 ? Math.floor(e) : Math.ceil(e);
}
function ec(e, t, n, r, s) {
  const i = e[s][n],
    o = t[n] / i,
    a = Math.sign(o) === Math.sign(r[s]),
    l = !a && r[s] !== 0 && Math.abs(o) <= 1 ? Fv(o) : Math.trunc(o);
  (r[s] += l), (t[n] -= l * i);
}
function Lv(e, t) {
  Dv.reduce((n, r) => (J(t[r]) ? n : (n && ec(e, t, n, t, r), r)), null);
}
class ee {
  constructor(t) {
    const n = t.conversionAccuracy === 'longterm' || !1;
    (this.values = t.values),
      (this.loc = t.loc || we.create()),
      (this.conversionAccuracy = n ? 'longterm' : 'casual'),
      (this.invalid = t.invalid || null),
      (this.matrix = n ? $v : Rv),
      (this.isLuxonDuration = !0);
  }
  static fromMillis(t, n) {
    return ee.fromObject({ milliseconds: t }, n);
  }
  static fromObject(t, n = {}) {
    if (t == null || typeof t != 'object')
      throw new at(
        `Duration.fromObject: argument expected to be an object, got ${
          t === null ? 'null' : typeof t
        }`,
      );
    return new ee({
      values: _s(t, ee.normalizeUnit),
      loc: we.fromObject(n),
      conversionAccuracy: n.conversionAccuracy,
    });
  }
  static fromDurationLike(t) {
    if (pn(t)) return ee.fromMillis(t);
    if (ee.isDuration(t)) return t;
    if (typeof t == 'object') return ee.fromObject(t);
    throw new at(`Unknown duration argument ${t} of type ${typeof t}`);
  }
  static fromISO(t, n) {
    const [r] = xv(t);
    return r
      ? ee.fromObject(r, n)
      : ee.invalid(
          'unparsable',
          `the input "${t}" can't be parsed as ISO 8601`,
        );
  }
  static fromISOTime(t, n) {
    const [r] = Cv(t);
    return r
      ? ee.fromObject(r, n)
      : ee.invalid(
          'unparsable',
          `the input "${t}" can't be parsed as ISO 8601`,
        );
  }
  static invalid(t, n = null) {
    if (!t) throw new at('need to specify a reason the Duration is invalid');
    const r = t instanceof pt ? t : new pt(t, n);
    if (Ae.throwOnInvalid) throw new hg(r);
    return new ee({ invalid: r });
  }
  static normalizeUnit(t) {
    const n = {
      year: 'years',
      years: 'years',
      quarter: 'quarters',
      quarters: 'quarters',
      month: 'months',
      months: 'months',
      week: 'weeks',
      weeks: 'weeks',
      day: 'days',
      days: 'days',
      hour: 'hours',
      hours: 'hours',
      minute: 'minutes',
      minutes: 'minutes',
      second: 'seconds',
      seconds: 'seconds',
      millisecond: 'milliseconds',
      milliseconds: 'milliseconds',
    }[t && t.toLowerCase()];
    if (!n) throw new iu(t);
    return n;
  }
  static isDuration(t) {
    return (t && t.isLuxonDuration) || !1;
  }
  get locale() {
    return this.isValid ? this.loc.locale : null;
  }
  get numberingSystem() {
    return this.isValid ? this.loc.numberingSystem : null;
  }
  toFormat(t, n = {}) {
    const r = Et(U({}, n), { floor: n.round !== !1 && n.floor !== !1 });
    return this.isValid
      ? Ze.create(this.loc, r).formatDurationFromString(this, t)
      : Mv;
  }
  toHuman(t = {}) {
    const n = wn
      .map(r => {
        const s = this.values[r];
        return J(s)
          ? null
          : this.loc
              .numberFormatter(
                Et(U({ style: 'unit', unitDisplay: 'long' }, t), {
                  unit: r.slice(0, -1),
                }),
              )
              .format(s);
      })
      .filter(r => r);
    return this.loc
      .listFormatter(
        U({ type: 'conjunction', style: t.listStyle || 'narrow' }, t),
      )
      .format(n);
  }
  toObject() {
    return this.isValid ? U({}, this.values) : {};
  }
  toISO() {
    if (!this.isValid) return null;
    let t = 'P';
    return (
      this.years !== 0 && (t += this.years + 'Y'),
      (this.months !== 0 || this.quarters !== 0) &&
        (t += this.months + this.quarters * 3 + 'M'),
      this.weeks !== 0 && (t += this.weeks + 'W'),
      this.days !== 0 && (t += this.days + 'D'),
      (this.hours !== 0 ||
        this.minutes !== 0 ||
        this.seconds !== 0 ||
        this.milliseconds !== 0) &&
        (t += 'T'),
      this.hours !== 0 && (t += this.hours + 'H'),
      this.minutes !== 0 && (t += this.minutes + 'M'),
      (this.seconds !== 0 || this.milliseconds !== 0) &&
        (t += lo(this.seconds + this.milliseconds / 1e3, 3) + 'S'),
      t === 'P' && (t += 'T0S'),
      t
    );
  }
  toISOTime(t = {}) {
    if (!this.isValid) return null;
    const n = this.toMillis();
    if (n < 0 || n >= 864e5) return null;
    t = U(
      {
        suppressMilliseconds: !1,
        suppressSeconds: !1,
        includePrefix: !1,
        format: 'extended',
      },
      t,
    );
    const r = this.shiftTo('hours', 'minutes', 'seconds', 'milliseconds');
    let s = t.format === 'basic' ? 'hhmm' : 'hh:mm';
    (!t.suppressSeconds || r.seconds !== 0 || r.milliseconds !== 0) &&
      ((s += t.format === 'basic' ? 'ss' : ':ss'),
      (!t.suppressMilliseconds || r.milliseconds !== 0) && (s += '.SSS'));
    let i = r.toFormat(s);
    return t.includePrefix && (i = 'T' + i), i;
  }
  toJSON() {
    return this.toISO();
  }
  toString() {
    return this.toISO();
  }
  toMillis() {
    return this.as('milliseconds');
  }
  valueOf() {
    return this.toMillis();
  }
  plus(t) {
    if (!this.isValid) return this;
    const n = ee.fromDurationLike(t),
      r = {};
    for (const s of wn)
      (Kn(n.values, s) || Kn(this.values, s)) &&
        (r[s] = n.get(s) + this.get(s));
    return bn(this, { values: r }, !0);
  }
  minus(t) {
    if (!this.isValid) return this;
    const n = ee.fromDurationLike(t);
    return this.plus(n.negate());
  }
  mapUnits(t) {
    if (!this.isValid) return this;
    const n = {};
    for (const r of Object.keys(this.values)) n[r] = Pu(t(this.values[r], r));
    return bn(this, { values: n }, !0);
  }
  get(t) {
    return this[ee.normalizeUnit(t)];
  }
  set(t) {
    if (!this.isValid) return this;
    const n = U(U({}, this.values), _s(t, ee.normalizeUnit));
    return bn(this, { values: n });
  }
  reconfigure({ locale: t, numberingSystem: n, conversionAccuracy: r } = {}) {
    const s = this.loc.clone({ locale: t, numberingSystem: n }),
      i = { loc: s };
    return r && (i.conversionAccuracy = r), bn(this, i);
  }
  as(t) {
    return this.isValid ? this.shiftTo(t).get(t) : NaN;
  }
  normalize() {
    if (!this.isValid) return this;
    const t = this.toObject();
    return Lv(this.matrix, t), bn(this, { values: t }, !0);
  }
  shiftTo(...t) {
    if (!this.isValid) return this;
    if (t.length === 0) return this;
    t = t.map(o => ee.normalizeUnit(o));
    const n = {},
      r = {},
      s = this.toObject();
    let i;
    for (const o of wn)
      if (t.indexOf(o) >= 0) {
        i = o;
        let a = 0;
        for (const u in r) (a += this.matrix[u][o] * r[u]), (r[u] = 0);
        pn(s[o]) && (a += s[o]);
        const l = Math.trunc(a);
        (n[o] = l), (r[o] = (a * 1e3 - l * 1e3) / 1e3);
        for (const u in s)
          wn.indexOf(u) > wn.indexOf(o) && ec(this.matrix, s, u, n, o);
      } else pn(s[o]) && (r[o] = s[o]);
    for (const o in r)
      r[o] !== 0 && (n[i] += o === i ? r[o] : r[o] / this.matrix[i][o]);
    return bn(this, { values: n }, !0).normalize();
  }
  negate() {
    if (!this.isValid) return this;
    const t = {};
    for (const n of Object.keys(this.values)) t[n] = -this.values[n];
    return bn(this, { values: t }, !0);
  }
  get years() {
    return this.isValid ? this.values.years || 0 : NaN;
  }
  get quarters() {
    return this.isValid ? this.values.quarters || 0 : NaN;
  }
  get months() {
    return this.isValid ? this.values.months || 0 : NaN;
  }
  get weeks() {
    return this.isValid ? this.values.weeks || 0 : NaN;
  }
  get days() {
    return this.isValid ? this.values.days || 0 : NaN;
  }
  get hours() {
    return this.isValid ? this.values.hours || 0 : NaN;
  }
  get minutes() {
    return this.isValid ? this.values.minutes || 0 : NaN;
  }
  get seconds() {
    return this.isValid ? this.values.seconds || 0 : NaN;
  }
  get milliseconds() {
    return this.isValid ? this.values.milliseconds || 0 : NaN;
  }
  get isValid() {
    return this.invalid === null;
  }
  get invalidReason() {
    return this.invalid ? this.invalid.reason : null;
  }
  get invalidExplanation() {
    return this.invalid ? this.invalid.explanation : null;
  }
  equals(t) {
    if (!this.isValid || !t.isValid || !this.loc.equals(t.loc)) return !1;
    function n(r, s) {
      return r === void 0 || r === 0 ? s === void 0 || s === 0 : r === s;
    }
    for (const r of wn) if (!n(this.values[r], t.values[r])) return !1;
    return !0;
  }
}
const Pr = 'Invalid Interval';
function Uv(e, t) {
  return !e || !e.isValid
    ? Te.invalid('missing or invalid start')
    : !t || !t.isValid
    ? Te.invalid('missing or invalid end')
    : t < e
    ? Te.invalid(
        'end before start',
        `The end of an interval must be after its start, but you had start=${e.toISO()} and end=${t.toISO()}`,
      )
    : null;
}
class Te {
  constructor(t) {
    (this.s = t.start),
      (this.e = t.end),
      (this.invalid = t.invalid || null),
      (this.isLuxonInterval = !0);
  }
  static invalid(t, n = null) {
    if (!t) throw new at('need to specify a reason the Interval is invalid');
    const r = t instanceof pt ? t : new pt(t, n);
    if (Ae.throwOnInvalid) throw new dg(r);
    return new Te({ invalid: r });
  }
  static fromDateTimes(t, n) {
    const r = Nr(t),
      s = Nr(n),
      i = Uv(r, s);
    return i == null ? new Te({ start: r, end: s }) : i;
  }
  static after(t, n) {
    const r = ee.fromDurationLike(n),
      s = Nr(t);
    return Te.fromDateTimes(s, s.plus(r));
  }
  static before(t, n) {
    const r = ee.fromDurationLike(n),
      s = Nr(t);
    return Te.fromDateTimes(s.minus(r), s);
  }
  static fromISO(t, n) {
    const [r, s] = (t || '').split('/', 2);
    if (r && s) {
      let i, o;
      try {
        (i = B.fromISO(r, n)), (o = i.isValid);
      } catch {
        o = !1;
      }
      let a, l;
      try {
        (a = B.fromISO(s, n)), (l = a.isValid);
      } catch {
        l = !1;
      }
      if (o && l) return Te.fromDateTimes(i, a);
      if (o) {
        const u = ee.fromISO(s, n);
        if (u.isValid) return Te.after(i, u);
      } else if (l) {
        const u = ee.fromISO(r, n);
        if (u.isValid) return Te.before(a, u);
      }
    }
    return Te.invalid(
      'unparsable',
      `the input "${t}" can't be parsed as ISO 8601`,
    );
  }
  static isInterval(t) {
    return (t && t.isLuxonInterval) || !1;
  }
  get start() {
    return this.isValid ? this.s : null;
  }
  get end() {
    return this.isValid ? this.e : null;
  }
  get isValid() {
    return this.invalidReason === null;
  }
  get invalidReason() {
    return this.invalid ? this.invalid.reason : null;
  }
  get invalidExplanation() {
    return this.invalid ? this.invalid.explanation : null;
  }
  length(t = 'milliseconds') {
    return this.isValid ? this.toDuration(t).get(t) : NaN;
  }
  count(t = 'milliseconds') {
    if (!this.isValid) return NaN;
    const n = this.start.startOf(t),
      r = this.end.startOf(t);
    return Math.floor(r.diff(n, t).get(t)) + 1;
  }
  hasSame(t) {
    return this.isValid
      ? this.isEmpty() || this.e.minus(1).hasSame(this.s, t)
      : !1;
  }
  isEmpty() {
    return this.s.valueOf() === this.e.valueOf();
  }
  isAfter(t) {
    return this.isValid ? this.s > t : !1;
  }
  isBefore(t) {
    return this.isValid ? this.e <= t : !1;
  }
  contains(t) {
    return this.isValid ? this.s <= t && this.e > t : !1;
  }
  set({ start: t, end: n } = {}) {
    return this.isValid ? Te.fromDateTimes(t || this.s, n || this.e) : this;
  }
  splitAt(...t) {
    if (!this.isValid) return [];
    const n = t
        .map(Nr)
        .filter(o => this.contains(o))
        .sort(),
      r = [];
    let { s } = this,
      i = 0;
    for (; s < this.e; ) {
      const o = n[i] || this.e,
        a = +o > +this.e ? this.e : o;
      r.push(Te.fromDateTimes(s, a)), (s = a), (i += 1);
    }
    return r;
  }
  splitBy(t) {
    const n = ee.fromDurationLike(t);
    if (!this.isValid || !n.isValid || n.as('milliseconds') === 0) return [];
    let { s: r } = this,
      s = 1,
      i;
    const o = [];
    for (; r < this.e; ) {
      const a = this.start.plus(n.mapUnits(l => l * s));
      (i = +a > +this.e ? this.e : a),
        o.push(Te.fromDateTimes(r, i)),
        (r = i),
        (s += 1);
    }
    return o;
  }
  divideEqually(t) {
    return this.isValid ? this.splitBy(this.length() / t).slice(0, t) : [];
  }
  overlaps(t) {
    return this.e > t.s && this.s < t.e;
  }
  abutsStart(t) {
    return this.isValid ? +this.e == +t.s : !1;
  }
  abutsEnd(t) {
    return this.isValid ? +t.e == +this.s : !1;
  }
  engulfs(t) {
    return this.isValid ? this.s <= t.s && this.e >= t.e : !1;
  }
  equals(t) {
    return !this.isValid || !t.isValid
      ? !1
      : this.s.equals(t.s) && this.e.equals(t.e);
  }
  intersection(t) {
    if (!this.isValid) return this;
    const n = this.s > t.s ? this.s : t.s,
      r = this.e < t.e ? this.e : t.e;
    return n >= r ? null : Te.fromDateTimes(n, r);
  }
  union(t) {
    if (!this.isValid) return this;
    const n = this.s < t.s ? this.s : t.s,
      r = this.e > t.e ? this.e : t.e;
    return Te.fromDateTimes(n, r);
  }
  static merge(t) {
    const [n, r] = t
      .sort((s, i) => s.s - i.s)
      .reduce(
        ([s, i], o) =>
          i
            ? i.overlaps(o) || i.abutsStart(o)
              ? [s, i.union(o)]
              : [s.concat([i]), o]
            : [s, o],
        [[], null],
      );
    return r && n.push(r), n;
  }
  static xor(t) {
    let n = null,
      r = 0;
    const s = [],
      i = t.map(l => [
        { time: l.s, type: 's' },
        { time: l.e, type: 'e' },
      ]),
      o = Array.prototype.concat(...i),
      a = o.sort((l, u) => l.time - u.time);
    for (const l of a)
      (r += l.type === 's' ? 1 : -1),
        r === 1
          ? (n = l.time)
          : (n && +n != +l.time && s.push(Te.fromDateTimes(n, l.time)),
            (n = null));
    return Te.merge(s);
  }
  difference(...t) {
    return Te.xor([this].concat(t))
      .map(n => this.intersection(n))
      .filter(n => n && !n.isEmpty());
  }
  toString() {
    return this.isValid ? `[${this.s.toISO()} \u2013 ${this.e.toISO()})` : Pr;
  }
  toISO(t) {
    return this.isValid ? `${this.s.toISO(t)}/${this.e.toISO(t)}` : Pr;
  }
  toISODate() {
    return this.isValid ? `${this.s.toISODate()}/${this.e.toISODate()}` : Pr;
  }
  toISOTime(t) {
    return this.isValid ? `${this.s.toISOTime(t)}/${this.e.toISOTime(t)}` : Pr;
  }
  toFormat(t, { separator: n = ' \u2013 ' } = {}) {
    return this.isValid ? `${this.s.toFormat(t)}${n}${this.e.toFormat(t)}` : Pr;
  }
  toDuration(t, n) {
    return this.isValid
      ? this.e.diff(this.s, t, n)
      : ee.invalid(this.invalidReason);
  }
  mapEndpoints(t) {
    return Te.fromDateTimes(t(this.s), t(this.e));
  }
}
class ks {
  static hasDST(t = Ae.defaultZone) {
    const n = B.now().setZone(t).set({ month: 12 });
    return !t.isUniversal && n.offset !== n.set({ month: 6 }).offset;
  }
  static isValidIANAZone(t) {
    return gt.isValidSpecifier(t) && gt.isValidZone(t);
  }
  static normalizeZone(t) {
    return zt(t, Ae.defaultZone);
  }
  static months(
    t = 'long',
    {
      locale: n = null,
      numberingSystem: r = null,
      locObj: s = null,
      outputCalendar: i = 'gregory',
    } = {},
  ) {
    return (s || we.create(n, r, i)).months(t);
  }
  static monthsFormat(
    t = 'long',
    {
      locale: n = null,
      numberingSystem: r = null,
      locObj: s = null,
      outputCalendar: i = 'gregory',
    } = {},
  ) {
    return (s || we.create(n, r, i)).months(t, !0);
  }
  static weekdays(
    t = 'long',
    { locale: n = null, numberingSystem: r = null, locObj: s = null } = {},
  ) {
    return (s || we.create(n, r, null)).weekdays(t);
  }
  static weekdaysFormat(
    t = 'long',
    { locale: n = null, numberingSystem: r = null, locObj: s = null } = {},
  ) {
    return (s || we.create(n, r, null)).weekdays(t, !0);
  }
  static meridiems({ locale: t = null } = {}) {
    return we.create(t).meridiems();
  }
  static eras(t = 'short', { locale: n = null } = {}) {
    return we.create(n, null, 'gregory').eras(t);
  }
  static features() {
    return { relative: xu() };
  }
}
function tc(e, t) {
  const n = s => s.toUTC(0, { keepLocalTime: !0 }).startOf('day').valueOf(),
    r = n(t) - n(e);
  return Math.floor(ee.fromMillis(r).as('days'));
}
function Hv(e, t, n) {
  const r = [
      ['years', (a, l) => l.year - a.year],
      ['quarters', (a, l) => l.quarter - a.quarter],
      ['months', (a, l) => l.month - a.month + (l.year - a.year) * 12],
      [
        'weeks',
        (a, l) => {
          const u = tc(a, l);
          return (u - (u % 7)) / 7;
        },
      ],
      ['days', tc],
    ],
    s = {};
  let i, o;
  for (const [a, l] of r)
    if (n.indexOf(a) >= 0) {
      i = a;
      let u = l(e, t);
      (o = e.plus({ [a]: u })),
        o > t ? ((e = e.plus({ [a]: u - 1 })), (u -= 1)) : (e = o),
        (s[a] = u);
    }
  return [e, s, o, i];
}
function Vv(e, t, n, r) {
  let [s, i, o, a] = Hv(e, t, n);
  const l = t - s,
    u = n.filter(
      f => ['hours', 'minutes', 'seconds', 'milliseconds'].indexOf(f) >= 0,
    );
  u.length === 0 &&
    (o < t && (o = s.plus({ [a]: 1 })),
    o !== s && (i[a] = (i[a] || 0) + l / (o - s)));
  const c = ee.fromObject(i, r);
  return u.length > 0
    ? ee
        .fromMillis(l, r)
        .shiftTo(...u)
        .plus(c)
    : c;
}
const To = {
    arab: '[\u0660-\u0669]',
    arabext: '[\u06F0-\u06F9]',
    bali: '[\u1B50-\u1B59]',
    beng: '[\u09E6-\u09EF]',
    deva: '[\u0966-\u096F]',
    fullwide: '[\uFF10-\uFF19]',
    gujr: '[\u0AE6-\u0AEF]',
    hanidec:
      '[\u3007|\u4E00|\u4E8C|\u4E09|\u56DB|\u4E94|\u516D|\u4E03|\u516B|\u4E5D]',
    khmr: '[\u17E0-\u17E9]',
    knda: '[\u0CE6-\u0CEF]',
    laoo: '[\u0ED0-\u0ED9]',
    limb: '[\u1946-\u194F]',
    mlym: '[\u0D66-\u0D6F]',
    mong: '[\u1810-\u1819]',
    mymr: '[\u1040-\u1049]',
    orya: '[\u0B66-\u0B6F]',
    tamldec: '[\u0BE6-\u0BEF]',
    telu: '[\u0C66-\u0C6F]',
    thai: '[\u0E50-\u0E59]',
    tibt: '[\u0F20-\u0F29]',
    latn: '\\d',
  },
  nc = {
    arab: [1632, 1641],
    arabext: [1776, 1785],
    bali: [6992, 7001],
    beng: [2534, 2543],
    deva: [2406, 2415],
    fullwide: [65296, 65303],
    gujr: [2790, 2799],
    khmr: [6112, 6121],
    knda: [3302, 3311],
    laoo: [3792, 3801],
    limb: [6470, 6479],
    mlym: [3430, 3439],
    mong: [6160, 6169],
    mymr: [4160, 4169],
    orya: [2918, 2927],
    tamldec: [3046, 3055],
    telu: [3174, 3183],
    thai: [3664, 3673],
    tibt: [3872, 3881],
  },
  jv = To.hanidec.replace(/[\[|\]]/g, '').split('');
function Bv(e) {
  let t = parseInt(e, 10);
  if (isNaN(t)) {
    t = '';
    for (let n = 0; n < e.length; n++) {
      const r = e.charCodeAt(n);
      if (e[n].search(To.hanidec) !== -1) t += jv.indexOf(e[n]);
      else
        for (const s in nc) {
          const [i, o] = nc[s];
          r >= i && r <= o && (t += r - i);
        }
    }
    return parseInt(t, 10);
  } else return t;
}
function vt({ numberingSystem: e }, t = '') {
  return new RegExp(`${To[e || 'latn']}${t}`);
}
const qv = 'missing Intl.DateTimeFormat.formatToParts support';
function re(e, t = n => n) {
  return { regex: e, deser: ([n]) => t(Bv(n)) };
}
const Wv = String.fromCharCode(160),
  rc = `( |${Wv})`,
  sc = new RegExp(rc, 'g');
function zv(e) {
  return e.replace(/\./g, '\\.?').replace(sc, rc);
}
function ic(e) {
  return e.replace(/\./g, '').replace(sc, ' ').toLowerCase();
}
function yt(e, t) {
  return e === null
    ? null
    : {
        regex: RegExp(e.map(zv).join('|')),
        deser: ([n]) => e.findIndex(r => ic(n) === ic(r)) + t,
      };
}
function oc(e, t) {
  return { regex: e, deser: ([, n, r]) => xs(n, r), groups: t };
}
function Oo(e) {
  return { regex: e, deser: ([t]) => t };
}
function Zv(e) {
  return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, '\\$&');
}
function Yv(e, t) {
  const n = vt(t),
    r = vt(t, '{2}'),
    s = vt(t, '{3}'),
    i = vt(t, '{4}'),
    o = vt(t, '{6}'),
    a = vt(t, '{1,2}'),
    l = vt(t, '{1,3}'),
    u = vt(t, '{1,6}'),
    c = vt(t, '{1,9}'),
    f = vt(t, '{2,4}'),
    h = vt(t, '{4,6}'),
    p = T => ({ regex: RegExp(Zv(T.val)), deser: ([E]) => E, literal: !0 }),
    N = (T => {
      if (e.literal) return p(T);
      switch (T.val) {
        case 'G':
          return yt(t.eras('short', !1), 0);
        case 'GG':
          return yt(t.eras('long', !1), 0);
        case 'y':
          return re(u);
        case 'yy':
          return re(f, co);
        case 'yyyy':
          return re(i);
        case 'yyyyy':
          return re(h);
        case 'yyyyyy':
          return re(o);
        case 'M':
          return re(a);
        case 'MM':
          return re(r);
        case 'MMM':
          return yt(t.months('short', !0, !1), 1);
        case 'MMMM':
          return yt(t.months('long', !0, !1), 1);
        case 'L':
          return re(a);
        case 'LL':
          return re(r);
        case 'LLL':
          return yt(t.months('short', !1, !1), 1);
        case 'LLLL':
          return yt(t.months('long', !1, !1), 1);
        case 'd':
          return re(a);
        case 'dd':
          return re(r);
        case 'o':
          return re(l);
        case 'ooo':
          return re(s);
        case 'HH':
          return re(r);
        case 'H':
          return re(a);
        case 'hh':
          return re(r);
        case 'h':
          return re(a);
        case 'mm':
          return re(r);
        case 'm':
          return re(a);
        case 'q':
          return re(a);
        case 'qq':
          return re(r);
        case 's':
          return re(a);
        case 'ss':
          return re(r);
        case 'S':
          return re(l);
        case 'SSS':
          return re(s);
        case 'u':
          return Oo(c);
        case 'uu':
          return Oo(a);
        case 'uuu':
          return re(n);
        case 'a':
          return yt(t.meridiems(), 0);
        case 'kkkk':
          return re(i);
        case 'kk':
          return re(f, co);
        case 'W':
          return re(a);
        case 'WW':
          return re(r);
        case 'E':
        case 'c':
          return re(n);
        case 'EEE':
          return yt(t.weekdays('short', !1, !1), 1);
        case 'EEEE':
          return yt(t.weekdays('long', !1, !1), 1);
        case 'ccc':
          return yt(t.weekdays('short', !0, !1), 1);
        case 'cccc':
          return yt(t.weekdays('long', !0, !1), 1);
        case 'Z':
        case 'ZZ':
          return oc(new RegExp(`([+-]${a.source})(?::(${r.source}))?`), 2);
        case 'ZZZ':
          return oc(new RegExp(`([+-]${a.source})(${r.source})?`), 2);
        case 'z':
          return Oo(/[a-z_+-/]{1,256}?/i);
        default:
          return p(T);
      }
    })(e) || { invalidReason: qv };
  return (N.token = e), N;
}
const Jv = {
  year: { '2-digit': 'yy', numeric: 'yyyyy' },
  month: { numeric: 'M', '2-digit': 'MM', short: 'MMM', long: 'MMMM' },
  day: { numeric: 'd', '2-digit': 'dd' },
  weekday: { short: 'EEE', long: 'EEEE' },
  dayperiod: 'a',
  dayPeriod: 'a',
  hour: { numeric: 'h', '2-digit': 'hh' },
  minute: { numeric: 'm', '2-digit': 'mm' },
  second: { numeric: 's', '2-digit': 'ss' },
};
function Kv(e, t, n) {
  const { type: r, value: s } = e;
  if (r === 'literal') return { literal: !0, val: s };
  const i = n[r];
  let o = Jv[r];
  if ((typeof o == 'object' && (o = o[i]), o)) return { literal: !1, val: o };
}
function Gv(e) {
  return [
    `^${e.map(n => n.regex).reduce((n, r) => `${n}(${r.source})`, '')}$`,
    e,
  ];
}
function Qv(e, t, n) {
  const r = e.match(t);
  if (r) {
    const s = {};
    let i = 1;
    for (const o in n)
      if (Kn(n, o)) {
        const a = n[o],
          l = a.groups ? a.groups + 1 : 1;
        !a.literal &&
          a.token &&
          (s[a.token.val[0]] = a.deser(r.slice(i, i + l))),
          (i += l);
      }
    return [r, s];
  } else return [r, {}];
}
function Xv(e) {
  const t = i => {
    switch (i) {
      case 'S':
        return 'millisecond';
      case 's':
        return 'second';
      case 'm':
        return 'minute';
      case 'h':
      case 'H':
        return 'hour';
      case 'd':
        return 'day';
      case 'o':
        return 'ordinal';
      case 'L':
      case 'M':
        return 'month';
      case 'y':
        return 'year';
      case 'E':
      case 'c':
        return 'weekday';
      case 'W':
        return 'weekNumber';
      case 'k':
        return 'weekYear';
      case 'q':
        return 'quarter';
      default:
        return null;
    }
  };
  let n = null,
    r;
  return (
    J(e.z) || (n = gt.create(e.z)),
    J(e.Z) || (n || (n = new Be(e.Z)), (r = e.Z)),
    J(e.q) || (e.M = (e.q - 1) * 3 + 1),
    J(e.h) ||
      (e.h < 12 && e.a === 1
        ? (e.h += 12)
        : e.h === 12 && e.a === 0 && (e.h = 0)),
    e.G === 0 && e.y && (e.y = -e.y),
    J(e.u) || (e.S = ao(e.u)),
    [
      Object.keys(e).reduce((i, o) => {
        const a = t(o);
        return a && (i[a] = e[o]), i;
      }, {}),
      n,
      r,
    ]
  );
}
let So = null;
function ey() {
  return So || (So = B.fromMillis(1555555555555)), So;
}
function ty(e, t) {
  if (e.literal) return e;
  const n = Ze.macroTokenToFormatOpts(e.val);
  if (!n) return e;
  const i = Ze.create(t, n)
    .formatDateTimeParts(ey())
    .map(o => Kv(o, t, n));
  return i.includes(void 0) ? e : i;
}
function ny(e, t) {
  return Array.prototype.concat(...e.map(n => ty(n, t)));
}
function ac(e, t, n) {
  const r = ny(Ze.parseFormat(n), e),
    s = r.map(o => Yv(o, e)),
    i = s.find(o => o.invalidReason);
  if (i) return { input: t, tokens: r, invalidReason: i.invalidReason };
  {
    const [o, a] = Gv(s),
      l = RegExp(o, 'i'),
      [u, c] = Qv(t, l, a),
      [f, h, p] = c ? Xv(c) : [null, null, void 0];
    if (Kn(c, 'a') && Kn(c, 'H'))
      throw new Or("Can't include meridiem when specifying 24-hour format");
    return {
      input: t,
      tokens: r,
      regex: l,
      rawMatches: u,
      matches: c,
      result: f,
      zone: h,
      specificOffset: p,
    };
  }
}
function ry(e, t, n) {
  const {
    result: r,
    zone: s,
    specificOffset: i,
    invalidReason: o,
  } = ac(e, t, n);
  return [r, s, i, o];
}
const lc = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
  uc = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];
function ut(e, t) {
  return new pt(
    'unit out of range',
    `you specified ${t} (of type ${typeof t}) as a ${e}, which is invalid`,
  );
}
function cc(e, t, n) {
  const r = new Date(Date.UTC(e, t - 1, n)).getUTCDay();
  return r === 0 ? 7 : r;
}
function fc(e, t, n) {
  return n + (Sr(e) ? uc : lc)[t - 1];
}
function dc(e, t) {
  const n = Sr(e) ? uc : lc,
    r = n.findIndex(i => i < t),
    s = t - n[r];
  return { month: r + 1, day: s };
}
function xo(e) {
  const { year: t, month: n, day: r } = e,
    s = fc(t, n, r),
    i = cc(t, n, r);
  let o = Math.floor((s - i + 10) / 7),
    a;
  return (
    o < 1
      ? ((a = t - 1), (o = Ss(a)))
      : o > Ss(t)
      ? ((a = t + 1), (o = 1))
      : (a = t),
    U({ weekYear: a, weekNumber: o, weekday: i }, Ps(e))
  );
}
function hc(e) {
  const { weekYear: t, weekNumber: n, weekday: r } = e,
    s = cc(t, 1, 4),
    i = xr(t);
  let o = n * 7 + r - s - 3,
    a;
  o < 1
    ? ((a = t - 1), (o += xr(a)))
    : o > i
    ? ((a = t + 1), (o -= xr(t)))
    : (a = t);
  const { month: l, day: u } = dc(a, o);
  return U({ year: a, month: l, day: u }, Ps(e));
}
function _o(e) {
  const { year: t, month: n, day: r } = e,
    s = fc(t, n, r);
  return U({ year: t, ordinal: s }, Ps(e));
}
function mc(e) {
  const { year: t, ordinal: n } = e,
    { month: r, day: s } = dc(t, n);
  return U({ year: t, month: r, day: s }, Ps(e));
}
function sy(e) {
  const t = Ts(e.weekYear),
    n = Mt(e.weekNumber, 1, Ss(e.weekYear)),
    r = Mt(e.weekday, 1, 7);
  return t
    ? n
      ? r
        ? !1
        : ut('weekday', e.weekday)
      : ut('week', e.week)
    : ut('weekYear', e.weekYear);
}
function iy(e) {
  const t = Ts(e.year),
    n = Mt(e.ordinal, 1, xr(e.year));
  return t ? (n ? !1 : ut('ordinal', e.ordinal)) : ut('year', e.year);
}
function pc(e) {
  const t = Ts(e.year),
    n = Mt(e.month, 1, 12),
    r = Mt(e.day, 1, Os(e.year, e.month));
  return t
    ? n
      ? r
        ? !1
        : ut('day', e.day)
      : ut('month', e.month)
    : ut('year', e.year);
}
function gc(e) {
  const { hour: t, minute: n, second: r, millisecond: s } = e,
    i = Mt(t, 0, 23) || (t === 24 && n === 0 && r === 0 && s === 0),
    o = Mt(n, 0, 59),
    a = Mt(r, 0, 59),
    l = Mt(s, 0, 999);
  return i
    ? o
      ? a
        ? l
          ? !1
          : ut('millisecond', s)
        : ut('second', r)
      : ut('minute', n)
    : ut('hour', t);
}
const Co = 'Invalid DateTime',
  vc = 864e13;
function Ms(e) {
  return new pt('unsupported zone', `the zone "${e.name}" is not supported`);
}
function Po(e) {
  return e.weekData === null && (e.weekData = xo(e.c)), e.weekData;
}
function Ar(e, t) {
  const n = {
    ts: e.ts,
    zone: e.zone,
    c: e.c,
    o: e.o,
    loc: e.loc,
    invalid: e.invalid,
  };
  return new B(Et(U(U({}, n), t), { old: n }));
}
function yc(e, t, n) {
  let r = e - t * 60 * 1e3;
  const s = n.offset(r);
  if (t === s) return [r, t];
  r -= (s - t) * 60 * 1e3;
  const i = n.offset(r);
  return s === i ? [r, s] : [e - Math.min(s, i) * 60 * 1e3, Math.max(s, i)];
}
function wc(e, t) {
  e += t * 60 * 1e3;
  const n = new Date(e);
  return {
    year: n.getUTCFullYear(),
    month: n.getUTCMonth() + 1,
    day: n.getUTCDate(),
    hour: n.getUTCHours(),
    minute: n.getUTCMinutes(),
    second: n.getUTCSeconds(),
    millisecond: n.getUTCMilliseconds(),
  };
}
function Rs(e, t, n) {
  return yc(uo(e), t, n);
}
function bc(e, t) {
  const n = e.o,
    r = e.c.year + Math.trunc(t.years),
    s = e.c.month + Math.trunc(t.months) + Math.trunc(t.quarters) * 3,
    i = Et(U({}, e.c), {
      year: r,
      month: s,
      day:
        Math.min(e.c.day, Os(r, s)) +
        Math.trunc(t.days) +
        Math.trunc(t.weeks) * 7,
    }),
    o = ee
      .fromObject({
        years: t.years - Math.trunc(t.years),
        quarters: t.quarters - Math.trunc(t.quarters),
        months: t.months - Math.trunc(t.months),
        weeks: t.weeks - Math.trunc(t.weeks),
        days: t.days - Math.trunc(t.days),
        hours: t.hours,
        minutes: t.minutes,
        seconds: t.seconds,
        milliseconds: t.milliseconds,
      })
      .as('milliseconds'),
    a = uo(i);
  let [l, u] = yc(a, n, e.zone);
  return o !== 0 && ((l += o), (u = e.zone.offset(l))), { ts: l, o: u };
}
function Ir(e, t, n, r, s, i) {
  const { setZone: o, zone: a } = n;
  if (e && Object.keys(e).length !== 0) {
    const l = t || a,
      u = B.fromObject(e, Et(U({}, n), { zone: l, specificOffset: i }));
    return o ? u : u.setZone(a);
  } else
    return B.invalid(
      new pt('unparsable', `the input "${s}" can't be parsed as ${r}`),
    );
}
function $s(e, t, n = !0) {
  return e.isValid
    ? Ze.create(we.create('en-US'), {
        allowZ: n,
        forceSimple: !0,
      }).formatDateTimeFromString(e, t)
    : null;
}
function Ao(e, t) {
  const n = e.c.year > 9999 || e.c.year < 0;
  let r = '';
  return (
    n && e.c.year >= 0 && (r += '+'),
    (r += _e(e.c.year, n ? 6 : 4)),
    t
      ? ((r += '-'), (r += _e(e.c.month)), (r += '-'), (r += _e(e.c.day)))
      : ((r += _e(e.c.month)), (r += _e(e.c.day))),
    r
  );
}
function Ec(e, t, n, r, s) {
  let i = _e(e.c.hour);
  return (
    t
      ? ((i += ':'),
        (i += _e(e.c.minute)),
        (e.c.second !== 0 || !n) && (i += ':'))
      : (i += _e(e.c.minute)),
    (e.c.second !== 0 || !n) &&
      ((i += _e(e.c.second)),
      (e.c.millisecond !== 0 || !r) &&
        ((i += '.'), (i += _e(e.c.millisecond, 3)))),
    s &&
      (e.isOffsetFixed && e.offset === 0
        ? (i += 'Z')
        : e.o < 0
        ? ((i += '-'),
          (i += _e(Math.trunc(-e.o / 60))),
          (i += ':'),
          (i += _e(Math.trunc(-e.o % 60))))
        : ((i += '+'),
          (i += _e(Math.trunc(e.o / 60))),
          (i += ':'),
          (i += _e(Math.trunc(e.o % 60))))),
    i
  );
}
const Tc = { month: 1, day: 1, hour: 0, minute: 0, second: 0, millisecond: 0 },
  oy = {
    weekNumber: 1,
    weekday: 1,
    hour: 0,
    minute: 0,
    second: 0,
    millisecond: 0,
  },
  ay = { ordinal: 1, hour: 0, minute: 0, second: 0, millisecond: 0 },
  Oc = ['year', 'month', 'day', 'hour', 'minute', 'second', 'millisecond'],
  ly = [
    'weekYear',
    'weekNumber',
    'weekday',
    'hour',
    'minute',
    'second',
    'millisecond',
  ],
  uy = ['year', 'ordinal', 'hour', 'minute', 'second', 'millisecond'];
function Sc(e) {
  const t = {
    year: 'year',
    years: 'year',
    month: 'month',
    months: 'month',
    day: 'day',
    days: 'day',
    hour: 'hour',
    hours: 'hour',
    minute: 'minute',
    minutes: 'minute',
    quarter: 'quarter',
    quarters: 'quarter',
    second: 'second',
    seconds: 'second',
    millisecond: 'millisecond',
    milliseconds: 'millisecond',
    weekday: 'weekday',
    weekdays: 'weekday',
    weeknumber: 'weekNumber',
    weeksnumber: 'weekNumber',
    weeknumbers: 'weekNumber',
    weekyear: 'weekYear',
    weekyears: 'weekYear',
    ordinal: 'ordinal',
  }[e.toLowerCase()];
  if (!t) throw new iu(e);
  return t;
}
function xc(e, t) {
  const n = zt(t.zone, Ae.defaultZone),
    r = we.fromObject(t),
    s = Ae.now();
  let i, o;
  if (J(e.year)) i = s;
  else {
    for (const u of Oc) J(e[u]) && (e[u] = Tc[u]);
    const a = pc(e) || gc(e);
    if (a) return B.invalid(a);
    const l = n.offset(s);
    [i, o] = Rs(e, l, n);
  }
  return new B({ ts: i, zone: n, loc: r, o });
}
function _c(e, t, n) {
  const r = J(n.round) ? !0 : n.round,
    s = (o, a) => (
      (o = lo(o, r || n.calendary ? 0 : 2, !0)),
      t.loc.clone(n).relFormatter(n).format(o, a)
    ),
    i = o =>
      n.calendary
        ? t.hasSame(e, o)
          ? 0
          : t.startOf(o).diff(e.startOf(o), o).get(o)
        : t.diff(e, o).get(o);
  if (n.unit) return s(i(n.unit), n.unit);
  for (const o of n.units) {
    const a = i(o);
    if (Math.abs(a) >= 1) return s(a, o);
  }
  return s(e > t ? -0 : 0, n.units[n.units.length - 1]);
}
function Cc(e) {
  let t = {},
    n;
  return (
    e.length > 0 && typeof e[e.length - 1] == 'object'
      ? ((t = e[e.length - 1]), (n = Array.from(e).slice(0, e.length - 1)))
      : (n = Array.from(e)),
    [t, n]
  );
}
class B {
  constructor(t) {
    const n = t.zone || Ae.defaultZone;
    let r =
      t.invalid ||
      (Number.isNaN(t.ts) ? new pt('invalid input') : null) ||
      (n.isValid ? null : Ms(n));
    this.ts = J(t.ts) ? Ae.now() : t.ts;
    let s = null,
      i = null;
    if (!r)
      if (t.old && t.old.ts === this.ts && t.old.zone.equals(n))
        [s, i] = [t.old.c, t.old.o];
      else {
        const a = n.offset(this.ts);
        (s = wc(this.ts, a)),
          (r = Number.isNaN(s.year) ? new pt('invalid input') : null),
          (s = r ? null : s),
          (i = r ? null : a);
      }
    (this._zone = n),
      (this.loc = t.loc || we.create()),
      (this.invalid = r),
      (this.weekData = null),
      (this.c = s),
      (this.o = i),
      (this.isLuxonDateTime = !0);
  }
  static now() {
    return new B({});
  }
  static local() {
    const [t, n] = Cc(arguments),
      [r, s, i, o, a, l, u] = n;
    return xc(
      {
        year: r,
        month: s,
        day: i,
        hour: o,
        minute: a,
        second: l,
        millisecond: u,
      },
      t,
    );
  }
  static utc() {
    const [t, n] = Cc(arguments),
      [r, s, i, o, a, l, u] = n;
    return (
      (t.zone = Be.utcInstance),
      xc(
        {
          year: r,
          month: s,
          day: i,
          hour: o,
          minute: a,
          second: l,
          millisecond: u,
        },
        t,
      )
    );
  }
  static fromJSDate(t, n = {}) {
    const r = vg(t) ? t.valueOf() : NaN;
    if (Number.isNaN(r)) return B.invalid('invalid input');
    const s = zt(n.zone, Ae.defaultZone);
    return s.isValid
      ? new B({ ts: r, zone: s, loc: we.fromObject(n) })
      : B.invalid(Ms(s));
  }
  static fromMillis(t, n = {}) {
    if (pn(t))
      return t < -vc || t > vc
        ? B.invalid('Timestamp out of range')
        : new B({
            ts: t,
            zone: zt(n.zone, Ae.defaultZone),
            loc: we.fromObject(n),
          });
    throw new at(
      `fromMillis requires a numerical input, but received a ${typeof t} with value ${t}`,
    );
  }
  static fromSeconds(t, n = {}) {
    if (pn(t))
      return new B({
        ts: t * 1e3,
        zone: zt(n.zone, Ae.defaultZone),
        loc: we.fromObject(n),
      });
    throw new at('fromSeconds requires a numerical input');
  }
  static fromObject(t, n = {}) {
    t = t || {};
    const r = zt(n.zone, Ae.defaultZone);
    if (!r.isValid) return B.invalid(Ms(r));
    const s = Ae.now(),
      i = J(n.specificOffset) ? r.offset(s) : n.specificOffset,
      o = _s(t, Sc),
      a = !J(o.ordinal),
      l = !J(o.year),
      u = !J(o.month) || !J(o.day),
      c = l || u,
      f = o.weekYear || o.weekNumber,
      h = we.fromObject(n);
    if ((c || a) && f)
      throw new Or(
        "Can't mix weekYear/weekNumber units with year/month/day or ordinals",
      );
    if (u && a) throw new Or("Can't mix ordinal dates with month/day");
    const p = f || (o.weekday && !c);
    let v,
      N,
      T = wc(s, i);
    p
      ? ((v = ly), (N = oy), (T = xo(T)))
      : a
      ? ((v = uy), (N = ay), (T = _o(T)))
      : ((v = Oc), (N = Tc));
    let E = !1;
    for (const be of v) {
      const Y = o[be];
      J(Y) ? (E ? (o[be] = N[be]) : (o[be] = T[be])) : (E = !0);
    }
    const A = p ? sy(o) : a ? iy(o) : pc(o),
      C = A || gc(o);
    if (C) return B.invalid(C);
    const $ = p ? hc(o) : a ? mc(o) : o,
      [K, te] = Rs($, i, r),
      ie = new B({ ts: K, zone: r, o: te, loc: h });
    return o.weekday && c && t.weekday !== ie.weekday
      ? B.invalid(
          'mismatched weekday',
          `you can't specify both a weekday of ${
            o.weekday
          } and a date of ${ie.toISO()}`,
        )
      : ie;
  }
  static fromISO(t, n = {}) {
    const [r, s] = Tv(t);
    return Ir(r, s, n, 'ISO 8601', t);
  }
  static fromRFC2822(t, n = {}) {
    const [r, s] = Ov(t);
    return Ir(r, s, n, 'RFC 2822', t);
  }
  static fromHTTP(t, n = {}) {
    const [r, s] = Sv(t);
    return Ir(r, s, n, 'HTTP', n);
  }
  static fromFormat(t, n, r = {}) {
    if (J(t) || J(n))
      throw new at('fromFormat requires an input string and a format');
    const { locale: s = null, numberingSystem: i = null } = r,
      o = we.fromOpts({ locale: s, numberingSystem: i, defaultToEN: !0 }),
      [a, l, u, c] = ry(o, t, n);
    return c ? B.invalid(c) : Ir(a, l, r, `format ${n}`, t, u);
  }
  static fromString(t, n, r = {}) {
    return B.fromFormat(t, n, r);
  }
  static fromSQL(t, n = {}) {
    const [r, s] = kv(t);
    return Ir(r, s, n, 'SQL', t);
  }
  static invalid(t, n = null) {
    if (!t) throw new at('need to specify a reason the DateTime is invalid');
    const r = t instanceof pt ? t : new pt(t, n);
    if (Ae.throwOnInvalid) throw new fg(r);
    return new B({ invalid: r });
  }
  static isDateTime(t) {
    return (t && t.isLuxonDateTime) || !1;
  }
  get(t) {
    return this[t];
  }
  get isValid() {
    return this.invalid === null;
  }
  get invalidReason() {
    return this.invalid ? this.invalid.reason : null;
  }
  get invalidExplanation() {
    return this.invalid ? this.invalid.explanation : null;
  }
  get locale() {
    return this.isValid ? this.loc.locale : null;
  }
  get numberingSystem() {
    return this.isValid ? this.loc.numberingSystem : null;
  }
  get outputCalendar() {
    return this.isValid ? this.loc.outputCalendar : null;
  }
  get zone() {
    return this._zone;
  }
  get zoneName() {
    return this.isValid ? this.zone.name : null;
  }
  get year() {
    return this.isValid ? this.c.year : NaN;
  }
  get quarter() {
    return this.isValid ? Math.ceil(this.c.month / 3) : NaN;
  }
  get month() {
    return this.isValid ? this.c.month : NaN;
  }
  get day() {
    return this.isValid ? this.c.day : NaN;
  }
  get hour() {
    return this.isValid ? this.c.hour : NaN;
  }
  get minute() {
    return this.isValid ? this.c.minute : NaN;
  }
  get second() {
    return this.isValid ? this.c.second : NaN;
  }
  get millisecond() {
    return this.isValid ? this.c.millisecond : NaN;
  }
  get weekYear() {
    return this.isValid ? Po(this).weekYear : NaN;
  }
  get weekNumber() {
    return this.isValid ? Po(this).weekNumber : NaN;
  }
  get weekday() {
    return this.isValid ? Po(this).weekday : NaN;
  }
  get ordinal() {
    return this.isValid ? _o(this.c).ordinal : NaN;
  }
  get monthShort() {
    return this.isValid
      ? ks.months('short', { locObj: this.loc })[this.month - 1]
      : null;
  }
  get monthLong() {
    return this.isValid
      ? ks.months('long', { locObj: this.loc })[this.month - 1]
      : null;
  }
  get weekdayShort() {
    return this.isValid
      ? ks.weekdays('short', { locObj: this.loc })[this.weekday - 1]
      : null;
  }
  get weekdayLong() {
    return this.isValid
      ? ks.weekdays('long', { locObj: this.loc })[this.weekday - 1]
      : null;
  }
  get offset() {
    return this.isValid ? +this.o : NaN;
  }
  get offsetNameShort() {
    return this.isValid
      ? this.zone.offsetName(this.ts, { format: 'short', locale: this.locale })
      : null;
  }
  get offsetNameLong() {
    return this.isValid
      ? this.zone.offsetName(this.ts, { format: 'long', locale: this.locale })
      : null;
  }
  get isOffsetFixed() {
    return this.isValid ? this.zone.isUniversal : null;
  }
  get isInDST() {
    return this.isOffsetFixed
      ? !1
      : this.offset > this.set({ month: 1 }).offset ||
          this.offset > this.set({ month: 5 }).offset;
  }
  get isInLeapYear() {
    return Sr(this.year);
  }
  get daysInMonth() {
    return Os(this.year, this.month);
  }
  get daysInYear() {
    return this.isValid ? xr(this.year) : NaN;
  }
  get weeksInWeekYear() {
    return this.isValid ? Ss(this.weekYear) : NaN;
  }
  resolvedLocaleOptions(t = {}) {
    const {
      locale: n,
      numberingSystem: r,
      calendar: s,
    } = Ze.create(this.loc.clone(t), t).resolvedOptions(this);
    return { locale: n, numberingSystem: r, outputCalendar: s };
  }
  toUTC(t = 0, n = {}) {
    return this.setZone(Be.instance(t), n);
  }
  toLocal() {
    return this.setZone(Ae.defaultZone);
  }
  setZone(t, { keepLocalTime: n = !1, keepCalendarTime: r = !1 } = {}) {
    if (((t = zt(t, Ae.defaultZone)), t.equals(this.zone))) return this;
    if (t.isValid) {
      let s = this.ts;
      if (n || r) {
        const i = t.offset(this.ts),
          o = this.toObject();
        [s] = Rs(o, i, t);
      }
      return Ar(this, { ts: s, zone: t });
    } else return B.invalid(Ms(t));
  }
  reconfigure({ locale: t, numberingSystem: n, outputCalendar: r } = {}) {
    const s = this.loc.clone({
      locale: t,
      numberingSystem: n,
      outputCalendar: r,
    });
    return Ar(this, { loc: s });
  }
  setLocale(t) {
    return this.reconfigure({ locale: t });
  }
  set(t) {
    if (!this.isValid) return this;
    const n = _s(t, Sc),
      r = !J(n.weekYear) || !J(n.weekNumber) || !J(n.weekday),
      s = !J(n.ordinal),
      i = !J(n.year),
      o = !J(n.month) || !J(n.day),
      a = i || o,
      l = n.weekYear || n.weekNumber;
    if ((a || s) && l)
      throw new Or(
        "Can't mix weekYear/weekNumber units with year/month/day or ordinals",
      );
    if (o && s) throw new Or("Can't mix ordinal dates with month/day");
    let u;
    r
      ? (u = hc(U(U({}, xo(this.c)), n)))
      : J(n.ordinal)
      ? ((u = U(U({}, this.toObject()), n)),
        J(n.day) && (u.day = Math.min(Os(u.year, u.month), u.day)))
      : (u = mc(U(U({}, _o(this.c)), n)));
    const [c, f] = Rs(u, this.o, this.zone);
    return Ar(this, { ts: c, o: f });
  }
  plus(t) {
    if (!this.isValid) return this;
    const n = ee.fromDurationLike(t);
    return Ar(this, bc(this, n));
  }
  minus(t) {
    if (!this.isValid) return this;
    const n = ee.fromDurationLike(t).negate();
    return Ar(this, bc(this, n));
  }
  startOf(t) {
    if (!this.isValid) return this;
    const n = {},
      r = ee.normalizeUnit(t);
    switch (r) {
      case 'years':
        n.month = 1;
      case 'quarters':
      case 'months':
        n.day = 1;
      case 'weeks':
      case 'days':
        n.hour = 0;
      case 'hours':
        n.minute = 0;
      case 'minutes':
        n.second = 0;
      case 'seconds':
        n.millisecond = 0;
        break;
    }
    if ((r === 'weeks' && (n.weekday = 1), r === 'quarters')) {
      const s = Math.ceil(this.month / 3);
      n.month = (s - 1) * 3 + 1;
    }
    return this.set(n);
  }
  endOf(t) {
    return this.isValid
      ? this.plus({ [t]: 1 })
          .startOf(t)
          .minus(1)
      : this;
  }
  toFormat(t, n = {}) {
    return this.isValid
      ? Ze.create(this.loc.redefaultToEN(n)).formatDateTimeFromString(this, t)
      : Co;
  }
  toLocaleString(t = oo, n = {}) {
    return this.isValid
      ? Ze.create(this.loc.clone(n), t).formatDateTime(this)
      : Co;
  }
  toLocaleParts(t = {}) {
    return this.isValid
      ? Ze.create(this.loc.clone(t), t).formatDateTimeParts(this)
      : [];
  }
  toISO({
    format: t = 'extended',
    suppressSeconds: n = !1,
    suppressMilliseconds: r = !1,
    includeOffset: s = !0,
  } = {}) {
    if (!this.isValid) return null;
    const i = t === 'extended';
    let o = Ao(this, i);
    return (o += 'T'), (o += Ec(this, i, n, r, s)), o;
  }
  toISODate({ format: t = 'extended' } = {}) {
    return this.isValid ? Ao(this, t === 'extended') : null;
  }
  toISOWeekDate() {
    return $s(this, "kkkk-'W'WW-c");
  }
  toISOTime({
    suppressMilliseconds: t = !1,
    suppressSeconds: n = !1,
    includeOffset: r = !0,
    includePrefix: s = !1,
    format: i = 'extended',
  } = {}) {
    return this.isValid
      ? (s ? 'T' : '') + Ec(this, i === 'extended', n, t, r)
      : null;
  }
  toRFC2822() {
    return $s(this, 'EEE, dd LLL yyyy HH:mm:ss ZZZ', !1);
  }
  toHTTP() {
    return $s(this.toUTC(), "EEE, dd LLL yyyy HH:mm:ss 'GMT'");
  }
  toSQLDate() {
    return this.isValid ? Ao(this, !0) : null;
  }
  toSQLTime({ includeOffset: t = !0, includeZone: n = !1 } = {}) {
    let r = 'HH:mm:ss.SSS';
    return (
      (n || t) && ((r += ' '), n ? (r += 'z') : t && (r += 'ZZ')),
      $s(this, r, !0)
    );
  }
  toSQL(t = {}) {
    return this.isValid ? `${this.toSQLDate()} ${this.toSQLTime(t)}` : null;
  }
  toString() {
    return this.isValid ? this.toISO() : Co;
  }
  valueOf() {
    return this.toMillis();
  }
  toMillis() {
    return this.isValid ? this.ts : NaN;
  }
  toSeconds() {
    return this.isValid ? this.ts / 1e3 : NaN;
  }
  toJSON() {
    return this.toISO();
  }
  toBSON() {
    return this.toJSDate();
  }
  toObject(t = {}) {
    if (!this.isValid) return {};
    const n = U({}, this.c);
    return (
      t.includeConfig &&
        ((n.outputCalendar = this.outputCalendar),
        (n.numberingSystem = this.loc.numberingSystem),
        (n.locale = this.loc.locale)),
      n
    );
  }
  toJSDate() {
    return new Date(this.isValid ? this.ts : NaN);
  }
  diff(t, n = 'milliseconds', r = {}) {
    if (!this.isValid || !t.isValid)
      return ee.invalid('created by diffing an invalid DateTime');
    const s = U(
        { locale: this.locale, numberingSystem: this.numberingSystem },
        r,
      ),
      i = yg(n).map(ee.normalizeUnit),
      o = t.valueOf() > this.valueOf(),
      a = o ? this : t,
      l = o ? t : this,
      u = Vv(a, l, i, s);
    return o ? u.negate() : u;
  }
  diffNow(t = 'milliseconds', n = {}) {
    return this.diff(B.now(), t, n);
  }
  until(t) {
    return this.isValid ? Te.fromDateTimes(this, t) : this;
  }
  hasSame(t, n) {
    if (!this.isValid) return !1;
    const r = t.valueOf(),
      s = this.setZone(t.zone, { keepLocalTime: !0 });
    return s.startOf(n) <= r && r <= s.endOf(n);
  }
  equals(t) {
    return (
      this.isValid &&
      t.isValid &&
      this.valueOf() === t.valueOf() &&
      this.zone.equals(t.zone) &&
      this.loc.equals(t.loc)
    );
  }
  toRelative(t = {}) {
    if (!this.isValid) return null;
    const n = t.base || B.fromObject({}, { zone: this.zone }),
      r = t.padding ? (this < n ? -t.padding : t.padding) : 0;
    let s = ['years', 'months', 'days', 'hours', 'minutes', 'seconds'],
      i = t.unit;
    return (
      Array.isArray(t.unit) && ((s = t.unit), (i = void 0)),
      _c(
        n,
        this.plus(r),
        Et(U({}, t), { numeric: 'always', units: s, unit: i }),
      )
    );
  }
  toRelativeCalendar(t = {}) {
    return this.isValid
      ? _c(
          t.base || B.fromObject({}, { zone: this.zone }),
          this,
          Et(U({}, t), {
            numeric: 'auto',
            units: ['years', 'months', 'days'],
            calendary: !0,
          }),
        )
      : null;
  }
  static min(...t) {
    if (!t.every(B.isDateTime))
      throw new at('min requires all arguments be DateTimes');
    return _u(t, n => n.valueOf(), Math.min);
  }
  static max(...t) {
    if (!t.every(B.isDateTime))
      throw new at('max requires all arguments be DateTimes');
    return _u(t, n => n.valueOf(), Math.max);
  }
  static fromFormatExplain(t, n, r = {}) {
    const { locale: s = null, numberingSystem: i = null } = r,
      o = we.fromOpts({ locale: s, numberingSystem: i, defaultToEN: !0 });
    return ac(o, t, n);
  }
  static fromStringExplain(t, n, r = {}) {
    return B.fromFormatExplain(t, n, r);
  }
  static get DATE_SHORT() {
    return oo;
  }
  static get DATE_MED() {
    return ou;
  }
  static get DATE_MED_WITH_WEEKDAY() {
    return mg;
  }
  static get DATE_FULL() {
    return au;
  }
  static get DATE_HUGE() {
    return lu;
  }
  static get TIME_SIMPLE() {
    return uu;
  }
  static get TIME_WITH_SECONDS() {
    return cu;
  }
  static get TIME_WITH_SHORT_OFFSET() {
    return fu;
  }
  static get TIME_WITH_LONG_OFFSET() {
    return du;
  }
  static get TIME_24_SIMPLE() {
    return hu;
  }
  static get TIME_24_WITH_SECONDS() {
    return mu;
  }
  static get TIME_24_WITH_SHORT_OFFSET() {
    return pu;
  }
  static get TIME_24_WITH_LONG_OFFSET() {
    return gu;
  }
  static get DATETIME_SHORT() {
    return vu;
  }
  static get DATETIME_SHORT_WITH_SECONDS() {
    return yu;
  }
  static get DATETIME_MED() {
    return wu;
  }
  static get DATETIME_MED_WITH_SECONDS() {
    return bu;
  }
  static get DATETIME_MED_WITH_WEEKDAY() {
    return pg;
  }
  static get DATETIME_FULL() {
    return Eu;
  }
  static get DATETIME_FULL_WITH_SECONDS() {
    return Tu;
  }
  static get DATETIME_HUGE() {
    return Ou;
  }
  static get DATETIME_HUGE_WITH_SECONDS() {
    return Su;
  }
}
function Nr(e) {
  if (B.isDateTime(e)) return e;
  if (e && e.valueOf && pn(e.valueOf())) return B.fromJSDate(e);
  if (e && typeof e == 'object') return B.fromObject(e);
  throw new at(`Unknown datetime argument: ${e}, of type ${typeof e}`);
}
var cy = Object.defineProperty,
  fy = Object.defineProperties,
  dy = Object.getOwnPropertyDescriptors,
  Pc = Object.getOwnPropertySymbols,
  hy = Object.prototype.hasOwnProperty,
  my = Object.prototype.propertyIsEnumerable,
  Ac = (e, t, n) =>
    t in e
      ? cy(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  kr = (e, t) => {
    for (var n in t || (t = {})) hy.call(t, n) && Ac(e, n, t[n]);
    if (Pc) for (var n of Pc(t)) my.call(t, n) && Ac(e, n, t[n]);
    return e;
  },
  Io = (e, t) => fy(e, dy(t)),
  Ic = ae({ name: 'SearchIcon' });
const py = {
    xmlns: 'http://www.w3.org/2000/svg',
    class: 'dt-h-5 dt-w-5',
    viewBox: '0 0 20 20',
    fill: 'currentColor',
  },
  gy = [
    Q(
      'path',
      {
        'fill-rule': 'evenodd',
        d: 'M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z',
        'clip-rule': 'evenodd',
      },
      null,
      -1,
    ),
  ];
Ic.render = function (e, t, n, r, s, i) {
  return j(), pe('svg', py, gy);
};
var Nc = ae({
  name: 'SearchInput',
  props: { value: { type: String, required: !0 } },
});
const vy = ['value'];
Nc.render = function (e, t, n, r, s, i) {
  return (
    j(),
    pe(
      'input',
      Ai(
        {
          value: e.value,
          type: 'search',
          name: 'search',
          class: `dt__filter__search dt-block dt-border dt-border-gray-300 dt-pr-10 dt-px-2 dt-py-2
                                    dt-rounded-md dt-w-full dt-outline-none focus:dt-ring-1 focus:dt-ring-inset sm:dt-text-sm`,
        },
        e.$attrs,
      ),
      null,
      16,
      vy,
    )
  );
};
var kc = ae({
  name: 'Filter',
  components: { SearchInput: Nc, SearchIcon: Ic },
  props: { search: { type: String, required: !0 } },
  emits: ['input'],
});
const yy = { class: 'dt__filter dt-mb-3 dt-w-full' },
  wy = { class: 'dt-w-64' },
  by = Q('label', { for: 'email', class: 'dt-sr-only' }, 'Search', -1),
  Ey = { class: 'dt-relative dt-rounded-md dt-shadow-sm' },
  Ty = {
    class:
      'dt-absolute dt-inset-y-0 dt-right-0 dt-pr-3 dt-flex dt-items-center dt-pointer-events-none',
  };
kc.render = function (e, t, n, r, s, i) {
  const o = Ne('SearchInput'),
    a = Ne('SearchIcon');
  return (
    j(),
    pe('div', yy, [
      Q('div', wy, [
        by,
        Q('div', Ey, [
          X(
            o,
            {
              value: e.search,
              onInput: t[0] || (t[0] = l => e.$emit('input', l.target.value)),
            },
            null,
            8,
            ['value'],
          ),
          Q('div', Ty, [X(a, { class: 'dt-text-gray-400' })]),
        ]),
      ]),
    ])
  );
};
var No = ae({ name: 'Loading' });
Od('data-v-685865e4');
const Oy = { class: 'dt__loading dt-absolute dt-h-full dt-w-full' },
  Sy = [
    Q(
      'div',
      { class: 'dt-flex dt-justify-center dt-items-center' },
      [
        Q('div', {
          class: 'dt__loading_item dt-absolute dt-w-20 dt-h-20 dt-rounded-full',
        }),
        Q('div', {
          class: 'dt__loading_item dt-absolute dt-w-20 dt-h-20 dt-rounded-full',
        }),
      ],
      -1,
    ),
  ];
Sd(),
  (No.render = function (e, t, n, r, s, i) {
    return j(), pe('div', Oy, Sy);
  }),
  (No.__scopeId = 'data-v-685865e4');
var Mc = ae({ name: 'BottomPaginationWrapper' });
const xy = {
    class: 'dt__pagination_wrapper--bottom dt-bg-white dt-shadow-inner',
  },
  _y = { class: 'dt-px-4 sm:dt-px-6 dt-py-4' };
Mc.render = function (e, t, n, r, s, i) {
  return j(), pe('div', xy, [Q('div', _y, [xe(e.$slots, 'default')])]);
};
var Rc = ae({ name: 'PaginationButtons' });
const Cy = {
  class:
    'dt__pagination__nav dt-relative dt-z-0 dt-inline-flex dt-rounded-md dt-shadow-sm dt--space-x-px',
  'aria-label': 'Pagination',
};
Rc.render = function (e, t, n, r, s, i) {
  return j(), pe('nav', Cy, [xe(e.$slots, 'default')]);
};
var $c = ae({ name: 'PaginationInfo' });
const Py = { class: 'dt__pagination__info' },
  Ay = { class: 'dt-text-sm dt-text-gray-700' };
$c.render = function (e, t, n, r, s, i) {
  return j(), pe('div', Py, [Q('p', Ay, [xe(e.$slots, 'default')])]);
};
var Dc = ae({
  name: 'PaginationLink',
  props: {
    active: { type: Boolean, required: !1, default: !1 },
    disabled: { type: Boolean, required: !1, default: !1 },
  },
  setup: e => ({
    linkClasses: Z(() =>
      e.active
        ? 'dt-bg-gray-200 dt-border-gray-300 dt-text-gray-800 hover:dt-bg-gray-200'
        : e.disabled
        ? 'dt-cursor-not-allowed dt-text-gray-400'
        : 'dt-border-gray-300 dt-bg-white dt-text-gray-500 hover:dt-bg-gray-50',
    ),
  }),
});
Dc.render = function (e, t, n, r, s, i) {
  return (
    j(),
    pe(
      'a',
      Ai(
        {
          href: '#',
          class: [
            'dt__pagination__link dt-relative dt-inline-flex dt-items-center dt-px-4 dt-py-2 dt-border dt-text-sm dt-font-medium',
            e.linkClasses,
          ],
        },
        fh(kr({}, e.$attrs)),
      ),
      [xe(e.$slots, 'default')],
      16,
    )
  );
};
var Fc = ae({
  name: 'Pagination',
  components: { PaginationButtons: Rc, PaginationInfo: $c, PaginationLink: Dc },
  props: {
    total: { type: Number, required: !0 },
    perPage: { type: Number, required: !0 },
    currentPage: { type: Number, required: !1, default: 1 },
    maxVisibleButtons: { type: Number, required: !1, default: 5 },
  },
  emits: ['changed'],
  setup(e, { emit: t }) {
    const n = Z(() => (e.currentPage - 1) * e.perPage + 1),
      r = Z(() =>
        e.total > e.currentPage * e.perPage
          ? e.currentPage * e.perPage
          : e.total,
      ),
      s = Z(() => Math.ceil(e.total / e.perPage)),
      i = Z(() =>
        e.currentPage === 1
          ? 1
          : e.currentPage === s.value
          ? s.value - e.maxVisibleButtons + 1
          : e.currentPage - 1,
      ),
      o = Z(() => Math.min(i.value + e.maxVisibleButtons - 1, s.value)),
      a = Z(() => {
        const f = [];
        for (let h = i.value; h <= o.value; h += 1) h > 0 && f.push(h);
        return f;
      }),
      l = Z(() => e.currentPage === 1),
      u = Z(() => e.currentPage === s.value),
      c = f => {
        t('changed', f);
      };
    return {
      currentStart: n,
      currentEnd: r,
      totalPages: s,
      pages: a,
      isInFirstPage: l,
      isInLastPage: u,
      goToPageNumber: c,
      gotoFirstPage: () => c(1),
      gotoLastPage: () => c(s.value),
      gotoNextPage: () =>
        c(e.currentPage >= s.value ? s.value : e.currentPage + 1),
      gotoPreviousPage: () => c(e.currentPage <= 1 ? 1 : e.currentPage - 1),
      showDots: (f = 'left') => {
        const h = f === 'left' ? 1 : s.value,
          p = f === 'left' ? 2 : s.value - 1;
        return !a.value.includes(h) || !a.value.includes(p);
      },
    };
  },
});
const Iy = {
    key: 0,
    class:
      'dt__pagination dt-bg-white dt-flex dt-items-center dt-justify-between',
  },
  Ny = {
    class:
      'dt-hidden sm:dt-flex-1 sm:dt-flex sm:dt-items-center sm:dt-justify-between',
  },
  ky = Ee(' Showing '),
  My = ['textContent'],
  Ry = Ee(' to '),
  $y = ['textContent'],
  Dy = Ee(' of '),
  Fy = ['textContent'],
  Ly = Ee(' results. '),
  Uy = Q('span', { class: 'dt-sr-only' }, 'Go to first', -1),
  Hy = Ee(' \xAB '),
  Vy = Q('span', { class: 'dt-sr-only' }, 'Previous', -1),
  jy = Ee(' \u2039 '),
  By = Ee(' 1 '),
  qy = Ee(' ... '),
  Wy = Ee(' ... '),
  zy = Q('span', { class: 'dt-sr-only' }, 'Next', -1),
  Zy = Ee(' \u203A '),
  Yy = Q('span', { class: 'dt-sr-only' }, 'Go to Last', -1),
  Jy = Ee(' \xBB ');
Fc.render = function (e, t, n, r, s, i) {
  const o = Ne('PaginationInfo'),
    a = Ne('pagination-link'),
    l = Ne('PaginationButtons');
  return e.totalPages
    ? (j(),
      pe('div', Iy, [
        Q('div', Ny, [
          e.total
            ? (j(),
              je(
                o,
                { key: 0 },
                {
                  default: Se(() => [
                    xe(
                      e.$slots,
                      'pagination-info',
                      {
                        start: e.currentStart,
                        end: e.currentEnd,
                        total: e.total,
                      },
                      () => [
                        ky,
                        Q(
                          'span',
                          {
                            class: 'dt-font-medium',
                            textContent: De(e.currentStart),
                          },
                          null,
                          8,
                          My,
                        ),
                        Ry,
                        Q(
                          'span',
                          {
                            class: 'dt-font-medium',
                            textContent: De(e.currentEnd),
                          },
                          null,
                          8,
                          $y,
                        ),
                        Dy,
                        Q(
                          'span',
                          { class: 'dt-font-medium', textContent: De(e.total) },
                          null,
                          8,
                          Fy,
                        ),
                        Ly,
                      ],
                    ),
                  ]),
                  _: 3,
                },
              ))
            : ze('', !0),
          e.totalPages > 1
            ? (j(),
              je(
                l,
                { key: 1 },
                {
                  default: Se(() => [
                    X(
                      a,
                      {
                        key: 'page_first',
                        disabled: e.isInFirstPage,
                        class: 'dt-rounded-l-md',
                        onClick: Vt(e.gotoFirstPage, ['prevent']),
                      },
                      { default: Se(() => [Uy, Hy]), _: 1 },
                      8,
                      ['disabled', 'onClick'],
                    ),
                    X(
                      a,
                      {
                        key: 'page_previous',
                        disabled: e.isInFirstPage,
                        onClick: Vt(e.gotoPreviousPage, ['prevent']),
                      },
                      { default: Se(() => [Vy, jy]), _: 1 },
                      8,
                      ['disabled', 'onClick'],
                    ),
                    e.showDots('left')
                      ? (j(),
                        pe(
                          ke,
                          { key: 0 },
                          [
                            X(
                              a,
                              {
                                key: 'page_1',
                                class: 'dt-block sm:dt-hidden',
                                disabled: e.isInFirstPage,
                                active: e.isInFirstPage,
                                onClick: Vt(e.gotoFirstPage, ['prevent']),
                              },
                              { default: Se(() => [By]), _: 1 },
                              8,
                              ['disabled', 'active', 'onClick'],
                            ),
                            X(
                              a,
                              {
                                key: 'page_divider_left',
                                class: 'sm:dt-hidden',
                              },
                              { default: Se(() => [qy]), _: 1 },
                            ),
                          ],
                          64,
                        ))
                      : ze('', !0),
                    (j(!0),
                    pe(
                      ke,
                      null,
                      hr(
                        e.pages,
                        u => (
                          j(),
                          je(
                            a,
                            {
                              key: `pages_${u}`,
                              class: 'dt-hidden md:dt-inline-block',
                              active: u === e.currentPage,
                              disabled: u === e.currentPage,
                              onClick: Vt(
                                c => e.goToPageNumber(u),
                                ['prevent'],
                              ),
                            },
                            { default: Se(() => [Ee(De(u), 1)]), _: 2 },
                            1032,
                            ['active', 'disabled', 'onClick'],
                          )
                        ),
                      ),
                      128,
                    )),
                    e.showDots('right')
                      ? (j(),
                        pe(
                          ke,
                          { key: 1 },
                          [
                            X(
                              a,
                              {
                                key: 'page_divider_right',
                                class: 'sm:dt-hidden',
                              },
                              { default: Se(() => [Wy]), _: 1 },
                            ),
                            X(
                              a,
                              {
                                key: `page_${e.totalPages}`,
                                class: 'sm:dt-hidden',
                                disabled: e.isInLastPage,
                                active: e.isInLastPage,
                                onClick: Vt(e.gotoLastPage, ['prevent']),
                              },
                              {
                                default: Se(() => [Ee(De(e.totalPages), 1)]),
                                _: 1,
                              },
                              8,
                              ['disabled', 'active', 'onClick'],
                            ),
                          ],
                          64,
                        ))
                      : ze('', !0),
                    X(
                      a,
                      {
                        key: 'page_next',
                        disabled: e.isInLastPage,
                        onClick: Vt(e.gotoNextPage, ['prevent']),
                      },
                      { default: Se(() => [zy, Zy]), _: 1 },
                      8,
                      ['disabled', 'onClick'],
                    ),
                    X(
                      a,
                      {
                        key: 'page_last',
                        disabled: e.isInLastPage,
                        class: 'dt-rounded-r-md',
                        onClick: Vt(e.gotoLastPage, ['prevent']),
                      },
                      { default: Se(() => [Yy, Jy]), _: 1 },
                      8,
                      ['disabled', 'onClick'],
                    ),
                  ]),
                  _: 1,
                },
              ))
            : ze('', !0),
        ]),
      ]))
    : ze('', !0);
};
var Lc = ae({
  name: 'PaginationSize',
  props: {
    value: { type: [Number, String], required: !0 },
    options: { type: Array, required: !0 },
  },
  emits: ['input'],
});
const Ky = {
    class:
      'dt__pagination_size_wrapper dt-w-full dt-flex dt-justify-end sm:dt-w-auto',
  },
  Gy = Q('label', { for: 'location', class: 'dt-sr-only' }, 'Per page', -1),
  Qy = ['value'],
  Xy = ['value', 'selected', 'textContent'];
Lc.render = function (e, t, n, r, s, i) {
  return (
    j(),
    pe('div', Ky, [
      Q('div', null, [
        Gy,
        Q(
          'select',
          {
            value: e.value,
            name: 'per_page',
            class: `dt__pagination_size dt-block dt-w-full dt-pl-3 dt-pr-5 dt-py-2 dt-text-base dt-border
                        dt-border-gray-300 sm:dt-text-sm dt-rounded-md dt-outline-none focus:dt-ring-1 focus:dt-ring-inset`,
            onInput: t[0] || (t[0] = o => e.$emit('input', o.target.value)),
          },
          [
            (j(!0),
            pe(
              ke,
              null,
              hr(
                e.options,
                o => (
                  j(),
                  pe(
                    'option',
                    {
                      key: `per_page_${o}`,
                      value: o,
                      selected: o === e.value,
                      textContent: De(o),
                    },
                    null,
                    8,
                    Xy,
                  )
                ),
              ),
              128,
            )),
          ],
          40,
          Qy,
        ),
      ]),
    ])
  );
};
var Uc = ae({
  name: 'TopPaginationWrapper',
  props: { withPagination: { type: Boolean, required: !1, default: !1 } },
});
Uc.render = function (e, t, n, r, s, i) {
  return (
    j(),
    pe(
      'div',
      {
        class: Pn([
          'dt__pagination_wrapper--top md:dt-flex xs:dt-flex-col dt-items-center',
          { 'dt-bg-white dt-py-4 dt-px-4 sm:dt-px-6': e.withPagination },
        ]),
      },
      [xe(e.$slots, 'default')],
      2,
    )
  );
};
var Hc = ae({ name: 'TableBodyCell' });
const e0 = {
  class:
    'dt__table__tbody_td dt-px-6 dt-py-4 dt-whitespace-nowrap dt-text-sm dt-font-medium dt-text-gray-500',
};
Hc.render = function (e, t, n, r, s, i) {
  return j(), pe('td', e0, [xe(e.$slots, 'default')]);
};
var Vc = ae({ name: 'TableHeadCell' });
const t0 = {
  scope: 'col',
  class:
    'dt__table__thead__th dt-px-6 dt-py-3 dt-text-left dt-text-xs dt-font-medium dt-text-gray-500 dt-uppercase dt-tracking-wider',
};
Vc.render = function (e, t, n, r, s, i) {
  return j(), pe('th', t0, [xe(e.$slots, 'default')]);
};
var jc = ae({
  name: 'TableRow',
  props: {
    rowIndex: { type: [Number, String], required: !1, default: 0 },
    striped: { type: Boolean, required: !1, default: !1 },
    hoverable: { type: Boolean, required: !1, default: !1 },
    nonClickable: { type: Boolean, required: !1, default: !1 },
  },
  emits: ['clicked'],
  setup: e => ({ formattedRowIndex: oe(parseInt(e.rowIndex) || 0) }),
});
jc.render = function (e, t, n, r, s, i) {
  return (
    j(),
    pe(
      'tr',
      {
        class: Pn([
          'dt__table__row',
          {
            'dt-bg-white':
              !e.striped || (e.striped && e.formattedRowIndex % 2 == 0),
            'dt-bg-gray-50': e.striped && e.formattedRowIndex % 2,
            'hover:dt-bg-gray-100': e.hoverable,
            'dt-cursor-pointer': e.hoverable && !e.nonClickable,
          },
        ]),
        onClick: t[0] || (t[0] = Vt(o => e.$emit('clicked'), ['stop'])),
      },
      [xe(e.$slots, 'default')],
      2,
    )
  );
};
var Bc = ae({ name: 'TableWrapper' });
const n0 = { class: 'dt__table_wrapper dt-overflow-auto' },
  r0 = { class: 'dt__table dt-min-w-full dt-divide-y dt-divide-gray-200' };
Bc.render = function (e, t, n, r, s, i) {
  return j(), pe('div', n0, [Q('table', r0, [xe(e.$slots, 'default')])]);
};
var qc = ae({ name: 'TBody' });
const s0 = { class: 'dt__table__tbody' };
qc.render = function (e, t, n, r, s, i) {
  return j(), pe('tbody', s0, [xe(e.$slots, 'default')]);
};
var Wc = ae({ name: 'THead' });
const i0 = { class: 'dt__table__thead dt-bg-gray-50' },
  o0 = { class: 'dt__table__thead__tr' };
Wc.render = function (e, t, n, r, s, i) {
  return j(), pe('thead', i0, [Q('tr', o0, [xe(e.$slots, 'default')])]);
};
const a0 = [5, 10, 15, 25, 50, 75, 100],
  l0 = ae({
    name: 'DataTable',
    components: {
      TableHeadCell: Vc,
      TableBodyCell: Hc,
      TBody: qc,
      TableRow: jc,
      THead: Wc,
      BottomPaginationWrapper: Mc,
      TableWrapper: Bc,
      PaginationSize: Lc,
      TopPaginationWrapper: Uc,
      Filter: kc,
      Loading: No,
      Pagination: Fc,
    },
    props: {
      rows: { type: Array, required: !0 },
      columns: { type: Object, required: !1, default: null },
      pagination: { type: Object, required: !1, default: null },
      rounded: { type: Boolean, required: !1, default: !1 },
      striped: { type: Boolean, required: !1, default: !1 },
      sn: { type: Boolean, required: !1, default: !1 },
      filter: { type: Boolean, required: !1, default: !1 },
      loading: { type: Boolean, required: !1, default: !1 },
      perPageOptions: { type: Array, required: !1, default: () => a0 },
      query: { type: Object, required: !1, default: () => ({}) },
      topPagination: { type: Boolean, required: !1, default: !1 },
      bottomPagination: { type: Boolean, required: !1, default: !0 },
      hoverable: { type: Boolean, required: !1, default: !1 },
      nonClickable: { type: Boolean, required: !1, default: !1 },
    },
    emits: ['loadData', 'rowClicked'],
    setup(e, { emit: t }) {
      var n, r;
      const s = oe({
          page: ((n = e.pagination) == null ? void 0 : n.page) || 1,
          search: e.query.search || '',
          per_page: ((r = e.pagination) == null ? void 0 : r.per_page) || 10,
        }),
        i = Z(() => !!e.pagination),
        o = Z(() => {
          var f;
          return (
            ((f = e.pagination) == null ? void 0 : f.total) || e.rows.length
          );
        }),
        a = Z(() => e.rows),
        l = Z(() =>
          e.columns
            ? e.columns
            : e.rows.length === 0
            ? {}
            : Object.keys(e.rows[0]).reduce((f, h) => {
                return Io(kr({}, f), {
                  [h]:
                    ((p = h),
                    p
                      .toLowerCase()
                      .replace(/[-_]/g, ' ')
                      .split(' ')
                      .map(v => v.charAt(0).toUpperCase() + v.slice(1))
                      .join(' ')),
                });
                var p;
              }, {}),
        ),
        u = Z(() => (i.value ? s.value.per_page * (s.value.page - 1) : 0));
      kt(
        () => kr({}, s.value),
        () => {
          t('loadData', s.value);
        },
        { deep: !0, immediate: !0 },
      );
      const c = ((f, h = 400) => {
        let p;
        return (...v) => {
          clearTimeout(p), (p = setTimeout(() => f(...v), h));
        };
      })(f => {
        s.value = Io(kr({}, s.value), { page: 1, search: f });
      });
      return {
        tableQuery: s,
        showPagination: i,
        totalData: o,
        tableRows: a,
        tableColumns: l,
        paginatedRowIndex: u,
        uniqueId: () => Math.floor(100 * Math.random()),
        handlePageChange: f => {
          s.value.page = f;
        },
        handleOnSearchChange: c,
        handleOnPaginationSizeChange: f => {
          s.value = Io(kr({}, s.value), { page: 1, per_page: f });
        },
        rowClickHandler: f => {
          !e.nonClickable && e.hoverable && t('rowClicked', f);
        },
      };
    },
  }),
  u0 = { class: 'data-table dt-flex dt-flex-col' },
  c0 = { class: 'dt-align-middle dt-min-w-full' },
  f0 = Ee(' Showing '),
  d0 = ['textContent'],
  h0 = Ee(' to '),
  m0 = ['textContent'],
  p0 = Ee(' of '),
  g0 = ['textContent'],
  v0 = Ee(' results. '),
  y0 = Ee(' Showing '),
  w0 = ['textContent'],
  b0 = Ee(' to '),
  E0 = ['textContent'],
  T0 = Ee(' of '),
  O0 = ['textContent'],
  S0 = Ee(' results. ');
l0.render = function (e, t, n, r, s, i) {
  const o = Ne('Filter'),
    a = Ne('Loading'),
    l = Ne('Pagination'),
    u = Ne('PaginationSize'),
    c = Ne('TopPaginationWrapper'),
    f = Ne('TableHeadCell'),
    h = Ne('THead'),
    p = Ne('TableBodyCell'),
    v = Ne('TableRow'),
    N = Ne('TBody'),
    T = Ne('TableWrapper'),
    E = Ne('pagination'),
    A = Ne('BottomPaginationWrapper');
  return (
    j(),
    pe('div', u0, [
      Q('div', c0, [
        e.filter && e.topPagination
          ? (j(),
            je(
              o,
              {
                key: 0,
                search: e.tableQuery.search,
                onInput: e.handleOnSearchChange,
              },
              null,
              8,
              ['search', 'onInput'],
            ))
          : ze('', !0),
        Q(
          'div',
          {
            class: Pn([
              'dt__wrapper dt-relative',
              { 'sm:dt-rounded-lg': e.rounded },
            ]),
          },
          [
            e.loading
              ? xe(e.$slots, 'loading', { key: 0 }, () => [X(a)])
              : ze('', !0),
            e.showPagination
              ? (j(),
                je(
                  c,
                  { key: 1, 'with-pagination': e.topPagination },
                  {
                    default: Se(() => [
                      e.topPagination
                        ? (j(),
                          je(
                            l,
                            {
                              key: 0,
                              class: 'dt-flex-1 dt-pr-4',
                              total: e.totalData,
                              'current-page': e.tableQuery.page,
                              'per-page': parseInt(
                                e.tableQuery.per_page.toString(),
                              ),
                              onChanged: e.handlePageChange,
                            },
                            {
                              'pagination-info': Se(C => [
                                xe(
                                  e.$slots,
                                  'pagination-info',
                                  {
                                    start: C.start,
                                    end: C.end,
                                    total: C.total,
                                  },
                                  () => [
                                    f0,
                                    Q(
                                      'span',
                                      {
                                        class: 'dt-font-medium',
                                        textContent: De(C.start),
                                      },
                                      null,
                                      8,
                                      d0,
                                    ),
                                    h0,
                                    Q(
                                      'span',
                                      {
                                        class: 'dt-font-medium',
                                        textContent: De(C.end),
                                      },
                                      null,
                                      8,
                                      m0,
                                    ),
                                    p0,
                                    Q(
                                      'span',
                                      {
                                        class: 'dt-font-medium',
                                        textContent: De(C.total),
                                      },
                                      null,
                                      8,
                                      g0,
                                    ),
                                    v0,
                                  ],
                                ),
                              ]),
                              _: 3,
                            },
                            8,
                            ['total', 'current-page', 'per-page', 'onChanged'],
                          ))
                        : ze('', !0),
                      e.filter && !e.topPagination
                        ? (j(),
                          je(
                            o,
                            {
                              key: 1,
                              search: e.tableQuery.search,
                              onInput: e.handleOnSearchChange,
                            },
                            null,
                            8,
                            ['search', 'onInput'],
                          ))
                        : ze('', !0),
                      X(
                        u,
                        {
                          value: e.tableQuery.per_page,
                          options: e.perPageOptions,
                          onInput: e.handleOnPaginationSizeChange,
                        },
                        null,
                        8,
                        ['value', 'options', 'onInput'],
                      ),
                    ]),
                    _: 3,
                  },
                  8,
                  ['with-pagination'],
                ))
              : ze('', !0),
            X(T, null, {
              default: Se(() => [
                X(h, null, {
                  default: Se(() => [
                    e.sn
                      ? xe(e.$slots, 'thead-sn', { key: 0 }, () => [
                          X(
                            f,
                            {
                              class: 'dt__table__thead__th_sn',
                              textContent: De('S.N.'),
                            },
                            null,
                            8,
                            ['textContent'],
                          ),
                        ])
                      : ze('', !0),
                    xe(e.$slots, 'thead', { column: e.tableColumns }, () => [
                      (j(!0),
                      pe(
                        ke,
                        null,
                        hr(
                          e.tableColumns,
                          (C, $) => (
                            j(),
                            je(
                              f,
                              {
                                key: `datatable-thead-th-${$}`,
                                textContent: De(C),
                              },
                              null,
                              8,
                              ['textContent'],
                            )
                          ),
                        ),
                        128,
                      )),
                    ]),
                  ]),
                  _: 3,
                }),
                X(N, null, {
                  default: Se(() => [
                    (j(!0),
                    pe(
                      ke,
                      null,
                      hr(
                        e.tableRows,
                        (C, $) => (
                          j(),
                          je(
                            v,
                            {
                              key: `datatable-row-${e.uniqueId()}-${$}`,
                              hoverable: e.hoverable,
                              'non-clickable': e.nonClickable,
                              'row-index': $,
                              striped: e.striped,
                              onClicked: K => e.rowClickHandler(C),
                            },
                            {
                              default: Se(() => [
                                e.sn
                                  ? xe(
                                      e.$slots,
                                      'tbody-sn',
                                      { key: 0, sn: $ + 1 },
                                      () => [
                                        X(
                                          p,
                                          {
                                            class: 'dt__table__tbody_td_sn',
                                            textContent: De(
                                              $ + 1 + e.paginatedRowIndex,
                                            ),
                                          },
                                          null,
                                          8,
                                          ['textContent'],
                                        ),
                                      ],
                                    )
                                  : ze('', !0),
                                xe(
                                  e.$slots,
                                  'tbody',
                                  { index: $, row: C },
                                  () => [
                                    (j(!0),
                                    pe(
                                      ke,
                                      null,
                                      hr(
                                        e.tableColumns,
                                        (K, te) => (
                                          j(),
                                          je(
                                            p,
                                            {
                                              key: `datatable-tbody-td-${e.uniqueId()}-${te}`,
                                              name: K,
                                              textContent: De(C[te]),
                                            },
                                            null,
                                            8,
                                            ['name', 'textContent'],
                                          )
                                        ),
                                      ),
                                      128,
                                    )),
                                  ],
                                ),
                              ]),
                              _: 2,
                            },
                            1032,
                            [
                              'hoverable',
                              'non-clickable',
                              'row-index',
                              'striped',
                              'onClicked',
                            ],
                          )
                        ),
                      ),
                      128,
                    )),
                    e.tableRows.length === 0
                      ? (j(),
                        je(
                          v,
                          { key: 0, 'row-index': 0 },
                          { default: Se(() => [xe(e.$slots, 'empty')]), _: 3 },
                        ))
                      : ze('', !0),
                  ]),
                  _: 3,
                }),
              ]),
              _: 3,
            }),
            e.showPagination && e.bottomPagination
              ? (j(),
                je(
                  A,
                  { key: 2 },
                  {
                    default: Se(() => [
                      X(
                        E,
                        {
                          total: e.totalData,
                          'current-page': e.tableQuery.page,
                          'per-page': parseInt(
                            e.tableQuery.per_page.toString(),
                          ),
                          onChanged: e.handlePageChange,
                        },
                        {
                          'pagination-info': Se(C => [
                            xe(
                              e.$slots,
                              'pagination-info',
                              { start: C.start, end: C.end, total: C.total },
                              () => [
                                y0,
                                Q(
                                  'span',
                                  {
                                    class: 'dt-font-medium',
                                    textContent: De(C.start),
                                  },
                                  null,
                                  8,
                                  w0,
                                ),
                                b0,
                                Q(
                                  'span',
                                  {
                                    class: 'dt-font-medium',
                                    textContent: De(C.end),
                                  },
                                  null,
                                  8,
                                  E0,
                                ),
                                T0,
                                Q(
                                  'span',
                                  {
                                    class: 'dt-font-medium',
                                    textContent: De(C.total),
                                  },
                                  null,
                                  8,
                                  O0,
                                ),
                                S0,
                              ],
                            ),
                          ]),
                          _: 3,
                        },
                        8,
                        ['total', 'current-page', 'per-page', 'onChanged'],
                      ),
                    ]),
                    _: 3,
                  },
                ))
              : ze('', !0),
          ],
          2,
        ),
      ]),
    ])
  );
};
const Ds = typeof window != 'undefined',
  zc = e => typeof e == 'function',
  x0 = () => +Date.now();
function _0(e, t) {
  function n(...r) {
    e(() => t.apply(this, r), { fn: t, thisArg: this, args: r });
  }
  return n;
}
const Zc = e => e();
function C0(e = Zc) {
  const t = oe(!0);
  function n() {
    t.value = !1;
  }
  function r() {
    t.value = !0;
  }
  return {
    isActive: t,
    pause: n,
    resume: r,
    eventFilter: (...i) => {
      t.value && e(...i);
    },
  };
}
var P0 = Object.defineProperty,
  A0 = Object.defineProperties,
  I0 = Object.getOwnPropertyDescriptors,
  Fs = Object.getOwnPropertySymbols,
  Yc = Object.prototype.hasOwnProperty,
  Jc = Object.prototype.propertyIsEnumerable,
  Kc = (e, t, n) =>
    t in e
      ? P0(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  N0 = (e, t) => {
    for (var n in t || (t = {})) Yc.call(t, n) && Kc(e, n, t[n]);
    if (Fs) for (var n of Fs(t)) Jc.call(t, n) && Kc(e, n, t[n]);
    return e;
  },
  k0 = (e, t) => A0(e, I0(t)),
  M0 = (e, t) => {
    var n = {};
    for (var r in e) Yc.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && Fs)
      for (var r of Fs(e)) t.indexOf(r) < 0 && Jc.call(e, r) && (n[r] = e[r]);
    return n;
  };
function R0(e, t, n = {}) {
  const r = n,
    { eventFilter: s = Zc } = r,
    i = M0(r, ['eventFilter']),
    o = _0(s, t);
  let a, l, u;
  if (i.flush === 'sync') {
    const c = oe(!1);
    (l = () => {}),
      (a = f => {
        (c.value = !0), f(), (c.value = !1);
      }),
      (u = kt(
        e,
        (...f) => {
          c.value || o(...f);
        },
        i,
      ));
  } else {
    const c = [],
      f = oe(0),
      h = oe(0);
    (l = () => {
      f.value = h.value;
    }),
      c.push(
        kt(
          e,
          () => {
            h.value++;
          },
          k0(N0({}, i), { flush: 'sync' }),
        ),
      ),
      (a = p => {
        const v = h.value;
        p(), (f.value += h.value - v);
      }),
      c.push(
        kt(
          e,
          (...p) => {
            const v = f.value > 0 && f.value === h.value;
            (f.value = 0), (h.value = 0), !v && o(...p);
          },
          i,
        ),
      ),
      (u = () => {
        c.forEach(p => p());
      });
  }
  return { stop: u, ignoreUpdates: a, ignorePrevAsyncUpdates: l };
}
Ds && window.document;
Ds && window.navigator;
Ds && window.location;
const Gc = '__vueuse_ssr_handlers__';
globalThis[Gc] = globalThis[Gc] || {};
const Qc = e => JSON.parse(JSON.stringify(e)),
  Xc = e => e,
  $0 = (e, t) => (e.value = t);
function D0(e) {
  return e ? (zc(e) ? e : Qc) : Xc;
}
function F0(e) {
  return e ? (zc(e) ? e : Qc) : Xc;
}
function L0(e, t = {}) {
  const {
    clone: n = !1,
    dump: r = D0(n),
    parse: s = F0(n),
    setSource: i = $0,
  } = t;
  function o() {
    return hi({ snapshot: r(e.value), timestamp: x0() });
  }
  const a = oe(o()),
    l = oe([]),
    u = oe([]),
    c = C => {
      i(e, s(C.snapshot)), (a.value = C);
    },
    f = () => {
      l.value.unshift(a.value),
        (a.value = o()),
        t.capacity &&
          l.value.length > t.capacity &&
          l.value.splice(t.capacity, 1 / 0),
        u.value.length && u.value.splice(0, u.value.length);
    },
    h = () => {
      l.value.splice(0, l.value.length), u.value.splice(0, u.value.length);
    },
    p = () => {
      const C = l.value.shift();
      C && (u.value.unshift(a.value), c(C));
    },
    v = () => {
      const C = u.value.shift();
      C && (l.value.unshift(a.value), c(C));
    },
    N = () => {
      c(a.value);
    },
    T = Z(() => [a.value, ...l.value]),
    E = Z(() => l.value.length > 0),
    A = Z(() => u.value.length > 0);
  return {
    source: e,
    undoStack: l,
    redoStack: u,
    last: a,
    history: T,
    canUndo: E,
    canRedo: A,
    clear: h,
    commit: f,
    reset: N,
    undo: p,
    redo: v,
  };
}
var U0 = Object.defineProperty,
  H0 = Object.defineProperties,
  V0 = Object.getOwnPropertyDescriptors,
  ef = Object.getOwnPropertySymbols,
  j0 = Object.prototype.hasOwnProperty,
  B0 = Object.prototype.propertyIsEnumerable,
  tf = (e, t, n) =>
    t in e
      ? U0(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  nf = (e, t) => {
    for (var n in t || (t = {})) j0.call(t, n) && tf(e, n, t[n]);
    if (ef) for (var n of ef(t)) B0.call(t, n) && tf(e, n, t[n]);
    return e;
  },
  rf = (e, t) => H0(e, V0(t));
function _w(e, t = {}) {
  const { deep: n = !1, flush: r = 'pre', eventFilter: s } = t,
    { eventFilter: i, pause: o, resume: a, isActive: l } = C0(s),
    {
      ignoreUpdates: u,
      ignorePrevAsyncUpdates: c,
      stop: f,
    } = R0(e, T, { deep: n, flush: r, eventFilter: i });
  function h($, K) {
    c(),
      u(() => {
        $.value = K;
      });
  }
  const p = L0(e, rf(nf({}, t), { clone: t.clone || n, setSource: h })),
    { clear: v, commit: N } = p;
  function T() {
    c(), N();
  }
  function E($) {
    a(), $ && T();
  }
  function A($) {
    let K = !1;
    const te = () => (K = !0);
    u(() => {
      $(te);
    }),
      K || T();
  }
  function C() {
    f(), v();
  }
  return rf(nf({}, p), {
    isTracking: l,
    pause: o,
    resume: E,
    commit: T,
    batch: A,
    dispose: C,
  });
}
var sf, of;
Ds &&
  (window == null ? void 0 : window.navigator) &&
  ((sf = window == null ? void 0 : window.navigator) == null
    ? void 0
    : sf.platform) &&
  /iP(ad|hone|od)/.test(
    (of = window == null ? void 0 : window.navigator) == null
      ? void 0
      : of.platform,
  );
var q0 = Object.defineProperty,
  af = Object.getOwnPropertySymbols,
  W0 = Object.prototype.hasOwnProperty,
  z0 = Object.prototype.propertyIsEnumerable,
  lf = (e, t, n) =>
    t in e
      ? q0(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  Z0 = (e, t) => {
    for (var n in t || (t = {})) W0.call(t, n) && lf(e, n, t[n]);
    if (af) for (var n of af(t)) z0.call(t, n) && lf(e, n, t[n]);
    return e;
  };
const Y0 = { top: 0, left: 0, bottom: 0, right: 0, height: 0, width: 0 };
Z0({ text: '' }, Y0);
function Ye() {
  return (
    (Ye =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }),
    Ye.apply(this, arguments)
  );
}
function En(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    s,
    i;
  for (i = 0; i < r.length; i++)
    (s = r[i]), !(t.indexOf(s) >= 0) && (n[s] = e[s]);
  return n;
}
function J0(e, t) {
  if (!!e) {
    if (typeof e == 'string') return uf(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (n === 'Object' && e.constructor && (n = e.constructor.name),
      n === 'Map' || n === 'Set')
    )
      return Array.from(e);
    if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return uf(e, t);
  }
}
function uf(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function Ct(e, t) {
  var n;
  if (typeof Symbol == 'undefined' || e[Symbol.iterator] == null) {
    if (
      Array.isArray(e) ||
      (n = J0(e)) ||
      (t && e && typeof e.length == 'number')
    ) {
      n && (e = n);
      var r = 0;
      return function () {
        return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
      };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  return (n = e[Symbol.iterator]()), n.next.bind(n);
}
function Zt(e, t) {
  if (e in t) {
    for (
      var n = t[e],
        r = arguments.length,
        s = new Array(r > 2 ? r - 2 : 0),
        i = 2;
      i < r;
      i++
    )
      s[i - 2] = arguments[i];
    return typeof n == 'function' ? n.apply(void 0, s) : n;
  }
  var o = new Error(
    'Tried to handle "' +
      e +
      '" but there is no handler defined. Only defined handlers are: ' +
      Object.keys(t)
        .map(function (a) {
          return '"' + a + '"';
        })
        .join(', ') +
      '.',
  );
  throw (Error.captureStackTrace && Error.captureStackTrace(o, Zt), o);
}
var Yt;
(function (e) {
  (e[(e.None = 0)] = 'None'),
    (e[(e.RenderStrategy = 1)] = 'RenderStrategy'),
    (e[(e.Static = 2)] = 'Static');
})(Yt || (Yt = {}));
var rt;
(function (e) {
  (e[(e.Unmount = 0)] = 'Unmount'), (e[(e.Hidden = 1)] = 'Hidden');
})(rt || (rt = {}));
function Jt(e) {
  var t = e.visible,
    n = t === void 0 ? !0 : t,
    r = e.features,
    s = r === void 0 ? Yt.None : r,
    i = En(e, ['visible', 'features']);
  if (n || (s & Yt.Static && i.props.static)) return Ls(i);
  if (s & Yt.RenderStrategy) {
    var o,
      a,
      l = ((o = i.props.unmount) != null ? o : !0) ? rt.Unmount : rt.Hidden;
    return Zt(
      l,
      ((a = {}),
      (a[rt.Unmount] = function () {
        return null;
      }),
      (a[rt.Hidden] = function () {
        return Ls(
          Ye({}, i, {
            props: Ye({}, i.props, { hidden: !0, style: { display: 'none' } }),
          }),
        );
      }),
      a),
    );
  }
  return Ls(i);
}
function Ls(e) {
  var t = e.props,
    n = e.attrs,
    r = e.slots,
    s = e.slot,
    i = e.name,
    o = K0(t, ['unmount', 'static']),
    a = o.as,
    l = En(o, ['as']),
    u = r.default == null ? void 0 : r.default(s);
  if (a === 'template') {
    if (Object.keys(l).length > 0 || Object.keys(n).length > 0) {
      var c = u != null ? u : [],
        f = c[0],
        h = c.slice(1);
      if (!G0(f) || h.length > 0)
        throw new Error(
          [
            'Passing props on "template"!',
            '',
            'The current component <' + i + ' /> is rendering a "template".',
            'However we need to passthrough the following props:',
            Object.keys(l)
              .concat(Object.keys(n))
              .map(function (p) {
                return '  - ' + p;
              }).join(`
`),
            '',
            'You can apply a few solutions:',
            [
              'Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',
              'Render a single element as the child so that we can forward the props onto that element.',
            ].map(function (p) {
              return '  - ' + p;
            }).join(`
`),
          ].join(`
`),
        );
      return Dn(f, l);
    }
    return Array.isArray(u) && u.length === 1 ? u[0] : u;
  }
  return xt(a, l, u);
}
function K0(e, t) {
  t === void 0 && (t = []);
  for (var n = Object.assign({}, e), r = Ct(t), s; !(s = r()).done; ) {
    var i = s.value;
    i in n && delete n[i];
  }
  return n;
}
function G0(e) {
  return e == null
    ? !1
    : typeof e.type == 'string' ||
        typeof e.type == 'object' ||
        typeof e.type == 'function';
}
var cf = Symbol('StackContext'),
  nr;
(function (e) {
  (e[(e.AddElement = 0)] = 'AddElement'),
    (e[(e.RemoveElement = 1)] = 'RemoveElement');
})(nr || (nr = {}));
function ff() {
  return Fe(cf, function () {});
}
function Q0(e) {
  var t = ff();
  ht(function (n) {
    var r = e == null ? void 0 : e.value;
    !r ||
      (t(nr.AddElement, r),
      n(function () {
        return t(nr.RemoveElement, r);
      }));
  });
}
function df(e) {
  var t = ff();
  function n() {
    for (var r = arguments.length, s = new Array(r), i = 0; i < r; i++)
      s[i] = arguments[i];
    e == null || e.apply(void 0, s), t.apply(void 0, s);
  }
  Qe(cf, n);
}
var hf = Symbol('ForcePortalRootContext');
function X0() {
  return Fe(hf, !1);
}
var mf = ae({
  name: 'ForcePortalRoot',
  props: {
    as: { type: [Object, String], default: 'template' },
    force: { type: Boolean, default: !1 },
  },
  setup: function (t, n) {
    var r = n.slots,
      s = n.attrs;
    return (
      Qe(hf, t.force),
      function () {
        var i = En(t, ['force']);
        return Jt({
          props: i,
          slot: {},
          slots: r,
          attrs: s,
          name: 'ForcePortalRoot',
        });
      }
    );
  },
});
function pf() {
  var e = document.getElementById('headlessui-portal-root');
  if (e) return e;
  var t = document.createElement('div');
  return (
    t.setAttribute('id', 'headlessui-portal-root'), document.body.appendChild(t)
  );
}
var ew = ae({
    name: 'Portal',
    props: { as: { type: [Object, String], default: 'div' } },
    setup: function (t, n) {
      var r = n.slots,
        s = n.attrs,
        i = X0(),
        o = Fe(gf, null),
        a = oe(i === !0 || o === null ? pf() : o.resolveTarget());
      ht(function () {
        i || (o !== null && (a.value = o.resolveTarget()));
      });
      var l = oe(null);
      return (
        Q0(l),
        sn(function () {
          var u = document.getElementById('headlessui-portal-root');
          if (!!u && a.value === u && a.value.children.length <= 0) {
            var c;
            (c = a.value.parentElement) == null || c.removeChild(a.value);
          }
        }),
        df(),
        function () {
          if (a.value === null) return null;
          var u = { ref: l };
          return xt(
            ih,
            { to: a.value },
            Jt({
              props: Ye({}, t, u),
              slot: {},
              attrs: s,
              slots: r,
              name: 'Portal',
            }),
          );
        }
      );
    },
  }),
  gf = Symbol('PortalGroupContext'),
  tw = ae({
    name: 'PortalGroup',
    props: {
      as: { type: [Object, String], default: 'template' },
      target: { type: Object, default: null },
    },
    setup: function (t, n) {
      var r = n.attrs,
        s = n.slots,
        i = Rn({
          resolveTarget: function () {
            return t.target;
          },
        });
      return (
        Qe(gf, i),
        function () {
          var o = En(t, ['target']);
          return Jt({
            props: o,
            slot: {},
            attrs: r,
            slots: s,
            name: 'PortalGroup',
          });
        }
      );
    },
  }),
  Us;
(function (e) {
  (e.Space = ' '),
    (e.Enter = 'Enter'),
    (e.Escape = 'Escape'),
    (e.Backspace = 'Backspace'),
    (e.ArrowLeft = 'ArrowLeft'),
    (e.ArrowUp = 'ArrowUp'),
    (e.ArrowRight = 'ArrowRight'),
    (e.ArrowDown = 'ArrowDown'),
    (e.Home = 'Home'),
    (e.End = 'End'),
    (e.PageUp = 'PageUp'),
    (e.PageDown = 'PageDown'),
    (e.Tab = 'Tab');
})(Us || (Us = {}));
var nw = 0;
function rw() {
  return ++nw;
}
function Hs() {
  return rw();
}
function Vs(e, t, n) {
  typeof window != 'undefined' &&
    ht(function (r) {
      window.addEventListener(e, t, n),
        r(function () {
          window.removeEventListener(e, t, n);
        });
    });
}
function ko(e, t) {
  for (var n = Ct(e), r; !(r = n()).done; ) {
    var s = r.value;
    if (s.contains(t)) return !0;
  }
  return !1;
}
var sw = [
    '[contentEditable=true]',
    '[tabindex]',
    'a[href]',
    'area[href]',
    'button:not([disabled])',
    'iframe',
    'input:not([disabled])',
    'select:not([disabled])',
    'textarea:not([disabled])',
  ]
    .map(function (e) {
      return e + ":not([tabindex='-1'])";
    })
    .join(','),
  Le;
(function (e) {
  (e[(e.First = 1)] = 'First'),
    (e[(e.Previous = 2)] = 'Previous'),
    (e[(e.Next = 4)] = 'Next'),
    (e[(e.Last = 8)] = 'Last'),
    (e[(e.WrapAround = 16)] = 'WrapAround'),
    (e[(e.NoScroll = 32)] = 'NoScroll');
})(Le || (Le = {}));
var Kt;
(function (e) {
  (e[(e.Error = 0)] = 'Error'),
    (e[(e.Overflow = 1)] = 'Overflow'),
    (e[(e.Success = 2)] = 'Success'),
    (e[(e.Underflow = 3)] = 'Underflow');
})(Kt || (Kt = {}));
var js;
(function (e) {
  (e[(e.Previous = -1)] = 'Previous'), (e[(e.Next = 1)] = 'Next');
})(js || (js = {}));
function iw(e) {
  return (
    e === void 0 && (e = document.body),
    e == null ? [] : Array.from(e.querySelectorAll(sw))
  );
}
var vf;
(function (e) {
  (e[(e.Strict = 0)] = 'Strict'), (e[(e.Loose = 1)] = 'Loose');
})(vf || (vf = {}));
function Mr(e) {
  e == null || e.focus({ preventScroll: !0 });
}
function yf(e, t) {
  var n = Array.isArray(e) ? e : iw(e),
    r = document.activeElement,
    s = (function () {
      if (t & (Le.First | Le.Next)) return js.Next;
      if (t & (Le.Previous | Le.Last)) return js.Previous;
      throw new Error(
        'Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last',
      );
    })(),
    i = (function () {
      if (t & Le.First) return 0;
      if (t & Le.Previous) return Math.max(0, n.indexOf(r)) - 1;
      if (t & Le.Next) return Math.max(0, n.indexOf(r)) + 1;
      if (t & Le.Last) return n.length - 1;
      throw new Error(
        'Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last',
      );
    })(),
    o = t & Le.NoScroll ? { preventScroll: !0 } : {},
    a = 0,
    l = n.length,
    u = void 0;
  do {
    var c;
    if (a >= l || a + l <= 0) return Kt.Error;
    var f = i + a;
    if (t & Le.WrapAround) f = (f + l) % l;
    else {
      if (f < 0) return Kt.Underflow;
      if (f >= l) return Kt.Overflow;
    }
    (u = n[f]), (c = u) == null || c.focus(o), (a += s);
  } while (u !== document.activeElement);
  return (
    u.hasAttribute('tabindex') || u.setAttribute('tabindex', '0'), Kt.Success
  );
}
function ow(e, t, n) {
  t === void 0 && (t = oe(!0)), n === void 0 && (n = oe({}));
  var r = oe(typeof window != 'undefined' ? document.activeElement : null),
    s = oe(null);
  function i() {
    if (!!t.value && e.value.size === 1) {
      var a = n.value.initialFocus,
        l = document.activeElement;
      if (a) {
        if (a === l) return;
      } else if (ko(e.value, l)) return;
      if (((r.value = l), a)) Mr(a);
      else {
        for (var u = !1, c = Ct(e.value), f; !(f = c()).done; ) {
          var h = f.value,
            p = yf(h, Le.First);
          if (p === Kt.Success) {
            u = !0;
            break;
          }
        }
        u ||
          console.warn(
            'There are no focusable elements inside the <FocusTrap />',
          );
      }
      s.value = document.activeElement;
    }
  }
  function o() {
    Mr(r.value), (r.value = null), (s.value = null);
  }
  ht(i),
    yi(function () {
      t.value ? i() : o();
    }),
    sn(o),
    Vs('keydown', function (a) {
      if (
        !!t.value &&
        a.key === Us.Tab &&
        !!document.activeElement &&
        e.value.size === 1
      ) {
        a.preventDefault();
        for (var l = Ct(e.value), u; !(u = l()).done; ) {
          var c = u.value,
            f = yf(c, (a.shiftKey ? Le.Previous : Le.Next) | Le.WrapAround);
          if (f === Kt.Success) {
            s.value = document.activeElement;
            break;
          }
        }
      }
    }),
    Vs(
      'focus',
      function (a) {
        if (!!t.value && e.value.size === 1) {
          var l = s.value;
          if (!!l) {
            var u = a.target;
            u && u instanceof HTMLElement
              ? ko(e.value, u)
                ? ((s.value = u), Mr(u))
                : (a.preventDefault(), a.stopPropagation(), Mr(l))
              : Mr(s.value);
          }
        }
      },
      !0,
    );
}
var wf = 'body > *',
  rr = new Set(),
  Gt = new Map();
function bf(e) {
  e.setAttribute('aria-hidden', 'true'), (e.inert = !0);
}
function Ef(e) {
  var t = Gt.get(e);
  !t ||
    (t['aria-hidden'] === null
      ? e.removeAttribute('aria-hidden')
      : e.setAttribute('aria-hidden', t['aria-hidden']),
    (e.inert = t.inert));
}
function aw(e, t) {
  t === void 0 && (t = oe(!0)),
    ht(function (n) {
      if (!!t.value && !!e.value) {
        var r = e.value;
        rr.add(r);
        for (var s = Ct(Gt.keys()), i; !(i = s()).done; ) {
          var o = i.value;
          o.contains(r) && (Ef(o), Gt.delete(o));
        }
        document.querySelectorAll(wf).forEach(function (a) {
          if (a instanceof HTMLElement) {
            for (var l = Ct(rr), u; !(u = l()).done; ) {
              var c = u.value;
              if (a.contains(c)) return;
            }
            rr.size === 1 &&
              (Gt.set(a, {
                'aria-hidden': a.getAttribute('aria-hidden'),
                inert: a.inert,
              }),
              bf(a));
          }
        }),
          n(function () {
            if ((rr.delete(r), rr.size > 0))
              document.querySelectorAll(wf).forEach(function (c) {
                if (c instanceof HTMLElement && !Gt.has(c)) {
                  for (var f = Ct(rr), h; !(h = f()).done; ) {
                    var p = h.value;
                    if (c.contains(p)) return;
                  }
                  Gt.set(c, {
                    'aria-hidden': c.getAttribute('aria-hidden'),
                    inert: c.inert,
                  }),
                    bf(c);
                }
              });
            else
              for (var a = Ct(Gt.keys()), l; !(l = a()).done; ) {
                var u = l.value;
                Ef(u), Gt.delete(u);
              }
          });
      }
    });
}
var lw = Symbol('DescriptionContext');
function uw(e) {
  var t = e === void 0 ? {} : e,
    n = t.slot,
    r = n === void 0 ? oe({}) : n,
    s = t.name,
    i = s === void 0 ? 'Description' : s,
    o = t.props,
    a = o === void 0 ? {} : o,
    l = oe([]);
  function u(c) {
    return (
      l.value.push(c),
      function () {
        var f = l.value.indexOf(c);
        f !== -1 && l.value.splice(f, 1);
      }
    );
  }
  return (
    Qe(lw, { register: u, slot: r, name: i, props: a }),
    Z(function () {
      return l.value.length > 0 ? l.value.join(' ') : void 0;
    })
  );
}
function Mo(e) {
  var t;
  return e == null || e.value == null
    ? null
    : (t = e.value.$el) != null
    ? t
    : e.value;
}
var Tf = Symbol('Context'),
  Rt;
(function (e) {
  (e[(e.Open = 0)] = 'Open'), (e[(e.Closed = 1)] = 'Closed');
})(Rt || (Rt = {}));
function cw() {
  return Ro() !== null;
}
function Ro() {
  return Fe(Tf, null);
}
function fw(e) {
  Qe(Tf, e);
}
var qe;
(function (e) {
  (e[(e.Open = 0)] = 'Open'), (e[(e.Closed = 1)] = 'Closed');
})(qe || (qe = {}));
var Of = Symbol('DialogContext');
function Rr(e) {
  var t = Fe(Of, null);
  if (t === null) {
    var n = new Error(
      '<' + e + ' /> is missing a parent <Dialog /> component.',
    );
    throw (Error.captureStackTrace && Error.captureStackTrace(n, Rr), n);
  }
  return t;
}
var Bs = 'DC8F892D-2EBD-447C-A4C8-A03058436FF4',
  Cw = ae({
    name: 'Dialog',
    inheritAttrs: !1,
    props: {
      as: { type: [Object, String], default: 'div' },
      static: { type: Boolean, default: !1 },
      unmount: { type: Boolean, default: !0 },
      open: { type: [Boolean, String], default: Bs },
      initialFocus: { type: Object, default: null },
    },
    emits: {
      close: function (t) {
        return !0;
      },
    },
    render: function () {
      var t = this,
        n = Ye({}, this.$attrs, {
          ref: 'el',
          id: this.id,
          role: 'dialog',
          'aria-modal': this.dialogState === qe.Open ? !0 : void 0,
          'aria-labelledby': this.titleId,
          'aria-describedby': this.describedby,
          onClick: this.handleClick,
        }),
        r = this.$props,
        s = En(r, ['open', 'initialFocus']),
        i = { open: this.dialogState === qe.Open };
      return xt(mf, { force: !0 }, function () {
        return xt(ew, function () {
          return xt(tw, { target: t.dialogRef }, function () {
            return xt(mf, { force: !1 }, function () {
              return Jt({
                props: Ye({}, s, n),
                slot: i,
                attrs: t.$attrs,
                slots: t.$slots,
                visible: t.visible,
                features: Yt.RenderStrategy | Yt.Static,
                name: 'Dialog',
              });
            });
          });
        });
      });
    },
    setup: function (t, n) {
      var r = n.emit,
        s = oe(new Set()),
        i = Ro(),
        o = Z(function () {
          if (t.open === Bs && i !== null) {
            var E;
            return Zt(
              i.value,
              ((E = {}), (E[Rt.Open] = !0), (E[Rt.Closed] = !1), E),
            );
          }
          return t.open;
        }),
        a = t.open !== Bs || i !== null;
      if (!a)
        throw new Error(
          'You forgot to provide an `open` prop to the `Dialog`.',
        );
      if (typeof o.value != 'boolean')
        throw new Error(
          'You provided an `open` prop to the `Dialog`, but the value is not a boolean. Received: ' +
            (o.value === Bs ? void 0 : t.open),
        );
      var l = Z(function () {
          return t.open ? qe.Open : qe.Closed;
        }),
        u = Z(function () {
          return i !== null ? i.value === Rt.Open : l.value === qe.Open;
        }),
        c = oe(null),
        f = oe(l.value === qe.Open);
      yi(function () {
        f.value = l.value === qe.Open;
      });
      var h = 'headlessui-dialog-' + Hs(),
        p = Z(function () {
          return { initialFocus: t.initialFocus };
        });
      ow(s, f, p),
        aw(c, f),
        df(function (E, A) {
          var C;
          return Zt(
            E,
            ((C = {}),
            (C[nr.AddElement] = function () {
              s.value.add(A);
            }),
            (C[nr.RemoveElement] = function () {
              s.value.delete(A);
            }),
            C),
          );
        });
      var v = uw({
          name: 'DialogDescription',
          slot: Z(function () {
            return { open: o.value };
          }),
        }),
        N = oe(null),
        T = {
          titleId: N,
          dialogState: l,
          setTitleId: function (A) {
            N.value !== A && (N.value = A);
          },
          close: function () {
            r('close', !1);
          },
        };
      return (
        Qe(Of, T),
        Vs('mousedown', function (E) {
          var A = E.target;
          l.value === qe.Open &&
            s.value.size === 1 &&
            (ko(s.value, A) ||
              (T.close(),
              $i(function () {
                return A == null ? void 0 : A.focus();
              })));
        }),
        Vs('keydown', function (E) {
          E.key === Us.Escape &&
            l.value === qe.Open &&
            (s.value.size > 1 ||
              (E.preventDefault(), E.stopPropagation(), T.close()));
        }),
        ht(function (E) {
          if (l.value === qe.Open) {
            var A = document.documentElement.style.overflow,
              C = document.documentElement.style.paddingRight,
              $ = window.innerWidth - document.documentElement.clientWidth;
            (document.documentElement.style.overflow = 'hidden'),
              (document.documentElement.style.paddingRight = $ + 'px'),
              E(function () {
                (document.documentElement.style.overflow = A),
                  (document.documentElement.style.paddingRight = C);
              });
          }
        }),
        ht(function (E) {
          if (l.value === qe.Open) {
            var A = Mo(c);
            if (!!A) {
              var C = new IntersectionObserver(function ($) {
                for (var K = Ct($), te; !(te = K()).done; ) {
                  var ie = te.value;
                  ie.boundingClientRect.x === 0 &&
                    ie.boundingClientRect.y === 0 &&
                    ie.boundingClientRect.width === 0 &&
                    ie.boundingClientRect.height === 0 &&
                    T.close();
                }
              });
              C.observe(A),
                E(function () {
                  return C.disconnect();
                });
            }
          }
        }),
        {
          id: h,
          el: c,
          dialogRef: c,
          containers: s,
          dialogState: l,
          titleId: N,
          describedby: v,
          visible: u,
          open: o,
          handleClick: function (A) {
            A.stopPropagation();
          },
        }
      );
    },
  }),
  Pw = ae({
    name: 'DialogOverlay',
    props: { as: { type: [Object, String], default: 'div' } },
    render: function () {
      var t = Rr('DialogOverlay'),
        n = {
          ref: 'el',
          id: this.id,
          'aria-hidden': !0,
          onClick: this.handleClick,
        },
        r = this.$props;
      return Jt({
        props: Ye({}, r, n),
        slot: { open: t.dialogState.value === qe.Open },
        attrs: this.$attrs,
        slots: this.$slots,
        name: 'DialogOverlay',
      });
    },
    setup: function () {
      var t = Rr('DialogOverlay'),
        n = 'headlessui-dialog-overlay-' + Hs();
      return {
        id: n,
        handleClick: function (s) {
          s.target === s.currentTarget &&
            (s.preventDefault(), s.stopPropagation(), t.close());
        },
      };
    },
  }),
  Aw = ae({
    name: 'DialogTitle',
    props: { as: { type: [Object, String], default: 'h2' } },
    render: function () {
      var t = Rr('DialogTitle'),
        n = { id: this.id },
        r = this.$props;
      return Jt({
        props: Ye({}, r, n),
        slot: { open: t.dialogState.value === qe.Open },
        attrs: this.$attrs,
        slots: this.$slots,
        name: 'DialogTitle',
      });
    },
    setup: function () {
      var t = Rr('DialogTitle'),
        n = 'headlessui-dialog-title-' + Hs();
      return (
        rn(function () {
          t.setTitleId(n),
            sn(function () {
              return t.setTitleId(null);
            });
        }),
        { id: n }
      );
    },
  });
function dw(e) {
  var t = { called: !1 };
  return function () {
    if (!t.called) return (t.called = !0), e.apply(void 0, arguments);
  };
}
function Sf() {
  var e = [],
    t = {
      requestAnimationFrame: (function (n) {
        function r() {
          return n.apply(this, arguments);
        }
        return (
          (r.toString = function () {
            return n.toString();
          }),
          r
        );
      })(function () {
        var n = requestAnimationFrame.apply(void 0, arguments);
        t.add(function () {
          return cancelAnimationFrame(n);
        });
      }),
      nextFrame: function () {
        for (var r = arguments.length, s = new Array(r), i = 0; i < r; i++)
          s[i] = arguments[i];
        t.requestAnimationFrame(function () {
          t.requestAnimationFrame.apply(t, s);
        });
      },
      setTimeout: (function (n) {
        function r() {
          return n.apply(this, arguments);
        }
        return (
          (r.toString = function () {
            return n.toString();
          }),
          r
        );
      })(function () {
        var n = setTimeout.apply(void 0, arguments);
        t.add(function () {
          return clearTimeout(n);
        });
      }),
      add: function (r) {
        e.push(r);
      },
      dispose: function () {
        for (var r = Ct(e.splice(0)), s; !(s = r()).done; ) {
          var i = s.value;
          i();
        }
      },
    };
  return t;
}
function $o(e) {
  for (
    var t, n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), s = 1;
    s < n;
    s++
  )
    r[s - 1] = arguments[s];
  e && r.length > 0 && (t = e.classList).add.apply(t, r);
}
function qs(e) {
  for (
    var t, n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), s = 1;
    s < n;
    s++
  )
    r[s - 1] = arguments[s];
  e && r.length > 0 && (t = e.classList).remove.apply(t, r);
}
var Qt;
(function (e) {
  (e.Finished = 'finished'), (e.Cancelled = 'cancelled');
})(Qt || (Qt = {}));
function hw(e, t) {
  var n = Sf();
  if (!e) return n.dispose;
  var r = getComputedStyle(e),
    s = r.transitionDuration,
    i = r.transitionDelay,
    o = [s, i].map(function (u) {
      var c = u
          .split(',')
          .filter(Boolean)
          .map(function (p) {
            return p.includes('ms') ? parseFloat(p) : parseFloat(p) * 1e3;
          })
          .sort(function (p, v) {
            return v - p;
          }),
        f = c[0],
        h = f === void 0 ? 0 : f;
      return h;
    }),
    a = o[0],
    l = o[1];
  return (
    a !== 0
      ? n.setTimeout(function () {
          return t(Qt.Finished);
        }, a + l)
      : t(Qt.Finished),
    n.add(function () {
      return t(Qt.Cancelled);
    }),
    n.dispose
  );
}
function xf(e, t, n, r, s, i) {
  var o = Sf(),
    a = i !== void 0 ? dw(i) : function () {};
  return (
    qs.apply(void 0, [e].concat(s)),
    $o.apply(void 0, [e].concat(t, n)),
    o.nextFrame(function () {
      qs.apply(void 0, [e].concat(n)),
        $o.apply(void 0, [e].concat(r)),
        o.add(
          hw(e, function (l) {
            return (
              qs.apply(void 0, [e].concat(r, t)),
              $o.apply(void 0, [e].concat(s)),
              a(l)
            );
          }),
        );
    }),
    o.add(function () {
      return qs.apply(void 0, [e].concat(t, n, r, s));
    }),
    o.add(function () {
      return a(Qt.Cancelled);
    }),
    o.dispose
  );
}
function Tn(e) {
  return (
    e === void 0 && (e = ''),
    e.split(' ').filter(function (t) {
      return t.trim().length > 1;
    })
  );
}
var Do = Symbol('TransitionContext'),
  ye;
(function (e) {
  (e.Visible = 'visible'), (e.Hidden = 'hidden');
})(ye || (ye = {}));
function mw() {
  return Fe(Do, null) !== null;
}
function pw() {
  var e = Fe(Do, null);
  if (e === null)
    throw new Error(
      'A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.',
    );
  return e;
}
function gw() {
  var e = Fe(Fo, null);
  if (e === null)
    throw new Error(
      'A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.',
    );
  return e;
}
var Fo = Symbol('NestingContext');
function Ws(e) {
  return 'children' in e
    ? Ws(e.children)
    : e.value.filter(function (t) {
        var n = t.state;
        return n === ye.Visible;
      }).length > 0;
}
function _f(e) {
  var t = oe([]),
    n = oe(!1);
  rn(function () {
    return (n.value = !0);
  }),
    sn(function () {
      return (n.value = !1);
    });
  function r(i, o) {
    var a;
    o === void 0 && (o = rt.Hidden);
    var l = t.value.findIndex(function (u) {
      var c = u.id;
      return c === i;
    });
    l !== -1 &&
      (Zt(
        o,
        ((a = {}),
        (a[rt.Unmount] = function () {
          t.value.splice(l, 1);
        }),
        (a[rt.Hidden] = function () {
          t.value[l].state = ye.Hidden;
        }),
        a),
      ),
      !Ws(t) && n.value && (e == null || e()));
  }
  function s(i) {
    var o = t.value.find(function (a) {
      var l = a.id;
      return l === i;
    });
    return (
      o
        ? o.state !== ye.Visible && (o.state = ye.Visible)
        : t.value.push({ id: i, state: ye.Visible }),
      function () {
        return r(i, rt.Unmount);
      }
    );
  }
  return { children: t, register: s, unregister: r };
}
var Cf = Yt.RenderStrategy,
  vw = ae({
    props: {
      as: { type: [Object, String], default: 'div' },
      show: { type: [Boolean], default: null },
      unmount: { type: [Boolean], default: !0 },
      appear: { type: [Boolean], default: !1 },
      enter: { type: [String], default: '' },
      enterFrom: { type: [String], default: '' },
      enterTo: { type: [String], default: '' },
      entered: { type: [String], default: '' },
      leave: { type: [String], default: '' },
      leaveFrom: { type: [String], default: '' },
      leaveTo: { type: [String], default: '' },
    },
    emits: {
      beforeEnter: function () {
        return !0;
      },
      afterEnter: function () {
        return !0;
      },
      beforeLeave: function () {
        return !0;
      },
      afterLeave: function () {
        return !0;
      },
    },
    render: function () {
      var t = this;
      if (this.renderAsRoot)
        return xt(
          yw,
          Ye({}, this.$props, {
            onBeforeEnter: function () {
              return t.$emit('beforeEnter');
            },
            onAfterEnter: function () {
              return t.$emit('afterEnter');
            },
            onBeforeLeave: function () {
              return t.$emit('beforeLeave');
            },
            onAfterLeave: function () {
              return t.$emit('afterLeave');
            },
          }),
          this.$slots,
        );
      var n = this.$props,
        r = En(n, [
          'appear',
          'show',
          'enter',
          'enterFrom',
          'enterTo',
          'entered',
          'leave',
          'leaveFrom',
          'leaveTo',
        ]),
        s = { ref: 'el' },
        i = r;
      return Jt({
        props: Ye({}, i, s),
        slot: {},
        slots: this.$slots,
        attrs: this.$attrs,
        features: Cf,
        visible: this.state === ye.Visible,
        name: 'TransitionChild',
      });
    },
    setup: function (t, n) {
      var r = n.emit;
      if (!mw() && cw()) return { renderAsRoot: !0 };
      var s = oe(null),
        i = oe(ye.Visible),
        o = Z(function () {
          return t.unmount ? rt.Unmount : rt.Hidden;
        }),
        a = pw(),
        l = a.show,
        u = a.appear,
        c = gw(),
        f = c.register,
        h = c.unregister,
        p = { value: !0 },
        v = Hs(),
        N = { value: !1 },
        T = _f(function () {
          N.value || ((i.value = ye.Hidden), h(v), r('afterLeave'));
        });
      rn(function () {
        var Y = f(v);
        sn(Y);
      }),
        ht(function () {
          var Y;
          if (o.value === rt.Hidden && !!v) {
            if (l && i.value !== ye.Visible) {
              i.value = ye.Visible;
              return;
            }
            Zt(
              i.value,
              ((Y = {}),
              (Y[ye.Hidden] = function () {
                return h(v);
              }),
              (Y[ye.Visible] = function () {
                return f(v);
              }),
              Y),
            );
          }
        });
      var E = Tn(t.enter),
        A = Tn(t.enterFrom),
        C = Tn(t.enterTo),
        $ = Tn(t.entered),
        K = Tn(t.leave),
        te = Tn(t.leaveFrom),
        ie = Tn(t.leaveTo);
      rn(function () {
        ht(function () {
          if (i.value === ye.Visible) {
            var Y = Mo(s),
              Me = Y instanceof Comment && Y.data === '';
            if (Me)
              throw new Error(
                'Did you forget to passthrough the `ref` to the actual DOM node?',
              );
          }
        });
      });
      function be(Y) {
        var Me = p.value && !u.value,
          Oe = Mo(s);
        !Oe ||
          !(Oe instanceof HTMLElement) ||
          Me ||
          ((N.value = !0),
          l.value && r('beforeEnter'),
          l.value || r('beforeLeave'),
          Y(
            l.value
              ? xf(Oe, E, A, C, $, function (Je) {
                  (N.value = !1), Je === Qt.Finished && r('afterEnter');
                })
              : xf(Oe, K, te, ie, $, function (Je) {
                  (N.value = !1),
                    Je === Qt.Finished &&
                      (Ws(T) || ((i.value = ye.Hidden), h(v), r('afterLeave')));
                }),
          ));
      }
      return (
        rn(function () {
          kt(
            [l, u],
            function (Y, Me, Oe) {
              be(Oe), (p.value = !1);
            },
            { immediate: !0 },
          );
        }),
        Qe(Fo, T),
        fw(
          Z(function () {
            var Y;
            return Zt(
              i.value,
              ((Y = {}),
              (Y[ye.Visible] = Rt.Open),
              (Y[ye.Hidden] = Rt.Closed),
              Y),
            );
          }),
        ),
        { el: s, renderAsRoot: !1, state: i }
      );
    },
  }),
  yw = ae({
    inheritAttrs: !1,
    props: {
      as: { type: [Object, String], default: 'div' },
      show: { type: [Boolean], default: null },
      unmount: { type: [Boolean], default: !0 },
      appear: { type: [Boolean], default: !1 },
      enter: { type: [String], default: '' },
      enterFrom: { type: [String], default: '' },
      enterTo: { type: [String], default: '' },
      entered: { type: [String], default: '' },
      leave: { type: [String], default: '' },
      leaveFrom: { type: [String], default: '' },
      leaveTo: { type: [String], default: '' },
    },
    emits: {
      beforeEnter: function () {
        return !0;
      },
      afterEnter: function () {
        return !0;
      },
      beforeLeave: function () {
        return !0;
      },
      afterLeave: function () {
        return !0;
      },
    },
    render: function () {
      var t = this,
        n = this.$props,
        r = n.unmount,
        s = En(n, ['show', 'appear', 'unmount']),
        i = { unmount: r };
      return Jt({
        props: Ye({}, i, { as: 'template' }),
        slot: {},
        slots: Ye({}, this.$slots, {
          default: function () {
            return [
              xt(
                vw,
                Ye(
                  {
                    onBeforeEnter: function () {
                      return t.$emit('beforeEnter');
                    },
                    onAfterEnter: function () {
                      return t.$emit('afterEnter');
                    },
                    onBeforeLeave: function () {
                      return t.$emit('beforeLeave');
                    },
                    onAfterLeave: function () {
                      return t.$emit('afterLeave');
                    },
                  },
                  t.$attrs,
                  i,
                  s,
                ),
                t.$slots.default,
              ),
            ];
          },
        }),
        attrs: {},
        features: Cf,
        visible: this.state === ye.Visible,
        name: 'Transition',
      });
    },
    setup: function (t) {
      var n = Ro(),
        r = Z(function () {
          if (t.show === null && n !== null) {
            var l;
            return Zt(
              n.value,
              ((l = {}), (l[Rt.Open] = !0), (l[Rt.Closed] = !1), l),
            );
          }
          return t.show;
        });
      ht(function () {
        if (![!0, !1].includes(r.value))
          throw new Error(
            'A <Transition /> is used but it is missing a `:show="true | false"` prop.',
          );
      });
      var s = oe(r.value ? ye.Visible : ye.Hidden),
        i = _f(function () {
          s.value = ye.Hidden;
        }),
        o = { value: !0 },
        a = {
          show: r,
          appear: Z(function () {
            return t.appear || !o.value;
          }),
        };
      return (
        rn(function () {
          ht(function () {
            (o.value = !1),
              r.value ? (s.value = ye.Visible) : Ws(i) || (s.value = ye.Hidden);
          });
        }),
        Qe(Fo, i),
        Qe(Do, a),
        { state: s, show: r }
      );
    },
  });
function Iw(e, t) {
  return (
    j(),
    je(
      'svg',
      {
        xmlns: 'http://www.w3.org/2000/svg',
        fill: 'none',
        viewBox: '0 0 24 24',
        stroke: 'currentColor',
        'aria-hidden': 'true',
      },
      [
        X('path', {
          'stroke-linecap': 'round',
          'stroke-linejoin': 'round',
          'stroke-width': '2',
          d: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
        }),
      ],
    )
  );
}
export {
  Hc as B,
  B as D,
  ke as F,
  l0 as Q,
  Vc as T,
  oe as a,
  Ne as b,
  pe as c,
  X as d,
  xw as e,
  Ee as f,
  Q as g,
  ur as h,
  bw as i,
  hr as j,
  Cw as k,
  Pw as l,
  Aw as m,
  vw as n,
  j as o,
  yw as p,
  Iw as q,
  Rn as r,
  je as s,
  De as t,
  _w as u,
  Ew as v,
  Se as w,
  Sw as x,
  Ow as y,
  Tw as z,
};
