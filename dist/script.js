/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_modals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modals */ "./src/js/modules/modals.js");
/* harmony import */ var _modules_sliders__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/sliders */ "./src/js/modules/sliders.js");
/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/forms */ "./src/js/modules/forms.js");
/* harmony import */ var _modules_mask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/mask */ "./src/js/modules/mask.js");
/* harmony import */ var _modules_checkTextInputs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/checkTextInputs */ "./src/js/modules/checkTextInputs.js");
/* harmony import */ var _modules_showMoreStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/showMoreStyles */ "./src/js/modules/showMoreStyles.js");
/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/calc */ "./src/js/modules/calc.js");
/* harmony import */ var _modules_filter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/filter */ "./src/js/modules/filter.js");
/* harmony import */ var _modules_pictureSize__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/pictureSize */ "./src/js/modules/pictureSize.js");
/* harmony import */ var _modules_accordeon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/accordeon */ "./src/js/modules/accordeon.js");
/* harmony import */ var _modules_burger__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/burger */ "./src/js/modules/burger.js");
/* harmony import */ var _modules_scrolling__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/scrolling */ "./src/js/modules/scrolling.js");
/* harmony import */ var _modules_drop__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modules/drop */ "./src/js/modules/drop.js");















window.addEventListener('DOMContentLoaded', ()=> { 
  'use strict';

  //вызываем модули
 Object(_modules_modals__WEBPACK_IMPORTED_MODULE_0__["default"])();

 //сначала запускаем слайдер с кнопками - dir пока не используем
 Object(_modules_sliders__WEBPACK_IMPORTED_MODULE_1__["default"])('.feedback-slider-item', '', '.main-prev-btn', '.main-next-btn');
  //запускаем первый слайдер без кнопок вертикальный + dir
  Object(_modules_sliders__WEBPACK_IMPORTED_MODULE_1__["default"])('.main-slider-item', 'vertical');
  Object(_modules_forms__WEBPACK_IMPORTED_MODULE_2__["default"])();
  Object(_modules_mask__WEBPACK_IMPORTED_MODULE_3__["default"])('[name="phone"]');

  //имена получаем и пле message
  Object(_modules_checkTextInputs__WEBPACK_IMPORTED_MODULE_4__["default"])('[name = "name"]');
  Object(_modules_checkTextInputs__WEBPACK_IMPORTED_MODULE_4__["default"])('[name = "message"]');
  // showMoreStyles('.button-styles', '.styles-2'); // для первого варианта
 Object(_modules_showMoreStyles__WEBPACK_IMPORTED_MODULE_5__["default"])('.button-styles', '#styles .row'); // для варианта с сервером через родитель 
Object(_modules_calc__WEBPACK_IMPORTED_MODULE_6__["default"])('#size', '#material', '#options', '.promocode', '.calc-price');
Object(_modules_filter__WEBPACK_IMPORTED_MODULE_7__["default"])();
Object(_modules_pictureSize__WEBPACK_IMPORTED_MODULE_8__["default"])('.sizes-block');
// accordeon('.accordion-heading', '.accordion-block')// первый вариант
//второй вариант
Object(_modules_accordeon__WEBPACK_IMPORTED_MODULE_9__["default"])('.accordion-heading'); 
Object(_modules_burger__WEBPACK_IMPORTED_MODULE_10__["default"])('.burger-menu', '.burger');
Object(_modules_scrolling__WEBPACK_IMPORTED_MODULE_11__["default"])('.pageup');
Object(_modules_drop__WEBPACK_IMPORTED_MODULE_12__["default"])();


 
}); // конец loaded

/***/ }),

