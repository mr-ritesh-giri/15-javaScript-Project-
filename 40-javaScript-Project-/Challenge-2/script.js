let decreaseBtn = document.querySelector("#decrease");
let resetBtn = document.querySelector("#reset");
let increaseBtn = document.querySelector("#increase");
let counter = document.querySelector(".counter");
let counterValue = 0;

function colorChange() {
  if (counterValue < 0) {
    counter.style.color = "red";
  } else if (counterValue > 0) {
    counter.style.color = "green";
  } else {
    counter.style.color = "black";
  }
}

decreaseBtn.addEventListener("click", () => {
  counterValue--;
  console.log(counterValue, "Clicked");
  counter.innerText = counterValue;
  colorChange();
});

resetBtn.addEventListener("click", () => {
  counterValue = 0;
  counter.innerText = counterValue;
  colorChange();
});

increaseBtn.addEventListener("click", () => {
  counterValue++;
  counter.innerText = counterValue;
  colorChange();
});

colorChange();
