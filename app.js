var hrs = 0
var min = 0
var sec = 0
var shhrs = document.getElementById("shhrs")
var shmin = document.getElementById("shmin")
var shsec = document.getElementById("shsec")

var interval
function starttimmer() {
    interval = setInterval(function() {

     sec++
     shsec.innerHTML=sec
     if(sec == 59){
         min++
         sec=0
         shmin.innerHTML =min
         shsec.innerHTML= sec
     }  
     if(min == 59){
        hrs++
        shhrs.innerHTML =hrs
        min=0
        shmin.innerHTML= min

    }   
    }, 1000);
}
function stoptimmer(){
    clearInterval(interval)
}
function resettimmer(){
     hrs = 0
     min = 0
     sec = 0    
    stoptimmer()
    shhrs.innerHTML =hrs 
    shmin.innerHTML =min
    shsec.innerHTML= sec
}

