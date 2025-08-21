let button = document.querySelector("button");
let year = document.querySelector("#year");
let result = document.querySelector("#result");

button.addEventListener("click", checkLeapYear);
function checkLeapYear() {
  let yearValue = year.value;
  let regex = /^[1-9]\d{3}$/;
  if (!regex.test(yearValue)) {
    result.innerHTML = "Please enter a valid year (e.g., 2000).";
    return;
  }

  yearValue = parseInt(yearValue);

  if (yearValue % 4 === 0) {
    if (yearValue % 100 === 0) {
      if (yearValue % 400 === 0) {
        result.innerHTML =
          yearValue + " is a Leap Year (divisible by 4, 100, and 400)";
      } else {
        result.innerHTML =
          yearValue +
          " is not a Leap Year (divisible by 4 and 100, but not 400)";
      }
    } else {
      result.innerHTML =
        yearValue + " is a Leap Year (divisible by 4, not 100)";
    }
  } else {
    result.innerHTML = yearValue + " is not a Leap Year";
  }
}
