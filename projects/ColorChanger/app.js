let red = document.getElementById("redButton")
let green = document.getElementById("greenButton")
let blue = document.getElementById("blueButton")
let purple = document.getElementById("purpleButton")
let reset = document.getElementById("resetButton")


red.addEventListener('click',function(){
    document.body.style.color="red";
})

green.addEventListener('click',function(){
    document.body.style.color="green";
})

purple.addEventListener('click',function(){
    document.body.style.color="purple";
})

blue.addEventListener('click',function(){
    document.body.style.color="blue";
})

reset.addEventListener('click',function(){
    document.body.style.color="black";
})