/***/ "./src/js/modules/accordeon.js":
/*!*************************************!*\
  !*** ./src/js/modules/accordeon.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const accordeon = (triggersSelector )=> {
  const btns = document.querySelectorAll(triggersSelector);

  // Первый вариант на CSS свойствах

//   blocks.forEach(item => { // добавим анимацию для контента при появлении
//     item.classList.add('animated', 'fadeInDown');
// });

// btns.forEach(item => {
//   item.addEventListener('click', function() {
//     console.log(333);
//     // обычная ф. т.к. this 
//     //узнаем  - является ли элемент на котором кликнули активным 
//    if(!this.classList.contains('active')) {
//     //если нет
  
//    btns.forEach(elem => {
//   elem.classList.remove('active', 'active-style')
//    });
//    this.classList.add('active', 'active-style');
//    }
//   });
// });
// // Показ и скрытие самого контента делаем в main.css


  // //ВТОРОЙ вариант на JS  - меняем высоту блоков конента - открыть можно все элементы
  btns.forEach(item => {
    item.addEventListener('click', function() { // нужен контекст вызова поэтому обычная ф.
    this.classList.toggle('active-style');
    //далее класс active добавляем уже контенту - следующему после кнопки триггера
    this.nextElementSibling.classList.toggle('active-content');

    if(this.classList.contains('active-style')) {
      this.nextElementSibling.style.maxHeight =  this.nextElementSibling.scrollHeight + 80 + 'px'; // 80 это padding в стилях
    } else {
      this.nextElementSibling.style.maxHeight =  '0px';
    }
    });
  });

  //ТРЕТИЙ вариант - открыть можно только по одному элементу
// btns.forEach(item => {
//   item.addEventListener('click', function() { // нужен контекст вызова поэтому обычная ф.
//     btns.forEach(elem => {
//       elem.classList.remove('active-style');      
//     });
//    this.classList.add('active-style');
//    //далее класс active добавляем уже контенту - следующему после кнопки триггера
//    this.nextElementSibling.forEach(element => {
//     element.classList.remove('active-content');
//   element.style.maxHeight =  '0px';
// });
// this.nextElementSibling.classList.add('active-content');
//  this.nextElementSibling.style.maxHeight =  this.nextElementSibling.scrollHeight + 80 + 'px'; // 80 это padding в стилях


  //  if(this.classList.contains('active-style')) {
   
  //  } else {
  //   this.nextElementSibling.style.maxHeight =  '0px';
  //  }
  // });
// });

}; //
/* harmony default export */ __webpack_exports__["default"] = (accordeon);

/***/ }),

/***/ "./src/js/modules/burger.js":
/*!**********************************!*\
  !*** ./src/js/modules/burger.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const burger = (menuSelector, burgerSelector)=> {
const menuElem = document.querySelector(menuSelector);
const burgerElem = document.querySelector(burgerSelector);

menuElem.style.display = 'none'; // делаем изначально скрытым

burgerElem.addEventListener('click', ()=> { 
 if(menuElem.style.display == 'none' && window.screen.availWidth < 993) {
  menuElem.style.display = 'block';
 } else {
  menuElem.style.display = 'none';
 }
});

// следим за шириной экрана
window.addEventListener('resize', ()=> { 
 if(window.screen.availWidth > 992) {
  menuElem.style.display = 'none';
 } 
});

}; //
/* harmony default export */ __webpack_exports__["default"] = (burger);

/***/ }),

/***/ "./src/js/modules/calc.js":
/*!********************************!*\
  !*** ./src/js/modules/calc.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//передаем в параметры
const calc = (size, material, options, promocode, result )=> {
  const sizeBlock = document.querySelector(size);
  const materialBlock = document.querySelector(material);
  const optionsBlock = document.querySelector(options);
  const promocodeBlock = document.querySelector(promocode);
  const resultBlock = document.querySelector(result);
  

let sum = 0;
//вешаем обработчик change + ф. которая будет срабатывать на нем
const calcFunction = ()=> {
sum = Math.round((+sizeBlock.value) * (+materialBlock.value) + (+optionsBlock.value));
// sum = 1000;

//обязательны к заполнению первые 2 селекта поэтому делаем проверку на пустое value - которое мы поставили в верстке самым первым = если оно есть, значит юзер не сделал выбор 
if(sizeBlock.value == '' || materialBlock.value == '' ) {
  // то выводим сообщение
resultBlock.textContent = 'Пожалуйста выберите размер и материал';

} else if (promocodeBlock.value =='IWANTPOPART ') {
  //проверяем промокод IWANTPOPART  - который можно получить при клике на подарок
  //тогда делаем скидку 30%
  resultBlock.textContent = Math.round( sum * 0.7);
}
//но если без промокода - просто else
else {
  resultBlock.textContent = sum;
}

};

//запускаем обработчики для каждого поля
sizeBlock.addEventListener('change', calcFunction);
materialBlock.addEventListener('change', calcFunction);
optionsBlock.addEventListener('change', calcFunction);
promocodeBlock.addEventListener('change', calcFunction);
// console.log(sum);

}; // конец
/* harmony default export */ __webpack_exports__["default"] = (calc);

