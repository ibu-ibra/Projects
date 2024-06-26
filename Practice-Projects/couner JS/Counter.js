const increase = document.querySelector("#increase");
const decrease = document.querySelector("#decrease");
const clear = document.querySelector("#reset");
const input = document.querySelector(".input");
const value = document.querySelector("#val");
let count = 0;

function addition() {
   count++;
   showCount();
}

function subtract () {
    count--;
    showCount();
}

function Clear(){
    count = 0;
    showCount();
}
function showCount () {
    if(count < 0){
        count = 0;
    }
    value.innerText = count;
}

increase.addEventListener("click", addition);
decrease.addEventListener("click",subtract);
clear.addEventListener("click", Clear,);