!function(){
  //初始化
  var view = document.querySelector('section.message')

  var controller = {
    view:null,
    messageList:null,
    init:function(view){
      this.view = view
      this.messageList = view.querySelector('#messageList')
      this.form = view.querySelector('form')
      this.initAV()
      this.loadMessages()
      this.bindEvnets()
    },
    initAV:function(){
      var APP_ID = 'R7ODJzbG8zWSMala1WfmXWM3-gzGzoHsz';
      var APP_KEY = 'Umuc0mzenwPFCfrQnWiNNOhG';
      AV.init({ appId: APP_ID,appKey: APP_KEY });
    },
    loadMessages:function(){
      var query = new AV.Query('Message');
      query.find()
        .then(
          (messages) =>{
            let array = messages.map((item) => item.attributes)
            array.forEach ((item)=> {
              let li = document.createElement('li')
              li.innerText = `${item.name}: ${item.content}`
              this.messageList.appendChild(li)
            })
          }
        )
    },
    bindEvnets:function(){   
        this.form.addEventListener('submit',function(e){
        e.preventDefault() //阻止页面刷新
        this.saveMessage()
      })
    },    
    saveMessage:function(){
        let myForm = this.form
        let content = myForm.querySelector('input[name=content]').value
        let name = myForm.querySelector('input[name=name]').value   
        let Message = AV.Object.extend('Message');
        var message = new Message();
        message.save({
          'name':name,
          'content':content
        }).then(function(object) {
          let li = document.createElement('li')
          li.innerText = `${object.attributes.name}: ${object.attributes.content}`
          let messageList = document.querySelector('#messageList')
          myForm.querySelector('input[name=content]').value = ''
          messageList.appendChild(li)
        })     
    }
  }
  controller.init(view)

}.call()