/***/ }),

/***/ "./src/js/modules/checkTextInputs.js":
/*!*******************************************!*\
  !*** ./src/js/modules/checkTextInputs.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const checkTextInputs = (selector)=> {
  const textInputs = document.querySelectorAll(selector); 

  textInputs.forEach(item => { 
    item.addEventListener('keypress', (e)=> {
     //получаем кнопку которую нажал юзер
      if(e.key.match(/[^а-яё 0-9]/ig)){
        // ^ - исключающий диапазон - значит все кроме этих и значит вся латиница будет preventDefault
        // будет отображать только  - если вся кириллица + цифры в любом регистре
        e.preventDefault(); //Работает , но не понял.  Отменил стандартное поведение чего? Ввод остальных символов видимо. Понял см. выше.
      } 
   
}); 
//я создал второй обработчик - и он работает даже проще чем выше у Ивана. Он также стирает те данные которые можно вставить в поле через копирование на латинице или которые есть в автозаполнении. Т.е. достаточно этого обработчика - я
item.addEventListener('input', ()=> {
  item.value =  item.value.replace(/[a-z]/ig, '');
});
   });
};

/* harmony default export */ __webpack_exports__["default"] = (checkTextInputs); // по умолчанию экспортируем

/***/ }),

/***/ "./src/js/modules/drop.js":
/*!********************************!*\
  !*** ./src/js/modules/drop.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const drop = () => {

const fileInputs = document.querySelectorAll('[name="upload"]');
// на эти input нам надо повесить 4 разных события - можно через цикл 4 раза назначить 4 разных события, но  можно по другому - создать массив событий

['dragenter', 'dargleave', 'dragover', 'drop'].forEach(eventName => {
//внутри еще один цикл
fileInputs.forEach(item => {
  item.addEventListener(eventName, preventDefaults, false);   // обработчик будет приходить из внешнего цикла
 });
});

function preventDefaults(e) {
  e.preventDefault();
  e.stopPropagation(); //Прекращает дальнейшую передачу текущего события. прекращает всплытие события выше к родителям

}
// подскажем юзеру что его фото над нужно областью загрузки
function highLight(item) { // подсветиv Ближайший к форме блок file-upload
item.closest('.file_upload').style.backgroundColor = "blue";
console.log(444);

}
// убираем подсветку после события
function unHighLight(item) { //

  if(item.closest('.calc_form')) {
  item.closest('.file_upload').style.backgroundColor = "#fff"; // но цвет фона может быть разный у разных форм поэтому делаем проверку на фон родителя
  } else {
    item.closest('.file_upload').style.backgroundColor = "#ededed"; 
  }
  
  }

// ловим событие когда фото над зоной drop
  ['dragenter',  'dragover'].forEach(eventName => {
    //внутри еще один цикл
    fileInputs.forEach(item => {
      item.addEventListener( eventName, ()=> highLight(item), false);   // обработчик будет приходить из внешнего цикла
     });
    });

    // наоборот -ловим событие когда фото уходит из зоны drop 
  ['dragleave',  'drop'].forEach(eventName => {
    //внутри еще один цикл
    fileInputs.forEach(item => {
      item.addEventListener( eventName, ()=> unHighLight(item), false);   // 
     });
    });

    //теперь ловим событие drop
    fileInputs.forEach(item => {
      item.addEventListener('drop', (e)=> { 
        // получаем и модифицируем файлы 15-24
        item.files = e.dataTransfer.files; //кладем в input объект с файлом из проводника
        // также как и в forms.js обрезаем длинные имена фото - копируем код от туда
        let dots; // троеточие
  //получаем имя файла в разметку HTML
  item.files[0].name.split('.')[0].length > 5 ? dots = "..." : dots = '.'; // разбиваем точкой на массив, проверяем на длину и создаем условие для dots
  //имя  - первая часть обрезаем  slice + троеточие + вторая часть
  const name =  item.files[0].name.split('.')[0].slice(0, 6) + dots + item.files[0].name.split('.')[1];
  item.previousElementSibling.textContent =  name;

      } );   // обработчик будет приходить из внешнего цикла
     });

};//

/* harmony default export */ __webpack_exports__["default"] = (drop);

