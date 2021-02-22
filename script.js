//DOM elments
const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');


//function for random elements
const randomFunc = {
	lower: getRandomLower,
	upper: getRandomUpper,
	number: getRandomNumber,
	symbol: getRandomSymbol
}

//generate password function  
function generatePassword(lower, upper, number, symbol, length) {
	let generatedPassword = '';
	const typesCount = lower + upper + number + symbol;
	const typesArr = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0]);
	
	// Doesn't have a selected type
	if(typesCount === 0) {
		return '';
	}
	
	// create a loop to go through different  passowrd requirements
	for(let i=0; i<length; i+=typesCount) {
		typesArr.forEach(type => {
			const funcName = Object.keys(type)[0];
			generatedPassword += randomFunc[funcName]();
		});
	}
	
	const finalPassword = generatedPassword.slice(0, length);
	
	return finalPassword;
}

//generator random requirements - http:www.net-comber.com/charset.html
function getRandomLower() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
	return +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
	const symbols = '!@#$%^&*(){}[]=<>/,.'
	return symbols[Math.floor(Math.random() * symbols.length)];
}

  
//function to present passowrd criteria on click 
function passwordCriteria () {
	// generate the div with class of requirements
	document.getElementById('criteria').style.visibility ="visible";
	document.getElementById('criteria').style.display ="block";
}


// check to see if check box is clicked. '
function validate() {
	if (!uppercase.checked && !lowercase.checked && !numbers.checked && !symbols.checked) {
	  alert( "You need to check at least 1 field to generate a password" );
	  return false;
	}
}

//function for generating password 
function passwordGenerator () {
	const length = +lengthEl.value;
	const hasLower = lowercaseEl.checked;
	const hasUpper = uppercaseEl.checked;
	const hasNumber = numbersEl.checked;
	const hasSymbol = symbolsEl.checked;
	

  	resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);

  
}
//generate event
generate.addEventListener('click', () => {
	//1st click call passwordCriterai fucntion to appear 
	if (document.getElementById('criteria').style.visibility != "visible") {
		passwordCriteria();
	} else {
		//2nd click validate that one of the minimum of 1 criteria has been checked / If it has generate password /else generate alert prompt
		validate();
		passwordGenerator();
	}
	


	
	
});









// Assignment code here
/*
//DOM elments
const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('lenght');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('result');




const randFunction = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
}
//generate event
generate.addEventListener('click', () => {
	const length = +lengthEl;
	const hasLower = lowercaseEl.checked; 
	const hasUpper = uppercaseEl.checked;
	const hasNumber = numbersEl.checked;
	const hasSymbol = symbolsEl.checked;

  resultEl.innerText = generatePassword(hasLower, hasNumber, hasSymbol, hasUpper, length);

});

//generate password function 
function generatePassword(lower, upper, number, symbol, length) {
  let generatedPassword = '';
  var typesCount = lower + upper + number + symbols;
    console.log('typesCount: ', typesCount);
  var typesArr = [{lower}, {upper}, {number}, {symbols}].filter(item => Object.values(item[0]));
    console.log('typesArr: ', typesArr);

  //does have secleted sype
  if (typesCount === 0) {
    return '';
  }

  //create a loop
  for(let i = 0; i < length; i += typesCount) {
    typesArr.forEach(type => {
      const funcName = Object.keys (type)[0];
      generatedPassword += randomFunc[funcName]();
    });
  }

  const finalPassword = generatedPassword.slice(0, length);
	
	return finalPassword;
}


//Generator functions - http:www.net-comber.com/charset.html

function getRandomLower(){
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);

}

function getRandomUpper(){
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);

}

function getRandomNumber(){
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);

}

function getRandomSymbol(){
  const symbols = '!@#$%^&*(){}[]=<>/,.'
  return symbols [Math.floor(Math.random() * symbols.length)];
}
*/
