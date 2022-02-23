const team = [
    {
      name: 'Wayne Barnett',
      role: 'Founder & CEO',
      image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
      name: 'Angela Caroll',
      role: 'Chief Editor',
      image: 'angela-caroll-chief-editor.jpg',
    },
    {
      name: 'Walter Gordon',
      role: 'Office Manager',
      image: 'walter-gordon-office-manager.jpg',
    },
    {
      name: 'Angela Lopez',
      role: 'Social Media Manager',
      image: 'angela-lopez-social-media-manager.jpg',
    },
    {
      name: 'Scott Estrada',
      role: 'Developer',
      image: 'scott-estrada-developer.jpg',
    },
    {
      name: 'Barbara Ramos',
      role: 'Graphic Designer',
      image: 'barbara-ramos-graphic-designer.jpg',
    },
  ];


  const teamContainerElement = document.querySelector('.team-container');

  for ( let i = 0; i < team.length; i++ ) {

    const teamMember = team[i];
    function stampaTeamMember (teamMember);

  }


  function getCard(teamMember){
    const name = teamMember.name;
    const image = teamMember.image;
    const role = teamMember.role;

    return `
    <div class="team-card">
        <div class="card-image">
            <img src="img/${team[i].image}" alt="${team[i].name}">
        </div>
        <div class="card-text">
            <h3>${team[i].name}</h3>
            <p>${team[i].role}</p>
        </div>
    </div>
    `
  }
  

  function newTeamMember (name, image, role) {

    return {
    name: name,
    image: image,
    role: role,
    }
  }

  function stampaTeamMember (teamMember) {
      const htmlCard = getCard(teamMember);
      teamContainerElement.innerHTML += htmlCard;
  }

  const button = document.getElementById('addMemberButton');

  button.addEventListener('click', addNewMember);

  const nameInput = document.getElementById('name');
  const imageInput = document.getElementById('image');
  const roleInput = document.getElementById('role')

  function addNewMember() {

    const name = nameInput.value;
    const image = imageInput.value;
    const role = roleInput.value;

    if( !name || !image || !role) {
        alert("dati non corretti")
    }

    const teamMember = newTeamMember(name,image,role);

    team.push(teamMember);
    stampaTeamMember(teamMember);
  }




