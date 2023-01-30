// 1.	Бюджет за филма – реално число в интервала [1.00 … 1000000.00]
// 2.	Брой на статистите – цяло число в интервала [1 … 500]
// 3.	Цена за облекло на един статист – реално число в интервала [1.00 … 1000.00]


function godzillaVsKong(input) {

    let budgetMoney = Number(input[0]);
    let statistCount = Number(input[1]);
    let outfitPrice = Number(input[2]);

    let decorMoney = budgetMoney * 0.10;
    let sumOutfit = statistCount * outfitPrice;

    if (statistCount >= 150) {
        sumOutfit = sumOutfit * 0.90;
    }

    let finalMoney = sumOutfit + decorMoney;

    if (finalMoney > budgetMoney) {
        let neededMoney = finalMoney - budgetMoney;
        console.log("Not enough money!");
        console.log(`Wingard needs ${neededMoney.toFixed(2)} leva more.`);
    } else if (budgetMoney >= finalMoney) {
        let leftMoney = budgetMoney - finalMoney;
        console.log("Action!");
        console.log(`Wingard starts filming with ${leftMoney.toFixed(2)} leva left.`);
    }

}

godzillaVsKong(["20000",
"120",
"55.5"])








