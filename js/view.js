const section = document.querySelector(".scroller-section");
const slideSection = section.querySelectorAll("div");
const headerLogo = document.querySelectorAll("a");
const figureSection = document.querySelector(".figureSection");

let pageNum = 0;
window.addEventListener("load", () => {
  setTimeout(() => {
    headerLogo.forEach((item) => {
      item.style.opacity = "1";
    });
  }, 500);
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

  figureSection.style.transform = "translateX(100vw)";
  figureSection.style.transition = "1s";
  figureSection.style.opacity = "0";

  setTimeout(() => {
    figureSection.style.display = "none";
  }, 500);

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

  if (pageNum === 0) {
    section.addEventListener(
      "wheel",
      () => {
        if (wheel < 0) {
          scrollTo(0, 440);
        }
      },
      { once: true }
    );
  }
});

console.log(scrollY);
