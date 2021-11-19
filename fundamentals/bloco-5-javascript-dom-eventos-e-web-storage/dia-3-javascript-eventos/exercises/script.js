function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

//1.
function createDaysOfTheMonth(dayList) {

  const daysDec = document.querySelector('#days');
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];;

  for (let index = 0; index < dezDaysList.length; index += 1) {
    const daysMonth = dezDaysList[index];
    const dayList = document.createElement('li');
    
    dayList.innerHTML = daysMonth;
    dayList.className = 'day';

    if (index === 24 || index === 25 || index === 31) {
      dayList.classList.add('holiday');
    };
    if (index === 4 || index === 11 || index === 18 || index === 25) {
      dayList.classList.add('friday');
    };

    daysDec.appendChild(dayList);
  };
};

createDaysOfTheMonth();

//2.
function createButton(text, id) {
  const buttonContainer = document.querySelector('.buttons-container');
  const button = document.createElement('button');
  
  button.innerHTML = text;
  button.id = id;
  buttonContainer.appendChild(button);
};

createButton('Feriados', 'btn-holiday');

//3.
/** Souce: https://developer.mozilla.org/pt-BR/docs/Web/API/EventTarget/addEventListener */
function selectDaysHoliday() {
  const buttonSelect = document.getElementById('btn-holiday');

  buttonSelect.addEventListener('click', function() {
    const daysHoliday = document.querySelectorAll('.holiday');
    let showHoliday = false;

    daysHoliday.forEach(function(item) {
      item.style.backgroundColor = 'blue';
      showHoliday = true;
      
      console.log(item);
    });
  });

  function mudaCor(state) {
	if (state == true) {
		item.style.backgroundColor = 'blue';
	} else {
		item.style.backgroundColor = 'rgb(238,238,238)';
	}
}

selectDaysHoliday();

//4.

createButton('Sexta-feira', 'btn-friday');

//5.
function selectDaysFriday() {
  const buttonSelectFriday = document.getElementById('btn-friday');
  buttonSelectFriday.addEventListener("click", function(){
    document.getElementsByClassName("friday").innerText = "SEXTOU!"});;
};

selectDaysFriday();

//6.


