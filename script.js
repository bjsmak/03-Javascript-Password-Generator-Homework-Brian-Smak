// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
   //Conditionals for generating password
  var length = Number(prompt("Please specify password length"));
  if (length >= 8 && length <= 128) {

    var promptUpper = confirm("Would you like to include Uppercase Letters?");
    var promptLower = confirm("Would you like to include Lowercase Letters?");
    var promptNum = confirm("Would you like to include Numbers?");
    var promptSpecChar = confirm("Would you like to include Special Characters?");
 } else {alert('Please specify between a number between 8 and 128 characters');}

 if (promptUpper !== true && promptLower !== true && promptNum !== true && promptSpecChar !== true){ alert('You must choose at least one type of condition!');}
  //console.log(length);  
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Functions for Random Numbers

function numberRandom() {
  return +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function lowerCaseRandom() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function upperCaseRandom() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function specialCharRandom() {
  var specialChar = '!@#$%^&*<>~'
  return specialChar[Math.floor(Math.random() * specialChar.length)];
}


 //Logging choices into generatePassword function
 var resultEl = document.getElementById('#password');

 document.getElementById('#generate').addEventListener('click', () => {



 })


 //Convert functions into Objects
var randomAll = {
  number: numberRandom,
  lower: lowerCaseRandom,
  upper: upperCaseRandom,
  special: specialCharRandom
};

//Generate Password function
function generatePassword(upper, lower, number, special, length) {
  let initialPassword = '';
  var typesCount = upper + lower + number + special;
  var typesArr = [{upper}, {lower}, {number}, {special}].filter(item => Object.values(item)[0]);

  //Loop to generate array
  for(let i=0; i < length; i+=typesCount) {
    typesArr.forEach(type => {
        var typeLoop = Object.keys(type)[0];
        initialPassword += randomAll[typeLoop]();
    });
  }

  var finalPassword = initialPassword.slice(0, length);

  return finalPassword;
}