/***/ }),

/***/ "./src/js/modules/filter.js":
/*!**********************************!*\
  !*** ./src/js/modules/filter.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const filter = ()=> {
  // т.к. классов в весртке очень много передавать их в параметры мы не будем т.к. нерационально - пропишем их вручную
const menu = document.querySelector('.portfolio-menu');
const items = menu.querySelectorAll('li');
const btnAll = menu.querySelector('.all');
const btnLovers = menu.querySelector('.lovers');
const btnChef = menu.querySelector('.chef');
const btnGirl = menu.querySelector('.girl');
const btnGuy = menu.querySelector('.guy');
const btnGrandmother = menu.querySelector('.grandmother');
const btnGranddad = menu.querySelector('.granddad');

const wrapper = document.querySelector('.portfolio-wrapper');
const markGirl = wrapper.querySelectorAll('.girl');
const markAll = wrapper.querySelectorAll('.all');
const markLovers = wrapper.querySelectorAll('.lovers');
const markChef = wrapper.querySelectorAll('.chef');
const markGuy = wrapper.querySelectorAll('.guy');
const no = document.querySelector('.portfolio-no');


//создадим ф. фильтрации элементов
const typeFilter = (markType)=> {
  //сначала скрываем все элементы
 markAll.forEach(item => {
  item.style.display = 'none';
  item.classList.remove('animated', 'fadeIn'); // из animate.css
 });
 no.style.display = 'none';
 no.classList.remove('animated', 'fadeIn');

if(markType) { // если есть данные в параметре
  markType.forEach(item => {
    item.style.display = 'block';
    item.classList.add('animated', 'fadeIn');
  });
  //если в параметр ничего не передали - значит фото для бабушек и дедушек и показываем текст - что таких фото пока нет
} else {
  no.style.display = 'block';
  no.classList.add('animated', 'fadeIn');
 
}

};

//эти вызовы после клика можно оптимизировать  - как?  12-19
btnAll.addEventListener('click', ()=> { 
  typeFilter(markAll)
});
btnLovers.addEventListener('click', ()=> { 
  typeFilter(markLovers)
});
btnChef.addEventListener('click', ()=> { 
  typeFilter(markChef)
});
btnGirl.addEventListener('click', ()=> { 
  typeFilter(markGirl)
});
btnGuy.addEventListener('click', ()=> { 
  typeFilter(markGuy)
});
btnGrandmother.addEventListener('click', ()=> { 
  typeFilter() // без аргументов т.к еще нет таких фото
});
btnGranddad.addEventListener('click', ()=> { 
  typeFilter()  // без аргументов т.к еще нет таких фото
});

// делаем подсветку активного таба через делегирование
menu.addEventListener('click', (e)=> { 
let target = e.target;
if(target && target.tagName == 'LI') {
 items.forEach(elem => {
  elem.classList.remove('active');
  target.classList.add('active')
  
 });
}
 
});

}; //конец
/* harmony default export */ __webpack_exports__["default"] = (filter);


/***/ }),

