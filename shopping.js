// 1.	Бюджетът на Петър - реално число в интервала [0.0…100000.0]
// 2.	Броят видеокарти - цяло число в интервала [0…100]
// 3.	Броят процесори - цяло число в интервала [0…100]
// 4.	Броят рам памет - цяло число в интервала [0…100]



function shopping(input) {
    let peterBudget = Number(input[0]);
    let videoCards = Number(input[1]);
    let procesorsCount = Number(input[2]);
    let ramMemory = Number(input[3]);

    let videoCardsSum = videoCards * 250;
    let procesorSum = videoCardsSum * 0.35;
    let procesorTotal = procesorSum * procesorsCount;
    let ramMemorySum = videoCardsSum * 0.10;
    let ramMemoryTotal = ramMemorySum * ramMemory;


    let totalSum = videoCardsSum + procesorTotal + ramMemoryTotal;

    if(videoCards > procesorsCount){
        totalSum = totalSum * 0.85;
    }

    if(totalSum <= peterBudget){
        let leftMoney = peterBudget - totalSum;
        console.log(`You have ${leftMoney.toFixed(2)} leva left!`)
    } else if(peterBudget < totalSum) {
        let neededMoney = totalSum - peterBudget;
        console.log(`Not enough money! You need ${neededMoney.toFixed(2)} leva more!`);
    }

}

shopping(["900", "2", "1", "3"])


