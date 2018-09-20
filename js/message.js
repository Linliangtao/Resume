//初始化
var APP_ID = 'R7ODJzbG8zWSMala1WfmXWM3-gzGzoHsz';
var APP_KEY = 'Umuc0mzenwPFCfrQnWiNNOhG';

AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});
console.log("运行成功")


var query = new AV.Query('Message');
query.find()
  .then(
    function (messages) {
      let array = messages.map((item) => item.attributes)
      array.forEach ((item)=> {
        let li = document.createElement('li')
        li.innerText = item.content
        let messageList = document.querySelector('#messageList')
        messageList.appendChild(li)
      })
    }
  )


let myForm = document.querySelector('#postMessageForm')

myForm.addEventListener('submit',function(e){
   e.preventDefault() //阻止页面刷新
   let conctent = myForm.querySelector('input[name=content]').value
   let Message = AV.Object.extend('Message');
   var message = new Message();
   message.save({
    'content':conctent
  }).then(function(object) {
    window.location.reload()
    console.log(Object)
  })
})



