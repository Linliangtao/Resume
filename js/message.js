//初始化
var APP_ID = 'R7ODJzbG8zWSMala1WfmXWM3-gzGzoHsz';
var APP_KEY = 'Umuc0mzenwPFCfrQnWiNNOhG';

AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});
console.log("运行成功")

let myForm = document.querySelector('#postMessageForm')

myForm.addEventListener('submit',function(e){
   e.preventDefault() //阻止页面刷新
   let conctent = myForm.querySelector('input[name=content]').value
   let Message = AV.Object.extend('Message');
   var message = new Message();
   message.save({
    'content':conctent
  }).then(function(object) {
    alert('存入成功!')
    console.log(Object)
  })
})



/*
//验证
//创建TestObject 表
var TestObject = AV.Object.extend('message');
//在表中创建一行数据
var testObject = new TestObject();
//数据内容是 words: 'Hello World!'，之后保存
//如果成功，打印出alert
testObject.save({
  words: 'Hello World!'
}).then(function(object) {
  alert('LeanCloud 成功！');
})
*/