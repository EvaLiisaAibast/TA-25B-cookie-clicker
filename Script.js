let count = 0;
let btn = document.getElementById("btn");
let disp = document.getElementById("display");

btn.addEventListener('click', function (){
    count = count +1
    disp.innerText = "counter:" + count 
})
