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

export default mask;