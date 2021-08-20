// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberChar = "0123456789";
var specialChar = "!@#$%^&*()_-+={}[];:'`~<,>.?/|"
var passwordLength;
var uppercaseCheck;
var numberCheck;
var specialCheck;

//First Function
function determineLength(){
  passwordLength = prompt("Choose how many characters long you'd like your password to be (between 8-128 characters): ");

    if (passwordLength<8){
      alert("Password length must be a number between 8-128 characters");
      determineLength();
    }else if (passwordLength>128){
      alert("Password length must be a number between 8-128 characters");
      determineLength();
    }else if (isNaN(passwordLength)){
      alert("Password length must be a number between 8-128 characters");
      determineLength();
    return passwordLength;
}

function determineUppercase(){
  uppercaseCheck = prompt("Do you want to include uppercase letters in your password? \n(Yes or No)");
    uppercaseCheck = uppercaseCheck.toLowerCase();

    if (uppercaseCheck === null || uppercaseCheck === ""){
      alert("Yes or No");
      determineUppercase();

    }else if (uppercaseCheck === "yes" || uppercaseCheck ==="y"){
      uppercaseCheck = true;
      return uppercaseCheck;

    }else if (uppercaseCheck === "no" || uppercaseCheck ==="n"){
      uppercaseCheck = false;
      return uppercaseCheck;
    
    }else {
      alert("Yes or No");
      determineUppercase();
    }
    return uppercaseCheck;
}

// Write password to the #password input
function writePassword() {
  var password1 = "";
  password1 = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password1;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);