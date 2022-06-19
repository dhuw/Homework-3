// // Assignment Code
// var generateBtn = document.querySelector("#generate");

// // defining available characters as var
// var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
// var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
// var numbers = '0123456789';
// var specialChar  = '~`!@#$%^&*()_-+={[}]|\:';
// var chosenChar = "";

// // write password to the #password input
// function enterpassword() {
//   var password = genratepassword;
//   var passwordText = document.querySelector("#password");
//   passwordText.value = password;
// }

// //write password function 
// function writePassword(){
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");
//   passwordText.value = password;
// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword)

// //generate password function gets called in writePassword function, and it should return the final password
// function generatePassword(){
//   //do random generation here and return the final password in the end
//   var result = "";
//   //character limit for password
//   var length = prompt("How many characters in your random password? (between 8 and 128)");
//   if(isNaN(length)){
//     alert("You must input a number!");
//     return generatePassword()
//   }
//   if(length<8 || length> 128){
//     alert("Please choose numbers between 8 - 128!");
//     return generatePassword()
//   }
//   //user input for character types
//   //confirm used as a boolean
//   var hasUpper = confirm("Shall your password have uppercase letters?");
//   if(hasUpper === true) {
//     chosenCharacters = chosenCharacters.concat(upper)
//   }
//   var hasLower = confirm("Shall your password have lowercase letters?");
//   if(hasLower === true) {
//     chosenCharacters = chosenCharacters.concat(lower)
//   }
//   var hasNumbers = confirm("Shall your password have numbers?");
//   if(hasNumbers === true) {
//     chosenCharacters = chosenCharacters.concat(numbers)
//   }
//   var hasSpecial = confirm("Shall your password have special characters?");
//   if(hasSpecial === true) {
//     chosenCharacters = chosenCharacters.concat(special)
//   }
// // At least one boolean must be true to generate password
//   if(!hasUpper&&!hasLower&&!hasNumbers&&!hasSpecial){
//     alert("You must at least choose 1 character type!");
//     return generatePassword()
//   }

// for (var i = 0; i < length; i++) {
//   result += chosenCharacters.charAt(Math.floor(Math.random() * chosenCharacters.length));
// }
// return result;

// }

// resubmitted code 
// default code
var generateBtn = document.querySelector("#generate");

//write password function 
function writePassword(){
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function eraseText(){
  document.getElementById("password").value = "";
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)

//==================end of default=====================================
//defining global var
var lowercase = 'abcdefghijklmnopqrstuvwxyz'
var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
var number = '1234567890'
var special = '!@#$%^&*()'
var newPass = ''

//generate password function gets called in writePassword function, and it should return the final password
function generatePassword(){

    //blank array that will be the final password that is appended and shown to user
    var chosenPassword = ''

    //password length function
    var passwordLength = prompt('How long would you like your password to be? (must be between 8 and 128 characters)')
    if (passwordLength < 8 || passwordLength > 128) {
        alert('Must be between 8 and 128 characters!')
        return generatePassword();
    }
    //if boolean statements
    var hasUpper = confirm('Would you like your passwords to have uppercase characters?')
      if (hasUpper === true) {
        chosenPassword = uppercase.concat(chosenPassword);
      }
    var hasLower = confirm('Would you like your passwords to have lowercase characters?')
      if (hasLower === true) {
        chosenPassword = lowercase.concat(chosenPassword);
      }
    var hasNumber = confirm('Would you like your passwords to have numbers?')
      if (hasNumber === true) {
        chosenPassword = number.concat(chosenPassword);
      }
    var hasSpecial = confirm('Would you like your passwords to have special characters?')
      if (hasSpecial === true) {
        chosenPassword = special.concat(chosenPassword);
      }
    //failsafe for no user info given
    if (!passwordLength || !hasLower && !hasUpper && !hasNumber && !hasSpecial) {
      alert('Must provide some info to be contained in your password!')
    }

    //selecting rand function for chosenPass string
    for (var i = 0; i < passwordLength; i++) {
      newPass += chosenPassword.charAt(Math.floor(Math.random() * chosenPassword.length)) 
    }
  return newPass;


}

console.log(newPass);
