// const months = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December",
// ];
// const weekdays = [
//   "Sunday",
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
// ];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");

let futureDate = new Date(2024, 1, 20, 17, 30, 0);

const year = futureDate.getFullYear();
const date = futureDate.getDate();
const hour = futureDate.getHours();
const mins = futureDate.getMinutes();
const moon = futureDate.getHours() >= 12 ? `PM` : `AM`;

// let month = months[futureDate.getMonth()];

const offerDate = (giveaway.textContent = `Giveaway on ${
  [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ][futureDate.getDay()]
}, ${date} ${
  [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ][futureDate.getMonth()]
} ${year}, ${hour}:${mins} ${moon}`);

//Add zero before single digit
function padWithZero(value) {
  return value < 10 ? "0" + value : value;
}

//Future Time

function getRemainingTime() {
  //Sale Time
  const futureTime = futureDate.getTime();

  //Present Time
  const today = new Date().getTime();

  //Remaining Time
  const remainingTime = futureTime - today;
  // console.log(remainingTime);

  //Calculate Time
  const saleDays = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
  const saleHours = padWithZero(
    Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  );
  const saleMinutes = padWithZero(
    Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60))
  );
  const saleSeconds = padWithZero(
    Math.floor((remainingTime % (1000 * 60)) / 1000)
  );

  // let doubleDigit = value < 10 ? "0" + value : value;

  document.querySelector(".days").textContent = `${saleDays}`;
  document.querySelector(".hours").textContent = `${saleHours}`;
  document.querySelector(".minus").textContent = `${saleMinutes}`;
  document.querySelector(".secs").textContent = `${saleSeconds}`;
  setInterval(remainingTime, 1000);
}
getRemainingTime();

function updateCountDown() {
  getRemainingTime();
}
setInterval(updateCountDown, 1000);

clearInterval(countdownInterval);
