const projects = [
  {
    Code: '01',
    Name: 'Profesional Art Printing Data',
    Description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    FeaturedImage: 'img/Img Placeholder-3.png',
    Technologies: ['html', 'bootstrap', 'Ruby'],
    Button: ['See live ', 'See source '],
    LiveVersion: '',
    Source: '',
  },
  {
    Code: '02',
    Name: 'Profesional Art Printing Data',
    Description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    FeaturedImage: 'img/Img Placeholder-4.png',
    Technologies: ['html', 'bootstrap', 'Ruby'],
    Button: ['See live ', 'See source '],
    LiveVersion: '',
    Source: '',
  },
  {
    Code: '03',
    Name: 'Profesional Art Printing Data',
    Description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    FeaturedImage: 'img/Img Placeholder-1.png',
    Technologies: ['html', 'bootstrap', 'Ruby'],
    Button: ['See live ', 'See source '],
    LiveVersion: '',
    Source: '',
  },
  {
    Code: '04',
    Name: 'Profesional Art Printing Data',
    Description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    FeaturedImage: 'img/Img Placeholder-3.png',
    Technologies: ['html', 'bootstrap', 'Ruby'],
    Button: ['See live ', 'See source '],
    LiveVersion: '',
    Source: '',
  },
  {
    Code: '05',
    Name: 'Profesional Art Printing Data',
    Description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    FeaturedImage: 'img/Img Placeholder-4.png',
    Technologies: ['html', 'bootstrap', 'Ruby'],
    Button: ['See live ', 'See source '],
    LiveVersion: '',
    Source: '',
  },
  {
    Code: '06',
    Name: 'Profesional Art Printing Data',
    Description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    FeaturedImage: 'img/Img Placeholder-1.png',
    Technologies: ['html', 'bootstrap', 'Ruby'],
    Button: ['See live ', 'See source '],
    LiveVersion: '',
    Source: '',
  },
];

// const dynamic = document.querySelector('.dynamic');

const overlayproject = document.querySelector('.overlayproject');
const overlay = document.querySelector('.openover');
const closer = document.querySelector('.closer');
const overlaydiv = document.querySelector('.overlaydiv');

overlayproject.addEventListener('click', () => {
  overlay.style.display = 'grid';
});

closer.addEventListener('click', () => {
  overlay.style.display = 'none';
  const element = document.querySelectorAll('#element');

  for (let i = 0; i < element.length; i += 1) {
    element[i].remove();
  }
});

const hamburger = document.querySelector('.bars');
const overlaying = document.querySelector('.open');
const cancel = document.querySelector('.close');

hamburger.addEventListener('click', () => {
  overlaying.style.display = 'block';
});

cancel.addEventListener('click', () => {
  overlaying.style.display = 'none';
});

const dynaaa = document.createElement('a');
dynaaa.href = 'index.html#portfolio';
const dynaab = document.createElement('a');
dynaab.href = 'index.html#about';
const dynaac = document.createElement('a');
dynaac.href = 'index.html#contact';
const dynahr = document.createElement('hr');
const dynahr1 = document.createElement('hr');
const dynahr2 = document.createElement('hr');
const dynadiv = document.createElement('footer');
const dynahr3 = document.createElement('hr');
dynadiv.className = 'dynadiv';
dynaaa.className = 'dynaaa';
dynaab.className = 'dynaab';
dynaac.className = 'dynaab';
dynahr.className = 'rule';
dynahr1.className = 'rule';
dynahr2.className = 'rule-8';
dynahr3.className = 'rule-7';

dynaaa.textContent = 'Portfolio';
dynaab.textContent = 'About';
dynaac.textContent = 'Contact';

overlaying.appendChild(dynaaa);
overlaying.appendChild(dynahr);
overlaying.appendChild(dynaab);
overlaying.appendChild(dynahr1);
overlaying.appendChild(dynaac);
overlaying.appendChild(dynahr2);
overlaying.appendChild(dynadiv);
overlaying.appendChild(dynahr3);

dynaaa.addEventListener('click', () => {
  overlaying.style.display = 'none';
});

dynaab.addEventListener('click', () => {
  overlaying.style.display = 'none';
});

