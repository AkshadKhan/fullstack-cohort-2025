let toggleButton = document.querySelector('#toggleButton');
let bulb = document.querySelector('#bulb');
let bulb_base = document.querySelector('.bulb-base');
let switchStatus = document.querySelector('#status');


function light(){
  toggleButton.innerHTML="Turn OFF";
  switchStatus.textContent="Status: On";
  document.body.style.backgroundColor = 'black';
  document.body.style.color = 'white';
  bulb.style.backgroundColor = 'gold';
  bulb_base.style.backgroundColor = 'gold';
 
}

function dark(){
  toggleButton.innerHTML="Turn ON";
  switchStatus.textContent="Status: OFF";
  document.body.style.backgroundColor =  "white";
  document.body.style.color = 'black';
  bulb.style.backgroundColor = ' #95a5a6';
  bulb_base.style.backgroundColor = ' #95a5a6';
}

toggleButton.addEventListener("click", ()=>{
  if(document.body.style.backgroundColor==="black"){
    dark();
  } else {
    light();
  }
});
