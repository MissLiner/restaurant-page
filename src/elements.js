import annabelleLogo from './annabelle_logo.svg';

let contentDiv = document.getElementById('content');
let subTitle = document.createElement('h2');
let intro = document.createElement('div');

let header = document.createElement('div');
header.id = 'header';
contentDiv.appendChild(header);

let logo = new Image();
logo.src = annabelleLogo;
header.appendChild(logo);

const tabNames = [ 'Home', 'Menu', 'Contact' ];
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
    intro
}