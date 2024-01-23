let quit = document.querySelector(".exit");
let openBtn = document.querySelector(".open-btn");
let main = document.querySelector("main");
let main2 = document.querySelector(".main-over");

openBtn.addEventListener("click", function () {
  main2.classList.add("main-overlay");
  console.log(openBtn, "Clicked");
});

quit.addEventListener("click", function () {
  main2.classList.remove("main-overlay");
  console.log(quit, "Clicked");
});
