let btn = document.querySelector("button");
let main = document.querySelector("main");

let bg = true;

btn.addEventListener("click", () => {
  if (bg) {
    main.style.backgroundColor = "blue";
    btn.style.backgroundColor = "red";
  } else {
    main.style.backgroundColor = "red";
    btn.style.backgroundColor = "blue";
  }
  
  bg = !bg;
});
