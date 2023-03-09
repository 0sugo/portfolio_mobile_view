
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


window.onload = function loader() {
// cards region
const cards = [
    {
        name: "Multi-Post Stories Gain+Glory",
        tech: ["Ruby on Rails","CSS","Javascript","HTML"],
      },
      {
        name: "Multi-Post Stories Gain+Glory",
        tech: ["Ruby on Rails","CSS","Javascript","HTML"],
      },
      {
        name: "Multi-Post Stories Gain+Glory",
        tech: ["Ruby on Rails","CSS","Javascript","HTML"],
      },
      {
        name: "Multi-Post Stories Gain+Glory",
        tech: ["Ruby on Rails","CSS","Javascript","HTML"],
      },
      {
        name: "Multi-Post Stories Gain+Glory",
        tech: ["Ruby on Rails","CSS","Javascript","HTML"],
      },
      {
        name: "Multi-Post Stories Gain+Glory",
        tech: ["Ruby on Rails","CSS","Javascript","HTML"],
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

    

    for (let i = 0; i < card.tech.length; i++) {
        const skill = document.createElement('li');
        skill.innerHTML = `${card.tech[i]}`;
        languageTags.append(skill);   
   }


   const see = document.createElement('a');
   see.innerHTML = 'See Project';
   see.classList.add('works-button');
   workDetails.appendChild(see);

});

// pop-up window

// const overlay = document.createElement('div');
// overlay.classList.add('overlay');
// overlay.id="popup1";
// document.body.append(overlay);

// const popup = document.createElement('div');
// popup.classList.add('popup');
// overlay.appendChild (popup);

// const close = document.createElement('a');
// close.href = "#";
// close.classList.add("close");
// close.innerHTML = "&times;";
// popup.append(close);

// const content = document.createElement('div');
// content.classList.add("content");
// popup.append(content);

// const seeSection = document.createElement('div');
// seeSection.classList.add('see-section');
// seeSection.id = "desktop";
// popup.append(seeSection);

// const popImage = document.createElement('div');
// popImage.classList.add('pop-image');
// content.append(popImage);

// const popHeader = document.createElement('h2');
// popHeader.innerHTML = `${projects[0].name}`;
// content.append(popHeader);

// const popText = document.createElement("p");
// popText.innerHTML = "LoremIpsum";
// content.append(popText);

// const seeSection1 = document.createElement('div');
// seeSection1.classList.add('see-section-1');
// const live = document.createElement('a');
// live.href='www.dfvfv.com';
// live.innerHTML= "See Live";
// seeSection1.append(live);
// const seeimage = document.createElement('img');
// seeimage.src="images/see live icon.svg"
// seeSection1.append(seeimage);
// seeSection.append(seeSection1);

// const seeSection2 = document.createElement('div');
// seeSection2.classList.add('see-section-2');
// const source = document.createElement('a');
// source.href='www.ftttf.com';
// source.innerHTML= "See Source";
// seeSection2.append(source);
// const seeimage2 = document.createElement('img');
// seeimage2.src="images/Icon -GitHub.svg"
// seeSection2.append(seeimage2);
// seeSection.append(seeSection2);







// const textNode = document.createTextNode('This is generated dynamically');
// recentWorks.append(textNode);
}