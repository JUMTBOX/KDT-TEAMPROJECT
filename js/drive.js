// 버튼 //
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");
const btn4 = document.querySelector(".btn4");
const btn5 = document.querySelector(".btn5");
const btn6 = document.querySelector(".btn6");

// 이미지 //
const img1 = document.querySelector(".image1");
const img2 = document.querySelector(".image2");
const img3 = document.querySelector(".image3");
const img4 = document.querySelector(".image4");
const img5 = document.querySelector(".image5");
const img6 = document.querySelector(".image6");

// 텍스트 //
const text1 = document.querySelector(".text1");
const text2 = document.querySelector(".text2");
const text3 = document.querySelector(".text3");
const text4 = document.querySelector(".text4");
const text5 = document.querySelector(".text5");
const text6 = document.querySelector(".text6");

// 제목 //
const title1 = document.querySelector(".p1");
const title2 = document.querySelector(".p2");
const title3 = document.querySelector(".p3");
const title4 = document.querySelector(".p4");
const title5 = document.querySelector(".p5");
const title6 = document.querySelector(".p6");

// 설명 //
const ex1 = document.querySelector(".s1");
const ex2 = document.querySelector(".s2");
const ex3 = document.querySelector(".s3");
const ex4 = document.querySelector(".s4");
const ex5 = document.querySelector(".s5");
const ex6 = document.querySelector(".s6");

// 버튼 클릭 시

btn1.addEventListener("click", () => {
  img1.style.display = "block";
  img2.style.display = "none";
  img3.style.display = "none";
  img4.style.display = "none";
  img5.style.display = "none";
  img6.style.display = "none";

  btn1.style.opacity = "1";
  btn2.style.opacity = "0.5";
  btn3.style.opacity = "0.5";
  btn4.style.opacity = "0.5";
  btn5.style.opacity = "0.5";
  btn6.style.opacity = "0.5";

  text1.style.display = "block";
  text2.style.display = "none";
  text3.style.display = "none";
  text4.style.display = "none";
  text5.style.display = "none";
  text6.style.display = "none";

  text1.style.opacity = "1";
  text2.style.opacity = "0";
  text3.style.opacity = "0";
  text4.style.opacity = "0";
  text5.style.opacity = "0";
  text6.style.opacity = "0";

  title1.style.display = "block";
  title2.style.display = "none";
  title3.style.display = "none";
  title4.style.display = "none";
  title5.style.display = "none";
  title6.style.display = "none";

  title1.style.opacity = "1";
  title2.style.opacity = "0";
  title3.style.opacity = "0";
  title4.style.opacity = "0";
  title5.style.opacity = "0";
  title6.style.opacity = "0";

  ex1.style.display = "block";
  ex2.style.display = "none";
  ex3.style.display = "none";
  ex4.style.display = "none";
  ex5.style.display = "none";
  ex6.style.display = "none";

  ex1.style.opacity = "1";
  ex2.style.opacity = "0";
  ex3.style.opacity = "0";
  ex4.style.opacity = "0";
  ex5.style.opacity = "0";
  ex6.style.opacity = "0";
});

btn2.addEventListener("click", () => {
  img1.style.display = "none";
  img2.style.display = "block";
  img3.style.display = "none";
  img4.style.display = "none";
  img5.style.display = "none";
  img6.style.display = "none";

  btn1.style.opacity = "0.5";
  btn2.style.opacity = "1";
  btn3.style.opacity = "0.5";
  btn4.style.opacity = "0.5";
  btn5.style.opacity = "0.5";
  btn6.style.opacity = "0.5";

  text1.style.display = "none";
  text2.style.display = "block";
  text3.style.display = "none";
  text4.style.display = "none";
  text5.style.display = "none";
  text6.style.display = "none";

  text1.style.opacity = "0";
  text2.style.opacity = "1";
  text3.style.opacity = "0";
  text4.style.opacity = "0";
  text5.style.opacity = "0";
  text6.style.opacity = "0";

  title1.style.display = "none";
  title2.style.display = "block";
  title3.style.display = "none";
  title4.style.display = "none";
  title5.style.display = "none";
  title6.style.display = "none";

  title1.style.opacity = "0";
  title2.style.opacity = "1";
  title3.style.opacity = "0";
  title4.style.opacity = "0";
  title5.style.opacity = "0";
  title6.style.opacity = "0";

  ex1.style.display = "none";
  ex2.style.display = "block";
  ex3.style.display = "none";
  ex4.style.display = "none";
  ex5.style.display = "none";
  ex6.style.display = "none";

  ex1.style.opacity = "0";
  ex2.style.opacity = "1";
  ex3.style.opacity = "0";
  ex4.style.opacity = "0";
  ex5.style.opacity = "0";
  ex6.style.opacity = "0";
});

