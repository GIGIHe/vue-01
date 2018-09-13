<template>
    <div>
 <input type="text" v-model='counts' @keyup.enter='CHANGE_COUNT(counts)'>
 <!-- <input type="text" v-model='counts' @keyup.enter='change(counts)'> -->
<button @click="add">+</button>
<strong>{{count}}</strong>
<button @click="reduce">-</button>
<button @click="handleAsync">异步操作</button>
    </div>
</template>
<script> 
import {mapState,mapMutations } from 'vuex';
    export default {
        data(){
            return{
                counts:this.$store.state.count
            }
        },
       methods:{
           add(){
               this.$store.commit('ADD');
               console.log(this)
           },
            reduce(){
               this.$store.commit('REDUCE')
           },
        //    change(){
        //        this.$store.commit('CHANGE_COUNT',this.counts)
        //    },
            ... mapMutations(['CHANGE_COUNT']) ,
             handleAsync(){
    //        setTimeout(() => {
    //            this.CHANGE_COUNT(this.counts)
    //        }, 1000);
       this.$store.dispatch('handleAsync',this.counts)
       }, 
 
       } ,
      
       computed:{...mapState(['count'])}
    }
</script>

<style scoped>
button{
    width: 40px;
    height: 20px;
}

</style>