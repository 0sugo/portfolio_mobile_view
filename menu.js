// var menu_toggle= document.getElementById("overlay");

// var cancel_toggle= document.getElementById("cancel");

// function toggler (){
// if(menu_toggle.style.display==="block" && cancel_toggle.style.display ==="block"){
//     menu_toggle.style.display="none";
//     cancel_toggle.style.display="none";
// }else{
//     menu_toggle.style.display="block";
//     cancel_toggle.style.display="block";
// }

// }

const hamburger = document.querySelector(".ham");  
const navsub = document.querySelector(".nav-sub");  
hamburger.addEventListener('click', () => {  
 hamburger.classList.toggle("change")  
 navsub.classList.toggle("nav-change")  
});  
