let more = document.querySelectorAll(".see-more");

more.forEach(function (button) {
  let faqBox = button.closest(".faq-box");
  let info = faqBox.querySelector(".info");
  let horiLine = document.querySelector(".horizontal-line");

  button.addEventListener("click", function () {
    info.classList.toggle("hide");
    horiLine.classList.toggle("hide");
    console.log(button, "Clicked");
  });
});
