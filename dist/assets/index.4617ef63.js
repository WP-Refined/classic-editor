import {
  r as w,
  B as T,
  T as L,
  Q as $,
  a as f,
  b as v,
  o as _,
  c as h,
  d as i,
  w as p,
  t as m,
  e as k,
  D as N,
  f as g,
  g as s,
  u as U,
  h as x,
  i as B,
  v as F,
  F as b,
  j as O,
  k as R,
  l as j,
  m as H,
} from './vendor.017d7c9b.js';
const P = function () {
  const l = document.createElement('link').relList;
  if (l && l.supports && l.supports('modulepreload')) return;
  for (const e of document.querySelectorAll('link[rel="modulepreload"]')) o(e);
  new MutationObserver(e => {
    for (const r of e)
      if (r.type === 'childList')
        for (const n of r.addedNodes)
          n.tagName === 'LINK' && n.rel === 'modulepreload' && o(n);
  }).observe(document, { childList: !0, subtree: !0 });
  function d(e) {
    const r = {};
    return (
      e.integrity && (r.integrity = e.integrity),
      e.referrerpolicy && (r.referrerPolicy = e.referrerpolicy),
      e.crossorigin === 'use-credentials'
        ? (r.credentials = 'include')
        : e.crossorigin === 'anonymous'
        ? (r.credentials = 'omit')
        : (r.credentials = 'same-origin'),
      r
    );
  }
  function o(e) {
    if (e.ep) return;
    e.ep = !0;
    const r = d(e);
    fetch(e.href, r);
  }
};
P();
var C = (c, l) => {
  const d = c.__vccOpts || c;
  for (const [o, e] of l) d[o] = e;
  return d;
};
const V = w({ apiUrl: 'https://stayathomemum.com.au' }),
  A = {
    components: { TableBody: T, TableHead: L, DataTable: $ },
    setup() {
      const c = f([]),
        l = f({}),
        d = f({ search: '' }),
        o = f(!1);
      return {
        tableData: c,
        pagination: l,
        query: d,
        isLoading: o,
        loadData: async t => {
          o.value = !0;
          const u = await k.get(V.apiUrl + '/wp-json/wp/v2/posts', {
            params: {
              page: t.page <= 0 ? 1 : t.page,
              per_page: t.per_page,
              search: t.search,
            },
          });
          console.log('response', u),
            (c.value = u.data),
            (l.value = {
              page: t.page,
              total: Number(u.headers['x-wp-totalpages']),
            }),
            (o.value = !1);
        },
        formatRenderedContent: t => {
          const u = document.createElement('div');
          return (u.innerHTML = t), u.textContent || u.innerText || '';
        },
        formatDate: t => (t ? N.fromISO(t).toFormat('FF') : null),
        formatUrl: t => (t.startsWith('http') ? t : `https://${t}`),
        truncateText: (t, u) =>
          (t && t.length > u
            ? t.slice(0, u).split(' ').slice(0, -1).join(' ')
            : t) + '...',
      };
    },
  },
  E = { class: 'dt-w-1/2 sm:dt-w-full overflow-hidden' },
  S = g('ID'),
  I = g('Title'),
  M = g('Content'),
  Q = g('Date Updated'),
  W = g('Date Created'),
  q = s('button', { class: 'rounded' }, 'Edit', -1);
function K(c, l, d, o, e, r) {
  const n = v('table-head'),
    a = v('table-body'),
    y = v('data-table');
  return (
    _(),
    h('div', E, [
      i(
        y,
        {
          rows: o.tableData,
          pagination: o.pagination,
          query: o.query,
          loading: o.isLoading,
          filter: '',
          onLoadData: o.loadData,
        },
        {
          thead: p(() => [
            i(n, null, { default: p(() => [S]), _: 1 }),
            i(n, null, { default: p(() => [I]), _: 1 }),
            i(n, null, { default: p(() => [M]), _: 1 }),
            i(n, null, { default: p(() => [Q]), _: 1 }),
            i(n, null, { default: p(() => [W]), _: 1 }),
            i(n),
          ]),
          tbody: p(({ row: t }) => [
            i(a, { textContent: m(t.id) }, null, 8, ['textContent']),
            i(a, { textContent: m(t.title.rendered) }, null, 8, [
              'textContent',
            ]),
            i(
              a,
              {
                textContent: m(
                  o.truncateText(
                    o.formatRenderedContent(t.excerpt.rendered),
                    50,
                  ),
                ),
              },
              null,
              8,
              ['textContent'],
            ),
            i(a, { textContent: m(o.formatDate(t.modified)) }, null, 8, [
              'textContent',
            ]),
            i(a, { textContent: m(o.formatDate(t.date)) }, null, 8, [
              'textContent',
            ]),
            i(a, null, { default: p(() => [q]), _: 1 }),
          ]),
          _: 1,
        },
        8,
        ['rows', 'pagination', 'query', 'loading', 'onLoadData'],
      ),
    ])
  );
}
var z = C(A, [['render', K]]);
const G = {
  setup(c) {
    const l = f(''),
      { history: d, undo: o, redo: e } = U(l, { deep: !0, capacity: 5 });
    return (r, n) => (
      _(),
      h(
        b,
        null,
        [
          s('p', null, [
            s(
              'button',
              { onClick: n[0] || (n[0] = (...a) => x(o) && x(o)(...a)) },
              'Undo',
            ),
            s(
              'button',
              { onClick: n[1] || (n[1] = (...a) => x(e) && x(e)(...a)) },
              'Redo',
            ),
          ]),
          B(
            s(
              'textarea',
              { 'onUpdate:modelValue': n[2] || (n[2] = a => (l.value = a)) },
              null,
              512,
            ),
            [[F, l.value]],
          ),
          s('ul', null, [
            (_(!0),
            h(
              b,
              null,
              O(x(d), a => (_(), h('li', { key: a.timestamp }, m(a), 1))),
              128,
            )),
          ]),
        ],
        64,
      )
    );
  },
};
var J =
  '/home/brody/repos/wp-refined/wp-classic-editor/dist/assets/logo.03d6d6da.png';
const X = { name: 'App' },
  Y = { class: 'mt-8' },
  Z = { class: 'container mx-auto md:flex md:items-center' },
  tt = { class: 'flex justify-between items-center' },
  et = { class: 'text-5xl' },
  ot = s(
    'div',
    { class: 'flex flex-row md:ml-auto' },
    [
      s('a', { href: '#', class: 'p-2 lg:px-4 md:mx-2' }, 'Settings'),
      s('div', null, [
        s('img', {
          alt: 'Vue logo',
          src: J,
          style: { 'border-radius': '50%', width: '40px', height: '40px' },
        }),
      ]),
    ],
    -1,
  ),
  nt = { class: 'container mt-10 mx-auto' };
function at(c, l, d, o, e, r) {
  const n = v('router-view');
  return (
    _(),
    h(
      b,
      null,
      [
        s('header', Y, [
          s('nav', null, [
            s('div', Z, [s('div', tt, [s('h1', et, m(c.$route.name), 1)]), ot]),
          ]),
        ]),
        s('main', nt, [i(n)]),
      ],
      64,
    )
  );
}
var st = C(X, [['render', at]]);
const rt = [
    { path: '/', name: 'Posts', component: z },
    { path: '/create', name: 'Create Post', component: G },
  ],
  lt = R({ history: j(), routes: rt }),
  D = H(st);
D.use(lt);
D.mount('#app');
