import { fullMenu } from './index.js';

function loadMenu() {
    fullMenu.classList.remove('hidden');
    const menu = [
        {
            name: 'Giraffe Lollipop',
            category: 'candy',
            price: '$2.75',
        },
        {
            name: 'Cheetah Print Cupcake', 
            category: 'bakery',
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
            name: 'Flamingo Ice',
            category: 'ice cream',
            price: '$3.50',
            notes: 'watermelon cream ice pop',
        },
        {
            name: 'Hippo Sundae',
            category: 'ice cream',
            price: '$14.75',
            notes: 'chocolate ice cream, chocolate shell, chocolate horn (cone), lazing in the chocolate mud (whipped cream)',
        },
    ]

    const candy = [];
    candy.name = 'Candy';
    const iceCream = [];
    iceCream.name = 'Frozen';
    const bakery = [];
    bakery.name = 'Bakery';

    function categorize(items) {
        for (const item of items) 
            if (item.category === 'candy') {
                candy.push(item);
            }
            else if (item.category === 'bakery') {
                bakery.push(item);
            }
            else if (item.category === 'ice cream') {
                iceCream.push(item);
            }
    }
    categorize(menu);

    function createMenu(category) {
        const catTitle = document.createElement('h3');
        catTitle.textContent = category.name;
        fullMenu.appendChild(catTitle);

        const catMenu = document.createElement('div');
        catMenu.classList.add('menu')
        
        category.forEach(function addToCatMenu(item) {
            const name = document.createElement('div');
            const priceDiv = document.createElement('div');
            const priceSpan = document.createElement('span');
        
            name.textContent = item.name;
            name.classList.add('bold', 'menu-name', 'leaders');
            catMenu.appendChild(name);

            priceSpan.textContent = ' ' + item.price;
            priceDiv.classList.add('menu-price');
            priceDiv.appendChild(priceSpan);
            catMenu.appendChild(priceDiv);
        })
        fullMenu.appendChild(catMenu);
    }

    createMenu(candy);
    createMenu(bakery);
    createMenu(iceCream);
}

export {
    loadMenu,
};





