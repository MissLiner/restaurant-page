import { subTitle, intro } from './index.js';

function loadMenu() {

    subTitle.textContent = 'Menu';
    
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
            price: '$5.25',
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
    
    const menuList = document.createElement('div');
    menuList.id = 'menu-list';
    
    
    menu.forEach(function(item) {
        const name = document.createElement('div');
        const priceDiv = document.createElement('div');
        const priceSpan = document.createElement('span');
    
        name.textContent = item.name;
        priceSpan.textContent = ' ' + item.price;
 
    
        name.classList.add('bold', 'menu-name', 'leaders');
        priceDiv.classList.add('menu-price');
    
        menuList.appendChild(name);
        priceDiv.appendChild(priceSpan);
        menuList.appendChild(priceDiv);
    })
    
    intro.appendChild(menuList);
}

export {
    loadMenu,
};





