global.Moon=require('moonjs');
const MoonRouter=require('moon-router');
Moon.use(MoonRouter);

const router=new MoonRouter({
  default:'/',
  map:{
    '/':'root',
    '/hello':'hello'
  }
});




Moon.component('root', {
  template: `<div>
    <h1>Welcome to "/"</h1>
    <router-link to="/hello">To /hello</router-link>
  </div>`
});

Moon.component('hello', {
  template: `<div>
    <h1>You have Reached "/hello"</h1>
    <router-link to="/">Back Home</router-link>
  </div>`
});


new Moon({
  el:'#container',
  router:router
});
