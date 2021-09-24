let contentDiv = document.getElementById('content')

let title = document.createElement('h1');
title.textContent = 'Novita';
contentDiv.appendChild(title);

let subTitle = document.createElement('h2');
subTitle.textContent = 'Gramercy\'s favorite!';
contentDiv.appendChild(subTitle);

let mainImg = document.createElement('img');
mainImg.src = 'novita_outdoors.jpeg';
contentDiv.appendChild(mainImg);

let intro = document.createElement('p');
intro.textContent = 'A local neighborhood favorite, Novita offers delicious Italian specialties and friendly service with a classy backdrop, that feels more like Lombardy than NYC. Novita always fits the occasion, for large groups or intimate evenings.';
contentDiv.appendChild(intro);