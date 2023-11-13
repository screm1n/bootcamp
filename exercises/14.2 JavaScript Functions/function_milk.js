function getMilk(cash) {
    return "You can buy " + Math.floor(cash * 3) + " bottles of milk with " + cash + " dollars.";
}

console.log(getMilk(15.9));