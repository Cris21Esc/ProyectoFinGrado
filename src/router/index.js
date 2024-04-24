import { createRouter, createWebHistory } from "vue-router";
import paginaInicio from "@/paginas/paginaInicio.vue";
import paginaListar from "@/paginas/paginaListar.vue";
import paginaPokedex from "@/paginas/paginaPokedex.vue";


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
        {   path: '/pokedex', 
            name:'pokedex',
            component: paginaPokedex,
        },
        {
            path: '/:pathMatch(.*)*',
            redirect:() => ({ name:'inicio'})
        }
    ]

});

export default router;