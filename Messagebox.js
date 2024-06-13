let para = document.getElementById("message");
let btn = document.getElementById("button");
let messagelist = document.getElementById("messagelist");


// btn.addEventListener("click" , () =>{
//     getvalue();
// })

function getvalue()
{
    let value = document.getElementById("msg").value;
    messagelist.innerHTML = value;
    document.getElementById("msg").value = "";
}


