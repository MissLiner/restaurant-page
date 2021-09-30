import './style.css';

import { loadMenu } from './menu-tab';
import { loadContact } from './contact-tab';

import annabelleLogo from './annabelle_logo.svg';
import savannaFooter from './savanna_footer.svg';
import annabelleLogoMobile from './annabelle_logo_mobile.svg'
import savannaFooterMobile from './savanna_footer_mobile.svg';

const contentDiv = document.getElementById('content');
const header = document.createElement('div');
header.id = 'header';
contentDiv.appendChild(header);
const subTitle = document.createElement('h2');
subTitle.id = 'subtitle';
const intro = document.createElement('div');
const contactInfo = document.createElement('div');
contactInfo.id = 'contact-info';
const logo = new Image();
const footer = new Image();
footer.id = 'footer';

intro.id = 'intro';



const mql = window.matchMedia("(max-width: 1000px) and (orientation: portrait");

function mediaQueryImages() {
    if (mql.matches) {
    
    logo.src = annabelleLogoMobile;
    header.appendChild(logo);

    footer.src = savannaFooterMobile;
    contentDiv.appendChild(footer);
  } else {
    logo.src = annabelleLogo;
    header.appendChild(logo);

    footer.src = savannaFooter;
    contentDiv.appendChild(footer);
  }
}
mediaQueryImages(mql);
mql.addListener(mediaQueryImages);

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
    subTitle.textContent = '';
    intro.textContent = '';
    while (contactInfo.firstChild) {
        contactInfo.removeChild(contactInfo.firstChild);
    }
    while (intro.firstChild) {
        intro.removeChild(intro.firstChild);
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
}