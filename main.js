//WELCOME//
const html = document.querySelector("html");
const body = document.querySelector("body");
const homestyle = document.querySelector(".home-container");
function homePop(){
    
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

var ideasSection = document.querySelector(".ideas-section");

//function home(){
  //  var thisCont = document.querySelector(".home-container");
    //clicks(thisCont);
    
//}

//CONTAINER TRANSITION
function clicks(n){
    if(n === 0){
    homestyle.style.animation = "containerTrans 400ms ease-in";
    homestyle.style.animationFillMode = "forwards";
   // showTab(0);
   htmlHid();
   setTimeout(htmlVis, 700);
    setTimeout(showTab(0), 1000);	
    
    }
    else{
    homestyle.style.animation = "containerTrans 400ms ease-in";
    homestyle.style.animationFillMode = "forwards";
    htmlHid();
    setTimeout(htmlVis, 700);
    }
    
}


//SHOW TABS
//links
const navList = document.getElementById("navList");
const navLink = navList.querySelectorAll("li");
//tabs
const tab = document.querySelectorAll("#tabContainer .tab");
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
  //  homestyle.style.display = "none";
   tab[tabNum].style.display = "block";
    navLink[tabNum].classList.add("active");
    clicks(1);
   // if(displayHome != "-100vw"){
     //  
    //}
}

//STAR HOVER
function hover(star){
    const starSet = document.querySelectorAll(".stars-cont i");
    starSet.forEach((me) => {
        me.style.color = "whitesmoke";
    });
    
    for(let i = 0; i <= star; i++){
        starSet[i].style.color = "rgb(250, 247, 49)";
    }
}

//CLOSE GALLERY
const closes = document.querySelector(".close");
const gallerySection = document.querySelector(".gallery-section");
gallerySection.style.display = "none";
closes.addEventListener("click",()=>{
gallerySection.style.animation = "fromTop 400ms ease-out";
gallerySection.style.animationFillMode = "forwards";
//gallerySection.style.display = "none";
htmlVis();
});

//TWO GALLERY
let mainOne = document.getElementById("mainOne");
let mainTwo = document.getElementById("mainTwo");

//OPEN GENERAL GALLERY  
function general(){
    gallerySection.style.display = "flex";
    gallerySection.style.animation = "fromBottom 400ms ease-out";
    gallerySection.style.animationFillMode = "forwards";
    courouselImagesBox1 = document.querySelectorAll("#mainOne .box");
    courouselMain1 = document.getElementById("mainOne");
    size1 = courouselImagesBox1[0].offsetWidth;
    mainOne.style.visibility = "visible"
    mainTwo.style.visibility = "hidden"
    html.style.overflow = "hidden";
    gallery(courouselImagesBox1,size1,courouselMain1);
   // mainTwo.style.display = "none";
}

function small(){
    gallerySection.style.display = "flex";
    gallerySection.style.animation = "fromBottom 400ms ease-out";
    gallerySection.style.animationFillMode = "forwards";
    courouselImagesBox2 = document.querySelectorAll("#mainTwo .box");
    courouselMain2 = document.getElementById("mainTwo");
    size2 = courouselImagesBox2[0].offsetWidth;
    mainTwo.style.visibility = "visible"
    mainOne.style.visibility = "hidden"
    html.style.overflow = "hidden";
    gallery(courouselImagesBox2,size2,courouselMain2);
}

//GALLERY POP
function htmlHid(){
     html.style.overflow = "hidden";
     body.style.overflow = "hidden";
}
//VISIBLE HTML
function htmlVis(){
    html.style.overflow = "visible";
    body.style.overflow = "visible";
}

//GALLERY 
function gallery(courouselImagesBox,size,courouselMain){
//buttons
let prevBtn = document.querySelector(".prev-btn");
let nextBtn = document.querySelector(".next-btn");

//counter
let counter = 1;
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