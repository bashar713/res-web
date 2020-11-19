// var btn = document.querySelector(".hamb");
var sideNav = document.querySelector(".box");
// var top = document.querySelector(".top");
// var mid = document.querySelector(".mid");
// var bot = document.querySelector(".bot");


// btn.onclick = function(){
//     if(sideNav.style.left =="-200px"){
//         sideNav.style.left = 0;
//     }
//     else{
//         sideNav.style.left = "-200px";

//     }
// }




var bt = document.querySelector(".btn");
var tp = document.querySelector(".tp");
var md = document.querySelector(".md");
var btd = document.querySelector(".bt");
var stat = true;
bt.addEventListener("click", () => {
    if (stat) {

        if (sideNav.style.left = "-200px") {
            sideNav.style.left = 0;
        } 
        tp.classList.add("open");
        md.classList.add("open");
        btd.classList.add("open");
        stat = false;
    } else { 
        sideNav.style.left = "-200px";
        tp.classList.remove("open");
        md.classList.remove("open");
        btd.classList.remove("open");
        stat = true;
    }
});




// md.style.visibility = "hidden";
// tp.style.transform = "rotate(45deg)";
// tp.style.position = "absolute";
// tp.style.top = "25px";
// tp.style.backgroundColor = "yellow";

// btd.style.transform = "rotate(-45deg)"; 
// btd.style.position = "absolute";
// btd.style.backgroundColor = "orange";
// btd.style.bottom = "20px";