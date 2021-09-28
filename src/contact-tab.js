import { contentDiv, subTitle, intro, contactInfo } from './elements.js';

function loadContact() {
    subTitle.textContent = 'Contact Us';
    contentDiv.appendChild(subTitle);
    
    intro.textContent = '';
    
    const contacts = [
        {
            method: 'Ring us:',
            info: '1-800-SweetAB',
        },
        {
            method: 'Write us:',
            info: 'annabelle@sweetsafari.com',
        },
        {
            method: 'Stop by:',
            info: '7 East Stephenson Place, New York, NY 81245',
        }
    ]
    
    contactInfo.id = 'contact-info';
    contacts.forEach(function(contact) {
        const method = document.createElement('div');
        const info = document.createElement('div');
    
        method.textContent = contact.method;
        info.textContent = contact.info;
    
        contactInfo.appendChild(method);
        contactInfo.appendChild(info);
    
    })
    contentDiv.appendChild(contactInfo);
}
//loadContact();

export {
    loadContact,
};