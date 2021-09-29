import './style.css';

import { loadMenu } from './menu-tab';
import { loadContact } from './contact-tab';

import annabelleLogo from './annabelle_logo.svg';
import savannaOutline from './savanna_silhouette.svg';

const contentDiv = document.getElementById('content');
const subTitle = document.createElement('h2');
subTitle.id = 'subtitle';
const intro = document.createElement('div');
const contactInfo = document.createElement('div');

intro.id = 'intro';

const header = document.createElement('div');
header.id = 'header';
contentDiv.appendChild(header);

const logo = new Image();
logo.src = annabelleLogo;
header.appendChild(logo);

const footer = new Image();
footer.src = savannaOutline;
footer.id = 'footer';
contentDiv.appendChild(footer);

contentDiv.appendChild(subTitle);
contentDiv.appendChild(intro);
contentDiv.appendChild(contactInfo);

const tabNames = [ 'home', 'menu', 'contact' ];
for (let i = 0; i < tabNames.length; i++) {
    let tab = document.createElement('button');
    tab.id = tabNames[i];
    tab.classList.add('tab-btn');
    tab.textContent = tabNames[i];
    header.appendChild(tab);
}

function loadHome() {

    subTitle.textContent = 'Wild treats for all ages!';
    
    intro.textContent = 'Bring your camera and your courage, and you never know what sweet surprises you might discover at Annabelle\'s. Cheetah cupcakes, giraffe lollipops, hippo sundaes - it\'s just like a trip to the savannah, only sweeter!';
}
loadHome();

function clearContent() {
    while (contactInfo.firstChild) {
        contactInfo.removeChild(contactInfo.firstChild);
    }
    subTitle.textContent = '';
    intro.textContent = '';
}

document.addEventListener('click', function(event) {
    if (event.target.classList.contains('tab-btn')) {
        clearContent();

        document.querySelectorAll('.tab-btn').forEach(tab =>  {
            tab.classList.remove('selected-tab');
        })

        event.target.classList.add('selected-tab');
        
        if (event.target.id === 'home') {
            loadHome();
        }
        else if (event.target.id === 'menu') {
            loadMenu();
        }
        else if (event.target.id === 'contact') {
            loadContact();
        }
    }
})

export {
    contentDiv,
    subTitle,
    intro,
    contactInfo,
}