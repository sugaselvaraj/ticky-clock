var date, hr, min, sec;
function clock() {
    date = new Date();
    hr = format(date.getHours());
    min = format(date.getMinutes());
    sec = format(date.getSeconds());
    document.getElementById("clock").innerHTML = hr+":"+min+":"+sec;
    document.body.style.background = "#"+hr+min+sec;
    setTimeout(clock, 1000);
}

function format(value) {
    if(value <= 9) return "0"+value;
    return value;
}

clock();