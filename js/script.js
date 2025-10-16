const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

function createCardTemplate(teamMember) {
  const { name, role, email, img } = teamMember;
  const card =
  `<div class="col">
    <div class="card bg-dark mb-5 ms-3">
      <div class="row g-0">
        <div class="col-md-4">
          <img class="card-img" src="${img}" alt="${name}"/>
        </div>
      
        <div class="col-md-8">
          <div class="card-body">
            <h3 class="card-title text-light">${name}</h3>
            <p class="card-text text-light">${role}</p>
            <a class="text-decoration-none" href="">Mail: ${email}</a>
          </div>
        </div>

      </div>
    </div>
  </div>`;
  return card;
};

const teamContainerElem = document.querySelector(".row");
let teamCards = "";

for (let i = 0; i < teamMembers.length; i++) {
  teamCards += createCardTemplate(teamMembers[i]);
};
teamContainerElem.innerHTML = teamCards;























