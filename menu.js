const hamburger = document.querySelector(".ham");
const navsub = document.querySelector(".nav-sub");
const remover = document.querySelector(".nav-link");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("change");
  navsub.classList.toggle("nav-change");
});

remover.addEventListener("click", function () {
  hamburger.classList.remove("change");
  navsub.classList.remove("nav-change");
});


window.onload = function loader() {

  // Array of cards region

  const cards = [
    {
      name: "Multi-Post Stories Gain+Glory",
      tech: ["Ruby on Rails", "CSS", "Javascript", "HTML"],
      index:"1",
      id:"one",
    },
    {
      name: "Multi-Post Stories Gain+Glory",
      tech: ["Ruby on Rails", "CSS", "Javascript", "HTML"],
      index:"2",
      id:"two",
    },
    {
      name: "Multi-Post Stories Gain+Glory",
      tech: ["Ruby on Rails", "CSS", "Javascript", "HTML"],
      index:"3",
      id:"three",
    },
    {
      name: "Multi-Post Stories Gain+Glory",
      tech: ["Ruby on Rails", "CSS", "Javascript", "HTML"],
      index:"4",
      id:"four",
    },
    {
      name: "Multi-Post Stories Gain+Glory",
      tech: ["Ruby on Rails", "CSS", "Javascript", "HTML"],
      index:"5",
      id:"five",
    },
    {
      name: "Multi-Post Stories Gain+Glory",
      tech: ["Ruby on Rails", "CSS", "Javascript", "HTML"],
      index:"6",
      id:"six",
    },
  ];


  // Array of Projects pop-up

  const projects = [
    {
      name: "Keeping track of hundreds of components",
      image: "images/Snapshoot-Portfolio.svg",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.",
      technologies: ["Ruby on Rails", "CSS", "JavaScript", "HTML"],
      live: "https://github.com/0sugo/portfolio_mobile_view",
      source: "https://0sugo.github.io/portfolio_mobile_view/",
      index:"one",
    },
    {
      name: "Keeping track of hundreds of components",
      image: "images/Snapshoot-Portfolio.svg",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.",
      technologies: ["Ruby on Rails", "CSS", "JavaScript", "HTML"],
      live: "https://github.com/0sugo/portfolio_mobile_view",
      source: "https://0sugo.github.io/portfolio_mobile_view/",
      index:"two",
    },
    {
      name: "Keeping track of hundreds of components",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.",
      technologies: ["Ruby on Rails", "CSS", "JavaScript", "HTML"],
      live: "https://github.com/0sugo/portfolio_mobile_view",
      source: "https://0sugo.github.io/portfolio_mobile_view/",
      index:"three",
    },
    {
      name: "Keeping track of hundreds of components",
      image: "images/Snapshoot-Portfolio.svg",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.",
      technologies: ["Ruby on Rails", "CSS", "JavaScript", "HTML"],
      live: "https://github.com/0sugo/portfolio_mobile_view",
      source: "https://0sugo.github.io/portfolio_mobile_view/",
      index:"four",
    },
    {
      name: "Keeping track of hundreds of components",
      image: "images/Snapshoot-Portfolio.svg",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.",
      technologies: ["Ruby on Rails", "CSS", "JavaScript", "HTML"],
      live: "https://github.com/0sugo/portfolio_mobile_view",
      source: "https://0sugo.github.io/portfolio_mobile_view/",
      index:"five",
    },
    {
      name: "Keeping track of hundreds of components",
      image: "images/Snapshoot-Portfolio.svg",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.",
      technologies: ["Ruby on Rails", "CSS", "JavaScript", "HTML"],
      live: "https://github.com/0sugo/portfolio_mobile_view",
      source: "hhttps://0sugo.github.io/portfolio_mobile_view/",
      index:"six",
    },
  ];

  const recentWorks = document.querySelector(".recent-works");


  const topper = document.createElement("div");
  topper.classList.add("topper");
  recentWorks.appendChild(topper);

  const section_head = document.createElement("h2");
  section_head.innerHTML = "My Recent Works";
  recentWorks.appendChild(section_head);

  const indicator = document.createElement("div");
  indicator.classList.add("indicator");
  recentWorks.appendChild(indicator);

  const recentWorkCards = document.createElement("div");
  recentWorkCards.classList.add("recent-works-cards");
  recentWorks.appendChild(recentWorkCards);

  cards.forEach((card) => {
    let works = document.createElement("div");
    works.classList.add("works", "work1");
    recentWorkCards.append(works);

    const workDetails = document.createElement("div");
    workDetails.classList.add("work-details");
    works.append(workDetails);

    const title = document.createElement("h3");
    title.innerHTML = `${card.name}`;
    workDetails.append(title);

    const languageTags = document.createElement("ul");
    languageTags.classList.add("language-tags");
    workDetails.append(languageTags);

    for (let i = 0; i < card.tech.length; i++) {
      const skill = document.createElement("li");
      skill.innerHTML = `${card.tech[i]}`;
      languageTags.append(skill);
    }

    const see = document.createElement("a");
    see.innerHTML = "see project";
    see.setAttribute('href', `#${card.id}`);
    see.addEventListener("click",modal);
    see.classList.add("works-button");
    workDetails.appendChild(see);
    

  });
  const modal_pop = document.querySelector(".try");

  function modal() {
    let pops = '';
    projects.forEach((project) => {
      pops += `<div id="${project.index}" class="overlay">
<div class="popup">
                <a class="close" href="#">&times;</a>
                <div class="content">
                    <div class="pop-image"></div>

                    <div class="contented">
                    <h2 id="item-1">${project.name}</h2>
                    <ul class="language-tag" id="item-2">
                        <li>Ruby on Rails</li>
                        <li>CSS</li>
                        <li>Javascript</li>
                        <li>HTML</li>
                    </ul>
                    <p id="item-3">${project.description}</p>

                    <div class="see-section" id="item-4">
                        <div class="see-section-1"><a href="${project.live}">See Live</a><img src="images/see live icon.svg" alt=""></div>
    
                        <div class="see-section-2"><a href="${project.name}">See Source</a><img src="images/Icon -GitHub.svg" alt=""></div>
                        
                    </div>
                    </div>
                    

                </div>
                

            </div>
            </div>
            `
    });
    modal_pop.innerHTML = pops;
  }
};
