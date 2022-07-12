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
  export  {postData, getResource }