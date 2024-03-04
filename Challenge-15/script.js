const slider = document.querySelector(".slider-container");
const prevButton = document.querySelector(".prevBtn");
const nextButton = document.querySelector(".nextBtn");

function showSlides() {
  let slideIndex = 0;

  const slides = document.querySelectorAll(".slide");
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
  slider.style.transform = `translateX(-${slideIndex * 100}%)`;
}

function prevSlide() {
  slideIndex--;
  showSlides();
}

function nextSlide() {
  slideIndex++;
  showSlides();
}

// Add event listeners to buttons
prevButton.addEventListener("click", function () {
  console.log("Hi ritesh giri");
});
nextButton.addEventListener("click", nextSlide);

// Show initial slide
showSlides();
