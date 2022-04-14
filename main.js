const hiddenNav = document.getElementById('hiddenNav');
const closeBtn = document.getElementById('closebtn');
const icon = document.getElementById('listIcon');
const xBtn = document.getElementById('closebtn');

let openmenu = true;

icon.addEventListener('click', () => {
  if (!openmenu) {
    openmenu = true;
    hiddenNav.classList.toogle('.noNav')
    hiddenNav.classList.toggle('showNav');
  } else {
    openmenu = false;
    hiddenNav.style = 'display: flex;';
    hiddenNav.classList.toggle('showNav');
    xBtn.classList.remove('xBtn');
    xBtn.classList.add('xBtnStyle');
    closeBtn.style = 'display: flex;';
  }
});

xBtn.addEventListener('click', () => {
  if (openmenu === false) {
    openmenu = true;
    hiddenNav.style = 'display: none;';
    hiddenNav.classList.toggle('showNav');
  }
});

function redirect() {
  if (openmenu === false) {
    openmenu = true;
    hiddenNav.style = 'display: none;';
    hiddenNav.classList.toggle('showNav');
  }
}

const speakersData = [
  {
    'picture': 'static/speaker1.png',
    'name': 'Antonio Gonzalez',
    'subtitle': 'Web developer and one of the creators of IFC.js',
    'profile': 'Creator of IFCjs, an open source effort to decentralize the design and development of BIM models from authorative tools',
  },
  {
    'picture': 'static/speaker2.png',
    'name': 'Dimitrie Stefanescu',
    'subtitle': 'Architect and founder of Speckle',
    'profile': 'Accidentally gave birth to Speckle while pursuing his PhD at UCL. Speckle put you in charge of your design and construction data',
  },
  {
    'picture': 'static/speaker3.png',
    'name': 'Dorothy Williams',
    'subtitle': 'IFC developer and collaborator at buildingsmart',
    'profile': 'Dorothy is currently in charge of the development of the new and improved IFC schema which is focusing on enhacing interoperability and avoid spaguetti code',
  },
  {
    'picture': 'static/speaker4.png',
    'name': 'Marcus Stephenson',
    'subtitle': 'Virtual designer and AI expert',
    'profile': 'Marcus is an expert on applying AI for building design purposes, from enhanced early design aspects to using real time data from building an feed AI models for retrofitting insight',
  },
  {
    'picture': 'static/speaker5.png',
    'name': 'Johana Moore',
    'subtitle': 'Leader system integrator at ARUP',
    'profile': 'Johana is the main system integrator at ARUP in london. She will be talking about novel approaches when handling multiple and very large BIM models',
  },
  {
    'picture': 'static/speaker6.png',
    'name': 'Hirata Motoko',
    'subtitle': 'UCL researcher at Faculty of Built Environment',
    'profile': 'Hirata will demostrate a new approach to display BIM models in real time. His research focuses on virtualization of physical assets en augmented reality',
  },
]

// dynamic speaker card generation 
for (let i = 0; i < speakersData.length; i++) {
  const card = document.createElement('div');
  card.className = 'speaker';
  card.id = `speaker${i}`;
  const speakerImage = document.createElement('img');
  speakerImage.className = 'speakerImg';
  speakerImage.src = (speakersData[i]).picture;
  const description = document.createElement('div');
  description.className = 'speakerDescription';
  description.id = `description${i}`;
  const h4 = document.createElement('h4');
  h4.innerHTML = (speakersData[i]).name;
  h4.id = `h4${i}`;
  const h6 = document.createElement('h6');
  h6.innerHTML = (speakersData[i]).subtitle;
  h6.id = `h6${i}`;
  const breakPoint = document.createElement('div');
  breakPoint.className = 'break2';
  const about = document.createElement('p');
  about.innerHTML = (speakersData[i]).profile;
  about.id = `about${i}`;
  const button = document.createElement('button');
  button.innerHTML = 'MORE';
  button.id = 'moreBtn';

  document.getElementById('speakers').appendChild(card);
  document.getElementById(`speaker${i}`).appendChild(speakerImage);
  document.getElementById(`speaker${i}`).appendChild(description);
  document.getElementById(`description${i}`).appendChild(h4);
  document.getElementById(`description${i}`).appendChild(h6);
  document.getElementById(`description${i}`).appendChild(about);
}

// display more speakers on mobile version 
function displayMore() {
  const speaker3 = document.getElementById('speaker2');
  speaker3.style = 'display: flex;'
  const speaker4 = document.getElementById('speaker3');
  speaker4.style = 'display: flex;'
  const speaker5 = document.getElementById('speaker4');
  speaker5.style = 'display: flex;'
  const speaker6 = document.getElementById('speaker5');
  speaker6.style = 'display: flex;'
  const button = document.getElementById('moreBtn');
  button.style = 'display: none;'
}