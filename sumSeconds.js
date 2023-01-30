function sumSeconds(input) {
    let firstCompetitor = Number(input[0]);
    let secondCompetitor = Number(input[1]);
    let thirdCompetitor = Number(input[2]);

    let totalSumSeconds = firstCompetitor + secondCompetitor + thirdCompetitor;

    let minutes = Math.floor(totalSumSeconds / 60);
    let seconds = totalSumSeconds % 60;

    if (seconds < 10) {
        console.log(`${minutes}:0${seconds}`);
    } else {
        console.log(`${minutes}:${seconds}`);
    }

}

sumSeconds(["35", "45", "44"])
