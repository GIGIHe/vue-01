<template>
    <div>
       
        <!-- 获取price的值也可以使用mapState() -->
        <h3>price: {{$store.state.price}}</h3>
        <counter></counter>
         <h4>total:{{$store. getters.total}}</h4>
        <!-- <h4>total:{{total}}</h4> -->
            </div>
</template>
<script>
        import counter from "./counter";
      
        export default {
        components: {
            counter
        },
        methods:{
           
        }
        // 计算属性的一种方法
        // computed: {
        //     total() {
        //     return this.$store.state.price * this.$store.state.count;
        //     }
        // }
       
        };
 </script>

        <style scoped>
        </style>