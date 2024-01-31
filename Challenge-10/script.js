let date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

const linkContainer = document.querySelector(".links-container");
const showLinks = document.querySelector(".links");
const toggleBtn = document.querySelector(".nav-toggle");

toggleBtn.addEventListener("click", function () {
  linkContainer.classList.toggle("hide");
  linkContainer.style.tra;
});

const navbar = document.querySelector("nav");
const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", function () {
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;
  if (scrollHeight > navHeight) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }
  if (scrollHeight > 1000) {
    topLink.classList.add("show-link");
  } else {
    topLink.classList.remove("show-link");
  }
});

// Smooth Scroll

const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    // Prevent Default
    e.preventDefault();
    // Find the containers
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);

    // Setting the section height
    const navHeight = navbar.getBoundingClientRect().height;
    const containerHeight = linkContainer.getBoundingClientRect().height;
    const fixedNav = navbar.classList.contains("fixed-nav");

    let position = element.offsetTop - navHeight;
    if (!fixedNav) {
      position = position - navHeight;
    }
    if (navHeight > 130) {
      position = position + containerHeight;
    }
    window.scrollTo({
      left: 0,
      top: position,
    });
    linkContainer.style.height = 0;
  });
});
