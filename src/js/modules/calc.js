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
export default calc;