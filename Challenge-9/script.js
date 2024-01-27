const videoContainer = document.querySelector(".video-container");
const btn = document.querySelector(".switch-btns");
const slider = document.querySelector(".switch");

btn.addEventListener("click", function () {
  if (!btn.classList.contains("slide")) {
    btn.classList.add("slide");
    videoContainer.pause();
  } else {
    btn.classList.remove("slide");
    videoContainer.play();
  }
});

//Preloader
const preloader = document.querySelector(".pre-loader");

window.addEventListener("load", function () {
  preloader.classList.add(".pre-loader-hide");
});
