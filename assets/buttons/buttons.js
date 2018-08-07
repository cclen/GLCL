// var buttons = document.getElementsByClassName('button');
// console.log('buttons: ', buttons);

var fn = function () {

  var minus = document.getElementsByClassName('minus');
  console.log('minus: ', minus);

  for(var i = 0; i < minus.length; i++){
    var e = document.createElement('p');
    e.innerHTML = '-';
    minus[i].appendChild(e);
    console.log('hello');
    // console.log('minus[i]: ' , minus[i]);
  }

}

document.addEventListener('DOMContentLoaded', fn, false);
