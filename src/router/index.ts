import { RouteRecordRaw, createRouter, createWebHashHistory } from 'vue-router';
import Tarefas from '../views/TarefasView.vue';
import Projetos from '../views/ProjetosView.vue';
import Formulario from '../views/Projetos/FormularioView.vue';
import Lista from '../views/Projetos/ListaView.vue';

const rotas: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Tarefas',
        component: Tarefas
    },
    {
        path: '/projetos',
        component: Projetos,
        children: [
            {
                path: '',
                name: 'Projetos',
                component: Lista        
            },
            {
                path: 'novo',
                name: 'Novo Projeto',
                component: Formulario
            },
            {
                path: ':id',
                name: 'Editar Projeto',
                component: Formulario,
                props: true
            },
        ]
    },
    
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: rotas
})

export default router;