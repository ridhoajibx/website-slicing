// let body = document.querySelector("#dark");
// let header = document.querySelector("header");
// let footer = document.querySelector(".footer");
// let moon = document.querySelector(".icon-moon");
// let sun = document.querySelector(".icon-sun");
// let btnToggle = document.querySelector("#btn-dark");

// function handleToggleBtn (){
//     if(moon.style.display === "block" && sun.style.display === "none"){
//         moon.style.display = "none";
//         sun.style.display = "block";
//     } else {
//         moon.style.display = "block";
//         sun.style.display = "none";
//     }
//     body.classList.toggle("dark-mode");
//     header.classList.toggle("dark-mode");
//     footer.classList.toggle("dark-mode");
// }

let humberger = document.querySelector('#humberger');
let nav = document.querySelector('.header-right');

humberger.addEventListener("click", handleOpen);

function handleOpen (){
    nav.classList.toggle("active");
}
