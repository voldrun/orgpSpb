var body = [];
var i = 0;
//формирование массива с данными
var list = document.querySelectorAll('[data-id');
var routeURL = location.href.match(/\d+/).toString();
for(var item of list) {
  body.push('stopIDs=' + item.dataset.id + '&routeIDs=' + routeURL + '&directions=' + item.dataset.directions);
}

setInterval(function() {
    if (i < body.length) {
      request(body[i]);
    }
    else return;
    i++;
}, 1000);

//отправка запроса
function request(body) {
  var XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;
  var xhr = new XHR();

  xhr.open('POST', 'http://orgp.spb.ru/wp-content/themes/choice/apicall2/apicall2.php', true);
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')


  xhr.onload = function() {
    console.log(body);
    console.log( this.responseText );
  }

  xhr.onerror = function() {
    console.log( 'Ошибка ' + this.status );
  }

  xhr.send(body);
}
