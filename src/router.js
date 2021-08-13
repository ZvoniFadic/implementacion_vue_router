import Vue from 'vue'
import Router from 'vue-router'

import Articulo from './components/Articulo.vue'
import Contacto from './components/Contacto.vue'
import Portada from './components/Portada.vue'
import Post from './components/Post.vue'
import SobreMi from './components/SobreMi.vue'
import NotFound from './components/NotFound.vue'


Vue.use(Router)

export default new Router({
    node:'history',
    routes:[
        {
            path:'/',
            component:Portada,
            name:'portada'
        },
        {
            path:'/contacto',
            component:Contacto,
            name:'contacto'
        },
        {
            path:'/sobremi',
            component:SobreMi,
            name:'sobremi'
        },
        {
            path:'/post',
            component:Post,
            name:'post',
            children:[
                {
                    path:':articulo',
                    component: Articulo,
                    name:'articulo'
                },
            ]
            
        },
        {
            path:'*',
            component: NotFound,
        },
    ]
})
