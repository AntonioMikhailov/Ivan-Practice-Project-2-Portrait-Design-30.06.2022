import  modals  from "./modules/modals";
import  sliders  from "./modules/sliders";
import  forms  from "./modules/forms";
import  mask  from "./modules/mask";
import  checkTextInputs  from "./modules/checkTextInputs";
import  showMoreStyles  from "./modules/showMoreStyles";
import calc from "./modules/calc";
import filter from "./modules/filter";
import  pictureSize from "./modules/pictureSize";
import accordeon from "./modules/accordeon";
import burger from "./modules/burger";
import scrolling from "./modules/scrolling";
import drop from "./modules/drop";


window.addEventListener('DOMContentLoaded', ()=> { 
  'use strict';

  //вызываем модули
 modals();

 //сначала запускаем слайдер с кнопками - dir пока не используем
 sliders('.feedback-slider-item', '', '.main-prev-btn', '.main-next-btn');
  //запускаем первый слайдер без кнопок вертикальный + dir
  sliders('.main-slider-item', 'vertical');
  forms();
  mask('[name="phone"]');

  //имена получаем и пле message
  checkTextInputs('[name = "name"]');
  checkTextInputs('[name = "message"]');
  // showMoreStyles('.button-styles', '.styles-2'); // для первого варианта
 showMoreStyles('.button-styles', '#styles .row'); // для варианта с сервером через родитель 
calc('#size', '#material', '#options', '.promocode', '.calc-price');
filter();
pictureSize('.sizes-block');
// accordeon('.accordion-heading', '.accordion-block')// первый вариант
//второй вариант
accordeon('.accordion-heading'); 
burger('.burger-menu', '.burger');
scrolling('.pageup');
drop();


 
}); // конец loaded