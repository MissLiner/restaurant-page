import './elements.js';

subTitle.textContent = 'Menu';
contentDiv.appendChild(subTitle);

// const itemFactory = (category, price) => {
//     this.category = category;
//     this.price = price;
// }

function menuItem(category, name, price) {
    this.category = category;
    this.name = name;
    this.price = price;
}



const menuList = document.createElement('ul');
contentDiv.appendChild(intro);



