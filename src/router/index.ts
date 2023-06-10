import { RouteRecordRaw, createRouter, createWebHashHistory } from 'vue-router';
import Tarefas from '../views/TarefasView.vue';
import Projetos from '../views/ProjetosView.vue';

const rotas: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Tarefas',
        component: Tarefas
    },
    {
        path: '/projetos',
        name: 'Projetos',
        component: Projetos
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: rotas
})

export default router;