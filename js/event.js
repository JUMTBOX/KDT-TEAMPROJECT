// ------------- 마우스 휠 사용 감지해서 화면 이동 --------------------------
let page = 0; // 페이지 정보 초기화

addEventListener("mousewheel", (e) => {
  const direction = e.deltaY > 0 ? "down" : "up";
  if (direction === "up") {
    document.querySelector(`.section-${page + 1}`).setAttribute("style", `top:100%`);
    if (page !== 0) page--;
    console.log(page);
  } else {
    if (document.querySelector(`.section-${page + 1}`).style.top !== "0px") {
      document.querySelector(`.section-${page + 1}`).setAttribute("style", "top:0");
      if (page < 3) page++;
      console.log(page);
    }
  }
  // -----------------------------------------------------
  // ------- 1 ------------
  // if (direction === "up") {
  //   document.querySelector(".section-1").setAttribute("style", `top:100%`);
  // } else {
  //   document.querySelector(".section-1").setAttribute("style", "top:0");
  // }
  // if (document.querySelector(".section-1").style.top === "100%") {
  //   page = 0;
  //   console.log(page);
  // } else if (document.querySelector(".section-1").style.top === "0px") {
  //   page = 1;
  //   console.log(page);
  // }
  // ------2----------
  //   if (direction === "up") {
  //     document.querySelector(`.section-${page + 1}`).setAttribute("style", `top:${page + 1}00%`);
  //   } else {
  //     document.querySelector(`.section-${page + 1}`).setAttribute("style", "top:0");
  //   }
  //   if (document.querySelector(`.section-${page + 1}`).style.top === `${page + 1}00%`) {
  //     page = 0;
  //     console.log(page);
  //   } else if (document.querySelector(`.section-${page + 1}`).style.top === "0px") {
  //     page += 1;
  //     console.log(page);
  //   }
});

// SECTION-1 사진 클릭하면 detailPopup 띄우기
// let sec1el1 = document.querySelector("#sec-1-el-1");
// let detailPopup = document.querySelector(".detailPopup");

// sec1el1.addEventListener("click", function () {
//   detailPopup.style.visibility = "visible";
//   detailPopup.style.opacity = "1";
// });

// document.addEventListener("click", function (event) {
//   if (!event.target.closest(".detailPopup") && !event.target.closest("#sec-1-el-1")) {
//     detailPopup.style.visibility = "hidden";
//     detailPopup.style.opacity = "0";
//   }
// });

// let detailPopup = document.querySelector(".detailPopup");
// let elements = document.querySelectorAll("[id^='sec-1-el-']");

// for (let i = 0; i < elements.length; i++) {
//   elements[i].addEventListener("click", function () {
//     detailPopup.style.visibility = "visible";
//     detailPopup.style.opacity = "1";
//   });
// }

// document.addEventListener("click", function (e) {
//   console.log(e.target);
//   if (!e.target.closest(".detailPopup") && !e.target.closest("[id^='sec-1-el-']")) {
//     detailPopup.style.visibility = "hidden";
//     detailPopup.style.opacity = "0";
//   }
// });

let detailPopup = document.querySelector(".detailPopup");
let elements = document.querySelectorAll("[id^='sec-1-el-']");

for (let i = 0; i < elements.length; i++) {
  elements[i].addEventListener("click", function () {
    let imagePath = `../video/event/서대문_0${i + 1}.jpg`;
    detailPopup.innerHTML = `<img src="${imagePath}" alt="" />`;
    detailPopup.style.visibility = "visible";
    detailPopup.style.opacity = "1";
  });
}

document.addEventListener("click", function (e) {
  console.log(e.target);
  if (!e.target.closest(".detailPopup") && !e.target.closest("[id^='sec-1-el-']")) {
    detailPopup.style.visibility = "hidden";
    detailPopup.style.opacity = "0";
  }
});

// 오른쪽에서 왼쪽으로 흐르는 글자
const text = document.querySelector(".bottom-text");
const containerWidth = window.innerWidth;
let x = containerWidth;

setInterval(() => {
  x--;
  text.style.transform = `translateX(${x}px)`;

  if (-x > text.clientWidth) {
    x = containerWidth;
  }
}, 10); // 0.01 초 마다 왼쪽으로 이동
