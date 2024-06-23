let para = document.getElementById("message");
let btn = document.getElementById("button");
let messagelist = document.getElementById("messagelist");


function getvalue()
{
    let value = document.getElementById("msg").value;
    messagelist.innerHTML = value;
    document.getElementById("msg").value = "";
}


