//WELCOME//
function homePop(){
    var html = document.querySelector("html");
    var body = document.querySelector("body");
    html.style.overflow = "visible";
    body.style.overflow = "visible";
    var welcome = document.querySelector("header");
    welcome.style.display = "none";
    pop();
}
    setTimeout(homePop, 6000);	

function pop(){
    homestyle.style.display = "block";
}

//HOME
const homestyle = document.querySelector(".home-container");
var ideasSection = document.querySelector(".ideas-section");
function home(){
    showTab(0);
}

//SHOW TABS
//links
const navList = document.getElementById("navList");
const navLink = navList.querySelectorAll("li");

//tabs
const tab = document.querySelectorAll("#tabContainer .tab");
console.log(tab);


function showTab(tabNum){
    let current = document.getElementsByClassName("active");
    tab.forEach((me) =>  {
        me.style.display = "none";
    });
    navLink.forEach((me)=>{
        if(current.length > 0){
            me.className = me.className.replace("active", "");
        }
    });

    homestyle.style.display = "none";
    tab[tabNum].style.display = "block";
    navLink[tabNum].classList.add("active");
}
//NAV LINK SET ACTIVE

//CLOSE GALLERY
const html = document.querySelector("html");
const closes = document.querySelector(".close");
const gallerySection = document.querySelector(".gallery-section");
gallerySection.style.display = "none";
closes.addEventListener("click",()=>{
gallerySection.style.display = "none";
html.style.overflow = "visible";
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
    popModal();
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
    popModal();
    gallery(courouselImagesBox2,size2,courouselMain2);
}

//GALLERY POP
function popModal(){
     html.style.overflow = "hidden";
}

//GALLERY 
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