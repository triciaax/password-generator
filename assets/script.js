function generatePassword () {

//length of at least 8 characters and no more than 128 characters
var passwordLength = prompt ("How many characters do you want to (must select between 8-128 characters)?")
if (passwordLength < 8 || passwordLength > 128) {
    alert("Password must between 8 and 128 characters");
    return;
}
//ask to include which character types: lowercase, uppercase, numeric, and/or special characters
var lowercase = confirm ("Would you like to include lowercase characters (press OK for yes or cancel for no)?")
var uppercase = confirm ("Would you like to include uppercase characters (press OK for yes or cancel for no)?")
var numeric = confirm ("Would you like to include numeric characters (press OK for yes)?")
var special = confirm ("Would you like to include special characters (press OK for yes)?")
//one character type must be included. It should be validated and at least one character type should be selected
if (!lowercase && !uppercase && !numeric && !special) {
    alert("You must select at least one character type.")
}

//if everything is validated, then generate password matching the criteria
var password = "";
var possible = "";
if (lowercase) {
    possible += "abcdefghijklmnopqrstuvwxyz";
}

if (uppercase) {
    possible += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
}

if (numeric) {
    possible += "0123456789";
}

if (special) {
    possible += "~!@#$%^&*?._";
}

//This is a loop that adds a random character based the selections. The loop will continue looping until it meets the length requirement.
for (var i = 0; i < passwordLength; i++) {
    // math.random returns a random number between 0 and 1. Multiplying by possible length.
    // math.floor rounds the number down. It is important to round down because we can not get a number equal to possible.length.
    password += possible.charAt(Math.floor(Math.random() * possible.length));
}

//the password will is stored as the password variable
document.getElementById("password").innerHTML = password;
}