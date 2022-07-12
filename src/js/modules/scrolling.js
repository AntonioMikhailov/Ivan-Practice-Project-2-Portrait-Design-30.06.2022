const scrolling = (upSelector)=> {

// показ якоря при прокрутке вниз
const upElem = document.querySelector(upSelector);
  window.addEventListener('scroll', ()=> { 
   if(document.documentElement.scrollTop > window.innerHeight) {
   upElem.classList.add('animated', 'fadeIn');
   //также надо удалить класс
   upElem.classList.remove('fadeOut');
   } else {
    upElem.classList.add('fadeOut');
    upElem.classList.remove('fadeIn');
   }
  });

//плавный скролл
//т.к. у разных браузеров расчет расстояний разный, будем использовать два свойства и выбирать одно из них автоматом

// console.log(element.scrollTop); // 1200
// console.log(body.scrollTop); // 0  - почему??

//Второй вариант  с requestAnimationFrame - рабочий

let links = document.querySelectorAll( '[href^="#"] '); // ищет все ссылки которые начинаются с # - каретка ^ значит сначала строки 
let speed = 0.3;

links.forEach(item => {
  item.addEventListener('click', function(e) { 
    e.preventDefault();
    let widthTop = document.documentElement.scrollTop; // от верха прокрутка в момент клика
    
    let hash  = this.hash; // также можно получить через рег. выр.
    console.log(hash); // hash - будем получать #portfolio, #up  и др.
    
    let toBlock = document.querySelector(hash).getBoundingClientRect().top; // если уйдет за верх браузера - будет отрицательное значение
    console.log(toBlock); //querySelector(hash) - это идентификатор id - с секцией куда надо идти - #portfolio  и др. и расстояние до них - может быть отрицательное и положительное. Когда кликаю по якорю Наверх и скролл идет вверх к Шапке то получаем отрицательное значение getBoundingClientRect().top и наоборот
    let start = null;

    requestAnimationFrame(step); // передаем ф. которая и будет анимировать
    
    function step(time) {
      if(start === null) { //это условие выполнится только один раз -  проверяем что в первый раз запускается анимация
          start = time; // т.е. при следующем цикле итерации при анимации уже не null  
      }
      let progress = time - start; // time всегда новый - start вычисляется только в самом начале анимации 
      // рассчет кол-ва пикселей - на сколько пикселей надо сдвинуть анимацию за это время и в какую сторону (вверх\низ). progress - сколько уже пролистано
      let r  =(toBlock < 0 ? Math.max(widthTop - progress / speed, widthTop + toBlock) :  Math.min(widthTop + progress / speed, widthTop + toBlock));

      //далее саммый главный код. запускаем скролл к нужным координатам
    document.documentElement.scrollTo(0, r);

    //Когда надо остановить анимацию
    if( r!= widthTop + toBlock) { //если не дошли до нужного элемента
      requestAnimationFrame(step);
    } else  {
location.hash = hash;
    }

    }//

  });
});



// //Первый вариант на чистом JS
// const element  = document.documentElement;
// const body = document.body;
// const calcScroll = ()=> {
// upElem.addEventListener('click', function(e) { // нужен контекст вызова + объект событие т.к. клик по ссылке
//   //нам надо получить расстояние до верха окна в момент клика по кнопке
//   let scrollTop = Math.round(body.scrollTop || element.scrollTop); //Math round зачем??
 
 
//  //console.log(this.hash); // получим #up - то что пишется внутри ссылки
//   // проверяем что в сcылке есть hash 
//   if(this.hash !== '') {
//     e.preventDefault();
//     console.log(' Привет');
//     let hashElement = document.querySelector(this.hash); //
//    console.log(hashElement); 
//    //<header id="up"  class=header>
//     //узнаем сколько надо пролистать до родителя этого hash элемента
// let hashElementTop = 0;

//     while(hashElement.offsetParent) { //пока true - перебираем всех родителей 
//       hashElementTop = hashElementTop + hashElement.offsetTop;
//       hashElement = hashElement.offsetParent;
//            console.log(hashElement.offsetParent);
//     }

//   hashElementTop = Math.round(hashElementTop); // на всякий случай если дробное получим
//   smoothScroll(scrollTop, hashElementTop, this.hash);
//   }
 
// });
// };

// const smoothScroll = (from, to, hash)=> { // в параметр from приходит статичное значение sctollTop которое не изменяется

// console.log(from);
// console.log(to);
// console.log(hash);

// let timeInterval = 1;
// let prevScrollTop;
// let speed;
// //также надо проверить куда будет прокрутка вверх или вниз
// if(to > from) {
//   speed = 30; // это пиксели за единицу времени
// } else {
//   speed =  -30;
// }

// //создаем анимацию через setInterval
// let move  = setInterval(() => {
//   // копируем еще раз переменную чтобы знать изменения на лету
//   let scrollTop = Math.round(body.scrollTop || element.scrollTop); 

//   if(prevScrollTop === scrollTop ||
//     (to > from && scrollTop >= to) || 
//     (to < from && scrollTop <= to)) {// если страница дошла до нужного места

// clearInterval(move);
// // далее объект history???
// history.replaceState(history.state, document.title, location.href.replace( /#.*$/g, "") + hash);

//   } else {
//     body.scrollTop += speed; // сработает то которое существует
//     element.scrollTop += speed; // вот здесь ошибка была scrollTo
//     prevScrollTop = scrollTop; // будет все время перезаписываться
//   }
  
// }, timeInterval);
// };


// calcScroll();





};//
export default scrolling;