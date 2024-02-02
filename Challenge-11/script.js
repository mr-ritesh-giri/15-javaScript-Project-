const btns = document.querySelectorAll(".tab-btn");
const article = document.querySelectorAll(".content");
const about = document.querySelector(".about");

about.addEventListener("click", function (e) {
  const id = e.target.dataset.id;
  btns.forEach(function (btn) {
    btn.classList.remove("active");
    e.target.classList.add("active");
  });
  article.forEach(function (article) {
    article.classList.remove("active");
  });
  const selectedArticle = document.getElementById(id);
  if (selectedArticle) {
    selectedArticle.classList.add("active");
  }
});
