import { contentDiv, subTitle, intro } from './elements.js';

subTitle.textContent = 'Menu';
contentDiv.appendChild(subTitle);

const menu = [
    {
        name: 'Giraffe Lollipop', 
        category: 'candy',
        price: '$2.75',
    },
    {
        name: 'Animal Print Cupcake', 
        category: 'baked goods',
        price: '$3.75',
        notes: 'choice of Zebra, Leopard, Snakeskin',
    },
    {
        name: 'Meerkat Cake Pop',
        category: 'bakery',
        price: '$4.50',
    },
    {
        name: 'Mouse Turds',
        category: 'candy',
        price: '$5.00',
        notes: 'chocolate covered cherries',
    },
    {
        name: 'Water Buffalo Horn',
        category: 'bakery',
        price: '5.25',
        notes: 'chocolate croissant',
    },
    {
        name: 'Hippo Sundae',
        category: 'ice cream',
        price: '$14.75',
        notes: 'chocolate ice cream, chocolate shell, chocolate horn (cone), lazing in the chocolate mud (whipped cream)',
    },
    {
        name: 'Flamingo Ice',
        category: 'ice cream',
        price: '$3.50',
        notes: 'watermelon cream ice pop',
    },

]

const menuList = document.createElement('ul');
menuList.textContent = menu;
menuList.id = 'menu-list';
intro.textContent = '';
intro.appendChild(menuList);
contentDiv.appendChild(intro);




