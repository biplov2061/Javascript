const input = document.getElementById("search");
const photo = document.getElementsByClassName('photo');
const hrs = document.getElementById('hrs');
const min = document.getElementById('min');
const sec = document.getElementById('sec');
const search = document.getElementById('select-btn');


setInterval(() => {

    const gettime = new Date();

    hrs.innerHTML = (gettime.getHours());
    min.innerHTML = (gettime.getMinutes());
    sec.innerHTML = (gettime.getSeconds());
}, 1000);


search.addEventListener("click" , (e)=>{
    e.preventDefault();
    loadImg();
})

window.addEventListener('load' , daynightMode);


photo.addEventListener('dblclick', function()
{
    window.open(photo.links.download,'_blank');
})


