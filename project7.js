/*
Welcome to Dino's Looping Challenge of Doom!
You will need to create 4 loops for this challenge

1. Create a loop that writes "I love homework" 5 times
2. Create a loop that counts from 0 to 4 and writes the current number on the screen.
3. Create a loop that counts from 15 to 30 but only writes multiples of 3 on the screen
4. Create a loop that will draw 4X4 square using ⬜. ONLY PRINT 1 ⬜ at a time. Your loops should do the rest. It should look like this:
⬜⬜⬜⬜
⬜⬜⬜⬜
⬜⬜⬜⬜
⬜⬜⬜⬜
document.write("⬜⬜⬜⬜") (X) <-- don't do this)
(HINT: Loops can be nested inside another loop)


CHALLENGE:
5. Dino is a very neat and organized dinosaur. He likes to stack the bones (🦴) of his victims in a nice pyramid shape. Create a stack that is 7 bones high.

- You will need to create a loop writes 1 🦴, and every successive line adds one more bone. It should look like this:

      🦴
     🦴🦴
    🦴🦴🦴
   🦴🦴🦴🦴
  🦴🦴🦴🦴🦴
 🦴🦴🦴🦴🦴🦴
🦴🦴🦴🦴🦴🦴🦴

HINT: Loops can be nested inside another loop

GOOD LUCK 🤹‍♂️
*/
var counter = 0;
var num = 1;

while(counter<5){
      document.write("I love homework <br>");
      counter++;
  }

  for (var i=0; i<5, i++;){
     document.write("+ <br>")
 }

 document.write("2.<br>");

for (var i=0; i<5; i++){
    document.write(i+"  ");
}
document.write("<br>");

document.write("3.<br>");

for (var i=15; i<=30; i++){
    if(i%3 === 0) {//If statementt nested inside of a FOR LOOP
        document.write(i+"  ");
    }
}
document.write("<br>");

document.write("4.<br>");
var counter= 0;
var stuff=1;

while (stuff <5){
    while (counter <4){
        document.write("⬜");
        counter++;
    }
    counter = 0;
    document.write("<br>");
    stuff++;
}
