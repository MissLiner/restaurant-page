import { contentDiv, subTitle, intro, contactInfo } from './elements.js';

function loadHome() {
    if (contentDiv.contains(document.getElementById('contact-info'))) {
        contentDiv.removeChild(contactInfo);
    }

    subTitle.textContent = 'Wild treats for all ages!';
    contentDiv.appendChild(subTitle);
    
    intro.textContent = 'Bring your camera and your courage, and you never know what sweet surprises you might discover at Annabelle\'s. Cheetah cupcakes, giraffe lollipops, hippo sundaes - it\'s just like a trip to the savannah, only sweeter!';
    
    contentDiv.appendChild(intro);
}

export {
    loadHome,
}