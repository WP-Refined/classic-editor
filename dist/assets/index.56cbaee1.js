import {
  r as $,
  B as U,
  T as I,
  Q as L,
  a as x,
  b as p,
  o as g,
  c as b,
  d as r,
  w as c,
  t as _,
  e as M,
  D as R,
  f as h,
  g as t,
  u as P,
  h as v,
  i as w,
  v as C,
  F as D,
  j,
  k as B,
  l as O,
  m as E,
  n as A,
  p as K,
  q as N,
  s as V,
  x as F,
  y as H,
  z as q,
} from './vendor.95206e37.js';
const z = function () {
  const n = document.createElement('link').relList;
  if (n && n.supports && n.supports('modulepreload')) return;
  for (const e of document.querySelectorAll('link[rel="modulepreload"]')) s(e);
  new MutationObserver(e => {
    for (const i of e)
      if (i.type === 'childList')
        for (const a of i.addedNodes)
          a.tagName === 'LINK' && a.rel === 'modulepreload' && s(a);
  }).observe(document, { childList: !0, subtree: !0 });
  function u(e) {
    const i = {};
    return (
      e.integrity && (i.integrity = e.integrity),
      e.referrerpolicy && (i.referrerPolicy = e.referrerpolicy),
      e.crossorigin === 'use-credentials'
        ? (i.credentials = 'include')
        : e.crossorigin === 'anonymous'
        ? (i.credentials = 'omit')
        : (i.credentials = 'same-origin'),
      i
    );
  }
  function s(e) {
    if (e.ep) return;
    e.ep = !0;
    const i = u(e);
    fetch(e.href, i);
  }
};
z();
var T = (d, n) => {
  const u = d.__vccOpts || d;
  for (const [s, e] of n) u[s] = e;
  return u;
};
const Q = $({ apiUrl: 'https://wp-preflight.local' }),
  W = {
    components: { TableBody: U, TableHead: I, DataTable: L },
    setup() {
      const d = x([]),
        n = x({}),
        u = x({ search: '' }),
        s = x(!1);
      return {
        tableData: d,
        pagination: n,
        query: u,
        isLoading: s,
        loadData: async o => {
          s.value = !0;
          const m = await M.get(Q.apiUrl + '/wp-json/wp/v2/posts', {
            params: {
              page: o.page <= 0 ? 1 : o.page,
              per_page: o.per_page,
              search: o.search,
            },
          });
          (d.value = m.data),
            (n.value = {
              page: o.page,
              total: Number(m.headers['x-wp-totalpages']),
            }),
            (s.value = !1);
        },
        formatRenderedContent: o => {
          const m = document.createElement('div');
          return (m.innerHTML = o), m.textContent || m.innerText || '';
        },
        formatDate: o => (o ? R.fromISO(o).toFormat('FF') : null),
        formatUrl: o => (o.startsWith('http') ? o : `https://${o}`),
        truncateText: (o, m) =>
          (o && o.length > m
            ? o.slice(0, m).split(' ').slice(0, -1).join(' ')
            : o) + '...',
      };
    },
  },
  G = { class: 'dt-w-1/2 sm:dt-w-full overflow-hidden' },
  J = h('ID'),
  X = h('Title'),
  Y = h('Content'),
  Z = h('Date Updated'),
  tt = h('Date Created'),
  et = t('button', { class: 'rounded' }, 'Edit', -1);
