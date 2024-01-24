let more = document.querySelectorAll(".see-more");

more.forEach(function (button) {
  let faqBox = button.closest(".faq-box");
  let info = faqBox.querySelector(".info");
  let plusBtn = document.querySelector(".plus-btn");
  let minusBtn = document.querySelector(".minus-btn");

  button.addEventListener("click", function () {
    info.classList.toggle("hide");
    minusBtn.classList.toggle("hide");
    plusBtn.classList.toggle("hide");
  });
});
