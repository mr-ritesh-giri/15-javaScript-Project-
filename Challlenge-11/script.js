const btns = document.querySelectorAll("#btns");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const attribute = e.currentTarget.id;
    console.log(attribute, "clicked");
  });
});
