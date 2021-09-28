import './style.css';
import './elements.js';

import { loadHome } from "./home-tab.js";
import { loadMenu } from './menu-tab';
import { loadContact } from './contact-tab';
//loadHome();

document.addEventListener('click', function(event) {
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


