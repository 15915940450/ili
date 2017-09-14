global.Moon = require('moonjs');

new Moon({
  el:'#container',
  data:{
    objAllEBike:[{
      sn:100121,
      mac:'09-54-11-2d-c5-22',
      date:'2017-9-30',
      area:'宝安',
      state:'已入库'
    },{
      sn:100126,
      mac:'09-54-11-2d-c5-26',
      date:'2017-9-26',
      area:'南山',
      state:'已出库'
    },{
      sn:100129,
      mac:'09-54-11-2d-c5-29',
      date:'2017-9-29',
      area:'龙岗',
      state:'有故障'
    }]
  }
});
