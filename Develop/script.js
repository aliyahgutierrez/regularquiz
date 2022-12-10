document.getElementById("gameStart").addEventListener("click", function(){
    var timeleft = 60; 

    var downloadTimer = setInterval (function function1(){
        document.getElementById("countdown").innerHTML = timeleft + "&nbsp"+"TIME REMAINING";

        timeleft -= 1;
        if (timeleft <= 0){
            clearInterval(downloadTimer);
            document.getElementById("countdown").innerHTML = "GAME OVER"
        }
    }, 1000);
});