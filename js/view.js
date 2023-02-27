const section = document.querySelector(".scroller-section");
const slideSection = section.querySelectorAll("div");

let pageNum = 0;
window.addEventListener("load", () => {
  slideSection[pageNum].style.opacity = "1";
  slideSection[pageNum].style.transform = "translateY(0)";
  slideSection[pageNum].style.transition = "1s";
});

function showUp() {
  slideSection[pageNum].style.opacity = "1";
  slideSection[pageNum].style.transform = "translateY(0)";
  slideSection[pageNum].style.transition = "1s";
}

section.addEventListener("wheel", (e) => {
  e.preventDefault();
  let wheel = e.wheelDeltaY;
  wheel > 0 ? console.log("업스크롤") : console.log("다운스크롤");

  wheel > 0
    ? pageNum < slideSection.length - 1 && pageNum >= 0
      ? (pageNum += 1)
      : (pageNum = 0)
    : pageNum <= slideSection.length - 1 && pageNum >= 1
    ? (pageNum -= 1)
    : (pageNum = slideSection.length - 1);

  if (wheel > 0) {
    slideSection.forEach((item) => {
      item.style.opacity = "0";
      item.style.transform = "translateY(50vh)";
      item.style.transition = "1s";
    });
    showUp();
  } else if (wheel < 0) {
    slideSection.forEach((item) => {
      item.style.opacity = "0";
      item.style.transform = "translateY(50vh)";
      item.style.transition = "1s";
    });
    showUp();
  }
});
