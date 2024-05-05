//Task 1
function upperCase(word){
   var isUpperCase = word[0].toUpperCase()==word[0];
   if(isUpperCase){
      console.log("String's starts with uppercase character");
   }else{
      console.log("String's not starts with uppercase character ");
   }
}

upperCase('regexp');
upperCase('RegExp');

//Task 2
function checkEmail(email){
   console.log(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email));
}
checkEmail("Qmail2@gmail.com");

//Task 3
let str = 'cdbBdbsbz';
let matches = str.match(/d(b+)(d)/i);
console.log(matches.slice(1));

//Task 4
let input = "Java Script"
let output = input.replace(/(\w+)\s(\w+)/, "$2, $1");
console.log(output);

//Task 5
function validateCreditCardNumber(cardNumber){
   console.log((/^\d{4}-\d{4}-\d{4}-\d{4}$/).test(cardNumber));
}
validateCreditCardNumber("9999-9999-9999-9999");

//Task 6
function validateEmailFormat(email) {
   const regex = /^[a-zA-Z0-9](?!.*[-]{2,})[a-zA-Z0-9_-]*@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
   if(regex.test(email)){
      console.log("Email is correct!");
   }else{
      console.log("Email is not correct!");
   }
}

validateEmailFormat('my_mail@gmail.com'); // true
validateEmailFormat('#my_mail@gmail.com'); // false
validateEmailFormat('my_ma--il@gmail.com'); // false

//Task 7
function validateLogin(login) {
   var numbers = login.match(/\d+(\.\d+)?/g);
   const validLength = login.length >= 2 && login.length <= 10;
   const containsValidChars = /^[a-zA-Z0-9]+$/.test(login);
   const validLogin = validLength && containsValidChars && numbers !== null;
   
   return [validLogin, numbers];
}

console.log(validateLogin('ee1.1ret3'));
console.log(validateLogin('ee1*1ret3'));