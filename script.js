  
var generatePassword = function() {
  //Set variables as containers for character types
  var length = Number(prompt("Please specify password length"));
  //console.log(length);

  //Function array for random numbers
  //Variables
    var num = ['1','2','3','4','5','6','7','8','9','0'];
    var lower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    var upper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    var spec = ['!','@','#','$','%','^','&','*','(',')','<','>'];

  if (length >= 8 && length <= 128) {

  //If number selection is true then continue with prompts
  var promptUpper = confirm("Would you like to include Uppercase Letters?");
  var promptLower = confirm("Would you like to include Lowercase Letters?");
  var promptNum = confirm("Would you like to include Numbers?");
  var promptSpecChar = confirm("Would you like to include Special Characters?");

    } else {alert('Please specify between a number between 8 and 128 characters');}

  if (promptUpper !== true && promptLower !== true && promptNum !== true && promptSpecChar !== true) { alert('You must choose at least one type of condition!'); }
    //Concats arrays based on user selection.
      var randomPass =[];
    if (promptLower === true) {
      randomPass = randomPass.concat(lower);
    }
    if (promptUpper === true) {
      randomPass = randomPass.concat(upper);
    }
    
    if (promptNum === true) {
      randomPass = randomPass.concat(num);
    }
    
    if (promptSpecChar === true) {
      randomPass = randomPass.concat(spec);
    }

        

  //console.log(randomPass);
  console.log(length);
  passwordFinal = [];
  for (let i = 0; i < length; i++) {
    //FOR LOOP TO ADD RANDOM NUMBER FROM ARRAY BASED ON IF/ELSE CONDITIONALS, PUSH TO ARRAY AND JOIN TO STRING
    randomPass.join('');
    randomNum = randomPass[Math.floor(Math.random() * (randomPass.length-1))];
    console.log(randomNum);
    passwordFinal.push(randomNum);
    //console.log(passwordFinal);
    
  }
  console.log(passwordFinal);
  return passwordFinal.join("");
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


