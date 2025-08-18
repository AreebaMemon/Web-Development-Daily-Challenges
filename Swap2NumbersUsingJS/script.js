let btn = document.getElementById("btn");
let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let a = document.getElementById("a");
let b = document.getElementById("b");

btn.addEventListener("click", () => {
  if (num1.value == "" && num2.value == "") {
    alert("Both numbers are required");
  } else if (num1.value == "" || num2.value == "") {
    alert("Please enter the missing number");
  } else {
     let x=num2.value;
     let y=num1.value;
    a.innerText = "A = "+ x;
    b.innerText = "B = " +y;
  }
});
