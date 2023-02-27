const section = document.querySelector(".scroller-section");
const slideSection = section.querySelectorAll("div");
const headerLogo = document.querySelectorAll("a");
const figureSection = document.querySelector(".figureSection");

//페이지 로드 후 500ms가 지난뒤 헤더의 a태그들이 나타나게 처리
window.addEventListener("load", () => {
  setTimeout(() => {
    headerLogo.forEach((item) => {
      item.style.opacity = "1";
    });
    section.style.opacity = "1";
  }, 550);
});

//슬라이드 섹션들이 나오게 하는 역할의 함수
let pageNum = 0;
function showUp() {
  slideSection[pageNum].style.opacity = "1";
  slideSection[pageNum].style.transform = "translateY(0)";
  slideSection[pageNum].style.transition = "1s";
}

section.addEventListener("wheel", (e) => {
  //섹션에 휠 이벤트 발생시 디폴트 이벤트를 방지(윈도우 스크롤)
  e.preventDefault();

  let wheel = e.wheelDeltaY;

  wheel > 0 ? console.log("업스크롤") : console.log("다운스크롤");

  //남산타워 사진이 있는 figure섹션을 옆으로 치우는 처리
  figureSection.style.transform = "translateX(100vw)";
  figureSection.style.transition = "1s";
  figureSection.style.opacity = "0";

  // 옆으로 치워도 해당 섹션이 있던 공간을 잡아먹기 때문에 디스플레이 논 처리
  setTimeout(() => {
    figureSection.style.display = "none";
    section.style.borderBottom = "1px solid #fff";
  }, 350);

  //휠값에 따라 슬라이드 섹션 페이지 넘버를 바꾸어줌
  wheel > 0
    ? pageNum < slideSection.length - 1 && pageNum >= 0
      ? (pageNum += 1)
      : (pageNum = 0)
    : pageNum <= slideSection.length - 1 && pageNum >= 1
    ? (pageNum -= 1)
    : (pageNum = slideSection.length - 1);

  //업스크롤 다운스크롤에 따라 슬라이드 섹션 페이지 이동 처리
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

console.log(scrollY);
