const ageEl = document.getElementById("age");
const btn = document.getElementById("calc");
const err = document.getElementById("error");
const resultBox = document.getElementById("result");

btn.addEventListener("click", () => {
  function LifeInWeek(a) {
    err.innerHTML = "";
    resultBox.innerHTML = "";

    if (a <= 0 || a == "" || a >= 120) {
      err.innerHTML = "Please enter a valid age between 1 and 120.";
    } else {
      let days_spent = a * 365;
      let weeks_spent = a * 52;
      let months_spent = a * 12;
      resultBox.innerHTML = `You have lived approximately 
          <b>${days_spent}</b> days, 
          <b>${weeks_spent}</b> weeks, 
          and <b>${months_spent}</b> months so far.
        `;
    }
  }
  LifeInWeek(ageEl.value);
});
