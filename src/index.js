global.Moon=require('moonjs');

var test=new Moon({
  el:'#container',
  data:{
    msg:99
  },
  computed:{
    msg2:{
      get:function(){
        return this.get('msg')+6;
      }
    }
  }
});

test.set('msg',969);
