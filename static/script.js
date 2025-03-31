// WAITING TIMES
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
}

var locationPage = window.location.href;
if (locationPage.includes("index.html")) {  
    busy();  
    // updateElement();
}

// INFOMRATION TO KNOW TODAY
// function updateElement(){
//     var info = document.getElementById("infoForToday");
//     var arrayOfInfo = ["The weather can change, make sure to bring a coat!", "Check out our gift shop for fun souvenirs!", "We offer tours for high schools!", "We offer a fresh view of Pittsburgh from our cable car!"];
//     var randomInfo = arrayOfInfo[Math.floor(Math.random() * arrayOfInfo.length)];
//     info.innerHTML = randomInfo;
// }
setInterval(getTemperature, 3600000); //found documentaiton for this
getTemperature();
// updateElement();


//JQUERY FOR INTERACTIVE PIECE (HOME PAGE)
$(document).ready(function(){
    $("div.gallery").hover(function(){
      $(this).css("border", "1px solid #777");
      }, function(){
      $(this).css("border", "1px solid #ccc");
    });
});


// API - read documentation for information
function getTemperature() {
    var url = `http://api.weatherstack.com/current?access_key=2b768f8f17b7869549fe38dba51c48c9&query=Pittsburgh`;
    var info = document.getElementById("infoForToday");

    fetch(url)
        .then(response => response.json()) 
        .then(data => {
            const temperature = data.current.temperature; 
            temperatureF = convertToFahrenheit(temperature);
            info.innerText = `Current temperature in Pittsburgh: ${temperatureF}°F`;
        })
        .catch(error => {
            console.error("Error fetching weather data:", error);
            info.innerText = "Oops! Something went wrong. Try again.";
        });
}

function convertToFahrenheit(celsius) {
    return celsius * 9 / 5 + 32;
}
