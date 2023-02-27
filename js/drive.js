const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");
const img1 = document.querySelector(".image1");
const img2 = document.querySelector(".image2");
const img3 = document.querySelector(".image3");

// 버튼 클릭 시
btn1.addEventListener("click", () => {
  img1.style.display = "block";
  img2.style.display = "none";
  img3.style.display = "none";

  btn1.style.opacity = "1";
  btn2.style.opacity = "0.5";
  btn3.style.opacity = "0.5";
});

btn2.addEventListener("click", () => {
  img1.style.display = "none";
  img2.style.display = "block";
  img3.style.display = "none";

  btn1.style.opacity = "0.5";
  btn2.style.opacity = "1";
  btn3.style.opacity = "0.5";
});

btn3.addEventListener("click", () => {
  img1.style.display = "none";
  img2.style.display = "none";
  img3.style.display = "block";

  btn1.style.opacity = "0.5";
  btn2.style.opacity = "0.5";
  btn3.style.opacity = "1";
});
