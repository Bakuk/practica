/////Спросить у пользователя отношение к технике apple и записать ответ в блок на странице с id "prompt"
let opinion = prompt(),
    promts = document.querySelector('.prompt');
promts.textContent = opinion;


//добавить пятый пункт
let li = document.createElement('li');
li.classList.add('menu-item');
li.textContent = 'Пятый элемент';
menu = document.getElementsByClassName("menu")[0];
menu.appendChild(li);
menuItem = document.getElementsByClassName("menu-item");

menu.insertBefore(menuItem[2], menuItem[1]); 

let adv = document.querySelector('.adv');
adv.remove();

document.body.style.background = 'url(img/apple_true.jpg) center no-repeat';


//let text = document.createTextNode('Мы продаем только подлинную технику Apple');
let title = document.querySelector('.title');

title.innerHTML = 'Мы продаем только подлинную технику Apple';

//Восстановить порядок в меню

