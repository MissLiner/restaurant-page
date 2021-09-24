let contentDiv = document.getElementById('content')

let title = document.createElement('h1');
title.textContent = 'Annabelle\'s Sweet Safari';
contentDiv.appendChild(title);

let subTitle = document.createElement('h2');
subTitle.textContent = 'Wild treats for all ages!';
contentDiv.appendChild(subTitle);

// let mainImg = document.createElement('img');
// mainImg.src = 'novita_outdoors.jpeg';
// contentDiv.appendChild(mainImg);

let intro = document.createElement('p');
intro.textContent = 'Bring your camera and your courage, and you never know what sweet surprises you might spot (and eat!) at Annabelle\'s! Cheetah cupcakes, giraffe lollipops, hippo sundaes - it\'s just like a trip to the savannah, only sweeter!';
contentDiv.appendChild(intro);