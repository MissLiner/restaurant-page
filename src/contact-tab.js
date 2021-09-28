import { subTitle, contactInfo } from './index.js';

function loadContact() {
    subTitle.textContent = 'Contact Us';

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
    
    contacts.forEach(function(contact) {
        const method = document.createElement('div');
        const info = document.createElement('div');
    
        method.textContent = contact.method;
        info.textContent = contact.info;
    
        contactInfo.appendChild(method);
        contactInfo.appendChild(info);
    
    })
}

export {
    loadContact,
};