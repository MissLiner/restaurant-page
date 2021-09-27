import './style.css';

import * as homeTab from "./home-tab.js";
homeTab;
// import * as menuTab from "./menu-tab.js";
// menuTab;
// import * as contactTab from "./contact-tab.js";
// contactTab;

document.addEventListener('click', function(event) {
    if (event.target.classList.contains('tab-btn')) {
        import(`./${event.target.id}-tab.js`);
    }
})


