// This function select a random person to pay the bill
function whosPaying(names) {
    var names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"]
    var numberOfPeople = names.length;
    var randomPosition = Math.floor(Math.random() * numberOfPeople);
    var randomPerson = names[randomPosition];

    return randomPerson + " is going to pay the lunch today!"
    }

console.log(whosPaying());