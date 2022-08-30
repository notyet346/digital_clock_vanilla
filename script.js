function displayTime() {
    const time = new Date()
    let h = time.getHours();
    let m = time.getMinutes();
    let s= time.getSeconds();

    let currentTime = h + ":" + m + ":" +  s

    document.getElementById("clock").innerHTML = currentTime;
}
displayTime();

setInterval(displayTime, 1000)