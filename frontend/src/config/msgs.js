import Vue from 'vue'
import Toasted from 'vue-toasted'

Vue.use(Toasted, {
    iconPack: 'fontawesome',
    duration: 600
})

Vue.toasted.register(
    'defaultSuccess',
     'ACERTOU!' ,
    { type: 'success', icon: 'check' }
)

Vue.toasted.register(
    'defaultError',
    'Oops.. está errado.' ,
    { type : 'error', icon : 'times' }
)