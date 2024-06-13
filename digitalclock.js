let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
let day = document.getElementById("day");


setInterval(() => {

    let curtime = new Date;
    hrs.innerHTML = (curtime.getHours());
    min.innerHTML = (curtime.getMinutes());
    sec.innerHTML = (curtime.getSeconds());
    day.innerHTML = (curtime.getFullYear());
}, 1000);
