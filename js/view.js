const headerLogo = document.querySelectorAll("a");
const section = document.querySelector(".scroller-section");
const figureSection = document.querySelector(".figureSection");
const slideSection = section.querySelectorAll(".slider");
const instaBg = section.querySelector("#instaBg");
const kakaoBg = section.querySelector("#kakaoBg");
const chatContainer = section.querySelector("#chatContainer1");
const instaImg = section.querySelector("#instaPic1");
const kakaoImg = section.querySelector("#kakaoPic1");
const instaEmoge = section.querySelector(".heart1");

//페이지 로드 후 500ms가 지난뒤 헤더의 a태그들이 나타나게 처리
window.addEventListener("load", () => {
  setTimeout(() => {
    headerLogo.forEach((item) => {
      item.style.opacity = "1";
    });
    section.style.opacity = "1";
  }, 1000);
});

//슬라이드 섹션들이 나오게 하는 역할의 함수
let pageNum = 0;
function showUp() {
  slideSection[pageNum].style.opacity = "1";
  slideSection[pageNum].style.transform = "translateY(0)";
  slideSection[pageNum].style.transition = "1.5s";
}

section.addEventListener("wheel", (e) => {
  e.preventDefault();

  let wheel = e.wheelDeltaY;
  // console.log(wheel);
  wheel > 0 ? console.log("업스크롤") : console.log("다운스크롤");

  //남산타워 사진이 있는 figure섹션을 옆으로 치우는 처리
  figureSection.style.transform = "translateX(100vw)";
  figureSection.style.transition = "1s";
  figureSection.style.opacity = "0";

  // 옆으로 치워도 해당 섹션이 있던 공간을 잡아먹기 때문에 디스플레이 논 처리
  setTimeout(() => {
    figureSection.style.display = "none";
  }, 450);

  //휠값에 따라 슬라이드 섹션 페이지 넘버를 바꾸어줌
  wheel > 0
    ? pageNum < slideSection.length - 1 && pageNum >= 0
      ? (pageNum += 1)
      : (pageNum = 0)
    : pageNum <= slideSection.length - 1 && pageNum >= 1
    ? (pageNum -= 1)
    : (pageNum = slideSection.length - 1);
  console.log(pageNum);
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

instaImg.addEventListener("mouseover", () => {
  instaBg.style.opacity = "1";
  instaBg.style.background = `radial-gradient(
             at 20% 125%,
             #feda78 20%,
             #e23467 60%,
             #ac2bb3 90%
           )`;
  instaImg.style.boxShadow = "0 2px 2.5px 0 black";
  instaImg.style.transform = "scale(1.01)";
});

instaImg.addEventListener("mouseout", () => {
  instaBg.style.opacity = "0.5";
  instaBg.style.background = "none";
  instaImg.style.boxShadow = "0 5px 12px 0 #b5b5a6";
  instaImg.style.transform = "scale(1)";
});

let isClickExcuted = 0;

instaImg.addEventListener(
  "click",
  () => {
    kakaoImg.style.animation = "vibrate-2 0.25s ease 3";

    kakaoBg.style.opacity = "1";
    kakaoBg.style.backgroundColor = "#fef01b";
    instaBg.style.opacity = "0.5";
    instaEmoge.style.color = "#dd2a7b";

    kakaoImg.addEventListener("mouseover", () => {
      kakaoBg.style.opacity = "1";
      kakaoBg.style.backgroundColor = "#fef01b";
      kakaoImg.style.boxShadow = "0 2px 2.5px 0 black";
    });

    kakaoImg.addEventListener("mouseout", () => {
      kakaoBg.style.opacity = "0.5";
      kakaoBg.style.background = "none";
      kakaoImg.style.boxShadow = "0 5px 12px 0 #b5b5a6";
    });

    function makeOwnChat() {
      let own = document.createElement("div");
      own.classList.add("ownChat1");
      chatContainer.appendChild(own);
    }

    let isChatMaked = 1;

    function makeChat() {
      let user = document.createElement("div");
      let chat = document.createElement("div");
      user.classList.add("chatUser1");
      chat.classList.add(`chat${isChatMaked}`);
      chat.style = `
    position: absolute;
    top:${isChatMaked * 2.2 + 5}rem`;
      chatContainer.appendChild(user);
      chatContainer.appendChild(chat);
      isChatMaked += 1;
    }

    makeOwnChat();
    let ownChat = section.querySelector(".ownChat1");
    ownChat.style.top = " 4rem";
    ownChat.innerText = "와 여기 어디야?";

    setTimeout(() => {
      for (let i = 0; i < 3; i += 1) {
        makeChat();
      }

      let chat1 = section.querySelector(".chat1");
      let chat2 = section.querySelector(".chat2");
      let chat3 = section.querySelector(".chat3");

      chat1.innerHTML = "<b>서울로 7017</b>";
      chat2.innerHTML =
        "주소: 서울특별시 중구 한강대로 405<br>문의:	02-120 <br> 휴무일:	연중무휴 <br>이용시간: 24시간 개방";
      chat3.innerHTML = "서울로7017을 통해 명동,남산<br>서울역도 갈 수 있음";
      chat3.style.top = "14rem";
    }, 2000);

    kakaoImg.addEventListener(
      "click",
      () => {
        let own2 = document.createElement("div");
        own2.classList.add("ownChat2");
        chatContainer.appendChild(own2);

        let ownChat2 = section.querySelector(".ownChat2");
        ownChat2.innerText = "다른 곳도 보여주라";
        ownChat2.style.top = "18rem";

        setTimeout(() => {
          makeChat();
          let user2 = document.createElement("div");
          user2.classList.add("chatUser2");
          chatContainer.appendChild(user2);
          let chat4 = section.querySelector(".chat4");
          chat4.style.top = "21rem";
          chat4.innerText = "ㅇㅋ 휠 내려";
        }, 1500);
      },
      { once: true }
    );
  },
  { once: true }
);

// Slider3

//ImgDescript 재사용을 위한 고민
const slider3 = section.querySelector("#slider3");
slider3.addEventListener(
  "click",
  () => {
    const makeImgDescript = document.createElement("div");
    makeImgDescript.classList.add("imgDescript");
    makeImgDescript.innerHTML = `<span class="emogeContainer">
            <i class="fa-solid fa-heart" style="color: #dd2a7b"></i>
            <i class="fa-regular fa-comment"></i>
            <i class="fa-regular fa-paper-plane"></i>
          </span>
          <div class="imgPlace">
            <span class="profileHead">
              #Seoul Sky
              <span class="profileCircleLine">
                <span class="profileCircle" 
                style="background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMcZ29NyKyphm5BLll3Dd8MW5_GgAmwEJofQ&usqp=CAU)"></span>
              </span>
              <span class="profileFollow">
                <b>8.4M</b>
                <br />
                POSTS
                <br />
                <button class="followBtn">follow</button>
              </span>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.804473904309!2d127.10011631524364!3d37.512529479808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b458e7369b7bb%3A0x99685e4ee512b384!2z7ISc7Jq47Iqk7Lm07J20!5e0!3m2!1sko!2skr!4v1677821030918!5m2!1sko!2skr"
                style="border: 0"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </span>
          </div>`;
    makeImgDescript.style.backgroundImage =
      "url(/video/spot-image/서울스카이.jpg)";

    slider3.appendChild(makeImgDescript);

    makeImgDescript.addEventListener(
      "click",
      () => {
        //세번째 ImgDescript 만들기
        const makethirdImgDescript = document.createElement("div");
        makethirdImgDescript.classList.add("imgDescript");

        makethirdImgDescript.innerHTML = `<span class="emogeContainer">
            <i class="fa-solid fa-heart" style="color: #dd2a7b"></i>
            <i class="fa-regular fa-comment"></i>
            <i class="fa-regular fa-paper-plane"></i>
          </span>
          <div class="imgPlace">
            <span class="profileHead">
              #DDP
              <span class="profileCircleLine">
                <span class="profileCircle" 
                style="background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk7sxTIseipVjijcfd-r_7C_6ZjOst7WWn8A&usqp=CAU)"></span>
              </span>
              <span class="profileFollow">
                <b>131M</b>
                <br />
                POSTS
                <br />
                <button class="followBtn">follow</button>
              </span>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.513447061601!2d127.00703491524526!3d37.566525579797926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b456faf5814f3%3A0x5c22a91dab450bdc!2zRERQIOuPmeuMgOusuOuUlOyekOyduO2UjOudvOyekA!5e0!3m2!1sko!2skr!4v1677823406837!5m2!1sko!2skr"
                style="border: 0"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </span>
          </div>`;

        makethirdImgDescript.style.backgroundImage =
          "url(/video/spot-image/ddp야경.jpeg)";
        slider3.appendChild(makethirdImgDescript);

        //RICK ROLLED
        makethirdImgDescript.addEventListener("click", () => {
          open("https://www.youtube.com/watch?v=BBJa32lCaaY");
        });
      },
      { once: true }
    );
  },
  { once: true }
);
