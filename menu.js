
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
        tech: ["Ruby on Rails","CSS","Javascript","HTML"],
        button :"See project",
      },
      {
        name: "Multi-Post Stories Gain+Glory",
        tech: ["Ruby on Rails","CSS","Javascript","HTML"],
        button :"See project",
      },
      {
        name: "Multi-Post Stories Gain+Glory",
        tech: ["Ruby on Rails","CSS","Javascript","HTML"],
        button :"See project",
      },
      {
        name: "Multi-Post Stories Gain+Glory",
        tech: ["Ruby on Rails","CSS","Javascript","HTML"],
        button :"See project",
      },
      {
        name: "Multi-Post Stories Gain+Glory",
        tech: ["Ruby on Rails","CSS","Javascript","HTML"],
        button :"See project",
      },
      {
        name: "Multi-Post Stories Gain+Glory",
        tech: ["Ruby on Rails","CSS","Javascript","HTML"],
        button :"See project",
      },

];



// Projects pop-up 

const projects = [
    {
      name: 'Keeping track of hundreds of components',
      image: 'images/Snapshoot-Portfolio.svg',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.",
      technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
      live: 'https://github.com/0sugo/portfolio_mobile_view',
      source: 'https://0sugo.github.io/portfolio_mobile_view/',
    },
    {
      name: 'Keeping track of hundreds of components',
      image: 'images/Snapshoot-Portfolio.svg',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.",
      technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
      live: 'https://github.com/0sugo/portfolio_mobile_view',
      source: 'https://0sugo.github.io/portfolio_mobile_view/',
    },
    {
      name: 'Keeping track of hundreds of components',
      image: 'images/Snapshoot-Portfolio.svg',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.",
      technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
      live: 'https://github.com/0sugo/portfolio_mobile_view',
      source: 'https://0sugo.github.io/portfolio_mobile_view/',
    },
    {
      name: 'Keeping track of hundreds of components',
      image: 'images/Snapshoot-Portfolio.svg',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.",
      technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
      live: 'https://github.com/0sugo/portfolio_mobile_view',
      source: 'https://0sugo.github.io/portfolio_mobile_view/',
    },
    {
      name: 'Keeping track of hundreds of components',
      image: 'images/Snapshoot-Portfolio.svg',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.",
      technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
      live: 'https://github.com/0sugo/portfolio_mobile_view',
      source: 'hhttps://0sugo.github.io/portfolio_mobile_view/',
    },
    {
      name: 'Keeping track of hundreds of components',
      image: 'images/Snapshoot-Portfolio.svg',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.",
      technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
      live: 'https://github.com/0sugo/portfolio_mobile_view',
      source: 'https://0sugo.github.io/portfolio_mobile_view/',
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

    cards.forEach(card => {
    let works = document.createElement('div');
    works.classList.add('works','work1');
    recentWorkCards.append(works);
 
    const workDetails = document.createElement('div');
    workDetails.classList.add('work-details');
    works.append(workDetails);

    const title = document.createElement('h3');
    title.innerHTML = `${card.name}`;
    workDetails.append(title);

    const languageTags = document.createElement('ul');
    languageTags.classList.add('language-tags');
    workDetails.append(languageTags);

    const skill = document.createElement('li');

    for (let i = 0; i < card.tech.length; i++) {
        skill.innerHTML = `${card.tech[i]}`;
        languageTags.append(card.tech[i]);
        
   }



});




const textNode = document.createTextNode('This is generated dynamically');
recentWorks.append(textNode);
