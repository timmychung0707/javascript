/*
You will be creating a secret passcode for Dino's Lair.

1. Your passcode must take 4 numbers as inputs
2. Store the passcode in a variable
3. Check if the passcode is correct, then display a message

CHALLENGE:
- Create a password that takes one word as input
- The user must have the password AND passcode correct to enter Dino's Lair.

*** Make sure to add some CSS to your passcode page to make it look nice and neat. ***

GOOD LUCK 🤹‍♂️
*/
var num1 = 1
var num2 = 2
var num3 = 3
var num4 = 4

// Button event
function enter(){
    // 1.save the input number
    num1 = document.querySelector('.num1').value;
    num2 = document.querySelector('.num2').value;
    num3 = document.querySelector('.num3').value;
    num4 = document.querySelector('.num4').value;

    // console.log same as document.write
    console.log(num1);
    console.log(num2);
    console.log(num3);
    console.log(num4);

    // 2. Check passcode
    if(num1==1 && num2==2 && num3==3 && num4==4){
        document.querySelector(".inner").innerHTML =
        '<p>you are correct';

    }else{
        document.querySelector(".inner").innerHTML =
        '<p>please try again';
    }
}
