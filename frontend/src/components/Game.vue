<template>
   <div class="game-wrapper">
       <ListenAndLearning v-if="renderLearn"/>
       <Dialog v-if="renderDialog"/>
       <Translate v-if="renderTranslate"/>

   </div>
</template>

<script>
import ListenAndLearning from './ListenAndLearning'
import Dialog from './Dialog'
import { mapState } from 'vuex'
import Translate from './Translate'

export default {
    name: 'Game',
    components: {
        ListenAndLearning,
        Dialog,
        Translate,

    },
    computed:  mapState(['question']),
       
    data: ()=> ({
        renderLearn: false,
        renderDialog: false,
        renderTranslate: false,
    }),
    methods: {
        questionTesteLearn(){
           if(this.question === 'Learn'){
               this.renderLearn = true
           }
        }
    }, mounted(){
        if(this.question === 'Lesten'){
               this.renderLearn = true
               this.renderDialog = false
                this.renderTranslate = false
        }
        if(this.question === 'Dialog'){
               this.renderLearn = false
               this.renderDialog = true
                this.renderTranslate = false
        }
        if(this.question === 'Translate'){
               this.renderLearn = false
               this.renderDialog = false
                this.renderTranslate = true
        }
    }
}
</script>

<style>

</style>