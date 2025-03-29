function busy(){
    var busy = document.getElementById("waitingTime");
    var d = new Date();  
    var h = d.getHours();
    var day = d.getDay();
    var m = d.getMinutes();

    if((day == 0 || day == 6 ) && (h >= 12 && h < 15)){
        busy.innerHTML = "Busy";
    }
    else if((h === 0 && m >= 30) || (h > 0 && h < 6) || (h === 6 && m <= 30)){
        busy.innerHTML = "Closed";
    }
    else{
        busy.innerHTML = "Not Busy";
    }
    console.log("hi1");
}

var locationPage = window.location.href;
if (locationPage.includes("index.html")) {  
    busy();  
}