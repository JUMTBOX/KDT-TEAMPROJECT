const nav = document.querySelector("ul");
const navItems = nav.querySelectorAll("li");
const morpContainer = document.querySelector(".morpContainer");

//로드시 네비게이션에 클래스 부여
window.addEventListener("load", () => {
  for (let item of navItems) {
    item.classList.add("nav-item");
  }
  // 1초 뒤에 모핑텍스트 보이게 설정
  setTimeout(() => {
    morpContainer.style.opacity = "1";
  }, 1000);
});
