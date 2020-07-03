
// 引入css, import indexCss from './public/css/index.css'

// import  './public/css/index.css'
// import indexCss from './public/css/index.css'
// import '@babel/polyfill';

// let p= document.createElement('p')
// p.innerHTML="我爱你赵丽颖"
// document.body.appendChild(p)

// const myFn = function(){
//   console.log('haha')
// }

// myFn()


// import Vue from 'vue'
import Vue from 'vue/dist/vue.esm.js'
import APP from './APP.vue'


new Vue({
  el:"#root",
  //注册app组件，并把app组件进行渲染
  // render:function(h){
  //   return h(APP)
  // },
  // 注册组件
  components:{
    APP
  },


  template : '<APP/>'
})

