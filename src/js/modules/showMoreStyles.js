import { getResource } from "../services/requests";

// const showMoreStyles = (trigger, styles)=> { 
// const cards  = document.querySelectorAll(styles);
// const btn  = document.querySelector(trigger);
// //Будем использовать готовые анимации из animate.css
// cards.forEach(item => {
//   item.classList.add('animated', 'fadeInUp');
// });
// btn.addEventListener('click', ()=> { 
 
//   cards.forEach(item => {
//     item.classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs');
//     item.classList.add('col-sm-3' , 'col-sm-offset-0' , 'col-xs-10' , 'col-xs-offset-1');
//   });
//   //скрывваем кнопку после клика
//   btn.style.display = 'none';
//   //btn.remove(); или совсем удалим
// });

//Второй вариант для json сервера
const showMoreStyles = (trigger, wrapper)=> { 
 
  const btn  = document.querySelector(trigger);

btn.addEventListener('click', function() { 
  //в параметр передаем путь  к json серверу 
  getResource('assets/db.json')
  .then(res => createCards(res.styles)) // вызываем ф. с результатами от сервера res - это массив
  .catch(error => console.log('error'));

  // нам также надо удалить или спрятать кнопкуц после клика но так это не сделать
  // this.remove() т.к. стрелочная ф. поэтому меняем на классическую ф.
  this.remove();
});

function createCards(response) { // будет принимать ответ от сервера - файл db.json с массивом элементов для строительства блоков
  response.forEach(({src,  title, link}) => {
    //создадим шаблок карточки
    let card = document.createElement('div');
    //добавляем классы + классы анимации
    card.classList.add('animated', 'fadeInUp', 'col-sm-3' , 'col-sm-offset-0' , 'col-xs-10' , 'col-xs-offset-1');
//наполняем карточки - можно через innerHTML - более рационально. Второй вариант - через append и createElement - берем первый вариант

card.innerHTML = `
<div class="styles-block">
  <img src=${src} alt='#'>
  <h4>${title}</h4>
  <a href="${link}">Подробнее</a>
</div>
`;

//добавляем карточки на страницу - через родителя row и id='styles' 
document.createElement(wrapper).appendChild(card)

  });
}
}; //конец
export default showMoreStyles;