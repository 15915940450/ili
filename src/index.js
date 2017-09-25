window.Moon=require('moonjs');
const MoonRouter=require('moon-router');
Moon.use(MoonRouter);

Moon.component('root',{
  template:`<div class="root">
    <h2>root組件</h2>
    <router-link to="/hello">say hello!</router-link>
  </div>`
});
Moon.component('hello',{
  template:`<div class="hello">
    <a href="http://www.baidu.com/">去看看root</a>
    <router-link to="/">root</router-link>
  </div>`
});

new Moon({
  el:'#container',
  router:new MoonRouter({
    default:'/',
    map:{
      '/':'root',
      '/hello':'hello'
    },
    mode:'history'
  })
});
