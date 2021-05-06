import VueRouter from 'vue-router'
import All from './pages/All'
import Music from './pages/Music'
import Videos from './pages/Videos'
import NoSleep from './pages/NoSleep'
import BadUiBattles from './pages/BadUiBattles'
import Search from './pages/Search'

const routes = [
    { path: '/', redirect: '/all' },
    { path: '/all', component: All},
    { path: '/music', component: Music},
    { path: '/videos', component: Videos},
    { path: '/nosleep', component: NoSleep},
    { path: '/baduibattles', component: BadUiBattles},
    { path: '/search', component: Search}
]

const router = new VueRouter({routes});

export default router;