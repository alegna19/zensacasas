
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  },
  {
    path: '/casas',
    component: () => import('pages/Casas.vue')
  },
  {
    path: '/apartamentos',
    component: () => import('pages/Apartamentos.vue')
  },
  {
    path: '/fincas',
    component: () => import('pages/Fincas.vue')
  },
  {
    path: '/terrenos',
    component: () => import('pages/Terrenos.vue')
  },
  {
    path: '/contactenos',
    component: () => import('pages/Contactenos.vue')
  }
]

export default routes
