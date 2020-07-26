function get(url) {
  return new Promise(function (resolve, reject) {
    let xhr = new XMLHttpRequest();
    xhr.open("get", url);
    xhr.onload = function () {
      try {
        if (xhr.status === 200) {
          resolve(xhr.response);
        }
        else {
          reject(new Error(xhr.status + ' ' + xhr.statusText));
        }
      } catch(e) {
        reject(e);
      }
    }
    xhr.send();
  });
}

var firstData, secondData;

get('https://jsonplaceholder.typicode.com/todos/1')
  .then(function (r) {
    firstData = r;
    return get('https://jsonplaceholder.typicode.com/todos/2')
  })
  .then(function (r)  {
    secondData = r;
    console.log(`Оба ответа получены: ${firstData} ${secondData}`)
  });
