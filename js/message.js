//初始化
var APP_ID = 'R7ODJzbG8zWSMala1WfmXWM3-gzGzoHsz';
var APP_KEY = 'Umuc0mzenwPFCfrQnWiNNOhG';

AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});
console.log("运行成功")

//验证
var TestObject = AV.Object.extend('TestObject');
var testObject = new TestObject();
testObject.save({
  words: 'Hello World!'
}).then(function(object) {
  alert('LeanCloud 成功！');
})