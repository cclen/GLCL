let calendarHeader = () => {
  let month = document.getElementById('month');
  // console.log('month', month);

  let monthSetter = (newMonth) => {
    month.innerHTML= newMonth;
  }
  monthSetter('December');
  let monthArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September","October", "November", "December"];
  let leftArrow = document.getElementById('left-arrow');
  let rightArrow = document.getElementById('right-arrow');
  let monthIndex = 8;


  leftArrow.addEventListener('click', ()=> {
    console.log('left');
    if(monthIndex > 0) {
      monthIndex--;
      monthSetter(monthArr[monthIndex]);
    }
  });
  rightArrow.addEventListener('click', ()=> {
    console.log('right');
    if(monthIndex < monthArr.length-1) {
      monthIndex++;
      monthSetter(monthArr[monthIndex]);
    }
  });

};

document.addEventListener('DOMContentLoaded', calendarHeader, false);