btn3.addEventListener("click", () => {
  img1.style.display = "none";
  img2.style.display = "none";
  img3.style.display = "block";
  img4.style.display = "none";
  img5.style.display = "none";
  img6.style.display = "none";

  btn1.style.opacity = "0.5";
  btn2.style.opacity = "0.5";
  btn3.style.opacity = "1";
  btn4.style.opacity = "0.5";
  btn5.style.opacity = "0.5";
  btn6.style.opacity = "0.5";

  text1.style.display = "none";
  text2.style.display = "none";
  text3.style.display = "block";
  text4.style.display = "none";
  text5.style.display = "none";
  text6.style.display = "none";

  text1.style.opacity = "0";
  text2.style.opacity = "0";
  text3.style.opacity = "1";
  text4.style.opacity = "0";
  text5.style.opacity = "0";
  text6.style.opacity = "0";

  title1.style.display = "none";
  title2.style.display = "none";
  title3.style.display = "block";
  title4.style.display = "none";
  title5.style.display = "none";
  title6.style.display = "none";

  title1.style.opacity = "0";
  title2.style.opacity = "0";
  title3.style.opacity = "1";
  title4.style.opacity = "0";
  title5.style.opacity = "0";
  title6.style.opacity = "0";

  ex1.style.display = "none";
  ex2.style.display = "none";
  ex3.style.display = "block";
  ex4.style.display = "none";
  ex5.style.display = "none";
  ex6.style.display = "none";

  ex1.style.opacity = "0";
  ex2.style.opacity = "0";
  ex3.style.opacity = "1";
  ex4.style.opacity = "0";
  ex5.style.opacity = "0";
  ex6.style.opacity = "0";
});

btn4.addEventListener("click", () => {
  img1.style.display = "none";
  img2.style.display = "none";
  img3.style.display = "none";
  img4.style.display = "block";
  img5.style.display = "none";
  img6.style.display = "none";

  btn1.style.opacity = "0.5";
  btn2.style.opacity = "0.5";
  btn3.style.opacity = "0.5";
  btn4.style.opacity = "1";
  btn5.style.opacity = "0.5";
  btn6.style.opacity = "0.5";

  text1.style.display = "none";
  text2.style.display = "none";
  text3.style.display = "none";
  text4.style.display = "block";
  text5.style.display = "none";
  text6.style.display = "none";

  text1.style.opacity = "0";
  text2.style.opacity = "0";
  text3.style.opacity = "0";
  text4.style.opacity = "1";
  text5.style.opacity = "0";
  text6.style.opacity = "0";

  title1.style.display = "none";
  title2.style.display = "none";
  title3.style.display = "none";
  title4.style.display = "block";
  title5.style.display = "none";
  title6.style.display = "none";

  title1.style.opacity = "0";
  title2.style.opacity = "0";
  title3.style.opacity = "0";
  title4.style.opacity = "1";
  title5.style.opacity = "0";
  title6.style.opacity = "0";

  ex1.style.display = "none";
  ex2.style.display = "none";
  ex3.style.display = "none";
  ex4.style.display = "block";
  ex5.style.display = "none";
  ex6.style.display = "none";

  ex1.style.opacity = "0";
  ex2.style.opacity = "0";
  ex3.style.opacity = "0";
  ex4.style.opacity = "1";
  ex5.style.opacity = "0";
  ex6.style.opacity = "0";
});

btn5.addEventListener("click", () => {
  img1.style.display = "none";
  img2.style.display = "none";
  img3.style.display = "none";
  img4.style.display = "none";
  img5.style.display = "block";
  img3.style.display = "none";

  btn1.style.opacity = "0.5";
  btn2.style.opacity = "0.5";
  btn3.style.opacity = "0.5";
  btn4.style.opacity = "0.5";
  btn5.style.opacity = "1";
  btn6.style.opacity = "0.5";

  text1.style.display = "none";
  text2.style.display = "none";
  text3.style.display = "none";
  text4.style.display = "none";
  text5.style.display = "block";
  text6.style.display = "none";

  text1.style.opacity = "0";
  text2.style.opacity = "0";
  text3.style.opacity = "0";
  text4.style.opacity = "0";
  text5.style.opacity = "1";
  text6.style.opacity = "0";

  title1.style.display = "none";
  title2.style.display = "none";
  title3.style.display = "none";
  title4.style.display = "none";
  title5.style.display = "block";
  title6.style.display = "none";

  title1.style.opacity = "0";
  title2.style.opacity = "0";
  title3.style.opacity = "0";
  title4.style.opacity = "0";
  title5.style.opacity = "1";
  title6.style.opacity = "0";

  ex1.style.display = "none";
  ex2.style.display = "none";
  ex3.style.display = "none";
  ex4.style.display = "none";
  ex5.style.display = "block";
  ex6.style.display = "none";

  ex1.style.opacity = "0";
  ex2.style.opacity = "0";
  ex3.style.opacity = "0";
  ex4.style.opacity = "0";
  ex5.style.opacity = "1";
  ex6.style.opacity = "0";
});

