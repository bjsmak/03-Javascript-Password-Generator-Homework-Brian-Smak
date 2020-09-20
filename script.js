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



// Functions

/*function numberRandom() {
  return +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  console.log(numberRandom);
}

function lowerCaseRandom() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function upperCaseRandom() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function specialCharRandom() {
  var specialChar = '!@#$%^&*<>~'
  return specialChar[Math.floor(Math.random() * specialChar.length)]
}****/

 // Start variables

 var promptLength = prompt("Please specify password length");
 var upper = "ABCDEFHGIJKLMNOPQRSTUVWXYZ";
 var lower = "abcdefghijklmnopqrstuvwxyz";
 var number = "0123456789";
 var specialChar = "!@#$%^&*()_-=+[]{}";
 var initialPass = '';


 //Conditionals

 if (promptLength >= 8 && promptLength <= 128) {

   var promptUpper = confirm("Would you like to include Uppercase Letters?");
   var promptLower = confirm("Would you like to include Lowercase Letters?");
   var promptNum = confirm("Would you like to include Numbers?");
   var promptSpecChar = confirm("Would you like to include Special Characters?");

   if (promptUpper === true) {
      initialPass += upper;
   }
   if (promptLower === true) {
      initialPass += lower;
    }
    if (promptNum === true) {
      initialPass += number;    
    }
    if (promptSpecChar === true) {
      initialPass += specialChar;    
  }
  
  
  if (promptUpper !== true && promptLower !== true && promptNum !== true && promptSpecChar !== true){ alert('You must choose at least one type of condition!');}

 }

 else {alert('Please specify between a number between 8 and 128 characters');}



