const Moon=require('moonjs');
// console.log(Moon.version);  //0.11.0
new Moon({
  el:'#container',
  data:{
    phoneNumber:15816277995
  },
  methods:{
    increment:function(){
      this.set('phoneNumber',this.get('phoneNumber')+1);
    }
  }
});
