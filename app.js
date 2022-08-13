


let oparetor = '';
let currentValue = '';
let previousValue = '';

const clear = document.querySelector('.clear');
const deleteLast = document.querySelector('.delete');
const operators = document.querySelectorAll('.operator');
const numbers = document.querySelectorAll('.number')
const equal = document.querySelector('.equal')
const decimal = document.querySelector('.decimal')
const previousScreen = document.querySelector('.previous')
const currentScreen = document.querySelector('.current')


numbers.forEach((number)=>number.addEventListener('click',function(e) {
  hundelNumber(e.target.textContent)
  currentScreen.textContent = currentValue;
}))

operators.forEach((op)=>op.addEventListener('click',function(e){
  hundelOPerator(e.target.textContent)
  previousScreen.textContent = previousValue + " " + oparetor
  currentScreen.textContent = currentValue;
}))

clear.addEventListener('click',function(){
  currentValue = '';
  previousValue = '';
  currentScreen.textContent = currentValue;
  previousScreen.textContent = previousValue;
})

equal.addEventListener('click', function(){
  if (currentValue != '' && previousValue != ''){
  calculate()
 previousScreen.textContent = '';
 currentScreen.textContent = previousValue;
  }
})

decimal.addEventListener('click',function(){
 addDecimal()
})




function hundelNumber (num) {
  if (currentValue.length < 6){
    currentValue += num
  }
}

function hundelOPerator(op){
  oparetor = op;
  previousValue = currentValue;
  currentValue = '';
} 


function calculate (){
  previousValue = Number(previousValue);
  currentValue = Number(currentValue);
  if (oparetor === '+') {
    previousValue += currentValue
  }else if ( oparetor === 'x'){
    previousValue *= currentValue
  }else if (oparetor === '-'){
    previousValue -= currentValue
  }else {previousValue /= currentValue}
    
  previousValue = roundNumber(previousValue)
  previousValue = previousValue.toString();
  currentValue  = previousValue.toString();
  
}

function roundNumber(num){
 return Math.round(num * 1000) / 1000
}

function addDecimal(){

  if (!currentValue.includes('.')){
    currentValue += '.'
  }
}