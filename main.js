/*document.querySelector('.search-link').addEventListener('click', () => {
  document.querySelector('.container').classList.toggle('open');
});*/
$(document).ready(function(){
	
})
var ldelay;
var betw={};
document.querySelector('.search-link').addEventListener('touchstart', function(event) {
event.preventDefault();
event.stopPropagation();
ldelay=new Date();
betw.x=event.changedTouches[0].pageX;
betw.y=event.changedTouches[0].pageY;
}, false);
/*Ловим отпускание пальца*/
document.querySelector('.search-link').addEventListener('touchend', function(event) {
var pdelay=new Date();
if(event.changedTouches[0].pageX==betw.x &&
event.changedTouches[0].pageY==betw.y &&
(pdelay.getTime()-ldelay.getTime())>800){
alert('222222');
}
}, false);