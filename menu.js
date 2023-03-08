
const hamburger = document.querySelector(".ham");  
const navsub = document.querySelector(".nav-sub");
const remover = document.querySelector(".nav-link");

hamburger.addEventListener('click', () => {  
hamburger.classList.toggle("change")  
navsub.classList.toggle("nav-change")  
});  

remover.addEventListener('click', function() {

hamburger.classList.remove("change") 
navsub.classList.remove("nav-change") 

});

// cards region
const cards = [
    {
        name: "Multi-Post Stories Gain+Glory",
        tech: ["html", "javascript", "css"],
        button :"See project",
      },
      {
        name: "Multi-Post Stories Gain+Glory",
        tech: ["html", "javascript", "css"],
        button :"See project",
      },
      {
        name: "Multi-Post Stories Gain+Glory",
        tech: ["html", "javascript", "css"],
        button :"See project",
      },
      {
        name: "Multi-Post Stories Gain+Glory",
        tech: ["html", "javascript", "css"],
        button :"See project",
      },
      {
        name: "Multi-Post Stories Gain+Glory",
        tech: ["html", "javascript", "css"],
        button :"See project",
      },
      {
        name: "Multi-Post Stories Gain+Glory",
        tech: ["html", "javascript", "css"],
        button :"See project",
      },

];

const  recentWorks = document.querySelector (".recent-works");

const topper =document.createElement('div');
topper.classList.add('topper');
recentWorks.appendChild(topper);

const section_head = document.createElement('h2');
section_head.innerHTML = 'My Recent Works';
recentWorks.appendChild(section_head);

const indicator = document.createElement('div');
indicator.classList.add('indicator');
recentWorks.appendChild(indicator);

const recentWorkCards =document.createElement('div');
recentWorkCards.classList.add('recent-works-cards');
recentWorks.appendChild(recentWorkCards);