btn6.addEventListener("click", () => {
  img1.style.display = "none";
  img2.style.display = "none";
  img3.style.display = "none";
  img4.style.display = "none";
  img5.style.display = "none";
  img6.style.display = "block";

  btn1.style.opacity = "0.5";
  btn2.style.opacity = "0.5";
  btn3.style.opacity = "0.5";
  btn4.style.opacity = "0.5";
  btn5.style.opacity = "0.5";
  btn6.style.opacity = "1";

  text1.style.display = "none";
  text2.style.display = "none";
  text3.style.display = "none";
  text4.style.display = "none";
  text5.style.display = "none";
  text6.style.display = "block";

  text1.style.opacity = "0";
  text2.style.opacity = "0";
  text3.style.opacity = "0";
  text4.style.opacity = "0";
  text5.style.opacity = "0";
  text6.style.opacity = "1";

  title1.style.display = "none";
  title2.style.display = "none";
  title3.style.display = "none";
  title4.style.display = "none";
  title5.style.display = "none";
  title6.style.display = "block";

  title1.style.opacity = "0";
  title2.style.opacity = "0";
  title3.style.opacity = "0";
  title4.style.opacity = "0";
  title5.style.opacity = "0";
  title6.style.opacity = "1";

  ex1.style.display = "none";
  ex2.style.display = "none";
  ex3.style.display = "none";
  ex4.style.display = "none";
  ex5.style.display = "none";
  ex6.style.display = "block";

  ex1.style.opacity = "0";
  ex2.style.opacity = "0";
  ex3.style.opacity = "0";
  ex4.style.opacity = "0";
  ex5.style.opacity = "0";
  ex6.style.opacity = "1";
});

// Car Drive //

// for another helper function that calculates the exact progress value along a motion path where it'll hit the center of the provided target on the given axis ("y" by default), see https://codepen.io/GreenSock/pen/BaPdrKM
gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

gsap.set("#motionSVG", { scale: 0.7, autoAlpha: 1 });
gsap.set("#tractor", { transformOrigin: "50% 50%" });
let rotateTo = gsap.quickTo("#tractor", "rotation"),
  prevDirection = 0;

gsap.to("#motionSVG", {
  scrollTrigger: {
    trigger: "#motionPath",
    start: "top center",
    end: () =>
      "+=" +
      document.querySelector("#motionPath").getBoundingClientRect().height,
    scrub: 0.5,
    markers: true,
    onUpdate: (self) => {
      if (prevDirection !== self.direction) {
        // only run this when we're changing direction
        rotateTo(self.direction === 1 ? 0 : -180);
        prevDirection = self.direction;
      }
    },
  },
  ease: pathEase("#motionPath"), // a custom ease that helps keep the tractor centered
  immediateRender: true,
  motionPath: {
    path: "#motionPath",
    align: "#motionPath",
    alignOrigin: [0.5, 0.5],
    autoRotate: 90,
  },
});

// helper function that returns and ease that bends time to ensure the tractor stays relatively centered. Requires MotionPathPlugin of course
function pathEase(path, axis = "y", precision = 1) {
  let rawPath = MotionPathPlugin.cacheRawPathMeasurements(
      MotionPathPlugin.getRawPath(gsap.utils.toArray(path)[0]),
      Math.round(precision * 12)
    ),
    useX = axis === "x",
    start = rawPath[0][useX ? 0 : 1],
    end =
      rawPath[rawPath.length - 1][
        rawPath[rawPath.length - 1].length - (useX ? 2 : 1)
      ],
    range = end - start,
    l = Math.round(precision * 200),
    inc = 1 / l,
    positions = [0],
    a = [],
    minIndex = 0,
    getClosest = (p) => {
      while (positions[minIndex] <= p && minIndex++ < l) {}
      a.push(
        ((p - positions[minIndex - 1]) /
          (positions[minIndex] - positions[minIndex - 1])) *
          inc +
          minIndex * inc
      );
    },
    i = 1,
    p,
    v;
  for (; i < l; i++) {
    p = i / l;
    v = MotionPathPlugin.getPositionOnPath(rawPath, p)[axis];
    positions[i] = (v - start) / range;
  }
  positions[l] = 1;
  for (i = 0; i < l; i++) {
    getClosest(i / l);
  }
  a.push(1);
  return (p) => {
    let i = p * l,
      s = a[i | 0];
    return s + (a[Math.ceil(i)] - s) * (i % 1);
  };
}
