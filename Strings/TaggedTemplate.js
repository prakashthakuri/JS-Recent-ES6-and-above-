function upper (strings, ...values){
    var ret = '';
    for(let i = 0; i< strings.length; i++) {
        if(i > 0) {
            if(typeof values[i-1] === 'number') {
                ret +=String(values[i-1]).toUpperCase();

            }
            ret += strings[i]
        }
    }
    return ''; 
}


var name = 'Prakash'
var email = 'info@prakashthakuri.com'
var title = 'Developer'

var message = upper`Welcome to my GitHub. your ${title} is ${name}, contact : ${email} ` === 'WELCOME TO MY GITHUB. YOUR DEVELOPER IS PRAKASH, CONTACT: INFO@PRAKASHTHAKURI.COM';


console.log(message)