const Moon=require('moonjs');

Moon.component('slot-component',{
  template:`<div>
    <slot name="container__h1"></slot>
    <slot name="container__p"></slot>
    <slot name="container__h6"></slot>
  </div>`
});

new Moon({
  el:'#container',
  data:{
    myname:'Thilina fang',
    time:'2017-09-12T22:22'
  }
});
