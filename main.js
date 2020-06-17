//WELCOME//
function homePop(){
    var welcome = document.querySelector("header");
    welcome.style.display = "none";
    pop();
}
    setTimeout(homePop, 6000);	
var homestyle = document.querySelector(".home-container");
function pop(){
    homestyle.style.display = "block";
}
var ideasSection = document.querySelector(".ideas-section");
function home(){
    homestyle.style.display = "none";
    ideasSection.style.display = "block";
}
//CLOSE GALLERY
const closes = document.querySelector(".close");
const gallerySection = document.querySelector(".gallery-section");
gallerySection.style.display = "none";
closes.addEventListener("click",()=>{
gallerySection.style.display = "none";
});

//TWO GALLERY
let mainOne = document.getElementById("mainOne");
let mainTwo = document.getElementById("mainTwo");

//OPEN GENERAL GALLERY  
function general(){
    gallerySection.style.display = "flex";
    var courouselImagesBox1 = document.querySelectorAll("#mainOne .box");
    var courouselMain1 = document.getElementById("mainOne");
    var size1 = courouselImagesBox1[0].offsetWidth;
    mainOne.style.visibility = "visible"
    mainTwo.style.visibility = "hidden"
    gallery(courouselImagesBox1,size1,courouselMain1);
   // mainTwo.style.display = "none";
}

function small(){
    gallerySection.style.display = "flex";
    var courouselImagesBox2 = document.querySelectorAll("#mainTwo .box");
    var courouselMain2 = document.getElementById("mainTwo");
    var size2 = courouselImagesBox2[0].offsetWidth;
    mainTwo.style.visibility = "visible"
    mainOne.style.visibility = "hidden"
    gallery(courouselImagesBox2,size2,courouselMain2);
}

function gallery(courouselImagesBox,size,courouselMain){


//buttons
let prevBtn = document.querySelector(".prev-btn");
let nextBtn = document.querySelector(".next-btn");

//counter
let counter = 1;

console.log(size);

courouselMain.style.transform = "translateX(" + (-size * counter) + "px"; 

nextBtn.addEventListener("click", ()=>{
    if(courouselImagesBox[counter].getAttribute("id") != "firstClone"){
        counter++;
        courouselMain.style.transition = ".5s";
        courouselMain.style.transform = "translateX(" + (-size * counter) + "px"; 
    }
    else{
        counter = 2;
        courouselMain.style.transition = "none";
        courouselMain.style.transform = "translateX(" + (-size * counter) + "px"; 
    }
});

prevBtn.addEventListener("click", ()=>{

    if(courouselImagesBox[Math.abs(counter)].getAttribute("id") != "lastClone"){
        counter--;
        courouselMain.style.transition = ".5s";
        courouselMain.style.transform = "translateX(" + (-size * counter) + "px"; 
    }
    else{
        courouselMain.style.transition = "none";
        counter = Math.abs(-courouselImagesBox.length + 3);
        courouselMain.style.transform = "translateX(" + (-size * counter) + "px"; 
    }
  
});
}