/***/ "./src/js/modules/forms.js":
/*!*********************************!*\
  !*** ./src/js/modules/forms.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_requests__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/requests */ "./src/js/services/requests.js");


const forms = ()=> {
//получаем все формы и все input
const form = document.querySelectorAll('form');
const inputs = document.querySelectorAll('input');
//для загрузки фото - все input  с этим атрибутом
let upload = document.querySelectorAll('[name = "upload"]');


//оповещаем юзера о процессе отправки - создадим объект с текстами
const message = {
loading: 'Загрузка',
success: 'Спасибо, мы скоро с Вами свяжемся',
failure: 'Что то пошло не так...',
// покажем перед отправкой иконки
spinner: "assets/img/spinner.gif", 
ok: "assets/img/ok.png",
fail: "assets/img/fail.png",
};

//настроим пути для отправки данных – они у нас разные
const path = {
  designer: 'assets/server.php', // для фото
  question: 'assets/question.php', // для вопросов
};

//ф. отправки


//доп. ф по очистке input
const clearInput = ()=> {
inputs.forEach(item => { 
  item.value = ''; 
 });
 //Добавляем очистку имени - файл не выбран
 upload.forEach(item => { 
  item.previousElementSibling.textContent =  'Файл не выбран';
 });
};
//для фото - обработчик - сработает когда юзер добавит фото
upload.forEach(item => { 
  item.addEventListener('input', ()=> { 
    //получаем имя файла фото через свойство files
  console.log(item.files[0]); // вся инфа
  console.log(item.files[0].name); // Готовый сайт-29.06.png
  let dots; // троеточие
  //получаем имя файла в разметку HTML
  item.files[0].name.split('.')[0].length > 5 ? dots = "..." : dots = '.'; // разбиваем точкой на массив, проверяем на длину и создаем условие для dots

  //имя  - первая часть обрезаем  slice + троеточие + вторая часть
  const name =  item.files[0].name.split('.')[0].slice(0, 6) + dots + item.files[0].name.split('.')[1];
  item.previousElementSibling.textContent =  name;

  //можно оптимизировать код
  //let arr = item.files[0].name.split('.'); // и заменить выше.
 });
 });

//навешиваем обработчики на клики по отправке формы
form.forEach(item => { 
  item.addEventListener('submit', (e)=> { 
    e.preventDefault(); // убираем перезагрузку страницы
    //подготавливаем форму - для показа сообщений о процессе отправки
    let statusMessage = document.createElement('div');
    statusMessage.classList.add('status');
    item.parentNode.appendChild(statusMessage); //родитель формы

    //добавляем классы из animate.css
    item.classList.add('animated', 'fadeOutUp'); // скрываем - из animate.css
    //т.к. форма не исчезнет из структуры а просто станет прозрачной она не даст иконкам появиться в нужном месте поэтому надо форму после анимации совсем убрать из структуры
    setTimeout(() => {
      item.style.display = 'none';
    }, 400); // примерно
//создаем элемент для иконок
    let statusImg = document.createElement('img');
    statusImg.setAttribute('src', message.spinner );
    //добавим анимацию
    statusImg.classList.add('animated', 'fadeInUp');
    //вставляем фото в блок родителя формы
    statusMessage.appendChild(statusImg);

    //также еще добавим текст к иконке
    let textMessage = document.createElement('div');
    textMessage.textContent = message.loading;
    //добавлем
    statusMessage.appendChild(textMessage);

  //собираем все данные из формы с formData c помощью конструктора FormData ( если нужен формат JSON то надо сконвертировать)
    const formData = new FormData(item); // из какой формы получать
    //api - нужен для формирования динамического пути отправки
let api ;
// если в родителях не найдет -вернет null (false), если найдет -то сработает путь designer
//Если условий будет больше - использовать switch-case
 item.closest('.popup-design') || item.classList.contains('calc_form')  ? api = path.designer : api = path.question;
console.log(api);

    // вызываем ф. и передаем путь api и данные формы
    Object(_services_requests__WEBPACK_IMPORTED_MODULE_0__["postData"])(api, formData)
    //далее получаем ответ в виде текста
    .then(res => {
      console.log(res);
      //если успешно прошел запрос пишем сообщение юзеру
      statusImg.setAttribute('src', message.ok );
      textMessage.textContent = message.success;
    })
    //если будет ошибка то catch
    .catch( ()=> {
      statusImg.setAttribute('src', message.fail );
      textMessage.textContent = message.failure;
      
     
    })
    //finally для очистки полей и скрытия сообщения об отправке
    .finally(() => {
      clearInput(); // вызвали ф. очистки полей
      setTimeout(() => {
       statusMessage.remove(); //просто удаляем элемент через таймер
        item.style.display = 'block'; // показываем форму обратно
        item.classList.remove('fadeOutUp'); // удаляем класс показа
        item.classList.add('fadeInUp'); // добавим класс анимации показа

        // закрываем все модалки после кнопки Отправить
        // const windows = document.querySelectorAll('[data-modal]');
        // windows.forEach(item => {
        //   item.style.visibility = 'hidden';
        //   item.style.opacity = 0;
        //   item.style.transition = 'all 0.7s ease .0s'; 
        //    document.body.style.overflow = '';
        // });

      }, 3000);
    });
 });
 });


}; //конец forms

