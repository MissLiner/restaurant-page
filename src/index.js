import './style.css';

import { loadMenu } from './menu-tab';
import { loadContact } from './contact-tab';

import annabelleLogo from './annabelle_logo.svg';
import savannaFooter from './savanna_footer.svg';
import annabelleLogoMobile from './annabelle_logo_mobile.svg'
import savannaFooterMobile from './savanna_footer_mobile.svg';

const contentDiv = document.getElementById('content');
const header = document.createElement('div');
const logo = new Image();
const subTitle = document.createElement('h2');
const intro = document.createElement('div');
const intro2 = document.createElement('div');
const fullMenu = document.createElement('div');
const contactInfo = document.createElement('div');
const footer = new Image();

header.id = 'header';
subTitle.id = 'subtitle';
fullMenu.id = 'full-menu';
contactInfo.id = 'contact-info';
footer.id = 'footer';

intro.classList.add('intro');
intro.id = 'intro';
intro2.classList.add('intro');

document.body.prepend(header);
header.appendChild(logo);
contentDiv.appendChild(subTitle);
contentDiv.appendChild(intro);
contentDiv.appendChild(intro2);
contentDiv.appendChild(fullMenu);
contentDiv.appendChild(contactInfo);
contentDiv.appendChild(footer);


const smallerWindow = window.matchMedia("(max-width: 1000px) and (orientation: portrait");

function adjustImages(dimension) {
    if (dimension.matches) {
        logo.src = annabelleLogoMobile;
        footer.src = savannaFooterMobile;
    } else {
        logo.src = annabelleLogo;
        footer.src = savannaFooter;
    }
}
adjustImages(smallerWindow);
smallerWindow.addListener(adjustImages);


const tabNames = [ 'home', 'menu', 'contact' ];

for (let i = 0; i < tabNames.length; i++) {
    let tab = document.createElement('button');
    tab.id = tabNames[i];
    tab.classList.add('tab-btn');
    tab.textContent = tabNames[i];
    header.appendChild(tab);
}


function loadHome() {
    document.getElementById('home').classList.add('selected-tab');

    subTitle.classList.remove('hidden');
    intro.classList.remove('hidden');
    intro2.classList.remove('hidden');

    subTitle.textContent = 'Wild treats for all ages!';
    
    intro.textContent = `Bring your camera and your courage, because you never know what sweet surprises you'll discover at Annabelle\'s! Sit at your own Ranger Station, each with binoculars and your own guidebook to keep track of every animal you spot. Scan the horizon for wildlife, while you enjoy our delicious animal-themed desserts.`

    intro2.textContent = 'Cheetah cupcakes, giraffe lollipops, hippo sundaes - it\'s just like a trip to the savanna, only sweeter!';
}
loadHome();


function clearContent() {
    subTitle.classList.add('hidden');
    fullMenu.classList.add('hidden');
    intro.classList.add('hidden');
    intro2.classList.add('hidden');

    while (contactInfo.firstChild) {
        contactInfo.removeChild(contactInfo.firstChild);
    }
    while (intro.firstChild) {
        intro.removeChild(intro.firstChild);
    }
    while (fullMenu.firstChild) {
        fullMenu.removeChild(fullMenu.firstChild);
    }
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
    subTitle,
    fullMenu,
    contactInfo,
}