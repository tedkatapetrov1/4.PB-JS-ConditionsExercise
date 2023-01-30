// 1.	Цена на екскурзията - реално число в интервала [1.00 … 10000.00]
// 2.	Брой пъзели - цяло число в интервала [0… 1000]
// 3.	Брой говорещи кукли - цяло число в интервала [0 … 1000]
// 4.	Брой плюшени мечета - цяло число в интервала [0 … 1000]
// 5.	Брой миньони - цяло число в интервала [0 … 1000]
// 6.	Брой камиончета - цяло число в интервала [0 … 1000]

function toyShop(input) {
    let priceExcursion = Number(input[0]);
    let puzzleCount = Number(input[1]);
    let talkingDolls = Number(input[2]);
    let bearsCount = Number(input[3]);
    let minionsCount = Number(input[4]);
    let trucksCount = Number(input[5]);

    let toysCount = puzzleCount + talkingDolls + bearsCount + minionsCount + trucksCount;
    let totalSum = puzzleCount * 2.60 + talkingDolls * 3 + bearsCount * 4.10 + minionsCount * 8.20 + trucksCount * 2;

    if (toysCount >= 50) {
        totalSum = totalSum * 0.75;
    }

    let finalSum = totalSum * 0.90;
     
    if (finalSum >= priceExcursion) {
        let moneyLeft = finalSum - priceExcursion;
        console.log(`Yes! ${moneyLeft.toFixed(2)} lv left.`);
    } else if (priceExcursion > finalSum) {
        let moneyNeeded = priceExcursion - finalSum;
        console.log(`Not enough money! ${moneyNeeded.toFixed(2)} lv needed.`);
    }
}

toyShop(["320", "8", "2", "5", "5", "1"])


