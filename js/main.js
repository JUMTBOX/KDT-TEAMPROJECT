const nav = document.querySelector("ul");
const navItems = nav.querySelectorAll("li");
const morpContainer = document.querySelector(".morpContainer");

//로드시 네비게이션에 애니메이션 적용
window.addEventListener("load", () => {
  for (let i = 0; i < navItems.length; i += 1) {
    navItems[i].classList.add("nav-item");
    navItems[i].style.animation = `rotate 2s ${1 - 0.2 * i}s`;
    navItems[i].style.opacity = "1";
  }
  // 1초 뒤에 모핑텍스트 보이게 설정
  setTimeout(() => {
    morpContainer.style.opacity = "1";
  }, 1000);
});
