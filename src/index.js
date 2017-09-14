const Moon=require('moonjs');

Moon.component('count-component',{
  data:function(){
    return {
      numCount:10
    };
  },
  methods:{
    increase:function(){
      this.set('numCount',this.get('numCount')+1);
      this.emit('componenteventit');
    }
  },
  template:`<div>
    <p>count:{{numCount}}</p>
    <a href="javascript:;" m-on:click="increase">Increment</a>
  </div>`
});

new Moon({
  el:'#container',
  data:{
    numTotalCount:20
  },
  methods:{
    increaseTotal:function(){
      this.set('numTotalCount',this.get('numTotalCount')+1);
    }
  }
});