function ot(d, n, u, s, e, i) {
  const a = p('table-head'),
    l = p('table-body'),
    f = p('data-table');
  return (
    g(),
    b('div', G, [
      r(
        f,
        {
          rows: s.tableData,
          pagination: s.pagination,
          query: s.query,
          loading: s.isLoading,
          filter: '',
          onLoadData: s.loadData,
        },
        {
          thead: c(() => [
            r(a, null, { default: c(() => [J]), _: 1 }),
            r(a, null, { default: c(() => [X]), _: 1 }),
            r(a, null, { default: c(() => [Y]), _: 1 }),
            r(a, null, { default: c(() => [Z]), _: 1 }),
            r(a, null, { default: c(() => [tt]), _: 1 }),
            r(a),
          ]),
          tbody: c(({ row: o }) => [
            r(l, { textContent: _(o.id) }, null, 8, ['textContent']),
            r(
              l,
              { textContent: _(s.truncateText(o.title.rendered, 50)) },
              null,
              8,
              ['textContent'],
            ),
            r(
              l,
              {
                textContent: _(
                  s.truncateText(
                    s.formatRenderedContent(o.excerpt.rendered),
                    50,
                  ),
                ),
              },
              null,
              8,
              ['textContent'],
            ),
            r(l, { textContent: _(s.formatDate(o.modified)) }, null, 8, [
              'textContent',
            ]),
            r(l, { textContent: _(s.formatDate(o.date)) }, null, 8, [
              'textContent',
            ]),
            r(l, null, { default: c(() => [et]), _: 1 }),
          ]),
          _: 1,
        },
        8,
        ['rows', 'pagination', 'query', 'loading', 'onLoadData'],
      ),
    ])
  );
}
var nt = T(W, [['render', ot]]);
const st = {
    setup(d) {
      const n = x(''),
        { history: u, undo: s, redo: e } = P(n, { deep: !0, capacity: 5 });
      return (i, a) => (
        g(),
        b(
          D,
          null,
          [
            t('p', null, [
              t(
                'button',
                { onClick: a[0] || (a[0] = (...l) => v(s) && v(s)(...l)) },
                'Undo',
              ),
              t(
                'button',
                { onClick: a[1] || (a[1] = (...l) => v(e) && v(e)(...l)) },
                'Redo',
              ),
            ]),
            w(
              t(
                'textarea',
                { 'onUpdate:modelValue': a[2] || (a[2] = l => (n.value = l)) },
                null,
                512,
              ),
              [[C, n.value]],
            ),
            t('ul', null, [
              (g(!0),
              b(
                D,
                null,
                j(v(u), l => (g(), b('li', { key: l.timestamp }, _(l), 1))),
                128,
              )),
            ]),
          ],
          64,
        )
      );
    },
  },
  at = {
    components: {
      Dialog: B,
      DialogOverlay: O,
      DialogTitle: E,
      TransitionChild: A,
      TransitionRoot: K,
      InformationCircleIcon: N,
    },
    props: { open: { type: Boolean, default: !1, required: !0 } },
    emits: ['update:close'],
    data() {
      return { initialSetup: !1, apiKey: '', apiUrl: '' };
    },
    mounted() {
      this.loadSettings();
    },
    methods: {
      loadSettings() {
        M.get('/settings')
          .then(d => {
            this.$data.initialSetup = d.data.initialSetup;
          })
          .catch(d => {
            throw new Error('Could not reach the internal API. ' + d);
          });
      },
      showEditScreen() {
        this.$data.initialSetup = !0;
      },
      triggerModalClose() {
        this.$emit('update:close', !1);
      },
    },
  },
  lt = {
    class:
      'flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0',
  },
  rt = t(
    'span',
    {
      class: 'hidden sm:inline-block sm:align-middle sm:h-screen',
      'aria-hidden': 'true',
    },
    '\u200B',
    -1,
  ),
  it = {
    class:
      'inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full',
  },
  dt = { class: 'bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4' },
  ct = { class: 'sm:flex sm:items-start' },
  ut = {
    class:
      'mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10',
  },
  mt = { class: 'mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left' },
  pt = h(' Manage Settings '),
  ft = t(
    'div',
    { class: 'mt-2' },
    [
      t(
        'p',
        { class: 'text-sm text-gray-500' },
        ' In order to connect to your website, we will need to retrieve an API Key. ',
      ),
      t(
        'p',
        { class: 'text-sm text-gray-500' },
        ' This is a secure way for us to enable remote editing, and can be restricted further by only providing access to the Posts of your website. ',
      ),
    ],
    -1,
  ),
  _t = { class: 'block' },
  gt = t('span', { class: 'text-gray-500' }, 'API Key', -1),
  ht = { class: 'block' },
  yt = t('span', { class: 'text-gray-500' }, 'URL', -1),
  xt = { class: 'bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse' },
  bt = t(
    'button',
    {
      type: 'button',
      class:
        'w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm',
    },
    ' Save ',
    -1,
  );
