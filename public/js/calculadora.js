var valueTemp = 0;
var lastOperation = '';
var display = document.getElementById('display');
display.innerHTML = '0';

function clearDisplay() {
  display.innerHTML = '0';
}

function clickText(value) {

  if (typeof value == 'number' || value == '.') {
    if (display.innerHTML == '0') {
      display.innerHTML = '';
    }
    display.innerHTML = display.innerHTML + value;
  }

  if (value == '+') {
    valueTemp = valueTemp + parseFloat(display.innerHTML);
    lastOperation = '+';
    display.innerHTML = '';
  }

}

function resultOperation() {
  if (lastOperation == '+') {
    display.innerHTML = valueTemp + parseFloat(display.innerHTML);
    valueTemp = 0;
  } else {
    display.innerHTML = valueTemp
  }
}


var arrayElem = document.getElementsByClassName('text');
for (var i = 0; i < arrayElem.length; i++) {
  arrayElem[i].addEventListener('click', eventClick);
}




function eventClick(elem) {
  console.log(elem.srcElement.innerHTML )
}


