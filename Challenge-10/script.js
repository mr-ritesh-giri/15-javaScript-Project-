let date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

const linkContainer = document.querySelector(".links-container");
const showLinks = document.querySelector(".links");
const toggleBtn = document.querySelector(".nav-toggle");

toggleBtn.addEventListener("click", function () {
  linkContainer.classList.toggle("hide");
});

const navbar = document.querySelector("nav");
const topLinks = document.querySelector(".top-links");

window.addEventListener("scroll", function () {
  const scrollheight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;

  if (scrollheight > navHeight) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }

  if (scrollheight > 1000) {
    topLinks.classList.add("show-link");
  } else {
    topLinks.classList.remove("show-link");
  }
});
