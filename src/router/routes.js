
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  },
  {
    path: '/casas',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Casas.vue') }
    ]
  },
  {
    path: '/apartamentos',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Apartamentos.vue') }
    ]
  },
  {
    path: '/fincas',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Fincas.vue') }
    ]
  },
  {
    path: '/terrenos',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Terrenos.vue') }
    ]
  },
  {
    path: '/contactenos',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Contactenos.vue') }
    ]
  }
]

export default routes
