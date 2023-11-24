// List to check if youre invited or not.

let guestList = ["Angela", "James", "Pam", "Jack", "Lara", "Jason"];

function nameCheck(name) {
    if(guestList.includes(name)) {
        return "Welcome!";
    } else {
        return "Sorry, you're not invited."
    }
}
console.log(nameCheck("Angela"));