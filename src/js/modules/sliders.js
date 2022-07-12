 //вызывать работу будем из main
 //переадем в параметры - слайды, направление движения ( т.к. вертик или горизонт.), кнопки вперед, назад
const sliders = (slides, dir, prev, next ) => {
  let slideIndex = 1; // текущий слайд - первый
  const items = document.querySelectorAll(slides);
  // ф. инициализации показа
function showSlides(n) { 
  if( n > items.length) {
    slideIndex =1;
  }
  if(n <1 ) {
    slideIndex = items.length;
  }
  items.forEach(item => { 
    item.classList.add('animated'); // который в animate.css animation-duration:1s;
    item.style.display = 'none';
   });
   items[slideIndex - 1].style.display = 'block';
}
showSlides(slideIndex);
// ф. показа текущего слайда - вызывать будем при кликах на кнопки
function plusSlides(n) { // в параметр будем пердавать -1 или +1 тем самым показывая след. или предыд. слайд
  showSlides(slideIndex += n);
}
//блок обработки ошибок - для первого слайдера где нет кнопок вперед-назад
try {
  const prevBtn = document.querySelector(prev);
  const nextBtn = document.querySelector(next);
  prevBtn.addEventListener('click', ()=> { 
    plusSlides( -1); // предыдущий 
    items[slideIndex -1].classList.remove('slideInLeft'); // предыдущее направление прокрутки вот что делает transform:translate3d(-100%,0,0);
    items[slideIndex -1].classList.add('slideInRight');
  });
 nextBtn.addEventListener('click', ()=> { 
    plusSlides(1); // следующий 
    items[slideIndex -1].classList.remove('slideInRight'); // предыдущее направление прокрутки
    items[slideIndex -1].classList.add('slideInLeft');
  });
} catch(error) {}
//Отключаем автопоказ при наведении мыши
let paused = false; // можно без значения - нужна снаружи
//ф. автопоказа слайдеров
function activateAnimation() { 
//настройка условия для первого слайдера  - вертикального
if (dir== 'vertical') {
paused = setInterval(() => { // запускаем автопоказ
    plusSlides(1);
    items[slideIndex -1].classList.add('slideInDown');
  }, 3000);
} else { // если нет dir - Значит для он не вертик. а горизонт. Также запускаем автопоказ но уже горизонтальный
 paused = setInterval(() => { // запускаем автопоказ
    plusSlides(1);
    items[slideIndex -1].classList.add('slideInLeft');
  }, 3000);
}
}
//отключил
//activateAnimation(); // вызываем автоматом автопоказ
//берем слайд любой и находим по нему сам слайдер родитель
items[0].parentNode.addEventListener('mouseenter', ()=> {
clearInterval(paused); // остановили автопоказ
});
//берем слайд любой и находим по нему сам слайдер родитель
items[0].parentNode.addEventListener('mouseleave', ()=> {
  //activateAnimation(); // остановили автопоказ
  });

  
}; //конец
export default sliders;  