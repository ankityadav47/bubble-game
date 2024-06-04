function bubble(){
  var generator = "";
  for(var i=1;i<=153;i++){
    var rn = Math.floor(Math.random()*10)
    generator +=  `<div class="bubble">${rn}</div>`;
  }
  document.querySelector('.pbtm').innerHTML = generator;
  
}
var timer = 30;
function runtimer(){
  var timerint = setInterval(function(){
    if( timer>0){
      timer--;
      document.querySelector("#timerval").textContent = timer;
    } else {
      clearInterval(timerint);
      document.querySelector(".pbtm").innerHTML="<img src='https://media.tenor.com/nPtGARxtb78AAAAi/league-of-legends-riot-games.gif' alt='My cool gif'>";
    }
    
  }, 1000);
}
var hitrn;
function getnewhit(){
  hitrn = Math.floor(Math.random()*10);
  document.querySelector("#hitval").textContent = hitrn;
}
var scr =0;
function score(){
  scr += 10;
  document.querySelector("#scoreval").textContent = scr;
}
document.querySelector(".pbtm").addEventListener("click",function(detail){
var clickednum=Number(detail.target.textContent);
if(clickednum === hitrn){
score();

bubble();

getnewhit();
}
});

runtimer();
getnewhit();
bubble();