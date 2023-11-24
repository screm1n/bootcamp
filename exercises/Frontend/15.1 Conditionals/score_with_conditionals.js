function loveKanye() {
var loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1;

    if (loveScore >= 90) {
       return 'Your love score is ' + loveScore + '%.' + ' You love each other like Kanye loves Kanye.';
    } else {
        return 'Your love score is ' + loveScore + '%.';
    }
}

console.log(loveKanye());