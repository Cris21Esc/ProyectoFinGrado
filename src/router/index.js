import { createRouter, createWebHistory } from "vue-router";
import paginaInicio from "@/paginas/paginaInicio.vue";
import paginaListar from "@/paginas/paginaListar.vue";
import paginaCombate from "@/paginas/paginaCombate.vue";


const router = createRouter({
    history: createWebHistory( import.meta.env.BASE_URL),
    routes: [
        {   path: '/', 
            name:'inicio',
            component: paginaInicio, 
        },  
        {   path: '/listado', 
            name:'listar',
            component: paginaListar,
        },
        {   path: '/combate', 
            name:'combate',
            component: paginaCombate,
        },
        {
            path: '/:pathMatch(.*)*',
            redirect:() => ({ name:'inicio'})
        }
    ]

});

export default router;