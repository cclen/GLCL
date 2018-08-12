var fn = function () {

  function addText(className, text){

    var arr = document.getElementsByClassName(className);

    for(var i = 0; i < arr.length; i++){
      let e = document.createElement('p');
      e.innerHTML = text;
      arr[i].appendChild(e);
    }
  }

  addText('minus', '-');
  addText('plus', '+');
  addText('inactive', 'inactive');
  addText('normal', 'normal');
  addText('hover-web', 'hover[web only]');
  addText('focused-click', 'click/tap');
  addText('check', '<i class="fas fa-check"></i>');

}

document.addEventListener('DOMContentLoaded', fn, false);


//   var buttons =
//     { minus : "-",
//       plus: "+",
//       inactive: "inactive" };
//
//
// var renderTextToButtons = function(arr){
//   let keys = Object.keys(arr);
//
//   let values = (function(arr){
//     var result =[];
//     for(let key in arr) {
//       result.push(arr[key]);
//     }
//   return result;
// })();
// console.log(values);
//
// };
//
// renderTextToButtons(buttons);
