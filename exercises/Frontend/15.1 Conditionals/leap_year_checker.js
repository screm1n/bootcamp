function leapYearChecker(year) {
    if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
        return year + ' is a Leap year.';
    } else {
        return year + ' is not a leap year.';
    }
}

console.log(leapYearChecker(2023));