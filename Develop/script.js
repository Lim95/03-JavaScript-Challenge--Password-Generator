// Assignment code here
var USER_PASSWORD_TYPE_LOWER_CASE = 0;
var USER_PASSWORD_TYPE_UPPER_CASE = 1;
var USER_PASSWORD_TYPE_NUMERIC = 2;
var USER_PASSWORD_TYPE_SPEICAL_CHARACTERS = 3;

var generatePassword = function() {
  var userPasswordLength = getPasswordLength();
  var userPasswordType = getPasswordCharacterTypes();
  var userPasswordRandomString = "";
  var aValidPasswordType = [];
  var iValidPasswordType = 0;
  for (var i = 0; i < userPasswordType.length; i++) { 
    if(userPasswordType[i]) {
      aValidPasswordType.push(i);
    }
  }
  
  for (var j = 0; j < userPasswordLength; j++){
    iValidPasswordType = aValidPasswordType[Math.floor(Math.random()*aValidPasswordType.length)];
    userPasswordRandomString += getRandomCharacter(iValidPasswordType);
  }

  return userPasswordRandomString;
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function checkCharacterTypes(characterTypes) {
  return !characterTypes;
};

function getPasswordCharacterTypes() {
  var passwordLowercase = window.confirm("Lowercase?");
  var passwordUppercase = window.confirm("Uppercase?");
  var passwordNumeric = window.confirm("Numeric?");
  var passwordSpecial = window.confirm("Special Characters??");
  var passwordTypes = [passwordLowercase, passwordUppercase, passwordNumeric, passwordSpecial];
  
  if (passwordTypes.every(checkCharacterTypes)) {
    window.alert("Please select at least one character type");
    getPasswordCharacterTypes();
  }
  return passwordTypes;
};



function getPasswordLength() {
  var minPasswordLength = 8;
  var maxPasswordLength = 128;
  var userPasswordLength = window.prompt("Choose a number for your password that is at least 8 characters and no more than 128 characters");
  if (userPasswordLength < minPasswordLength || userPasswordLength > maxPasswordLength || isNaN(userPasswordLength)){
    window.alert("Invalid input. Please try again!");
    return getPasswordLength();
  }
  return userPasswordLength
};

//lowercase numbers :26
//number: 10
//special: 33

function getRandomCharacter(passwordCharacters) {
  var randomNumber = 0;
  switch(passwordCharacters) {
    case USER_PASSWORD_TYPE_LOWER_CASE:
      randomNumber = Math.floor(Math.random()*26) + 97;
      randomCharacter = String.fromCharCode(randomNumber);
      break;
    case USER_PASSWORD_TYPE_UPPER_CASE:
      randomNumber = Math.floor(Math.random()*26) + 65;
      randomCharacter = String.fromCharCode(randomNumber);
      break;
    case USER_PASSWORD_TYPE_NUMERIC:
      randomNumber = Math.floor(Math.random()*10) + 48;
      randomCharacter = String.fromCharCode(randomNumber);
      break;
    case USER_PASSWORD_TYPE_SPEICAL_CHARACTERS:
      randomNumber = Math.floor(Math.random()*33);
      if (randomNumber <= 15) {
        randomNumber += 32;
      }
      else if (randomNumber <= 22) {
        randomNumber += (58-16);
      }
      else if (randomNumber <= 28) {
        randomNumber += (91-23);
      }
      else {
        randomNumber += (123-29);
      }
      randomCharacter = String.fromCharCode(randomNumber);
      break;
    default:
      break;  
  }
  return randomCharacter;
};
