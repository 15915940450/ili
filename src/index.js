const $=require('jquery');
const Mock=require('mockjs');

Mock.mock('http://mockjs',{
  'list|1-5':[{
    'id|+1':1,
    'hhj':'@name()',
    'age|1-100':100
  }]
});

$.get('http://mockjs').done(function(data){
  console.log(data);
});
