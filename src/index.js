import './style.css';

import { loadMenu } from './menu-tab';
import { loadContact } from './contact-tab';

import annabelleLogo from './annabelle_logo.svg';

const contentDiv = document.getElementById('content');
const subTitle = document.createElement('h2');
const intro = document.createElement('div');
const contactInfo = document.createElement('div');

let header = document.createElement('div');
header.id = 'header';
contentDiv.appendChild(header);

let logo = new Image();
logo.src = annabelleLogo;
header.appendChild(logo);

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
    contentDiv.appendChild(subTitle);
    
    intro.textContent = 'Bring your camera and your courage, and you never know what sweet surprises you might discover at Annabelle\'s. Cheetah cupcakes, giraffe lollipops, hippo sundaes - it\'s just like a trip to the savannah, only sweeter!';
    
    contentDiv.appendChild(intro);
}
loadHome();

function clearContent() {
    if (contentDiv.contains(document.getElementById('contact-info'))) {
        contentDiv.removeChild(contactInfo);
    }
    intro.textContent = '';
}

document.addEventListener('click', function(event) {
    clearContent();

    if (event.target.id === 'home') {
        loadHome();
    }
    else if (event.target.id === 'menu') {
        loadMenu();
    }
    else if (event.target.id === 'contact') {
        loadContact();
    }
    
    // {
    //     if
    //     //import(`./${event.target.id}-tab.js`);
    // }
})

export {
    contentDiv,
    subTitle,
    intro,
    contactInfo,
}


