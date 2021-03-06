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
    
    contacts.forEach(function addToContacts(contact) {
        const method = document.createElement('div');
        method.classList.add('contact-method');
        method.textContent = contact.method;
        contactInfo.appendChild(method);

        const info = document.createElement('div');
        info.classList.add('contact-info');
        info.textContent = contact.info;
        contactInfo.appendChild(info);
    })
}

export {
    loadContact,
};