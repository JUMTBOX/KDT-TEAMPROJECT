// 마우스 휠 사용 감지해서 화면 이동

let page = 0; // 페이지 정보 초기화
let scroll = 0;

addEventListener("mousewheel", (e) => {
  // const direction = e.deltaY > 0 ? "down" : "up";
  // // --------------------강사님--------------------------
  // if (direction === "up") {
  //   document.querySelector(`.section-${page + 1}`).setAttribute("style", `top:100%`);
  //   if (page !== 0) page--;
  //   console.log(page);
  // } else {
  //   if (document.querySelector(`.section-${page + 1}`).style.top !== "0px") {
  //     document.querySelector(`.section-${page + 1}`).setAttribute("style", "top:0");
  //     if (page < 3) page++;
  //     console.log(page);
  //   }
  // }
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
