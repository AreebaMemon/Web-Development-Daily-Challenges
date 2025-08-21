let add = document.querySelector("#add");
let sub = document.querySelector("#sub");
let result = document.querySelector("#result");
let reset = document.querySelector("#reset");
let count = 0;

add.addEventListener("click", addition);
sub.addEventListener("click", subraction);
reset.addEventListener("click", resetCounter);

function addition() {
  count++;
  result.innerHTML = count;
}

function subraction() {
  count--;
  result.innerHTML = count;
}

function resetCounter() {
  count=0;
  result.innerHTML = count;
}
