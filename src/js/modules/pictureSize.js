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
export default pictureSize;