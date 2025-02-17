let button = document.querySelector("button")

function changeColor(bg_color,color,text){
    document.body.style.backgroundColor = bg_color;
    document.body.style.color = color;
    button.innerText = text;
}

button.addEventListener('click',function(){
    if(!document.body.style.backgroundColor || document.body.style.backgroundColor==="white"){
        changeColor("black","white","Light Mode")
    } else {
        changeColor("white","black","Dark Mode")
    }
})


