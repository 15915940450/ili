const Moon=require('moonjs');

Moon.component('counter-component',{
  data:function(){
    return {
      count:9
    };
  },
  methods:{
    increment:function(){
      this.set('count',this.get('count')+1);
      this.emit('it');  //m-on:it="incrementTotal"
    }
  },
  template:`<div>
    <p>Count: {{count}}</p>
    <button m-on:click="increment">Increment</button>
  </div>`
});

//container---counter-component

new Moon({
  el:'#container',
  data:{
    total:18
  },
  methods:{
    incrementTotal:function(){
      this.set('total',this.get('total')+1);
    }
  }
});
