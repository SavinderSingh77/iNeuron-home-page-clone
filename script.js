// Declaring variables
const crossBtn = document.getElementById("cross-btn");
const discountAlert = document.getElementById("discount-alert");
let imageContainer = document.getElementsByClassName("image-container");
let achievementImages = document.getElementsByClassName("achievement-images");
const achievementscarouser = document.getElementById("achievements-carouser");
let circularBtn = document.getElementsByClassName("circular-btn");
circularBtn = Array.from(circularBtn)
achievementImages = Array.from(achievementImages)
imageContainer = Array.from(imageContainer);
console.log(imageContainer);
let counter = 0;

// console.log(crossBtn, discountAlert)

//collapsing the discountAlert when click on crossBtn
 crossBtn.addEventListener("click" ,()=>{
    discountAlert.style.display = "none";
 })

 imageContainer.forEach((elem,index) => {
   elem.style.transform = `translateX(${index*100}%)`;
 });

function achivementCarousel () {
   achievementImages.forEach((img,index)=>{
      img.style.transform = `translateX(-${counter*100}%)`;
   })
 if(counter<achievementImages.length-1){
   if(counter === 0 || counter >2) {
   circularBtn[0].style.backgroundColor = "white";
   circularBtn[1].style.backgroundColor = "#B4B2B2";
   circularBtn[2].style.backgroundColor = "#B4B2B2";
 }
  else if(counter ===1) {
   circularBtn[0].style.backgroundColor = "#B4B2B2";
   circularBtn[1].style.backgroundColor = "white";
   circularBtn[2].style.backgroundColor = "#B4B2B2";
 }
 if(counter ===2) {
   circularBtn[0].style.backgroundColor = "#B4B2B2";
   circularBtn[1].style.backgroundColor = "#B4B2B2";
   circularBtn[2].style.backgroundColor = "white";
 }

 }

 
}

function achievementCarouselAuto(){
   if(counter >= achievementImages.length){
      counter = 0;
   }else{achievementImages.forEach(img=>{
      img.style.transition = "all 1s ease-in-out"
   })}

    achivementCarousel();
   counter++;
}

// setInterval(achievementCarouselAuto,2000);

achievementImages[achievementImages.length-1].addEventListener('transitionend', ()=>{
if (counter >= achievementImages.length){
   achievementImages.forEach((img)=>{
      img.style.transition = "none"
     
   })
}
})

circularBtn.forEach((btn,index)=>{
   btn.addEventListener("click",()=>{
      counter = index;
   })
})