dynaac.addEventListener('click', () => {
  overlaying.style.display = 'none';
});

for (let i = 0; i < projects.length; i += 1) {
  const dynamic = document.querySelector('#dynamic');
  const dynadiv = document.createElement('div');
  dynadiv.style.backgroundImage = projects[i].FeaturedImage;
  const dynatitle = document.createElement('h1');
  dynatitle.className = 'white-1 crete-f f-weight400 l-height-44 f-size-32';
  dynatitle.textContent = projects[i].Name;
  const dynapara = document.createElement('p');
  dynapara.className = 'white-1 inter-f f-weight400 l-height-24 f-size-17';
  dynapara.textContent = 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard';
  const dynaul = document.createElement('ul');

  dynadiv.className = 'project-1';
  let strdeskitem = 'desktopitem';
  strdeskitem += projects[i].Code;
  dynadiv.id = strdeskitem;
  dynamic.appendChild(dynadiv);
  dynadiv.appendChild(dynatitle);
  dynadiv.appendChild(dynapara);
  dynadiv.appendChild(dynaul);

  for (let j = 0; j < 3; j += 1) {
    const dynaa = document.createElement('a');
    const dynali = document.createElement('li');
    dynali.textContent = projects[i].Technologies[j];
    dynaul.appendChild(dynaa);
    dynaa.appendChild(dynali);
  }

  const dynabutton = document.createElement('a');
  dynabutton.className = 'overlayproject';
  let strbutton = 'dynabuttonpro';
  strbutton += projects[i].Code;
  dynabutton.id = strbutton;
  dynabutton.style.backgroundColor = '#ff6b00';
  dynabutton.style.padding = '6% 5%';
  dynabutton.style.marginLeft = '-5.5%';
  dynabutton.style.width = '101%';
  dynabutton.textContent = 'See Project';
  dynabutton.style.fontSize = '17px';
  dynabutton.style.lineHeight = '24px';
  dynabutton.style.fontWeight = '700';
  dynadiv.appendChild(dynabutton);

  dynabutton.addEventListener('click', () => {
    overlay.style.display = 'grid';
    const dynatitle1 = document.createElement('h1');
    dynatitle1.textContent = projects[i].Name;
    dynatitle1.id = 'element';
    overlaydiv.appendChild(dynatitle1);
    const dynapara1 = document.createElement('p');
    dynapara1.textContent = projects[i].Description;
    dynapara1.id = 'element';
    const dynaul1 = document.createElement('ul');
    dynaul1.className = 'dynaulproject';
    const dynaul2 = document.createElement('ul');
    dynaul1.id = 'element';
    dynaul2.id = 'element';
    const img1 = document.createElement('img');
    img1.src = projects[i].FeaturedImage;
    img1.id = 'element';
    img1.className = 'imageproject';
    img1.height = 370;
    overlaydiv.appendChild(dynaul1);
    overlaydiv.appendChild(img1);
    overlaydiv.appendChild(dynapara1);
    overlaydiv.appendChild(dynaul2);

    const imgprobutton1 = document.createElement('img');
    imgprobutton1.src = 'img/live.svg';
    const imgprobutton2 = document.createElement('img');
    imgprobutton2.src = 'img/github.svg';

    for (let j = 0; j < 3; j += 1) {
      const dynaa1 = document.createElement('a');
      const dynali1 = document.createElement('li');
      dynali1.textContent = projects[i].Technologies[j];
      dynaul1.appendChild(dynaa1);
      dynaa1.appendChild(dynali1);
    }

    for (let j = 0; j < 2; j += 1) {
      const dynaa2 = document.createElement('a');
      const dynali2 = document.createElement('li');
      dynaa2.className = 'buttonproject';
      let strbuttpro = 'buttonproject';
      strbuttpro += j;
      dynali2.id = strbuttpro;
      dynali2.textContent = projects[i].Button[j];
      dynaul2.appendChild(dynaa2);
      dynaa2.appendChild(dynali2);
    }
    document.getElementById('buttonproject0').appendChild(imgprobutton1);
    document.getElementById('buttonproject1').appendChild(imgprobutton2);
  });
}