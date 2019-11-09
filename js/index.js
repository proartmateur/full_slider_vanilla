"use strict";
let imgs = [
  "./assets/img/img1.jpg",
  "./assets/img/img2.jpg",
  "./assets/img/img3.jpg",
  "./assets/img/img4.jpg",
  "./assets/img/img5.jpg",
  "./assets/img/img6.jpg"
];

const path = "./assets/img/";
const slide = document.getElementById("slide");
const log = document.getElementById("log");
const slide_num = document.getElementById("slide-num");
const auto_play = document.getElementById("auto-play");
const speed_play = document.getElementById("speed");

let log_is_show = true;
let index = 0;
let time_seconds = 5;
let enable_auto_slide = false;
function changeIndex(indice, array, increment) {
  const arr_size = array.length;
  if (indice >= arr_size - 1) {
    return 0;
  }
  const delta = indice + increment;
  if (delta <= 0) {
    return 0;
  }
  return delta;
}

async function changeSlide(sentido) {
    let increment = 1;
    if (sentido === "next") {
      increment = 1;
    } else {
      increment = -1;
    }
  
    index = changeIndex(index, imgs, increment);
    if (sentido === "first") {
      index = 0;
    }
    console.log("Start--", index);
    //slide.classList.remove = "show"
    slide.classList.add("change");
    const delay = await setTimeout(() => {
      console.log("delay1");
  
      slide.src = imgs[index];
      console.log(imgs[index]);
      slide_num.innerText = "Slide: " + index;
    }, 1000);
    const delay2 = await setTimeout(() => {
      console.log("delay2");
      slide.classList.remove("change");
    }, 1000);
  }
  
function autoPlay(enable) {
  auto_play.innerText = `Auto play: ${enable}`;
  speed_play.innerText = `Speed: ${time_seconds}`;
  if (enable) {
    console.log("Autoplaying on: ", time_seconds, " seconds");
    window.intervalo = setInterval(async () => {
      /* index = changeIndex(index, imgs, 1);
      console.log("Start--", index);
      //slide.classList.remove = "show"
      slide.classList.add("change");
      const delay = await setTimeout(() => {
        console.log("delay1");

        slide.src = imgs[index];
        console.log(imgs[index]);
      }, 1000);
      const delay2 = await setTimeout(() => {
        console.log("delay2");
        slide.classList.remove("change");
      }, 1000); */
      changeSlide('next')

      //slide.classList.add = "show"
    }, time_seconds * 1000);
  } else {
    clearInterval(window.intervalo);
    console.log("Paused");
  }
}



function singleKey(key) {
  console.log(key);
  if (key === keys.next_slide) {
    changeSlide("next");
  }
  if (key === keys.prev_slide) {
    changeSlide("prev");
  }
  if (key === keys.toggle_play) {
    if (!enable_auto_slide) {
      enable_auto_slide = true;
    } else {
      enable_auto_slide = false;
    }
    autoPlay(enable_auto_slide);
  }
  if (key === keys.toggle_log) {
    if (!log_is_show) {
      log_is_show = true;
      log.classList.remove("hide-log");
    } else {
      log_is_show = false;
      log.classList.add("hide-log");
    }
  }
  if (key === keys.goto_first_slide) {
    changeSlide("first");
  }
  if (key === keys.speed_down) {
    time_seconds -= 1;
    speed_play.innerText = `Speed: ${time_seconds}`;
  }
  if (key === keys.speed_up) {
    time_seconds += 1;
    speed_play.innerText = `Speed: ${time_seconds}`;
  }
}
changeSlide("first");
autoPlay(enable_auto_slide);
