//Variables
var specChar = "!@#$%^&*()<>";


var generatePassword = function() {
  //Set variables as containers for character types
  var passwordZero = 0;
  var upperZero = '';
  var lowerZero = '';
  var numZero = '';
  var specZero = '';
  var length = Number(prompt("Please specify password length"));

  //Function array for random numbers
  var funcArr = {
    randomNum: function() {return String.fromCharCode(Math.floor(Math.random() * 10 + 48));},
    randomLower: function() {return String.fromCharCode(Math.floor(Math.random() * 26 + 97));},
    randomUpper: function() {return String.fromCharCode(Math.floor(Math.random() * 26 + 65));},
    randomSpec: function() {return specChar[Math.floor(Math.random() * specChar.length)]}
  }

  if (length >= 8 && length <= 128) {
  //console.log(length);

  //If number selection is true then continue with prompts
  var promptUpper = confirm("Would you like to include Uppercase Letters?");
  var promptLower = confirm("Would you like to include Lowercase Letters?");
  var promptNum = confirm("Would you like to include Numbers?");
  var promptSpecChar = confirm("Would you like to include Special Characters?");

    } else {alert('Please specify between a number between 8 and 128 characters');}

  if (promptUpper !== true && promptLower !== true && promptNum !== true && promptSpecChar !== true) { alert('You must choose at least one type of condition!'); }
  
  //Concats arrays based on user selection. Adds random number and adds counter to password
  if (promptLower === true) {
    lowerZero = funcArr.randomLower();
    passwordZero++;
  }
  
  if (promptUpper === true) {
    upperZero = funcArr.randomUpper();
    passwordZero++;
  }
  
  if (promptNum === true) {
    numZero = funcArr.randomNum();
    passwordZero++;
  }
  
  if (promptSpecChar === true) {
    specZero = funcArr.randomSpec();
    passwordZero++;
  }

  
  //Loop to generate random password with limit
  var randomPass = '';
  for (var i = 0; i < length-passwordZero; i++) {
    randomPick = Math.floor(Math.random() * 4);
    randomPass += randomPick;
  }

  return randomPass;
}



// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


