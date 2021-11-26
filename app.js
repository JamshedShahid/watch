var hou = 0;
var min = 0;
var sec = 0;
var milsec = 0;

var hour =document.getElementById("st")
var mi =document.getElementById("t")
var se =document.getElementById("s")
var  milse =document.getElementById("bta")
 var intr;

 function timer(){
     milsec++
     milse.innerHTML=milsec
     if(milsec==100){
         sec++
           se.innerHTML=sec
           milsec=0
     } else if(sec==60){
         min++
         mi.innerHTML=min
         sec=0
     }else if(min==60){
         hou++
         hour.innerHTML=hou
         min=0
     }

 }
 function star(){
     var str =document.getElementById("str")
     intr=setInterval(timer,10)
     str.disabled=true
 }
 function stop(){
    var str =document.getElementById("str")
    clearInterval(intr)
    str.disabled=false
    
 }

 function res(){
    clearInterval(intr)
    hou=0
    min=0
    sec=0
    milsec=0
    hour.innerHTML=0
    mi.innerHTML=0
     se.innerHTML=0
     milse.innerHTML=0
 }
 function comi(){
     alert("Comming Soon")
 }