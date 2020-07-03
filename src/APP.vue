<template>
    <div>
       <!-- //标签可以简写成单标签 -->
    <MyButton/>
    <MyButton/>
    <MyButton/>
    <MyButton/>
    </div>
</template>




<script>
// 引入组件对象
import MyButton from './components/MyButton.vue'
// 注册组件,起名为MyButton
// Vue.component('MyButton',MyButton)
export default {
   name:'',
   components:{
     MyButton
   },
    data() {
        return {

        };
    },
    created() {

    },
    mounted() {

    },
    methods: {

    }
};
</script>

<style scoped lang="less">

</style>
