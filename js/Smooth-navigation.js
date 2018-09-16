let aTags = document.querySelectorAll('nav.menu > ul > li > a')
  
function animate(time){
 requestAnimationFrame(animate);
 TWEEN.update(time);
}
 requestAnimationFrame(animate);

 
for(let i=0; i<liTags.length; i++){
 aTags[i].onclick = function(x){
 x.preventDefault()      //阻止a 标签默认动作
 let a = x.currentTarget
 let href = a.getAttribute('href') //'#siteAbout'，浏览器不做任何处理
 let element = document.querySelector(href)
 let top = element.offsetTop
   //
 let currentTop = window.scrollY
 let targetTop = top -80
 let s =targetTop - currentTop
 var coords = { y: currentTop}
 var t = Math.abs ((s/100)*300)
 if (t>500) { t = 500}
 var tween = new TWEEN.Tween(coords)
     .to( { y:targetTop}, t)
     .easing(TWEEN.Easing.Quadratic.InOut)
     .onUpdate(function(){
       window.scrollTo(0,coords.y)
     })
     .start();
}
}