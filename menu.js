
const hamburger = document.querySelector(".ham");  
const navsub = document.querySelector(".nav-sub");
const remover = document.querySelector(".nav-link");

hamburger.addEventListener('click', () => {  
hamburger.classList.toggle("change")  
navsub.classList.toggle("nav-change")  
});  

remover.addEventListener('click', function(){

hamburger.classList.remove("change") 
navsub.classList.remove("nav-change") 

});


