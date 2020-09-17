<template>
   <div class="game-wrapper">
       <ListenAndLearning/>
   </div>
</template>

<script>
import ListenAndLearning from './ListenAndLearning'
export default {
    name: 'Game',
    components: {
        ListenAndLearning
    },
    data: ()=> ({
        num: 1
    }),
    methods: {

    },mounted(){

    }

}
</script>

<style>

</style>