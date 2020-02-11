// LOOPS allow us to repeat something over and over again

var counter = 0; // counts or keeps track of how many repeats
var score = 5;

// WHILE LOOPs
// Syntax:
// while (something is true) {do some code}

while (counter < score) {
    document.write("while loops!<br>");
    counter++;
}

// FOR LOOPs are a shorter way of writing WHILE LOOPs
// Syntax:
// for (declare var, set condition, increment/decrement) {do some code}

// 'i' is our counter

for (var i=0; i<3; i++) {
    document.write("for loops!<br>");
}

// counter does not have to start at 0
for (var i=2; i<=10; i++) {
    if (i%2 === 0) { // IF statement nested inside of a FOR LOOP
        document.write(i);
    }
}