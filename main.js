function homePop(){
    var welcome = document.querySelector("header");
    console.log(welcome);
    welcome.style.display = "none";
    pop();
}
    setTimeout(homePop, 6000);	

function pop(){
    var homestyle = document.querySelector(".home-container");
    console.log(homestyle);
    homestyle.style.display = "block";
}