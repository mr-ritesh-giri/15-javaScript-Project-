const toggleBtn = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");

barBtn.addEventListener("click", function () {
  sidebar.classList.toggle("show-sidebar");
});

exitBtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});
