const section = document.querySelector(".scroller-section");
const slideSection = section.querySelectorAll("div");

let pageNum = 0;

function dos() {
  if (pageNum === 1) {
    slideSection[pageNum - 1].style.opacity = "1";
    slideSection[pageNum - 1].style.transform = "translateY(0)";
    slideSection[pageNum - 1].style.transition = "1s";
  } else {
    slideSection[pageNum - 1].style.opacity = "1";
    slideSection[pageNum - 1].style.transform = "translateY(0)";
    slideSection[pageNum - 1].style.transition = "1s";
    slideSection.map((item) => {
      item.style.opacity = "0";
      item.style.transform = "translateY(50vh)";
      item.style.transition = "none";
    });
  }
}

section.addEventListener("wheel", (e) => {
  e.preventDefault();
  let wheel = e.wheelDeltaY;
  wheel > 0 ? console.log("업스크롤") : console.log("다운스크롤");

  wheel > 0
    ? pageNum < slideSection.length && pageNum >= 0
      ? (pageNum += 1)
      : (pageNum = 1)
    : pageNum <= slideSection.length && pageNum > 1
    ? (pageNum -= 1)
    : (pageNum = slideSection.length);
  console.log(pageNum);
  dos();
});
