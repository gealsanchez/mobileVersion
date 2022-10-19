const hamburger = document.querySelector('.bars');
const overlay = document.querySelector('.open');
const cancel = document.querySelector('.close');

hamburger.addEventListener('click', () => {
  overlay.style.display = 'block';
});

cancel.addEventListener('click', () => {
  overlay.style.display = 'none';
});

const dynaaa = document.createElement('a');
dynaaa.href = 'index.html#works';
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

overlay.appendChild(dynaaa);
overlay.appendChild(dynahr);
overlay.appendChild(dynaab);
overlay.appendChild(dynahr1);
overlay.appendChild(dynaac);
overlay.appendChild(dynahr2);
overlay.appendChild(dynadiv);
overlay.appendChild(dynahr3);

dynaaa.addEventListener('click', () => {
  overlay.style.display = 'none';
});

dynaab.addEventListener('click', () => {
  overlay.style.display = 'none';
});

dynaac.addEventListener('click', () => {
  overlay.style.display = 'none';
});














// contact form client side validation. by Wali muhammad

const form = document.querySelector('.contact');
const userName = document.querySelector('#name');
const userMsg = document.querySelector('#message-text');
const errorMsg = document.querySelector('.mesg');
const emailRegex = /^[a-z0-9]+@[a-z0-9-]+\.[a-z0-9-.]+$/;
const userEmail = document.querySelector('#email');

form.addEventListener('submit', (e) => {
  if (emailRegex.test(userEmail.value)) {
    errorMsg.textContent = '';
  } else {
    e.preventDefault();
    errorMsg.textContent = 'Please check typing or case letter';
  }
});