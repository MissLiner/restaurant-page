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
const contactInfo = document.createElement('div');
const footer = new Image();

const fullMenu = document.createElement('div');
fullMenu.id = 'full-menu';
contentDiv.appendChild(fullMenu);


header.id = 'header';
subTitle.id = 'subtitle';
intro.id = 'intro';
contactInfo.id = 'contact-info';
footer.id = 'footer';

document.body.prepend(header);
header.appendChild(logo);
contentDiv.appendChild(subTitle);
contentDiv.appendChild(intro);
contentDiv.appendChild(contactInfo);
contentDiv.appendChild(footer);


const mql = window.matchMedia("(max-width: 1000px) and (orientation: portrait");

function mediaQueryImages() {
    if (mql.matches) {
        logo.src = annabelleLogoMobile;
        footer.src = savannaFooterMobile;
    } else {
        logo.src = annabelleLogo;
        footer.src = savannaFooter;
    }
}
mediaQueryImages(mql);
mql.addListener(mediaQueryImages);


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
    fullMenu.classList.add('hidden');
    subTitle.classList.remove('hidden');
    subTitle.textContent = 'Wild treats for all ages!';
    
    intro.textContent = 'Bring your camera and your courage, and you never know what sweet surprises you might discover at Annabelle\'s. Cheetah cupcakes, giraffe lollipops, hippo sundaes - it\'s just like a trip to the savannah, only sweeter!';
}

loadHome();



function clearContent() {
    subTitle.textContent = '';
    intro.textContent = '';
    fullMenu.classList.add('hidden');
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
    contentDiv,
    subTitle,
    intro,
    contactInfo,
    fullMenu,
}