function vt(d, n, u, s, e, i) {
  const a = p('DialogOverlay'),
    l = p('TransitionChild'),
    f = p('InformationCircleIcon'),
    o = p('DialogTitle'),
    m = p('Dialog'),
    S = p('TransitionRoot');
  return (
    g(),
    V(
      S,
      { as: 'template', show: u.open },
      {
        default: c(() => [
          r(
            m,
            {
              as: 'div',
              class: 'fixed z-10 inset-0 overflow-y-auto',
              onClose: i.triggerModalClose,
            },
            {
              default: c(() => [
                t('div', lt, [
                  r(
                    l,
                    {
                      as: 'template',
                      enter: 'ease-out duration-300',
                      'enter-from': 'opacity-0',
                      'enter-to': 'opacity-100',
                      leave: 'ease-in duration-200',
                      'leave-from': 'opacity-100',
                      'leave-to': 'opacity-0',
                    },
                    {
                      default: c(() => [
                        r(a, {
                          class:
                            'fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity',
                        }),
                      ]),
                      _: 1,
                    },
                  ),
                  rt,
                  r(
                    l,
                    {
                      as: 'template',
                      enter: 'ease-out duration-300',
                      'enter-from':
                        'opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95',
                      'enter-to': 'opacity-100 translate-y-0 sm:scale-100',
                      leave: 'ease-in duration-200',
                      'leave-from': 'opacity-100 translate-y-0 sm:scale-100',
                      'leave-to':
                        'opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95',
                    },
                    {
                      default: c(() => [
                        t('div', it, [
                          t('div', dt, [
                            t('div', ct, [
                              t('div', ut, [
                                r(f, {
                                  class: 'h-6 w-6 text-blue-600',
                                  'aria-hidden': 'true',
                                }),
                              ]),
                              t('div', mt, [
                                r(
                                  o,
                                  {
                                    as: 'h3',
                                    class:
                                      'text-lg leading-6 font-medium text-gray-900',
                                  },
                                  { default: c(() => [pt]), _: 1 },
                                ),
                                ft,
                              ]),
                            ]),
                            t('div', null, [
                              t('label', _t, [
                                gt,
                                w(
                                  t(
                                    'input',
                                    {
                                      'onUpdate:modelValue':
                                        n[0] || (n[0] = y => (e.apiKey = y)),
                                      type: 'text',
                                      placeholder: 'Enter the API Key..',
                                    },
                                    null,
                                    512,
                                  ),
                                  [[C, e.apiKey]],
                                ),
                              ]),
                              t('label', ht, [
                                yt,
                                w(
                                  t(
                                    'input',
                                    {
                                      'onUpdate:modelValue':
                                        n[1] || (n[1] = y => (e.apiUrl = y)),
                                      type: 'text',
                                      placeholder:
                                        'Enter the URL for your website..',
                                    },
                                    null,
                                    512,
                                  ),
                                  [[C, e.apiUrl]],
                                ),
                              ]),
                            ]),
                          ]),
                          t('div', xt, [
                            bt,
                            t(
                              'button',
                              {
                                ref: 'cancelButtonRef',
                                type: 'button',
                                class:
                                  'mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm',
                                onClick:
                                  n[2] ||
                                  (n[2] = (...y) =>
                                    i.triggerModalClose &&
                                    i.triggerModalClose(...y)),
                              },
                              ' Cancel ',
                              512,
                            ),
                          ]),
                        ]),
                      ]),
                      _: 1,
                    },
                  ),
                ]),
              ]),
              _: 1,
            },
            8,
            ['onClose'],
          ),
        ]),
        _: 1,
      },
      8,
      ['show'],
    )
  );
}
var wt = T(at, [['render', vt]]),
  Ct =
    '/home/brody/repos/wp-refined/wp-classic-editor/dist/assets/logo.03d6d6da.png';
const Dt = {
    components: { SettingsModal: wt },
    data() {
      return { showSettingsModal: !1 };
    },
  },
  Tt = { class: 'mt-8' },
  St = { class: 'container mx-auto md:flex md:items-center' },
  Mt = { class: 'flex justify-between items-center' },
  kt = { class: 'text-5xl' },
  $t = { class: 'flex flex-row md:ml-auto' },
  Ut = t(
    'div',
    null,
    [
      t('img', {
        alt: 'Vue logo',
        src: Ct,
        style: { 'border-radius': '50%', width: '40px', height: '40px' },
      }),
    ],
    -1,
  ),
  It = { class: 'container mt-10 mx-auto' };
function Lt(d, n, u, s, e, i) {
  const a = p('router-view'),
    l = p('SettingsModal');
  return (
    g(),
    b(
      D,
      null,
      [
        t('header', Tt, [
          t('nav', null, [
            t('div', St, [
              t('div', Mt, [t('h1', kt, _(d.$route.name), 1)]),
              t('div', $t, [
                t(
                  'button',
                  {
                    class: 'p-2 lg:px-4 md:mx-2',
                    onClick: n[0] || (n[0] = f => (e.showSettingsModal = !0)),
                  },
                  ' Settings ',
                ),
                Ut,
              ]),
            ]),
          ]),
        ]),
        t('main', It, [
          r(a),
          r(
            l,
            {
              close: e.showSettingsModal,
              'onUpdate:close': n[1] || (n[1] = f => (e.showSettingsModal = f)),
              closeModifiers: { sync: !0 },
              open: e.showSettingsModal,
            },
            null,
            8,
            ['close', 'open'],
          ),
        ]),
      ],
      64,
    )
  );
}
var Rt = T(Dt, [['render', Lt]]);
const Pt = [
    { path: '/', name: 'Posts', component: nt },
    { path: '/create', name: 'Create Post', component: st },
  ],
  jt = F({ history: H(), routes: Pt }),
  k = q(Rt);
k.use(jt);
k.mount('#app');
