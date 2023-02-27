const upBtn = document.querySelector("#commonUpButton");

window.addEventListener("load", () => {
  upBtn.style.display = "none";
});

window.addEventListener("scroll", () => {
  let moveY = window.scrollY;
  console.log(moveY);
  moveY < 300
    ? (upBtn.style.display = "none")
    : (upBtn.style.display = "block");
});

upBtn.addEventListener("click", (e) => {
  window.scrollTo(0, 0);
});
