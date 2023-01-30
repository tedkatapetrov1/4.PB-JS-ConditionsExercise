function bonusScore(input) {
    let firstPoints = Number(input[0]);
    let bonus = 0

    if (firstPoints <= 100) {
        bonus = 5;
    } else if (firstPoints <= 1000) {
        bonus = firstPoints * 0.20;
    } else {
        bonus = firstPoints * 0.10;
    }

    if (firstPoints % 2 === 0) {
        bonus = bonus + 1;

    } else if (firstPoints % 10 === 5) {
        bonus = bonus + 2;

    }

    console.log(bonus);
    console.log(firstPoints + bonus);
}

bonusScore(["999"])