/* harmony default export */ __webpack_exports__["default"] = (forms); // по умолчанию экспортируем




/***/ }),

/***/ "./src/js/modules/mask.js":
/*!********************************!*\
  !*** ./src/js/modules/mask.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const mask = (selector)=> { // в параметр будем передавать нужны input для валидации

let setCursorPosition = (pos, elem) => {
  //сначала установим фокус
  elem.focus();
  // далее нужен метод setSelectionRange - но он не поддерживается старыми бр. и нам надо написать полифил
  if(elem.setSelectionRange) {
    elem.setSelectionRange(pos, pos); // установим курсор
  } else if (elem.createTextRange) { // если не поддерживает то метод range
    let range = elem.createTextRange();

    range.collapse(true);  // объединит граничные точки диапазона  
    range.moveStart('character', pos);
    range.moveEnd('character', pos);
    range.select();

  }

};

function createMask(event) {
  // создаем матрицу  - можно в JSON  файле для рая разных стран - она будет в input видна
  let matrix = '+7 (___) ___ __ __';
  //итератор
let  i = 0;
//получаем все Нецифры  и заменяем пустым - на основе матрицы
let def = matrix.replace(/\D/g, '');
// все Нецифры чистим  - на основе ввода юзера
let val = this.value.replace(/\D/g, '' );

//сверяем кол. во симвлов. Если юзер начнет удалаять из матрицы +7 то он не сможет это сделать
if(def.length >= val.length) {
  val = def;
}
//нам надо из матрицы удалить нижнее подчеркивание в процессе вода цифр - заменить на цифры, но скобки оставляем и пробелы между группами цифр
//в метод replace мы  аожем передать и ф.
this.value = matrix.replace(/./g, function (a) { 
  //проверяем символы на правильность
  //Метод regexp.test(str) проверяет, есть ли хоть одно совпадение, если да, то возвращает true , иначе false 
 return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a ; //  a - каждый символ который перебирается в матрице и проверяем что длина уже введенных и очищенных символов будет не больше чем в val - и если true то переходим к следующему символу и если второе условие false то вернем пустая строка а если  и оно False то просто - a ( тот же символ что и пришел в ф.)
});

// еще одно условие когда выделяем input  c маской то курсор должен встать в определенную позицию - после +7 ( сюда) и потом если он выйдет из Input - blur то маска должна снова восстановиться
if(event.type == 'blur') {
  //если кол-во символов будет равно 2 (+7) то очистим input
  if(this.value.length == 2) {
    this.value = '';
  }
}  else {
  //куда установить курсор - вызываем ф.
  setCursorPosition(this.value.length, this);
  console.log(this.value.length);
  console.log(this);


}

 
}

let inputs = document.querySelectorAll(selector);
inputs.forEach(item => { 
 //обрабатываем все 
  item.addEventListener('input', createMask );
  item.addEventListener('focus', createMask );
  item.addEventListener('blur', createMask );
 
 });

}; // конец

/* harmony default export */ __webpack_exports__["default"] = (mask);

