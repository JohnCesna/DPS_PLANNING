
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'login', component: () => import('pages/Login.vue') },
      { path: 'admin', component: () => import('pages/Admin.vue') },
      { path: 'gestionnaire', component: () => import('pages/Gestionnaire.vue') },
      { path: 'planning', component: () => import('pages/Planning.vue') },
      { path: 'recherche', component: () => import('pages/Recherche.vue') },
      { path: 'encours', component: () => import('pages/Encours.vue') },
      { path: 'finis', component: () => import('pages/Finis.vue') }      
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
