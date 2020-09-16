import Vue from 'vue'
import Toasted from 'vue-toasted'

Vue.use(Toasted, {
    iconPack: 'fontawesome',
    duration: 800
})

Vue.toasted.register(
    'defaultSuccess',
     'CORRETO!' ,
    { type: 'success', icon: 'check' }
)

Vue.toasted.register(
    'defaultError',
    'Oops.. está errado.' ,
    { type : 'error', icon : 'times' }
)