/***/ }),

/***/ "./src/js/modules/modals.js":
/*!**********************************!*\
  !*** ./src/js/modules/modals.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

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
/* harmony default export */ __webpack_exports__["default"] = (modals); // по умолчанию экспортируем

/***/ }),

/***/ "./src/js/modules/pictureSize.js":
/*!***************************************!*\
  !*** ./src/js/modules/pictureSize.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const pictureSize = (imgSelector)=> { // передаем селектор img
const blocks = document.querySelectorAll(imgSelector);

//ф. показа фото при наведении мыши
function showImg(block) {
  const img = block.querySelector('img');
  //отрежем 4 символа с конца .png и добавим 
img.src = img.src.slice(0, -4) + '-1.png'
//скрываем цены и размеры кроме одно класса
block.querySelectorAll('p:not(.sizes-hit)').forEach(item => {
  item.style.display = 'none';
});
}

//ф. скрытия фото при уводе мыши
function hideImg(block) {
  const img = block.querySelector('img');
  //отрежем 4 символа с конца .png и добавим 
img.src = img.src.slice(0, -6) + '.png'
//скрываем цены и размеры кроме одно класса
block.querySelectorAll('p:not(.sizes-hit)').forEach(item => {
  item.style.display = 'block';
});
}

//обработчик mouseover
blocks.forEach(item => {
  item.addEventListener('mouseover', ()=> { 
    showImg(item);
  });

  item.addEventListener('mouseout', ()=> { 
    hideImg(item)
  });
});


}; //
/* harmony default export */ __webpack_exports__["default"] = (pictureSize);

/***/ }),

/***/ "./src/js/modules/scrolling.js":
/*!*************************************!*\
  !*** ./src/js/modules/scrolling.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/* harmony default export */ __webpack_exports__["default"] = (scrolling);

/***/ }),

/***/ "./src/js/modules/showMoreStyles.js":
/*!******************************************!*\
  !*** ./src/js/modules/showMoreStyles.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_requests__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/requests */ "./src/js/services/requests.js");


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
  Object(_services_requests__WEBPACK_IMPORTED_MODULE_0__["getResource"])('assets/db.json')
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
/* harmony default export */ __webpack_exports__["default"] = (showMoreStyles);

/***/ }),

/***/ "./src/js/modules/sliders.js":
/*!***********************************!*\
  !*** ./src/js/modules/sliders.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/* harmony default export */ __webpack_exports__["default"] = (sliders);  

/***/ }),

/***/ "./src/js/services/requests.js":
/*!*************************************!*\
  !*** ./src/js/services/requests.js ***!
  \*************************************/
/*! exports provided: postData, getResource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postData", function() { return postData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getResource", function() { return getResource; });
//Здесь будем создавать и экспортировать запросы для модуля Forms  и для showMoreStyles для связи с json сервером

// для Forms т.к. запрос асинхронный и сервер может долго отвечать - async/await
const postData = async (url, data)=> {

  let res = await fetch(url, { // ждать должен
    method: "POST", // вот где ошибка была!!! надо "POST"  а не POST
    body: data,
    //для formData заголовок не надо добавлять
  });
  return await res.text();
  };

  //воторой запрос для db.json уже с GET запросом
const getResource = async (url)=> {

  let res = await fetch(url);

  //добавим проверку при отправке - если не прошло получение 404, 505 и т.д.
  if(!res.ok) {
    throw new Error (` Could not fetch ${url}, status ${res.status} `);
  }
  //уже отдаем в json формате
  return await res.json();
  };

  //Экспортируем эти две ф.
  

/***/ })

/******/ });
//# sourceMappingURL=script.js.map