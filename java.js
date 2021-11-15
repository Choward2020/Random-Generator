const password = document.getElementById('password');
const button = document.getElementById('generate');



var characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+{}:"<>?|';
var passwordlength = 8;
var passwordValue = '';


var writePassword = () => {
  passwordValue = '';

  for (var i = 0; i < passwordlength; i++) {
    var number = Math.floor(Math.random() * characters.length);
    passwordValue += characters.substring(number, number + 1)
  }

  password.value = passwordValue;
}

 button.addEventListener('click', writePassword);
