import Vue from 'vue'
import VueRouter from 'vue-router'

import Register from '../components/Register.vue'
import Login from '../components/Login.vue'
import MenuContent from '../components/MenuContent.vue'
import Start from '../components/Start.vue'
import Home from '../components/Home.vue'
import knowledgeTest from '../components/knowledgeTest.vue'
import Game from '../components/Game.vue'

Vue.use(VueRouter)

const routes = [{
    name: 'home',
    path: '/',
    components: {
        a: Home
    },
    children: [{
        path: '/',
        components: {
            b: MenuContent 
        }
    },{
        name: 'Register',
        path: '/register',
        components: {
            b: Register 
        }
    },{
        name: 'Login',
        path: '/login',
        components: {
            b: Login 
        }
    },{
        name: 'Start',
        path: '/start',
        components: {
            b: Start 
        }
    }]
},{
    name: 'knowledgeTest',
    path: '/knowledgeTest',
    components: {
        a: knowledgeTest
    } 
},{
    name: 'game',
    path: '/game',
    components: {
        a: Game
    }   
}]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router