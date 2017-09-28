const Mock=require('mockjs');
const $=require('jquery');

Mock.mock('http://thilina-at-immotor',{
  'jsonBatteryStation|0-9':[{
    'stationID':'@string("upper", 2)@id()',
    'hasBattery|0-10':10,
    'location':'深圳@county()@cword(2,5)大道@natural(2,200)号',
    'll':'@float(113, 114, 6, 6),@float(22, 22, 6, 6)',
    'firmwareVersion':'V @natural(0, 10).@natural(0, 10).@natural(0, 10)',
    'hardwareVersion':'V @natural(0, 10).@natural(0, 10).@natural(0, 10)'
  }]
});

$.ajax({
  url:'http://thilina-at-immotor',
  method:'GET',
  dataType:'json',
  error:function(err){
    console.log(err);
  }
}).done(function(jsonData){
  console.log(jsonData);
});
