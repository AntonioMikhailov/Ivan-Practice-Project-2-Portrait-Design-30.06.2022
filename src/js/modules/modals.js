
const modals =()=> {

  //создадим перем. которая следит была ли нажата какая то из кнопок триггеров - нужно для п13 отследить подарок
  let btnPressed = false;
  //теперь если эзер кликнет по какойто кнопке вызова модалки она станет true


  // первым аргументом сама кнопка , вторым какое окно открывать, + селектор который будет закрывать это окно
  const windows = document.querySelectorAll('[data-modal]');

   //Убираем сдвиг контента при модалке
   //получаем ширину полосы прокрутки
   const innerWidth = window.innerWidth;
    const outerWidth = document.body.clientWidth;
    const contentShift = innerWidth - outerWidth;
 


 function bindModal(triggerSelector, modalSelector, closeSelector, destroy = false) { 

  //конпка-подарок
  let btnGift =  document.querySelector('.fixed-gift');
  const trigger = document.querySelectorAll(triggerSelector);
 const modal = document.querySelector(modalSelector);

 const close = document.querySelector(closeSelector);
 //ф. плавного появления полосы прокрутки
 function fadeScroll() {
 setTimeout(() => {
    document.body.style.marginRight = 0 +'px';
    document.body.style.overflow = '';
       //Отдельно для подарка-кнопки которая fixed
       btnGift.style.marginRight = 0 +'px';

  }, 0); // ставим 200-300 если анимация 300 - тогда не виден скачоу именно внутри модалки
 }

  //на trigger из параметра навешиваем обработчик
  //надо помнить что не все триггеры именно button а могут быть и ссылка - 'a' поэтому preventDefault
  trigger.forEach(item => { 
  item.addEventListener('click', (e)=> { 
    btnPressed = true;
       // очищаем показ модалки по таймеру при кликах юзера
  clearTimeout(clearShowModal);
    //проверяем что кликнули на элемент который имеет event событие
    if(e.target) {
      e.preventDefault();
    }
//проверяем что нужно удалить кнопку вызова - подарок
if(destroy == true) {
  item.remove(); // удаляем элемент кнопку подарок
}

//для всех модалок закрытие - здесь как дополнение - этот код закроет все а ниже откроет ту модалку что была вызывана
// windows.forEach(item => {
//   item.style.display = 'none';
//   // });

    //получаем из параметра  modal и показываем
    modal.style.display = 'block';
   // modal.classList.add('animated', 'fadeIn'); // плавно появится но убирается жестко
  //блокируем прокрутку страницы
    document.body.style.overflow = 'hidden';
    document.body.style.marginRight = contentShift +'px';
    //Отдельно для подарка-кнопки которая fixed
    btnGift.style.marginRight = contentShift +'px';

   }); 
 });

// закрываем по крестику
close.addEventListener('click', ()=> { 
 // дополнительно закрытие всех модалок
// windows.forEach(item => {
//   item.style.display = 'none';
 
// });
fadeScroll(); // задержа сдвига контента при закрытии. НО т.к. d-none то нет смысла
  modal.style.display = 'none';

 
 });
   //закрываем по фону
   modal.addEventListener('click', (e)=> { 
    if(e.target == modal) {
      // дополнительно закрытие всех модалок
  // windows.forEach(item => {
  //   item.style.display = 'none';
  // });
  fadeScroll();
  modal.style.display = 'none';
    
   }
   });
 
 } // конец bindModal


 // Показываем окно с подарком при пркрутке в самый низ страницы
// console.log(document.documentElement.scrollHeight); //17231
// console.log(window.innerHeight); // 744
// console.log(document.documentElement.scrollTop);

//создадим ф. показа подарка при скроле вниз
function openModalByScroll(selector) { 
  window.addEventListener('scroll',  ()=> { 
    //проверка на высоту свойства scrollHeight
    // let scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
    //если не было кликов по кнопкакм и долистал до низа
    if(btnPressed == false && document.documentElement.clientHeight + window.pageYOffset >= document.documentElement.scrollHeight   ) {
    // document.querySelector(selector).style.display = 'block';
//Но у Ивана вызов идет через click() который эмулирует клик по кнопке которую передали в параметре и это запускает trigger вверху который уже следит за этой кнопкой  и запускает свои действия - показ модалки и удаление кнопки подарка . Ну и ну!! 
document.querySelector(selector).click(); // клик
    }
    });
}
openModalByScroll('.fixed-gift');


   //Показываем модалку через таймер
   let clearShowModal;
  function showModalByTime(selector, time) { 
  clearShowModal = setTimeout(() => {
    console.log(11);

//чтобы меньше писать всем назначу переменную modal
    let modal =  document.querySelector(selector);
    modal.style.display = 'block';
   //блокируем прокрутку страницы
     document.body.style.overflow = 'hidden';
     document.body.style.marginRight = contentShift +'px';
    }, time);
  }
  //Вызываем показ модалки по таймеру
  //showModalByTime('.popup-consultation', 5000); // отключил

 
 //передаем аргументы в bindModal для модалки
//Вызывваем модалку по клику на кнопках - Заказать дизайн
 //т.к. класс popup_close есть еще и в других секциях ограничиваем видимость нужной секцией .popup-design
bindModal('.button-design', '.popup-design', '.popup-design .popup-close' );
bindModal('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close' );

bindModal('.fixed-gift', '.popup-gift', '.popup-gift .popup-close',  true);


}; //конец modals
export default modals; // по умолчанию экспортируем