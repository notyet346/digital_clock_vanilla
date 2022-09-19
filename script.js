function displayTime() {
    const time = new Date()
    let h = time.getHours();
    let m = time.getMinutes();
    let s= time.getSeconds();
    let period = "AM"

    if ( h >= 12){
        period = "PM";
    }
    
    if (h < 10){
        h = "0" + h;
    }
    if (m < 10){
        m = "0" + m;
    }
    if (s < 10){
        s = "0" + s;
    }
    let currentTime = h + ":" + m + ":" +  s + period

    document.getElementById("clock").innerHTML = currentTime;
}
displayTime();

setInterval(displayTime, 1000)