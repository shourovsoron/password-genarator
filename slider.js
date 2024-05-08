
const display = document.getElementById("display");
const uppercase = "ABCDEFGHIJKLMNOPQUSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const character = "!@#$%^&*()-_+=/*~{[]}"

const allchar = uppercase + lowercase + number + character;
let password = "";
const leanth = 12;

function generatePass(){
    password = "";
    password += uppercase[Math.floor(Math.random() * uppercase.length)];
    password += lowercase[Math.floor(Math.random() * lowercase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += character[Math.floor(Math.random() * character.length)];
    while(password.length<leanth){
        password += allchar[Math.floor(Math.random() * allchar.length)];
    }
    display.value = password;
}

function copypass(){
    if(!password.length==0){
        display.select();
        document.execCommand("copy");
        display.value = password + " Copied!";

    }
}

