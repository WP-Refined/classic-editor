import {
  o as u,
  c as g,
  w as n,
  V,
  a,
  b as h,
  d as L,
  e as m,
  f as d,
  r as p,
  t as _,
  F as y,
  g as c,
  h as v,
  i as $,
  j as E,
  k as P,
  l as A,
  m as C,
  n as F,
  p as N,
} from './vendor.076dd484.js';
const O = function () {
  const r = document.createElement('link').relList;
  if (r && r.supports && r.supports('modulepreload')) return;
  for (const e of document.querySelectorAll('link[rel="modulepreload"]')) o(e);
  new MutationObserver(e => {
    for (const s of e)
      if (s.type === 'childList')
        for (const t of s.addedNodes)
          t.tagName === 'LINK' && t.rel === 'modulepreload' && o(t);
  }).observe(document, { childList: !0, subtree: !0 });
  function l(e) {
    const s = {};
    return (
      e.integrity && (s.integrity = e.integrity),
      e.referrerpolicy && (s.referrerPolicy = e.referrerpolicy),
      e.crossorigin === 'use-credentials'
        ? (s.credentials = 'include')
        : e.crossorigin === 'anonymous'
        ? (s.credentials = 'omit')
        : (s.credentials = 'same-origin'),
      s
    );
  }
  function o(e) {
    if (e.ep) return;
    e.ep = !0;
    const s = l(e);
    fetch(e.href, s);
  }
};
O();
var R = '/assets/logo.756d19f4.svg',
  b = (i, r) => {
    const l = i.__vccOpts || i;
    for (const [o, e] of r) l[o] = e;
    return l;
  };
const q = {
    name: 'HelloWorld',
    data: () => ({
      ecosystem: [
        {
          text: 'vuetify-loader',
          href: 'https://github.com/vuetifyjs/vuetify-loader',
        },
        { text: 'github', href: 'https://github.com/vuetifyjs/vuetify' },
        {
          text: 'awesome-vuetify',
          href: 'https://github.com/vuetifyjs/awesome-vuetify',
        },
      ],
      importantLinks: [
        { text: 'Chat', href: 'https://community.vuetifyjs.com' },
        {
          text: 'Made with Vuetify',
          href: 'https://madewithvuejs.com/vuetify',
        },
        { text: 'Twitter', href: 'https://twitter.com/vuetifyjs' },
        { text: 'Articles', href: 'https://medium.com/vuetify' },
      ],
      logo: R,
      whatsNext: [
        { text: 'Explore components', href: 'https://vuetifyjs.com' },
        {
          text: 'Roadmap',
          href: 'https://vuetifyjs.com/introduction/roadmap/',
        },
        {
          text: 'Frequently Asked Questions',
          href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions',
        },
      ],
    }),
  },
  H = c(
    'h1',
    { class: 'display-2 font-weight-bold mb-3' },
    [c('div', null, 'Welcome to the Vuetify 3 Alpha')],
    -1,
  ),
  I = c('small', null, 'Vite Preview', -1),
  W = c(
    'p',
    { class: 'subheading font-weight-regular' },
    [
      v(' For help and collaboration with other Vuetify developers, '),
      c('br'),
      v('please join our online '),
      c(
        'a',
        { href: 'https://community.vuetifyjs.com', target: '_blank' },
        'Discord Community',
      ),
    ],
    -1,
  ),
  B = c(
    'h2',
    { class: 'headline font-weight-bold mb-5' },
    " What's next? ",
    -1,
  ),
  D = ['href'],
  S = c(
    'h2',
    { class: 'headline font-weight-bold mb-5' },
    ' Important Links ',
    -1,
  ),
  T = ['href'],
  M = c('h2', { class: 'headline font-weight-bold mb-5' }, ' Ecosystem ', -1),
  K = ['href'];
