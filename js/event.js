// ------------- 마우스 휠 사용 감지해서 화면 이동 --------------------------
let page = 0; // 페이지 정보 초기화
const header = document.querySelector("header");
const container = document.querySelector(".container");
window.addEventListener("wheel", (e) => {
  console.log(e.deltaY);
  const direction = e.deltaY > 0 ? "down" : "up";
  if (direction === "up") {
    container
      .querySelector(`.section-${page + 1}`)
      .setAttribute("style", `top:100%`);
    header.style.display = "flex";
    page !== 0 ? page-- : null;
    console.log(page);
  } else {
    if (document.querySelector(`.section-${page + 1}`).style.top !== "0") {
      document
        .querySelector(`.section-${page + 1}`)
        .setAttribute("style", "top:0");
      header.style.display = "none";
      page < 1 ? page++ : null;
      console.log(page);
    }
  }
});

// ------------------- SECTION-1 --------------------------------------------

const detailPopup = document.querySelector(".detailPopup");
const elements = document.querySelectorAll("[id^='sec-1-el-']");
const others = container.querySelectorAll(".element");

let elementIsClicked = 0;

for (let i = 0; i < elements.length; i++) {
  elements[i].addEventListener("click", function () {
    if (elementIsClicked == 0) {
      let imagePath = `../video/event-image/서대문_0${i + 1}_확대.jpg`;
      detailPopup.innerHTML = `<img src="${imagePath}" alt=""/><i class="fa-regular fa-circle-xmark"></i>`;
      detailPopup.style.display = "flex";
      detailPopup.style.opacity = "1";
      others.forEach(
        (item) => (
          (item.style.opacity = "0"), (item.style.transition = "opacity 0.3s")
        )
      );
      elementIsClicked = 1;
    } else {
      return null;
    }
  });
}
// detailPopup 닫기
document.addEventListener("click", function (e) {
  // detailPopup 창과 img 외 부분을 클릭하거나, close 아이콘을 클릭할 때
  if (
    (e.target.closest(".detailPopup") &&
      !e.target.closest("[id^='sec-1-el-']")) ||
    e.target.closest(".fa-regular")
  ) {
    detailPopup.style.display = "none";
    detailPopup.style.opacity = "0";
    others.forEach((item) => (item.style.opacity = "1"));
    elementIsClicked = 0;
  }
});

// 오른쪽에서 왼쪽으로 흐르는 글자
// const text = document.querySelector(".bottom-text");
// const containerWidth = window.innerWidth;
// let x = containerWidth;

// setInterval(() => {
//   x--;
//   text.style.transform = `translateX(${x}px)`;

//   if (-x > text.clientWidth) {
//     x = containerWidth;
//   }
// }, 10); // 0.01 초 마다 왼쪽으로 이동

// -----------------------------------------------------------------------------------
const section2 = document.querySelector(".section-2");
const sec2Contents = section2.querySelector(".contentsWrapper");
const realContents = section2.querySelector(".contents");
const onoffBtn = document.querySelector("#onoff");

let isBtnClicked = 0;
onoffBtn.addEventListener("click", () => {
  isBtnClicked == 0
    ? (sec2Contents.style.opacity = "1")((isBtnClicked = 1))
    : (sec2Contents.style.opacity = "0")((isBtnClicked = 0));
});

for (let i = 2; i < 5; i += 1) {
  const contentsCard = document.createElement("div");
  contentsCard.classList.add("card");
  contentsCard.setAttribute("id", `card${i}`);
  realContents.appendChild(contentsCard);
}

const card2 = sec2Contents.querySelector("#card2");
const card3 = sec2Contents.querySelector("#card3");
const card4 = sec2Contents.querySelector("#card4");

card2.innerHTML = `
<div class="cardWrapper">
                    <div class="card-image">
                      <img
                        style = "width: 100%"
                        src="/video/event-image/반포 야시장.jpg"
                        alt="반포"
                      />
                    </div>
                    <div class="category">Banpo</div>
                    <div class="heading">Banpo Night-goblin Market</div>
                  </div>
`;

card3.innerHTML = `
<div class="cardWrapper">
                    <div class="card-image">
                      <img
                        src="/video/event-image/DDP 야시장.jpg"
                        alt="DDP"
                      />
                    </div>
                    <div class="category">DDP</div>
                    <div class="heading">DDP Night-goblin Market</div>
                  </div>
`;

card4.innerHTML = `
<div class="cardWrapper">
                    <div class="card-image">
                      <img
                        src="/video/event-image/청계천 야시장.jpg"
                        alt="DDP"
                      />
                    </div>
                    <div class="category" style="font-size: 0.5em;
                    ">
Cheonggye</div>
                    <div class="heading" style="padding-top:20px">
Cheonggyecheon Night-goblin Market</div>
                  </div>
`;
