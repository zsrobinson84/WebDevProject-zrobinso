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
function updateElement(){
    var info = document.getElementById("infoForToday");
    var arrayOfInfo = ["The weather can change, make sure to bring a coat!", "Check out our gift shop for fun souvenirs!", "We offer tours for high schools!", "We offer a fresh view of Pittsburgh from our cable car!"];
    var randomInfo = arrayOfInfo[Math.floor(Math.random() * arrayOfInfo.length)];
    info.innerHTML = randomInfo;
}
setInterval(updateElement, 3600000); //found documentaiton for this
updateElement();

//form validation
function validate(){
    var name = document.getElementById("name");
    var lastName = document.getElementById("last");
    var email = document.getElementById("email");
    var phone = document.getElementById("phone");
    var zip = document.getElementById("zip");
    var msg = document.getElementById("ValidateMsg");
    if(!name.checkValidity() || !lastName.checkValidity() || !email.checkValidity() || !phone.checkValidity() || !zip.checkValidity()){
        msg.innerHTML = "Please fill out the form correctly so I can get back to you.";
    }
}