function Q(i, r, l, o, e, s) {
  return (
    u(),
    g(V, null, {
      default: n(() => [
        a(
          m,
          { class: 'text-center' },
          {
            default: n(() => [
              a(
                h,
                { cols: '12' },
                {
                  default: n(() => [
                    a(
                      L,
                      {
                        src: i.logo,
                        class: 'my-3',
                        contain: '',
                        height: '200',
                      },
                      null,
                      8,
                      ['src'],
                    ),
                  ]),
                  _: 1,
                },
              ),
              a(h, { class: 'mb-4' }, { default: n(() => [H, I, W]), _: 1 }),
              a(
                h,
                { class: 'mb-5', cols: '12' },
                {
                  default: n(() => [
                    B,
                    a(
                      m,
                      { justify: 'center' },
                      {
                        default: n(() => [
                          (u(!0),
                          d(
                            y,
                            null,
                            p(
                              i.whatsNext,
                              (t, f) => (
                                u(),
                                d(
                                  'a',
                                  {
                                    key: f,
                                    href: t.href,
                                    class: 'subheading mx-3',
                                    target: '_blank',
                                  },
                                  _(t.text),
                                  9,
                                  D,
                                )
                              ),
                            ),
                            128,
                          )),
                        ]),
                        _: 1,
                      },
                    ),
                  ]),
                  _: 1,
                },
              ),
              a(
                h,
                { class: 'mb-5', cols: '12' },
                {
                  default: n(() => [
                    S,
                    a(
                      m,
                      { justify: 'center' },
                      {
                        default: n(() => [
                          (u(!0),
                          d(
                            y,
                            null,
                            p(
                              i.importantLinks,
                              (t, f) => (
                                u(),
                                d(
                                  'a',
                                  {
                                    key: f,
                                    href: t.href,
                                    class: 'subheading mx-3',
                                    target: '_blank',
                                  },
                                  _(t.text),
                                  9,
                                  T,
                                )
                              ),
                            ),
                            128,
                          )),
                        ]),
                        _: 1,
                      },
                    ),
                  ]),
                  _: 1,
                },
              ),
              a(
                h,
                { class: 'mb-5', cols: '12' },
                {
                  default: n(() => [
                    M,
                    a(
                      m,
                      { justify: 'center' },
                      {
                        default: n(() => [
                          (u(!0),
                          d(
                            y,
                            null,
                            p(
                              i.ecosystem,
                              (t, f) => (
                                u(),
                                d(
                                  'a',
                                  {
                                    key: f,
                                    href: t.href,
                                    class: 'subheading mx-3',
                                    target: '_blank',
                                  },
                                  _(t.text),
                                  9,
                                  K,
                                )
                              ),
                            ),
                            128,
                          )),
                        ]),
                        _: 1,
                      },
                    ),
                  ]),
                  _: 1,
                },
              ),
            ]),
            _: 1,
          },
        ),
      ]),
      _: 1,
    })
  );
}
var w = b(q, [['render', Q]]);
const z = { name: 'App', components: { HomePage: w }, data: () => ({}) };
function G(i, r, l, o, e, s) {
  const t = $('HomePage');
  return (
    u(),
    g(E, null, {
      default: n(() => [a(P, null, { default: n(() => [a(t)]), _: 1 })]),
      _: 1,
    })
  );
}
var J = b(z, [['render', G]]);
var U = A();
const X = 'modulepreload',
  x = {},
  Y = '/',
  k = function (r, l) {
    return !l || l.length === 0
      ? r()
      : Promise.all(
          l.map(o => {
            if (((o = `${Y}${o}`), o in x)) return;
            x[o] = !0;
            const e = o.endsWith('.css'),
              s = e ? '[rel="stylesheet"]' : '';
            if (document.querySelector(`link[href="${o}"]${s}`)) return;
            const t = document.createElement('link');
            if (
              ((t.rel = e ? 'stylesheet' : X),
              e || ((t.as = 'script'), (t.crossOrigin = '')),
              (t.href = o),
              document.head.appendChild(t),
              e)
            )
              return new Promise((f, j) => {
                t.addEventListener('load', f), t.addEventListener('error', j);
              });
          }),
        ).then(() => r());
  };
async function Z() {
  (
    await k(
      () =>
        import('./webfontloader.f5e2b0ed.js').then(function (r) {
          return r.w;
        }),
      [],
    )
  ).load({
    google: { families: ['Roboto:100,300,400,500,700,900&display=swap'] },
  });
}
var ee = C({
  history: F(),
  routes: [
    { path: '/', component: w },
    {
      path: '/editor',
      component: () =>
        k(
          () => import('./EditorPage.f727f890.js'),
          [
            'assets/EditorPage.f727f890.js',
            'assets/vendor.076dd484.js',
            'assets/vendor.480b400c.css',
          ],
        ),
    },
  ],
});
Z();
N(J).use(ee).use(U).mount('#app');
