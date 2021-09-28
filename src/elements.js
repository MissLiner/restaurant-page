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

export {
    contentDiv,
    subTitle,
    intro,
    contactInfo,
}