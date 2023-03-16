window.onload = function(){
    var seconds =00;
    var tens = 00;
    var appendtens = document.getElementById("tens")
    var appendseconds=document.getElementById("seconds")
    var start = document.getElementById("start")
    var stop = document.getElementById("stop")
    var reset = document.getElementById("reset")
    var Interval;
    var curst = document.querySelector(".curs");
    
    start.onclick = function(){
        clearInterval(Interval);
        Interval = setInterval(startTimer,10);
    }
    stop.onclick = function(){
        clearInterval(Interval);

    window.alert("stopped");

    }
    reset.onclick= function(){
        clearInterval(Interval);
        tens="00";
        seconds="00";
        appendtens.innerHTML=tens;
        appendseconds.innerHTML=seconds;
        
        window.alert("reset done")
    }
    function startTimer(){
        tens++;
        if(tens<= 9){
            appendtens.innerHTML ="0"+tens;
        }
        if(tens >9){
            appendtens.innerHTML = tens;
        }
        if(tens > 99){
            console.log("seconds");
            seconds++;
            appendseconds.innerHTML="0"+seconds;
            tens="0";
            appendtens.innerHTML="0"+0;
        }
        if(seconds>9){
            appendseconds.innerHTML = seconds;
        }
    }
}


var blink_speed = 600; 
var t = setInterval(function () {
    var curst = document.querySelector(".curs");
    curst.style.visibility = (curst.style.visibility == 'hidden' ? '' : 'hidden');
}, blink_speed);