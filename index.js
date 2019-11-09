'use strict'
let imgs = [
    "./assets/img/img1.jpg",
    "./assets/img/img2.jpg",
    "./assets/img/img3.jpg",
    "./assets/img/img4.jpg",
    "./assets/img/img5.jpg",
    "./assets/img/img6.jpg"
  ];
const path = "./assets/img/"
const slide = document.getElementById('slide');
let index = 0
let time_seconds = 5
const enable_auto_slide = true
function changeIndex(indice, array){
    const arr_size = array.length
    if(index >= arr_size -1 ){
        return 0
    }
    return index + 1
}
if(enable_auto_slide){

    setInterval(async () => {
        index = changeIndex(index, imgs)
        console.log("Start--")
        //slide.classList.remove = "show"
        slide.classList.add ("change")
        const delay = await setTimeout(() => {
            console.log("delay1")
            
            slide.src= imgs[index]
            console.log(imgs[index])
        }, 1000);
        const delay2 = await setTimeout(() => {
            console.log("delay2")
            slide.classList.remove("change")
        }, 1000);
        
        //slide.classList.add = "show"
    }, time_seconds * 1000);

}