/*document.querySelector('.search-link').addEventListener('click', () => {
  document.querySelector('.container').classList.toggle('open');
});*/
$(document).ready(function(){
	
})
var ldelay;
var betw={};
document.querySelector('.box-black').addEventListener('touchstart', function(event) {
//event.preventDefault();
//event.stopPropagation();

ldelay=new Date();

betw.x=event.changedTouches[0].pageX;
betw.y=event.changedTouches[0].pageY;
}, false);
/*Ловим отпускание пальца*/
document.querySelector('.box-black').addEventListener('touchend', function(event) {
var pdelay=new Date();

if(
(pdelay.getTime()-ldelay.getTime())>500){
alert('222222');
}
}, false);