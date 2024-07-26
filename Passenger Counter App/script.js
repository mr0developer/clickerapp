// document.getElementById("count").innerText = 5;
let count = 0;

let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
function increment(){
    count += 1;
    document.getElementById("count-el").innerText = count;
}
// count cannot be negative
function decrement() {
    if (count > 0) {
        count -= 1;
    }
    document.getElementById("count-el").innerText = count;
}
function save(){
    let countStr = count + " - ";
    saveEl.innerText += countStr;
    // console.log(count);
    count = 0;
    countEl.innerText = count;
}
