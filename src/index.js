const Moon=require('moonjs');

Moon.component('counter-component',{
  data:function(){
    return {
      count:15816277995
    };
  },
  methods:{
    increment:function(){
      this.set('count',this.get('count')+1);
    }
  },
  template:`<div>
    <p>Count: {{count}}</p>
    <button m-on:click="increment">Increment</button>
  </div>`
});

new Moon({
  el:'#container'
});
