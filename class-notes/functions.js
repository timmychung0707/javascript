

function askName() {
    var name = prompt("what's is your name?");
    document.write(name + '<br>');
};

function askAge() {
    var age = prompt("what's your age?")
    document.write(age + "<br>");
    if (age >= 18) {
        document.write("you can drink wine <br>");
    } else {
        document.write("you can drink grape juice <br>")
    }
};

askName();
askName();
askAge();
askAge();