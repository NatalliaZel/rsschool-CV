const skillHtml = document.getElementById("item-html");
const skillCss = document.getElementById("item-css");
const skillJs = document.getElementById("item-js");
const skillGit = document.getElementById("item-git");
const skillVsc = document.getElementById("item-vsc");

const numberHtml = document.getElementById("number-html");
const numberCss = document.getElementById("number-css");
const numberJs = document.getElementById("number-js");
const numberGit = document.getElementById("number-git");
const numberVsc = document.getElementById("number-vsc");

const circleEng = document.getElementById("circle-eng");
const circlePol = document.getElementById("circle-pol");

const r1 = document.getElementById("r1");
const r2 = document.getElementById("r2");
const r3 = document.getElementById("r3");
const r4 = document.getElementById("r4");

const slider1 = document.getElementById("slider-image1");
const slider2 = document.getElementById("slider-image2");
const slider3 = document.getElementById("slider-image3");
const slider4 = document.getElementById("slider-image4");

let counterHtml = 0;
let counterCss = 0;
let counterJs = 0;
let counterGit = 0;
let counterVsc = 0;

let index = 0;

function resetClasses() {
  skillHtml.classList.remove("onloaded-html");
  skillCss.classList.remove("onloaded-css");
  skillJs.classList.remove("onloaded-js");
  skillGit.classList.remove("onloaded-git");
  skillVsc.classList.remove("onloaded-vsc");
  circleEng.classList.remove("circle-active-eng");
  circlePol.classList.remove("circle-active-pol");
}

function showSkillsBar() {
  resetClasses();
  requestAnimationFrame(() => {
    skillHtml.classList.add("onloaded-html");
    skillCss.classList.add("onloaded-css");
    skillJs.classList.add("onloaded-js");
    skillGit.classList.add("onloaded-git");
    skillVsc.classList.add("onloaded-vsc");
  });
}

function showPercentages() {
  function showPercentagesHtml() {
    const interval = setInterval(() => {
      if (counterHtml === 80) {
        clearInterval(interval);
      } else {
        counterHtml++;
        numberHtml.innerHTML = `${counterHtml}%`;
      }
    }, 66);
  }

  function showPercentagesCss() {
    const interval = setInterval(() => {
      if (counterCss === 80) {
        clearInterval(interval);
      } else {
        counterCss++;
        numberCss.innerHTML = `${counterCss}%`;
      }
    }, 66);
  }

  function showPercentagesJs() {
    const interval = setInterval(() => {
      if (counterJs === 30) {
        clearInterval(interval);
      } else {
        counterJs++;
        numberJs.innerHTML = `${counterJs}%`;
      }
    }, 172);
  }

  function showPercentagesGit() {
    const interval = setInterval(() => {
      if (counterGit === 30) {
        clearInterval(interval);
      } else {
        counterGit++;
        numberGit.innerHTML = `${counterGit}%`;
      }
    }, 172);
  }

  function showPercentagesVsc() {
    const interval = setInterval(() => {
      if (counterVsc === 50) {
        clearInterval(interval);
      } else {
        counterVsc++;
        numberVsc.innerHTML = `${counterVsc}%`;
      }
    }, 100);
  }

  showPercentagesHtml();
  showPercentagesCss();
  showPercentagesJs();
  showPercentagesGit();
  showPercentagesVsc();
}

function showEngProgressBar() {
  circleEng.classList.add("circle-active-eng");
}

function showPolProgressBar() {
  circlePol.classList.add("circle-active-pol");
}

function showLanguageProgressBar() {
  resetClasses();
  requestAnimationFrame(() => {
    showEngProgressBar();
    showPolProgressBar();
  });
}

function changeIndex() {
  r1.addEventListener("click", () => {
    index = 0;
    changeImage();
    console.log(index);
  });

  r2.addEventListener("click", () => {
    index = 1;
    changeImage();
    console.log(index);
  });

  r3.addEventListener("click", () => {
    index = 2;
    changeImage();
    console.log(index);
  });

  r4.addEventListener("click", () => {
    index = 3;
    changeImage();
    console.log(index);
  });
}

function changeImage() {
  const shift = -index * 600;
  slider1.style.transform = `translateX(${shift}px)`;
  slider2.style.transform = `translateX(${shift}px)`;
  slider3.style.transform = `translateX(${shift}px)`;
  slider4.style.transform = `translateX(${shift}px)`;
}

showSkillsBar();
showPercentages();
showLanguageProgressBar();
changeIndex();
