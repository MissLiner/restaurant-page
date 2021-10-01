import { subTitle, contactInfo } from './index.js';

function loadContact() {
    subTitle.classList.remove('hidden');
    subTitle.textContent = 'We\'d love to hear from you!';

    const contacts = [
        {
            method: 'RING',
            info: '1-800-SweetAB',
        },
        {
            method: 'WRITE',
            info: 'bella@sweetsafari.com',
        },
        {
            method: 'VISIT',
            info: '7 East Claire Place, New York, NY 81245',
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