const section = document.querySelector(".scroller-section");
const slideSection = section.querySelectorAll("div");

let click = -1;
section.addEventListener("click", () => {
  click === slideSection.length ? (click = 0) : (click += 1);
  slideSection[click].style.opacity = "1";
  slideSection[click].style.transition = "1s";
  slideSection[click].style.transform = "translateY(0)";
});

// for (let i = 0; i < slideSection.length; i += 1) {
//   slideSection[i].style.opacity = "1";
//   slideSection[i].style.transitionDelay = `${1 + 0.75 * i}s`;
//   slideSection[i].style.transform = "translateY(0)";
// }
